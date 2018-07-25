import core from 'mathjs/core';
import bignumber from 'mathjs/lib/type/bignumber';
import matrix from 'mathjs/lib/type/matrix';

import index from "mathjs/lib/type/matrix/function/index";
import subset from "mathjs/lib/function/matrix/subset";
import multiply from "mathjs/lib/function/arithmetic/multiply";
import add from "mathjs/lib/function/arithmetic/add";

let math = core.create();
math.import(matrix);
math.import(bignumber);
math.import(index);
math.import(subset);
math.import(multiply);
math.import(add);

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
