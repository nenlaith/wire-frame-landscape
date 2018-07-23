import math from "mathjs";

class Rotation {
  constructor(roll, pitch, yaw) {
    this.roll = roll;
    this.pitch = pitch;
    this.yaw = yaw;

    this.rollMatrix = Rotation.createRollMatrix(this.roll);
    this.pitchMatrix = Rotation.createPitchMatrix(this.pitch);
    this.yawMatrix = Rotation.createYawMatrix(this.yaw);

    this.rotationMatrix = math.multiply(math.multiply(this.yawMatrix, this.pitchMatrix), this.rollMatrix);
  }

  static createRollMatrix(angle) {
    return math.matrix([
      [ 1, 0, 0 ],
      [ 0, math.cos(angle), - math.sin(angle) ],
      [ 0, math.sin(angle), math.cos(angle) ],
    ]);
  }

  static createPitchMatrix(angle) {
    return math.matrix([
      [ math.cos(angle), 0, math.sin(angle) ],
      [ 0, 1, 0 ],
      [ - math.sin(angle), 0, math.cos(angle) ],
    ]);
  }

  static createYawMatrix(angle) {
    return math.matrix([
      [ math.cos(angle), - math.sin(angle), 0 ],
      [ math.sin(angle), math.cos(angle), 0 ],
      [ 0, 0, 1 ]
    ]);
  }
}

export default Rotation;
