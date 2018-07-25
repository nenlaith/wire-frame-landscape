import core from 'mathjs/core';
import matrix from 'mathjs/lib/type/matrix';
import Point from './point.js';
import Rotation from './rotation.js';
import WFLErr from './error.js';
import ResizeSensor from './resizeSensor.js';
import {
  startupEnum,
  randomSawtoothWave
} from './magnitudeFunctions.js';

let math = core.create();
math.import(matrix);

class WireFrameLandscape {

  constructor(wrapper, framerate = 42) {
    if (typeof(wrapper) === "undefined") {
      throw new WFLErr("no wrapper given");
    } else if (typeof(wrapper) === "string") {
      this.wrapper = document.getElementById(wrapper);
      if (this.wrapper == null) {
        throw new WFLErr("wrong wrapper ID");
      }
    } else {
      this.wrapper = wrapper;
    }
    this.framerate = framerate;
    this.canvas = document.createElement("CANVAS");
    this.wrapper.appendChild(this.canvas);
    this.wrapper.style.overflow = "hidden";
    this.context = this.canvas.getContext("2d");
    this.setColors("white", "blue");
    this.setLineWidth(5);
    this.refreshParamsCanvas();
    this.animations = [];

    this.amplitudeFunc = randomSawtoothWave(-30, 30, 0.02, startupEnum.RANDOM);
    this.setPositionType("CENTER");
    this.setDimensionsType("FILL", { x: 5, y: 5, multiplier: 1.2 });
    this.rotation = new Rotation(0, 0, 0);
    this.setSplittings(9);

    const $this = this;

    ResizeSensor.create(this.wrapper, function () {
      const WIDTH = $this.getWidth();
      const HEIGHT = $this.getHeight();

      $this.refreshParamsCanvas();

      if ($this.positionType == "CENTER" ) {
        $this.setPosition();
      }
      if ($this.dimensionsType = "FILL") {
        $this.setDimensions();
      }
    });
  }

  display() {
    this.context.fillRect(0, 0, this.getWidth(), this.getHeight());
    for (let x = 0; x < this.splittings.x; ++x) {
      this.context.beginPath();
      this.context.moveTo(this.points[x][0].X, this.points[x][0].Y);
      for (let y = 1; y < this.splittings.y; ++y) {
        this.context.lineTo(this.points[x][y].X, this.points[x][y].Y);
      }
      this.context.stroke();
    }

    for (let y = 0; y < this.splittings.y; ++y) {
      this.context.beginPath();
      this.context.moveTo(this.points[0][y].X, this.points[0][y].Y);
      for (let x = 1; x < this.splittings.x; ++x) {
        this.context.lineTo(this.points[x][y].X, this.points[x][y].Y);
      }
      this.context.stroke();
    }
  }

  start() {
    const checkup = [ "dimensions", "position", "splittings" ];
    for (let i = 0; i < checkup.length; ++i) {
      if (this[checkup[i]] == null) {
        throw new WFLErr(checkup[i] + " not specified");
      }
    }
    this.createPoints();

    const $this = this;
    let time = 0, deltaTime;

    setInterval(function () {
      if (time == 0) {
        time = Date.now();
        deltaTime = 0;
      } else {
        deltaTime = Date.now() - time;
        time = Date.now();
      }
      $this.animations.forEach(function (func) {
        func($this, deltaTime);
      });
      if ($this.changed == 1) {
        $this.processPoints();
        $this.display();
        $this.changed = 0;
      }
    }, this.framerate);
  }

  setPositionType(type) {
    if (typeof(type) !== "string" || (type !== "CENTER" && type !== "STATIC")) {
      throw new WFLErr("wrong setPositionType parameters");
    }
    this.positionType = type;
    if (this.positionType === "CENTER") {
      const WIDTH = this.getWidth();
      const HEIGHT = this.getHeight();
      this.setPosition(WIDTH / 2.0, HEIGHT / 2.0);
    }
    return this;
  }

  setPosition(x, y) {
    if (this.positionType == "CENTER") {
      this.position = {
        x: this.getWidth() / 2.0,
        y: this.getHeight() / 2.0
      };
    } else {
      if (typeof(x) !== "number" || typeof(y) !== "number") {
        throw new WFLErr("wrong type parameters setPosition");
      }
      this.position = {
        x: x,
        y: y
      };
    }
    this.positionMatrix = math.matrix([ [ this.position.x ], [ this.position.y ], [ 0 ] ]);
    this.changed = 1;
    return this;
  }

  setRotation(roll, pitch, yaw) {
    if (typeof(roll) !== "number" || typeof(pitch) !== "number" || typeof(yaw) !== "number") {
      throw new WFLErr("wrong type parameters setRotation");
    }
    this.rotation = new Rotation(roll, pitch, yaw);
    this.changed = 1;
    return this;
  }

  addRotation(roll, pitch, yaw) {
    if (typeof(roll) !== "number" || typeof(pitch) !== "number" || typeof(yaw) !== "number") {
      throw new WFLErr("wrong type parameters addRotation");
    }
    this.rotation.add(roll, pitch, yaw);
    this.changed = 1;
  }

  setDimensionsType(type, params) {
    if (typeof(type) !== "string" || (type != "FILL" && type != "STATIC")) {
      throw new WFLErr("wrong setDimensionsType parameters");
    }
    this.dimensionsType = type;
    if (type === "FILL") {
      if (typeof(params) !== "object" || typeof(params.x) !== "number" || typeof(params.y) !== "number") {
        throw new WFLErr("wrong setDimensionsType params")
      }
      this.dimensions = params;
      this.setDimensions();
    }
    return this;
  }

  setDimensions(columns, rows) {
    if (this.dimensionsType === "FILL") {
      const WIDTH = this.getWidth();
      const HEIGHT = this.getHeight();
      const d_x = this.dimensions.x / WIDTH;
      const d_y = this.dimensions.y / HEIGHT;
      const alpha = (d_x <= d_y ? WIDTH / this.dimensions.x : HEIGHT / this.dimensions.y) * this.dimensions.multiplier;

      this.dimensions = Object.assign({}, this.dimensions, {
        x : this.dimensions.x * alpha,
        y: this.dimensions.y * alpha,
      });
    } else {
      this.dimensions = {
        x: columns,
        y: rows
      };
    }
    this.changed = 1;
    return this;
  }

  setAmplitudeFunction(_func) {
    this.amplitudeFunc = _func;
    this.changed = 1;
    return this;
  }

  setSplittings(item, item_2) {
    let x = 0, y = 0;
    if (typeof(item) === "number" && typeof(item_2) === "number") {
      x = item;
      y = item_2;
    } else if (typeof(item) === "number") {
      let divs = [];
      for (let i = 0; i < item / 2.0; ++i) {
        if (i != 1 && item % i == 0) {
          divs.push(i);
        }
      }
      if (divs.length % 2 == 0) {
        x = divs[divs.length / 2.0];
        y = divs[divs.length / 2.0 - 1];
      } else {
        x = y = divs[Math.ceil(divs.length / 2.0) - 1];
      }
    } else {
      throw new WFLErr("first argument not a number in setSquares");
    }
    this.splittings = { x : x, y : y };
    this.changed = 1;
    return this;
  }

  getRawPosition(x, y) {
    const lx = this.splittings.x - 1.0;
    const ly = this.splittings.y - 1.0;
    return math.matrix([
      [ ( x - ( lx / 2.0 ) ) / lx * this.dimensions.x  ],
      [ ( y - ( ly / 2.0 ) ) / ly * this.dimensions.y  ],
      [ 0 ]
    ]);
  }

  setBackgroundColor(color) {
    this.backgroundColor = color;
    this.changed = 1;
    return this;
  }

  setWireColor(color) {
    this.wireColor = color;
    this.changed = 1;
    return this;
  }

  setColors(backgroundColor, wireColor) {
    this.setBackgroundColor(backgroundColor);
    this.setWireColor(wireColor);
    this.changed = 1;
    return this;
  }

  setLineWidth(width) {
    this.lineWidth = width;
    this.changed = 1;
    return this;
  }

  processPoints() {
    const $this = this;
    this.forEachPoint(function(point, x, y) {
      point.setRawPosition($this.getRawPosition(x, y));
    });
    this.forEachPoint(function(point) {
      point.calculateAbsolutePosition($this.rotation, $this.positionMatrix);
    });
  }

  createPoints() {
    this.points = new Array(this.splittings.x);
    for (let x = 0; x < this.splittings.x; ++x) {
      this.points[x] = new Array(this.splittings.y);
      for (let y = 0; y < this.splittings.y; ++y) {
        this.points[x][y] = new Point(x, y, this.amplitudeFunc);
      }
    }
  }

  forEachPoint(func) {
    for (let x = 0; x < this.splittings.x; ++x) {
      for (let y = 0; y < this.splittings.y; ++y) {
        func(this.points[x][y], x, y);
      }
    }
  }

  getWidth() {
    return this.wrapper.offsetWidth;
  }

  getHeight() {
    return this.wrapper.offsetHeight;
  }

  refreshParamsCanvas() {
    this.canvas.width = this.getWidth();
    this.canvas.height = this.getHeight();
    this.context.fillStyle = this.backgroundColor;
    this.context.strokeStyle = this.wireColor;
    this.context.lineWidth = this.lineWidth;
  }

  addAnimation(func) {
    this.animations.push(func);
    return this;
  }
}

export default WireFrameLandscape;
