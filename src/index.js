import WFL from './wire-frame-landscape.js';
import * as wflAnimation from './animation-functions.js';
import * as wflMagnitude from './animation-functions.js';
// import { startupEnum, randomSawtoothWave } from './magnitude-functions.js';
// import math from 'mathjs';

// let wfl = new WFL("canvas-wrapper", 42);
// wfl.setSplittings(13, 13)
//   .setColors("white", "blue")
//   .setLineWidth(5)
//   .setRotation(math.pi / 7, - math.pi / 7, math.pi / 7.0)
//   .setDimensionsType("FILL", { x: 1, y: 1, multiplier: 2 })
//   .setAmplitudeFunction(randomSawtoothWave(-30, 30, 0.02))
//   .addAnimation(linearSingleRotation("yaw", - math.pi / 4.0, math.pi / 4.0, math.pi / 2.0 / 50000))
//   .addAnimation(linearSingleRotation("roll", 0, math.pi / 10.0, math.pi / 10.0 / 10000))
//   .start();

export {
  WFL,
  wflAnimation,
  wflMagnitude
};
