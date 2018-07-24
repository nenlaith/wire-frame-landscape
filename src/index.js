import WFL from './wire-frame-landscape.js';
import * as Animation from './animation-functions.js';
import * as Magnitude from './magnitude-functions.js';

const create = function (wrapper, framerate = 42) {
  return new WFL(wrapper, framerate);
}

export {
  create,
  Animation,
  Magnitude
};
