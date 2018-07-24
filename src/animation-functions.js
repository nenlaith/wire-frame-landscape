import math from "mathjs";

export const linearSingleRotation = function (type, from, to, speed = 0.02) {
  let acc = from, current = from, direction = to >= from ? 1 : -1, min, max;

  if (to >= from) {
    min = from;
    max = to;
  } else {
    min = to;
    max = from;
  }

  return function (wfl, deltaTime) {
    if (direction > 0 && acc >= max) {
      direction = -1;
    } else if (direction < 0 && acc <= min) {
      direction = 1;
    }
    current = deltaTime * speed * direction;
    acc += current;
    // console.log(" direction " + direction + " acc " + acc + " min " + min + " max " + max);
    wfl.addRotation(
      type === "roll" ? current : 0,
      type === "pitch" ? current : 0,
      type === "yaw" ? current : 0
    );
    return current;
  };
}
