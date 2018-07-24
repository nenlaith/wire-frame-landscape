import math from "mathjs";

export default class Point {
  constructor(x, y, _amplitudeFunc) {
    this.position = null;
    this.absolutePosition = null;
    this.absolutePositionObject = null;
    this.x = x;
    this.y = y;
    this.getMagnitude = _amplitudeFunc(this.x, this.y);
  }

  setAmplitude(_amplitudeFunc) {
    this.getMagnitude = _amplitudeFunc(this.x, this.y);
  }

  setRawPosition(_position) {
    this.position = _position;
    this.absolutePosition = null;
  }

  calculateAbsolutePosition(_rotation, _deviation) {
    let vec = math.subset(this.position, math.index(2, 0), this.getMagnitude());
    vec = math.multiply(_rotation.rotationMatrix, vec);
    vec = math.add(vec, _deviation);
    this.absolutePosition = vec;
    this.absolutePositionObject = {
      x: math.subset(this.absolutePosition, math.index(0, 0)),
      y: math.subset(this.absolutePosition, math.index(1, 0)),
      z: math.subset(this.absolutePosition, math.index(2, 0))
    };
  }

  get X() {
    return this.absolutePositionObject == null ? NaN : this.absolutePositionObject.x;
  }

  get Y() {
    return this.absolutePositionObject == null ? NaN : this.absolutePositionObject.y;
  }

  get Z() {
    return this.absolutePositionObject == null ? NaN : this.absolutePositionObject.z;
  }
}
