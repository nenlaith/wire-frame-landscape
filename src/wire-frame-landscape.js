import math from "mathjs";
import Point from './point.js';
import Rotation from './rotation.js';
import WFLErr from './error.js';

class WireFrameLandscape {

  constructor(wrapper) {
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
    this.canvas = this.wrapper.appendChild(document.createElement("CANVAS"));
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.context.strokeStyle = "black";

    this.amplitudeFunc = (function () {
      const AMPLITUDE_FUNC_MAX = 30;
      const AMPLITUDE_FUNC_MIN = -30;
      let magnitude = null;
      let current = 0;
      let direction = 0;

      function new_magnitude() {
        return math.random() * (AMPLITUDE_FUNC_MAX - AMPLITUDE_FUNC_MIN) + AMPLITUDE_FUNC_MIN;
      }

      if (magnitude == null
        || (direction > 0 && current >= magnitude)
        || (direction < 0 && current <= magnitude)) {
        magnitude = new_magnitude();
        direction = current >= magnitude ? -1 : 1;
      }
    };
    this.rotation = new Rotation(0, 0, 0);
    this.dimensions = this.lengths = this.points = null;
  }

  processPoints() {
    if (this.changed == 0) {
      return;
    }
    for (let x = 0; x < this.dimensions.x; ++x) {
      for (let y = 0; y < this.dimensions.y; ++y) {
        this.points.calculateRotatedRelativePosition(this.rotation);
      }
    }
    this.changed = 0;
  }

  display() {
    for (let x = 0; x < this.dimensions.x; ++x) {
      this.context.beginPath();
      for (let y = 0; y < this.dimensions.y; ++y) {
        this.points.calculateRotatedRelativePosition(this.rotation);
      }
      this.context.stroke();
    }
  }

  createPoints() {
    this.points = new Array(this.dimensions.x);
    for (let x = 0; x < this.dimensions.x; ++x) {
      this.points = new Array(this.dimensions.y);
      for (let y = 0; y < this.dimensions.y; ++y) {
        this.points = new Point();
      }
    }
  }

  start() {
    if (this.dimensions == null || this.lengths == null) {
      throw new WFLErr(" dimensions and squares not specified");
    }
    if (this.points == null) {
      createPoints();
    }
  }

  setRotation(roll, pitch, yaw) {
    this.rotation = new Rotation(roll, pitch, yaw);
    this.changed = 1;
  }

  setDimensions(columns, rows) {
    this.dimensions = {
      x: columns,
      y: rows
    };
    this.changed = 1;
  }

  setAmplitudeFunction(_func) {
    this.amplitudeFunc = _func;
    this.changed = 1;
  }

  setSquares(item, item_2) {
    let x = y = 0;
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
        x = divs[divs.length / 2 + 1];
        y = divs[divs.length / 2];
      } else {
        x = y = divs[math.ceil(divs.length / 2)];
      }
    } else {
      throw new WFLErr("first argument not a number in setSquares");
    }
    this.lengths = { x : x, y : y };
    this.changed = 1;
  }

  setBackgroundColor(color) {
    this.context.strokeStyle = color;
  }

  setWireColor(color) {
    this.context.fillStyle = color;
  }

  setColors(color_background, color_wire) {
    setBackgroundColor(color_background);
    setWireColor(color_wire);
  }
}

export default WireFrameLandscape;
