class Point {
  constructor() {
    this.position = null;
    this.goal_magnitude = null;
    this.current_magnitude = 0;
    this.getMagnitude = function(x, y, deltaTime) {
      return 0;
    };
  }

  setAmplitude(_amplitude) {
    this.getMagnitude = _amplitude;
  }

  setRawPosition(_position) {
    this.position = _position;
  }

  calculateAbsolutePosition(_rotation, _deviation) {
  }

  calculateRotatedRelativePosition(_rotation) {
    this.originRelativePosition;
    this.rotatedRelativePosition = math.multiply(_rotation.rotationMatrix, this.relativePosition);
  }
}
