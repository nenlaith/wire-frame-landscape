import WFL from './wire-frame-landscape.js';
import { linearSingleRotation } from './animation-functions.js';
import math from 'mathjs';

let wfl = new WFL("canvas-wrapper", 42);

wfl.setSplittings(13, 13)
  .setColors("white", "blue")
  .setLineWidth(5)
  .setRotation(math.pi / 6, - math.pi / 6, math.pi / 6.0)
  .setDimensionsType("FILL", { x: 1, y: 1, multiplier: 1.5 })
  .addAnimation(linearSingleRotation("yaw", 0, math.pi / 2.0, math.pi / 2.0 / 50000))
  .addAnimation(linearSingleRotation("roll", 0, math.pi / 10.0, math.pi / 10.0 / 10000))
  .start();
