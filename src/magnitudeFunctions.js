import WFLErr from './error.js';

export const startupEnum = {
  ZERO: 0,
  RANDOM: 1
}

export const randomSawtoothWave = function (
  amplitude_min = -30, amplitude_max = 30,
  speed = 0.2, startup = startupEnum.RANDOM) {

  if (amplitude_max < amplitude_min) {
    throw new WFLErr("amplitude max inferior to amplitude min")
  }

  function new_magnitude() {
    return Math.random() * (amplitude_max - amplitude_min) + amplitude_min;
  }

  return function (x, y) {
    let magnitude = null, current = null, direction = null, time = null, deltaTime = null;

    return function () {
      if (magnitude == null) {
        magnitude = new_magnitude();
        if (startup == startupEnum.RANDOM) {
          current = new_magnitude();
        } else if (startup == startupEnum.ZERO) {
          current = 0;
        }
        direction = current >= magnitude ? -1 : 1;
        time = Date.now();
      }
      if ((direction > 0 && current >= magnitude)
        || (direction < 0 && current <= magnitude)) {
        magnitude = new_magnitude();
        direction = current >= magnitude ? -1 : 1;
      }
      deltaTime = Date.now() - time;
      current += deltaTime * speed * direction;
      time = Date.now();
      return current;
    };
  };
};

export const sawtoothWave = function (
  amplitude_min = -30, amplitude_max = 30,
  speed = 0.2, startup = startupEnum.RANDOM) {

  if (amplitude_max < amplitude_min) {
    throw new WFLErr("amplitude max inferior to amplitude min")
  }

  return function(x, y) {
    let magnitude = null, current = null, direction = null, time = null, deltaTime = null;

    return function() {
      if (magnitude == null) {
        magnitude = Math.random() > 0.5 ? amplitude_min : amplitude_max;
        if (startup == startupEnum.RANDOM) {
          current = Math.random() * (amplitude_max - amplitude_min) + amplitude_min;
        } else if (startup == startupEnum.ZERO){
          current = 0;
        }
        direction = current >= magnitude ? -1 : 1;
        time = Date.now();
      }
      if ((direction > 0 && current >= magnitude)
        || (direction < 0 && current <= magnitude)) {
        magnitude = magnitude == amplitude_min ? amplitude_max : amplitude_min;
        direction = current >= magnitude ? -1 : 1;
      }

      deltaTime = Date.now() - time;
      current += deltaTime * speed * direction;
      time = Date.now();
      return current;
    };
  };
};
