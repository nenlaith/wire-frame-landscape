# Wire Frame Landscape

## Description

This project is an animation configurable using Html5 canvas. You can change the size, the colors, the animation of the edges and add animations like rotation.

## Installation

you can add it to your project with git

```
$ git clone git@github.com:nenlaith/wire-frame-landscape.git
```

or with npm

```
$ npm install --save wire-frame-landscape
```

## Usage

### Factory

To create a new wire frame, you need to call the `create` with the ID of the canvas wrapper or the `HTMLElement` and a framerate.
```
let wfl = WFL.create("canvas-wrapper", 42);
```

### WFL Object

After creating the instance of a wire frame, it is already set up with default parameters but you can change them to.

#### functions
`setLineWidth(lineWidth: integer)`

`SetColors(backgroundColor: string, wireColor: string)`: the parameters can be html color code (ex: `"#3c003d"`) or HTML color names ( `"white"`, `"blue"` etc... )

`setRotation(roll: float, pitch: float, yaw: float)`

`setDimensions(width: number, height: number)`

`setDimensionsType(type: string, params: object)`: they are only two types: _`STATIC`_ and _`FILL`_. when using _`STATIC`_, you need to set the dimensions with `setDimensions()`. Even if the wrapper's size, the animation will keep the same size.  If you want to use _`FILL`_ you need to provide the params object.
```
params = {
	x: number,
	y: number,
	multiplier: number
}
```

the `multiplier` is used to extend the size of the wire frame.

`setPosition(x: number, y: number)`

`setPositionType(type: string)`: they are only two types: _`STATIC`_ and _`CENTER`_.  When using _`STATIC`_, you need to set the position with `setPosition()`. Even if the wrapper's size, the animation will keep the same position.  the _`CENTER`_ keep automatically the wire frame at the center of the canvas.

### Animations Functions

The library will contain a set of animations which can control the behaviour of rotation, position, colors, dimensions. They are stored in the `WFL.Animation` object.

#### functions
`linearSingleRotation(rotationAxis :string, from: number, to: number, speed: number)`

### Magnitudes Functions

The library will contain a set of animations which can control the behaviour of the edges. They are stored in the `WFL.Magnitude` object.

#### functions

`randomSawtoothWave(amplitude_min: number, amplitude_max: number, speed: number)`

## Example
```
let wfl = WFL.create("canvas-wrapper", 42);
wfl.setSplittings(17, 17)
  .setColors("white", "blue")
  .setLineWidth(5)
  .setRotation(Math.PI / 7, - Math.PI / 7, Math.PI / 7.0)
  .setDimensionsType("FILL", { x: 1, y: 1, multiplier: 2 })
  .setAmplitudeFunction(WFL.Magnitude.randomSawtoothWave(-30, 30, 30 / 1500))
  .addAnimation(WFL.Animation.linearSingleRotation("yaw", - Math.PI / 4.0, Math.PI / 4.0, ( Math.PI / 2.0 ) / 50000))
  .addAnimation(WFL.Animation.linearSingleRotation("roll", 0, Math.PI / 10.0, ( Math.PI / 10.0 ) / 10000))
  .start();
```
