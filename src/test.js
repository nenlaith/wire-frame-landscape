import * as WFL from './index.js';

let wfl = WFL.create("canvas-wrapper", 42);
wfl.setSplittings(17, 17)
  .setColors("white", "blue")
  .setLineWidth(5)
  .setRotation(Math.PI / 7, - Math.PI / 7, Math.PI / 7.0)
  .setDimensionsType("FILL", { x: 1, y: 1, multiplier: 2 })
  .setAmplitudeFunction(WFL.Magnitude.randomSawtoothWave(-30, 30, 0.02))
  .addAnimation(WFL.Animation.linearSingleRotation("yaw", - Math.PI / 4.0, Math.PI / 4.0, Math.PI / 2.0 / 50000))
  .addAnimation(WFL.Animation.linearSingleRotation("roll", 0, Math.PI / 10.0, Math.PI / 10.0 / 10000))
  .start();
