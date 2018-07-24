= Wire Frame Landscape =

== the project ==

This project is an animation using Html5 canvas as support.

== Add to my project ==

you can add it to your project with git

```
$ git clone git@github.com:nenlaith/wire-frame-landscape.git
```

or with npm

```
$ npm install --save wire-frame-landscape
```

== How to use it ==

```
let wfl = new WFL.create("canvas-wrapper", 42);
wfl.setSplittings(17, 17)
  .setColors("white", "blue")
  .setLineWidth(5)
  .setRotation(Math.PI / 7, - Math.PI / 7, Math.PI / 7.0)
  .setDimensionsType("FILL", { x: 1, y: 1, multiplier: 2 })
  .setAmplitudeFunction(WFL.Magnitude.randomSawtoothWave(-30, 30, 0.02))
  .addAnimation(WFL.Animation.linearSingleRotation("yaw", - Math.PI / 4.0, Math.PI / 4.0, Math.PI / 2.0 / 50000))
  .addAnimation(WFL.Animation.linearSingleRotation("roll", 0, Math.PI / 10.0, Math.PI / 10.0 / 10000))
  .start();
```
