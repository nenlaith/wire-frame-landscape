import core from 'mathjs/core';
import matrix from 'mathjs/lib/type/matrix';
import multiply from "mathjs/lib/function/arithmetic/multiply";

let math = core.create();
math.import(matrix);
math.import(multiply);

class Rotation {
  constructor(roll, pitch, yaw) {
    this.roll = roll;
    this.pitch = pitch;
    this.yaw = yaw;

    this.createMatrix();
  }

  add(roll, pitch, yaw) {
    this.roll += roll;
    this.pitch += pitch;
    this.yaw += yaw;

    this.createMatrix();
  }

  createMatrix() {
    this.rollMatrix = Rotation.createRollMatrix(this.roll);
    this.pitchMatrix = Rotation.createPitchMatrix(this.pitch);
    this.yawMatrix = Rotation.createYawMatrix(this.yaw);

    this.rotationMatrix = math.multiply(math.multiply(this.yawMatrix, this.pitchMatrix), this.rollMatrix);
  }

  static createRollMatrix(angle) {
    return math.matrix([
      [ 1, 0, 0 ],
      [ 0, Math.cos(angle), - Math.sin(angle) ],
      [ 0, Math.sin(angle), Math.cos(angle) ],
    ]);
  }

  static createPitchMatrix(angle) {
    return math.matrix([
      [ Math.cos(angle), 0, Math.sin(angle) ],
      [ 0, 1, 0 ],
      [ - Math.sin(angle), 0, Math.cos(angle) ],
    ]);
  }

  static createYawMatrix(angle) {
    return math.matrix([
      [ Math.cos(angle), - Math.sin(angle), 0 ],
      [ Math.sin(angle), Math.cos(angle), 0 ],
      [ 0, 0, 1 ]
    ]);
  }
}

export default Rotation;
