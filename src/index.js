import WireFrameLandscape from './wireFrameLandscape.js';
import * as Animation from './animationFunctions.js';
import * as Magnitude from './magnitudeFunctions.js';

const create = function (wrapper, framerate = 42) {
  return new WireFrameLandscape(wrapper, framerate);
}

export {
  create,
  Animation,
  Magnitude
};
// export default WFL;
