(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wire-frame-landscape", [], factory);
	else if(typeof exports === 'object')
		exports["wire-frame-landscape"] = factory();
	else
		root["WFL"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/decimal.js/decimal.js":
/*!********************************************!*\
  !*** ./node_modules/decimal.js/decimal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! decimal.js v10.0.1 https://github.com/MikeMcl/decimal.js/LICENCE */
;(function (globalScope) {
  'use strict';


  /*
   *  decimal.js v10.0.1
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2017 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   */


  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


    // The maximum exponent magnitude.
    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
  var EXP_LIMIT = 9e15,                      // 0 to 9e15

    // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
    MAX_DIGITS = 1e9,                        // 0 to 1e9

    // Base conversion alphabet.
    NUMERALS = '0123456789abcdef',

    // The natural logarithm of 10 (1025 digits).
    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

    // Pi (1025 digits).
    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


    // The initial configuration properties of the Decimal constructor.
    DEFAULTS = {

      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.

      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,                         // 1 to MAX_DIGITS

      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,                           // 0 to 8

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,                             // 0 to 9

      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,                          // 0 to -EXP_LIMIT

      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos:  21,                         // 0 to EXP_LIMIT

      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false                          // true/false
    },


  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


    Decimal, inexact, noConflict, quadrant,
    external = true,

    decimalError = '[DecimalError] ',
    invalidArgument = decimalError + 'Invalid argument: ',
    precisionLimitExceeded = decimalError + 'Precision limit exceeded',
    cryptoUnavailable = decimalError + 'crypto unavailable',

    mathfloor = Math.floor,
    mathpow = Math.pow,

    isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

    BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,

    LN10_PRECISION = LN10.length - 1,
    PI_PRECISION = PI.length - 1,

    // Decimal.prototype object
    P = { name: '[object Decimal]' };


  // Decimal prototype methods


  /*
   *  absoluteValue             abs
   *  ceil
   *  comparedTo                cmp
   *  cosine                    cos
   *  cubeRoot                  cbrt
   *  decimalPlaces             dp
   *  dividedBy                 div
   *  dividedToIntegerBy        divToInt
   *  equals                    eq
   *  floor
   *  greaterThan               gt
   *  greaterThanOrEqualTo      gte
   *  hyperbolicCosine          cosh
   *  hyperbolicSine            sinh
   *  hyperbolicTangent         tanh
   *  inverseCosine             acos
   *  inverseHyperbolicCosine   acosh
   *  inverseHyperbolicSine     asinh
   *  inverseHyperbolicTangent  atanh
   *  inverseSine               asin
   *  inverseTangent            atan
   *  isFinite
   *  isInteger                 isInt
   *  isNaN
   *  isNegative                isNeg
   *  isPositive                isPos
   *  isZero
   *  lessThan                  lt
   *  lessThanOrEqualTo         lte
   *  logarithm                 log
   *  [maximum]                 [max]
   *  [minimum]                 [min]
   *  minus                     sub
   *  modulo                    mod
   *  naturalExponential        exp
   *  naturalLogarithm          ln
   *  negated                   neg
   *  plus                      add
   *  precision                 sd
   *  round
   *  sine                      sin
   *  squareRoot                sqrt
   *  tangent                   tan
   *  times                     mul
   *  toBinary
   *  toDecimalPlaces           toDP
   *  toExponential
   *  toFixed
   *  toFraction
   *  toHexadecimal             toHex
   *  toNearest
   *  toNumber
   *  toOctal
   *  toPower                   pow
   *  toPrecision
   *  toSignificantDigits       toSD
   *  toString
   *  truncated                 trunc
   *  valueOf                   toJSON
   */


  /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */
  P.absoluteValue = P.abs = function () {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   */
  P.ceil = function () {
    return finalise(new this.constructor(this), this.e + 1, 2);
  };


  /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   */
  P.comparedTo = P.cmp = function (y) {
    var i, j, xdL, ydL,
      x = this,
      xd = x.d,
      yd = (y = new x.constructor(y)).d,
      xs = x.s,
      ys = y.s;

    // Either NaN or ±Infinity?
    if (!xd || !yd) {
      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }

    // Either zero?
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

    // Signs differ?
    if (xs !== ys) return xs;

    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

    xdL = xd.length;
    ydL = yd.length;

    // Compare digit by digit.
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }

    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
  };


  /*
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * cos(0)         = 1
   * cos(-0)        = 1
   * cos(Infinity)  = NaN
   * cos(-Infinity) = NaN
   * cos(NaN)       = NaN
   *
   */
  P.cosine = P.cos = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.d) return new Ctor(NaN);

    // cos(0) = cos(-0) = 1
    if (!x.d[0]) return new Ctor(1);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
  };


  /*
   *
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   *  cbrt(0)  =  0
   *  cbrt(-0) = -0
   *  cbrt(1)  =  1
   *  cbrt(-1) = -1
   *  cbrt(N)  =  N
   *  cbrt(-I) = -I
   *  cbrt(I)  =  I
   *
   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
   *
   */
  P.cubeRoot = P.cbrt = function () {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;

    // Initial estimate.
    s = x.s * Math.pow(x.s * x, 1 / 3);

     // Math.cbrt underflow/overflow?
     // Pass x to Math.pow as integer, then adjust the exponent of the result.
    if (!s || Math.abs(s) == 1 / 0) {
      n = digitsToString(x.d);
      e = x.e;

      // Adjust n exponent so it is a multiple of 3 away from x exponent.
      if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
      s = Math.pow(n, 1 / 3);

      // Rarely, e may be one less than the result exponent value.
      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
      r.s = x.s;
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Halley's method.
    // TODO? Compare Newton's method.
    for (;;) {
      t = r;
      t3 = t.times(t).times(t);
      t3plusx = t3.plus(x);
      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
        // , i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */
  P.decimalPlaces = P.dp = function () {
    var w,
      d = this.d,
      n = NaN;

    if (d) {
      w = d.length - 1;
      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last word.
      w = d[w];
      if (w) for (; w % 10 == 0; w /= 10) n--;
      if (n < 0) n = 0;
    }

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedBy = P.div = function (y) {
    return divide(this, new this.constructor(y));
  };


  /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedToIntegerBy = P.divToInt = function (y) {
    var x = this,
      Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
  };


  /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */
  P.equals = P.eq = function (y) {
    return this.cmp(y) === 0;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   */
  P.floor = function () {
    return finalise(new this.constructor(this), this.e + 1, 3);
  };


  /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */
  P.greaterThan = P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */
  P.greaterThanOrEqualTo = P.gte = function (y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
  };


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [1, Infinity]
   *
   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
   *
   * cosh(0)         = 1
   * cosh(-0)        = 1
   * cosh(Infinity)  = Infinity
   * cosh(-Infinity) = Infinity
   * cosh(NaN)       = NaN
   *
   *  x        time taken (ms)   result
   * 1000      9                 9.8503555700852349694e+433
   * 10000     25                4.4034091128314607936e+4342
   * 100000    171               1.4033316802130615897e+43429
   * 1000000   3817              1.5166076984010437725e+434294
   * 10000000  abandoned after 2 minute wait
   *
   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
   *
   */
  P.hyperbolicCosine = P.cosh = function () {
    var k, n, pr, rm, len,
      x = this,
      Ctor = x.constructor,
      one = new Ctor(1);

    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

    // Estimate the optimum number of times to use the argument reduction.
    // TODO? Estimation reused from cosine() and may not be optimal here.
    if (len < 32) {
      k = Math.ceil(len / 3);
      n = Math.pow(4, -k).toString();
    } else {
      k = 16;
      n = '2.3283064365386962890625e-10';
    }

    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

    // Reverse argument reduction
    var cosh2_x,
      i = k,
      d8 = new Ctor(8);
    for (; i--;) {
      cosh2_x = x.times(x);
      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }

    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
   *
   * sinh(0)         = 0
   * sinh(-0)        = -0
   * sinh(Infinity)  = Infinity
   * sinh(-Infinity) = -Infinity
   * sinh(NaN)       = NaN
   *
   * x        time taken (ms)
   * 10       2 ms
   * 100      5 ms
   * 1000     14 ms
   * 10000    82 ms
   * 100000   886 ms            1.4033316802130615897e+43429
   * 200000   2613 ms
   * 300000   5407 ms
   * 400000   8824 ms
   * 500000   13026 ms          8.7080643612718084129e+217146
   * 1000000  48543 ms
   *
   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
   *
   */
  P.hyperbolicSine = P.sinh = function () {
    var k, pr, rm, len,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    if (len < 3) {
      x = taylorSeries(Ctor, 2, x, x, true);
    } else {

      // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
      // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
      // 3 multiplications and 1 addition

      // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
      // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
      // 4 multiplications and 2 additions

      // Estimate the optimum number of times to use the argument reduction.
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;

      x = x.times(Math.pow(5, -k));

      x = taylorSeries(Ctor, 2, x, x, true);

      // Reverse argument reduction
      var sinh2_x,
        d5 = new Ctor(5),
        d16 = new Ctor(16),
        d20 = new Ctor(20);
      for (; k--;) {
        sinh2_x = x.times(x);
        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
    }

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * tanh(x) = sinh(x) / cosh(x)
   *
   * tanh(0)         = 0
   * tanh(-0)        = -0
   * tanh(Infinity)  = 1
   * tanh(-Infinity) = -1
   * tanh(NaN)       = NaN
   *
   */
  P.hyperbolicTangent = P.tanh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;

    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
  };


  /*
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
   * this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [0, pi]
   *
   * acos(x) = pi/2 - asin(x)
   *
   * acos(0)       = pi/2
   * acos(-0)      = pi/2
   * acos(1)       = 0
   * acos(-1)      = pi
   * acos(1/2)     = pi/3
   * acos(-1/2)    = 2*pi/3
   * acos(|x| > 1) = NaN
   * acos(NaN)     = NaN
   *
   */
  P.inverseCosine = P.acos = function () {
    var halfPi,
      x = this,
      Ctor = x.constructor,
      k = x.abs().cmp(1),
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (k !== -1) {
      return k === 0
        // |x| is 1
        ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
        // |x| > 1 or x is NaN
        : new Ctor(NaN);
    }

    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.asin();
    halfPi = getPi(Ctor, pr + 4, rm).times(0.5);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return halfPi.minus(x);
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * Domain: [1, Infinity]
   * Range: [0, Infinity]
   *
   * acosh(x) = ln(x + sqrt(x^2 - 1))
   *
   * acosh(x < 1)     = NaN
   * acosh(NaN)       = NaN
   * acosh(Infinity)  = Infinity
   * acosh(-Infinity) = NaN
   * acosh(0)         = NaN
   * acosh(-0)        = NaN
   * acosh(1)         = 0
   * acosh(-1)        = NaN
   *
   */
  P.inverseHyperbolicCosine = P.acosh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).minus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * asinh(x) = ln(x + sqrt(x^2 + 1))
   *
   * asinh(NaN)       = NaN
   * asinh(Infinity)  = Infinity
   * asinh(-Infinity) = -Infinity
   * asinh(0)         = 0
   * asinh(-0)        = -0
   *
   */
  P.inverseHyperbolicSine = P.asinh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).plus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [-Infinity, Infinity]
   *
   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
   *
   * atanh(|x| > 1)   = NaN
   * atanh(NaN)       = NaN
   * atanh(Infinity)  = NaN
   * atanh(-Infinity) = NaN
   * atanh(0)         = 0
   * atanh(-0)        = -0
   * atanh(1)         = Infinity
   * atanh(-1)        = -Infinity
   *
   */
  P.inverseHyperbolicTangent = P.atanh = function () {
    var pr, rm, wpr, xsd,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();

    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

    Ctor.precision = wpr = xsd - x.e;

    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

    Ctor.precision = pr + 4;
    Ctor.rounding = 1;

    x = x.ln();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(0.5);
  };


  /*
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
   *
   * asin(0)       = 0
   * asin(-0)      = -0
   * asin(1/2)     = pi/6
   * asin(-1/2)    = -pi/6
   * asin(1)       = pi/2
   * asin(-1)      = -pi/2
   * asin(|x| > 1) = NaN
   * asin(NaN)     = NaN
   *
   * TODO? Compare performance of Taylor series.
   *
   */
  P.inverseSine = P.asin = function () {
    var halfPi, k,
      pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.isZero()) return new Ctor(x);

    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (k !== -1) {

      // |x| is 1
      if (k === 0) {
        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
        halfPi.s = x.s;
        return halfPi;
      }

      // |x| > 1 or x is NaN
      return new Ctor(NaN);
    }

    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(2);
  };


  /*
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
   *
   * atan(0)         = 0
   * atan(-0)        = -0
   * atan(1)         = pi/4
   * atan(-1)        = -pi/4
   * atan(Infinity)  = pi/2
   * atan(-Infinity) = -pi/2
   * atan(NaN)       = NaN
   *
   */
  P.inverseTangent = P.atan = function () {
    var i, j, k, n, px, t, r, wpr, x2,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (!x.isFinite()) {
      if (!x.s) return new Ctor(NaN);
      if (pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.5);
        r.s = x.s;
        return r;
      }
    } else if (x.isZero()) {
      return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.25);
      r.s = x.s;
      return r;
    }

    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;

    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

    // Argument reduction
    // Ensure |x| < 0.42
    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

    k = Math.min(28, wpr / LOG_BASE + 2 | 0);

    for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

    external = false;

    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;

    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
    for (; i !== -1;) {
      px = px.times(x2);
      t = r.minus(px.div(n += 2));

      px = px.times(x2);
      r = t.plus(px.div(n += 2));

      if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
    }

    if (k) r = r.times(2 << (k - 1));

    external = true;

    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   */
  P.isFinite = function () {
    return !!this.d;
  };


  /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */
  P.isInteger = P.isInt = function () {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
  };


  /*
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */
  P.isNegative = P.isNeg = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */
  P.isPositive = P.isPos = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   */
  P.isZero = function () {
    return !!this.d && this.d[0] === 0;
  };


  /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */
  P.lessThan = P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */
  P.lessThanOrEqualTo = P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * If no base is specified, return log[10](arg).
   *
   * log[base](arg) = ln(arg) / ln(base)
   *
   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
   * otherwise:
   *
   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
   * between the result and the correctly rounded result will be one ulp (unit in the last place).
   *
   * log[-b](a)       = NaN
   * log[0](a)        = NaN
   * log[1](a)        = NaN
   * log[NaN](a)      = NaN
   * log[Infinity](a) = NaN
   * log[b](0)        = -Infinity
   * log[b](-0)       = -Infinity
   * log[b](-a)       = NaN
   * log[b](1)        = 0
   * log[b](Infinity) = Infinity
   * log[b](NaN)      = NaN
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */
  P.logarithm = P.log = function (base) {
    var isBase10, d, denominator, k, inf, num, sd, r,
      arg = this,
      Ctor = arg.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding,
      guard = 5;

    // Default base is 10.
    if (base == null) {
      base = new Ctor(10);
      isBase10 = true;
    } else {
      base = new Ctor(base);
      d = base.d;

      // Return NaN if base is negative, or non-finite, or is 0 or 1.
      if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

      isBase10 = base.eq(10);
    }

    d = arg.d;

    // Is arg negative, non-finite, 0 or 1?
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }

    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
    // integer power of 10.
    if (isBase10) {
      if (d.length > 1) {
        inf = true;
      } else {
        for (k = d[0]; k % 10 === 0;) k /= 10;
        inf = k !== 1;
      }
    }

    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

    // The result will have 5 rounding digits.
    r = divide(num, denominator, sd, 1);

    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
    // calculate 10 further digits.
    //
    // If the result is known to have an infinite decimal expansion, repeat this until it is clear
    // that the result is above or below the boundary. Otherwise, if after calculating the 10
    // further digits, the last 14 are nines, round up and assume the result is exact.
    // Also assume the result is exact if the last 14 are zero.
    //
    // Example of a result that will be incorrectly rounded:
    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
    // place is still 2.6.
    if (checkRoundingDigits(r.d, k = pr, rm)) {

      do {
        sd += 10;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        r = divide(num, denominator, sd, 1);

        if (!inf) {

          // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }

          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
    }

    external = true;

    return finalise(r, pr, rm);
  };


  /*
   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.max = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'lt');
  };
   */


  /*
   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.min = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'gt');
  };
   */


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.minus = P.sub = function (y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return y negated if x is finite and y is ±Infinity.
      else if (x.d) y.s = -y.s;

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with different signs.
      // Return NaN if both are ±Infinity with the same sign.
      else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

      return y;
    }

    // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.plus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return y negated if x is zero and y is non-zero.
      if (yd[0]) y.s = -y.s;

      // Return x if y is zero and x is non-zero.
      else if (xd[0]) y = new Ctor(x);

      // Return zero if both are zero.
      // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
      else return new Ctor(rm === 3 ? -0 : 0);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);

    xd = xd.slice();
    k = xe - e;

    // If base 1e7 exponents differ...
    if (k) {
      xLTy = k < 0;

      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }

      // Numbers with massively different exponents would result in a very high number of
      // zeros needing to be prepended, but this can be avoided while still ensuring correct
      // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

      if (k > i) {
        k = i;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents.
      d.reverse();
      for (i = k; i--;) d.push(0);
      d.reverse();

    // Base 1e7 exponents equal.
    } else {

      // Check digits to determine which is the bigger number.

      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;

      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }

      k = 0;
    }

    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }

    len = xd.length;

    // Append zeros to `xd` if shorter.
    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

    // Subtract yd from xd.
    for (i = yd.length; i > k;) {

      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }

      xd[i] -= yd[i];
    }

    // Remove trailing zeros.
    for (; xd[--len] === 0;) xd.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xd[0] === 0; xd.shift()) --e;

    // Zero?
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * The result depends on the modulo mode.
   *
   */
  P.modulo = P.mod = function (y) {
    var q,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

    // Return x if y is ±Infinity or x is ±0.
    if (!y.d || x.d && !x.d[0]) {
      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }

    // Prevent rounding of intermediate calculations.
    external = false;

    if (Ctor.modulo == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // result = x - q * y    where  0 <= result < abs(y)
      q = divide(x, y.abs(), 0, 3, 1);
      q.s *= y.s;
    } else {
      q = divide(x, y, 0, Ctor.modulo, 1);
    }

    q = q.times(y);

    external = true;

    return x.minus(q);
  };


  /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.naturalExponential = P.exp = function () {
    return naturalExponential(this);
  };


  /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.naturalLogarithm = P.ln = function () {
    return naturalLogarithm(this);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */
  P.negated = P.neg = function () {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.plus = P.add = function (y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with the same sign.
      // Return NaN if both are ±Infinity with different signs.
      // Return y if x is finite and y is ±Infinity.
      else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

      return y;
    }

     // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return x if y is zero.
      // Return y if y is non-zero.
      if (!yd[0]) y = new Ctor(x);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);

    xd = xd.slice();
    i = k - e;

    // If base 1e7 exponents differ...
    if (i) {

      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }

      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;

      if (i > len) {
        i = len;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
      d.reverse();
      for (; i--;) d.push(0);
      d.reverse();
    }

    len = xd.length;
    i = yd.length;

    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }

    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for (carry = 0; i;) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }

    if (carry) {
      xd.unshift(carry);
      ++e;
    }

    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for (len = xd.length; xd[--len] == 0;) xd.pop();

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */
  P.precision = P.sd = function (z) {
    var k,
      x = this;

    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

    if (x.d) {
      k = getPrecision(x.d);
      if (z && x.e + 1 > k) k = x.e + 1;
    } else {
      k = NaN;
    }

    return k;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */
  P.round = function () {
    var x = this,
      Ctor = x.constructor;

    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
  };


  /*
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * sin(x) = x - x^3/3! + x^5/5! - ...
   *
   * sin(0)         = 0
   * sin(-0)        = -0
   * sin(Infinity)  = NaN
   * sin(-Infinity) = NaN
   * sin(NaN)       = NaN
   *
   */
  P.sine = P.sin = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = sine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   *  sqrt(-n) =  N
   *  sqrt(N)  =  N
   *  sqrt(-I) =  N
   *  sqrt(I)  =  I
   *  sqrt(0)  =  0
   *  sqrt(-0) = -0
   *
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, sd, r, rep, t,
      x = this,
      d = x.d,
      e = x.e,
      s = x.s,
      Ctor = x.constructor;

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !d || !d[0]) {
      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }

    external = false;

    // Initial estimate.
    s = Math.sqrt(+x);

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(d);

      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '1e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Newton-Raphson iteration.
    for (;;) {
      t = r;
      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
        // 4999, i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * tan(0)         = 0
   * tan(-0)        = -0
   * tan(Infinity)  = NaN
   * tan(-Infinity) = NaN
   * tan(NaN)       = NaN
   *
   */
  P.tangent = P.tan = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;

    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   */
  P.times = P.mul = function (y) {
    var carry, e, i, k, r, rL, t, xdL, ydL,
      x = this,
      Ctor = x.constructor,
      xd = x.d,
      yd = (y = new Ctor(y)).d;

    y.s *= x.s;

     // If either is NaN, ±Infinity or ±0...
    if (!xd || !xd[0] || !yd || !yd[0]) {

      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

        // Return NaN if either is NaN.
        // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.
        ? NaN

        // Return ±Infinity if either is ±Infinity.
        // Return ±0 if either is ±0.
        : !xd || !yd ? y.s / 0 : y.s * 0);
    }

    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;

    // Ensure xd points to the longer array.
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }

    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--;) r.push(0);

    // Multiply!
    for (i = ydL; --i >= 0;) {
      carry = 0;
      for (k = xdL + i; k > i;) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }

      r[k] = (r[k] + carry) % BASE | 0;
    }

    // Remove trailing zeros.
    for (; !r[--rL];) r.pop();

    if (carry) ++e;
    else r.shift();

    y.d = r;
    y.e = getBase10Exponent(r, e);

    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
  };


  /*
   * Return a string representing the value of this Decimal in base 2, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toBinary = function (sd, rm) {
    return toStringBinary(this, 2, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toDecimalPlaces = P.toDP = function (dp, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);
    if (dp === void 0) return x;

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    return finalise(x, dp + x.e + 1, rm);
  };


  /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toExponential = function (dp, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), dp + 1, rm);
      str = finiteToString(x, true, dp + 1);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */
  P.toFixed = function (dp, rm) {
    var str, y,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      y = finalise(new Ctor(x), dp + x.e + 1, rm);
      str = finiteToString(y, false, dp + y.e + 1);
    }

    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * The denominator will be a positive non-zero value less than or equal to the specified maximum
   * denominator. If a maximum denominator is not specified, the denominator will be the lowest
   * value necessary to represent the number exactly.
   *
   * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
   *
   */
  P.toFraction = function (maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
      x = this,
      xd = x.d,
      Ctor = x.constructor;

    if (!xd) return new Ctor(x);

    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);

    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

    if (maxD == null) {

      // d is 10**e, the minimum max-denominator needed.
      maxD = e > 0 ? d : n1;
    } else {
      n = new Ctor(maxD);
      if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
      maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
    }

    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;

    for (;;)  {
      q = divide(n, d, 0, 1, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.cmp(maxD) == 1) break;
      d0 = d1;
      d1 = d2;
      d2 = n1;
      n1 = n0.plus(q.times(d2));
      n0 = d2;
      d2 = d;
      d = n.minus(q.times(d2));
      n = d2;
    }

    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;

    // Determine which fraction is closer to x, n0/d0 or n1/d1?
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
        ? [n1, d1] : [n0, d0];

    Ctor.precision = pr;
    external = true;

    return r;
  };


  /*
   * Return a string representing the value of this Decimal in base 16, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toHexadecimal = P.toHex = function (sd, rm) {
    return toStringBinary(this, 16, sd, rm);
  };



  /*
   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
   *
   * The return value will always have the same sign as this Decimal, unless either this Decimal
   * or `y` is NaN, in which case the return value will be also be NaN.
   *
   * The return value is not affected by the value of `precision`.
   *
   * y {number|string|Decimal} The magnitude to round to a multiple of.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toNearest() rounding mode not an integer: {rm}'
   * 'toNearest() rounding mode out of range: {rm}'
   *
   */
  P.toNearest = function (y, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);

    if (y == null) {

      // If x is not finite, return x.
      if (!x.d) return x;

      y = new Ctor(1);
      rm = Ctor.rounding;
    } else {
      y = new Ctor(y);
      if (rm === void 0) {
        rm = Ctor.rounding;
      } else {
        checkInt32(rm, 0, 8);
      }

      // If x is not finite, return x if y is not NaN, else NaN.
      if (!x.d) return y.s ? x : y;

      // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
      if (!y.d) {
        if (y.s) y.s = x.s;
        return y;
      }
    }

    // If y is not zero, calculate the nearest multiple of y to x.
    if (y.d[0]) {
      external = false;
      x = divide(x, y, 0, rm, 1).times(y);
      external = true;
      finalise(x);

    // If y is zero, return zero with the sign of x.
    } else {
      y.s = x.s;
      x = y;
    }

    return x;
  };


  /*
   * Return the value of this Decimal converted to a number primitive.
   * Zero keeps its sign.
   *
   */
  P.toNumber = function () {
    return +this;
  };


  /*
   * Return a string representing the value of this Decimal in base 8, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toOctal = function (sd, rm) {
    return toStringBinary(this, 8, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * ECMAScript compliant.
   *
   *   pow(x, NaN)                           = NaN
   *   pow(x, ±0)                            = 1

   *   pow(NaN, non-zero)                    = NaN
   *   pow(abs(x) > 1, +Infinity)            = +Infinity
   *   pow(abs(x) > 1, -Infinity)            = +0
   *   pow(abs(x) == 1, ±Infinity)           = NaN
   *   pow(abs(x) < 1, +Infinity)            = +0
   *   pow(abs(x) < 1, -Infinity)            = +Infinity
   *   pow(+Infinity, y > 0)                 = +Infinity
   *   pow(+Infinity, y < 0)                 = +0
   *   pow(-Infinity, odd integer > 0)       = -Infinity
   *   pow(-Infinity, even integer > 0)      = +Infinity
   *   pow(-Infinity, odd integer < 0)       = -0
   *   pow(-Infinity, even integer < 0)      = +0
   *   pow(+0, y > 0)                        = +0
   *   pow(+0, y < 0)                        = +Infinity
   *   pow(-0, odd integer > 0)              = -0
   *   pow(-0, even integer > 0)             = +0
   *   pow(-0, odd integer < 0)              = -Infinity
   *   pow(-0, even integer < 0)             = +Infinity
   *   pow(finite x < 0, finite non-integer) = NaN
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
   * probability of an incorrectly rounded result
   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
   * i.e. 1 in 250,000,000,000,000
   *
   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  P.toPower = P.pow = function (y) {
    var e, k, pr, r, rm, s,
      x = this,
      Ctor = x.constructor,
      yn = +(y = new Ctor(y));

    // Either ±Infinity, NaN or ±0?
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

    x = new Ctor(x);

    if (x.eq(1)) return x;

    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (y.eq(1)) return finalise(x, pr, rm);

    // y exponent
    e = mathfloor(y.e / LOG_BASE);

    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = intPow(Ctor, x, k, pr);
      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }

    s = x.s;

    // if x is negative
    if (s < 0) {

      // if y is not an integer
      if (e < y.d.length - 1) return new Ctor(NaN);

      // Result is positive if x is negative and the last digit of integer y is even.
      if ((y.d[e] & 1) == 0) s = 1;

      // if x.eq(-1)
      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
        x.s = s;
        return x;
      }
    }

    // Estimate result exponent.
    // x^y = 10^e,  where e = y * log10(x)
    // log10(x) = log10(x_significand) + x_exponent
    // log10(x_significand) = ln(x_significand) / ln(10)
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k)
      ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
      : new Ctor(k + '').e;

    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

    // Overflow/underflow?
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

    external = false;
    Ctor.rounding = x.s = 1;

    // Estimate the extra guard digits needed to ensure five correct rounding digits from
    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
    // new Decimal(2.32456).pow('2087987436534566.46411')
    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
    k = Math.min(12, (e + '').length);

    // r = x^y = exp(y*ln(x))
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
    if (r.d) {

      // Truncate to the required precision plus five rounding digits.
      r = finalise(r, pr + 5, 1);

      // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
      // the result.
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;

        // Truncate to the increased precision plus five rounding digits.
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

        // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
      }
    }

    r.s = s;
    external = true;
    Ctor.rounding = rm;

    return finalise(r, pr, rm);
  };


  /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toPrecision = function (sd, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), sd, rm);
      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toSD() digits out of range: {sd}'
   * 'toSD() digits not an integer: {sd}'
   * 'toSD() rounding mode not an integer: {rm}'
   * 'toSD() rounding mode out of range: {rm}'
   *
   */
  P.toSignificantDigits = P.toSD = function (sd, rm) {
    var x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }

    return finalise(new Ctor(x), sd, rm);
  };


  /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  P.toString = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   */
  P.truncated = P.trunc = function () {
    return finalise(new this.constructor(this), this.e + 1, 1);
  };


  /*
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   */
  P.valueOf = P.toJSON = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() ? '-' + str : str;
  };


  /*
  // Add aliases to match BigDecimal method names.
  // P.add = P.plus;
  P.subtract = P.minus;
  P.multiply = P.times;
  P.divide = P.div;
  P.remainder = P.mod;
  P.compareTo = P.cmp;
  P.negate = P.neg;
   */


  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


  /*
   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
   *                           finiteToString, naturalExponential, naturalLogarithm
   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
   *  convertBase              toStringBinary, parseOther
   *  cos                      P.cos
   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
   *                           taylorSeries, atan2, parseOther
   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
   *                           P.truncated, divide, getLn10, getPi, naturalExponential,
   *                           naturalLogarithm, ceil, floor, round, trunc
   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
   *                           toStringBinary
   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
   *  getLn10                  P.logarithm, naturalLogarithm
   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
   *  getPrecision             P.precision, P.toFraction
   *  getZeroString            digitsToString, finiteToString
   *  intPow                   P.toPower, parseOther
   *  isOdd                    toLessThanHalfPi
   *  maxOrMin                 max, min
   *  naturalExponential       P.naturalExponential, P.toPower
   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
   *                           P.toPower, naturalExponential
   *  nonFiniteToString        finiteToString, toStringBinary
   *  parseDecimal             Decimal
   *  parseOther               Decimal
   *  sin                      P.sin
   *  taylorSeries             P.cosh, P.sinh, cos, sin
   *  toLessThanHalfPi         P.cos, P.sin
   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
   *  truncate                 intPow
   *
   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
   *                           naturalLogarithm, config, parseOther, random, Decimal
   */


  function digitsToString(d) {
    var i, k, ws,
      indexOfLastWord = d.length - 1,
      str = '',
      w = d[0];

    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
        str += ws;
      }

      w = d[i];
      ws = w + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
    } else if (w === 0) {
      return '0';
    }

    // Remove trailing zeros of last w.
    for (; w % 10 === 0;) w /= 10;

    return str + w;
  }


  function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
      throw Error(invalidArgument + i);
    }
  }


  /*
   * Check 5 rounding digits if `repeating` is null, 4 otherwise.
   * `repeating == null` if caller is `log` or `pow`,
   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
   */
  function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;

    // Get the length of the first word of the array d.
    for (k = d[0]; k >= 10; k /= 10) --i;

    // Is the rounding digit in the first word of d?
    if (--i < 0) {
      i += LOG_BASE;
      di = 0;
    } else {
      di = Math.ceil((i + 1) / LOG_BASE);
      i %= LOG_BASE;
    }

    // i is the index (0 - 6) of the rounding digit.
    // E.g. if within the word 3487563 the first rounding digit is 5,
    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;

    if (repeating == null) {
      if (i < 3) {
        if (i == 0) rd = rd / 100 | 0;
        else if (i == 1) rd = rd / 10 | 0;
        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
      } else {
        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
          (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
            (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
      }
    } else {
      if (i < 4) {
        if (i == 0) rd = rd / 1000 | 0;
        else if (i == 1) rd = rd / 100 | 0;
        else if (i == 2) rd = rd / 10 | 0;
        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
      } else {
        r = ((repeating || rm < 4) && rd + 1 == k ||
        (!repeating && rm > 3) && rd + 1 == k / 2) &&
          (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
      }
    }

    return r;
  }


  // Convert string of `baseIn` to an array of numbers of `baseOut`.
  // Eg. convertBase('255', 10, 16) returns [15, 15].
  // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
  function convertBase(str, baseIn, baseOut) {
    var j,
      arr = [0],
      arrL,
      i = 0,
      strL = str.length;

    for (; i < strL;) {
      for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
      arr[0] += NUMERALS.indexOf(str.charAt(i++));
      for (j = 0; j < arr.length; j++) {
        if (arr[j] > baseOut - 1) {
          if (arr[j + 1] === void 0) arr[j + 1] = 0;
          arr[j + 1] += arr[j] / baseOut | 0;
          arr[j] %= baseOut;
        }
      }
    }

    return arr.reverse();
  }


  /*
   * cos(x) = 1 - x^2/2! + x^4/4! - ...
   * |x| < pi/2
   *
   */
  function cosine(Ctor, x) {
    var k, y,
      len = x.d.length;

    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

    // Estimate the optimum number of times to use the argument reduction.
    if (len < 32) {
      k = Math.ceil(len / 3);
      y = Math.pow(4, -k).toString();
    } else {
      k = 16;
      y = '2.3283064365386962890625e-10';
    }

    Ctor.precision += k;

    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

    // Reverse argument reduction
    for (var i = k; i--;) {
      var cos2x = x.times(x);
      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }

    Ctor.precision -= k;

    return x;
  }


  /*
   * Perform division in the specified base.
   */
  var divide = (function () {

    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k, base) {
      var temp,
        carry = 0,
        i = x.length;

      for (x = x.slice(); i--;) {
        temp = x[i] * k + carry;
        x[i] = temp % base | 0;
        carry = temp / base | 0;
      }

      if (carry) x.unshift(carry);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, r;

      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return r;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1;) a.shift();
    }

    return function (x, y, pr, rm, dp, base) {
      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
        yL, yz,
        Ctor = x.constructor,
        sign = x.s == y.s ? 1 : -1,
        xd = x.d,
        yd = y.d;

      // Either NaN, Infinity or 0?
      if (!xd || !xd[0] || !yd || !yd[0]) {

        return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
      }

      if (base) {
        logBase = 1;
        e = x.e - y.e;
      } else {
        base = BASE;
        logBase = LOG_BASE;
        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
      }

      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign);
      qd = q.d = [];

      // Result exponent may be one less than e.
      // The digit array of a Decimal from toStringBinary may have trailing zeros.
      for (i = 0; yd[i] == (xd[i] || 0); i++);

      if (yd[i] > (xd[i] || 0)) e--;

      if (pr == null) {
        sd = pr = Ctor.precision;
        rm = Ctor.rounding;
      } else if (dp) {
        sd = pr + (x.e - y.e) + 1;
      } else {
        sd = pr;
      }

      if (sd < 0) {
        qd.push(1);
        more = true;
      } else {

        // Convert precision in number of base 10 digits to base 1e7 digits.
        sd = sd / logBase + 2 | 0;
        i = 0;

        // divisor < 1e7
        if (yL == 1) {
          k = 0;
          yd = yd[0];
          sd++;

          // k is the carry.
          for (; (i < xL || k) && sd--; i++) {
            t = k * base + (xd[i] || 0);
            qd[i] = t / yd | 0;
            k = t % yd | 0;
          }

          more = k || i < xL;

        // divisor >= 1e7
        } else {

          // Normalise xd and yd so highest order digit of yd is >= base/2
          k = base / (yd[0] + 1) | 0;

          if (k > 1) {
            yd = multiplyInteger(yd, k, base);
            xd = multiplyInteger(xd, k, base);
            yL = yd.length;
            xL = xd.length;
          }

          xi = yL;
          rem = xd.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL;) rem[remL++] = 0;

          yz = yd.slice();
          yz.unshift(0);
          yd0 = yd[0];

          if (yd[1] >= base / 2) ++yd0;

          do {
            k = 0;

            // Compare divisor and remainder.
            cmp = compare(yd, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, k.
              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // k will be how many times the divisor goes into the current remainder.
              k = rem0 / yd0 | 0;

              //  Algorithm:
              //  1. product = divisor * trial digit (k)
              //  2. if product > remainder: product -= divisor, k--
              //  3. remainder -= product
              //  4. if product was < remainder at 2:
              //    5. compare new remainder and divisor
              //    6. If remainder > divisor: remainder -= divisor, k++

              if (k > 1) {
                if (k >= base) k = base - 1;

                // product = divisor * trial digit.
                prod = multiplyInteger(yd, k, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                cmp = compare(prod, rem, prodL, remL);

                // product > remainder.
                if (cmp == 1) {
                  k--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
                }
              } else {

                // cmp is -1.
                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                if (k == 0) cmp = k = 1;
                prod = yd.slice();
              }

              prodL = prod.length;
              if (prodL < remL) prod.unshift(0);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);

              // If product was < previous remainder.
              if (cmp == -1) {
                remL = rem.length;

                // Compare divisor and new remainder.
                cmp = compare(yd, rem, yL, remL);

                // If divisor < new remainder, subtract divisor from remainder.
                if (cmp < 1) {
                  k++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yd, remL, base);
                }
              }

              remL = rem.length;
            } else if (cmp === 0) {
              k++;
              rem = [0];
            }    // if cmp === 1, k will be 0

            // Add the next digit, k, to the result array.
            qd[i++] = k;

            // Update the remainder.
            if (cmp && rem[0]) {
              rem[remL++] = xd[xi] || 0;
            } else {
              rem = [xd[xi]];
              remL = 1;
            }

          } while ((xi++ < xL || rem[0] !== void 0) && sd--);

          more = rem[0] !== void 0;
        }

        // Leading zero?
        if (!qd[0]) qd.shift();
      }

      // logBase is 1 when divide is being used for base conversion.
      if (logBase == 1) {
        q.e = e;
        inexact = more;
      } else {

        // To calculate q.e, first get the number of digits of qd[0].
        for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
        q.e = i + e * logBase - 1;

        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
      }

      return q;
    };
  })();


  /*
   * Round `x` to `sd` significant digits using rounding mode `rm`.
   * Check for over/under-flow.
   */
   function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi,
      Ctor = x.constructor;

    // Don't round if sd is null or undefined.
    out: if (sd != null) {
      xd = x.d;

      // Infinity/NaN.
      if (!xd) return x;

      // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
      // w: the word of xd containing rd, a base 1e7 number.
      // xdi: the index of w within xd.
      // digits: the number of digits of w.
      // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
      // they had leading zeros)
      // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

      // Get the length of the first word of the digits array xd.
      for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
      i = sd - digits;

      // Is the rounding digit in the first word of xd?
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];

        // Get the rounding digit at index j of w.
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {

            // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
            for (; k++ <= xdi;) xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];

          // Get the number of digits of w.
          for (digits = 1; k >= 10; k /= 10) digits++;

          // Get the index of rd within w.
          i %= LOG_BASE;

          // Get the index of rd within w, adjusted for leading zeros.
          // The number of leading zeros of w is given by LOG_BASE - digits.
          j = i - LOG_BASE + digits;

          // Get the rounding digit at index j of w.
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }

      // Are there any non-zero digits after the rounding digit?
      isTruncated = isTruncated || sd < 0 ||
        xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

      // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
      // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
      // will give 714.

      roundUp = rm < 4
        ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
        : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
            rm == (x.s < 0 ? 8 : 7));

      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {

          // Convert sd to decimal places.
          sd -= x.e + 1;

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {

          // Zero.
          xd[0] = x.e = 0;
        }

        return x;
      }

      // Remove excess digits.
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);

        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
        // j > 0 means i > number of leading zeros of w.
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }

      if (roundUp) {
        for (;;) {

          // Is the digit to be rounded up in the first word of xd?
          if (xdi == 0) {

            // i will be the length of xd[0] before k is added.
            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10) k++;

            // if i != k the length has increased.
            if (i != k) {
              x.e++;
              if (xd[0] == BASE) xd[0] = 1;
            }

            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE) break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }

      // Remove trailing zeros.
      for (i = xd.length; xd[--i] === 0;) xd.pop();
    }

    if (external) {

      // Overflow?
      if (x.e > Ctor.maxE) {

        // Infinity.
        x.d = null;
        x.e = NaN;

      // Underflow?
      } else if (x.e < Ctor.minE) {

        // Zero.
        x.e = 0;
        x.d = [0];
        // Ctor.underflow = true;
      } // else Ctor.underflow = false;
    }

    return x;
  }


  function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k,
      e = x.e,
      str = digitsToString(x.d),
      len = str.length;

    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + '.' + str.slice(1);
      }

      str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
    } else if (e < 0) {
      str = '0.' + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len) str += '.';
        str += getZeroString(k);
      }
    }

    return str;
  }


  // Calculate the base 10 exponent from the base 1e7 exponent.
  function getBase10Exponent(digits, e) {
    var w = digits[0];

    // Add the number of digits of the first word of the digits array.
    for ( e *= LOG_BASE; w >= 10; w /= 10) e++;
    return e;
  }


  function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {

      // Reset global state in case the exception is caught.
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
  }


  function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
  }


  function getPrecision(digits) {
    var w = digits.length - 1,
      len = w * LOG_BASE + 1;

    w = digits[w];

    // If non-zero...
    if (w) {

      // Subtract the number of trailing zeros of the last word.
      for (; w % 10 == 0; w /= 10) len--;

      // Add the number of digits of the first word.
      for (w = digits[0]; w >= 10; w /= 10) len++;
    }

    return len;
  }


  function getZeroString(k) {
    var zs = '';
    for (; k--;) zs += '0';
    return zs;
  }


  /*
   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
   * integer of type number.
   *
   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
   *
   */
  function intPow(Ctor, x, n, pr) {
    var isTruncated,
      r = new Ctor(1),

      // Max n of 9007199254740991 takes 53 loop iterations.
      // Maximum digits array length; leaves [28, 34] guard digits.
      k = Math.ceil(pr / LOG_BASE + 4);

    external = false;

    for (;;) {
      if (n % 2) {
        r = r.times(x);
        if (truncate(r.d, k)) isTruncated = true;
      }

      n = mathfloor(n / 2);
      if (n === 0) {

        // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
        n = r.d.length - 1;
        if (isTruncated && r.d[n] === 0) ++r.d[n];
        break;
      }

      x = x.times(x);
      truncate(x.d, k);
    }

    external = true;

    return r;
  }


  function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
  }


  /*
   * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.
   */
  function maxOrMin(Ctor, args, ltgt) {
    var y,
      x = new Ctor(args[0]),
      i = 0;

    for (; ++i < args.length;) {
      y = new Ctor(args[i]);
      if (!y.s) {
        x = y;
        break;
      } else if (x[ltgt](y)) {
        x = y;
      }
    }

    return x;
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
   * digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(Infinity)  = Infinity
   *  exp(-Infinity) = 0
   *  exp(NaN)       = NaN
   *  exp(±0)        = 1
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   *  The result will always be correctly rounded.
   *
   */
  function naturalExponential(x, sd) {
    var denominator, guard, j, pow, sum, t, wpr,
      rep = 0,
      i = 0,
      k = 0,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // 0/NaN/Infinity?
    if (!x.d || !x.d[0] || x.e > 17) {

      return new Ctor(x.d
        ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
        : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    t = new Ctor(0.03125);

    // while abs(x) >= 0.1
    while (x.e > -2) {

      // x = x / 2^5
      x = x.times(t);
      k += 5;
    }

    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
    // necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(1);
    Ctor.precision = wpr;

    for (;;) {
      pow = finalise(pow.times(x), wpr, 1);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow, denominator, wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        j = k;
        while (j--) sum = finalise(sum.times(sum), wpr, 1);

        // Check to see if the first 4 rounding digits are [49]999.
        // If so, repeat the summation with a higher precision, otherwise
        // e.g. with precision: 18, rounding: 1
        // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {

          if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += 10;
            denominator = pow = t = new Ctor(1);
            i = 0;
            rep++;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
    }
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
   * digits.
   *
   *  ln(-n)        = NaN
   *  ln(0)         = -Infinity
   *  ln(-0)        = -Infinity
   *  ln(1)         = 0
   *  ln(Infinity)  = Infinity
   *  ln(-Infinity) = NaN
   *  ln(NaN)       = NaN
   *
   *  ln(n) (n != 1) is non-terminating.
   *
   */
  function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
      n = 1,
      guard = 10,
      x = y,
      xd = x.d,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // Is x negative or Infinity, NaN, 0 or 1?
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);

    if (Math.abs(e = x.e) < 1.5e15) {

      // Argument reduction.
      // The series converges faster the closer the argument is to 1, so using
      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
      // later be divided by this number, then separate out the power of 10 using
      // ln(a*10^b) = ln(a) + b*ln(10).

      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
      // max n is 6 (gives 0.7 - 1.3)
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }

      e = x.e;

      if (c0 > 1) {
        x = new Ctor('0.' + c);
        e++;
      } else {
        x = new Ctor(c0 + '.' + c.slice(1));
      }
    } else {

      // The argument reduction method above may result in overflow if the argument y is a massive
      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
      // function using ln(x*10^e) = ln(x) + e*ln(10).
      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
      x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
      Ctor.precision = pr;

      return sd == null ? finalise(x, pr, rm, external = true) : x;
    }

    // x1 is x reduced to a value near 1.
    x1 = x;

    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;

    for (;;) {
      numerator = finalise(numerator.times(x2), wpr, 1);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);

        // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
        // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
        sum = divide(sum, new Ctor(n), wpr, 1);

        // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
        // been repeated previously) and the first 4 rounding digits 9999?
        // If so, restart the summation with a higher precision, otherwise
        // e.g. with precision: 12, rounding: 1
        // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {
          if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += guard;
            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
            x2 = finalise(x.times(x), wpr, 1);
            denominator = rep = 1;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
      denominator += 2;
    }
  }


  // ±Infinity, NaN.
  function nonFiniteToString(x) {
    // Unsigned.
    return String(x.s * x.s / 0);
  }


  /*
   * Parse the value of a new Decimal `x` from string `str`.
   */
  function parseDecimal(x, str) {
    var e, i, len;

    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);

    if (str) {
      len -= i;
      x.e = e = e - i - 1;
      x.d = [];

      // Transform base

      // e is the base 10 exponent.
      // i is where to slice str to get the first word of the digits array.
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;

      if (i < len) {
        if (i) x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }

      for (; i--;) str += '0';
      x.d.push(+str);

      if (external) {

        // Overflow?
        if (x.e > x.constructor.maxE) {

          // Infinity.
          x.d = null;
          x.e = NaN;

        // Underflow?
        } else if (x.e < x.constructor.minE) {

          // Zero.
          x.e = 0;
          x.d = [0];
          // x.constructor.underflow = true;
        } // else x.constructor.underflow = false;
      }
    } else {

      // Zero.
      x.e = 0;
      x.d = [0];
    }

    return x;
  }


  /*
   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
   */
  function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

    if (str === 'Infinity' || str === 'NaN') {
      if (!+str) x.s = NaN;
      x.e = NaN;
      x.d = null;
      return x;
    }

    if (isHex.test(str))  {
      base = 16;
      str = str.toLowerCase();
    } else if (isBinary.test(str))  {
      base = 2;
    } else if (isOctal.test(str))  {
      base = 8;
    } else {
      throw Error(invalidArgument + str);
    }

    // Is there a binary exponent part?
    i = str.search(/p/i);

    if (i > 0) {
      p = +str.slice(i + 1);
      str = str.substring(2, i);
    } else {
      str = str.slice(2);
    }

    // Convert `str` as an integer then divide the result by `base` raised to a power such that the
    // fraction part will be restored.
    i = str.indexOf('.');
    isFloat = i >= 0;
    Ctor = x.constructor;

    if (isFloat) {
      str = str.replace('.', '');
      len = str.length;
      i = len - i;

      // log[10](16) = 1.2041... , log[10](88) = 1.9444....
      divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }

    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;

    // Remove trailing zeros.
    for (i = xe; xd[i] === 0; --i) xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;

    // At what precision to perform the division to ensure exact conversion?
    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
    // Therefore using 4 * the number of digits of str will always be enough.
    if (isFloat) x = divide(x, divisor, len * 4);

    // Multiply by the binary exponent part if present.
    if (p) x = x.times(Math.abs(p) < 54 ? Math.pow(2, p) : Decimal.pow(2, p));
    external = true;

    return x;
  }


  /*
   * sin(x) = x - x^3/3! + x^5/5! - ...
   * |x| < pi/2
   *
   */
  function sine(Ctor, x) {
    var k,
      len = x.d.length;

    if (len < 3) return taylorSeries(Ctor, 2, x, x);

    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

    // Estimate the optimum number of times to use the argument reduction.
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;

    // Max k before Math.pow precision loss is 22
    x = x.times(Math.pow(5, -k));
    x = taylorSeries(Ctor, 2, x, x);

    // Reverse argument reduction
    var sin2_x,
      d5 = new Ctor(5),
      d16 = new Ctor(16),
      d20 = new Ctor(20);
    for (; k--;) {
      sin2_x = x.times(x);
      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }

    return x;
  }


  // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
  function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2,
      i = 1,
      pr = Ctor.precision,
      k = Math.ceil(pr / LOG_BASE);

    external = false;
    x2 = x.times(x);
    u = new Ctor(y);

    for (;;) {
      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
      u = isHyperbolic ? y.plus(t) : y.minus(t);
      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
      t = u.plus(y);

      if (t.d[k] !== void 0) {
        for (j = k; t.d[j] === u.d[j] && j--;);
        if (j == -1) break;
      }

      j = u;
      u = y;
      y = t;
      t = j;
      i++;
    }

    external = true;
    t.d.length = k + 1;

    return t;
  }


  // Return the absolute value of `x` reduced to less than or equal to half pi.
  function toLessThanHalfPi(Ctor, x) {
    var t,
      isNeg = x.s < 0,
      pi = getPi(Ctor, Ctor.precision, 1),
      halfPi = pi.times(0.5);

    x = x.abs();

    if (x.lte(halfPi)) {
      quadrant = isNeg ? 4 : 1;
      return x;
    }

    t = x.divToInt(pi);

    if (t.isZero()) {
      quadrant = isNeg ? 3 : 2;
    } else {
      x = x.minus(t.times(pi));

      // 0 <= x < pi
      if (x.lte(halfPi)) {
        quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
        return x;
      }

      quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
    }

    return x.minus(pi).abs();
  }


  /*
   * Return the value of Decimal `x` as a string in base `baseOut`.
   *
   * If the optional `sd` argument is present include a binary exponent suffix.
   */
  function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y,
      Ctor = x.constructor,
      isExp = sd !== void 0;

    if (isExp) {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    } else {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    }

    if (!x.isFinite()) {
      str = nonFiniteToString(x);
    } else {
      str = finiteToString(x);
      i = str.indexOf('.');

      // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
      // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
      // minBinaryExponent = floor(decimalExponent * log[2](10))
      // log[2](10) = 3.321928094887362347870319429489390175864

      if (isExp) {
        base = 2;
        if (baseOut == 16) {
          sd = sd * 4 - 3;
        } else if (baseOut == 8) {
          sd = sd * 3 - 2;
        }
      } else {
        base = baseOut;
      }

      // Convert the number as an integer then divide the result by its base raised to a power such
      // that the fraction part will be restored.

      // Non-integer.
      if (i >= 0) {
        str = str.replace('.', '');
        y = new Ctor(1);
        y.e = str.length - i;
        y.d = convertBase(finiteToString(y), 10, base);
        y.e = y.d.length;
      }

      xd = convertBase(str, 10, base);
      e = len = xd.length;

      // Remove trailing zeros.
      for (; xd[--len] == 0;) xd.pop();

      if (!xd[0]) {
        str = isExp ? '0p+0' : '0';
      } else {
        if (i < 0) {
          e--;
        } else {
          x = new Ctor(x);
          x.d = xd;
          x.e = e;
          x = divide(x, y, sd, rm, 0, base);
          xd = x.d;
          e = x.e;
          roundUp = inexact;
        }

        // The rounding digit, i.e. the digit after the digit that may be rounded up.
        i = xd[sd];
        k = base / 2;
        roundUp = roundUp || xd[sd + 1] !== void 0;

        roundUp = rm < 4
          ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
          : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
            rm === (x.s < 0 ? 8 : 7));

        xd.length = sd;

        if (roundUp) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (; ++xd[--sd] > base - 1;) {
            xd[sd] = 0;
            if (!sd) {
              ++e;
              xd.unshift(1);
            }
          }
        }

        // Determine trailing zeros.
        for (len = xd.length; !xd[len - 1]; --len);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

        // Add binary exponent suffix?
        if (isExp) {
          if (len > 1) {
            if (baseOut == 16 || baseOut == 8) {
              i = baseOut == 16 ? 4 : 3;
              for (--len; len % i; len++) str += '0';
              xd = convertBase(str, base, baseOut);
              for (len = xd.length; !xd[len - 1]; --len);

              // xd[0] will always be be 1
              for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
            } else {
              str = str.charAt(0) + '.' + str.slice(1);
            }
          }

          str =  str + (e < 0 ? 'p' : 'p+') + e;
        } else if (e < 0) {
          for (; ++e;) str = '0' + str;
          str = '0.' + str;
        } else {
          if (++e > len) for (e -= len; e-- ;) str += '0';
          else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
        }
      }

      str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
    }

    return x.s < 0 ? '-' + str : str;
  }


  // Does not strip trailing zeros.
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }


  // Decimal methods


  /*
   *  abs
   *  acos
   *  acosh
   *  add
   *  asin
   *  asinh
   *  atan
   *  atanh
   *  atan2
   *  cbrt
   *  ceil
   *  clone
   *  config
   *  cos
   *  cosh
   *  div
   *  exp
   *  floor
   *  hypot
   *  ln
   *  log
   *  log2
   *  log10
   *  max
   *  min
   *  mod
   *  mul
   *  pow
   *  random
   *  round
   *  set
   *  sign
   *  sin
   *  sinh
   *  sqrt
   *  sub
   *  tan
   *  tanh
   *  trunc
   */


  /*
   * Return a new Decimal whose value is the absolute value of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function abs(x) {
    return new this(x).abs();
  }


  /*
   * Return a new Decimal whose value is the arccosine in radians of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function acos(x) {
    return new this(x).acos();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function acosh(x) {
    return new this(x).acosh();
  }


  /*
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function add(x, y) {
    return new this(x).plus(y);
  }


  /*
   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function asin(x) {
    return new this(x).asin();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function asinh(x) {
    return new this(x).asinh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function atan(x) {
    return new this(x).atan();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function atanh(x) {
    return new this(x).atanh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi, pi]
   *
   * y {number|string|Decimal} The y-coordinate.
   * x {number|string|Decimal} The x-coordinate.
   *
   * atan2(±0, -0)               = ±pi
   * atan2(±0, +0)               = ±0
   * atan2(±0, -x)               = ±pi for x > 0
   * atan2(±0, x)                = ±0 for x > 0
   * atan2(-y, ±0)               = -pi/2 for y > 0
   * atan2(y, ±0)                = pi/2 for y > 0
   * atan2(±y, -Infinity)        = ±pi for finite y > 0
   * atan2(±y, +Infinity)        = ±0 for finite y > 0
   * atan2(±Infinity, x)         = ±pi/2 for finite x
   * atan2(±Infinity, -Infinity) = ±3*pi/4
   * atan2(±Infinity, +Infinity) = ±pi/4
   * atan2(NaN, x) = NaN
   * atan2(y, NaN) = NaN
   *
   */
  function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r,
      pr = this.precision,
      rm = this.rounding,
      wpr = pr + 4;

    // Either NaN
    if (!y.s || !x.s) {
      r = new this(NaN);

    // Both ±Infinity
    } else if (!y.d && !x.d) {
      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
      r.s = y.s;

    // x is ±Infinity or y is ±0
    } else if (!x.d || y.isZero()) {
      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
      r.s = y.s;

    // y is ±Infinity or x is ±0
    } else if (!y.d || x.isZero()) {
      r = getPi(this, wpr, 1).times(0.5);
      r.s = y.s;

    // Both non-zero and finite
    } else if (x.s < 0) {
      this.precision = wpr;
      this.rounding = 1;
      r = this.atan(divide(y, x, wpr, 1));
      x = getPi(this, wpr, 1);
      this.precision = pr;
      this.rounding = rm;
      r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
      r = this.atan(divide(y, x, wpr, 1));
    }

    return r;
  }


  /*
   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function cbrt(x) {
    return new this(x).cbrt();
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
   *
   * x {number|string|Decimal}
   *
   */
  function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
  }


  /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */
  function config(obj) {
    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
    var i, p, v,
      useDefaults = obj.defaults === true,
      ps = [
        'precision', 1, MAX_DIGITS,
        'rounding', 0, 8,
        'toExpNeg', -EXP_LIMIT, 0,
        'toExpPos', 0, EXP_LIMIT,
        'maxE', 0, EXP_LIMIT,
        'minE', -EXP_LIMIT, 0,
        'modulo', 0, 9
      ];

    for (i = 0; i < ps.length; i += 3) {
      if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ': ' + v);
      }
    }

    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (v === true || v === false || v === 0 || v === 1) {
        if (v) {
          if (typeof crypto != 'undefined' && crypto &&
            (crypto.getRandomValues || crypto.randomBytes)) {
            this[p] = true;
          } else {
            throw Error(cryptoUnavailable);
          }
        } else {
          this[p] = false;
        }
      } else {
        throw Error(invalidArgument + p + ': ' + v);
      }
    }

    return this;
  }


  /*
   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cos(x) {
    return new this(x).cos();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cosh(x) {
    return new this(x).cosh();
  }


  /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */
  function clone(obj) {
    var i, p, ps;

    /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * v {number|string|Decimal} A numeric value.
     *
     */
    function Decimal(v) {
      var e, i, t,
        x = this;

      // Decimal called without new.
      if (!(x instanceof Decimal)) return new Decimal(v);

      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
      // which points to Object.
      x.constructor = Decimal;

      // Duplicate.
      if (v instanceof Decimal) {
        x.s = v.s;
        x.e = v.e;
        x.d = (v = v.d) ? v.slice() : v;
        return;
      }

      t = typeof v;

      if (t === 'number') {
        if (v === 0) {
          x.s = 1 / v < 0 ? -1 : 1;
          x.e = 0;
          x.d = [0];
          return;
        }

        if (v < 0) {
          v = -v;
          x.s = -1;
        } else {
          x.s = 1;
        }

        // Fast path for small integers.
        if (v === ~~v && v < 1e7) {
          for (e = 0, i = v; i >= 10; i /= 10) e++;
          x.e = e;
          x.d = [v];
          return;

        // Infinity, NaN.
        } else if (v * 0 !== 0) {
          if (!v) x.s = NaN;
          x.e = NaN;
          x.d = null;
          return;
        }

        return parseDecimal(x, v.toString());

      } else if (t !== 'string') {
        throw Error(invalidArgument + v);
      }

      // Minus sign?
      if (v.charCodeAt(0) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        x.s = 1;
      }

      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }

    Decimal.prototype = P;

    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;
    Decimal.EUCLID = 9;

    Decimal.config = Decimal.set = config;
    Decimal.clone = clone;
    Decimal.isDecimal = isDecimalInstance;

    Decimal.abs = abs;
    Decimal.acos = acos;
    Decimal.acosh = acosh;        // ES6
    Decimal.add = add;
    Decimal.asin = asin;
    Decimal.asinh = asinh;        // ES6
    Decimal.atan = atan;
    Decimal.atanh = atanh;        // ES6
    Decimal.atan2 = atan2;
    Decimal.cbrt = cbrt;          // ES6
    Decimal.ceil = ceil;
    Decimal.cos = cos;
    Decimal.cosh = cosh;          // ES6
    Decimal.div = div;
    Decimal.exp = exp;
    Decimal.floor = floor;
    Decimal.hypot = hypot;        // ES6
    Decimal.ln = ln;
    Decimal.log = log;
    Decimal.log10 = log10;        // ES6
    Decimal.log2 = log2;          // ES6
    Decimal.max = max;
    Decimal.min = min;
    Decimal.mod = mod;
    Decimal.mul = mul;
    Decimal.pow = pow;
    Decimal.random = random;
    Decimal.round = round;
    Decimal.sign = sign;          // ES6
    Decimal.sin = sin;
    Decimal.sinh = sinh;          // ES6
    Decimal.sqrt = sqrt;
    Decimal.sub = sub;
    Decimal.tan = tan;
    Decimal.tanh = tanh;          // ES6
    Decimal.trunc = trunc;        // ES6

    if (obj === void 0) obj = {};
    if (obj) {
      if (obj.defaults !== true) {
        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
        for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
      }
    }

    Decimal.config(obj);

    return Decimal;
  }


  /*
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function div(x, y) {
    return new this(x).div(y);
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The power to which to raise the base of the natural log.
   *
   */
  function exp(x) {
    return new this(x).exp();
  }


  /*
   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
   *
   * x {number|string|Decimal}
   *
   */
  function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
  }


  /*
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
   *
   */
  function hypot() {
    var i, n,
      t = new this(0);

    external = false;

    for (i = 0; i < arguments.length;) {
      n = new this(arguments[i++]);
      if (!n.d) {
        if (n.s) {
          external = true;
          return new this(1 / 0);
        }
        t = n;
      } else if (t.d) {
        t = t.plus(n.times(n));
      }
    }

    external = true;

    return t.sqrt();
  }


  /*
   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
   * otherwise return false.
   *
   */
  function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.name === '[object Decimal]' || false;
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function ln(x) {
    return new this(x).ln();
  }


  /*
   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * log[y](x)
   *
   * x {number|string|Decimal} The argument of the logarithm.
   * y {number|string|Decimal} The base of the logarithm.
   *
   */
  function log(x, y) {
    return new this(x).log(y);
  }


  /*
   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log2(x) {
    return new this(x).log(2);
  }


  /*
   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log10(x) {
    return new this(x).log(10);
  }


  /*
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function max() {
    return maxOrMin(this, arguments, 'lt');
  }


  /*
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function min() {
    return maxOrMin(this, arguments, 'gt');
  }


  /*
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mod(x, y) {
    return new this(x).mod(y);
  }


  /*
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mul(x, y) {
    return new this(x).mul(y);
  }


  /*
   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The base.
   * y {number|string|Decimal} The exponent.
   *
   */
  function pow(x, y) {
    return new this(x).pow(y);
  }


  /*
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
   * are produced).
   *
   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   *
   */
  function random(sd) {
    var d, e, k, n,
      i = 0,
      r = new this(1),
      rd = [];

    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);

    k = Math.ceil(sd / LOG_BASE);

    if (!this.crypto) {
      for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

    // Browsers supporting crypto.getRandomValues.
    } else if (crypto.getRandomValues) {
      d = crypto.getRandomValues(new Uint32Array(k));

      for (; i < k;) {
        n = d[i];

        // 0 <= n < 4294967296
        // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
        if (n >= 4.29e9) {
          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
        } else {

          // 0 <= n <= 4289999999
          // 0 <= (n % 1e7) <= 9999999
          rd[i++] = n % 1e7;
        }
      }

    // Node.js supporting crypto.randomBytes.
    } else if (crypto.randomBytes) {

      // buffer
      d = crypto.randomBytes(k *= 4);

      for (; i < k;) {

        // 0 <= n < 2147483648
        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

        // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
        if (n >= 2.14e9) {
          crypto.randomBytes(4).copy(d, i);
        } else {

          // 0 <= n <= 2139999999
          // 0 <= (n % 1e7) <= 9999999
          rd.push(n % 1e7);
          i += 4;
        }
      }

      i = k / 4;
    } else {
      throw Error(cryptoUnavailable);
    }

    k = rd[--i];
    sd %= LOG_BASE;

    // Convert trailing digits to zeros according to sd.
    if (k && sd) {
      n = mathpow(10, LOG_BASE - sd);
      rd[i] = (k / n | 0) * n;
    }

    // Remove trailing words which are zero.
    for (; rd[i] === 0; i--) rd.pop();

    // Zero?
    if (i < 0) {
      e = 0;
      rd = [0];
    } else {
      e = -1;

      // Remove leading words which are zero and adjust exponent accordingly.
      for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

      // Count the digits of the first word of rd to determine leading zeros.
      for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

      // Adjust the exponent for leading zeros of the first word of rd.
      if (k < LOG_BASE) e -= LOG_BASE - k;
    }

    r.e = e;
    r.d = rd;

    return r;
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
   *
   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
   *
   * x {number|string|Decimal}
   *
   */
  function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
  }


  /*
   * Return
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   */
  function sign(x) {
    x = new this(x);
    return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
  }


  /*
   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sin(x) {
    return new this(x).sin();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sinh(x) {
    return new this(x).sinh();
  }


  /*
   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function sqrt(x) {
    return new this(x).sqrt();
  }


  /*
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function sub(x, y) {
    return new this(x).sub(y);
  }


  /*
   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tan(x) {
    return new this(x).tan();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tanh(x) {
    return new this(x).tanh();
  }


  /*
   * Return a new Decimal whose value is `x` truncated to an integer.
   *
   * x {number|string|Decimal}
   *
   */
  function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
  }


  // Create and configure initial Decimal constructor.
  Decimal = clone(DEFAULTS);

  Decimal['default'] = Decimal.Decimal = Decimal;

  // Create the internal constants from their string values.
  LN10 = new Decimal(LN10);
  PI = new Decimal(PI);


  // Export.


  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Decimal;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/escape-latex/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/escape-latex/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Map the characters to escape to their escaped values. The list is derived
// from http://www.cespedes.org/blog/85/how-to-escape-latex-special-characters

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultEscapes = {
  "{": "\\{",
  "}": "\\}",
  "\\": "\\textbackslash{}",
  "#": "\\#",
  $: "\\$",
  "%": "\\%",
  "&": "\\&",
  "^": "\\textasciicircum{}",
  _: "\\_",
  "~": "\\textasciitilde{}"
};
var formatEscapes = {
  "–": "\\--",
  "—": "\\---",
  " ": "~",
  "\t": "\\qquad{}",
  "\r\n": "\\\\newline{}",
  "\n": "\\\\newline{}"
};

var defaultEscapeMapFn = function defaultEscapeMapFn(defaultEscapes, formatEscapes) {
  return _extends({}, defaultEscapes, formatEscapes);
};

/**
 * Escape a string to be used in LaTeX documents.
 * @param {string} str the string to be escaped.
 * @param {boolean} params.preserveFormatting whether formatting escapes should
 *  be performed (default: false).
 * @param {function} params.escapeMapFn the function to modify the escape maps.
 * @return {string} the escaped string, ready to be used in LaTeX.
 */
module.exports = function (str) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$preserveFormatti = _ref.preserveFormatting,
      preserveFormatting = _ref$preserveFormatti === undefined ? false : _ref$preserveFormatti,
      _ref$escapeMapFn = _ref.escapeMapFn,
      escapeMapFn = _ref$escapeMapFn === undefined ? defaultEscapeMapFn : _ref$escapeMapFn;

  var runningStr = String(str);
  var result = "";

  var escapes = escapeMapFn(_extends({}, defaultEscapes), preserveFormatting ? _extends({}, formatEscapes) : {});
  var escapeKeys = Object.keys(escapes); // as it is reused later on

  // Algorithm: Go through the string character by character, if it matches
  // with one of the special characters then we'll replace it with the escaped
  // version.

  var _loop = function _loop() {
    var specialCharFound = false;
    escapeKeys.forEach(function (key, index) {
      if (specialCharFound) {
        return;
      }
      if (runningStr.length >= key.length && runningStr.slice(0, key.length) === key) {
        result += escapes[escapeKeys[index]];
        runningStr = runningStr.slice(key.length, runningStr.length);
        specialCharFound = true;
      }
    });
    if (!specialCharFound) {
      result += runningStr.slice(0, 1);
      runningStr = runningStr.slice(1, runningStr.length);
    }
  };

  while (runningStr) {
    _loop();
  }
  return result;
};

/***/ }),

/***/ "./node_modules/mathjs/core.js":
/*!*************************************!*\
  !*** ./node_modules/mathjs/core.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/core/core */ "./node_modules/mathjs/lib/core/core.js")


/***/ }),

/***/ "./node_modules/mathjs/lib/core/core.js":
/*!**********************************************!*\
  !*** ./node_modules/mathjs/lib/core/core.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./../utils/polyfills */ "./node_modules/mathjs/lib/utils/polyfills.js");

var isFactory = __webpack_require__(/*! ./../utils/object */ "./node_modules/mathjs/lib/utils/object.js").isFactory;
var typedFactory = __webpack_require__(/*! ./typed */ "./node_modules/mathjs/lib/core/typed.js");
var emitter = __webpack_require__(/*! ./../utils/emitter */ "./node_modules/mathjs/lib/utils/emitter.js");

var importFactory = __webpack_require__(/*! ./function/import */ "./node_modules/mathjs/lib/core/function/import.js");
var configFactory = __webpack_require__(/*! ./function/config */ "./node_modules/mathjs/lib/core/function/config.js");

/**
 * Math.js core. Creates a new, empty math.js instance
 * @param {Object} [options] Available options:
 *                            {number} epsilon
 *                              Minimum relative difference between two
 *                              compared values, used by all comparison functions.
 *                            {string} matrix
 *                              A string 'Matrix' (default) or 'Array'.
 *                            {string} number
 *                              A string 'number' (default), 'BigNumber', or 'Fraction'
 *                            {number} precision
 *                              The number of significant digits for BigNumbers.
 *                              Not applicable for Numbers.
 *                            {boolean} predictable
 *                              Predictable output type of functions. When true,
 *                              output type depends only on the input types. When
 *                              false (default), output type can vary depending
 *                              on input values. For example `math.sqrt(-4)`
 *                              returns `complex('2i')` when predictable is false, and
 *                              returns `NaN` when true.
 *                            {string} randomSeed
 *                              Random seed for seeded pseudo random number generator.
 *                              Set to null to randomly seed.
 * @returns {Object} Returns a bare-bone math.js instance containing
 *                   functions:
 *                   - `import` to add new functions
 *                   - `config` to change configuration
 *                   - `on`, `off`, `once`, `emit` for events
 */
exports.create = function create(options) {
  // simple test for ES5 support
  if (typeof Object.create !== 'function') {
    throw new Error('ES5 not supported by this JavaScript engine. ' + 'Please load the es5-shim and es5-sham library for compatibility.');
  }

  // cached factories and instances
  var factories = [];
  var instances = [];

  // create a namespace for the mathjs instance, and attach emitter functions
  var math = emitter.mixin({});
  math.type = {};
  math.expression = {
    transform: {},
    mathWithTransform: {}

    // create a new typed instance
  };math.typed = typedFactory.create(math.type);

  // create configuration options. These are private
  var _config = {
    // minimum relative difference between two compared values,
    // used by all comparison functions
    epsilon: 1e-12,

    // type of default matrix output. Choose 'matrix' (default) or 'array'
    matrix: 'Matrix',

    // type of default number output. Choose 'number' (default) 'BigNumber', or 'Fraction
    number: 'number',

    // number of significant digits in BigNumbers
    precision: 64,

    // predictable output type of functions. When true, output type depends only
    // on the input types. When false (default), output type can vary depending
    // on input values. For example `math.sqrt(-4)` returns `complex('2i')` when
    // predictable is false, and returns `NaN` when true.
    predictable: false,

    // random seed for seeded pseudo random number generation
    // null = randomly seed
    randomSeed: null

    /**
     * Load a function or data type from a factory.
     * If the function or data type already exists, the existing instance is
     * returned.
     * @param {{type: string, name: string, factory: Function}} factory
     * @returns {*}
     */
  };function load(factory) {
    if (!isFactory(factory)) {
      throw new Error('Factory object with properties `type`, `name`, and `factory` expected');
    }

    var index = factories.indexOf(factory);
    var instance = void 0;
    if (index === -1) {
      // doesn't yet exist
      if (factory.math === true) {
        // pass with math namespace
        instance = factory.factory(math.type, _config, load, math.typed, math);
      } else {
        instance = factory.factory(math.type, _config, load, math.typed);
      }

      // append to the cache
      factories.push(factory);
      instances.push(instance);
    } else {
      // already existing function, return the cached instance
      instance = instances[index];
    }

    return instance;
  }

  // load the import and config functions
  math['import'] = load(importFactory);
  math['config'] = load(configFactory);
  math.expression.mathWithTransform['config'] = math['config'];

  // apply options
  if (options) {
    math.config(options);
  }

  return math;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/core/function/config.js":
/*!*********************************************************!*\
  !*** ./node_modules/mathjs/lib/core/function/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var object = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js");

function factory(type, config, load, typed, math) {
  var MATRIX = ['Matrix', 'Array']; // valid values for option matrix
  var NUMBER = ['number', 'BigNumber', 'Fraction']; // valid values for option number

  /**
   * Set configuration options for math.js, and get current options.
   * Will emit a 'config' event, with arguments (curr, prev, changes).
   *
   * Syntax:
   *
   *     math.config(config: Object): Object
   *
   * Examples:
   *
   *     math.config().number                // outputs 'number'
   *     math.eval('0.4')                    // outputs number 0.4
   *     math.config({number: 'Fraction'})
   *     math.eval('0.4')                    // outputs Fraction 2/5
   *
   * @param {Object} [options] Available options:
   *                            {number} epsilon
   *                              Minimum relative difference between two
   *                              compared values, used by all comparison functions.
   *                            {string} matrix
   *                              A string 'Matrix' (default) or 'Array'.
   *                            {string} number
   *                              A string 'number' (default), 'BigNumber', or 'Fraction'
   *                            {number} precision
   *                              The number of significant digits for BigNumbers.
   *                              Not applicable for Numbers.
   *                            {string} parenthesis
   *                              How to display parentheses in LaTeX and string
   *                              output.
   *                            {string} randomSeed
   *                              Random seed for seeded pseudo random number generator.
   *                              Set to null to randomly seed.
   * @return {Object} Returns the current configuration
   */
  function _config(options) {
    if (options) {
      var prev = object.map(config, object.clone);

      // validate some of the options
      validateOption(options, 'matrix', MATRIX);
      validateOption(options, 'number', NUMBER);

      // merge options
      object.deepExtend(config, options);

      var curr = object.map(config, object.clone);

      var changes = object.map(options, object.clone);

      // emit 'config' event
      math.emit('config', curr, prev, changes);

      return curr;
    } else {
      return object.map(config, object.clone);
    }
  }

  // attach the valid options to the function so they can be extended
  _config.MATRIX = MATRIX;
  _config.NUMBER = NUMBER;

  return _config;
}

/**
 * Test whether an Array contains a specific item.
 * @param {Array.<string>} array
 * @param {string} item
 * @return {boolean}
 */
function contains(array, item) {
  return array.indexOf(item) !== -1;
}

/**
 * Find a string in an array. Case insensitive search
 * @param {Array.<string>} array
 * @param {string} item
 * @return {number} Returns the index when found. Returns -1 when not found
 */
function findIndex(array, item) {
  return array.map(function (i) {
    return i.toLowerCase();
  }).indexOf(item.toLowerCase());
}

/**
 * Validate an option
 * @param {Object} options         Object with options
 * @param {string} name            Name of the option to validate
 * @param {Array.<string>} values  Array with valid values for this option
 */
function validateOption(options, name, values) {
  if (options[name] !== undefined && !contains(values, options[name])) {
    var index = findIndex(values, options[name]);
    if (index !== -1) {
      // right value, wrong casing
      // TODO: lower case values are deprecated since v3, remove this warning some day.
      console.warn('Warning: Wrong casing for configuration option "' + name + '", should be "' + values[index] + '" instead of "' + options[name] + '".');

      options[name] = values[index]; // change the option to the right casing
    } else {
      // unknown value
      console.warn('Warning: Unknown value "' + options[name] + '" for configuration option "' + name + '". Available options: ' + values.map(JSON.stringify).join(', ') + '.');
    }
  }
}

exports.name = 'config';
exports.math = true; // request the math namespace as fifth argument
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/core/function/import.js":
/*!*********************************************************!*\
  !*** ./node_modules/mathjs/lib/core/function/import.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lazy = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").lazy;
var isFactory = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").isFactory;
var traverse = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").traverse;
var ArgumentsError = __webpack_require__(/*! ../../error/ArgumentsError */ "./node_modules/mathjs/lib/error/ArgumentsError.js");

function factory(type, config, load, typed, math) {
  /**
   * Import functions from an object or a module
   *
   * Syntax:
   *
   *    math.import(object)
   *    math.import(object, options)
   *
   * Where:
   *
   * - `object: Object`
   *   An object with functions to be imported.
   * - `options: Object` An object with import options. Available options:
   *   - `override: boolean`
   *     If true, existing functions will be overwritten. False by default.
   *   - `silent: boolean`
   *     If true, the function will not throw errors on duplicates or invalid
   *     types. False by default.
   *   - `wrap: boolean`
   *     If true, the functions will be wrapped in a wrapper function
   *     which converts data types like Matrix to primitive data types like Array.
   *     The wrapper is needed when extending math.js with libraries which do not
   *     support these data type. False by default.
   *
   * Examples:
   *
   *    // define new functions and variables
   *    math.import({
   *      myvalue: 42,
   *      hello: function (name) {
   *        return 'hello, ' + name + '!'
   *      }
   *    })
   *
   *    // use the imported function and variable
   *    math.myvalue * 2               // 84
   *    math.hello('user')             // 'hello, user!'
   *
   *    // import the npm module 'numbers'
   *    // (must be installed first with `npm install numbers`)
   *    math.import(require('numbers'), {wrap: true})
   *
   *    math.fibonacci(7) // returns 13
   *
   * @param {Object | Array} object   Object with functions to be imported.
   * @param {Object} [options]        Import options.
   */
  function mathImport(object, options) {
    var num = arguments.length;
    if (num !== 1 && num !== 2) {
      throw new ArgumentsError('import', num, 1, 2);
    }

    if (!options) {
      options = {};
    }

    // TODO: allow a typed-function with name too
    if (isFactory(object)) {
      _importFactory(object, options);
    } else if (Array.isArray(object)) {
      object.forEach(function (entry) {
        mathImport(entry, options);
      });
    } else if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
      // a map with functions
      for (var name in object) {
        if (object.hasOwnProperty(name)) {
          var value = object[name];
          if (isSupportedType(value)) {
            _import(name, value, options);
          } else if (isFactory(object)) {
            _importFactory(object, options);
          } else {
            mathImport(value, options);
          }
        }
      }
    } else {
      if (!options.silent) {
        throw new TypeError('Factory, Object, or Array expected');
      }
    }
  }

  /**
   * Add a property to the math namespace and create a chain proxy for it.
   * @param {string} name
   * @param {*} value
   * @param {Object} options  See import for a description of the options
   * @private
   */
  function _import(name, value, options) {
    // TODO: refactor this function, it's to complicated and contains duplicate code
    if (options.wrap && typeof value === 'function') {
      // create a wrapper around the function
      value = _wrap(value);
    }

    if (isTypedFunction(math[name]) && isTypedFunction(value)) {
      if (options.override) {
        // give the typed function the right name
        value = typed(name, value.signatures);
      } else {
        // merge the existing and typed function
        value = typed(math[name], value);
      }

      math[name] = value;
      _importTransform(name, value);
      math.emit('import', name, function resolver() {
        return value;
      });
      return;
    }

    if (math[name] === undefined || options.override) {
      math[name] = value;
      _importTransform(name, value);
      math.emit('import', name, function resolver() {
        return value;
      });
      return;
    }

    if (!options.silent) {
      throw new Error('Cannot import "' + name + '": already exists');
    }
  }

  function _importTransform(name, value) {
    if (value && typeof value.transform === 'function') {
      math.expression.transform[name] = value.transform;
      if (allowedInExpressions(name)) {
        math.expression.mathWithTransform[name] = value.transform;
      }
    } else {
      // remove existing transform
      delete math.expression.transform[name];
      if (allowedInExpressions(name)) {
        math.expression.mathWithTransform[name] = value;
      }
    }
  }

  function _deleteTransform(name) {
    delete math.expression.transform[name];
    if (allowedInExpressions(name)) {
      math.expression.mathWithTransform[name] = math[name];
    } else {
      delete math.expression.mathWithTransform[name];
    }
  }

  /**
   * Create a wrapper a round an function which converts the arguments
   * to their primitive values (like convert a Matrix to Array)
   * @param {Function} fn
   * @return {Function} Returns the wrapped function
   * @private
   */
  function _wrap(fn) {
    var wrapper = function wrapper() {
      var args = [];
      for (var i = 0, len = arguments.length; i < len; i++) {
        var arg = arguments[i];
        args[i] = arg && arg.valueOf();
      }
      return fn.apply(math, args);
    };

    if (fn.transform) {
      wrapper.transform = fn.transform;
    }

    return wrapper;
  }

  /**
   * Import an instance of a factory into math.js
   * @param {{factory: Function, name: string, path: string, math: boolean}} factory
   * @param {Object} options  See import for a description of the options
   * @private
   */
  function _importFactory(factory, options) {
    if (typeof factory.name === 'string') {
      var name = factory.name;
      var existingTransform = name in math.expression.transform;
      var namespace = factory.path ? traverse(math, factory.path) : math;
      var existing = namespace.hasOwnProperty(name) ? namespace[name] : undefined;

      var resolver = function resolver() {
        var instance = load(factory);
        if (instance && typeof instance.transform === 'function') {
          throw new Error('Transforms cannot be attached to factory functions. ' + 'Please create a separate function for it with exports.path="expression.transform"');
        }

        if (isTypedFunction(existing) && isTypedFunction(instance)) {
          if (options.override) {
            // replace the existing typed function (nothing to do)
          } else {
            // merge the existing and new typed function
            instance = typed(existing, instance);
          }

          return instance;
        }

        if (existing === undefined || options.override) {
          return instance;
        }

        if (!options.silent) {
          throw new Error('Cannot import "' + name + '": already exists');
        }
      };

      if (factory.lazy !== false) {
        lazy(namespace, name, resolver);

        if (existingTransform) {
          _deleteTransform(name);
        } else {
          if (factory.path === 'expression.transform' || factoryAllowedInExpressions(factory)) {
            lazy(math.expression.mathWithTransform, name, resolver);
          }
        }
      } else {
        namespace[name] = resolver();

        if (existingTransform) {
          _deleteTransform(name);
        } else {
          if (factory.path === 'expression.transform' || factoryAllowedInExpressions(factory)) {
            math.expression.mathWithTransform[name] = resolver();
          }
        }
      }

      math.emit('import', name, resolver, factory.path);
    } else {
      // unnamed factory.
      // no lazy loading
      load(factory);
    }
  }

  /**
   * Check whether given object is a type which can be imported
   * @param {Function | number | string | boolean | null | Unit | Complex} object
   * @return {boolean}
   * @private
   */
  function isSupportedType(object) {
    return typeof object === 'function' || typeof object === 'number' || typeof object === 'string' || typeof object === 'boolean' || object === null || object && type.isUnit(object) || object && type.isComplex(object) || object && type.isBigNumber(object) || object && type.isFraction(object) || object && type.isMatrix(object) || object && Array.isArray(object);
  }

  /**
   * Test whether a given thing is a typed-function
   * @param {*} fn
   * @return {boolean} Returns true when `fn` is a typed-function
   */
  function isTypedFunction(fn) {
    return typeof fn === 'function' && _typeof(fn.signatures) === 'object';
  }

  function allowedInExpressions(name) {
    return !unsafe.hasOwnProperty(name);
  }

  function factoryAllowedInExpressions(factory) {
    return factory.path === undefined && !unsafe.hasOwnProperty(factory.name);
  }

  // namespaces and functions not available in the parser for safety reasons
  var unsafe = {
    'expression': true,
    'type': true,
    'docs': true,
    'error': true,
    'json': true,
    'chain': true // chain method not supported. Note that there is a unit chain too.
  };

  return mathImport;
}

exports.math = true; // request access to the math namespace as 5th argument of the factory function
exports.name = 'import';
exports.factory = factory;
exports.lazy = true;

/***/ }),

/***/ "./node_modules/mathjs/lib/core/typed.js":
/*!***********************************************!*\
  !*** ./node_modules/mathjs/lib/core/typed.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var typedFunction = __webpack_require__(/*! typed-function */ "./node_modules/typed-function/typed-function.js");
var digits = __webpack_require__(/*! ./../utils/number */ "./node_modules/mathjs/lib/utils/number.js").digits;
var isBigNumber = __webpack_require__(/*! ./../utils/bignumber/isBigNumber */ "./node_modules/mathjs/lib/utils/bignumber/isBigNumber.js");
var isMatrix = __webpack_require__(/*! ./../utils/collection/isMatrix */ "./node_modules/mathjs/lib/utils/collection/isMatrix.js");

// returns a new instance of typed-function
var _createTyped = function createTyped() {
  // initially, return the original instance of typed-function
  // consecutively, return a new instance from typed.create.
  _createTyped = typedFunction.create;
  return typedFunction;
};

/**
 * Factory function for creating a new typed instance
 * @param {Object} type   Object with data types like Complex and BigNumber
 * @returns {Function}
 */
exports.create = function create(type) {
  // TODO: typed-function must be able to silently ignore signatures with unknown data types

  // type checks for all known types
  //
  // note that:
  //
  // - check by duck-typing on a property like `isUnit`, instead of checking instanceof.
  //   instanceof cannot be used because that would not allow to pass data from
  //   one instance of math.js to another since each has it's own instance of Unit.
  // - check the `isUnit` property via the constructor, so there will be no
  //   matches for "fake" instances like plain objects with a property `isUnit`.
  //   That is important for security reasons.
  // - It must not be possible to override the type checks used internally,
  //   for security reasons, so these functions are not exposed in the expression
  //   parser.
  type.isNumber = function (x) {
    return typeof x === 'number';
  };
  type.isComplex = function (x) {
    return type.Complex && x instanceof type.Complex || false;
  };
  type.isBigNumber = isBigNumber;
  type.isFraction = function (x) {
    return type.Fraction && x instanceof type.Fraction || false;
  };
  type.isUnit = function (x) {
    return x && x.constructor.prototype.isUnit || false;
  };
  type.isString = function (x) {
    return typeof x === 'string';
  };
  type.isArray = Array.isArray;
  type.isMatrix = isMatrix;
  type.isDenseMatrix = function (x) {
    return x && x.isDenseMatrix && x.constructor.prototype.isMatrix || false;
  };
  type.isSparseMatrix = function (x) {
    return x && x.isSparseMatrix && x.constructor.prototype.isMatrix || false;
  };
  type.isRange = function (x) {
    return x && x.constructor.prototype.isRange || false;
  };
  type.isIndex = function (x) {
    return x && x.constructor.prototype.isIndex || false;
  };
  type.isBoolean = function (x) {
    return typeof x === 'boolean';
  };
  type.isResultSet = function (x) {
    return x && x.constructor.prototype.isResultSet || false;
  };
  type.isHelp = function (x) {
    return x && x.constructor.prototype.isHelp || false;
  };
  type.isFunction = function (x) {
    return typeof x === 'function';
  };
  type.isDate = function (x) {
    return x instanceof Date;
  };
  type.isRegExp = function (x) {
    return x instanceof RegExp;
  };
  type.isObject = function (x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object && !type.isComplex(x) && !type.isFraction(x);
  };
  type.isNull = function (x) {
    return x === null;
  };
  type.isUndefined = function (x) {
    return x === undefined;
  };

  type.isAccessorNode = function (x) {
    return x && x.isAccessorNode && x.constructor.prototype.isNode || false;
  };
  type.isArrayNode = function (x) {
    return x && x.isArrayNode && x.constructor.prototype.isNode || false;
  };
  type.isAssignmentNode = function (x) {
    return x && x.isAssignmentNode && x.constructor.prototype.isNode || false;
  };
  type.isBlockNode = function (x) {
    return x && x.isBlockNode && x.constructor.prototype.isNode || false;
  };
  type.isConditionalNode = function (x) {
    return x && x.isConditionalNode && x.constructor.prototype.isNode || false;
  };
  type.isConstantNode = function (x) {
    return x && x.isConstantNode && x.constructor.prototype.isNode || false;
  };
  type.isFunctionAssignmentNode = function (x) {
    return x && x.isFunctionAssignmentNode && x.constructor.prototype.isNode || false;
  };
  type.isFunctionNode = function (x) {
    return x && x.isFunctionNode && x.constructor.prototype.isNode || false;
  };
  type.isIndexNode = function (x) {
    return x && x.isIndexNode && x.constructor.prototype.isNode || false;
  };
  type.isNode = function (x) {
    return x && x.isNode && x.constructor.prototype.isNode || false;
  };
  type.isObjectNode = function (x) {
    return x && x.isObjectNode && x.constructor.prototype.isNode || false;
  };
  type.isOperatorNode = function (x) {
    return x && x.isOperatorNode && x.constructor.prototype.isNode || false;
  };
  type.isParenthesisNode = function (x) {
    return x && x.isParenthesisNode && x.constructor.prototype.isNode || false;
  };
  type.isRangeNode = function (x) {
    return x && x.isRangeNode && x.constructor.prototype.isNode || false;
  };
  type.isSymbolNode = function (x) {
    return x && x.isSymbolNode && x.constructor.prototype.isNode || false;
  };

  type.isChain = function (x) {
    return x && x.constructor.prototype.isChain || false;
  };

  // get a new instance of typed-function
  var typed = _createTyped();

  // define all types. The order of the types determines in which order function
  // arguments are type-checked (so for performance it's important to put the
  // most used types first).
  typed.types = [{ name: 'number', test: type.isNumber }, { name: 'Complex', test: type.isComplex }, { name: 'BigNumber', test: type.isBigNumber }, { name: 'Fraction', test: type.isFraction }, { name: 'Unit', test: type.isUnit }, { name: 'string', test: type.isString }, { name: 'Array', test: type.isArray }, { name: 'Matrix', test: type.isMatrix }, { name: 'DenseMatrix', test: type.isDenseMatrix }, { name: 'SparseMatrix', test: type.isSparseMatrix }, { name: 'Range', test: type.isRange }, { name: 'Index', test: type.isIndex }, { name: 'boolean', test: type.isBoolean }, { name: 'ResultSet', test: type.isResultSet }, { name: 'Help', test: type.isHelp }, { name: 'function', test: type.isFunction }, { name: 'Date', test: type.isDate }, { name: 'RegExp', test: type.isRegExp }, { name: 'null', test: type.isNull }, { name: 'undefined', test: type.isUndefined }, { name: 'OperatorNode', test: type.isOperatorNode }, { name: 'ConstantNode', test: type.isConstantNode }, { name: 'SymbolNode', test: type.isSymbolNode }, { name: 'ParenthesisNode', test: type.isParenthesisNode }, { name: 'FunctionNode', test: type.isFunctionNode }, { name: 'FunctionAssignmentNode', test: type.isFunctionAssignmentNode }, { name: 'ArrayNode', test: type.isArrayNode }, { name: 'AssignmentNode', test: type.isAssignmentNode }, { name: 'BlockNode', test: type.isBlockNode }, { name: 'ConditionalNode', test: type.isConditionalNode }, { name: 'IndexNode', test: type.isIndexNode }, { name: 'RangeNode', test: type.isRangeNode }, { name: 'Node', test: type.isNode }, { name: 'Object', test: type.isObject // order 'Object' last, it matches on other classes too
  }];

  // TODO: add conversion from BigNumber to number?
  typed.conversions = [{
    from: 'number',
    to: 'BigNumber',
    convert: function convert(x) {
      // note: conversion from number to BigNumber can fail if x has >15 digits
      if (digits(x) > 15) {
        throw new TypeError('Cannot implicitly convert a number with >15 significant digits to BigNumber ' + '(value: ' + x + '). ' + 'Use function bignumber(x) to convert to BigNumber.');
      }
      return new type.BigNumber(x);
    }
  }, {
    from: 'number',
    to: 'Complex',
    convert: function convert(x) {
      return new type.Complex(x, 0);
    }
  }, {
    from: 'number',
    to: 'string',
    convert: function convert(x) {
      return x + '';
    }
  }, {
    from: 'BigNumber',
    to: 'Complex',
    convert: function convert(x) {
      return new type.Complex(x.toNumber(), 0);
    }
  }, {
    from: 'Fraction',
    to: 'BigNumber',
    convert: function convert(x) {
      throw new TypeError('Cannot implicitly convert a Fraction to BigNumber or vice versa. ' + 'Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.');
    }
  }, {
    from: 'Fraction',
    to: 'Complex',
    convert: function convert(x) {
      return new type.Complex(x.valueOf(), 0);
    }
  }, {
    from: 'number',
    to: 'Fraction',
    convert: function convert(x) {
      var f = new type.Fraction(x);
      if (f.valueOf() !== x) {
        throw new TypeError('Cannot implicitly convert a number to a Fraction when there will be a loss of precision ' + '(value: ' + x + '). ' + 'Use function fraction(x) to convert to Fraction.');
      }
      return new type.Fraction(x);
    }
  }, {
    // FIXME: add conversion from Fraction to number, for example for `sqrt(fraction(1,3))`
    //  from: 'Fraction',
    //  to: 'number',
    //  convert: function (x) {
    //    return x.valueOf()
    //  }
    // }, {
    from: 'string',
    to: 'number',
    convert: function convert(x) {
      var n = Number(x);
      if (isNaN(n)) {
        throw new Error('Cannot convert "' + x + '" to a number');
      }
      return n;
    }
  }, {
    from: 'string',
    to: 'BigNumber',
    convert: function convert(x) {
      try {
        return new type.BigNumber(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to BigNumber');
      }
    }
  }, {
    from: 'string',
    to: 'Fraction',
    convert: function convert(x) {
      try {
        return new type.Fraction(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Fraction');
      }
    }
  }, {
    from: 'string',
    to: 'Complex',
    convert: function convert(x) {
      try {
        return new type.Complex(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Complex');
      }
    }
  }, {
    from: 'boolean',
    to: 'number',
    convert: function convert(x) {
      return +x;
    }
  }, {
    from: 'boolean',
    to: 'BigNumber',
    convert: function convert(x) {
      return new type.BigNumber(+x);
    }
  }, {
    from: 'boolean',
    to: 'Fraction',
    convert: function convert(x) {
      return new type.Fraction(+x);
    }
  }, {
    from: 'boolean',
    to: 'string',
    convert: function convert(x) {
      return +x;
    }
  }, {
    from: 'Array',
    to: 'Matrix',
    convert: function convert(array) {
      return new type.DenseMatrix(array);
    }
  }, {
    from: 'Matrix',
    to: 'Array',
    convert: function convert(matrix) {
      return matrix.valueOf();
    }
  }];

  return typed;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/error/ArgumentsError.js":
/*!*********************************************************!*\
  !*** ./node_modules/mathjs/lib/error/ArgumentsError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Create a syntax error with the message:
 *     'Wrong number of arguments in function <fn> (<count> provided, <min>-<max> expected)'
 * @param {string} fn     Function name
 * @param {number} count  Actual argument count
 * @param {number} min    Minimum required argument count
 * @param {number} [max]  Maximum required argument count
 * @extends Error
 */

function ArgumentsError(fn, count, min, max) {
  if (!(this instanceof ArgumentsError)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.fn = fn;
  this.count = count;
  this.min = min;
  this.max = max;

  this.message = 'Wrong number of arguments in function ' + fn + ' (' + count + ' provided, ' + min + (max !== undefined && max !== null ? '-' + max : '') + ' expected)';

  this.stack = new Error().stack;
}

ArgumentsError.prototype = new Error();
ArgumentsError.prototype.constructor = Error;
ArgumentsError.prototype.name = 'ArgumentsError';
ArgumentsError.prototype.isArgumentsError = true;

module.exports = ArgumentsError;

/***/ }),

/***/ "./node_modules/mathjs/lib/error/DimensionError.js":
/*!*********************************************************!*\
  !*** ./node_modules/mathjs/lib/error/DimensionError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Create a range error with the message:
 *     'Dimension mismatch (<actual size> != <expected size>)'
 * @param {number | number[]} actual        The actual size
 * @param {number | number[]} expected      The expected size
 * @param {string} [relation='!=']          Optional relation between actual
 *                                          and expected size: '!=', '<', etc.
 * @extends RangeError
 */

function DimensionError(actual, expected, relation) {
  if (!(this instanceof DimensionError)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.actual = actual;
  this.expected = expected;
  this.relation = relation;

  this.message = 'Dimension mismatch (' + (Array.isArray(actual) ? '[' + actual.join(', ') + ']' : actual) + ' ' + (this.relation || '!=') + ' ' + (Array.isArray(expected) ? '[' + expected.join(', ') + ']' : expected) + ')';

  this.stack = new Error().stack;
}

DimensionError.prototype = new RangeError();
DimensionError.prototype.constructor = RangeError;
DimensionError.prototype.name = 'DimensionError';
DimensionError.prototype.isDimensionError = true;

module.exports = DimensionError;

/***/ }),

/***/ "./node_modules/mathjs/lib/error/IndexError.js":
/*!*****************************************************!*\
  !*** ./node_modules/mathjs/lib/error/IndexError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Create a range error with the message:
 *     'Index out of range (index < min)'
 *     'Index out of range (index < max)'
 *
 * @param {number} index     The actual index
 * @param {number} [min=0]   Minimum index (included)
 * @param {number} [max]     Maximum index (excluded)
 * @extends RangeError
 */

function IndexError(index, min, max) {
  if (!(this instanceof IndexError)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.index = index;
  if (arguments.length < 3) {
    this.min = 0;
    this.max = min;
  } else {
    this.min = min;
    this.max = max;
  }

  if (this.min !== undefined && this.index < this.min) {
    this.message = 'Index out of range (' + this.index + ' < ' + this.min + ')';
  } else if (this.max !== undefined && this.index >= this.max) {
    this.message = 'Index out of range (' + this.index + ' > ' + (this.max - 1) + ')';
  } else {
    this.message = 'Index out of range (' + this.index + ')';
  }

  this.stack = new Error().stack;
}

IndexError.prototype = new RangeError();
IndexError.prototype.constructor = RangeError;
IndexError.prototype.name = 'IndexError';
IndexError.prototype.isIndexError = true;

module.exports = IndexError;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/arithmetic/add.js":
/*!************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/arithmetic/add.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").extend;

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(/*! ../../type/matrix/function/matrix */ "./node_modules/mathjs/lib/type/matrix/function/matrix.js"));
  var addScalar = load(__webpack_require__(/*! ./addScalar */ "./node_modules/mathjs/lib/function/arithmetic/addScalar.js"));
  var latex = __webpack_require__(/*! ../../utils/latex.js */ "./node_modules/mathjs/lib/utils/latex.js");

  var algorithm01 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm01 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm01.js"));
  var algorithm04 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm04 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm04.js"));
  var algorithm10 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm10 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm10.js"));
  var algorithm13 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm13 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm13.js"));
  var algorithm14 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm14 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm14.js"));

  /**
   * Add two or more values, `x + y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.add(x, y)
   *    math.add(x, y, z, ...)
   *
   * Examples:
   *
   *    math.add(2, 3)               // returns number 5
   *    math.add(2, 3, 4)            // returns number 9
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(-4, 1)
   *    math.add(a, b)               // returns Complex -2 + 4i
   *
   *    math.add([1, 2, 3], 4)       // returns Array [5, 6, 7]
   *
   *    const c = math.unit('5 cm')
   *    const d = math.unit('2.1 mm')
   *    math.add(c, d)               // returns Unit 52.1 mm
   *
   *    math.add("2.3", "4")         // returns number 6.3
   *
   * See also:
   *
   *    subtract, sum
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x First value to add
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Second value to add
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} Sum of `x` and `y`
   */
  var add = typed('add', extend({
    // we extend the signatures of addScalar with signatures dealing with matrices

    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, addScalar);
    },

    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm01(x, y, addScalar, false);
    },

    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm01(y, x, addScalar, true);
    },

    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm04(x, y, addScalar);
    },

    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return add(matrix(x), matrix(y)).valueOf();
    },

    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return add(matrix(x), y);
    },

    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return add(x, matrix(y));
    },

    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, addScalar, false);
    },

    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm10(x, y, addScalar, false);
    },

    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, addScalar, true);
    },

    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm10(y, x, addScalar, true);
    },

    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, addScalar, false).valueOf();
    },

    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, addScalar, true).valueOf();
    },

    'any, any': addScalar,

    'any, any, ...any': function anyAnyAny(x, y, rest) {
      var result = add(x, y);

      for (var i = 0; i < rest.length; i++) {
        result = add(result, rest[i]);
      }

      return result;
    }
  }, addScalar.signatures));

  add.toTex = {
    2: '\\left(${args[0]}' + latex.operators['add'] + '${args[1]}\\right)'
  };

  return add;
}

exports.name = 'add';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/arithmetic/addScalar.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/arithmetic/addScalar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Add two scalar values, `x + y`.
   * This function is meant for internal use: it is used by the public function
   * `add`
   *
   * This function does not support collections (Array or Matrix), and does
   * not validate the number of of inputs.
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value to add
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to add
   * @return {number | BigNumber | Fraction | Complex | Unit}                      Sum of `x` and `y`
   * @private
   */
  var add = typed('add', {

    'number, number': function numberNumber(x, y) {
      return x + y;
    },

    'Complex, Complex': function ComplexComplex(x, y) {
      return x.add(y);
    },

    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.plus(y);
    },

    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.add(y);
    },

    'Unit, Unit': function UnitUnit(x, y) {
      if (x.value === null || x.value === undefined) throw new Error('Parameter x contains a unit with undefined value');
      if (y.value === null || y.value === undefined) throw new Error('Parameter y contains a unit with undefined value');
      if (!x.equalBase(y)) throw new Error('Units do not match');

      var res = x.clone();
      res.value = add(res.value, y.value);
      res.fixPrefix = false;
      return res;
    }
  });

  return add;
}

exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/arithmetic/multiply.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/arithmetic/multiply.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").extend;
var array = __webpack_require__(/*! ../../utils/array */ "./node_modules/mathjs/lib/utils/array.js");

function factory(type, config, load, typed) {
  var latex = __webpack_require__(/*! ../../utils/latex */ "./node_modules/mathjs/lib/utils/latex.js");

  var matrix = load(__webpack_require__(/*! ../../type/matrix/function/matrix */ "./node_modules/mathjs/lib/type/matrix/function/matrix.js"));
  var addScalar = load(__webpack_require__(/*! ./addScalar */ "./node_modules/mathjs/lib/function/arithmetic/addScalar.js"));
  var multiplyScalar = load(__webpack_require__(/*! ./multiplyScalar */ "./node_modules/mathjs/lib/function/arithmetic/multiplyScalar.js"));
  var equalScalar = load(__webpack_require__(/*! ../relational/equalScalar */ "./node_modules/mathjs/lib/function/relational/equalScalar.js"));

  var algorithm11 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm11 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm11.js"));
  var algorithm14 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm14 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm14.js"));

  var DenseMatrix = type.DenseMatrix;
  var SparseMatrix = type.SparseMatrix;

  /**
   * Multiply two or more values, `x * y`.
   * For matrices, the matrix product is calculated.
   *
   * Syntax:
   *
   *    math.multiply(x, y)
   *    math.multiply(x, y, z, ...)
   *
   * Examples:
   *
   *    math.multiply(4, 5.2)        // returns number 20.8
   *    math.multiply(2, 3, 4)       // returns number 24
   *
   *    const a = math.complex(2, 3)
   *    const b = math.complex(4, 1)
   *    math.multiply(a, b)          // returns Complex 5 + 14i
   *
   *    const c = [[1, 2], [4, 3]]
   *    const d = [[1, 2, 3], [3, -4, 7]]
   *    math.multiply(c, d)          // returns Array [[7, -6, 17], [13, -4, 33]]
   *
   *    const e = math.unit('2.1 km')
   *    math.multiply(3, e)          // returns Unit 6.3 km
   *
   * See also:
   *
   *    divide, prod, cross, dot
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x First value to multiply
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Second value to multiply
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} Multiplication of `x` and `y`
   */
  var multiply = typed('multiply', extend({
    // we extend the signatures of multiplyScalar with signatures dealing with matrices

    'Array, Array': function ArrayArray(x, y) {
      // check dimensions
      _validateMatrixDimensions(array.size(x), array.size(y));

      // use dense matrix implementation
      var m = multiply(matrix(x), matrix(y));
      // return array or scalar
      return type.isMatrix(m) ? m.valueOf() : m;
    },

    'Matrix, Matrix': function MatrixMatrix(x, y) {
      // dimensions
      var xsize = x.size();
      var ysize = y.size();

      // check dimensions
      _validateMatrixDimensions(xsize, ysize);

      // process dimensions
      if (xsize.length === 1) {
        // process y dimensions
        if (ysize.length === 1) {
          // Vector * Vector
          return _multiplyVectorVector(x, y, xsize[0]);
        }
        // Vector * Matrix
        return _multiplyVectorMatrix(x, y);
      }
      // process y dimensions
      if (ysize.length === 1) {
        // Matrix * Vector
        return _multiplyMatrixVector(x, y);
      }
      // Matrix * Matrix
      return _multiplyMatrixMatrix(x, y);
    },

    'Matrix, Array': function MatrixArray(x, y) {
      // use Matrix * Matrix implementation
      return multiply(x, matrix(y));
    },

    'Array, Matrix': function ArrayMatrix(x, y) {
      // use Matrix * Matrix implementation
      return multiply(matrix(x, y.storage()), y);
    },

    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm11(x, y, multiplyScalar, false);
    },

    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, multiplyScalar, false);
    },

    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm11(y, x, multiplyScalar, true);
    },

    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, multiplyScalar, true);
    },

    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, multiplyScalar, false).valueOf();
    },

    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, multiplyScalar, true).valueOf();
    },

    'any, any': multiplyScalar,

    'any, any, ...any': function anyAnyAny(x, y, rest) {
      var result = multiply(x, y);

      for (var i = 0; i < rest.length; i++) {
        result = multiply(result, rest[i]);
      }

      return result;
    }
  }, multiplyScalar.signatures));

  function _validateMatrixDimensions(size1, size2) {
    // check left operand dimensions
    switch (size1.length) {
      case 1:
        // check size2
        switch (size2.length) {
          case 1:
            // Vector x Vector
            if (size1[0] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Vectors must have the same length');
            }
            break;
          case 2:
            // Vector x Matrix
            if (size1[0] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Vector length (' + size1[0] + ') must match Matrix rows (' + size2[0] + ')');
            }
            break;
          default:
            throw new Error('Can only multiply a 1 or 2 dimensional matrix (Matrix B has ' + size2.length + ' dimensions)');
        }
        break;
      case 2:
        // check size2
        switch (size2.length) {
          case 1:
            // Matrix x Vector
            if (size1[1] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Matrix columns (' + size1[1] + ') must match Vector length (' + size2[0] + ')');
            }
            break;
          case 2:
            // Matrix x Matrix
            if (size1[1] !== size2[0]) {
              // throw error
              throw new RangeError('Dimension mismatch in multiplication. Matrix A columns (' + size1[1] + ') must match Matrix B rows (' + size2[0] + ')');
            }
            break;
          default:
            throw new Error('Can only multiply a 1 or 2 dimensional matrix (Matrix B has ' + size2.length + ' dimensions)');
        }
        break;
      default:
        throw new Error('Can only multiply a 1 or 2 dimensional matrix (Matrix A has ' + size1.length + ' dimensions)');
    }
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            Dense Vector   (N)
   * @param {Matrix} b            Dense Vector   (N)
   *
   * @return {number}             Scalar value
   */
  function _multiplyVectorVector(a, b, n) {
    // check empty vector
    if (n === 0) {
      throw new Error('Cannot multiply two empty vectors');
    }

    // a dense
    var adata = a._data;
    var adt = a._datatype;
    // b dense
    var bdata = b._data;
    var bdt = b._datatype;

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    }

    // result (do not initialize it with zero)
    var c = mf(adata[0], bdata[0]);
    // loop data
    for (var i = 1; i < n; i++) {
      // multiply and accumulate
      c = af(c, mf(adata[i], bdata[i]));
    }
    return c;
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            Dense Vector   (M)
   * @param {Matrix} b            Matrix         (MxN)
   *
   * @return {Matrix}             Dense Vector   (N)
   */
  function _multiplyVectorMatrix(a, b) {
    // process storage
    if (b.storage() !== 'dense') {
      throw new Error('Support for SparseMatrix not implemented');
    }
    return _multiplyVectorDenseMatrix(a, b);
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            Dense Vector   (M)
   * @param {Matrix} b            Dense Matrix   (MxN)
   *
   * @return {Matrix}             Dense Vector   (N)
   */
  function _multiplyVectorDenseMatrix(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    // b dense
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    // rows & columns
    var alength = asize[0];
    var bcolumns = bsize[1];

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    }

    // result
    var c = [];

    // loop matrix columns
    for (var j = 0; j < bcolumns; j++) {
      // sum (do not initialize it with zero)
      var sum = mf(adata[0], bdata[0][j]);
      // loop vector
      for (var i = 1; i < alength; i++) {
        // multiply & accumulate
        sum = af(sum, mf(adata[i], bdata[i][j]));
      }
      c[j] = sum;
    }

    // return matrix
    return new DenseMatrix({
      data: c,
      size: [bcolumns],
      datatype: dt
    });
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            Matrix         (MxN)
   * @param {Matrix} b            Dense Vector   (N)
   *
   * @return {Matrix}             Dense Vector   (M)
   */
  var _multiplyMatrixVector = typed('_multiplyMatrixVector', {
    'DenseMatrix, any': _multiplyDenseMatrixVector,
    'SparseMatrix, any': _multiplySparseMatrixVector
  });

  /**
   * C = A * B
   *
   * @param {Matrix} a            Matrix         (MxN)
   * @param {Matrix} b            Matrix         (NxC)
   *
   * @return {Matrix}             Matrix         (MxC)
   */
  var _multiplyMatrixMatrix = typed('_multiplyMatrixMatrix', {
    'DenseMatrix, DenseMatrix': _multiplyDenseMatrixDenseMatrix,
    'DenseMatrix, SparseMatrix': _multiplyDenseMatrixSparseMatrix,
    'SparseMatrix, DenseMatrix': _multiplySparseMatrixDenseMatrix,
    'SparseMatrix, SparseMatrix': _multiplySparseMatrixSparseMatrix
  });

  /**
   * C = A * B
   *
   * @param {Matrix} a            DenseMatrix  (MxN)
   * @param {Matrix} b            Dense Vector (N)
   *
   * @return {Matrix}             Dense Vector (M)
   */
  function _multiplyDenseMatrixVector(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    // b dense
    var bdata = b._data;
    var bdt = b._datatype;
    // rows & columns
    var arows = asize[0];
    var acolumns = asize[1];

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    }

    // result
    var c = [];

    // loop matrix a rows
    for (var i = 0; i < arows; i++) {
      // current row
      var row = adata[i];
      // sum (do not initialize it with zero)
      var sum = mf(row[0], bdata[0]);
      // loop matrix a columns
      for (var j = 1; j < acolumns; j++) {
        // multiply & accumulate
        sum = af(sum, mf(row[j], bdata[j]));
      }
      c[i] = sum;
    }

    // return matrix
    return new DenseMatrix({
      data: c,
      size: [arows],
      datatype: dt
    });
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            DenseMatrix    (MxN)
   * @param {Matrix} b            DenseMatrix    (NxC)
   *
   * @return {Matrix}             DenseMatrix    (MxC)
   */
  function _multiplyDenseMatrixDenseMatrix(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    // b dense
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    // rows & columns
    var arows = asize[0];
    var acolumns = asize[1];
    var bcolumns = bsize[1];

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    }

    // result
    var c = [];

    // loop matrix a rows
    for (var i = 0; i < arows; i++) {
      // current row
      var row = adata[i];
      // initialize row array
      c[i] = [];
      // loop matrix b columns
      for (var j = 0; j < bcolumns; j++) {
        // sum (avoid initializing sum to zero)
        var sum = mf(row[0], bdata[0][j]);
        // loop matrix a columns
        for (var x = 1; x < acolumns; x++) {
          // multiply & accumulate
          sum = af(sum, mf(row[x], bdata[x][j]));
        }
        c[i][j] = sum;
      }
    }

    // return matrix
    return new DenseMatrix({
      data: c,
      size: [arows, bcolumns],
      datatype: dt
    });
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            DenseMatrix    (MxN)
   * @param {Matrix} b            SparseMatrix   (NxC)
   *
   * @return {Matrix}             SparseMatrix   (MxC)
   */
  function _multiplyDenseMatrixSparseMatrix(a, b) {
    // a dense
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    // b sparse
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype;
    // validate b matrix
    if (!bvalues) {
      throw new Error('Cannot multiply Dense Matrix times Pattern only Matrix');
    }
    // rows & columns
    var arows = asize[0];
    var bcolumns = bsize[1];

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;
    // equalScalar signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
      eq = typed.find(equalScalar, [dt, dt]);
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
    }

    // result
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    // c matrix
    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });

    // loop b columns
    for (var jb = 0; jb < bcolumns; jb++) {
      // update ptr
      cptr[jb] = cindex.length;
      // indeces in column jb
      var kb0 = bptr[jb];
      var kb1 = bptr[jb + 1];
      // do not process column jb if no data exists
      if (kb1 > kb0) {
        // last row mark processed
        var last = 0;
        // loop a rows
        for (var i = 0; i < arows; i++) {
          // column mark
          var mark = i + 1;
          // C[i, jb]
          var cij = void 0;
          // values in b column j
          for (var kb = kb0; kb < kb1; kb++) {
            // row
            var ib = bindex[kb];
            // check value has been initialized
            if (last !== mark) {
              // first value in column jb
              cij = mf(adata[i][ib], bvalues[kb]);
              // update mark
              last = mark;
            } else {
              // accumulate value
              cij = af(cij, mf(adata[i][ib], bvalues[kb]));
            }
          }
          // check column has been processed and value != 0
          if (last === mark && !eq(cij, zero)) {
            // push row & value
            cindex.push(i);
            cvalues.push(cij);
          }
        }
      }
    }
    // update ptr
    cptr[bcolumns] = cindex.length;

    // return sparse matrix
    return c;
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            SparseMatrix    (MxN)
   * @param {Matrix} b            Dense Vector (N)
   *
   * @return {Matrix}             SparseMatrix    (M, 1)
   */
  function _multiplySparseMatrixVector(a, b) {
    // a sparse
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    // validate a matrix
    if (!avalues) {
      throw new Error('Cannot multiply Pattern only Matrix times Dense Matrix');
    }
    // b dense
    var bdata = b._data;
    var bdt = b._datatype;
    // rows & columns
    var arows = a._size[0];
    var brows = b._size[0];
    // result
    var cvalues = [];
    var cindex = [];
    var cptr = [];

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;
    // equalScalar signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
      eq = typed.find(equalScalar, [dt, dt]);
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
    }

    // workspace
    var x = [];
    // vector with marks indicating a value x[i] exists in a given column
    var w = [];

    // update ptr
    cptr[0] = 0;
    // rows in b
    for (var ib = 0; ib < brows; ib++) {
      // b[ib]
      var vbi = bdata[ib];
      // check b[ib] != 0, avoid loops
      if (!eq(vbi, zero)) {
        // A values & index in ib column
        for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
          // a row
          var ia = aindex[ka];
          // check value exists in current j
          if (!w[ia]) {
            // ia is new entry in j
            w[ia] = true;
            // add i to pattern of C
            cindex.push(ia);
            // x(ia) = A
            x[ia] = mf(vbi, avalues[ka]);
          } else {
            // i exists in C already
            x[ia] = af(x[ia], mf(vbi, avalues[ka]));
          }
        }
      }
    }
    // copy values from x to column jb of c
    for (var p1 = cindex.length, p = 0; p < p1; p++) {
      // row
      var ic = cindex[p];
      // copy value
      cvalues[p] = x[ic];
    }
    // update ptr
    cptr[1] = cindex.length;

    // return sparse matrix
    return new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, 1],
      datatype: dt
    });
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            SparseMatrix      (MxN)
   * @param {Matrix} b            DenseMatrix       (NxC)
   *
   * @return {Matrix}             SparseMatrix      (MxC)
   */
  function _multiplySparseMatrixDenseMatrix(a, b) {
    // a sparse
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    // validate a matrix
    if (!avalues) {
      throw new Error('Cannot multiply Pattern only Matrix times Dense Matrix');
    }
    // b dense
    var bdata = b._data;
    var bdt = b._datatype;
    // rows & columns
    var arows = a._size[0];
    var brows = b._size[0];
    var bcolumns = b._size[1];

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;
    // equalScalar signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
      eq = typed.find(equalScalar, [dt, dt]);
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
    }

    // result
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    // c matrix
    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });

    // workspace
    var x = [];
    // vector with marks indicating a value x[i] exists in a given column
    var w = [];

    // loop b columns
    for (var jb = 0; jb < bcolumns; jb++) {
      // update ptr
      cptr[jb] = cindex.length;
      // mark in workspace for current column
      var mark = jb + 1;
      // rows in jb
      for (var ib = 0; ib < brows; ib++) {
        // b[ib, jb]
        var vbij = bdata[ib][jb];
        // check b[ib, jb] != 0, avoid loops
        if (!eq(vbij, zero)) {
          // A values & index in ib column
          for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            // a row
            var ia = aindex[ka];
            // check value exists in current j
            if (w[ia] !== mark) {
              // ia is new entry in j
              w[ia] = mark;
              // add i to pattern of C
              cindex.push(ia);
              // x(ia) = A
              x[ia] = mf(vbij, avalues[ka]);
            } else {
              // i exists in C already
              x[ia] = af(x[ia], mf(vbij, avalues[ka]));
            }
          }
        }
      }
      // copy values from x to column jb of c
      for (var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++) {
        // row
        var ic = cindex[p];
        // copy value
        cvalues[p] = x[ic];
      }
    }
    // update ptr
    cptr[bcolumns] = cindex.length;

    // return sparse matrix
    return c;
  }

  /**
   * C = A * B
   *
   * @param {Matrix} a            SparseMatrix      (MxN)
   * @param {Matrix} b            SparseMatrix      (NxC)
   *
   * @return {Matrix}             SparseMatrix      (MxC)
   */
  function _multiplySparseMatrixSparseMatrix(a, b) {
    // a sparse
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    // b sparse
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bdt = b._datatype;

    // rows & columns
    var arows = a._size[0];
    var bcolumns = b._size[1];
    // flag indicating both matrices (a & b) contain data
    var values = avalues && bvalues;

    // datatype
    var dt = void 0;
    // addScalar signature to use
    var af = addScalar;
    // multiplyScalar signature to use
    var mf = multiplyScalar;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signatures that matches (dt, dt)
      af = typed.find(addScalar, [dt, dt]);
      mf = typed.find(multiplyScalar, [dt, dt]);
    }

    // result
    var cvalues = values ? [] : undefined;
    var cindex = [];
    var cptr = [];
    // c matrix
    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });

    // workspace
    var x = values ? [] : undefined;
    // vector with marks indicating a value x[i] exists in a given column
    var w = [];
    // variables
    var ka = void 0,
        ka0 = void 0,
        ka1 = void 0,
        kb = void 0,
        kb0 = void 0,
        kb1 = void 0,
        ia = void 0,
        ib = void 0;
    // loop b columns
    for (var jb = 0; jb < bcolumns; jb++) {
      // update ptr
      cptr[jb] = cindex.length;
      // mark in workspace for current column
      var mark = jb + 1;
      // B values & index in j
      for (kb0 = bptr[jb], kb1 = bptr[jb + 1], kb = kb0; kb < kb1; kb++) {
        // b row
        ib = bindex[kb];
        // check we need to process values
        if (values) {
          // loop values in a[:,ib]
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            // row
            ia = aindex[ka];
            // check value exists in current j
            if (w[ia] !== mark) {
              // ia is new entry in j
              w[ia] = mark;
              // add i to pattern of C
              cindex.push(ia);
              // x(ia) = A
              x[ia] = mf(bvalues[kb], avalues[ka]);
            } else {
              // i exists in C already
              x[ia] = af(x[ia], mf(bvalues[kb], avalues[ka]));
            }
          }
        } else {
          // loop values in a[:,ib]
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            // row
            ia = aindex[ka];
            // check value exists in current j
            if (w[ia] !== mark) {
              // ia is new entry in j
              w[ia] = mark;
              // add i to pattern of C
              cindex.push(ia);
            }
          }
        }
      }
      // check we need to process matrix values (pattern matrix)
      if (values) {
        // copy values from x to column jb of c
        for (var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++) {
          // row
          var ic = cindex[p];
          // copy value
          cvalues[p] = x[ic];
        }
      }
    }
    // update ptr
    cptr[bcolumns] = cindex.length;

    // return sparse matrix
    return c;
  }

  multiply.toTex = {
    2: '\\left(${args[0]}' + latex.operators['multiply'] + '${args[1]}\\right)'
  };

  return multiply;
}

exports.name = 'multiply';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/arithmetic/multiplyScalar.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/arithmetic/multiplyScalar.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Multiply two scalar values, `x * y`.
   * This function is meant for internal use: it is used by the public function
   * `multiply`
   *
   * This function does not support collections (Array or Matrix), and does
   * not validate the number of of inputs.
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value to multiply
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to multiply
   * @return {number | BigNumber | Fraction | Complex | Unit}                      Multiplication of `x` and `y`
   * @private
   */
  var multiplyScalar = typed('multiplyScalar', {

    'number, number': function numberNumber(x, y) {
      return x * y;
    },

    'Complex, Complex': function ComplexComplex(x, y) {
      return x.mul(y);
    },

    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.times(y);
    },

    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.mul(y);
    },

    'number | Fraction | BigNumber | Complex, Unit': function numberFractionBigNumberComplexUnit(x, y) {
      var res = y.clone();
      res.value = res.value === null ? res._normalize(x) : multiplyScalar(res.value, x);
      return res;
    },

    'Unit, number | Fraction | BigNumber | Complex': function UnitNumberFractionBigNumberComplex(x, y) {
      var res = x.clone();
      res.value = res.value === null ? res._normalize(y) : multiplyScalar(res.value, y);
      return res;
    },

    'Unit, Unit': function UnitUnit(x, y) {
      return x.multiply(y);
    }

  });

  return multiplyScalar;
}

exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/matrix/subset.js":
/*!***********************************************************!*\
  !*** ./node_modules/mathjs/lib/function/matrix/subset.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").clone;
var validateIndex = __webpack_require__(/*! ../../utils/array */ "./node_modules/mathjs/lib/utils/array.js").validateIndex;
var getSafeProperty = __webpack_require__(/*! ../../utils/customs */ "./node_modules/mathjs/lib/utils/customs.js").getSafeProperty;
var setSafeProperty = __webpack_require__(/*! ../../utils/customs */ "./node_modules/mathjs/lib/utils/customs.js").setSafeProperty;
var DimensionError = __webpack_require__(/*! ../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(/*! ../../type/matrix/function/matrix */ "./node_modules/mathjs/lib/type/matrix/function/matrix.js"));

  /**
   * Get or set a subset of a matrix or string.
   *
   * Syntax:
   *     math.subset(value, index)                                // retrieve a subset
   *     math.subset(value, index, replacement [, defaultValue])  // replace a subset
   *
   * Examples:
   *
   *     // get a subset
   *     const d = [[1, 2], [3, 4]]
   *     math.subset(d, math.index(1, 0))        // returns 3
   *     math.subset(d, math.index([0, 2], 1))   // returns [[2], [4]]
   *
   *     // replace a subset
   *     const e = []
   *     const f = math.subset(e, math.index(0, [0, 2]), [5, 6])  // f = [[5, 6]]
   *     const g = math.subset(f, math.index(1, 1), 7, 0)         // g = [[5, 6], [0, 7]]
   *
   * See also:
   *
   *     size, resize, squeeze, index
   *
   * @param {Array | Matrix | string} matrix  An array, matrix, or string
   * @param {Index} index                     An index containing ranges for each
   *                                          dimension
   * @param {*} [replacement]                 An array, matrix, or scalar.
   *                                          If provided, the subset is replaced with replacement.
   *                                          If not provided, the subset is returned
   * @param {*} [defaultValue=undefined]      Default value, filled in on new entries when
   *                                          the matrix is resized. If not provided,
   *                                          math.matrix elements will be left undefined.
   * @return {Array | Matrix | string} Either the retrieved subset or the updated matrix.
   */
  var subset = typed('subset', {
    // get subset
    'Array, Index': function ArrayIndex(value, index) {
      var m = matrix(value);
      var subset = m.subset(index); // returns a Matrix
      return index.isScalar() ? subset : subset.valueOf(); // return an Array (like the input)
    },

    'Matrix, Index': function MatrixIndex(value, index) {
      return value.subset(index);
    },

    'Object, Index': _getObjectProperty,

    'string, Index': _getSubstring,

    // set subset
    'Array, Index, any': function ArrayIndexAny(value, index, replacement) {
      return matrix(clone(value)).subset(index, replacement, undefined).valueOf();
    },

    'Array, Index, any, any': function ArrayIndexAnyAny(value, index, replacement, defaultValue) {
      return matrix(clone(value)).subset(index, replacement, defaultValue).valueOf();
    },

    'Matrix, Index, any': function MatrixIndexAny(value, index, replacement) {
      return value.clone().subset(index, replacement);
    },

    'Matrix, Index, any, any': function MatrixIndexAnyAny(value, index, replacement, defaultValue) {
      return value.clone().subset(index, replacement, defaultValue);
    },

    'string, Index, string': _setSubstring,
    'string, Index, string, string': _setSubstring,
    'Object, Index, any': _setObjectProperty
  });

  subset.toTex = undefined; // use default template

  return subset;

  /**
   * Retrieve a subset of a string
   * @param {string} str            string from which to get a substring
   * @param {Index} index           An index containing ranges for each dimension
   * @returns {string} substring
   * @private
   */
  function _getSubstring(str, index) {
    if (!type.isIndex(index)) {
      // TODO: better error message
      throw new TypeError('Index expected');
    }
    if (index.size().length !== 1) {
      throw new DimensionError(index.size().length, 1);
    }

    // validate whether the range is out of range
    var strLen = str.length;
    validateIndex(index.min()[0], strLen);
    validateIndex(index.max()[0], strLen);

    var range = index.dimension(0);

    var substr = '';
    range.forEach(function (v) {
      substr += str.charAt(v);
    });

    return substr;
  }

  /**
   * Replace a substring in a string
   * @param {string} str            string to be replaced
   * @param {Index} index           An index containing ranges for each dimension
   * @param {string} replacement    Replacement string
   * @param {string} [defaultValue] Default value to be uses when resizing
   *                                the string. is ' ' by default
   * @returns {string} result
   * @private
   */
  function _setSubstring(str, index, replacement, defaultValue) {
    if (!index || index.isIndex !== true) {
      // TODO: better error message
      throw new TypeError('Index expected');
    }
    if (index.size().length !== 1) {
      throw new DimensionError(index.size().length, 1);
    }
    if (defaultValue !== undefined) {
      if (typeof defaultValue !== 'string' || defaultValue.length !== 1) {
        throw new TypeError('Single character expected as defaultValue');
      }
    } else {
      defaultValue = ' ';
    }

    var range = index.dimension(0);
    var len = range.size()[0];

    if (len !== replacement.length) {
      throw new DimensionError(range.size()[0], replacement.length);
    }

    // validate whether the range is out of range
    var strLen = str.length;
    validateIndex(index.min()[0]);
    validateIndex(index.max()[0]);

    // copy the string into an array with characters
    var chars = [];
    for (var i = 0; i < strLen; i++) {
      chars[i] = str.charAt(i);
    }

    range.forEach(function (v, i) {
      chars[v] = replacement.charAt(i[0]);
    });

    // initialize undefined characters with a space
    if (chars.length > strLen) {
      for (var _i = strLen - 1, _len = chars.length; _i < _len; _i++) {
        if (!chars[_i]) {
          chars[_i] = defaultValue;
        }
      }
    }

    return chars.join('');
  }
}

/**
 * Retrieve a property from an object
 * @param {Object} object
 * @param {Index} index
 * @return {*} Returns the value of the property
 * @private
 */
function _getObjectProperty(object, index) {
  if (index.size().length !== 1) {
    throw new DimensionError(index.size(), 1);
  }

  var key = index.dimension(0);
  if (typeof key !== 'string') {
    throw new TypeError('String expected as index to retrieve an object property');
  }

  return getSafeProperty(object, key);
}

/**
 * Set a property on an object
 * @param {Object} object
 * @param {Index} index
 * @param {*} replacement
 * @return {*} Returns the updated object
 * @private
 */
function _setObjectProperty(object, index, replacement) {
  if (index.size().length !== 1) {
    throw new DimensionError(index.size(), 1);
  }

  var key = index.dimension(0);
  if (typeof key !== 'string') {
    throw new TypeError('String expected as index to retrieve an object property');
  }

  // clone the object, and apply the property to the clone
  var updated = clone(object);
  setSafeProperty(updated, key, replacement);

  return updated;
}

exports.name = 'subset';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/relational/equalScalar.js":
/*!********************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/relational/equalScalar.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(/*! ../../utils/number */ "./node_modules/mathjs/lib/utils/number.js").nearlyEqual;
var bigNearlyEqual = __webpack_require__(/*! ../../utils/bignumber/nearlyEqual */ "./node_modules/mathjs/lib/utils/bignumber/nearlyEqual.js");

function factory(type, config, load, typed) {
  /**
   * Test whether two values are equal.
   *
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit} x   First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Complex} y          Second value to compare
   * @return {boolean}                                                  Returns true when the compared values are equal, else returns false
   * @private
   */
  var equalScalar = typed('equalScalar', {

    'boolean, boolean': function booleanBoolean(x, y) {
      return x === y;
    },

    'number, number': function numberNumber(x, y) {
      return x === y || nearlyEqual(x, y, config.epsilon);
    },

    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.eq(y) || bigNearlyEqual(x, y, config.epsilon);
    },

    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.equals(y);
    },

    'Complex, Complex': function ComplexComplex(x, y) {
      return x.equals(y);
    },

    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }
      return equalScalar(x.value, y.value);
    }
  });

  return equalScalar;
}

exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/relational/larger.js":
/*!***************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/relational/larger.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(/*! ../../utils/number */ "./node_modules/mathjs/lib/utils/number.js").nearlyEqual;
var bigNearlyEqual = __webpack_require__(/*! ../../utils/bignumber/nearlyEqual */ "./node_modules/mathjs/lib/utils/bignumber/nearlyEqual.js");

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(/*! ../../type/matrix/function/matrix */ "./node_modules/mathjs/lib/type/matrix/function/matrix.js"));

  var algorithm03 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm03 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm03.js"));
  var algorithm07 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm07 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm07.js"));
  var algorithm12 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm12 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm12.js"));
  var algorithm13 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm13 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm13.js"));
  var algorithm14 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm14 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm14.js"));

  var latex = __webpack_require__(/*! ../../utils/latex */ "./node_modules/mathjs/lib/utils/latex.js");

  /**
   * Test whether value x is larger than y.
   *
   * The function returns true when x is larger than y and the relative
   * difference between x and y is larger than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.larger(x, y)
   *
   * Examples:
   *
   *    math.larger(2, 3)             // returns false
   *    math.larger(5, 2 + 2)         // returns true
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('2 inch')
   *    math.larger(a, b)             // returns false
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, largerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is larger than y, else returns false
   */
  var larger = typed('larger', {

    'boolean, boolean': function booleanBoolean(x, y) {
      return x > y;
    },

    'number, number': function numberNumber(x, y) {
      return x > y && !nearlyEqual(x, y, config.epsilon);
    },

    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.gt(y) && !bigNearlyEqual(x, y, config.epsilon);
    },

    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) === 1;
    },

    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },

    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }
      return larger(x.value, y.value);
    },

    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, larger);
    },

    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, larger, true);
    },

    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, larger, false);
    },

    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, larger);
    },

    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return larger(matrix(x), matrix(y)).valueOf();
    },

    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return larger(matrix(x), y);
    },

    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return larger(x, matrix(y));
    },

    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, larger, false);
    },

    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, larger, false);
    },

    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, larger, true);
    },

    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, larger, true);
    },

    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, larger, false).valueOf();
    },

    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, larger, true).valueOf();
    }
  });

  larger.toTex = {
    2: '\\left(${args[0]}' + latex.operators['larger'] + '${args[1]}\\right)'
  };

  return larger;
}

exports.name = 'larger';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/function/relational/smaller.js":
/*!****************************************************************!*\
  !*** ./node_modules/mathjs/lib/function/relational/smaller.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nearlyEqual = __webpack_require__(/*! ../../utils/number */ "./node_modules/mathjs/lib/utils/number.js").nearlyEqual;
var bigNearlyEqual = __webpack_require__(/*! ../../utils/bignumber/nearlyEqual */ "./node_modules/mathjs/lib/utils/bignumber/nearlyEqual.js");

function factory(type, config, load, typed) {
  var matrix = load(__webpack_require__(/*! ../../type/matrix/function/matrix */ "./node_modules/mathjs/lib/type/matrix/function/matrix.js"));

  var algorithm03 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm03 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm03.js"));
  var algorithm07 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm07 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm07.js"));
  var algorithm12 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm12 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm12.js"));
  var algorithm13 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm13 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm13.js"));
  var algorithm14 = load(__webpack_require__(/*! ../../type/matrix/utils/algorithm14 */ "./node_modules/mathjs/lib/type/matrix/utils/algorithm14.js"));

  var latex = __webpack_require__(/*! ../../utils/latex */ "./node_modules/mathjs/lib/utils/latex.js");

  /**
   * Test whether value x is smaller than y.
   *
   * The function returns true when x is smaller than y and the relative
   * difference between x and y is smaller than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.smaller(x, y)
   *
   * Examples:
   *
   *    math.smaller(2, 3)            // returns true
   *    math.smaller(5, 2 * 2)        // returns false
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('2 inch')
   *    math.smaller(a, b)            // returns true
   *
   * See also:
   *
   *    equal, unequal, smallerEq, smaller, smallerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is smaller than y, else returns false
   */
  var smaller = typed('smaller', {

    'boolean, boolean': function booleanBoolean(x, y) {
      return x < y;
    },

    'number, number': function numberNumber(x, y) {
      return x < y && !nearlyEqual(x, y, config.epsilon);
    },

    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.lt(y) && !bigNearlyEqual(x, y, config.epsilon);
    },

    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) === -1;
    },

    'Complex, Complex': function ComplexComplex(x, y) {
      throw new TypeError('No ordering relation is defined for complex numbers');
    },

    'Unit, Unit': function UnitUnit(x, y) {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }
      return smaller(x.value, y.value);
    },

    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm07(x, y, smaller);
    },

    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm03(y, x, smaller, true);
    },

    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm03(x, y, smaller, false);
    },

    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, smaller);
    },

    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return smaller(matrix(x), matrix(y)).valueOf();
    },

    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return smaller(matrix(x), y);
    },

    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return smaller(x, matrix(y));
    },

    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm12(x, y, smaller, false);
    },

    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, smaller, false);
    },

    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm12(y, x, smaller, true);
    },

    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, smaller, true);
    },

    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, smaller, false).valueOf();
    },

    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, smaller, true).valueOf();
    }
  });

  smaller.toTex = {
    2: '\\left(${args[0]}' + latex.operators['smaller'] + '${args[1]}\\right)'
  };

  return smaller;
}

exports.name = 'smaller';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/bignumber/BigNumber.js":
/*!*************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/bignumber/BigNumber.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _decimal = __webpack_require__(/*! decimal.js */ "./node_modules/decimal.js/decimal.js");

var _decimal2 = _interopRequireDefault(_decimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function factory(type, config, load, typed, math) {
  var BigNumber = _decimal2.default.clone({ precision: config.precision });

  /**
   * Attach type information
   */
  BigNumber.prototype.type = 'BigNumber';
  BigNumber.prototype.isBigNumber = true;

  /**
   * Get a JSON representation of a BigNumber containing
   * type information
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "BigNumber", "value": "0.2"}`
   */
  BigNumber.prototype.toJSON = function () {
    return {
      mathjs: 'BigNumber',
      value: this.toString()
    };
  };

  /**
   * Instantiate a BigNumber from a JSON object
   * @param {Object} json  a JSON object structured as:
   *                       `{"mathjs": "BigNumber", "value": "0.2"}`
   * @return {BigNumber}
   */
  BigNumber.fromJSON = function (json) {
    return new BigNumber(json.value);
  };

  // listen for changed in the configuration, automatically apply changed precision
  math.on('config', function (curr, prev) {
    if (curr.precision !== prev.precision) {
      BigNumber.config({ precision: curr.precision });
    }
  });

  return BigNumber;
}

exports.name = 'BigNumber';
exports.path = 'type';
exports.factory = factory;
exports.math = true; // request access to the math namespace

/***/ }),

/***/ "./node_modules/mathjs/lib/type/bignumber/function/bignumber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/bignumber/function/bignumber.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deepMap = __webpack_require__(/*! ../../../utils/collection/deepMap */ "./node_modules/mathjs/lib/utils/collection/deepMap.js");

function factory(type, config, load, typed) {
  /**
   * Create a BigNumber, which can store numbers with arbitrary precision.
   * When a matrix is provided, all elements will be converted to BigNumber.
   *
   * Syntax:
   *
   *    math.bignumber(x)
   *
   * Examples:
   *
   *    0.1 + 0.2                                  // returns number 0.30000000000000004
   *    math.bignumber(0.1) + math.bignumber(0.2)  // returns BigNumber 0.3
   *
   *
   *    7.2e500                                    // returns number Infinity
   *    math.bignumber('7.2e500')                  // returns BigNumber 7.2e500
   *
   * See also:
   *
   *    boolean, complex, index, matrix, string, unit
   *
   * @param {number | string | Fraction | BigNumber | Array | Matrix | boolean | null} [value]  Value for the big number,
   *                                                    0 by default.
   * @returns {BigNumber} The created bignumber
   */
  var bignumber = typed('bignumber', {
    '': function _() {
      return new type.BigNumber(0);
    },

    'number': function number(x) {
      // convert to string to prevent errors in case of >15 digits
      return new type.BigNumber(x + '');
    },

    'string': function string(x) {
      return new type.BigNumber(x);
    },

    'BigNumber': function BigNumber(x) {
      // we assume a BigNumber is immutable
      return x;
    },

    'Fraction': function Fraction(x) {
      return new type.BigNumber(x.n).div(x.d);
    },

    'null': function _null(x) {
      return new type.BigNumber(0);
    },

    'Array | Matrix': function ArrayMatrix(x) {
      return deepMap(x, bignumber);
    }
  });

  bignumber.toTex = {
    0: '0',
    1: '\\left(${args[0]}\\right)'
  };

  return bignumber;
}

exports.name = 'bignumber';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/bignumber/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/mathjs/lib/type/bignumber/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
// type
__webpack_require__(/*! ./BigNumber */ "./node_modules/mathjs/lib/type/bignumber/BigNumber.js"),

// construction function
__webpack_require__(/*! ./function/bignumber */ "./node_modules/mathjs/lib/type/bignumber/function/bignumber.js")];

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/DenseMatrix.js":
/*!************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/DenseMatrix.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! ../../utils/index */ "./node_modules/mathjs/lib/utils/index.js");
var DimensionError = __webpack_require__(/*! ../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

var string = util.string;
var array = util.array;
var object = util.object;
var number = util.number;

var isArray = Array.isArray;
var isNumber = number.isNumber;
var isInteger = number.isInteger;
var isString = string.isString;

var validateIndex = array.validateIndex;

function factory(type, config, load, typed) {
  var Matrix = load(__webpack_require__(/*! ./Matrix */ "./node_modules/mathjs/lib/type/matrix/Matrix.js")); // force loading Matrix (do not use via type.Matrix)

  /**
   * Dense Matrix implementation. A regular, dense matrix, supporting multi-dimensional matrices. This is the default matrix type.
   * @class DenseMatrix
   */
  function DenseMatrix(data, datatype) {
    if (!(this instanceof DenseMatrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    if (datatype && !isString(datatype)) {
      throw new Error('Invalid datatype: ' + datatype);
    }

    if (type.isMatrix(data)) {
      // check data is a DenseMatrix
      if (data.type === 'DenseMatrix') {
        // clone data & size
        this._data = object.clone(data._data);
        this._size = object.clone(data._size);
        this._datatype = datatype || data._datatype;
      } else {
        // build data from existing matrix
        this._data = data.toArray();
        this._size = data.size();
        this._datatype = datatype || data._datatype;
      }
    } else if (data && isArray(data.data) && isArray(data.size)) {
      // initialize fields from JSON representation
      this._data = data.data;
      this._size = data.size;
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      // replace nested Matrices with Arrays
      this._data = preprocess(data);
      // get the dimensions of the array
      this._size = array.size(this._data);
      // verify the dimensions of the array, TODO: compute size while processing array
      array.validate(this._data, this._size);
      // data type unknown
      this._datatype = datatype;
    } else if (data) {
      // unsupported type
      throw new TypeError('Unsupported type of data (' + util.types.type(data) + ')');
    } else {
      // nothing provided
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
    }
  }

  DenseMatrix.prototype = new Matrix();

  /**
   * Attach type information
   */
  DenseMatrix.prototype.type = 'DenseMatrix';
  DenseMatrix.prototype.isDenseMatrix = true;

  /**
   * Get the storage format used by the matrix.
   *
   * Usage:
   *     const format = matrix.storage()  // retrieve storage format
   *
   * @memberof DenseMatrix
   * @return {string}           The storage format.
   */
  DenseMatrix.prototype.storage = function () {
    return 'dense';
  };

  /**
   * Get the datatype of the data stored in the matrix.
   *
   * Usage:
   *     const format = matrix.datatype()   // retrieve matrix datatype
   *
   * @memberof DenseMatrix
   * @return {string}           The datatype.
   */
  DenseMatrix.prototype.datatype = function () {
    return this._datatype;
  };

  /**
   * Create a new DenseMatrix
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {string} [datatype]
   */
  DenseMatrix.prototype.create = function (data, datatype) {
    return new DenseMatrix(data, datatype);
  };

  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @memberof DenseMatrix
   * @param {Index} index
   * @param {Array | DenseMatrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */
  DenseMatrix.prototype.subset = function (index, replacement, defaultValue) {
    switch (arguments.length) {
      case 1:
        return _get(this, index);

      // intentional fall through
      case 2:
      case 3:
        return _set(this, index, replacement, defaultValue);

      default:
        throw new SyntaxError('Wrong number of arguments');
    }
  };

  /**
   * Get a single element from the matrix.
   * @memberof DenseMatrix
   * @param {number[]} index   Zero-based index
   * @return {*} value
   */
  DenseMatrix.prototype.get = function (index) {
    if (!isArray(index)) {
      throw new TypeError('Array expected');
    }
    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    }

    // check index
    for (var x = 0; x < index.length; x++) {
      validateIndex(index[x], this._size[x]);
    }

    var data = this._data;
    for (var i = 0, ii = index.length; i < ii; i++) {
      var indexI = index[i];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }

    return data;
  };

  /**
   * Replace a single element in the matrix.
   * @memberof DenseMatrix
   * @param {number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be left undefined.
   * @return {DenseMatrix} self
   */
  DenseMatrix.prototype.set = function (index, value, defaultValue) {
    if (!isArray(index)) {
      throw new TypeError('Array expected');
    }
    if (index.length < this._size.length) {
      throw new DimensionError(index.length, this._size.length, '<');
    }

    var i = void 0,
        ii = void 0,
        indexI = void 0;

    // enlarge matrix when needed
    var size = index.map(function (i) {
      return i + 1;
    });
    _fit(this, size, defaultValue);

    // traverse over the dimensions
    var data = this._data;
    for (i = 0, ii = index.length - 1; i < ii; i++) {
      indexI = index[i];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }

    // set new value
    indexI = index[index.length - 1];
    validateIndex(indexI, data.length);
    data[indexI] = value;

    return this;
  };

  /**
   * Get a submatrix of this matrix
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix
   * @param {Index} index   Zero-based index
   * @private
   */
  function _get(matrix, index) {
    if (!type.isIndex(index)) {
      throw new TypeError('Invalid index');
    }

    var isScalar = index.isScalar();
    if (isScalar) {
      // return a scalar
      return matrix.get(index.min());
    } else {
      // validate dimensions
      var size = index.size();
      if (size.length !== matrix._size.length) {
        throw new DimensionError(size.length, matrix._size.length);
      }

      // validate if any of the ranges in the index is out of range
      var min = index.min();
      var max = index.max();
      for (var i = 0, ii = matrix._size.length; i < ii; i++) {
        validateIndex(min[i], matrix._size[i]);
        validateIndex(max[i], matrix._size[i]);
      }

      // retrieve submatrix
      // TODO: more efficient when creating an empty matrix and setting _data and _size manually
      return new DenseMatrix(_getSubmatrix(matrix._data, index, size.length, 0), matrix._datatype);
    }
  }

  /**
   * Recursively get a submatrix of a multi dimensional matrix.
   * Index is not checked for correct number or length of dimensions.
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {Index} index
   * @param {number} dims   Total number of dimensions
   * @param {number} dim    Current dimension
   * @return {Array} submatrix
   * @private
   */
  function _getSubmatrix(data, index, dims, dim) {
    var last = dim === dims - 1;
    var range = index.dimension(dim);

    if (last) {
      return range.map(function (i) {
        validateIndex(i, data.length);
        return data[i];
      }).valueOf();
    } else {
      return range.map(function (i) {
        validateIndex(i, data.length);
        var child = data[i];
        return _getSubmatrix(child, index, dims, dim + 1);
      }).valueOf();
    }
  }

  /**
   * Replace a submatrix in this matrix
   * Indexes are zero-based.
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix
   * @param {Index} index
   * @param {DenseMatrix | Array | *} submatrix
   * @param {*} defaultValue          Default value, filled in on new entries when
   *                                  the matrix is resized.
   * @return {DenseMatrix} matrix
   * @private
   */
  function _set(matrix, index, submatrix, defaultValue) {
    if (!index || index.isIndex !== true) {
      throw new TypeError('Invalid index');
    }

    // get index size and check whether the index contains a single value
    var iSize = index.size();
    var isScalar = index.isScalar();

    // calculate the size of the submatrix, and convert it into an Array if needed
    var sSize = void 0;
    if (type.isMatrix(submatrix)) {
      sSize = submatrix.size();
      submatrix = submatrix.valueOf();
    } else {
      sSize = array.size(submatrix);
    }

    if (isScalar) {
      // set a scalar

      // check whether submatrix is a scalar
      if (sSize.length !== 0) {
        throw new TypeError('Scalar expected');
      }

      matrix.set(index.min(), submatrix, defaultValue);
    } else {
      // set a submatrix

      // validate dimensions
      if (iSize.length < matrix._size.length) {
        throw new DimensionError(iSize.length, matrix._size.length, '<');
      }

      if (sSize.length < iSize.length) {
        // calculate number of missing outer dimensions
        var i = 0;
        var outer = 0;
        while (iSize[i] === 1 && sSize[i] === 1) {
          i++;
        }
        while (iSize[i] === 1) {
          outer++;
          i++;
        }

        // unsqueeze both outer and inner dimensions
        submatrix = array.unsqueeze(submatrix, iSize.length, outer, sSize);
      }

      // check whether the size of the submatrix matches the index size
      if (!object.deepEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, '>');
      }

      // enlarge matrix when needed
      var size = index.max().map(function (i) {
        return i + 1;
      });
      _fit(matrix, size, defaultValue);

      // insert the sub matrix
      var dims = iSize.length;
      var dim = 0;
      _setSubmatrix(matrix._data, index, submatrix, dims, dim);
    }

    return matrix;
  }

  /**
   * Replace a submatrix of a multi dimensional matrix.
   * @memberof DenseMatrix
   * @param {Array} data
   * @param {Index} index
   * @param {Array} submatrix
   * @param {number} dims   Total number of dimensions
   * @param {number} dim
   * @private
   */
  function _setSubmatrix(data, index, submatrix, dims, dim) {
    var last = dim === dims - 1;
    var range = index.dimension(dim);

    if (last) {
      range.forEach(function (dataIndex, subIndex) {
        validateIndex(dataIndex);
        data[dataIndex] = submatrix[subIndex[0]];
      });
    } else {
      range.forEach(function (dataIndex, subIndex) {
        validateIndex(dataIndex);
        _setSubmatrix(data[dataIndex], index, submatrix[subIndex[0]], dims, dim + 1);
      });
    }
  }

  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @memberof DenseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */
  DenseMatrix.prototype.resize = function (size, defaultValue, copy) {
    // validate arguments
    if (!isArray(size)) {
      throw new TypeError('Array expected');
    }

    // matrix to resize
    var m = copy ? this.clone() : this;
    // resize matrix
    return _resize(m, size, defaultValue);
  };

  function _resize(matrix, size, defaultValue) {
    // check size
    if (size.length === 0) {
      // first value in matrix
      var v = matrix._data;
      // go deep
      while (isArray(v)) {
        v = v[0];
      }
      return v;
    }
    // resize matrix
    matrix._size = size.slice(0); // copy the array
    matrix._data = array.resize(matrix._data, matrix._size, defaultValue);
    // return matrix
    return matrix;
  }

  /**
   * Reshape the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (reshape in place).
   *
   * NOTE: This might be better suited to copy by default, instead of modifying
   *       in place. For now, it operates in place to remain consistent with
   *       resize().
   *
   * @memberof DenseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {boolean} [copy]          Return a reshaped copy of the matrix
   *
   * @return {Matrix}                 The reshaped matrix
   */
  DenseMatrix.prototype.reshape = function (size, copy) {
    var m = copy ? this.clone() : this;

    m._data = array.reshape(m._data, size);
    m._size = size.slice(0);
    return m;
  };

  /**
   * Enlarge the matrix when it is smaller than given size.
   * If the matrix is larger or equal sized, nothing is done.
   * @memberof DenseMatrix
   * @param {DenseMatrix} matrix           The matrix to be resized
   * @param {number[]} size
   * @param {*} defaultValue          Default value, filled in on new entries.
   * @private
   */
  function _fit(matrix, size, defaultValue) {
    var // copy the array
    newSize = matrix._size.slice(0);

    var changed = false;

    // add dimensions when needed
    while (newSize.length < size.length) {
      newSize.push(0);
      changed = true;
    }

    // enlarge size when needed
    for (var i = 0, ii = size.length; i < ii; i++) {
      if (size[i] > newSize[i]) {
        newSize[i] = size[i];
        changed = true;
      }
    }

    if (changed) {
      // resize only when size is changed
      _resize(matrix, newSize, defaultValue);
    }
  }

  /**
   * Create a clone of the matrix
   * @memberof DenseMatrix
   * @return {DenseMatrix} clone
   */
  DenseMatrix.prototype.clone = function () {
    var m = new DenseMatrix({
      data: object.clone(this._data),
      size: object.clone(this._size),
      datatype: this._datatype
    });
    return m;
  };

  /**
   * Retrieve the size of the matrix.
   * @memberof DenseMatrix
   * @returns {number[]} size
   */
  DenseMatrix.prototype.size = function () {
    return this._size.slice(0); // return a clone of _size
  };

  /**
   * Create a new matrix with the results of the callback function executed on
   * each entry of the matrix.
   * @memberof DenseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   *
   * @return {DenseMatrix} matrix
   */
  DenseMatrix.prototype.map = function (callback) {
    // matrix instance
    var me = this;
    var recurse = function recurse(value, index) {
      if (isArray(value)) {
        return value.map(function (child, i) {
          return recurse(child, index.concat(i));
        });
      } else {
        return callback(value, index, me);
      }
    };
    // return dense format
    return new DenseMatrix({
      data: recurse(this._data, []),
      size: object.clone(this._size),
      datatype: this._datatype
    });
  };

  /**
   * Execute a callback function on each entry of the matrix.
   * @memberof DenseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   */
  DenseMatrix.prototype.forEach = function (callback) {
    // matrix instance
    var me = this;
    var recurse = function recurse(value, index) {
      if (isArray(value)) {
        value.forEach(function (child, i) {
          recurse(child, index.concat(i));
        });
      } else {
        callback(value, index, me);
      }
    };
    recurse(this._data, []);
  };

  /**
   * Create an Array with a copy of the data of the DenseMatrix
   * @memberof DenseMatrix
   * @returns {Array} array
   */
  DenseMatrix.prototype.toArray = function () {
    return object.clone(this._data);
  };

  /**
   * Get the primitive value of the DenseMatrix: a multidimensional array
   * @memberof DenseMatrix
   * @returns {Array} array
   */
  DenseMatrix.prototype.valueOf = function () {
    return this._data;
  };

  /**
   * Get a string representation of the matrix, with optional formatting options.
   * @memberof DenseMatrix
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */
  DenseMatrix.prototype.format = function (options) {
    return string.format(this._data, options);
  };

  /**
   * Get a string representation of the matrix
   * @memberof DenseMatrix
   * @returns {string} str
   */
  DenseMatrix.prototype.toString = function () {
    return string.format(this._data);
  };

  /**
   * Get a JSON representation of the matrix
   * @memberof DenseMatrix
   * @returns {Object}
   */
  DenseMatrix.prototype.toJSON = function () {
    return {
      mathjs: 'DenseMatrix',
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };

  /**
   * Get the kth Matrix diagonal.
   *
   * @memberof DenseMatrix
   * @param {number | BigNumber} [k=0]     The kth diagonal where the vector will retrieved.
   *
   * @returns {Array}                      The array vector with the diagonal values.
   */
  DenseMatrix.prototype.diagonal = function (k) {
    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if (type.isBigNumber(k)) {
        k = k.toNumber();
      }
      // is must be an integer
      if (!isNumber(k) || !isInteger(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }

    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0;

    // rows & columns
    var rows = this._size[0];
    var columns = this._size[1];

    // number diagonal values
    var n = Math.min(rows - kSub, columns - kSuper);

    // x is a matrix get diagonal from matrix
    var data = [];

    // loop rows
    for (var i = 0; i < n; i++) {
      data[i] = this._data[i + kSub][i + kSuper];
    }

    // create DenseMatrix
    return new DenseMatrix({
      data: data,
      size: [n],
      datatype: this._datatype
    });
  };

  /**
   * Create a diagonal matrix.
   *
   * @memberof DenseMatrix
   * @param {Array} size                   The matrix size.
   * @param {number | Array} value          The values for the diagonal.
   * @param {number | BigNumber} [k=0]     The kth diagonal where the vector will be filled in.
   * @param {number} [defaultValue]        The default value for non-diagonal
   *
   * @returns {DenseMatrix}
   */
  DenseMatrix.diagonal = function (size, value, k, defaultValue, datatype) {
    if (!isArray(size)) {
      throw new TypeError('Array expected, size parameter');
    }
    if (size.length !== 2) {
      throw new Error('Only two dimensions matrix are supported');
    }

    // map size & validate
    size = size.map(function (s) {
      // check it is a big number
      if (type.isBigNumber(s)) {
        // convert it
        s = s.toNumber();
      }
      // validate arguments
      if (!isNumber(s) || !isInteger(s) || s < 1) {
        throw new Error('Size values must be positive integers');
      }
      return s;
    });

    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if (type.isBigNumber(k)) {
        k = k.toNumber();
      }
      // is must be an integer
      if (!isNumber(k) || !isInteger(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }

    if (defaultValue && isString(datatype)) {
      // convert defaultValue to the same datatype
      defaultValue = typed.convert(defaultValue, datatype);
    }

    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0;

    // rows and columns
    var rows = size[0];
    var columns = size[1];

    // number of non-zero items
    var n = Math.min(rows - kSub, columns - kSuper);

    // value extraction function
    var _value = void 0;

    // check value
    if (isArray(value)) {
      // validate array
      if (value.length !== n) {
        // number of values in array must be n
        throw new Error('Invalid value array length');
      }
      // define function
      _value = function _value(i) {
        // return value @ i
        return value[i];
      };
    } else if (type.isMatrix(value)) {
      // matrix size
      var ms = value.size();
      // validate matrix
      if (ms.length !== 1 || ms[0] !== n) {
        // number of values in array must be n
        throw new Error('Invalid matrix length');
      }
      // define function
      _value = function _value(i) {
        // return value @ i
        return value.get([i]);
      };
    } else {
      // define function
      _value = function _value() {
        // return value
        return value;
      };
    }

    // discover default value if needed
    if (!defaultValue) {
      // check first value in array
      defaultValue = type.isBigNumber(_value(0)) ? new type.BigNumber(0) : 0;
    }

    // empty array
    var data = [];

    // check we need to resize array
    if (size.length > 0) {
      // resize array
      data = array.resize(data, size, defaultValue);
      // fill diagonal
      for (var d = 0; d < n; d++) {
        data[d + kSub][d + kSuper] = _value(d);
      }
    }

    // create DenseMatrix
    return new DenseMatrix({
      data: data,
      size: [rows, columns]
    });
  };

  /**
   * Generate a matrix from a JSON object
   * @memberof DenseMatrix
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "DenseMatrix", data: [], size: []}`,
   *                       where mathjs is optional
   * @returns {DenseMatrix}
   */
  DenseMatrix.fromJSON = function (json) {
    return new DenseMatrix(json);
  };

  /**
   * Swap rows i and j in Matrix.
   *
   * @memberof DenseMatrix
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   *
   * @return {Matrix}        The matrix reference
   */
  DenseMatrix.prototype.swapRows = function (i, j) {
    // check index
    if (!isNumber(i) || !isInteger(i) || !isNumber(j) || !isInteger(j)) {
      throw new Error('Row index must be positive integers');
    }
    // check dimensions
    if (this._size.length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }
    // validate index
    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[0]);

    // swap rows
    DenseMatrix._swapRows(i, j, this._data);
    // return current instance
    return this;
  };

  /**
   * Swap rows i and j in Dense Matrix data structure.
   *
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   */
  DenseMatrix._swapRows = function (i, j, data) {
    // swap values i <-> j
    var vi = data[i];
    data[i] = data[j];
    data[j] = vi;
  };

  /**
   * Preprocess data, which can be an Array or DenseMatrix with nested Arrays and
   * Matrices. Replaces all nested Matrices with Arrays
   * @memberof DenseMatrix
   * @param {Array} data
   * @return {Array} data
   */
  function preprocess(data) {
    for (var i = 0, ii = data.length; i < ii; i++) {
      var elem = data[i];
      if (isArray(elem)) {
        data[i] = preprocess(elem);
      } else if (elem && elem.isMatrix === true) {
        data[i] = preprocess(elem.valueOf());
      }
    }

    return data;
  }

  // register this type in the base class Matrix
  type.Matrix._storage.dense = DenseMatrix;
  type.Matrix._storage['default'] = DenseMatrix;

  // exports
  return DenseMatrix;
}

exports.name = 'DenseMatrix';
exports.path = 'type';
exports.factory = factory;
exports.lazy = false; // no lazy loading, as we alter type.Matrix._storage

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/FibonacciHeap.js":
/*!**************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/FibonacciHeap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var smaller = load(__webpack_require__(/*! ../../function/relational/smaller */ "./node_modules/mathjs/lib/function/relational/smaller.js"));
  var larger = load(__webpack_require__(/*! ../../function/relational/larger */ "./node_modules/mathjs/lib/function/relational/larger.js"));

  var oneOverLogPhi = 1.0 / Math.log((1.0 + Math.sqrt(5.0)) / 2.0);

  /**
   * Fibonacci Heap implementation, used interally for Matrix math.
   * @class FibonacciHeap
   * @constructor FibonacciHeap
   */
  function FibonacciHeap() {
    if (!(this instanceof FibonacciHeap)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    // initialize fields
    this._minimum = null;
    this._size = 0;
  }

  /**
   * Attach type information
   */
  FibonacciHeap.prototype.type = 'FibonacciHeap';
  FibonacciHeap.prototype.isFibonacciHeap = true;

  /**
   * Inserts a new data element into the heap. No heap consolidation is
   * performed at this time, the new node is simply inserted into the root
   * list of this heap. Running time: O(1) actual.
   * @memberof FibonacciHeap
   */
  FibonacciHeap.prototype.insert = function (key, value) {
    // create node
    var node = {
      key: key,
      value: value,
      degree: 0
      // check we have a node in the minimum
    };if (this._minimum) {
      // minimum node
      var minimum = this._minimum;
      // update left & right of node
      node.left = minimum;
      node.right = minimum.right;
      minimum.right = node;
      node.right.left = node;
      // update minimum node in heap if needed
      if (smaller(key, minimum.key)) {
        // node has a smaller key, use it as minimum
        this._minimum = node;
      }
    } else {
      // set left & right
      node.left = node;
      node.right = node;
      // this is the first node
      this._minimum = node;
    }
    // increment number of nodes in heap
    this._size++;
    // return node
    return node;
  };

  /**
   * Returns the number of nodes in heap. Running time: O(1) actual.
   * @memberof FibonacciHeap
   */
  FibonacciHeap.prototype.size = function () {
    return this._size;
  };

  /**
   * Removes all elements from this heap.
   * @memberof FibonacciHeap
   */
  FibonacciHeap.prototype.clear = function () {
    this._minimum = null;
    this._size = 0;
  };

  /**
   * Returns true if the heap is empty, otherwise false.
   * @memberof FibonacciHeap
   */
  FibonacciHeap.prototype.isEmpty = function () {
    return this._size === 0;
  };

  /**
   * Extracts the node with minimum key from heap. Amortized running
   * time: O(log n).
   * @memberof FibonacciHeap
   */
  FibonacciHeap.prototype.extractMinimum = function () {
    // node to remove
    var node = this._minimum;
    // check we have a minimum
    if (node === null) {
      return node;
    }
    // current minimum
    var minimum = this._minimum;
    // get number of children
    var numberOfChildren = node.degree;
    // pointer to the first child
    var x = node.child;
    // for each child of node do...
    while (numberOfChildren > 0) {
      // store node in right side
      var tempRight = x.right;
      // remove x from child list
      x.left.right = x.right;
      x.right.left = x.left;
      // add x to root list of heap
      x.left = minimum;
      x.right = minimum.right;
      minimum.right = x;
      x.right.left = x;
      // set Parent[x] to null
      x.parent = null;
      x = tempRight;
      numberOfChildren--;
    }
    // remove node from root list of heap
    node.left.right = node.right;
    node.right.left = node.left;
    // update minimum
    if (node === node.right) {
      // empty
      minimum = null;
    } else {
      // update minimum
      minimum = node.right;
      // we need to update the pointer to the root with minimum key
      minimum = _findMinimumNode(minimum, this._size);
    }
    // decrement size of heap
    this._size--;
    // update minimum
    this._minimum = minimum;
    // return node
    return node;
  };

  /**
   * Removes a node from the heap given the reference to the node. The trees
   * in the heap will be consolidated, if necessary. This operation may fail
   * to remove the correct element if there are nodes with key value -Infinity.
   * Running time: O(log n) amortized.
   * @memberof FibonacciHeap
   */
  FibonacciHeap.prototype.remove = function (node) {
    // decrease key value
    this._minimum = _decreaseKey(this._minimum, node, -1);
    // remove the smallest
    this.extractMinimum();
  };

  /**
   * Decreases the key value for a heap node, given the new value to take on.
   * The structure of the heap may be changed and will not be consolidated.
   * Running time: O(1) amortized.
   * @memberof FibonacciHeap
   */
  function _decreaseKey(minimum, node, key) {
    // set node key
    node.key = key;
    // get parent node
    var parent = node.parent;
    if (parent && smaller(node.key, parent.key)) {
      // remove node from parent
      _cut(minimum, node, parent);
      // remove all nodes from parent to the root parent
      _cascadingCut(minimum, parent);
    }
    // update minimum node if needed
    if (smaller(node.key, minimum.key)) {
      minimum = node;
    }
    // return minimum
    return minimum;
  }

  /**
   * The reverse of the link operation: removes node from the child list of parent.
   * This method assumes that min is non-null. Running time: O(1).
   * @memberof FibonacciHeap
   */
  function _cut(minimum, node, parent) {
    // remove node from parent children and decrement Degree[parent]
    node.left.right = node.right;
    node.right.left = node.left;
    parent.degree--;
    // reset y.child if necessary
    if (parent.child === node) {
      parent.child = node.right;
    }
    // remove child if degree is 0
    if (parent.degree === 0) {
      parent.child = null;
    }
    // add node to root list of heap
    node.left = minimum;
    node.right = minimum.right;
    minimum.right = node;
    node.right.left = node;
    // set parent[node] to null
    node.parent = null;
    // set mark[node] to false
    node.mark = false;
  }

  /**
   * Performs a cascading cut operation. This cuts node from its parent and then
   * does the same for its parent, and so on up the tree.
   * Running time: O(log n); O(1) excluding the recursion.
   * @memberof FibonacciHeap
   */
  function _cascadingCut(minimum, node) {
    // store parent node
    var parent = node.parent;
    // if there's a parent...
    if (!parent) {
      return;
    }
    // if node is unmarked, set it marked
    if (!node.mark) {
      node.mark = true;
    } else {
      // it's marked, cut it from parent
      _cut(minimum, node, parent);
      // cut its parent as well
      _cascadingCut(parent);
    }
  }

  /**
   * Make the first node a child of the second one. Running time: O(1) actual.
   * @memberof FibonacciHeap
   */
  var _linkNodes = function _linkNodes(node, parent) {
    // remove node from root list of heap
    node.left.right = node.right;
    node.right.left = node.left;
    // make node a Child of parent
    node.parent = parent;
    if (!parent.child) {
      parent.child = node;
      node.right = node;
      node.left = node;
    } else {
      node.left = parent.child;
      node.right = parent.child.right;
      parent.child.right = node;
      node.right.left = node;
    }
    // increase degree[parent]
    parent.degree++;
    // set mark[node] false
    node.mark = false;
  };

  function _findMinimumNode(minimum, size) {
    // to find trees of the same degree efficiently we use an array of length O(log n) in which we keep a pointer to one root of each degree
    var arraySize = Math.floor(Math.log(size) * oneOverLogPhi) + 1;
    // create list with initial capacity
    var array = new Array(arraySize);
    // find the number of root nodes.
    var numRoots = 0;
    var x = minimum;
    if (x) {
      numRoots++;
      x = x.right;
      while (x !== minimum) {
        numRoots++;
        x = x.right;
      }
    }
    // vars
    var y = void 0;
    // For each node in root list do...
    while (numRoots > 0) {
      // access this node's degree..
      var d = x.degree;
      // get next node
      var next = x.right;
      // check if there is a node already in array with the same degree
      while (true) {
        // get node with the same degree is any
        y = array[d];
        if (!y) {
          break;
        }
        // make one node with the same degree a child of the other, do this based on the key value.
        if (larger(x.key, y.key)) {
          var temp = y;
          y = x;
          x = temp;
        }
        // make y a child of x
        _linkNodes(y, x);
        // we have handled this degree, go to next one.
        array[d] = null;
        d++;
      }
      // save this node for later when we might encounter another of the same degree.
      array[d] = x;
      // move forward through list.
      x = next;
      numRoots--;
    }
    // Set min to null (effectively losing the root list) and reconstruct the root list from the array entries in array[].
    minimum = null;
    // loop nodes in array
    for (var i = 0; i < arraySize; i++) {
      // get current node
      y = array[i];
      if (!y) {
        continue;
      }
      // check if we have a linked list
      if (minimum) {
        // First remove node from root list.
        y.left.right = y.right;
        y.right.left = y.left;
        // now add to root list, again.
        y.left = minimum;
        y.right = minimum.right;
        minimum.right = y;
        y.right.left = y;
        // check if this is a new min.
        if (smaller(y.key, minimum.key)) {
          minimum = y;
        }
      } else {
        minimum = y;
      }
    }
    return minimum;
  }

  return FibonacciHeap;
}

exports.name = 'FibonacciHeap';
exports.path = 'type';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/ImmutableDenseMatrix.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/ImmutableDenseMatrix.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! ../../utils/index */ "./node_modules/mathjs/lib/utils/index.js");

var string = util.string;
var object = util.object;

var isArray = Array.isArray;
var isString = string.isString;

function factory(type, config, load) {
  var DenseMatrix = load(__webpack_require__(/*! ./DenseMatrix */ "./node_modules/mathjs/lib/type/matrix/DenseMatrix.js"));

  var smaller = load(__webpack_require__(/*! ../../function/relational/smaller */ "./node_modules/mathjs/lib/function/relational/smaller.js"));

  function ImmutableDenseMatrix(data, datatype) {
    if (!(this instanceof ImmutableDenseMatrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    if (datatype && !isString(datatype)) {
      throw new Error('Invalid datatype: ' + datatype);
    }

    if (type.isMatrix(data) || isArray(data)) {
      // use DenseMatrix implementation
      var matrix = new DenseMatrix(data, datatype);
      // internal structures
      this._data = matrix._data;
      this._size = matrix._size;
      this._datatype = matrix._datatype;
      this._min = null;
      this._max = null;
    } else if (data && isArray(data.data) && isArray(data.size)) {
      // initialize fields from JSON representation
      this._data = data.data;
      this._size = data.size;
      this._datatype = data.datatype;
      this._min = typeof data.min !== 'undefined' ? data.min : null;
      this._max = typeof data.max !== 'undefined' ? data.max : null;
    } else if (data) {
      // unsupported type
      throw new TypeError('Unsupported type of data (' + util.types.type(data) + ')');
    } else {
      // nothing provided
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
      this._min = null;
      this._max = null;
    }
  }

  ImmutableDenseMatrix.prototype = new DenseMatrix();

  /**
   * Attach type information
   */
  ImmutableDenseMatrix.prototype.type = 'ImmutableDenseMatrix';
  ImmutableDenseMatrix.prototype.isImmutableDenseMatrix = true;

  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @param {Index} index
   * @param {Array | ImmutableDenseMatrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */
  ImmutableDenseMatrix.prototype.subset = function (index) {
    switch (arguments.length) {
      case 1:
        // use base implementation
        var m = DenseMatrix.prototype.subset.call(this, index);
        // check result is a matrix
        if (type.isMatrix(m)) {
          // return immutable matrix
          return new ImmutableDenseMatrix({
            data: m._data,
            size: m._size,
            datatype: m._datatype
          });
        }
        return m;

      // intentional fall through
      case 2:
      case 3:
        throw new Error('Cannot invoke set subset on an Immutable Matrix instance');

      default:
        throw new SyntaxError('Wrong number of arguments');
    }
  };

  /**
   * Replace a single element in the matrix.
   * @param {Number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be left undefined.
   * @return {ImmutableDenseMatrix} self
   */
  ImmutableDenseMatrix.prototype.set = function () {
    throw new Error('Cannot invoke set on an Immutable Matrix instance');
  };

  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @param {Number[]} size           The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */
  ImmutableDenseMatrix.prototype.resize = function () {
    throw new Error('Cannot invoke resize on an Immutable Matrix instance');
  };

  /**
   * Disallows reshaping in favor of immutability.
   *
   * @throws {Error} Operation not allowed
   */
  ImmutableDenseMatrix.prototype.reshape = function () {
    throw new Error('Cannot invoke reshape on an Immutable Matrix instance');
  };

  /**
   * Create a clone of the matrix
   * @return {ImmutableDenseMatrix} clone
   */
  ImmutableDenseMatrix.prototype.clone = function () {
    var m = new ImmutableDenseMatrix({
      data: object.clone(this._data),
      size: object.clone(this._size),
      datatype: this._datatype
    });
    return m;
  };

  /**
   * Get a JSON representation of the matrix
   * @returns {Object}
   */
  ImmutableDenseMatrix.prototype.toJSON = function () {
    return {
      mathjs: 'ImmutableDenseMatrix',
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };

  /**
   * Generate a matrix from a JSON object
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "ImmutableDenseMatrix", data: [], size: []}`,
   *                       where mathjs is optional
   * @returns {ImmutableDenseMatrix}
   */
  ImmutableDenseMatrix.fromJSON = function (json) {
    return new ImmutableDenseMatrix(json);
  };

  /**
   * Swap rows i and j in Matrix.
   *
   * @param {Number} i       Matrix row index 1
   * @param {Number} j       Matrix row index 2
   *
   * @return {Matrix}        The matrix reference
   */
  ImmutableDenseMatrix.prototype.swapRows = function () {
    throw new Error('Cannot invoke swapRows on an Immutable Matrix instance');
  };

  /**
   * Calculate the minimum value in the set
   * @return {Number | undefined} min
   */
  ImmutableDenseMatrix.prototype.min = function () {
    // check min has been calculated before
    if (this._min === null) {
      // minimum
      var m = null;
      // compute min
      this.forEach(function (v) {
        if (m === null || smaller(v, m)) {
          m = v;
        }
      });
      this._min = m !== null ? m : undefined;
    }
    return this._min;
  };

  /**
   * Calculate the maximum value in the set
   * @return {Number | undefined} max
   */
  ImmutableDenseMatrix.prototype.max = function () {
    // check max has been calculated before
    if (this._max === null) {
      // maximum
      var m = null;
      // compute max
      this.forEach(function (v) {
        if (m === null || smaller(m, v)) {
          m = v;
        }
      });
      this._max = m !== null ? m : undefined;
    }
    return this._max;
  };

  // exports
  return ImmutableDenseMatrix;
}

exports.name = 'ImmutableDenseMatrix';
exports.path = 'type';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/Matrix.js":
/*!*******************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/Matrix.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! ../../utils/index */ "./node_modules/mathjs/lib/utils/index.js");

var string = util.string;

var isString = string.isString;

function factory(type, config, load, typed) {
  /**
   * @constructor Matrix
   *
   * A Matrix is a wrapper around an Array. A matrix can hold a multi dimensional
   * array. A matrix can be constructed as:
   *
   *     let matrix = math.matrix(data)
   *
   * Matrix contains the functions to resize, get and set values, get the size,
   * clone the matrix and to convert the matrix to a vector, array, or scalar.
   * Furthermore, one can iterate over the matrix using map and forEach.
   * The internal Array of the Matrix can be accessed using the function valueOf.
   *
   * Example usage:
   *
   *     let matrix = math.matrix([[1, 2], [3, 4]])
   *     matix.size()              // [2, 2]
   *     matrix.resize([3, 2], 5)
   *     matrix.valueOf()          // [[1, 2], [3, 4], [5, 5]]
   *     matrix.subset([1,2])       // 3 (indexes are zero-based)
   *
   */
  function Matrix() {
    if (!(this instanceof Matrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
  }

  /**
   * Attach type information
   */
  Matrix.prototype.type = 'Matrix';
  Matrix.prototype.isMatrix = true;

  /**
   * Get the Matrix storage constructor for the given format.
   *
   * @param {string} format       The Matrix storage format.
   *
   * @return {Function}           The Matrix storage constructor.
   */
  Matrix.storage = function (format) {
    // check storage format is a string
    if (!isString(format)) {
      throw new TypeError('format must be a string value');
    }

    // get storage format constructor
    var constructor = Matrix._storage[format];
    if (!constructor) {
      throw new SyntaxError('Unsupported matrix storage format: ' + format);
    }

    // return storage constructor
    return constructor;
  };

  // a map with all constructors for all storage types
  Matrix._storage = {};

  /**
   * Get the storage format used by the matrix.
   *
   * Usage:
   *     const format = matrix.storage()   // retrieve storage format
   *
   * @return {string}           The storage format.
   */
  Matrix.prototype.storage = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke storage on a Matrix interface');
  };

  /**
   * Get the datatype of the data stored in the matrix.
   *
   * Usage:
   *     const format = matrix.datatype()    // retrieve matrix datatype
   *
   * @return {string}           The datatype.
   */
  Matrix.prototype.datatype = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke datatype on a Matrix interface');
  };

  /**
   * Create a new Matrix With the type of the current matrix instance
   * @param {Array | Object} data
   * @param {string} [datatype]
   */
  Matrix.prototype.create = function (data, datatype) {
    throw new Error('Cannot invoke create on a Matrix interface');
  };

  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @param {Index} index
   * @param {Array | Matrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */
  Matrix.prototype.subset = function (index, replacement, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke subset on a Matrix interface');
  };

  /**
   * Get a single element from the matrix.
   * @param {number[]} index   Zero-based index
   * @return {*} value
   */
  Matrix.prototype.get = function (index) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke get on a Matrix interface');
  };

  /**
   * Replace a single element in the matrix.
   * @param {number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be left undefined.
   * @return {Matrix} self
   */
  Matrix.prototype.set = function (index, value, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke set on a Matrix interface');
  };

  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @param {number[]} size           The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */
  Matrix.prototype.resize = function (size, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke resize on a Matrix interface');
  };

  /**
   * Reshape the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (reshape in place).
   *
   * @param {number[]} size           The new size the matrix should have.
   * @param {boolean} [copy]          Return a reshaped copy of the matrix
   *
   * @return {Matrix}                 The reshaped matrix
   */
  Matrix.prototype.reshape = function (size, defaultValue) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke reshape on a Matrix interface');
  };

  /**
   * Create a clone of the matrix
   * @return {Matrix} clone
   */
  Matrix.prototype.clone = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke clone on a Matrix interface');
  };

  /**
   * Retrieve the size of the matrix.
   * @returns {number[]} size
   */
  Matrix.prototype.size = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke size on a Matrix interface');
  };

  /**
   * Create a new matrix with the results of the callback function executed on
   * each entry of the matrix.
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @param {boolean} [skipZeros] Invoke callback function for non-zero values only.
   *
   * @return {Matrix} matrix
   */
  Matrix.prototype.map = function (callback, skipZeros) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke map on a Matrix interface');
  };

  /**
   * Execute a callback function on each entry of the matrix.
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   */
  Matrix.prototype.forEach = function (callback) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke forEach on a Matrix interface');
  };

  /**
   * Create an Array with a copy of the data of the Matrix
   * @returns {Array} array
   */
  Matrix.prototype.toArray = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke toArray on a Matrix interface');
  };

  /**
   * Get the primitive value of the Matrix: a multidimensional array
   * @returns {Array} array
   */
  Matrix.prototype.valueOf = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke valueOf on a Matrix interface');
  };

  /**
   * Get a string representation of the matrix, with optional formatting options.
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */
  Matrix.prototype.format = function (options) {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke format on a Matrix interface');
  };

  /**
   * Get a string representation of the matrix
   * @returns {string} str
   */
  Matrix.prototype.toString = function () {
    // must be implemented by each of the Matrix implementations
    throw new Error('Cannot invoke toString on a Matrix interface');
  };

  // exports
  return Matrix;
}

exports.name = 'Matrix';
exports.path = 'type';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/MatrixIndex.js":
/*!************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/MatrixIndex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(/*! ../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").clone;
var isInteger = __webpack_require__(/*! ../../utils/number */ "./node_modules/mathjs/lib/utils/number.js").isInteger;

function factory(type) {
  /**
   * Create an index. An Index can store ranges and sets for multiple dimensions.
   * Matrix.get, Matrix.set, and math.subset accept an Index as input.
   *
   * Usage:
   *     const index = new Index(range1, range2, matrix1, array1, ...)
   *
   * Where each parameter can be any of:
   *     A number
   *     A string (containing a name of an object property)
   *     An instance of Range
   *     An Array with the Set values
   *     A Matrix with the Set values
   *
   * The parameters start, end, and step must be integer numbers.
   *
   * @class Index
   * @Constructor Index
   * @param {...*} ranges
   */
  function Index(ranges) {
    if (!(this instanceof Index)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    this._dimensions = [];
    this._isScalar = true;

    for (var i = 0, ii = arguments.length; i < ii; i++) {
      var arg = arguments[i];

      if (type.isRange(arg)) {
        this._dimensions.push(arg);
        this._isScalar = false;
      } else if (Array.isArray(arg) || type.isMatrix(arg)) {
        // create matrix
        var m = _createImmutableMatrix(arg.valueOf());
        this._dimensions.push(m);
        // size
        var size = m.size();
        // scalar
        if (size.length !== 1 || size[0] !== 1) {
          this._isScalar = false;
        }
      } else if (typeof arg === 'number') {
        this._dimensions.push(_createImmutableMatrix([arg]));
      } else if (typeof arg === 'string') {
        // object property (arguments.count should be 1)
        this._dimensions.push(arg);
      } else {
        throw new TypeError('Dimension must be an Array, Matrix, number, string, or Range');
      }
      // TODO: implement support for wildcard '*'
    }
  }

  /**
   * Attach type information
   */
  Index.prototype.type = 'Index';
  Index.prototype.isIndex = true;

  function _createImmutableMatrix(arg) {
    // loop array elements
    for (var i = 0, l = arg.length; i < l; i++) {
      if (typeof arg[i] !== 'number' || !isInteger(arg[i])) {
        throw new TypeError('Index parameters must be positive integer numbers');
      }
    }
    // create matrix
    return new type.ImmutableDenseMatrix(arg);
  }

  /**
   * Create a clone of the index
   * @memberof Index
   * @return {Index} clone
   */
  Index.prototype.clone = function () {
    var index = new Index();
    index._dimensions = clone(this._dimensions);
    index._isScalar = this._isScalar;
    return index;
  };

  /**
   * Create an index from an array with ranges/numbers
   * @memberof Index
   * @param {Array.<Array | number>} ranges
   * @return {Index} index
   * @private
   */
  Index.create = function (ranges) {
    var index = new Index();
    Index.apply(index, ranges);
    return index;
  };

  /**
   * Retrieve the size of the index, the number of elements for each dimension.
   * @memberof Index
   * @returns {number[]} size
   */
  Index.prototype.size = function () {
    var size = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var d = this._dimensions[i];
      size[i] = typeof d === 'string' ? 1 : d.size()[0];
    }

    return size;
  };

  /**
   * Get the maximum value for each of the indexes ranges.
   * @memberof Index
   * @returns {number[]} max
   */
  Index.prototype.max = function () {
    var values = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var range = this._dimensions[i];
      values[i] = typeof range === 'string' ? range : range.max();
    }

    return values;
  };

  /**
   * Get the minimum value for each of the indexes ranges.
   * @memberof Index
   * @returns {number[]} min
   */
  Index.prototype.min = function () {
    var values = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var range = this._dimensions[i];
      values[i] = typeof range === 'string' ? range : range.min();
    }

    return values;
  };

  /**
   * Loop over each of the ranges of the index
   * @memberof Index
   * @param {Function} callback   Called for each range with a Range as first
   *                              argument, the dimension as second, and the
   *                              index object as third.
   */
  Index.prototype.forEach = function (callback) {
    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      callback(this._dimensions[i], i, this);
    }
  };

  /**
   * Retrieve the dimension for the given index
   * @memberof Index
   * @param {Number} dim                  Number of the dimension
   * @returns {Range | null} range
   */
  Index.prototype.dimension = function (dim) {
    return this._dimensions[dim] || null;
  };

  /**
   * Test whether this index contains an object property
   * @returns {boolean} Returns true if the index is an object property
   */
  Index.prototype.isObjectProperty = function () {
    return this._dimensions.length === 1 && typeof this._dimensions[0] === 'string';
  };

  /**
   * Returns the object property name when the Index holds a single object property,
   * else returns null
   * @returns {string | null}
   */
  Index.prototype.getObjectProperty = function () {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  };

  /**
   * Test whether this index contains only a single value.
   *
   * This is the case when the index is created with only scalar values as ranges,
   * not for ranges resolving into a single value.
   * @memberof Index
   * @return {boolean} isScalar
   */
  Index.prototype.isScalar = function () {
    return this._isScalar;
  };

  /**
   * Expand the Index into an array.
   * For example new Index([0,3], [2,7]) returns [[0,1,2], [2,3,4,5,6]]
   * @memberof Index
   * @returns {Array} array
   */
  Index.prototype.toArray = function () {
    var array = [];
    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var dimension = this._dimensions[i];
      array.push(typeof dimension === 'string' ? dimension : dimension.toArray());
    }
    return array;
  };

  /**
   * Get the primitive value of the Index, a two dimensional array.
   * Equivalent to Index.toArray().
   * @memberof Index
   * @returns {Array} array
   */
  Index.prototype.valueOf = Index.prototype.toArray;

  /**
   * Get the string representation of the index, for example '[2:6]' or '[0:2:10, 4:7, [1,2,3]]'
   * @memberof Index
   * @returns {String} str
   */
  Index.prototype.toString = function () {
    var strings = [];

    for (var i = 0, ii = this._dimensions.length; i < ii; i++) {
      var dimension = this._dimensions[i];
      if (typeof dimension === 'string') {
        strings.push(JSON.stringify(dimension));
      } else {
        strings.push(dimension.toString());
      }
    }

    return '[' + strings.join(', ') + ']';
  };

  /**
   * Get a JSON representation of the Index
   * @memberof Index
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Index", "ranges": [{"mathjs": "Range", start: 0, end: 10, step:1}, ...]}`
   */
  Index.prototype.toJSON = function () {
    return {
      mathjs: 'Index',
      dimensions: this._dimensions
    };
  };

  /**
   * Instantiate an Index from a JSON object
   * @memberof Index
   * @param {Object} json A JSON object structured as:
   *                     `{"mathjs": "Index", "dimensions": [{"mathjs": "Range", start: 0, end: 10, step:1}, ...]}`
   * @return {Index}
   */
  Index.fromJSON = function (json) {
    return Index.create(json.dimensions);
  };

  return Index;
}

exports.name = 'Index';
exports.path = 'type';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/Range.js":
/*!******************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/Range.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var number = __webpack_require__(/*! ../../utils/number */ "./node_modules/mathjs/lib/utils/number.js");

function factory(type, config, load, typed) {
  /**
   * Create a range. A range has a start, step, and end, and contains functions
   * to iterate over the range.
   *
   * A range can be constructed as:
   *
   *     const range = new Range(start, end)
   *     const range = new Range(start, end, step)
   *
   * To get the result of the range:
   *     range.forEach(function (x) {
   *         console.log(x)
   *     })
   *     range.map(function (x) {
   *         return math.sin(x)
   *     })
   *     range.toArray()
   *
   * Example usage:
   *
   *     const c = new Range(2, 6)       // 2:1:5
   *     c.toArray()                     // [2, 3, 4, 5]
   *     const d = new Range(2, -3, -1)  // 2:-1:-2
   *     d.toArray()                     // [2, 1, 0, -1, -2]
   *
   * @class Range
   * @constructor Range
   * @param {number} start  included lower bound
   * @param {number} end    excluded upper bound
   * @param {number} [step] step size, default value is 1
   */
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    var hasStart = start !== null && start !== undefined;
    var hasEnd = end !== null && end !== undefined;
    var hasStep = step !== null && step !== undefined;

    if (hasStart) {
      if (type.isBigNumber(start)) {
        start = start.toNumber();
      } else if (typeof start !== 'number') {
        throw new TypeError('Parameter start must be a number');
      }
    }
    if (hasEnd) {
      if (type.isBigNumber(end)) {
        end = end.toNumber();
      } else if (typeof end !== 'number') {
        throw new TypeError('Parameter end must be a number');
      }
    }
    if (hasStep) {
      if (type.isBigNumber(step)) {
        step = step.toNumber();
      } else if (typeof step !== 'number') {
        throw new TypeError('Parameter step must be a number');
      }
    }

    this.start = hasStart ? parseFloat(start) : 0;
    this.end = hasEnd ? parseFloat(end) : 0;
    this.step = hasStep ? parseFloat(step) : 1;
  }

  /**
   * Attach type information
   */
  Range.prototype.type = 'Range';
  Range.prototype.isRange = true;

  /**
   * Parse a string into a range,
   * The string contains the start, optional step, and end, separated by a colon.
   * If the string does not contain a valid range, null is returned.
   * For example str='0:2:11'.
   * @memberof Range
   * @param {string} str
   * @return {Range | null} range
   */
  Range.parse = function (str) {
    if (typeof str !== 'string') {
      return null;
    }

    var args = str.split(':');
    var nums = args.map(function (arg) {
      return parseFloat(arg);
    });

    var invalid = nums.some(function (num) {
      return isNaN(num);
    });
    if (invalid) {
      return null;
    }

    switch (nums.length) {
      case 2:
        return new Range(nums[0], nums[1]);
      case 3:
        return new Range(nums[0], nums[2], nums[1]);
      default:
        return null;
    }
  };

  /**
   * Create a clone of the range
   * @return {Range} clone
   */
  Range.prototype.clone = function () {
    return new Range(this.start, this.end, this.step);
  };

  /**
   * Retrieve the size of the range.
   * Returns an array containing one number, the number of elements in the range.
   * @memberof Range
   * @returns {number[]} size
   */
  Range.prototype.size = function () {
    var len = 0;
    var start = this.start;
    var step = this.step;
    var end = this.end;
    var diff = end - start;

    if (number.sign(step) === number.sign(diff)) {
      len = Math.ceil(diff / step);
    } else if (diff === 0) {
      len = 0;
    }

    if (isNaN(len)) {
      len = 0;
    }
    return [len];
  };

  /**
   * Calculate the minimum value in the range
   * @memberof Range
   * @return {number | undefined} min
   */
  Range.prototype.min = function () {
    var size = this.size()[0];

    if (size > 0) {
      if (this.step > 0) {
        // positive step
        return this.start;
      } else {
        // negative step
        return this.start + (size - 1) * this.step;
      }
    } else {
      return undefined;
    }
  };

  /**
   * Calculate the maximum value in the range
   * @memberof Range
   * @return {number | undefined} max
   */
  Range.prototype.max = function () {
    var size = this.size()[0];

    if (size > 0) {
      if (this.step > 0) {
        // positive step
        return this.start + (size - 1) * this.step;
      } else {
        // negative step
        return this.start;
      }
    } else {
      return undefined;
    }
  };

  /**
   * Execute a callback function for each value in the range.
   * @memberof Range
   * @param {function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Range being traversed.
   */
  Range.prototype.forEach = function (callback) {
    var x = this.start;
    var step = this.step;
    var end = this.end;
    var i = 0;

    if (step > 0) {
      while (x < end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    } else if (step < 0) {
      while (x > end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    }
  };

  /**
   * Execute a callback function for each value in the Range, and return the
   * results as an array
   * @memberof Range
   * @param {function} callback   The callback method is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @returns {Array} array
   */
  Range.prototype.map = function (callback) {
    var array = [];
    this.forEach(function (value, index, obj) {
      array[index[0]] = callback(value, index, obj);
    });
    return array;
  };

  /**
   * Create an Array with a copy of the Ranges data
   * @memberof Range
   * @returns {Array} array
   */
  Range.prototype.toArray = function () {
    var array = [];
    this.forEach(function (value, index) {
      array[index[0]] = value;
    });
    return array;
  };

  /**
   * Get the primitive value of the Range, a one dimensional array
   * @memberof Range
   * @returns {Array} array
   */
  Range.prototype.valueOf = function () {
    // TODO: implement a caching mechanism for range.valueOf()
    return this.toArray();
  };

  /**
   * Get a string representation of the range, with optional formatting options.
   * Output is formatted as 'start:step:end', for example '2:6' or '0:0.2:11'
   * @memberof Range
   * @param {Object | number | function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */
  Range.prototype.format = function (options) {
    var str = number.format(this.start, options);

    if (this.step !== 1) {
      str += ':' + number.format(this.step, options);
    }
    str += ':' + number.format(this.end, options);
    return str;
  };

  /**
   * Get a string representation of the range.
   * @memberof Range
   * @returns {string}
   */
  Range.prototype.toString = function () {
    return this.format();
  };

  /**
   * Get a JSON representation of the range
   * @memberof Range
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}`
   */
  Range.prototype.toJSON = function () {
    return {
      mathjs: 'Range',
      start: this.start,
      end: this.end,
      step: this.step
    };
  };

  /**
   * Instantiate a Range from a JSON object
   * @memberof Range
   * @param {Object} json A JSON object structured as:
   *                      `{"mathjs": "Range", "start": 2, "end": 4, "step": 1}`
   * @return {Range}
   */
  Range.fromJSON = function (json) {
    return new Range(json.start, json.end, json.step);
  };

  return Range;
}

exports.name = 'Range';
exports.path = 'type';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/Spa.js":
/*!****************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/Spa.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load) {
  var add = load(__webpack_require__(/*! ../../function/arithmetic/add */ "./node_modules/mathjs/lib/function/arithmetic/add.js"));
  var equalScalar = load(__webpack_require__(/*! ../../function/relational/equalScalar */ "./node_modules/mathjs/lib/function/relational/equalScalar.js"));

  /**
   * An ordered Sparse Accumulator is a representation for a sparse vector that includes a dense array
   * of the vector elements and an ordered list of non-zero elements.
   */
  function Spa() {
    if (!(this instanceof Spa)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }

    // allocate vector, TODO use typed arrays
    this._values = [];
    this._heap = new type.FibonacciHeap();
  }

  /**
   * Attach type information
   */
  Spa.prototype.type = 'Spa';
  Spa.prototype.isSpa = true;

  /**
   * Set the value for index i.
   *
   * @param {number} i                       The index
   * @param {number | BigNumber | Complex}   The value at index i
   */
  Spa.prototype.set = function (i, v) {
    // check we have a value @ i
    if (!this._values[i]) {
      // insert in heap
      var node = this._heap.insert(i, v);
      // set the value @ i
      this._values[i] = node;
    } else {
      // update the value @ i
      this._values[i].value = v;
    }
  };

  Spa.prototype.get = function (i) {
    var node = this._values[i];
    if (node) {
      return node.value;
    }
    return 0;
  };

  Spa.prototype.accumulate = function (i, v) {
    // node @ i
    var node = this._values[i];
    if (!node) {
      // insert in heap
      node = this._heap.insert(i, v);
      // initialize value
      this._values[i] = node;
    } else {
      // accumulate value
      node.value = add(node.value, v);
    }
  };

  Spa.prototype.forEach = function (from, to, callback) {
    // references
    var heap = this._heap;
    var values = this._values;
    // nodes
    var nodes = [];
    // node with minimum key, save it
    var node = heap.extractMinimum();
    if (node) {
      nodes.push(node);
    }
    // extract nodes from heap (ordered)
    while (node && node.key <= to) {
      // check it is in range
      if (node.key >= from) {
        // check value is not zero
        if (!equalScalar(node.value, 0)) {
          // invoke callback
          callback(node.key, node.value, this);
        }
      }
      // extract next node, save it
      node = heap.extractMinimum();
      if (node) {
        nodes.push(node);
      }
    }
    // reinsert all nodes in heap
    for (var i = 0; i < nodes.length; i++) {
      // current node
      var n = nodes[i];
      // insert node in heap
      node = heap.insert(n.key, n.value);
      // update values
      values[node.key] = node;
    }
  };

  Spa.prototype.swap = function (i, j) {
    // node @ i and j
    var nodei = this._values[i];
    var nodej = this._values[j];
    // check we need to insert indeces
    if (!nodei && nodej) {
      // insert in heap
      nodei = this._heap.insert(i, nodej.value);
      // remove from heap
      this._heap.remove(nodej);
      // set values
      this._values[i] = nodei;
      this._values[j] = undefined;
    } else if (nodei && !nodej) {
      // insert in heap
      nodej = this._heap.insert(j, nodei.value);
      // remove from heap
      this._heap.remove(nodei);
      // set values
      this._values[j] = nodej;
      this._values[i] = undefined;
    } else if (nodei && nodej) {
      // swap values
      var v = nodei.value;
      nodei.value = nodej.value;
      nodej.value = v;
    }
  };

  return Spa;
}

exports.name = 'Spa';
exports.path = 'type';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/SparseMatrix.js":
/*!*************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/SparseMatrix.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! ../../utils/index */ "./node_modules/mathjs/lib/utils/index.js");
var DimensionError = __webpack_require__(/*! ../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

var array = util.array;
var object = util.object;
var string = util.string;
var number = util.number;

var isArray = Array.isArray;
var isNumber = number.isNumber;
var isInteger = number.isInteger;
var isString = string.isString;

var validateIndex = array.validateIndex;

function factory(type, config, load, typed) {
  var Matrix = load(__webpack_require__(/*! ./Matrix */ "./node_modules/mathjs/lib/type/matrix/Matrix.js")); // force loading Matrix (do not use via type.Matrix)
  var equalScalar = load(__webpack_require__(/*! ../../function/relational/equalScalar */ "./node_modules/mathjs/lib/function/relational/equalScalar.js"));

  /**
   * Sparse Matrix implementation. This type implements a Compressed Column Storage format
   * for sparse matrices.
   * @class SparseMatrix
   */
  function SparseMatrix(data, datatype) {
    if (!(this instanceof SparseMatrix)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    if (datatype && !isString(datatype)) {
      throw new Error('Invalid datatype: ' + datatype);
    }

    if (type.isMatrix(data)) {
      // create from matrix
      _createFromMatrix(this, data, datatype);
    } else if (data && isArray(data.index) && isArray(data.ptr) && isArray(data.size)) {
      // initialize fields
      this._values = data.values;
      this._index = data.index;
      this._ptr = data.ptr;
      this._size = data.size;
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      // create from array
      _createFromArray(this, data, datatype);
    } else if (data) {
      // unsupported type
      throw new TypeError('Unsupported type of data (' + util.types.type(data) + ')');
    } else {
      // nothing provided
      this._values = [];
      this._index = [];
      this._ptr = [0];
      this._size = [0, 0];
      this._datatype = datatype;
    }
  }

  function _createFromMatrix(matrix, source, datatype) {
    // check matrix type
    if (source.type === 'SparseMatrix') {
      // clone arrays
      matrix._values = source._values ? object.clone(source._values) : undefined;
      matrix._index = object.clone(source._index);
      matrix._ptr = object.clone(source._ptr);
      matrix._size = object.clone(source._size);
      matrix._datatype = datatype || source._datatype;
    } else {
      // build from matrix data
      _createFromArray(matrix, source.valueOf(), datatype || source._datatype);
    }
  }

  function _createFromArray(matrix, data, datatype) {
    // initialize fields
    matrix._values = [];
    matrix._index = [];
    matrix._ptr = [];
    matrix._datatype = datatype;
    // discover rows & columns, do not use math.size() to avoid looping array twice
    var rows = data.length;
    var columns = 0;

    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    if (isString(datatype)) {
      // find signature that matches (datatype, datatype)
      eq = typed.find(equalScalar, [datatype, datatype]) || equalScalar;
      // convert 0 to the same datatype
      zero = typed.convert(0, datatype);
    }

    // check we have rows (empty array)
    if (rows > 0) {
      // column index
      var j = 0;
      do {
        // store pointer to values index
        matrix._ptr.push(matrix._index.length);
        // loop rows
        for (var i = 0; i < rows; i++) {
          // current row
          var row = data[i];
          // check row is an array
          if (isArray(row)) {
            // update columns if needed (only on first column)
            if (j === 0 && columns < row.length) {
              columns = row.length;
            }
            // check row has column
            if (j < row.length) {
              // value
              var v = row[j];
              // check value != 0
              if (!eq(v, zero)) {
                // store value
                matrix._values.push(v);
                // index
                matrix._index.push(i);
              }
            }
          } else {
            // update columns if needed (only on first column)
            if (j === 0 && columns < 1) {
              columns = 1;
            }
            // check value != 0 (row is a scalar)
            if (!eq(row, zero)) {
              // store value
              matrix._values.push(row);
              // index
              matrix._index.push(i);
            }
          }
        }
        // increment index
        j++;
      } while (j < columns);
    }
    // store number of values in ptr
    matrix._ptr.push(matrix._index.length);
    // size
    matrix._size = [rows, columns];
  }

  SparseMatrix.prototype = new Matrix();

  /**
   * Attach type information
   */
  SparseMatrix.prototype.type = 'SparseMatrix';
  SparseMatrix.prototype.isSparseMatrix = true;

  /**
   * Get the storage format used by the matrix.
   *
   * Usage:
   *     const format = matrix.storage()   // retrieve storage format
   *
   * @memberof SparseMatrix
   * @return {string}           The storage format.
   */
  SparseMatrix.prototype.storage = function () {
    return 'sparse';
  };

  /**
   * Get the datatype of the data stored in the matrix.
   *
   * Usage:
   *     const format = matrix.datatype()    // retrieve matrix datatype
   *
   * @memberof SparseMatrix
   * @return {string}           The datatype.
   */
  SparseMatrix.prototype.datatype = function () {
    return this._datatype;
  };

  /**
   * Create a new SparseMatrix
   * @memberof SparseMatrix
   * @param {Array} data
   * @param {string} [datatype]
   */
  SparseMatrix.prototype.create = function (data, datatype) {
    return new SparseMatrix(data, datatype);
  };

  /**
   * Get the matrix density.
   *
   * Usage:
   *     const density = matrix.density()                   // retrieve matrix density
   *
   * @memberof SparseMatrix
   * @return {number}           The matrix density.
   */
  SparseMatrix.prototype.density = function () {
    // rows & columns
    var rows = this._size[0];
    var columns = this._size[1];
    // calculate density
    return rows !== 0 && columns !== 0 ? this._index.length / (rows * columns) : 0;
  };

  /**
   * Get a subset of the matrix, or replace a subset of the matrix.
   *
   * Usage:
   *     const subset = matrix.subset(index)               // retrieve subset
   *     const value = matrix.subset(index, replacement)   // replace subset
   *
   * @memberof SparseMatrix
   * @param {Index} index
   * @param {Array | Maytrix | *} [replacement]
   * @param {*} [defaultValue=0]      Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be filled with zeros.
   */
  SparseMatrix.prototype.subset = function (index, replacement, defaultValue) {
    // check it is a pattern matrix
    if (!this._values) {
      throw new Error('Cannot invoke subset on a Pattern only matrix');
    }

    // check arguments
    switch (arguments.length) {
      case 1:
        return _getsubset(this, index);

      // intentional fall through
      case 2:
      case 3:
        return _setsubset(this, index, replacement, defaultValue);

      default:
        throw new SyntaxError('Wrong number of arguments');
    }
  };

  function _getsubset(matrix, idx) {
    // check idx
    if (!type.isIndex(idx)) {
      throw new TypeError('Invalid index');
    }

    var isScalar = idx.isScalar();
    if (isScalar) {
      // return a scalar
      return matrix.get(idx.min());
    }
    // validate dimensions
    var size = idx.size();
    if (size.length !== matrix._size.length) {
      throw new DimensionError(size.length, matrix._size.length);
    }

    // vars
    var i = void 0,
        ii = void 0,
        k = void 0,
        kk = void 0;

    // validate if any of the ranges in the index is out of range
    var min = idx.min();
    var max = idx.max();
    for (i = 0, ii = matrix._size.length; i < ii; i++) {
      validateIndex(min[i], matrix._size[i]);
      validateIndex(max[i], matrix._size[i]);
    }

    // matrix arrays
    var mvalues = matrix._values;
    var mindex = matrix._index;
    var mptr = matrix._ptr;

    // rows & columns dimensions for result matrix
    var rows = idx.dimension(0);
    var columns = idx.dimension(1);

    // workspace & permutation vector
    var w = [];
    var pv = [];

    // loop rows in resulting matrix
    rows.forEach(function (i, r) {
      // update permutation vector
      pv[i] = r[0];
      // mark i in workspace
      w[i] = true;
    });

    // result matrix arrays
    var values = mvalues ? [] : undefined;
    var index = [];
    var ptr = [];

    // loop columns in result matrix
    columns.forEach(function (j) {
      // update ptr
      ptr.push(index.length);
      // loop values in column j
      for (k = mptr[j], kk = mptr[j + 1]; k < kk; k++) {
        // row
        i = mindex[k];
        // check row is in result matrix
        if (w[i] === true) {
          // push index
          index.push(pv[i]);
          // check we need to process values
          if (values) {
            values.push(mvalues[k]);
          }
        }
      }
    });
    // update ptr
    ptr.push(index.length);

    // return matrix
    return new SparseMatrix({
      values: values,
      index: index,
      ptr: ptr,
      size: size,
      datatype: matrix._datatype
    });
  }

  function _setsubset(matrix, index, submatrix, defaultValue) {
    // check index
    if (!index || index.isIndex !== true) {
      throw new TypeError('Invalid index');
    }

    // get index size and check whether the index contains a single value
    var iSize = index.size();
    var isScalar = index.isScalar();

    // calculate the size of the submatrix, and convert it into an Array if needed
    var sSize = void 0;
    if (type.isMatrix(submatrix)) {
      // submatrix size
      sSize = submatrix.size();
      // use array representation
      submatrix = submatrix.toArray();
    } else {
      // get submatrix size (array, scalar)
      sSize = array.size(submatrix);
    }

    // check index is a scalar
    if (isScalar) {
      // verify submatrix is a scalar
      if (sSize.length !== 0) {
        throw new TypeError('Scalar expected');
      }
      // set value
      matrix.set(index.min(), submatrix, defaultValue);
    } else {
      // validate dimensions, index size must be one or two dimensions
      if (iSize.length !== 1 && iSize.length !== 2) {
        throw new DimensionError(iSize.length, matrix._size.length, '<');
      }

      // check submatrix and index have the same dimensions
      if (sSize.length < iSize.length) {
        // calculate number of missing outer dimensions
        var i = 0;
        var outer = 0;
        while (iSize[i] === 1 && sSize[i] === 1) {
          i++;
        }
        while (iSize[i] === 1) {
          outer++;
          i++;
        }
        // unsqueeze both outer and inner dimensions
        submatrix = array.unsqueeze(submatrix, iSize.length, outer, sSize);
      }

      // check whether the size of the submatrix matches the index size
      if (!object.deepEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, '>');
      }

      // offsets
      var x0 = index.min()[0];
      var y0 = index.min()[1];

      // submatrix rows and columns
      var m = sSize[0];
      var n = sSize[1];

      // loop submatrix
      for (var x = 0; x < m; x++) {
        // loop columns
        for (var y = 0; y < n; y++) {
          // value at i, j
          var v = submatrix[x][y];
          // invoke set (zero value will remove entry from matrix)
          matrix.set([x + x0, y + y0], v, defaultValue);
        }
      }
    }
    return matrix;
  }

  /**
   * Get a single element from the matrix.
   * @memberof SparseMatrix
   * @param {number[]} index   Zero-based index
   * @return {*} value
   */
  SparseMatrix.prototype.get = function (index) {
    if (!isArray(index)) {
      throw new TypeError('Array expected');
    }
    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    }

    // check it is a pattern matrix
    if (!this._values) {
      throw new Error('Cannot invoke get on a Pattern only matrix');
    }

    // row and column
    var i = index[0];
    var j = index[1];

    // check i, j are valid
    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[1]);

    // find value index
    var k = _getValueIndex(i, this._ptr[j], this._ptr[j + 1], this._index);
    // check k is prior to next column k and it is in the correct row
    if (k < this._ptr[j + 1] && this._index[k] === i) {
      return this._values[k];
    }

    return 0;
  };

  /**
   * Replace a single element in the matrix.
   * @memberof SparseMatrix
   * @param {number[]} index   Zero-based index
   * @param {*} value
   * @param {*} [defaultValue]        Default value, filled in on new entries when
   *                                  the matrix is resized. If not provided,
   *                                  new matrix elements will be set to zero.
   * @return {SparseMatrix} self
   */
  SparseMatrix.prototype.set = function (index, v, defaultValue) {
    if (!isArray(index)) {
      throw new TypeError('Array expected');
    }
    if (index.length !== this._size.length) {
      throw new DimensionError(index.length, this._size.length);
    }

    // check it is a pattern matrix
    if (!this._values) {
      throw new Error('Cannot invoke set on a Pattern only matrix');
    }

    // row and column
    var i = index[0];
    var j = index[1];

    // rows & columns
    var rows = this._size[0];
    var columns = this._size[1];

    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    if (isString(this._datatype)) {
      // find signature that matches (datatype, datatype)
      eq = typed.find(equalScalar, [this._datatype, this._datatype]) || equalScalar;
      // convert 0 to the same datatype
      zero = typed.convert(0, this._datatype);
    }

    // check we need to resize matrix
    if (i > rows - 1 || j > columns - 1) {
      // resize matrix
      _resize(this, Math.max(i + 1, rows), Math.max(j + 1, columns), defaultValue);
      // update rows & columns
      rows = this._size[0];
      columns = this._size[1];
    }

    // check i, j are valid
    validateIndex(i, rows);
    validateIndex(j, columns);

    // find value index
    var k = _getValueIndex(i, this._ptr[j], this._ptr[j + 1], this._index);
    // check k is prior to next column k and it is in the correct row
    if (k < this._ptr[j + 1] && this._index[k] === i) {
      // check value != 0
      if (!eq(v, zero)) {
        // update value
        this._values[k] = v;
      } else {
        // remove value from matrix
        _remove(k, j, this._values, this._index, this._ptr);
      }
    } else {
      // insert value @ (i, j)
      _insert(k, i, j, v, this._values, this._index, this._ptr);
    }

    return this;
  };

  function _getValueIndex(i, top, bottom, index) {
    // check row is on the bottom side
    if (bottom - top === 0) {
      return bottom;
    }
    // loop rows [top, bottom[
    for (var r = top; r < bottom; r++) {
      // check we found value index
      if (index[r] === i) {
        return r;
      }
    }
    // we did not find row
    return top;
  }

  function _remove(k, j, values, index, ptr) {
    // remove value @ k
    values.splice(k, 1);
    index.splice(k, 1);
    // update pointers
    for (var x = j + 1; x < ptr.length; x++) {
      ptr[x]--;
    }
  }

  function _insert(k, i, j, v, values, index, ptr) {
    // insert value
    values.splice(k, 0, v);
    // update row for k
    index.splice(k, 0, i);
    // update column pointers
    for (var x = j + 1; x < ptr.length; x++) {
      ptr[x]++;
    }
  }

  /**
   * Resize the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (resize in place).
   *
   * @memberof SparseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {*} [defaultValue=0]      Default value, filled in on new entries.
   *                                  If not provided, the matrix elements will
   *                                  be filled with zeros.
   * @param {boolean} [copy]          Return a resized copy of the matrix
   *
   * @return {Matrix}                 The resized matrix
   */
  SparseMatrix.prototype.resize = function (size, defaultValue, copy) {
    // validate arguments
    if (!isArray(size)) {
      throw new TypeError('Array expected');
    }
    if (size.length !== 2) {
      throw new Error('Only two dimensions matrix are supported');
    }

    // check sizes
    size.forEach(function (value) {
      if (!number.isNumber(value) || !number.isInteger(value) || value < 0) {
        throw new TypeError('Invalid size, must contain positive integers ' + '(size: ' + string.format(size) + ')');
      }
    });

    // matrix to resize
    var m = copy ? this.clone() : this;
    // resize matrix
    return _resize(m, size[0], size[1], defaultValue);
  };

  function _resize(matrix, rows, columns, defaultValue) {
    // value to insert at the time of growing matrix
    var value = defaultValue || 0;

    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    if (isString(matrix._datatype)) {
      // find signature that matches (datatype, datatype)
      eq = typed.find(equalScalar, [matrix._datatype, matrix._datatype]) || equalScalar;
      // convert 0 to the same datatype
      zero = typed.convert(0, matrix._datatype);
      // convert value to the same datatype
      value = typed.convert(value, matrix._datatype);
    }

    // should we insert the value?
    var ins = !eq(value, zero);

    // old columns and rows
    var r = matrix._size[0];
    var c = matrix._size[1];

    var i = void 0,
        j = void 0,
        k = void 0;

    // check we need to increase columns
    if (columns > c) {
      // loop new columns
      for (j = c; j < columns; j++) {
        // update matrix._ptr for current column
        matrix._ptr[j] = matrix._values.length;
        // check we need to insert matrix._values
        if (ins) {
          // loop rows
          for (i = 0; i < r; i++) {
            // add new matrix._values
            matrix._values.push(value);
            // update matrix._index
            matrix._index.push(i);
          }
        }
      }
      // store number of matrix._values in matrix._ptr
      matrix._ptr[columns] = matrix._values.length;
    } else if (columns < c) {
      // truncate matrix._ptr
      matrix._ptr.splice(columns + 1, c - columns);
      // truncate matrix._values and matrix._index
      matrix._values.splice(matrix._ptr[columns], matrix._values.length);
      matrix._index.splice(matrix._ptr[columns], matrix._index.length);
    }
    // update columns
    c = columns;

    // check we need to increase rows
    if (rows > r) {
      // check we have to insert values
      if (ins) {
        // inserts
        var n = 0;
        // loop columns
        for (j = 0; j < c; j++) {
          // update matrix._ptr for current column
          matrix._ptr[j] = matrix._ptr[j] + n;
          // where to insert matrix._values
          k = matrix._ptr[j + 1] + n;
          // pointer
          var p = 0;
          // loop new rows, initialize pointer
          for (i = r; i < rows; i++, p++) {
            // add value
            matrix._values.splice(k + p, 0, value);
            // update matrix._index
            matrix._index.splice(k + p, 0, i);
            // increment inserts
            n++;
          }
        }
        // store number of matrix._values in matrix._ptr
        matrix._ptr[c] = matrix._values.length;
      }
    } else if (rows < r) {
      // deletes
      var d = 0;
      // loop columns
      for (j = 0; j < c; j++) {
        // update matrix._ptr for current column
        matrix._ptr[j] = matrix._ptr[j] - d;
        // where matrix._values start for next column
        var k0 = matrix._ptr[j];
        var k1 = matrix._ptr[j + 1] - d;
        // loop matrix._index
        for (k = k0; k < k1; k++) {
          // row
          i = matrix._index[k];
          // check we need to delete value and matrix._index
          if (i > rows - 1) {
            // remove value
            matrix._values.splice(k, 1);
            // remove item from matrix._index
            matrix._index.splice(k, 1);
            // increase deletes
            d++;
          }
        }
      }
      // update matrix._ptr for current column
      matrix._ptr[j] = matrix._values.length;
    }
    // update matrix._size
    matrix._size[0] = rows;
    matrix._size[1] = columns;
    // return matrix
    return matrix;
  }

  /**
   * Reshape the matrix to the given size. Returns a copy of the matrix when
   * `copy=true`, otherwise return the matrix itself (reshape in place).
   *
   * NOTE: This might be better suited to copy by default, instead of modifying
   *       in place. For now, it operates in place to remain consistent with
   *       resize().
   *
   * @memberof SparseMatrix
   * @param {number[]} size           The new size the matrix should have.
   * @param {boolean} [copy]          Return a reshaped copy of the matrix
   *
   * @return {Matrix}                 The reshaped matrix
   */
  SparseMatrix.prototype.reshape = function (size, copy) {
    // validate arguments
    if (!isArray(size)) {
      throw new TypeError('Array expected');
    }
    if (size.length !== 2) {
      throw new Error('Sparse matrices can only be reshaped in two dimensions');
    }

    // check sizes
    size.forEach(function (value) {
      if (!number.isNumber(value) || !number.isInteger(value) || value < 0) {
        throw new TypeError('Invalid size, must contain positive integers ' + '(size: ' + string.format(size) + ')');
      }
    });

    // m * n must not change
    if (this._size[0] * this._size[1] !== size[0] * size[1]) {
      throw new Error('Reshaping sparse matrix will result in the wrong number of elements');
    }

    // matrix to reshape
    var m = copy ? this.clone() : this;

    // return unchanged if the same shape
    if (this._size[0] === size[0] && this._size[1] === size[1]) {
      return m;
    }

    // Convert to COO format (generate a column index)
    var colIndex = [];
    for (var i = 0; i < m._ptr.length; i++) {
      for (var j = 0; j < m._ptr[i + 1] - m._ptr[i]; j++) {
        colIndex.push(i);
      }
    }

    // Clone the values array
    var values = m._values.slice();

    // Clone the row index array
    var rowIndex = m._index.slice();

    // Transform the (row, column) indices
    for (var _i = 0; _i < m._index.length; _i++) {
      var r1 = rowIndex[_i];
      var c1 = colIndex[_i];
      var flat = r1 * m._size[1] + c1;
      colIndex[_i] = flat % size[1];
      rowIndex[_i] = Math.floor(flat / size[1]);
    }

    // Now reshaping is supposed to preserve the row-major order, BUT these sparse matrices are stored
    // in column-major order, so we have to reorder the value array now. One option is to use a multisort,
    // sorting several arrays based on some other array.

    // OR, we could easily just:

    // 1. Remove all values from the matrix
    m._values.length = 0;
    m._index.length = 0;
    m._ptr.length = size[1] + 1;
    m._size = size.slice();
    for (var _i2 = 0; _i2 < m._ptr.length; _i2++) {
      m._ptr[_i2] = 0;
    }

    // 2. Re-insert all elements in the proper order (simplified code from SparseMatrix.prototype.set)
    // This step is probably the most time-consuming
    for (var h = 0; h < values.length; h++) {
      var _i3 = rowIndex[h];
      var _j = colIndex[h];
      var v = values[h];
      var k = _getValueIndex(_i3, m._ptr[_j], m._ptr[_j + 1], m._index);
      _insert(k, _i3, _j, v, m._values, m._index, m._ptr);
    }

    // The value indices are inserted out of order, but apparently that's... still OK?

    return m;
  };

  /**
   * Create a clone of the matrix
   * @memberof SparseMatrix
   * @return {SparseMatrix} clone
   */
  SparseMatrix.prototype.clone = function () {
    var m = new SparseMatrix({
      values: this._values ? object.clone(this._values) : undefined,
      index: object.clone(this._index),
      ptr: object.clone(this._ptr),
      size: object.clone(this._size),
      datatype: this._datatype
    });
    return m;
  };

  /**
   * Retrieve the size of the matrix.
   * @memberof SparseMatrix
   * @returns {number[]} size
   */
  SparseMatrix.prototype.size = function () {
    return this._size.slice(0); // copy the Array
  };

  /**
   * Create a new matrix with the results of the callback function executed on
   * each entry of the matrix.
   * @memberof SparseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @param {boolean} [skipZeros] Invoke callback function for non-zero values only.
   *
   * @return {SparseMatrix} matrix
   */
  SparseMatrix.prototype.map = function (callback, skipZeros) {
    // check it is a pattern matrix
    if (!this._values) {
      throw new Error('Cannot invoke map on a Pattern only matrix');
    }
    // matrix instance
    var me = this;
    // rows and columns
    var rows = this._size[0];
    var columns = this._size[1];
    // invoke callback
    var invoke = function invoke(v, i, j) {
      // invoke callback
      return callback(v, [i, j], me);
    };
    // invoke _map
    return _map(this, 0, rows - 1, 0, columns - 1, invoke, skipZeros);
  };

  /**
   * Create a new matrix with the results of the callback function executed on the interval
   * [minRow..maxRow, minColumn..maxColumn].
   */
  function _map(matrix, minRow, maxRow, minColumn, maxColumn, callback, skipZeros) {
    // result arrays
    var values = [];
    var index = [];
    var ptr = [];

    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    if (isString(matrix._datatype)) {
      // find signature that matches (datatype, datatype)
      eq = typed.find(equalScalar, [matrix._datatype, matrix._datatype]) || equalScalar;
      // convert 0 to the same datatype
      zero = typed.convert(0, matrix._datatype);
    }

    // invoke callback
    var invoke = function invoke(v, x, y) {
      // invoke callback
      v = callback(v, x, y);
      // check value != 0
      if (!eq(v, zero)) {
        // store value
        values.push(v);
        // index
        index.push(x);
      }
    };
    // loop columns
    for (var j = minColumn; j <= maxColumn; j++) {
      // store pointer to values index
      ptr.push(values.length);
      // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
      var k0 = matrix._ptr[j];
      var k1 = matrix._ptr[j + 1];
      // row pointer
      var p = minRow;
      // loop k within [k0, k1[
      for (var k = k0; k < k1; k++) {
        // row index
        var i = matrix._index[k];
        // check i is in range
        if (i >= minRow && i <= maxRow) {
          // zero values
          if (!skipZeros) {
            for (var x = p; x < i; x++) {
              invoke(0, x - minRow, j - minColumn);
            }
          }
          // value @ k
          invoke(matrix._values[k], i - minRow, j - minColumn);
        }
        // update pointer
        p = i + 1;
      }
      // zero values
      if (!skipZeros) {
        for (var y = p; y <= maxRow; y++) {
          invoke(0, y - minRow, j - minColumn);
        }
      }
    }
    // store number of values in ptr
    ptr.push(values.length);
    // return sparse matrix
    return new SparseMatrix({
      values: values,
      index: index,
      ptr: ptr,
      size: [maxRow - minRow + 1, maxColumn - minColumn + 1]
    });
  }

  /**
   * Execute a callback function on each entry of the matrix.
   * @memberof SparseMatrix
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix being traversed.
   * @param {boolean} [skipZeros] Invoke callback function for non-zero values only.
   */
  SparseMatrix.prototype.forEach = function (callback, skipZeros) {
    // check it is a pattern matrix
    if (!this._values) {
      throw new Error('Cannot invoke forEach on a Pattern only matrix');
    }
    // matrix instance
    var me = this;
    // rows and columns
    var rows = this._size[0];
    var columns = this._size[1];
    // loop columns
    for (var j = 0; j < columns; j++) {
      // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      // column pointer
      var p = 0;
      // loop k within [k0, k1[
      for (var k = k0; k < k1; k++) {
        // row index
        var i = this._index[k];
        // check we need to process zeros
        if (!skipZeros) {
          // zero values
          for (var x = p; x < i; x++) {
            callback(0, [x, j], me);
          } // eslint-disable-line standard/no-callback-literal
        }
        // value @ k
        callback(this._values[k], [i, j], me);
        // update pointer
        p = i + 1;
      }
      // check we need to process zeros
      if (!skipZeros) {
        // zero values
        for (var y = p; y < rows; y++) {
          callback(0, [y, j], me);
        } // eslint-disable-line standard/no-callback-literal
      }
    }
  };

  /**
   * Create an Array with a copy of the data of the SparseMatrix
   * @memberof SparseMatrix
   * @returns {Array} array
   */
  SparseMatrix.prototype.toArray = function () {
    return _toArray(this._values, this._index, this._ptr, this._size, true);
  };

  /**
   * Get the primitive value of the SparseMatrix: a two dimensions array
   * @memberof SparseMatrix
   * @returns {Array} array
   */
  SparseMatrix.prototype.valueOf = function () {
    return _toArray(this._values, this._index, this._ptr, this._size, false);
  };

  function _toArray(values, index, ptr, size, copy) {
    // rows and columns
    var rows = size[0];
    var columns = size[1];
    // result
    var a = [];
    // vars
    var i = void 0,
        j = void 0;
    // initialize array
    for (i = 0; i < rows; i++) {
      a[i] = [];
      for (j = 0; j < columns; j++) {
        a[i][j] = 0;
      }
    }

    // loop columns
    for (j = 0; j < columns; j++) {
      // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      // loop k within [k0, k1[
      for (var k = k0; k < k1; k++) {
        // row index
        i = index[k];
        // set value (use one for pattern matrix)
        a[i][j] = values ? copy ? object.clone(values[k]) : values[k] : 1;
      }
    }
    return a;
  }

  /**
   * Get a string representation of the matrix, with optional formatting options.
   * @memberof SparseMatrix
   * @param {Object | number | Function} [options]  Formatting options. See
   *                                                lib/utils/number:format for a
   *                                                description of the available
   *                                                options.
   * @returns {string} str
   */
  SparseMatrix.prototype.format = function (options) {
    // rows and columns
    var rows = this._size[0];
    var columns = this._size[1];
    // density
    var density = this.density();
    // rows & columns
    var str = 'Sparse Matrix [' + string.format(rows, options) + ' x ' + string.format(columns, options) + '] density: ' + string.format(density, options) + '\n';
    // loop columns
    for (var j = 0; j < columns; j++) {
      // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      // loop k within [k0, k1[
      for (var k = k0; k < k1; k++) {
        // row index
        var i = this._index[k];
        // append value
        str += '\n    (' + string.format(i, options) + ', ' + string.format(j, options) + ') ==> ' + (this._values ? string.format(this._values[k], options) : 'X');
      }
    }
    return str;
  };

  /**
   * Get a string representation of the matrix
   * @memberof SparseMatrix
   * @returns {string} str
   */
  SparseMatrix.prototype.toString = function () {
    return string.format(this.toArray());
  };

  /**
   * Get a JSON representation of the matrix
   * @memberof SparseMatrix
   * @returns {Object}
   */
  SparseMatrix.prototype.toJSON = function () {
    return {
      mathjs: 'SparseMatrix',
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  };

  /**
   * Get the kth Matrix diagonal.
   *
   * @memberof SparseMatrix
   * @param {number | BigNumber} [k=0]     The kth diagonal where the vector will retrieved.
   *
   * @returns {Matrix}                     The matrix vector with the diagonal values.
   */
  SparseMatrix.prototype.diagonal = function (k) {
    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if (type.isBigNumber(k)) {
        k = k.toNumber();
      }
      // is must be an integer
      if (!isNumber(k) || !isInteger(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }

    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0;

    // rows & columns
    var rows = this._size[0];
    var columns = this._size[1];

    // number diagonal values
    var n = Math.min(rows - kSub, columns - kSuper);

    // diagonal arrays
    var values = [];
    var index = [];
    var ptr = [];
    // initial ptr value
    ptr[0] = 0;
    // loop columns
    for (var j = kSuper; j < columns && values.length < n; j++) {
      // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      // loop x within [k0, k1[
      for (var x = k0; x < k1; x++) {
        // row index
        var i = this._index[x];
        // check row
        if (i === j - kSuper + kSub) {
          // value on this column
          values.push(this._values[x]);
          // store row
          index[values.length - 1] = i - kSub;
          // exit loop
          break;
        }
      }
    }
    // close ptr
    ptr.push(values.length);
    // return matrix
    return new SparseMatrix({
      values: values,
      index: index,
      ptr: ptr,
      size: [n, 1]
    });
  };

  /**
   * Generate a matrix from a JSON object
   * @memberof SparseMatrix
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "SparseMatrix", "values": [], "index": [], "ptr": [], "size": []}`,
   *                       where mathjs is optional
   * @returns {SparseMatrix}
   */
  SparseMatrix.fromJSON = function (json) {
    return new SparseMatrix(json);
  };

  /**
   * Create a diagonal matrix.
   *
   * @memberof SparseMatrix
   * @param {Array} size                       The matrix size.
   * @param {number | Array | Matrix } value   The values for the diagonal.
   * @param {number | BigNumber} [k=0]         The kth diagonal where the vector will be filled in.
   * @param {string} [datatype]                The Matrix datatype, values must be of this datatype.
   *
   * @returns {SparseMatrix}
   */
  SparseMatrix.diagonal = function (size, value, k, defaultValue, datatype) {
    if (!isArray(size)) {
      throw new TypeError('Array expected, size parameter');
    }
    if (size.length !== 2) {
      throw new Error('Only two dimensions matrix are supported');
    }

    // map size & validate
    size = size.map(function (s) {
      // check it is a big number
      if (type.isBigNumber(s)) {
        // convert it
        s = s.toNumber();
      }
      // validate arguments
      if (!isNumber(s) || !isInteger(s) || s < 1) {
        throw new Error('Size values must be positive integers');
      }
      return s;
    });

    // validate k if any
    if (k) {
      // convert BigNumber to a number
      if (type.isBigNumber(k)) {
        k = k.toNumber();
      }
      // is must be an integer
      if (!isNumber(k) || !isInteger(k)) {
        throw new TypeError('The parameter k must be an integer number');
      }
    } else {
      // default value
      k = 0;
    }

    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;

    if (isString(datatype)) {
      // find signature that matches (datatype, datatype)
      eq = typed.find(equalScalar, [datatype, datatype]) || equalScalar;
      // convert 0 to the same datatype
      zero = typed.convert(0, datatype);
    }

    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0;

    // rows and columns
    var rows = size[0];
    var columns = size[1];

    // number of non-zero items
    var n = Math.min(rows - kSub, columns - kSuper);

    // value extraction function
    var _value = void 0;

    // check value
    if (isArray(value)) {
      // validate array
      if (value.length !== n) {
        // number of values in array must be n
        throw new Error('Invalid value array length');
      }
      // define function
      _value = function _value(i) {
        // return value @ i
        return value[i];
      };
    } else if (type.isMatrix(value)) {
      // matrix size
      var ms = value.size();
      // validate matrix
      if (ms.length !== 1 || ms[0] !== n) {
        // number of values in array must be n
        throw new Error('Invalid matrix length');
      }
      // define function
      _value = function _value(i) {
        // return value @ i
        return value.get([i]);
      };
    } else {
      // define function
      _value = function _value() {
        // return value
        return value;
      };
    }

    // create arrays
    var values = [];
    var index = [];
    var ptr = [];

    // loop items
    for (var j = 0; j < columns; j++) {
      // number of rows with value
      ptr.push(values.length);
      // diagonal index
      var i = j - kSuper;
      // check we need to set diagonal value
      if (i >= 0 && i < n) {
        // get value @ i
        var v = _value(i);
        // check for zero
        if (!eq(v, zero)) {
          // column
          index.push(i + kSub);
          // add value
          values.push(v);
        }
      }
    }
    // last value should be number of values
    ptr.push(values.length);
    // create SparseMatrix
    return new SparseMatrix({
      values: values,
      index: index,
      ptr: ptr,
      size: [rows, columns]
    });
  };

  /**
   * Swap rows i and j in Matrix.
   *
   * @memberof SparseMatrix
   * @param {number} i       Matrix row index 1
   * @param {number} j       Matrix row index 2
   *
   * @return {Matrix}        The matrix reference
   */
  SparseMatrix.prototype.swapRows = function (i, j) {
    // check index
    if (!isNumber(i) || !isInteger(i) || !isNumber(j) || !isInteger(j)) {
      throw new Error('Row index must be positive integers');
    }
    // check dimensions
    if (this._size.length !== 2) {
      throw new Error('Only two dimensional matrix is supported');
    }
    // validate index
    validateIndex(i, this._size[0]);
    validateIndex(j, this._size[0]);

    // swap rows
    SparseMatrix._swapRows(i, j, this._size[1], this._values, this._index, this._ptr);
    // return current instance
    return this;
  };

  /**
   * Loop rows with data in column j.
   *
   * @param {number} j            Column
   * @param {Array} values        Matrix values
   * @param {Array} index         Matrix row indeces
   * @param {Array} ptr           Matrix column pointers
   * @param {Function} callback   Callback function invoked for every row in column j
   */
  SparseMatrix._forEachRow = function (j, values, index, ptr, callback) {
    // indeces for column j
    var k0 = ptr[j];
    var k1 = ptr[j + 1];
    // loop
    for (var k = k0; k < k1; k++) {
      // invoke callback
      callback(index[k], values[k]);
    }
  };

  /**
   * Swap rows x and y in Sparse Matrix data structures.
   *
   * @param {number} x         Matrix row index 1
   * @param {number} y         Matrix row index 2
   * @param {number} columns   Number of columns in matrix
   * @param {Array} values     Matrix values
   * @param {Array} index      Matrix row indeces
   * @param {Array} ptr        Matrix column pointers
   */
  SparseMatrix._swapRows = function (x, y, columns, values, index, ptr) {
    // loop columns
    for (var j = 0; j < columns; j++) {
      // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      // find value index @ x
      var kx = _getValueIndex(x, k0, k1, index);
      // find value index @ x
      var ky = _getValueIndex(y, k0, k1, index);
      // check both rows exist in matrix
      if (kx < k1 && ky < k1 && index[kx] === x && index[ky] === y) {
        // swap values (check for pattern matrix)
        if (values) {
          var v = values[kx];
          values[kx] = values[ky];
          values[ky] = v;
        }
        // next column
        continue;
      }
      // check x row exist & no y row
      if (kx < k1 && index[kx] === x && (ky >= k1 || index[ky] !== y)) {
        // value @ x (check for pattern matrix)
        var vx = values ? values[kx] : undefined;
        // insert value @ y
        index.splice(ky, 0, y);
        if (values) {
          values.splice(ky, 0, vx);
        }
        // remove value @ x (adjust array index if needed)
        index.splice(ky <= kx ? kx + 1 : kx, 1);
        if (values) {
          values.splice(ky <= kx ? kx + 1 : kx, 1);
        }
        // next column
        continue;
      }
      // check y row exist & no x row
      if (ky < k1 && index[ky] === y && (kx >= k1 || index[kx] !== x)) {
        // value @ y (check for pattern matrix)
        var vy = values ? values[ky] : undefined;
        // insert value @ x
        index.splice(kx, 0, x);
        if (values) {
          values.splice(kx, 0, vy);
        }
        // remove value @ y (adjust array index if needed)
        index.splice(kx <= ky ? ky + 1 : ky, 1);
        if (values) {
          values.splice(kx <= ky ? ky + 1 : ky, 1);
        }
      }
    }
  };

  // register this type in the base class Matrix
  type.Matrix._storage.sparse = SparseMatrix;

  return SparseMatrix;
}

exports.name = 'SparseMatrix';
exports.path = 'type';
exports.factory = factory;
exports.lazy = false; // no lazy loading, as we alter type.Matrix._storage

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/function/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/function/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Create an index. An Index can store ranges having start, step, and end
   * for multiple dimensions.
   * Matrix.get, Matrix.set, and math.subset accept an Index as input.
   *
   * Syntax:
   *
   *     math.index(range1, range2, ...)
   *
   * Where each range can be any of:
   *
   * - A number
   * - A string for getting/setting an object property
   * - An instance of `Range`
   * - A one-dimensional Array or a Matrix with numbers
   *
   * Indexes must be zero-based, integer numbers.
   *
   * Examples:
   *
   *    const math = require('mathjs')
   *
   *    const b = [1, 2, 3, 4, 5]
   *    math.subset(b, math.index([1, 2, 3]))     // returns [2, 3, 4]
   *
   *    const a = math.matrix([[1, 2], [3, 4]])
   *    a.subset(math.index(0, 1))             // returns 2
   *
   * See also:
   *
   *    bignumber, boolean, complex, matrix, number, string, unit
   *
   * @param {...*} ranges   Zero or more ranges or numbers.
   * @return {Index}        Returns the created index
   */
  return typed('index', {
    '...number | string | BigNumber | Range | Array | Matrix': function numberStringBigNumberRangeArrayMatrix(args) {
      var ranges = args.map(function (arg) {
        if (type.isBigNumber(arg)) {
          return arg.toNumber(); // convert BigNumber to Number
        } else if (Array.isArray(arg) || type.isMatrix(arg)) {
          return arg.map(function (elem) {
            // convert BigNumber to Number
            return type.isBigNumber(elem) ? elem.toNumber() : elem;
          });
        } else {
          return arg;
        }
      });

      var res = new type.Index();
      type.Index.apply(res, ranges);
      return res;
    }
  });
}

exports.name = 'index';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/function/matrix.js":
/*!****************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/function/matrix.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  /**
   * Create a Matrix. The function creates a new `math.type.Matrix` object from
   * an `Array`. A Matrix has utility functions to manipulate the data in the
   * matrix, like getting the size and getting or setting values in the matrix.
   * Supported storage formats are 'dense' and 'sparse'.
   *
   * Syntax:
   *
   *    math.matrix()                         // creates an empty matrix using default storage format (dense).
   *    math.matrix(data)                     // creates a matrix with initial data using default storage format (dense).
   *    math.matrix('dense')                  // creates an empty matrix using the given storage format.
   *    math.matrix(data, 'dense')            // creates a matrix with initial data using the given storage format.
   *    math.matrix(data, 'sparse')           // creates a sparse matrix with initial data.
   *    math.matrix(data, 'sparse', 'number') // creates a sparse matrix with initial data, number data type.
   *
   * Examples:
   *
   *    let m = math.matrix([[1, 2], [3, 4]])
   *    m.size()                        // Array [2, 2]
   *    m.resize([3, 2], 5)
   *    m.valueOf()                     // Array [[1, 2], [3, 4], [5, 5]]
   *    m.get([1, 0])                    // number 3
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, number, string, unit, sparse
   *
   * @param {Array | Matrix} [data]    A multi dimensional array
   * @param {string} [format]          The Matrix storage format
   *
   * @return {Matrix} The created matrix
   */
  var matrix = typed('matrix', {
    '': function _() {
      return _create([]);
    },

    'string': function string(format) {
      return _create([], format);
    },

    'string, string': function stringString(format, datatype) {
      return _create([], format, datatype);
    },

    'Array': function Array(data) {
      return _create(data);
    },

    'Matrix': function Matrix(data) {
      return _create(data, data.storage());
    },

    'Array | Matrix, string': _create,

    'Array | Matrix, string, string': _create
  });

  matrix.toTex = {
    0: '\\begin{bmatrix}\\end{bmatrix}',
    1: '\\left(${args[0]}\\right)',
    2: '\\left(${args[0]}\\right)'
  };

  return matrix;

  /**
   * Create a new Matrix with given storage format
   * @param {Array} data
   * @param {string} [format]
   * @param {string} [datatype]
   * @returns {Matrix} Returns a new Matrix
   * @private
   */
  function _create(data, format, datatype) {
    // get storage format constructor
    var M = type.Matrix.storage(format || 'default');

    // create instance
    return new M(data, datatype);
  }
}

exports.name = 'matrix';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/function/sparse.js":
/*!****************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/function/sparse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var SparseMatrix = type.SparseMatrix;

  /**
   * Create a Sparse Matrix. The function creates a new `math.type.Matrix` object from
   * an `Array`. A Matrix has utility functions to manipulate the data in the
   * matrix, like getting the size and getting or setting values in the matrix.
   *
   * Syntax:
   *
   *    math.sparse()               // creates an empty sparse matrix.
   *    math.sparse(data)           // creates a sparse matrix with initial data.
   *    math.sparse(data, 'number') // creates a sparse matrix with initial data, number datatype.
   *
   * Examples:
   *
   *    let m = math.sparse([[1, 2], [3, 4]])
   *    m.size()                        // Array [2, 2]
   *    m.resize([3, 2], 5)
   *    m.valueOf()                     // Array [[1, 2], [3, 4], [5, 5]]
   *    m.get([1, 0])                    // number 3
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, number, string, unit, matrix
   *
   * @param {Array | Matrix} [data]    A two dimensional array
   *
   * @return {Matrix} The created matrix
   */
  var sparse = typed('sparse', {
    '': function _() {
      return new SparseMatrix([]);
    },

    'string': function string(datatype) {
      return new SparseMatrix([], datatype);
    },

    'Array | Matrix': function ArrayMatrix(data) {
      return new SparseMatrix(data);
    },

    'Array | Matrix, string': function ArrayMatrixString(data, datatype) {
      return new SparseMatrix(data, datatype);
    }
  });

  sparse.toTex = {
    0: '\\begin{bsparse}\\end{bsparse}',
    1: '\\left(${args[0]}\\right)'
  };

  return sparse;
}

exports.name = 'sparse';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
// types
__webpack_require__(/*! ./Matrix */ "./node_modules/mathjs/lib/type/matrix/Matrix.js"), __webpack_require__(/*! ./DenseMatrix */ "./node_modules/mathjs/lib/type/matrix/DenseMatrix.js"), __webpack_require__(/*! ./SparseMatrix */ "./node_modules/mathjs/lib/type/matrix/SparseMatrix.js"), __webpack_require__(/*! ./Spa */ "./node_modules/mathjs/lib/type/matrix/Spa.js"), __webpack_require__(/*! ./FibonacciHeap */ "./node_modules/mathjs/lib/type/matrix/FibonacciHeap.js"), __webpack_require__(/*! ./ImmutableDenseMatrix */ "./node_modules/mathjs/lib/type/matrix/ImmutableDenseMatrix.js"), __webpack_require__(/*! ./MatrixIndex */ "./node_modules/mathjs/lib/type/matrix/MatrixIndex.js"), __webpack_require__(/*! ./Range */ "./node_modules/mathjs/lib/type/matrix/Range.js"),

// construction functions
__webpack_require__(/*! ./function/index */ "./node_modules/mathjs/lib/type/matrix/function/index.js"), __webpack_require__(/*! ./function/matrix */ "./node_modules/mathjs/lib/type/matrix/function/matrix.js"), __webpack_require__(/*! ./function/sparse */ "./node_modules/mathjs/lib/type/matrix/function/sparse.js")];

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm01.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm01.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(/*! ../../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over SparseMatrix nonzero items and invokes the callback function f(Dij, Sij).
   * Callback function invoked NNZ times (number of nonzero items in SparseMatrix).
   *
   *
   *          ┌  f(Dij, Sij)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  Dij          ; otherwise
   *
   *
   * @param {Matrix}   denseMatrix       The DenseMatrix instance (D)
   * @param {Matrix}   sparseMatrix      The SparseMatrix instance (S)
   * @param {Function} callback          The f(Dij,Sij) operation to invoke, where Dij = DenseMatrix(i,j) and Sij = SparseMatrix(i,j)
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(Sij,Dij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97477571
   */
  var algorithm01 = function algorithm01(denseMatrix, sparseMatrix, callback, inverse) {
    // dense matrix arrays
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype;
    // sparse matrix arrays
    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype;

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }

    // check rows & columns
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    }

    // sparse matrix cannot be a Pattern matrix
    if (!bvalues) {
      throw new Error('Cannot perform operation on Dense Matrix and Pattern Sparse Matrix');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // process data types
    var dt = typeof adt === 'string' && adt === bdt ? adt : undefined;
    // callback function
    var cf = dt ? typed.find(callback, [dt, dt]) : callback;

    // vars
    var i = void 0,
        j = void 0;

    // result (DenseMatrix)
    var cdata = [];
    // initialize c
    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    }

    // workspace
    var x = [];
    // marks indicating we have a value in x for a given column
    var w = [];

    // loop columns in b
    for (j = 0; j < columns; j++) {
      // column mark
      var mark = j + 1;
      // values in column j
      for (var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = bindex[k];
        // update workspace
        x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]);
        // mark i as updated
        w[i] = mark;
      }
      // loop rows
      for (i = 0; i < rows; i++) {
        // check row is in workspace
        if (w[i] === mark) {
          // c[i][j] was already calculated
          cdata[i][j] = x[i];
        } else {
          // item does not exist in S
          cdata[i][j] = adata[i][j];
        }
      }
    }

    // return dense matrix
    return new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };

  return algorithm01;
}

exports.name = 'algorithm01';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm03.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm03.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(/*! ../../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over SparseMatrix items and invokes the callback function f(Dij, Sij).
   * Callback function invoked M*N times.
   *
   *
   *          ┌  f(Dij, Sij)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  f(Dij, 0)    ; otherwise
   *
   *
   * @param {Matrix}   denseMatrix       The DenseMatrix instance (D)
   * @param {Matrix}   sparseMatrix      The SparseMatrix instance (C)
   * @param {Function} callback          The f(Dij,Sij) operation to invoke, where Dij = DenseMatrix(i,j) and Sij = SparseMatrix(i,j)
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(Sij,Dij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97477571
   */
  var algorithm03 = function algorithm03(denseMatrix, sparseMatrix, callback, inverse) {
    // dense matrix arrays
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype;
    // sparse matrix arrays
    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype;

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }

    // check rows & columns
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    }

    // sparse matrix cannot be a Pattern matrix
    if (!bvalues) {
      throw new Error('Cannot perform operation on Dense Matrix and Pattern Sparse Matrix');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // datatype
    var dt = void 0;
    // zero value
    var zero = 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt;
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result (DenseMatrix)
    var cdata = [];

    // initialize dense matrix
    for (var z = 0; z < rows; z++) {
      // initialize row
      cdata[z] = [];
    }

    // workspace
    var x = [];
    // marks indicating we have a value in x for a given column
    var w = [];

    // loop columns in b
    for (var j = 0; j < columns; j++) {
      // column mark
      var mark = j + 1;
      // values in column j
      for (var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        var i = bindex[k];
        // update workspace
        x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]);
        w[i] = mark;
      }
      // process workspace
      for (var y = 0; y < rows; y++) {
        // check we have a calculated value for current row
        if (w[y] === mark) {
          // use calculated value
          cdata[y][j] = x[y];
        } else {
          // calculate value
          cdata[y][j] = inverse ? cf(zero, adata[y][j]) : cf(adata[y][j], zero);
        }
      }
    }

    // return dense matrix
    return new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };

  return algorithm03;
}

exports.name = 'algorithm03';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm04.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm04.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(/*! ../../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(/*! ../../../function/relational/equalScalar */ "./node_modules/mathjs/lib/function/relational/equalScalar.js"));

  var SparseMatrix = type.SparseMatrix;

  /**
   * Iterates over SparseMatrix A and SparseMatrix B nonzero items and invokes the callback function f(Aij, Bij).
   * Callback function invoked MAX(NNZA, NNZB) times
   *
   *
   *          ┌  f(Aij, Bij)  ; A(i,j) !== 0 && B(i,j) !== 0
   * C(i,j) = ┤  A(i,j)       ; A(i,j) !== 0
   *          └  B(i,j)       ; B(i,j) !== 0
   *
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */
  var algorithm04 = function algorithm04(a, b, callback) {
    // sparse matrix arrays
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    // sparse matrix arrays
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype;

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }

    // check rows & columns
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // datatype
    var dt = void 0;
    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt;
      // find signature that matches (dt, dt)
      eq = typed.find(equalScalar, [dt, dt]);
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result arrays
    var cvalues = avalues && bvalues ? [] : undefined;
    var cindex = [];
    var cptr = [];
    // matrix
    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });

    // workspace
    var xa = avalues && bvalues ? [] : undefined;
    var xb = avalues && bvalues ? [] : undefined;
    // marks indicating we have a value in x for a given column
    var wa = [];
    var wb = [];

    // vars
    var i = void 0,
        j = void 0,
        k = void 0,
        k0 = void 0,
        k1 = void 0;

    // loop columns
    for (j = 0; j < columns; j++) {
      // update cptr
      cptr[j] = cindex.length;
      // columns mark
      var mark = j + 1;
      // loop A(:,j)
      for (k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = aindex[k];
        // update c
        cindex.push(i);
        // update workspace
        wa[i] = mark;
        // check we need to process values
        if (xa) {
          xa[i] = avalues[k];
        }
      }
      // loop B(:,j)
      for (k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        // row
        i = bindex[k];
        // check row exists in A
        if (wa[i] === mark) {
          // update record in xa @ i
          if (xa) {
            // invoke callback
            var v = cf(xa[i], bvalues[k]);
            // check for zero
            if (!eq(v, zero)) {
              // update workspace
              xa[i] = v;
            } else {
              // remove mark (index will be removed later)
              wa[i] = null;
            }
          }
        } else {
          // update c
          cindex.push(i);
          // update workspace
          wb[i] = mark;
          // check we need to process values
          if (xb) {
            xb[i] = bvalues[k];
          }
        }
      }
      // check we need to process values (non pattern matrix)
      if (xa && xb) {
        // initialize first index in j
        k = cptr[j];
        // loop index in j
        while (k < cindex.length) {
          // row
          i = cindex[k];
          // check workspace has value @ i
          if (wa[i] === mark) {
            // push value (Aij != 0 || (Aij != 0 && Bij != 0))
            cvalues[k] = xa[i];
            // increment pointer
            k++;
          } else if (wb[i] === mark) {
            // push value (bij != 0)
            cvalues[k] = xb[i];
            // increment pointer
            k++;
          } else {
            // remove index @ k
            cindex.splice(k, 1);
          }
        }
      }
    }
    // update cptr
    cptr[columns] = cindex.length;

    // return sparse matrix
    return c;
  };

  return algorithm04;
}

exports.name = 'algorithm04';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm07.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm07.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(/*! ../../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over SparseMatrix A and SparseMatrix B items (zero and nonzero) and invokes the callback function f(Aij, Bij).
   * Callback function invoked MxN times.
   *
   * C(i,j) = f(Aij, Bij)
   *
   * @param {Matrix}   a                 The SparseMatrix instance (A)
   * @param {Matrix}   b                 The SparseMatrix instance (B)
   * @param {Function} callback          The f(Aij,Bij) operation to invoke
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * see https://github.com/josdejong/mathjs/pull/346#issuecomment-97620294
   */
  var algorithm07 = function algorithm07(a, b, callback) {
    // sparse matrix arrays
    var asize = a._size;
    var adt = a._datatype;
    // sparse matrix arrays
    var bsize = b._size;
    var bdt = b._datatype;

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }

    // check rows & columns
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // datatype
    var dt = void 0;
    // zero value
    var zero = 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt;
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // vars
    var i = void 0,
        j = void 0;

    // result arrays
    var cdata = [];
    // initialize c
    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    }

    // matrix
    var c = new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });

    // workspaces
    var xa = [];
    var xb = [];
    // marks indicating we have a value in x for a given column
    var wa = [];
    var wb = [];

    // loop columns
    for (j = 0; j < columns; j++) {
      // columns mark
      var mark = j + 1;
      // scatter the values of A(:,j) into workspace
      _scatter(a, j, wa, xa, mark);
      // scatter the values of B(:,j) into workspace
      _scatter(b, j, wb, xb, mark);
      // loop rows
      for (i = 0; i < rows; i++) {
        // matrix values @ i,j
        var va = wa[i] === mark ? xa[i] : zero;
        var vb = wb[i] === mark ? xb[i] : zero;
        // invoke callback
        cdata[i][j] = cf(va, vb);
      }
    }

    // return sparse matrix
    return c;
  };

  function _scatter(m, j, w, x, mark) {
    // a arrays
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr;
    // loop values in column j
    for (var k = ptr[j], k1 = ptr[j + 1]; k < k1; k++) {
      // row
      var i = index[k];
      // update workspace
      w[i] = mark;
      x[i] = values[k];
    }
  }

  return algorithm07;
}

exports.name = 'algorithm07';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm10.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm10.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over SparseMatrix S nonzero items and invokes the callback function f(Sij, b).
   * Callback function invoked NZ times (number of nonzero items in S).
   *
   *
   *          ┌  f(Sij, b)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  b          ; otherwise
   *
   *
   * @param {Matrix}   s                 The SparseMatrix instance (S)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Sij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97626813
   */
  var algorithm10 = function algorithm10(s, b, callback, inverse) {
    // sparse matrix arrays
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;

    // sparse matrix cannot be a Pattern matrix
    if (!avalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrix and Scalar value');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // datatype
    var dt = void 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string') {
      // datatype
      dt = adt;
      // convert b to the same datatype
      b = typed.convert(b, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result arrays
    var cdata = [];
    // matrix
    var c = new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });

    // workspaces
    var x = [];
    // marks indicating we have a value in x for a given column
    var w = [];

    // loop columns
    for (var j = 0; j < columns; j++) {
      // columns mark
      var mark = j + 1;
      // values in j
      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        var r = aindex[k];
        // update workspace
        x[r] = avalues[k];
        w[r] = mark;
      }
      // loop rows
      for (var i = 0; i < rows; i++) {
        // initialize C on first column
        if (j === 0) {
          // create row array
          cdata[i] = [];
        }
        // check sparse matrix has a value @ i,j
        if (w[i] === mark) {
          // invoke callback, update C
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          // dense matrix value @ i, j
          cdata[i][j] = b;
        }
      }
    }

    // return sparse matrix
    return c;
  };

  return algorithm10;
}

exports.name = 'algorithm10';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm11.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm11.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var equalScalar = load(__webpack_require__(/*! ../../../function/relational/equalScalar */ "./node_modules/mathjs/lib/function/relational/equalScalar.js"));

  var SparseMatrix = type.SparseMatrix;

  /**
   * Iterates over SparseMatrix S nonzero items and invokes the callback function f(Sij, b).
   * Callback function invoked NZ times (number of nonzero items in S).
   *
   *
   *          ┌  f(Sij, b)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  0          ; otherwise
   *
   *
   * @param {Matrix}   s                 The SparseMatrix instance (S)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Sij)
   *
   * @return {Matrix}                    SparseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97626813
   */
  var algorithm11 = function algorithm11(s, b, callback, inverse) {
    // sparse matrix arrays
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;

    // sparse matrix cannot be a Pattern matrix
    if (!avalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrix and Scalar value');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // datatype
    var dt = void 0;
    // equal signature to use
    var eq = equalScalar;
    // zero value
    var zero = 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string') {
      // datatype
      dt = adt;
      // find signature that matches (dt, dt)
      eq = typed.find(equalScalar, [dt, dt]);
      // convert 0 to the same datatype
      zero = typed.convert(0, dt);
      // convert b to the same datatype
      b = typed.convert(b, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result arrays
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    // matrix
    var c = new SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });

    // loop columns
    for (var j = 0; j < columns; j++) {
      // initialize ptr
      cptr[j] = cindex.length;
      // values in j
      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        var i = aindex[k];
        // invoke callback
        var v = inverse ? cf(b, avalues[k]) : cf(avalues[k], b);
        // check value is zero
        if (!eq(v, zero)) {
          // push index & value
          cindex.push(i);
          cvalues.push(v);
        }
      }
    }
    // update ptr
    cptr[columns] = cindex.length;

    // return sparse matrix
    return c;
  };

  return algorithm11;
}

exports.name = 'algorithm11';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm12.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm12.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over SparseMatrix S nonzero items and invokes the callback function f(Sij, b).
   * Callback function invoked MxN times.
   *
   *
   *          ┌  f(Sij, b)  ; S(i,j) !== 0
   * C(i,j) = ┤
   *          └  f(0, b)    ; otherwise
   *
   *
   * @param {Matrix}   s                 The SparseMatrix instance (S)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Sij)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97626813
   */
  var algorithm12 = function algorithm12(s, b, callback, inverse) {
    // sparse matrix arrays
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;

    // sparse matrix cannot be a Pattern matrix
    if (!avalues) {
      throw new Error('Cannot perform operation on Pattern Sparse Matrix and Scalar value');
    }

    // rows & columns
    var rows = asize[0];
    var columns = asize[1];

    // datatype
    var dt = void 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string') {
      // datatype
      dt = adt;
      // convert b to the same datatype
      b = typed.convert(b, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // result arrays
    var cdata = [];
    // matrix
    var c = new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });

    // workspaces
    var x = [];
    // marks indicating we have a value in x for a given column
    var w = [];

    // loop columns
    for (var j = 0; j < columns; j++) {
      // columns mark
      var mark = j + 1;
      // values in j
      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        // row
        var r = aindex[k];
        // update workspace
        x[r] = avalues[k];
        w[r] = mark;
      }
      // loop rows
      for (var i = 0; i < rows; i++) {
        // initialize C on first column
        if (j === 0) {
          // create row array
          cdata[i] = [];
        }
        // check sparse matrix has a value @ i,j
        if (w[i] === mark) {
          // invoke callback, update C
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          // dense matrix value @ i, j
          cdata[i][j] = inverse ? cf(b, 0) : cf(0, b);
        }
      }
    }

    // return sparse matrix
    return c;
  };

  return algorithm12;
}

exports.name = 'algorithm12';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm13.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm13.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionError = __webpack_require__(/*! ../../../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over DenseMatrix items and invokes the callback function f(Aij..z, Bij..z).
   * Callback function invoked MxN times.
   *
   * C(i,j,...z) = f(Aij..z, Bij..z)
   *
   * @param {Matrix}   a                 The DenseMatrix instance (A)
   * @param {Matrix}   b                 The DenseMatrix instance (B)
   * @param {Function} callback          The f(Aij..z,Bij..z) operation to invoke
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97658658
   */
  var algorithm13 = function algorithm13(a, b, callback) {
    // a arrays
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    // b arrays
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    // c arrays
    var csize = [];

    // validate dimensions
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }

    // validate each one of the dimension sizes
    for (var s = 0; s < asize.length; s++) {
      // must match
      if (asize[s] !== bsize[s]) {
        throw new RangeError('Dimension mismatch. Matrix A (' + asize + ') must match Matrix B (' + bsize + ')');
      }
      // update dimension in c
      csize[s] = asize[s];
    }

    // datatype
    var dt = void 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string' && adt === bdt) {
      // datatype
      dt = adt;
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // populate cdata, iterate through dimensions
    var cdata = csize.length > 0 ? _iterate(cf, 0, csize, csize[0], adata, bdata) : [];

    // c matrix
    return new DenseMatrix({
      data: cdata,
      size: csize,
      datatype: dt
    });
  };

  // recursive function
  function _iterate(f, level, s, n, av, bv) {
    // initialize array for this level
    var cv = [];
    // check we reach the last level
    if (level === s.length - 1) {
      // loop arrays in last level
      for (var i = 0; i < n; i++) {
        // invoke callback and store value
        cv[i] = f(av[i], bv[i]);
      }
    } else {
      // iterate current level
      for (var j = 0; j < n; j++) {
        // iterate next level
        cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv[j]);
      }
    }
    return cv;
  }

  return algorithm13;
}

exports.name = 'algorithm13';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/type/matrix/utils/algorithm14.js":
/*!******************************************************************!*\
  !*** ./node_modules/mathjs/lib/type/matrix/utils/algorithm14.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clone = __webpack_require__(/*! ../../../utils/object */ "./node_modules/mathjs/lib/utils/object.js").clone;

function factory(type, config, load, typed) {
  var DenseMatrix = type.DenseMatrix;

  /**
   * Iterates over DenseMatrix items and invokes the callback function f(Aij..z, b).
   * Callback function invoked MxN times.
   *
   * C(i,j,...z) = f(Aij..z, b)
   *
   * @param {Matrix}   a                 The DenseMatrix instance (A)
   * @param {Scalar}   b                 The Scalar value
   * @param {Function} callback          The f(Aij..z,b) operation to invoke
   * @param {boolean}  inverse           A true value indicates callback should be invoked f(b,Aij..z)
   *
   * @return {Matrix}                    DenseMatrix (C)
   *
   * https://github.com/josdejong/mathjs/pull/346#issuecomment-97659042
   */
  var algorithm14 = function algorithm14(a, b, callback, inverse) {
    // a arrays
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;

    // datatype
    var dt = void 0;
    // callback signature to use
    var cf = callback;

    // process data types
    if (typeof adt === 'string') {
      // datatype
      dt = adt;
      // convert b to the same datatype
      b = typed.convert(b, dt);
      // callback
      cf = typed.find(callback, [dt, dt]);
    }

    // populate cdata, iterate through dimensions
    var cdata = asize.length > 0 ? _iterate(cf, 0, asize, asize[0], adata, b, inverse) : [];

    // c matrix
    return new DenseMatrix({
      data: cdata,
      size: clone(asize),
      datatype: dt
    });
  };

  // recursive function
  function _iterate(f, level, s, n, av, bv, inverse) {
    // initialize array for this level
    var cv = [];
    // check we reach the last level
    if (level === s.length - 1) {
      // loop arrays in last level
      for (var i = 0; i < n; i++) {
        // invoke callback and store value
        cv[i] = inverse ? f(bv, av[i]) : f(av[i], bv);
      }
    } else {
      // iterate current level
      for (var j = 0; j < n; j++) {
        // iterate next level
        cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv, inverse);
      }
    }
    return cv;
  }

  return algorithm14;
}

exports.name = 'algorithm14';
exports.factory = factory;

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/array.js":
/*!************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/array.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.size = size;
exports.validate = validate;
exports.resize = resize;
exports.reshape = reshape;
exports.unsqueeze = unsqueeze;
exports.flatten = flatten;
exports.map = map;
exports.forEach = forEach;
exports.filter = filter;
exports.filterRegExp = filterRegExp;
exports.join = join;
exports.identify = identify;

var _number = __webpack_require__(/*! ./number */ "./node_modules/mathjs/lib/utils/number.js");

var _number2 = _interopRequireDefault(_number);

var _string = __webpack_require__(/*! ./string */ "./node_modules/mathjs/lib/utils/string.js");

var _string2 = _interopRequireDefault(_string);

var _DimensionError = __webpack_require__(/*! ../error/DimensionError */ "./node_modules/mathjs/lib/error/DimensionError.js");

var _DimensionError2 = _interopRequireDefault(_DimensionError);

var _IndexError = __webpack_require__(/*! ../error/IndexError */ "./node_modules/mathjs/lib/error/IndexError.js");

var _IndexError2 = _interopRequireDefault(_IndexError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calculate the size of a multi dimensional array.
 * This function checks the size of the first entry, it does not validate
 * whether all dimensions match. (use function `validate` for that)
 * @param {Array} x
 * @Return {Number[]} size
 */
function size(x) {
  var s = [];

  while (Array.isArray(x)) {
    s.push(x.length);
    x = x[0];
  }

  return s;
}

/**
 * Recursively validate whether each element in a multi dimensional array
 * has a size corresponding to the provided size array.
 * @param {Array} array    Array to be validated
 * @param {number[]} size  Array with the size of each dimension
 * @param {number} dim   Current dimension
 * @throws DimensionError
 * @private
 */
function _validate(array, size, dim) {
  var i = void 0;
  var len = array.length;

  if (len !== size[dim]) {
    throw new _DimensionError2.default(len, size[dim]);
  }

  if (dim < size.length - 1) {
    // recursively validate each child array
    var dimNext = dim + 1;
    for (i = 0; i < len; i++) {
      var child = array[i];
      if (!Array.isArray(child)) {
        throw new _DimensionError2.default(size.length - 1, size.length, '<');
      }
      _validate(array[i], size, dimNext);
    }
  } else {
    // last dimension. none of the childs may be an array
    for (i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        throw new _DimensionError2.default(size.length + 1, size.length, '>');
      }
    }
  }
}

/**
 * Validate whether each element in a multi dimensional array has
 * a size corresponding to the provided size array.
 * @param {Array} array    Array to be validated
 * @param {number[]} size  Array with the size of each dimension
 * @throws DimensionError
 */
function validate(array, size) {
  var isScalar = size.length === 0;
  if (isScalar) {
    // scalar
    if (Array.isArray(array)) {
      throw new _DimensionError2.default(array.length, 0);
    }
  } else {
    // array
    _validate(array, size, 0);
  }
}

/**
 * Test whether index is an integer number with index >= 0 and index < length
 * when length is provided
 * @param {number} index    Zero-based index
 * @param {number} [length] Length of the array
 */
exports.validateIndex = function (index, length) {
  if (!_number2.default.isNumber(index) || !_number2.default.isInteger(index)) {
    throw new TypeError('Index must be an integer (value: ' + index + ')');
  }
  if (index < 0 || typeof length === 'number' && index >= length) {
    throw new _IndexError2.default(index, length);
  }
};

/**
 * Resize a multi dimensional array. The resized array is returned.
 * @param {Array} array         Array to be resized
 * @param {Array.<number>} size Array with the size of each dimension
 * @param {*} [defaultValue=0]  Value to be filled in in new entries,
 *                              zero by default. Specify for example `null`,
 *                              to clearly see entries that are not explicitly
 *                              set.
 * @return {Array} array         The resized array
 */
function resize(array, size, defaultValue) {
  // TODO: add support for scalars, having size=[] ?

  // check the type of the arguments
  if (!Array.isArray(array) || !Array.isArray(size)) {
    throw new TypeError('Array expected');
  }
  if (size.length === 0) {
    throw new Error('Resizing to scalar is not supported');
  }

  // check whether size contains positive integers
  size.forEach(function (value) {
    if (!_number2.default.isNumber(value) || !_number2.default.isInteger(value) || value < 0) {
      throw new TypeError('Invalid size, must contain positive integers ' + '(size: ' + _string2.default.format(size) + ')');
    }
  });

  // recursively resize the array
  var _defaultValue = defaultValue !== undefined ? defaultValue : 0;
  _resize(array, size, 0, _defaultValue);

  return array;
}

/**
 * Recursively resize a multi dimensional array
 * @param {Array} array         Array to be resized
 * @param {number[]} size       Array with the size of each dimension
 * @param {number} dim          Current dimension
 * @param {*} [defaultValue]    Value to be filled in in new entries,
 *                              undefined by default.
 * @private
 */
function _resize(array, size, dim, defaultValue) {
  var i = void 0;
  var elem = void 0;
  var oldLen = array.length;
  var newLen = size[dim];
  var minLen = Math.min(oldLen, newLen);

  // apply new length
  array.length = newLen;

  if (dim < size.length - 1) {
    // non-last dimension
    var dimNext = dim + 1;

    // resize existing child arrays
    for (i = 0; i < minLen; i++) {
      // resize child array
      elem = array[i];
      if (!Array.isArray(elem)) {
        elem = [elem]; // add a dimension
        array[i] = elem;
      }
      _resize(elem, size, dimNext, defaultValue);
    }

    // create new child arrays
    for (i = minLen; i < newLen; i++) {
      // get child array
      elem = [];
      array[i] = elem;

      // resize new child array
      _resize(elem, size, dimNext, defaultValue);
    }
  } else {
    // last dimension

    // remove dimensions of existing values
    for (i = 0; i < minLen; i++) {
      while (Array.isArray(array[i])) {
        array[i] = array[i][0];
      }
    }

    // fill new elements with the default value
    for (i = minLen; i < newLen; i++) {
      array[i] = defaultValue;
    }
  }
}

/**
 * Re-shape a multi dimensional array to fit the specified dimensions
 * @param {Array} array           Array to be reshaped
 * @param {Array.<number>} sizes  List of sizes for each dimension
 * @returns {Array}               Array whose data has been formatted to fit the
 *                                specified dimensions
 *
 * @throws {DimensionError}       If the product of the new dimension sizes does
 *                                not equal that of the old ones
 */
function reshape(array, sizes) {
  var flatArray = exports.flatten(array);
  var newArray = void 0;

  function product(arr) {
    return arr.reduce(function (prev, curr) {
      return prev * curr;
    });
  }

  if (!Array.isArray(array) || !Array.isArray(sizes)) {
    throw new TypeError('Array expected');
  }

  if (sizes.length === 0) {
    throw new _DimensionError2.default(0, product(exports.size(array)), '!=');
  }

  var totalSize = 1;
  for (var sizeIndex = 0; sizeIndex < sizes.length; sizeIndex++) {
    totalSize *= sizes[sizeIndex];
  }

  if (flatArray.length !== totalSize) {
    throw new _DimensionError2.default(product(sizes), product(exports.size(array)), '!=');
  }

  try {
    newArray = _reshape(flatArray, sizes);
  } catch (e) {
    if (e instanceof _DimensionError2.default) {
      throw new _DimensionError2.default(product(sizes), product(exports.size(array)), '!=');
    }
    throw e;
  }

  return newArray;
}

/**
 * Iteratively re-shape a multi dimensional array to fit the specified dimensions
 * @param {Array} array           Array to be reshaped
 * @param {Array.<number>} sizes  List of sizes for each dimension
 * @returns {Array}               Array whose data has been formatted to fit the
 *                                specified dimensions
 */

function _reshape(array, sizes) {
  // testing if there are enough elements for the requested shape
  var tmpArray = array;
  var tmpArray2;
  // for each dimensions starting by the last one and ignoring the first one
  for (var sizeIndex = sizes.length - 1; sizeIndex > 0; sizeIndex--) {
    var size = sizes[sizeIndex];
    tmpArray2 = [];

    // aggregate the elements of the current tmpArray in elements of the requested size
    var length = tmpArray.length / size;
    for (var i = 0; i < length; i++) {
      tmpArray2.push(tmpArray.slice(i * size, (i + 1) * size));
    }
    // set it as the new tmpArray for the next loop turn or for return
    tmpArray = tmpArray2;
  }

  return tmpArray;
}

/**
 * Squeeze a multi dimensional array
 * @param {Array} array
 * @param {Array} [size]
 * @returns {Array} returns the array itself
 */
exports.squeeze = function (array, size) {
  var s = size || exports.size(array);

  // squeeze outer dimensions
  while (Array.isArray(array) && array.length === 1) {
    array = array[0];
    s.shift();
  }

  // find the first dimension to be squeezed
  var dims = s.length;
  while (s[dims - 1] === 1) {
    dims--;
  }

  // squeeze inner dimensions
  if (dims < s.length) {
    array = _squeeze(array, dims, 0);
    s.length = dims;
  }

  return array;
};

/**
 * Recursively squeeze a multi dimensional array
 * @param {Array} array
 * @param {number} dims Required number of dimensions
 * @param {number} dim  Current dimension
 * @returns {Array | *} Returns the squeezed array
 * @private
 */
function _squeeze(array, dims, dim) {
  var i = void 0,
      ii = void 0;

  if (dim < dims) {
    var next = dim + 1;
    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _squeeze(array[i], dims, next);
    }
  } else {
    while (Array.isArray(array)) {
      array = array[0];
    }
  }

  return array;
}

/**
 * Unsqueeze a multi dimensional array: add dimensions when missing
 *
 * Paramter `size` will be mutated to match the new, unqueezed matrix size.
 *
 * @param {Array} array
 * @param {number} dims     Desired number of dimensions of the array
 * @param {number} [outer]  Number of outer dimensions to be added
 * @param {Array} [size]    Current size of array.
 * @returns {Array} returns the array itself
 * @private
 */
function unsqueeze(array, dims, outer, size) {
  var s = size || exports.size(array);

  // unsqueeze outer dimensions
  if (outer) {
    for (var i = 0; i < outer; i++) {
      array = [array];
      s.unshift(1);
    }
  }

  // unsqueeze inner dimensions
  array = _unsqueeze(array, dims, 0);
  while (s.length < dims) {
    s.push(1);
  }

  return array;
}

/**
 * Recursively unsqueeze a multi dimensional array
 * @param {Array} array
 * @param {number} dims Required number of dimensions
 * @param {number} dim  Current dimension
 * @returns {Array | *} Returns the squeezed array
 * @private
 */
function _unsqueeze(array, dims, dim) {
  var i = void 0,
      ii = void 0;

  if (Array.isArray(array)) {
    var next = dim + 1;
    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _unsqueeze(array[i], dims, next);
    }
  } else {
    for (var d = dim; d < dims; d++) {
      array = [array];
    }
  }

  return array;
}
/**
 * Flatten a multi dimensional array, put all elements in a one dimensional
 * array
 * @param {Array} array   A multi dimensional array
 * @return {Array}        The flattened array (1 dimensional)
 */
function flatten(array) {
  if (!Array.isArray(array)) {
    // if not an array, return as is
    return array;
  }
  var flat = [];

  array.forEach(function callback(value) {
    if (Array.isArray(value)) {
      value.forEach(callback); // traverse through sub-arrays recursively
    } else {
      flat.push(value);
    }
  });

  return flat;
}

/**
 * A safe map
 * @param {Array} array
 * @param {function} callback
 */
function map(array, callback) {
  return Array.prototype.map.call(array, callback);
}

/**
 * A safe forEach
 * @param {Array} array
 * @param {function} callback
 */
function forEach(array, callback) {
  Array.prototype.forEach.call(array, callback);
}

/**
 * A safe filter
 * @param {Array} array
 * @param {function} callback
 */
function filter(array, callback) {
  if (exports.size(array).length !== 1) {
    throw new Error('Only one dimensional matrices supported');
  }

  return Array.prototype.filter.call(array, callback);
}

/**
 * Filter values in a callback given a regular expression
 * @param {Array} array
 * @param {RegExp} regexp
 * @return {Array} Returns the filtered array
 * @private
 */
function filterRegExp(array, regexp) {
  if (exports.size(array).length !== 1) {
    throw new Error('Only one dimensional matrices supported');
  }

  return Array.prototype.filter.call(array, function (entry) {
    return regexp.test(entry);
  });
}

/**
 * A safe join
 * @param {Array} array
 * @param {string} separator
 */
function join(array, separator) {
  return Array.prototype.join.call(array, separator);
}

/**
 * Assign a numeric identifier to every element of a sorted array
 * @param {Array} a  An array
 * @return {Array} An array of objects containing the original value and its identifier
 */
function identify(a) {
  if (!Array.isArray(a)) {
    throw new TypeError('Array input expected');
  }

  if (a.length === 0) {
    return a;
  }

  var b = [];
  var count = 0;
  b[0] = { value: a[0], identifier: 0 };
  for (var i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) {
      count++;
    } else {
      count = 0;
    }
    b.push({ value: a[i], identifier: count });
  }
  return b;
}

/**
 * Remove the numeric identifier from the elements
 * @param {array} a  An array
 * @return {array} An array of values without identifiers
 */
exports.generalize = function (a) {
  if (!Array.isArray(a)) {
    throw new TypeError('Array input expected');
  }

  if (a.length === 0) {
    return a;
  }

  var b = [];
  for (var i = 0; i < a.length; i++) {
    b.push(a[i].value);
  }
  return b;
};

/**
 * Test whether an object is an array
 * @param {*} value
 * @return {boolean} isArray
 */
exports.isArray = Array.isArray;

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/bignumber/formatter.js":
/*!**************************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/bignumber/formatter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectUtils = __webpack_require__(/*! ../object */ "./node_modules/mathjs/lib/utils/object.js");

/**
 * Convert a BigNumber to a formatted string representation.
 *
 * Syntax:
 *
 *    format(value)
 *    format(value, options)
 *    format(value, precision)
 *    format(value, fn)
 *
 * Where:
 *
 *    {number} value   The value to be formatted
 *    {Object} options An object with formatting options. Available options:
 *                     {string} notation
 *                         Number notation. Choose from:
 *                         'fixed'          Always use regular number notation.
 *                                          For example '123.40' and '14000000'
 *                         'exponential'    Always use exponential notation.
 *                                          For example '1.234e+2' and '1.4e+7'
 *                         'auto' (default) Regular number notation for numbers
 *                                          having an absolute value between
 *                                          `lower` and `upper` bounds, and uses
 *                                          exponential notation elsewhere.
 *                                          Lower bound is included, upper bound
 *                                          is excluded.
 *                                          For example '123.4' and '1.4e7'.
 *                     {number} precision   A number between 0 and 16 to round
 *                                          the digits of the number.
 *                                          In case of notations 'exponential',
 *                                          'engineering', and 'auto',
 *                                          `precision` defines the total
 *                                          number of significant digits returned.
 *                                          In case of notation 'fixed',
 *                                          `precision` defines the number of
 *                                          significant digits after the decimal
 *                                          point.
 *                                          `precision` is undefined by default.
 *                     {number} lowerExp    Exponent determining the lower boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `-3`.
 *                     {number} upperExp    Exponent determining the upper boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `5`.
 *    {Function} fn    A custom formatting function. Can be used to override the
 *                     built-in notations. Function `fn` is called with `value` as
 *                     parameter and must return a string. Is useful for example to
 *                     format all values inside a matrix in a particular way.
 *
 * Examples:
 *
 *    format(6.4)                                        // '6.4'
 *    format(1240000)                                    // '1.24e6'
 *    format(1/3)                                        // '0.3333333333333333'
 *    format(1/3, 3)                                     // '0.333'
 *    format(21385, 2)                                   // '21000'
 *    format(12e8, {notation: 'fixed'})                  // returns '1200000000'
 *    format(2.3,    {notation: 'fixed', precision: 4})  // returns '2.3000'
 *    format(52.8,   {notation: 'exponential'})          // returns '5.28e+1'
 *    format(12400,  {notation: 'engineering'})          // returns '12.400e+3'
 *
 * @param {BigNumber} value
 * @param {Object | Function | number} [options]
 * @return {string} str The formatted value
 */
exports.format = function (value, options) {
  if (typeof options === 'function') {
    // handle format(value, fn)
    return options(value);
  }

  // handle special cases
  if (!value.isFinite()) {
    return value.isNaN() ? 'NaN' : value.gt(0) ? 'Infinity' : '-Infinity';
  }

  // default values for options
  var notation = 'auto';
  var precision = void 0;

  if (options !== undefined) {
    // determine notation from options
    if (options.notation) {
      notation = options.notation;
    }

    // determine precision from options
    if (typeof options === 'number') {
      precision = options;
    } else if (options.precision) {
      precision = options.precision;
    }
  }

  // handle the various notations
  switch (notation) {
    case 'fixed':
      return exports.toFixed(value, precision);

    case 'exponential':
      return exports.toExponential(value, precision);

    case 'auto':
      // TODO: clean up some day. Deprecated since: 2018-01-24
      // @deprecated upper and lower are replaced with upperExp and lowerExp since v4.0.0
      if (options && options.exponential && (options.exponential.lower !== undefined || options.exponential.upper !== undefined)) {
        var fixedOptions = objectUtils.map(options, function (x) {
          return x;
        });
        fixedOptions.exponential = undefined;
        if (options.exponential.lower !== undefined) {
          fixedOptions.lowerExp = Math.round(Math.log(options.exponential.lower) / Math.LN10);
        }
        if (options.exponential.upper !== undefined) {
          fixedOptions.upperExp = Math.round(Math.log(options.exponential.upper) / Math.LN10);
        }

        console.warn('Deprecation warning: Formatting options exponential.lower and exponential.upper ' + '(minimum and maximum value) ' + 'are replaced with exponential.lowerExp and exponential.upperExp ' + '(minimum and maximum exponent) since version 4.0.0. ' + 'Replace ' + JSON.stringify(options) + ' with ' + JSON.stringify(fixedOptions));

        return exports.format(value, fixedOptions);
      }

      // determine lower and upper bound for exponential notation.
      // TODO: implement support for upper and lower to be BigNumbers themselves
      var lowerExp = options && options.lowerExp !== undefined ? options.lowerExp : -3;
      var upperExp = options && options.upperExp !== undefined ? options.upperExp : 5;

      // handle special case zero
      if (value.isZero()) return '0';

      // determine whether or not to output exponential notation
      var str = void 0;
      var exp = value.logarithm();
      if (exp.gte(lowerExp) && exp.lt(upperExp)) {
        // normal number notation
        str = value.toSignificantDigits(precision).toFixed();
      } else {
        // exponential notation
        str = exports.toExponential(value, precision);
      }

      // remove trailing zeros after the decimal point
      return str.replace(/((\.\d*?)(0+))($|e)/, function () {
        var digits = arguments[2];
        var e = arguments[4];
        return digits !== '.' ? digits + e : e;
      });

    default:
      throw new Error('Unknown notation "' + notation + '". ' + 'Choose "auto", "exponential", or "fixed".');
  }
};

/**
 * Format a number in exponential notation. Like '1.23e+5', '2.3e+0', '3.500e-3'
 * @param {BigNumber} value
 * @param {number} [precision]  Number of digits in formatted output.
 *                              If not provided, the maximum available digits
 *                              is used.
 * @returns {string} str
 */
exports.toExponential = function (value, precision) {
  if (precision !== undefined) {
    return value.toExponential(precision - 1); // Note the offset of one
  } else {
    return value.toExponential();
  }
};

/**
 * Format a number with fixed notation.
 * @param {BigNumber} value
 * @param {number} [precision=undefined] Optional number of decimals after the
 *                                       decimal point. Undefined by default.
 */
exports.toFixed = function (value, precision) {
  return value.toFixed(precision);
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/bignumber/isBigNumber.js":
/*!****************************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/bignumber/isBigNumber.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Test whether a value is a BigNumber
 * @param {*} x
 * @return {boolean}
 */

module.exports = function isBigNumber(x) {
  return x && x.constructor.prototype.isBigNumber || false;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/bignumber/nearlyEqual.js":
/*!****************************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/bignumber/nearlyEqual.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Compares two BigNumbers.
 * @param {BigNumber} x       First value to compare
 * @param {BigNumber} y       Second value to compare
 * @param {number} [epsilon]  The maximum relative difference between x and y
 *                            If epsilon is undefined or null, the function will
 *                            test whether x and y are exactly equal.
 * @return {boolean} whether the two numbers are nearly equal
 */

module.exports = function nearlyEqual(x, y, epsilon) {
  // if epsilon is null or undefined, test whether x and y are exactly equal
  if (epsilon === null || epsilon === undefined) {
    return x.eq(y);
  }

  // use "==" operator, handles infinities
  if (x.eq(y)) {
    return true;
  }

  // NaN
  if (x.isNaN() || y.isNaN()) {
    return false;
  }

  // at this point x and y should be finite
  if (x.isFinite() && y.isFinite()) {
    // check numbers are very close, needed when comparing numbers near zero
    var diff = x.minus(y).abs();
    if (diff.isZero()) {
      return true;
    } else {
      // use relative error
      var max = x.constructor.max(x.abs(), y.abs());
      return diff.lte(max.times(epsilon));
    }
  }

  // Infinite and Number or negative Infinite and positive Infinite cases
  return false;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/boolean.js":
/*!**************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/boolean.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Test whether value is a boolean
 * @param {*} value
 * @return {boolean} isBoolean
 */

exports.isBoolean = function (value) {
  return typeof value === 'boolean';
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/collection/deepMap.js":
/*!*************************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/collection/deepMap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Execute the callback function element wise for each element in array and any
 * nested array
 * Returns an array with the results
 * @param {Array | Matrix} array
 * @param {Function} callback   The callback is called with two parameters:
 *                              value1 and value2, which contain the current
 *                              element of both arrays.
 * @param {boolean} [skipZeros] Invoke callback function for non-zero values only.
 *
 * @return {Array | Matrix} res
 */

module.exports = function deepMap(array, callback, skipZeros) {
  if (array && typeof array.map === 'function') {
    // TODO: replace array.map with a for loop to improve performance
    return array.map(function (x) {
      return deepMap(x, callback, skipZeros);
    });
  } else {
    return callback(array);
  }
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/collection/isMatrix.js":
/*!**************************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/collection/isMatrix.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Test whether a value is a Matrix
 * @param {*} x
 * @returns {boolean} returns true with input is a Matrix
 *                    (like a DenseMatrix or SparseMatrix)
 */

module.exports = function isMatrix(x) {
  return x && x.constructor.prototype.isMatrix || false;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/customs.js":
/*!**************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/customs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty = __webpack_require__(/*! ./object */ "./node_modules/mathjs/lib/utils/object.js").hasOwnProperty;

/**
 * Get a property of a plain object
 * Throws an error in case the object is not a plain object or the
 * property is not defined on the object itself
 * @param {Object} object
 * @param {string} prop
 * @return {*} Returns the property value when safe
 */
function getSafeProperty(object, prop) {
  // only allow getting safe properties of a plain object
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    return object[prop];
  }

  if (typeof object[prop] === 'function' && isSafeMethod(object, prop)) {
    throw new Error('Cannot access method "' + prop + '" as a property');
  }

  throw new Error('No access to property "' + prop + '"');
}

/**
 * Set a property on a plain object.
 * Throws an error in case the object is not a plain object or the
 * property would override an inherited property like .constructor or .toString
 * @param {Object} object
 * @param {string} prop
 * @param {*} value
 * @return {*} Returns the value
 */
// TODO: merge this function into access.js?
function setSafeProperty(object, prop, value) {
  // only allow setting safe properties of a plain object
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    object[prop] = value;
    return value;
  }

  throw new Error('No access to property "' + prop + '"');
}

/**
 * Test whether a property is safe to use for an object.
 * For example .toString and .constructor are not safe
 * @param {string} prop
 * @return {boolean} Returns true when safe
 */
function isSafeProperty(object, prop) {
  if (!object || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') {
    return false;
  }
  // SAFE: whitelisted
  // e.g length
  if (hasOwnProperty(safeNativeProperties, prop)) {
    return true;
  }
  // UNSAFE: inherited from Object prototype
  // e.g constructor
  if (prop in Object.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Object.prototype is a root object
    return false;
  }
  // UNSAFE: inherited from Function prototype
  // e.g call, apply
  if (prop in Function.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Function.prototype is a root object
    return false;
  }
  return true;
}

/**
 * Validate whether a method is safe.
 * Throws an error when that's not the case.
 * @param {Object} object
 * @param {string} method
 */
// TODO: merge this function into assign.js?
function validateSafeMethod(object, method) {
  if (!isSafeMethod(object, method)) {
    throw new Error('No access to method "' + method + '"');
  }
}

/**
 * Check whether a method is safe.
 * Throws an error when that's not the case (for example for `constructor`).
 * @param {Object} object
 * @param {string} method
 * @return {boolean} Returns true when safe, false otherwise
 */
function isSafeMethod(object, method) {
  if (!object || typeof object[method] !== 'function') {
    return false;
  }
  // UNSAFE: ghosted
  // e.g overridden toString
  // Note that IE10 doesn't support __proto__ and we can't do this check there.
  if (hasOwnProperty(object, method) && Object.getPrototypeOf && method in Object.getPrototypeOf(object)) {
    return false;
  }
  // SAFE: whitelisted
  // e.g toString
  if (hasOwnProperty(safeNativeMethods, method)) {
    return true;
  }
  // UNSAFE: inherited from Object prototype
  // e.g constructor
  if (method in Object.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Object.prototype is a root object
    return false;
  }
  // UNSAFE: inherited from Function prototype
  // e.g call, apply
  if (method in Function.prototype) {
    // 'in' is used instead of hasOwnProperty for nodejs v0.10
    // which is inconsistent on root prototypes. It is safe
    // here because Function.prototype is a root object
    return false;
  }
  return true;
}

function isPlainObject(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object && object.constructor === Object;
}

var safeNativeProperties = {
  length: true,
  name: true
};

var safeNativeMethods = {
  toString: true,
  valueOf: true,
  toLocaleString: true
};

exports.getSafeProperty = getSafeProperty;
exports.setSafeProperty = setSafeProperty;
exports.isSafeProperty = isSafeProperty;
exports.validateSafeMethod = validateSafeMethod;
exports.isSafeMethod = isSafeMethod;
exports.isPlainObject = isPlainObject;

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/emitter.js":
/*!**************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/emitter.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Emitter = __webpack_require__(/*! tiny-emitter */ "./node_modules/tiny-emitter/index.js");

/**
 * Extend given object with emitter functions `on`, `off`, `once`, `emit`
 * @param {Object} obj
 * @return {Object} obj
 */
exports.mixin = function (obj) {
  // create event emitter
  var emitter = new Emitter();

  // bind methods to obj (we don't want to expose the emitter.e Array...)
  obj.on = emitter.on.bind(emitter);
  obj.off = emitter.off.bind(emitter);
  obj.once = emitter.once.bind(emitter);
  obj.emit = emitter.emit.bind(emitter);

  return obj;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/function.js":
/*!***************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/function.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// function utils

/**
 * Memoize a given function by caching the computed result.
 * The cache of a memoized function can be cleared by deleting the `cache`
 * property of the function.
 *
 * @param {function} fn                     The function to be memoized.
 *                                          Must be a pure function.
 * @param {function(args: Array)} [hasher]  A custom hash builder.
 *                                          Is JSON.stringify by default.
 * @return {function}                       Returns the memoized function
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.memoize = function (fn, hasher) {
  return function memoize() {
    if (_typeof(memoize.cache) !== 'object') {
      memoize.cache = {};
    }

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    var hash = hasher ? hasher(args) : JSON.stringify(args);
    if (!(hash in memoize.cache)) {
      memoize.cache[hash] = fn.apply(fn, args);
    }
    return memoize.cache[hash];
  };
};

/**
 * Find the maximum number of arguments expected by a typed function.
 * @param {function} fn   A typed function
 * @return {number} Returns the maximum number of expected arguments.
 *                  Returns -1 when no signatures where found on the function.
 */
exports.maxArgumentCount = function (fn) {
  return Object.keys(fn.signatures || {}).reduce(function (args, signature) {
    var count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
};

/**
 * Call a typed function with the
 * @param {function} fn   A function or typed function
 * @return {number} Returns the maximum number of expected arguments.
 *                  Returns -1 when no signatures where found on the function.
 */
exports.callWithRightArgumentCount = function (fn, args, argCount) {
  return Object.keys(fn.signatures || {}).reduce(function (args, signature) {
    var count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/index.js":
/*!************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(/*! ./array */ "./node_modules/mathjs/lib/utils/array.js");
exports['boolean'] = __webpack_require__(/*! ./boolean */ "./node_modules/mathjs/lib/utils/boolean.js");
exports['function'] = __webpack_require__(/*! ./function */ "./node_modules/mathjs/lib/utils/function.js");
exports.number = __webpack_require__(/*! ./number */ "./node_modules/mathjs/lib/utils/number.js");
exports.object = __webpack_require__(/*! ./object */ "./node_modules/mathjs/lib/utils/object.js");
exports.string = __webpack_require__(/*! ./string */ "./node_modules/mathjs/lib/utils/string.js");
exports.emitter = __webpack_require__(/*! ./emitter */ "./node_modules/mathjs/lib/utils/emitter.js");

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/latex.js":
/*!************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/latex.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escapeLatex = __webpack_require__(/*! escape-latex */ "./node_modules/escape-latex/dist/index.js");

exports.symbols = {
  // GREEK LETTERS
  Alpha: 'A',
  alpha: '\\alpha',
  Beta: 'B',
  beta: '\\beta',
  Gamma: '\\Gamma',
  gamma: '\\gamma',
  Delta: '\\Delta',
  delta: '\\delta',
  Epsilon: 'E',
  epsilon: '\\epsilon',
  varepsilon: '\\varepsilon',
  Zeta: 'Z',
  zeta: '\\zeta',
  Eta: 'H',
  eta: '\\eta',
  Theta: '\\Theta',
  theta: '\\theta',
  vartheta: '\\vartheta',
  Iota: 'I',
  iota: '\\iota',
  Kappa: 'K',
  kappa: '\\kappa',
  varkappa: '\\varkappa',
  Lambda: '\\Lambda',
  lambda: '\\lambda',
  Mu: 'M',
  mu: '\\mu',
  Nu: 'N',
  nu: '\\nu',
  Xi: '\\Xi',
  xi: '\\xi',
  Omicron: 'O',
  omicron: 'o',
  Pi: '\\Pi',
  pi: '\\pi',
  varpi: '\\varpi',
  Rho: 'P',
  rho: '\\rho',
  varrho: '\\varrho',
  Sigma: '\\Sigma',
  sigma: '\\sigma',
  varsigma: '\\varsigma',
  Tau: 'T',
  tau: '\\tau',
  Upsilon: '\\Upsilon',
  upsilon: '\\upsilon',
  Phi: '\\Phi',
  phi: '\\phi',
  varphi: '\\varphi',
  Chi: 'X',
  chi: '\\chi',
  Psi: '\\Psi',
  psi: '\\psi',
  Omega: '\\Omega',
  omega: '\\omega',
  // logic
  'true': '\\mathrm{True}',
  'false': '\\mathrm{False}',
  // other
  i: 'i', // TODO use \i ??
  inf: '\\infty',
  Inf: '\\infty',
  infinity: '\\infty',
  Infinity: '\\infty',
  oo: '\\infty',
  lim: '\\lim',
  'undefined': '\\mathbf{?}'
};

exports.operators = {
  'transpose': '^\\top',
  'ctranspose': '^H',
  'factorial': '!',
  'pow': '^',
  'dotPow': '.^\\wedge', // TODO find ideal solution
  'unaryPlus': '+',
  'unaryMinus': '-',
  'bitNot': '~', // TODO find ideal solution
  'not': '\\neg',
  'multiply': '\\cdot',
  'divide': '\\frac', // TODO how to handle that properly?
  'dotMultiply': '.\\cdot', // TODO find ideal solution
  'dotDivide': '.:', // TODO find ideal solution
  'mod': '\\mod',
  'add': '+',
  'subtract': '-',
  'to': '\\rightarrow',
  'leftShift': '<<',
  'rightArithShift': '>>',
  'rightLogShift': '>>>',
  'equal': '=',
  'unequal': '\\neq',
  'smaller': '<',
  'larger': '>',
  'smallerEq': '\\leq',
  'largerEq': '\\geq',
  'bitAnd': '\\&',
  'bitXor': '\\underline{|}',
  'bitOr': '|',
  'and': '\\wedge',
  'xor': '\\veebar',
  'or': '\\vee'
};

exports.defaultTemplate = '\\mathrm{${name}}\\left(${args}\\right)';

var units = {
  deg: '^\\circ'
};

exports.escape = function (string) {
  return escapeLatex(string, { 'preserveFormatting': true });
};

// @param {string} name
// @param {boolean} isUnit
exports.toSymbol = function (name, isUnit) {
  isUnit = typeof isUnit === 'undefined' ? false : isUnit;
  if (isUnit) {
    if (units.hasOwnProperty(name)) {
      return units[name];
    }

    return '\\mathrm{' + exports.escape(name) + '}';
  }

  if (exports.symbols.hasOwnProperty(name)) {
    return exports.symbols[name];
  }

  return exports.escape(name);
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/number.js":
/*!*************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/number.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectUtils = __webpack_require__(/*! ./object */ "./node_modules/mathjs/lib/utils/object.js");

/**
 * @typedef {{sign: '+' | '-' | '', coefficients: number[], exponent: number}} SplitValue
 */

/**
 * Test whether value is a number
 * @param {*} value
 * @return {boolean} isNumber
 */
exports.isNumber = function (value) {
  return typeof value === 'number';
};

/**
 * Check if a number is integer
 * @param {number | boolean} value
 * @return {boolean} isInteger
 */
exports.isInteger = function (value) {
  if (typeof value === 'boolean') {
    return true;
  }

  return isFinite(value) ? value === Math.round(value) : false;
  // Note: we use ==, not ===, as we can have Booleans as well
};

/**
 * Calculate the sign of a number
 * @param {number} x
 * @returns {*}
 */
exports.sign = Math.sign || function (x) {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
};

/**
 * Convert a number to a formatted string representation.
 *
 * Syntax:
 *
 *    format(value)
 *    format(value, options)
 *    format(value, precision)
 *    format(value, fn)
 *
 * Where:
 *
 *    {number} value   The value to be formatted
 *    {Object} options An object with formatting options. Available options:
 *                     {string} notation
 *                         Number notation. Choose from:
 *                         'fixed'          Always use regular number notation.
 *                                          For example '123.40' and '14000000'
 *                         'exponential'    Always use exponential notation.
 *                                          For example '1.234e+2' and '1.4e+7'
 *                         'engineering'    Always use engineering notation.
 *                                          For example '123.4e+0' and '14.0e+6'
 *                         'auto' (default) Regular number notation for numbers
 *                                          having an absolute value between
 *                                          `lowerExp` and `upperExp` bounds, and
 *                                          uses exponential notation elsewhere.
 *                                          Lower bound is included, upper bound
 *                                          is excluded.
 *                                          For example '123.4' and '1.4e7'.
 *                     {number} precision   A number between 0 and 16 to round
 *                                          the digits of the number.
 *                                          In case of notations 'exponential',
 *                                          'engineering', and 'auto',
 *                                          `precision` defines the total
 *                                          number of significant digits returned.
 *                                          In case of notation 'fixed',
 *                                          `precision` defines the number of
 *                                          significant digits after the decimal
 *                                          point.
 *                                          `precision` is undefined by default,
 *                                          not rounding any digits.
 *                     {number} lowerExp    Exponent determining the lower boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `-3`.
 *                     {number} upperExp    Exponent determining the upper boundary
 *                                          for formatting a value with an exponent
 *                                          when `notation='auto`.
 *                                          Default value is `5`.
 *    {Function} fn    A custom formatting function. Can be used to override the
 *                     built-in notations. Function `fn` is called with `value` as
 *                     parameter and must return a string. Is useful for example to
 *                     format all values inside a matrix in a particular way.
 *
 * Examples:
 *
 *    format(6.4)                                        // '6.4'
 *    format(1240000)                                    // '1.24e6'
 *    format(1/3)                                        // '0.3333333333333333'
 *    format(1/3, 3)                                     // '0.333'
 *    format(21385, 2)                                   // '21000'
 *    format(12.071, {notation: 'fixed'})                // '12'
 *    format(2.3,    {notation: 'fixed', precision: 2})  // '2.30'
 *    format(52.8,   {notation: 'exponential'})          // '5.28e+1'
 *    format(12345678, {notation: 'engineering'})        // '12.345678e+6'
 *
 * @param {number} value
 * @param {Object | Function | number} [options]
 * @return {string} str The formatted value
 */
exports.format = function (value, options) {
  if (typeof options === 'function') {
    // handle format(value, fn)
    return options(value);
  }

  // handle special cases
  if (value === Infinity) {
    return 'Infinity';
  } else if (value === -Infinity) {
    return '-Infinity';
  } else if (isNaN(value)) {
    return 'NaN';
  }

  // default values for options
  var notation = 'auto';
  var precision = void 0;

  if (options) {
    // determine notation from options
    if (options.notation) {
      notation = options.notation;
    }

    // determine precision from options
    if (exports.isNumber(options)) {
      precision = options;
    } else if (options.precision) {
      precision = options.precision;
    }
  }

  // handle the various notations
  switch (notation) {
    case 'fixed':
      return exports.toFixed(value, precision);

    case 'exponential':
      return exports.toExponential(value, precision);

    case 'engineering':
      return exports.toEngineering(value, precision);

    case 'auto':
      // TODO: clean up some day. Deprecated since: 2018-01-24
      // @deprecated upper and lower are replaced with upperExp and lowerExp since v4.0.0
      if (options && options.exponential && (options.exponential.lower !== undefined || options.exponential.upper !== undefined)) {
        var fixedOptions = objectUtils.map(options, function (x) {
          return x;
        });
        fixedOptions.exponential = undefined;
        if (options.exponential.lower !== undefined) {
          fixedOptions.lowerExp = Math.round(Math.log(options.exponential.lower) / Math.LN10);
        }
        if (options.exponential.upper !== undefined) {
          fixedOptions.upperExp = Math.round(Math.log(options.exponential.upper) / Math.LN10);
        }

        console.warn('Deprecation warning: Formatting options exponential.lower and exponential.upper ' + '(minimum and maximum value) ' + 'are replaced with exponential.lowerExp and exponential.upperExp ' + '(minimum and maximum exponent) since version 4.0.0. ' + 'Replace ' + JSON.stringify(options) + ' with ' + JSON.stringify(fixedOptions));

        return exports.toPrecision(value, precision, fixedOptions);
      }

      return exports.toPrecision(value, precision, options && options)

      // remove trailing zeros after the decimal point
      .replace(/((\.\d*?)(0+))($|e)/, function () {
        var digits = arguments[2];
        var e = arguments[4];
        return digits !== '.' ? digits + e : e;
      });

    default:
      throw new Error('Unknown notation "' + notation + '". ' + 'Choose "auto", "exponential", or "fixed".');
  }
};

/**
 * Split a number into sign, coefficients, and exponent
 * @param {number | string} value
 * @return {SplitValue}
 *              Returns an object containing sign, coefficients, and exponent
 */
exports.splitNumber = function (value) {
  // parse the input value
  var match = String(value).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!match) {
    throw new SyntaxError('Invalid number ' + value);
  }

  var sign = match[1];
  var digits = match[2];
  var exponent = parseFloat(match[4] || '0');

  var dot = digits.indexOf('.');
  exponent += dot !== -1 ? dot - 1 : digits.length - 1;

  var coefficients = digits.replace('.', '') // remove the dot (must be removed before removing leading zeros)
  .replace(/^0*/, function (zeros) {
    // remove leading zeros, add their count to the exponent
    exponent -= zeros.length;
    return '';
  }).replace(/0*$/, '') // remove trailing zeros
  .split('').map(function (d) {
    return parseInt(d);
  });

  if (coefficients.length === 0) {
    coefficients.push(0);
    exponent++;
  }

  return {
    sign: sign,
    coefficients: coefficients,
    exponent: exponent
  };
};

/**
 * Format a number in engineering notation. Like '1.23e+6', '2.3e+0', '3.500e-3'
 * @param {number | string} value
 * @param {number} [precision]        Optional number of significant figures to return.
 */
exports.toEngineering = function (value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  var rounded = exports.roundDigits(exports.splitNumber(value), precision);

  var e = rounded.exponent;
  var c = rounded.coefficients;

  // find nearest lower multiple of 3 for exponent
  var newExp = e % 3 === 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3;

  if (exports.isNumber(precision)) {
    // add zeroes to give correct sig figs
    if (precision > c.length) c = c.concat(zeros(precision - c.length));
  } else {
    // concatenate coefficients with necessary zeros
    var significandsDiff = e >= 0 ? e : Math.abs(newExp);

    // add zeros if necessary (for ex: 1e+8)
    if (c.length - 1 < significandsDiff) c = c.concat(zeros(significandsDiff - (c.length - 1)));
  }

  // find difference in exponents
  var expDiff = Math.abs(e - newExp);

  var decimalIdx = 1;

  // push decimal index over by expDiff times
  while (--expDiff >= 0) {
    decimalIdx++;
  } // if all coefficient values are zero after the decimal point and precision is unset, don't add a decimal value.
  // otherwise concat with the rest of the coefficients
  var decimals = c.slice(decimalIdx).join('');
  var decimalVal = exports.isNumber(precision) && decimals.length || decimals.match(/[1-9]/) ? '.' + decimals : '';

  var str = c.slice(0, decimalIdx).join('') + decimalVal + 'e' + (e >= 0 ? '+' : '') + newExp.toString();
  return rounded.sign + str;
};

/**
 * Format a number with fixed notation.
 * @param {number | string} value
 * @param {number} [precision=undefined]  Optional number of decimals after the
 *                                        decimal point. null by default.
 */
exports.toFixed = function (value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  var splitValue = exports.splitNumber(value);
  var rounded = typeof precision === 'number' ? exports.roundDigits(splitValue, splitValue.exponent + 1 + precision) : splitValue;
  var c = rounded.coefficients;
  var p = rounded.exponent + 1; // exponent may have changed

  // append zeros if needed
  var pp = p + (precision || 0);
  if (c.length < pp) {
    c = c.concat(zeros(pp - c.length));
  }

  // prepend zeros if needed
  if (p < 0) {
    c = zeros(-p + 1).concat(c);
    p = 1;
  }

  // insert a dot if needed
  if (p < c.length) {
    c.splice(p, 0, p === 0 ? '0.' : '.');
  }

  return rounded.sign + c.join('');
};

/**
 * Format a number in exponential notation. Like '1.23e+5', '2.3e+0', '3.500e-3'
 * @param {number | string} value
 * @param {number} [precision]  Number of digits in formatted output.
 *                              If not provided, the maximum available digits
 *                              is used.
 */
exports.toExponential = function (value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  // round if needed, else create a clone
  var split = exports.splitNumber(value);
  var rounded = precision ? exports.roundDigits(split, precision) : split;
  var c = rounded.coefficients;
  var e = rounded.exponent;

  // append zeros if needed
  if (c.length < precision) {
    c = c.concat(zeros(precision - c.length));
  }

  // format as `C.CCCe+EEE` or `C.CCCe-EEE`
  var first = c.shift();
  return rounded.sign + first + (c.length > 0 ? '.' + c.join('') : '') + 'e' + (e >= 0 ? '+' : '') + e;
};

/**
 * Format a number with a certain precision
 * @param {number | string} value
 * @param {number} [precision=undefined] Optional number of digits.
 * @param {{lowerExp: number | undefined, upperExp: number | undefined}} [options]
 *                                       By default:
 *                                         lowerExp = -3 (incl)
 *                                         upper = +5 (excl)
 * @return {string}
 */
exports.toPrecision = function (value, precision, options) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  // determine lower and upper bound for exponential notation.
  var lowerExp = options && options.lowerExp !== undefined ? options.lowerExp : -3;
  var upperExp = options && options.upperExp !== undefined ? options.upperExp : 5;

  var split = exports.splitNumber(value);
  if (split.exponent < lowerExp || split.exponent >= upperExp) {
    // exponential notation
    return exports.toExponential(value, precision);
  } else {
    var rounded = precision ? exports.roundDigits(split, precision) : split;
    var c = rounded.coefficients;
    var e = rounded.exponent;

    // append trailing zeros
    if (c.length < precision) {
      c = c.concat(zeros(precision - c.length));
    }

    // append trailing zeros
    // TODO: simplify the next statement
    c = c.concat(zeros(e - c.length + 1 + (c.length < precision ? precision - c.length : 0)));

    // prepend zeros
    c = zeros(-e).concat(c);

    var dot = e > 0 ? e : 0;
    if (dot < c.length - 1) {
      c.splice(dot + 1, 0, '.');
    }

    return rounded.sign + c.join('');
  }
};

/**
 * Round the number of digits of a number *
 * @param {SplitValue} split       A value split with .splitNumber(value)
 * @param {number} precision  A positive integer
 * @return {SplitValue}
 *              Returns an object containing sign, coefficients, and exponent
 *              with rounded digits
 */
exports.roundDigits = function (split, precision) {
  // create a clone
  var rounded = {
    sign: split.sign,
    coefficients: split.coefficients,
    exponent: split.exponent
  };
  var c = rounded.coefficients;

  // prepend zeros if needed
  while (precision <= 0) {
    c.unshift(0);
    rounded.exponent++;
    precision++;
  }

  if (c.length > precision) {
    var removed = c.splice(precision, c.length - precision);

    if (removed[0] >= 5) {
      var i = precision - 1;
      c[i]++;
      while (c[i] === 10) {
        c.pop();
        if (i === 0) {
          c.unshift(0);
          rounded.exponent++;
          i++;
        }
        i--;
        c[i]++;
      }
    }
  }

  return rounded;
};

/**
 * Create an array filled with zeros.
 * @param {number} length
 * @return {Array}
 */
function zeros(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(0);
  }
  return arr;
}

/**
 * Count the number of significant digits of a number.
 *
 * For example:
 *   2.34 returns 3
 *   0.0034 returns 2
 *   120.5e+30 returns 4
 *
 * @param {number} value
 * @return {number} digits   Number of significant digits
 */
exports.digits = function (value) {
  return value.toExponential().replace(/e.*$/, '') // remove exponential notation
  .replace(/^0\.?0*|\./, '') // remove decimal point and leading zeros
  .length;
};

/**
 * Minimum number added to one that makes the result different than one
 */
exports.DBL_EPSILON = Number.EPSILON || 2.2204460492503130808472633361816E-16;

/**
 * Compares two floating point numbers.
 * @param {number} x          First value to compare
 * @param {number} y          Second value to compare
 * @param {number} [epsilon]  The maximum relative difference between x and y
 *                            If epsilon is undefined or null, the function will
 *                            test whether x and y are exactly equal.
 * @return {boolean} whether the two numbers are nearly equal
*/
exports.nearlyEqual = function (x, y, epsilon) {
  // if epsilon is null or undefined, test whether x and y are exactly equal
  if (epsilon === null || epsilon === undefined) {
    return x === y;
  }

  if (x === y) {
    return true;
  }

  // NaN
  if (isNaN(x) || isNaN(y)) {
    return false;
  }

  // at this point x and y should be finite
  if (isFinite(x) && isFinite(y)) {
    // check numbers are very close, needed when comparing numbers near zero
    var diff = Math.abs(x - y);
    if (diff < exports.DBL_EPSILON) {
      return true;
    } else {
      // use relative error
      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon;
    }
  }

  // Infinite and Number or negative Infinite and positive Infinite cases
  return false;
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/object.js":
/*!*************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/object.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBigNumber = __webpack_require__(/*! ./bignumber/isBigNumber */ "./node_modules/mathjs/lib/utils/bignumber/isBigNumber.js");

/**
 * Clone an object
 *
 *     clone(x)
 *
 * Can clone any primitive type, array, and object.
 * If x has a function clone, this function will be invoked to clone the object.
 *
 * @param {*} x
 * @return {*} clone
 */
exports.clone = function clone(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);

  // immutable primitive types
  if (type === 'number' || type === 'string' || type === 'boolean' || x === null || x === undefined) {
    return x;
  }

  // use clone function of the object when available
  if (typeof x.clone === 'function') {
    return x.clone();
  }

  // array
  if (Array.isArray(x)) {
    return x.map(function (value) {
      return clone(value);
    });
  }

  if (x instanceof Date) return new Date(x.valueOf());
  if (isBigNumber(x)) return x; // bignumbers are immutable
  if (x instanceof RegExp) throw new TypeError('Cannot clone ' + x); // TODO: clone a RegExp

  // object
  return exports.map(x, clone);
};

/**
 * Apply map to all properties of an object
 * @param {Object} object
 * @param {function} callback
 * @return {Object} Returns a copy of the object with mapped properties
 */
exports.map = function (object, callback) {
  var clone = {};

  for (var key in object) {
    if (exports.hasOwnProperty(object, key)) {
      clone[key] = callback(object[key]);
    }
  }

  return clone;
};

/**
 * Extend object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 */
exports.extend = function (a, b) {
  for (var prop in b) {
    if (exports.hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }
  return a;
};

/**
 * Deep extend an object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @returns {Object}
 */
exports.deepExtend = function deepExtend(a, b) {
  // TODO: add support for Arrays to deepExtend
  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var prop in b) {
    if (exports.hasOwnProperty(b, prop)) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }
        if (a[prop].constructor === Object) {
          deepExtend(a[prop], b[prop]);
        } else {
          a[prop] = b[prop];
        }
      } else if (Array.isArray(b[prop])) {
        throw new TypeError('Arrays are not supported by deepExtend');
      } else {
        a[prop] = b[prop];
      }
    }
  }
  return a;
};

/**
 * Deep test equality of all fields in two pairs of arrays or objects.
 * @param {Array | Object} a
 * @param {Array | Object} b
 * @returns {boolean}
 */
exports.deepEqual = function deepEqual(a, b) {
  var prop = void 0,
      i = void 0,
      len = void 0;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (i = 0, len = a.length; i < len; i++) {
      if (!exports.deepEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }

    for (prop in a) {
      // noinspection JSUnfilteredForInLoop
      if (!exports.deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    for (prop in b) {
      // noinspection JSUnfilteredForInLoop
      if (!exports.deepEqual(a[prop], b[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
};

/**
 * Test whether the current JavaScript engine supports Object.defineProperty
 * @returns {boolean} returns true if supported
 */
exports.canDefineProperty = function () {
  // test needed for broken IE8 implementation
  try {
    if (Object.defineProperty) {
      Object.defineProperty({}, 'x', { get: function get() {} });
      return true;
    }
  } catch (e) {}

  return false;
};

/**
 * Attach a lazy loading property to a constant.
 * The given function `fn` is called once when the property is first requested.
 * On older browsers (<IE8), the function will fall back to direct evaluation
 * of the properties value.
 * @param {Object} object   Object where to add the property
 * @param {string} prop     Property name
 * @param {Function} fn     Function returning the property value. Called
 *                          without arguments.
 */
exports.lazy = function (object, prop, fn) {
  if (exports.canDefineProperty()) {
    var _uninitialized = true;
    var _value = void 0;
    Object.defineProperty(object, prop, {
      get: function get() {
        if (_uninitialized) {
          _value = fn();
          _uninitialized = false;
        }
        return _value;
      },

      set: function set(value) {
        _value = value;
        _uninitialized = false;
      },

      configurable: true,
      enumerable: true
    });
  } else {
    // fall back to immediate evaluation
    object[prop] = fn();
  }
};

/**
 * Traverse a path into an object.
 * When a namespace is missing, it will be created
 * @param {Object} object
 * @param {string} path   A dot separated string like 'name.space'
 * @return {Object} Returns the object at the end of the path
 */
exports.traverse = function (object, path) {
  var obj = object;

  if (path) {
    var names = path.split('.');
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (!(name in obj)) {
        obj[name] = {};
      }
      obj = obj[name];
    }
  }

  return obj;
};

/**
 * A safe hasOwnProperty
 * @param {Object} object
 * @param {string} property
 */
exports.hasOwnProperty = function (object, property) {
  return object && Object.hasOwnProperty.call(object, property);
};

/**
 * Test whether an object is a factory. a factory has fields:
 *
 * - factory: function (type: Object, config: Object, load: function, typed: function [, math: Object])   (required)
 * - name: string (optional)
 * - path: string    A dot separated path (optional)
 * - math: boolean   If true (false by default), the math namespace is passed
 *                   as fifth argument of the factory function
 *
 * @param {*} object
 * @returns {boolean}
 */
exports.isFactory = function (object) {
  return object && typeof object.factory === 'function';
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/polyfills.js":
/*!****************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/polyfills.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: remove these polyfills as soon as we have a build process that transpiles the code to ES5

// Polyfill for IE 11 (Number.isFinite is used in `complex.js`)
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
Number.isFinite = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
};

// Polyfill for IE 11
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
Number.isNaN = Number.isNaN || function (value) {
  return value !== value; // eslint-disable-line no-self-compare
};

/***/ }),

/***/ "./node_modules/mathjs/lib/utils/string.js":
/*!*************************************************!*\
  !*** ./node_modules/mathjs/lib/utils/string.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var formatNumber = __webpack_require__(/*! ./number */ "./node_modules/mathjs/lib/utils/number.js").format;
var formatBigNumber = __webpack_require__(/*! ./bignumber/formatter */ "./node_modules/mathjs/lib/utils/bignumber/formatter.js").format;
var isBigNumber = __webpack_require__(/*! ./bignumber/isBigNumber */ "./node_modules/mathjs/lib/utils/bignumber/isBigNumber.js");

/**
 * Test whether value is a string
 * @param {*} value
 * @return {boolean} isString
 */
exports.isString = function (value) {
  return typeof value === 'string';
};

/**
 * Check if a text ends with a certain string.
 * @param {string} text
 * @param {string} search
 */
exports.endsWith = function (text, search) {
  var start = text.length - search.length;
  var end = text.length;
  return text.substring(start, end) === search;
};

/**
 * Format a value of any type into a string.
 *
 * Usage:
 *     math.format(value)
 *     math.format(value, precision)
 *
 * When value is a function:
 *
 * - When the function has a property `syntax`, it returns this
 *   syntax description.
 * - In other cases, a string `'function'` is returned.
 *
 * When `value` is an Object:
 *
 * - When the object contains a property `format` being a function, this
 *   function is invoked as `value.format(options)` and the result is returned.
 * - When the object has its own `toString` method, this method is invoked
 *   and the result is returned.
 * - In other cases the function will loop over all object properties and
 *   return JSON object notation like '{"a": 2, "b": 3}'.
 *
 * Example usage:
 *     math.format(2/7)                // '0.2857142857142857'
 *     math.format(math.pi, 3)         // '3.14'
 *     math.format(new Complex(2, 3))  // '2 + 3i'
 *     math.format('hello')            // '"hello"'
 *
 * @param {*} value             Value to be stringified
 * @param {Object | number | Function} [options]  Formatting options. See
 *                                                lib/utils/number:format for a
 *                                                description of the available
 *                                                options.
 * @return {string} str
 */
exports.format = function (value, options) {
  if (typeof value === 'number') {
    return formatNumber(value, options);
  }

  if (isBigNumber(value)) {
    return formatBigNumber(value, options);
  }

  // note: we use unsafe duck-typing here to check for Fractions, this is
  // ok here since we're only invoking toString or concatenating its values
  if (looksLikeFraction(value)) {
    if (!options || options.fraction !== 'decimal') {
      // output as ratio, like '1/3'
      return value.s * value.n + '/' + value.d;
    } else {
      // output as decimal, like '0.(3)'
      return value.toString();
    }
  }

  if (Array.isArray(value)) {
    return formatArray(value, options);
  }

  if (exports.isString(value)) {
    return '"' + value + '"';
  }

  if (typeof value === 'function') {
    return value.syntax ? String(value.syntax) : 'function';
  }

  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    if (typeof value.format === 'function') {
      return value.format(options);
    } else if (value && value.toString() !== {}.toString()) {
      // this object has a non-native toString method, use that one
      return value.toString();
    } else {
      var entries = [];

      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          entries.push('"' + key + '": ' + exports.format(value[key], options));
        }
      }

      return '{' + entries.join(', ') + '}';
    }
  }

  return String(value);
};

/**
 * Stringify a value into a string enclosed in double quotes.
 * Unescaped double quotes and backslashes inside the value are escaped.
 * @param {*} value
 * @return {string}
 */
exports.stringify = function (value) {
  var text = String(value);
  var escaped = '';
  var i = 0;
  while (i < text.length) {
    var c = text.charAt(i);

    if (c === '\\') {
      escaped += c;
      i++;

      c = text.charAt(i);
      if (c === '' || '"\\/bfnrtu'.indexOf(c) === -1) {
        escaped += '\\'; // no valid escape character -> escape it
      }
      escaped += c;
    } else if (c === '"') {
      escaped += '\\"';
    } else {
      escaped += c;
    }
    i++;
  }

  return '"' + escaped + '"';
};

/**
 * Escape special HTML characters
 * @param {*} value
 * @return {string}
 */
exports.escape = function (value) {
  var text = String(value);
  text = text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return text;
};

/**
 * Recursively format an n-dimensional matrix
 * Example output: "[[1, 2], [3, 4]]"
 * @param {Array} array
 * @param {Object | number | Function} [options]  Formatting options. See
 *                                                lib/utils/number:format for a
 *                                                description of the available
 *                                                options.
 * @returns {string} str
 */
function formatArray(array, options) {
  if (Array.isArray(array)) {
    var str = '[';
    var len = array.length;
    for (var i = 0; i < len; i++) {
      if (i !== 0) {
        str += ', ';
      }
      str += formatArray(array[i], options);
    }
    str += ']';
    return str;
  } else {
    return exports.format(array, options);
  }
}

/**
 * Check whether a value looks like a Fraction (unsafe duck-type check)
 * @param {*} value
 * @return {boolean}
 */
function looksLikeFraction(value) {
  return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.s === 'number' && typeof value.n === 'number' && typeof value.d === 'number' || false;
}

/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),

/***/ "./node_modules/typed-function/typed-function.js":
/*!*******************************************************!*\
  !*** ./node_modules/typed-function/typed-function.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * typed-function
 *
 * Type checking for JavaScript functions
 *
 * https://github.com/josdejong/typed-function
 */


(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  function ok () {
    return true;
  }

  function notOk () {
    return false;
  }

  function undef () {
    return undefined;
  }

  /**
   * @typedef {{
   *   params: Param[],
   *   fn: function
   * }} Signature
   *
   * @typedef {{
   *   types: Type[],
   *   restParam: boolean
   * }} Param
   *
   * @typedef {{
   *   name: string,
   *   typeIndex: number,
   *   test: function,
   *   conversion?: ConversionDef,
   *   conversionIndex: number,
   * }} Type
   *
   * @typedef {{
   *   from: string,
   *   to: string,
   *   convert: function (*) : *
   * }} ConversionDef
   *
   * @typedef {{
   *   name: string,
   *   test: function(*) : boolean
   * }} TypeDef
   */

  // create a new instance of typed-function
  function create () {
    // data type tests
    var _types = [
      { name: 'number',    test: function (x) { return typeof x === 'number' } },
      { name: 'string',    test: function (x) { return typeof x === 'string' } },
      { name: 'boolean',   test: function (x) { return typeof x === 'boolean' } },
      { name: 'Function',  test: function (x) { return typeof x === 'function'} },
      { name: 'Array',     test: Array.isArray },
      { name: 'Date',      test: function (x) { return x instanceof Date } },
      { name: 'RegExp',    test: function (x) { return x instanceof RegExp } },
      { name: 'Object',    test: function (x) {
        return typeof x === 'object' && x.constructor === Object
      }},
      { name: 'null',      test: function (x) { return x === null } },
      { name: 'undefined', test: function (x) { return x === undefined } }
    ];

    var anyType = {
      name: 'any',
      test: ok
    }

    // types which need to be ignored
    var _ignore = [];

    // type conversions
    var _conversions = [];

    // This is a temporary object, will be replaced with a typed function at the end
    var typed = {
      types: _types,
      conversions: _conversions,
      ignore: _ignore
    };

    /**
     * Find the test function for a type
     * @param {String} typeName
     * @return {TypeDef} Returns the type definition when found,
     *                    Throws a TypeError otherwise
     */
    function findTypeByName (typeName) {
      var entry = findInArray(typed.types, function (entry) {
        return entry.name === typeName;
      });

      if (entry) {
        return entry;
      }

      if (typeName === 'any') { // special baked-in case 'any'
        return anyType;
      }

      var hint = findInArray(typed.types, function (entry) {
        return entry.name.toLowerCase() === typeName.toLowerCase();
      });

      throw new TypeError('Unknown type "' + typeName + '"' +
          (hint ? ('. Did you mean "' + hint.name + '"?') : ''));
    }

    /**
     * Find the index of a type definition. Handles special case 'any'
     * @param {TypeDef} type
     * @return {number}
     */
    function findTypeIndex(type) {
      if (type === anyType) {
        return 999;
      }

      return typed.types.indexOf(type);
    }

    /**
     * Find a type that matches a value.
     * @param {*} value
     * @return {string} Returns the name of the first type for which
     *                  the type test matches the value.
     */
    function findTypeName(value) {
      var entry = findInArray(typed.types, function (entry) {
        return entry.test(value);
      });

      if (entry) {
        return entry.name;
      }

      throw new TypeError('Value has unknown type. Value: ' + value);
    }

    /**
     * Find a specific signature from a (composed) typed function, for example:
     *
     *   typed.find(fn, ['number', 'string'])
     *   typed.find(fn, 'number, string')
     *
     * Function find only only works for exact matches.
     *
     * @param {Function} fn                   A typed-function
     * @param {string | string[]} signature   Signature to be found, can be
     *                                        an array or a comma separated string.
     * @return {Function}                     Returns the matching signature, or
     *                                        throws an error when no signature
     *                                        is found.
     */
    function find (fn, signature) {
      if (!fn.signatures) {
        throw new TypeError('Function is no typed-function');
      }

      // normalize input
      var arr;
      if (typeof signature === 'string') {
        arr = signature.split(',');
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].trim();
        }
      }
      else if (Array.isArray(signature)) {
        arr = signature;
      }
      else {
        throw new TypeError('String array or a comma separated string expected');
      }

      var str = arr.join(',');

      // find an exact match
      var match = fn.signatures[str];
      if (match) {
        return match;
      }

      // TODO: extend find to match non-exact signatures

      throw new TypeError('Signature not found (signature: ' + (fn.name || 'unnamed') + '(' + arr.join(', ') + '))');
    }

    /**
     * Convert a given value to another data type.
     * @param {*} value
     * @param {string} type
     */
    function convert (value, type) {
      var from = findTypeName(value);

      // check conversion is needed
      if (type === from) {
        return value;
      }

      for (var i = 0; i < typed.conversions.length; i++) {
        var conversion = typed.conversions[i];
        if (conversion.from === from && conversion.to === type) {
          return conversion.convert(value);
        }
      }

      throw new Error('Cannot convert from ' + from + ' to ' + type);
    }
    
    /**
     * Stringify parameters in a normalized way
     * @param {Param[]} params
     * @return {string}
     */
    function stringifyParams (params) {
      return params
          .map(function (param) {
            var typeNames = param.types.map(getTypeName);

            return (param.restParam ? '...' : '') + typeNames.join('|');
          })
          .join(',');
    }

    /**
     * Parse a parameter, like "...number | boolean"
     * @param {string} param
     * @param {ConversionDef[]} conversions
     * @return {Param} param
     */
    function parseParam (param, conversions) {
      var restParam = param.indexOf('...') === 0;
      var types = (!restParam)
          ? param
          : (param.length > 3)
              ? param.slice(3)
              : 'any';

      var typeNames = types.split('|').map(trim)
          .filter(notEmpty)
          .filter(notIgnore);

      var matchingConversions = filterConversions(conversions, typeNames);

      var exactTypes = typeNames.map(function (typeName) {
        var type = findTypeByName(typeName);

        return {
          name: typeName,
          typeIndex: findTypeIndex(type),
          test: type.test,
          conversion: null,
          conversionIndex: -1
        };
      });

      var convertibleTypes = matchingConversions.map(function (conversion) {
        var type = findTypeByName(conversion.from);

        return {
          name: conversion.from,
          typeIndex: findTypeIndex(type),
          test: type.test,
          conversion: conversion,
          conversionIndex: conversions.indexOf(conversion)
        };
      });

      return {
        types: exactTypes.concat(convertibleTypes),
        restParam: restParam
      };
    }

    /**
     * Parse a signature with comma separated parameters,
     * like "number | boolean, ...string"
     * @param {string} signature
     * @param {function} fn
     * @param {ConversionDef[]} conversions
     * @return {Signature | null} signature
     */
    function parseSignature (signature, fn, conversions) {
      var params = [];

      if (signature.trim() !== '') {
        params = signature
            .split(',')
            .map(trim)
            .map(function (param, index, array) {
              var parsedParam = parseParam(param, conversions);

              if (parsedParam.restParam && (index !== array.length - 1)) {
                throw new SyntaxError('Unexpected rest parameter "' + param + '": ' +
                    'only allowed for the last parameter');
              }

              return parsedParam;
          });
      }

      if (params.some(isInvalidParam)) {
        // invalid signature: at least one parameter has no types
        // (they may have been filtered)
        return null;
      }

      return {
        params: params,
        fn: fn
      };
    }

    /**
     * Test whether a set of params contains a restParam
     * @param {Param[]} params
     * @return {boolean} Returns true when the last parameter is a restParam
     */
    function hasRestParam(params) {
      var param = last(params)
      return param ? param.restParam : false;
    }

    /**
     * Test whether a parameter contains conversions
     * @param {Param} param
     * @return {boolean} Returns true when at least one of the parameters
     *                   contains a conversion.
     */
    function hasConversions(param) {
      return param.types.some(function (type) {
        return type.conversion != null;
      });
    }

    /**
     * Create a type test for a single parameter, which can have one or multiple
     * types.
     * @param {Param} param
     * @return {function(x: *) : boolean} Returns a test function
     */
    function compileTest(param) {
      if (!param || param.types.length === 0) {
        // nothing to do
        return ok;
      }
      else if (param.types.length === 1) {
        return findTypeByName(param.types[0].name).test;
      }
      else if (param.types.length === 2) {
        var test0 = findTypeByName(param.types[0].name).test;
        var test1 = findTypeByName(param.types[1].name).test;
        return function or(x) {
          return test0(x) || test1(x);
        }
      }
      else { // param.types.length > 2
        var tests = param.types.map(function (type) {
          return findTypeByName(type.name).test;
        })
        return function or(x) {
          for (var i = 0; i < tests.length; i++) {
            if (tests[i](x)) {
              return true;
            }
          }
          return false;
        }
      }
    }

    /**
     * Create a test for all parameters of a signature
     * @param {Param[]} params
     * @return {function(args: Array<*>) : boolean}
     */
    function compileTests(params) {
      var tests, test0, test1;

      if (hasRestParam(params)) {
        // variable arguments like '...number'
        tests = initial(params).map(compileTest);
        var varIndex = tests.length;
        var lastTest = compileTest(last(params));
        var testRestParam = function (args) {
          for (var i = varIndex; i < args.length; i++) {
            if (!lastTest(args[i])) {
              return false;
            }
          }
          return true;
        }

        return function testArgs(args) {
          for (var i = 0; i < tests.length; i++) {
            if (!tests[i](args[i])) {
              return false;
            }
          }
          return testRestParam(args) && (args.length >= varIndex + 1);
        };
      }
      else {
        // no variable arguments
        if (params.length === 0) {
          return function testArgs(args) {
            return args.length === 0;
          };
        }
        else if (params.length === 1) {
          test0 = compileTest(params[0]);
          return function testArgs(args) {
            return test0(args[0]) && args.length === 1;
          };
        }
        else if (params.length === 2) {
          test0 = compileTest(params[0]);
          test1 = compileTest(params[1]);
          return function testArgs(args) {
            return test0(args[0]) && test1(args[1]) && args.length === 2;
          };
        }
        else { // arguments.length > 2
          tests = params.map(compileTest);
          return function testArgs(args) {
            for (var i = 0; i < tests.length; i++) {
              if (!tests[i](args[i])) {
                return false;
              }
            }
            return args.length === tests.length;
          };
        }
      }
    }

    /**
     * Find the parameter at a specific index of a signature.
     * Handles rest parameters.
     * @param {Signature} signature
     * @param {number} index
     * @return {Param | null} Returns the matching parameter when found,
     *                        null otherwise.
     */
    function getParamAtIndex(signature, index) {
      return index < signature.params.length
          ? signature.params[index]
          : hasRestParam(signature.params)
              ? last(signature.params)
              : null
    }

    /**
     * Get all type names of a parameter
     * @param {Signature} signature
     * @param {number} index
     * @param {boolean} excludeConversions
     * @return {string[]} Returns an array with type names
     */
    function getExpectedTypeNames (signature, index, excludeConversions) {
      var param = getParamAtIndex(signature, index);
      var types = param
          ? excludeConversions
                  ? param.types.filter(isExactType)
                  : param.types
          : [];

      return types.map(getTypeName);
    }

    /**
     * Returns the name of a type
     * @param {Type} type
     * @return {string} Returns the type name
     */
    function getTypeName(type) {
      return type.name;
    }

    /**
     * Test whether a type is an exact type or conversion
     * @param {Type} type
     * @return {boolean} Returns true when
     */
    function isExactType(type) {
      return type.conversion === null || type.conversion === undefined;
    }

    /**
     * Helper function for creating error messages: create an array with
     * all available types on a specific argument index.
     * @param {Signature[]} signatures
     * @param {number} index
     * @return {string[]} Returns an array with available types
     */
    function mergeExpectedParams(signatures, index) {
      var typeNames = uniq(flatMap(signatures, function (signature) {
        return getExpectedTypeNames(signature, index, false);
      }));

      return (typeNames.indexOf('any') !== -1) ? ['any'] : typeNames;
    }

    /**
     * Create
     * @param {string} name             The name of the function
     * @param {array.<*>} args          The actual arguments passed to the function
     * @param {Signature[]} signatures  A list with available signatures
     * @return {TypeError} Returns a type error with additional data
     *                     attached to it in the property `data`
     */
    function createError(name, args, signatures) {
      var err, expected;
      var _name = name || 'unnamed';

      // test for wrong type at some index
      var matchingSignatures = signatures;
      var index;
      for (index = 0; index < args.length; index++) {
        var nextMatchingDefs = matchingSignatures.filter(function (signature) {
          var test = compileTest(getParamAtIndex(signature, index));
          return (index < signature.params.length || hasRestParam(signature.params)) &&
              test(args[index]);
        });

        if (nextMatchingDefs.length === 0) {
          // no matching signatures anymore, throw error "wrong type"
          expected = mergeExpectedParams(matchingSignatures, index);
          if (expected.length > 0) {
            var actualType = findTypeName(args[index]);

            err = new TypeError('Unexpected type of argument in function ' + _name +
                ' (expected: ' + expected.join(' or ') +
                ', actual: ' + actualType + ', index: ' + index + ')');
            err.data = {
              category: 'wrongType',
              fn: _name,
              index: index,
              actual: actualType,
              expected: expected
            }
            return err;
          }
        }
        else {
          matchingSignatures = nextMatchingDefs;
        }
      }

      // test for too few arguments
      var lengths = matchingSignatures.map(function (signature) {
        return hasRestParam(signature.params) ? Infinity : signature.params.length;
      });
      if (args.length < Math.min.apply(null, lengths)) {
        expected = mergeExpectedParams(matchingSignatures, index);
        err = new TypeError('Too few arguments in function ' + _name +
            ' (expected: ' + expected.join(' or ') +
            ', index: ' + args.length + ')');
        err.data = {
          category: 'tooFewArgs',
          fn: _name,
          index: args.length,
          expected: expected
        }
        return err;
      }

      // test for too many arguments
      var maxLength = Math.max.apply(null, lengths);
      if (args.length > maxLength) {
        err = new TypeError('Too many arguments in function ' + _name +
            ' (expected: ' + maxLength + ', actual: ' + args.length + ')');
        err.data = {
          category: 'tooManyArgs',
          fn: _name,
          index: args.length,
          expectedLength: maxLength
        }
        return err;
      }

      err = new TypeError('Arguments of type "' + args.join(', ') +
          '" do not match any of the defined signatures of function ' + _name + '.');
      err.data = {
        category: 'mismatch',
        actual: args.map(findTypeName)
      }
      return err;
    }

    /**
     * Find the lowest index of all exact types of a parameter (no conversions)
     * @param {Param} param
     * @return {number} Returns the index of the lowest type in typed.types
     */
    function getLowestTypeIndex (param) {
      var min = 999;

      for (var i = 0; i < param.types.length; i++) {
        if (isExactType(param.types[i])) {
          min = Math.min(min, param.types[i].typeIndex);
        }
      }

      return min;
    }

    /**
     * Find the lowest index of the conversion of all types of the parameter
     * having a conversion
     * @param {Param} param
     * @return {number} Returns the lowest index of the conversions of this type
     */
    function getLowestConversionIndex (param) {
      var min = 999;

      for (var i = 0; i < param.types.length; i++) {
        if (!isExactType(param.types[i])) {
          min = Math.min(min, param.types[i].conversionIndex);
        }
      }

      return min;
    }

    /**
     * Compare two params
     * @param {Param} param1
     * @param {Param} param2
     * @return {number} returns a negative number when param1 must get a lower
     *                  index than param2, a positive number when the opposite,
     *                  or zero when both are equal
     */
    function compareParams (param1, param2) {
      var c;

      // compare having a rest parameter or not
      c = param1.restParam - param2.restParam;
      if (c !== 0) {
        return c;
      }

      // compare having conversions or not
      c = hasConversions(param1) - hasConversions(param2);
      if (c !== 0) {
        return c;
      }

      // compare the index of the types
      c = getLowestTypeIndex(param1) - getLowestTypeIndex(param2);
      if (c !== 0) {
        return c;
      }

      // compare the index of any conversion
      return getLowestConversionIndex(param1) - getLowestConversionIndex(param2);
    }

    /**
     * Compare two signatures
     * @param {Signature} signature1
     * @param {Signature} signature2
     * @return {number} returns a negative number when param1 must get a lower
     *                  index than param2, a positive number when the opposite,
     *                  or zero when both are equal
     */
    function compareSignatures (signature1, signature2) {
      var len = Math.min(signature1.params.length, signature2.params.length);
      var i;
      var c;

      // compare whether the params have conversions at all or not
      c = signature1.params.some(hasConversions) - signature2.params.some(hasConversions)
      if (c !== 0) {
        return c;
      }

      // next compare whether the params have conversions one by one
      for (i = 0; i < len; i++) {
        c = hasConversions(signature1.params[i]) - hasConversions(signature2.params[i]);
        if (c !== 0) {
          return c;
        }
      }

      // compare the types of the params one by one
      for (i = 0; i < len; i++) {
        c = compareParams(signature1.params[i], signature2.params[i]);
        if (c !== 0) {
          return c;
        }
      }

      // compare the number of params
      return signature1.params.length - signature2.params.length;
    }

    /**
     * Get params containing all types that can be converted to the defined types.
     *
     * @param {ConversionDef[]} conversions
     * @param {string[]} typeNames
     * @return {ConversionDef[]} Returns the conversions that are available
     *                        for every type (if any)
     */
    function filterConversions(conversions, typeNames) {
      var matches = {};

      conversions.forEach(function (conversion) {
        if (typeNames.indexOf(conversion.from) === -1 &&
            typeNames.indexOf(conversion.to) !== -1 &&
            !matches[conversion.from]) {
          matches[conversion.from] = conversion;
        }
      });

      return Object.keys(matches).map(function (from) {
        return matches[from];
      });
    }

    /**
     * Preprocess arguments before calling the original function:
     * - if needed convert the parameters
     * - in case of rest parameters, move the rest parameters into an Array
     * @param {Param[]} params
     * @param {function} fn
     * @return {function} Returns a wrapped function
     */
    function compileArgsPreprocessing(params, fn) {
      var fnConvert = fn;

      // TODO: can we make this wrapper function smarter/simpler?

      if (params.some(hasConversions)) {
        var restParam = hasRestParam(params);
        var compiledConversions = params.map(compileArgConversion)

        fnConvert = function convertArgs() {
          var args = [];
          var last = restParam ? arguments.length - 1 : arguments.length;
          for (var i = 0; i < last; i++) {
            args[i] = compiledConversions[i](arguments[i]);
          }
          if (restParam) {
            args[last] = arguments[last].map(compiledConversions[last]);
          }

          return fn.apply(null, args);
        }
      }

      var fnPreprocess = fnConvert;
      if (hasRestParam(params)) {
        var offset = params.length - 1;

        fnPreprocess = function preprocessRestParams () {
          return fnConvert.apply(null,
              slice(arguments, 0, offset).concat([slice(arguments, offset)]));
        }
      }

      return fnPreprocess;
    }

    /**
     * Compile conversion for a parameter to the right type
     * @param {Param} param
     * @return {function} Returns the wrapped function that will convert arguments
     *
     */
    function compileArgConversion(param) {
      var test0, test1, conversion0, conversion1;
      var tests = [];
      var conversions = [];

      param.types.forEach(function (type) {
        if (type.conversion) {
          tests.push(findTypeByName(type.conversion.from).test);
          conversions.push(type.conversion.convert);
        }
      });

      // create optimized conversion functions depending on the number of conversions
      switch (conversions.length) {
        case 0:
          return function convertArg(arg) {
            return arg;
          }

        case 1:
          test0 = tests[0]
          conversion0 = conversions[0];
          return function convertArg(arg) {
            if (test0(arg)) {
              return conversion0(arg)
            }
            return arg;
          }

        case 2:
          test0 = tests[0]
          test1 = tests[1]
          conversion0 = conversions[0];
          conversion1 = conversions[1];
          return function convertArg(arg) {
            if (test0(arg)) {
              return conversion0(arg)
            }
            if (test1(arg)) {
              return conversion1(arg)
            }
            return arg;
          }

        default:
          return function convertArg(arg) {
            for (var i = 0; i < conversions.length; i++) {
              if (tests[i](arg)) {
                return conversions[i](arg);
              }
            }
            return arg;
          }
      }
    }

    /**
     * Convert an array with signatures into a map with signatures,
     * where signatures with union types are split into separate signatures
     *
     * Throws an error when there are conflicting types
     *
     * @param {Signature[]} signatures
     * @return {Object.<string, function>}  Returns a map with signatures
     *                                      as key and the original function
     *                                      of this signature as value.
     */
    function createSignaturesMap(signatures) {
      var signaturesMap = {};
      signatures.forEach(function (signature) {
        if (!signature.params.some(hasConversions)) {
          splitParams(signature.params, true).forEach(function (params) {
            signaturesMap[stringifyParams(params)] = signature.fn;
          });
        }
      });

      return signaturesMap;
    }

    /**
     * Split params with union types in to separate params.
     *
     * For example:
     *
     *     splitParams([['Array', 'Object'], ['string', 'RegExp'])
     *     // returns:
     *     // [
     *     //   ['Array', 'string'],
     *     //   ['Array', 'RegExp'],
     *     //   ['Object', 'string'],
     *     //   ['Object', 'RegExp']
     *     // ]
     *
     * @param {Param[]} params
     * @param {boolean} ignoreConversionTypes
     * @return {Param[]}
     */
    function splitParams(params, ignoreConversionTypes) {
      function _splitParams(params, index, types) {
        if (index < params.length) {
          var param = params[index]
          var filteredTypes = ignoreConversionTypes
              ? param.types.filter(isExactType)
              : param.types;
          var typeGroups

          if (param.restParam) {
            // split the types of a rest parameter in two:
            // one with only exact types, and one with exact types and conversions
            var exactTypes = filteredTypes.filter(isExactType)
            typeGroups = exactTypes.length < filteredTypes.length
                ? [exactTypes, filteredTypes]
                : [filteredTypes]

          }
          else {
            // split all the types of a regular parameter into one type per group
            typeGroups = filteredTypes.map(function (type) {
              return [type]
            })
          }

          // recurse over the groups with types
          return flatMap(typeGroups, function (typeGroup) {
            return _splitParams(params, index + 1, types.concat([typeGroup]));
          });

        }
        else {
          // we've reached the end of the parameters. Now build a new Param
          var splittedParams = types.map(function (type, typeIndex) {
            return {
              types: type,
              restParam: (typeIndex === params.length - 1) && hasRestParam(params)
            }
          });

          return [splittedParams];
        }
      }

      return _splitParams(params, 0, []);
    }

    /**
     * Test whether two signatures have a conflicting signature
     * @param {Signature} signature1
     * @param {Signature} signature2
     * @return {boolean} Returns true when the signatures conflict, false otherwise.
     */
    function hasConflictingParams(signature1, signature2) {
      var ii = Math.max(signature1.params.length, signature2.params.length);

      for (var i = 0; i < ii; i++) {
        var typesNames1 = getExpectedTypeNames(signature1, i, true);
        var typesNames2 = getExpectedTypeNames(signature2, i, true);

        if (!hasOverlap(typesNames1, typesNames2)) {
          return false;
        }
      }

      var len1 = signature1.params.length;
      var len2 = signature2.params.length;
      var restParam1 = hasRestParam(signature1.params);
      var restParam2 = hasRestParam(signature2.params);

      return restParam1
          ? restParam2 ? (len1 === len2) : (len2 >= len1)
          : restParam2 ? (len1 >= len2)  : (len1 === len2)
    }

    /**
     * Create a typed function
     * @param {String} name               The name for the typed function
     * @param {Object.<string, function>} signaturesMap
     *                                    An object with one or
     *                                    multiple signatures as key, and the
     *                                    function corresponding to the
     *                                    signature as value.
     * @return {function}  Returns the created typed function.
     */
    function createTypedFunction(name, signaturesMap) {
      if (Object.keys(signaturesMap).length === 0) {
        throw new SyntaxError('No signatures provided');
      }

      // parse the signatures, and check for conflicts
      var parsedSignatures = [];
      Object.keys(signaturesMap)
          .map(function (signature) {
            return parseSignature(signature, signaturesMap[signature], typed.conversions);
          })
          .filter(notNull)
          .forEach(function (parsedSignature) {
            // check whether this parameter conflicts with already parsed signatures
            var conflictingSignature = findInArray(parsedSignatures, function (s) {
              return hasConflictingParams(s, parsedSignature)
            });
            if (conflictingSignature) {
              throw new TypeError('Conflicting signatures "' +
                  stringifyParams(conflictingSignature.params) + '" and "' +
                  stringifyParams(parsedSignature.params) + '".');
            }

            parsedSignatures.push(parsedSignature);
          });

      // split and filter the types of the signatures, and then order them
      var signatures = flatMap(parsedSignatures, function (parsedSignature) {
        var params = parsedSignature ? splitParams(parsedSignature.params, false) : []

        return params.map(function (params) {
          return {
            params: params,
            fn: parsedSignature.fn
          };
        });
      }).filter(notNull);

      signatures.sort(compareSignatures);

      // we create a highly optimized checks for the first couple of signatures with max 2 arguments
      var ok0 = signatures[0] && signatures[0].params.length <= 2 && !hasRestParam(signatures[0].params);
      var ok1 = signatures[1] && signatures[1].params.length <= 2 && !hasRestParam(signatures[1].params);
      var ok2 = signatures[2] && signatures[2].params.length <= 2 && !hasRestParam(signatures[2].params);
      var ok3 = signatures[3] && signatures[3].params.length <= 2 && !hasRestParam(signatures[3].params);
      var ok4 = signatures[4] && signatures[4].params.length <= 2 && !hasRestParam(signatures[4].params);
      var ok5 = signatures[5] && signatures[5].params.length <= 2 && !hasRestParam(signatures[5].params);
      var allOk = ok0 && ok1 && ok2 && ok3 && ok4 && ok5;

      // compile the tests
      var tests = signatures.map(function (signature) {
        return compileTests(signature.params);
      });

      var test00 = ok0 ? compileTest(signatures[0].params[0]) : notOk;
      var test10 = ok1 ? compileTest(signatures[1].params[0]) : notOk;
      var test20 = ok2 ? compileTest(signatures[2].params[0]) : notOk;
      var test30 = ok3 ? compileTest(signatures[3].params[0]) : notOk;
      var test40 = ok4 ? compileTest(signatures[4].params[0]) : notOk;
      var test50 = ok5 ? compileTest(signatures[5].params[0]) : notOk;

      var test01 = ok0 ? compileTest(signatures[0].params[1]) : notOk;
      var test11 = ok1 ? compileTest(signatures[1].params[1]) : notOk;
      var test21 = ok2 ? compileTest(signatures[2].params[1]) : notOk;
      var test31 = ok3 ? compileTest(signatures[3].params[1]) : notOk;
      var test41 = ok4 ? compileTest(signatures[4].params[1]) : notOk;
      var test51 = ok5 ? compileTest(signatures[5].params[1]) : notOk;

      // compile the functions
      var fns = signatures.map(function(signature) {
        return compileArgsPreprocessing(signature.params, signature.fn)
      });

      var fn0 = ok0 ? fns[0] : undef;
      var fn1 = ok1 ? fns[1] : undef;
      var fn2 = ok2 ? fns[2] : undef;
      var fn3 = ok3 ? fns[3] : undef;
      var fn4 = ok4 ? fns[4] : undef;
      var fn5 = ok5 ? fns[5] : undef;

      var len0 = ok0 ? signatures[0].params.length : -1;
      var len1 = ok1 ? signatures[1].params.length : -1;
      var len2 = ok2 ? signatures[2].params.length : -1;
      var len3 = ok3 ? signatures[3].params.length : -1;
      var len4 = ok4 ? signatures[4].params.length : -1;
      var len5 = ok5 ? signatures[5].params.length : -1;

      // simple and generic, but also slow
      var iStart = allOk ? 6 : 0;
      var iEnd = signatures.length;
      var generic = function generic() {
        'use strict';

        for (var i = iStart; i < iEnd; i++) {
          if (tests[i](arguments)) {
            return fns[i].apply(null, arguments);
          }
        }

        throw createError(name, arguments, signatures);
      }

      // create the typed function
      // fast, specialized version. Falls back to the slower, generic one if needed
      var fn = function fn(arg0, arg1) {
        'use strict';

        if (arguments.length === len0 && test00(arg0) && test01(arg1)) { return fn0.apply(null, arguments); }
        if (arguments.length === len1 && test10(arg0) && test11(arg1)) { return fn1.apply(null, arguments); }
        if (arguments.length === len2 && test20(arg0) && test21(arg1)) { return fn2.apply(null, arguments); }
        if (arguments.length === len3 && test30(arg0) && test31(arg1)) { return fn3.apply(null, arguments); }
        if (arguments.length === len4 && test40(arg0) && test41(arg1)) { return fn4.apply(null, arguments); }
        if (arguments.length === len5 && test50(arg0) && test51(arg1)) { return fn5.apply(null, arguments); }

        return generic.apply(null, arguments);
      }

      // attach name the typed function
      try {
        Object.defineProperty(fn, 'name', {value: name});
      }
      catch (err) {
        // old browsers do not support Object.defineProperty and some don't support setting the name property
        // the function name is not essential for the functioning, it's mostly useful for debugging,
        // so it's fine to have unnamed functions.
      }

      // attach signatures to the function
      fn.signatures = createSignaturesMap(signatures);

      return fn;
    }

    /**
     * Test whether a type should be NOT be ignored
     * @param {string} typeName
     * @return {boolean}
     */
    function notIgnore(typeName) {
      return typed.ignore.indexOf(typeName) === -1;
    }

    /**
     * trim a string
     * @param {string} str
     * @return {string}
     */
    function trim(str) {
      return str.trim();
    }

    /**
     * Test whether a string is not empty
     * @param {string} str
     * @return {boolean}
     */
    function notEmpty(str) {
      return !!str;
    }

    /**
     * test whether a value is not strict equal to null
     * @param {*} value
     * @return {boolean}
     */
    function notNull(value) {
      return value !== null;
    }

    /**
     * Test whether a parameter has no types defined
     * @param {Param} param
     * @return {boolean}
     */
    function isInvalidParam (param) {
      return param.types.length === 0;
    }

    /**
     * Return all but the last items of an array
     * @param {Array} arr
     * @return {Array}
     */
    function initial(arr) {
      return arr.slice(0, arr.length - 1);
    }

    /**
     * return the last item of an array
     * @param {Array} arr
     * @return {*}
     */
    function last(arr) {
      return arr[arr.length - 1];
    }

    /**
     * Slice an array or function Arguments
     * @param {Array | Arguments | IArguments} arr
     * @param {number} start
     * @param {number} [end]
     * @return {Array}
     */
    function slice(arr, start, end) {
      return Array.prototype.slice.call(arr, start, end);
    }

    /**
     * Test whether an array contains some item
     * @param {Array} array
     * @param {*} item
     * @return {boolean} Returns true if array contains item, false if not.
     */
    function contains(array, item) {
      return array.indexOf(item) !== -1;
    }

    /**
     * Test whether two arrays have overlapping items
     * @param {Array} array1
     * @param {Array} array2
     * @return {boolean} Returns true when at least one item exists in both arrays
     */
    function hasOverlap(array1, array2) {
      for (var i = 0; i < array1.length; i++) {
        if (contains(array2, array1[i])) {
          return true;
        }
      }

      return false;
    }

    /**
     * Return the first item from an array for which test(arr[i]) returns true
     * @param {Array} arr
     * @param {function} test
     * @return {* | undefined} Returns the first matching item
     *                         or undefined when there is no match
     */
    function findInArray(arr, test) {
      for (var i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
          return arr[i];
        }
      }
      return undefined;
    }

    /**
     * Filter unique items of an array with strings
     * @param {string[]} arr
     * @return {string[]}
     */
    function uniq(arr) {
      var entries = {}
      for (var i = 0; i < arr.length; i++) {
        entries[arr[i]] = true;
      }
      return Object.keys(entries);
    }

    /**
     * Flat map the result invoking a callback for every item in an array.
     * https://gist.github.com/samgiles/762ee337dff48623e729
     * @param {Array} arr
     * @param {function} callback
     * @return {Array}
     */
    function flatMap(arr, callback) {
      return Array.prototype.concat.apply([], arr.map(callback));
    }

    /**
     * Retrieve the function name from a set of typed functions,
     * and check whether the name of all functions match (if given)
     * @param {function[]} fns
     */
    function getName (fns) {
      var name = '';

      for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];

        // check whether the names are the same when defined
        if (fn.signatures && fn.name !== '') {
          if (name === '') {
            name = fn.name;
          }
          else if (name !== fn.name) {
            var err = new Error('Function names do not match (expected: ' + name + ', actual: ' + fn.name + ')');
            err.data = {
              actual: fn.name,
              expected: name
            };
            throw err;
          }
        }
      }

      return name;
    }

    typed = createTypedFunction('typed', {
      'string, Object': createTypedFunction,
      'Object': function (signaturesMap) {
        // find existing name
        var fns = [];
        for (var signature in signaturesMap) {
          if (signaturesMap.hasOwnProperty(signature)) {
            fns.push(signaturesMap[signature]);
          }
        }
        var name = getName(fns);
        return createTypedFunction(name, signaturesMap);
      },
      '...Function': function (fns) {
        var err;
        var name = getName(fns);
        var signaturesMap = {};

        for (var i = 0; i < fns.length; i++) {
          var fn = fns[i];

          // test whether this is a typed-function
          if (!(typeof fn.signatures === 'object')) {
            err = new TypeError('Function is no typed-function (index: ' + i + ')');
            err.data = {index: i};
            throw err;
          }

          // merge the signatures
          for (var signature in fn.signatures) {
            if (fn.signatures.hasOwnProperty(signature)) {
              if (signaturesMap.hasOwnProperty(signature)) {
                if (fn.signatures[signature] !== signaturesMap[signature]) {
                  err = new Error('Signature "' + signature + '" is defined twice');
                  err.data = {signature: signature};
                  throw err;
                }
                // else: both signatures point to the same function, that's fine
              }
              else {
                signaturesMap[signature] = fn.signatures[signature];
              }
            }
          }
        }

        return createTypedFunction(name, signaturesMap);
      }
    });

    typed.create = create;
    typed.types = _types;
    typed.conversions = _conversions;
    typed.ignore = _ignore;
    typed.convert = convert;
    typed.find = find;

    /**
     * add a type
     * @param {{name: string, test: function}} type
     * @param {boolean} [beforeObjectTest=true]
     *                          If true, the new test will be inserted before
     *                          the test with name 'Object' (if any), since
     *                          tests for Object match Array and classes too.
     */
    typed.addType = function (type, beforeObjectTest) {
      if (!type || typeof type.name !== 'string' || typeof type.test !== 'function') {
        throw new TypeError('Object with properties {name: string, test: function} expected');
      }

      if (beforeObjectTest !== false) {
        for (var i = 0; i < typed.types.length; i++) {
          if (typed.types[i].name === 'Object') {
            typed.types.splice(i, 0, type);
            return
          }
        }
      }

      typed.types.push(type);
    };

    // add a conversion
    typed.addConversion = function (conversion) {
      if (!conversion
          || typeof conversion.from !== 'string'
          || typeof conversion.to !== 'string'
          || typeof conversion.convert !== 'function') {
        throw new TypeError('Object with properties {from: string, to: string, convert: function} expected');
      }

      typed.conversions.push(conversion);
    };

    return typed;
  }

  return create();
}));

/***/ }),

/***/ "./src/animationFunctions.js":
/*!***********************************!*\
  !*** ./src/animationFunctions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var linearSingleRotation = exports.linearSingleRotation = function linearSingleRotation(type, from, to) {
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.02;

  var acc = from,
      current = from,
      direction = to >= from ? 1 : -1,
      min = void 0,
      max = void 0;

  if (to >= from) {
    min = from;
    max = to;
  } else {
    min = to;
    max = from;
  }

  return function (wfl, deltaTime) {
    if (direction > 0 && acc >= max) {
      direction = -1;
    } else if (direction < 0 && acc <= min) {
      direction = 1;
    }
    current = deltaTime * speed * direction;
    acc += current;
    wfl.addRotation(type === "roll" ? current : 0, type === "pitch" ? current : 0, type === "yaw" ? current : 0);
    return current;
  };
};

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WireFrameLandscapeError = function (_Error) {
  _inherits(WireFrameLandscapeError, _Error);

  function WireFrameLandscapeError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, WireFrameLandscapeError);

    return _possibleConstructorReturn(this, (WireFrameLandscapeError.__proto__ || Object.getPrototypeOf(WireFrameLandscapeError)).call(this, "[WireFrameLandscape] " + message));
  }

  return WireFrameLandscapeError;
}(Error);

exports.default = WireFrameLandscapeError;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Magnitude = exports.Animation = exports.create = undefined;

var _wireFrameLandscape = __webpack_require__(/*! ./wireFrameLandscape.js */ "./src/wireFrameLandscape.js");

var _wireFrameLandscape2 = _interopRequireDefault(_wireFrameLandscape);

var _animationFunctions = __webpack_require__(/*! ./animationFunctions.js */ "./src/animationFunctions.js");

var Animation = _interopRequireWildcard(_animationFunctions);

var _magnitudeFunctions = __webpack_require__(/*! ./magnitudeFunctions.js */ "./src/magnitudeFunctions.js");

var Magnitude = _interopRequireWildcard(_magnitudeFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create(wrapper) {
  var framerate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;

  return new _wireFrameLandscape2.default(wrapper, framerate);
};

exports.create = create;
exports.Animation = Animation;
exports.Magnitude = Magnitude;
// export default WFL;

/***/ }),

/***/ "./src/magnitudeFunctions.js":
/*!***********************************!*\
  !*** ./src/magnitudeFunctions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sawtoothWave = exports.randomSawtoothWave = exports.startupEnum = undefined;

var _error = __webpack_require__(/*! ./error.js */ "./src/error.js");

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startupEnum = exports.startupEnum = {
  ZERO: 0,
  RANDOM: 1
};

var randomSawtoothWave = exports.randomSawtoothWave = function randomSawtoothWave() {
  var amplitude_min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -30;
  var amplitude_max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.2;
  var startup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startupEnum.RANDOM;


  if (amplitude_max < amplitude_min) {
    throw new _error2.default("amplitude max inferior to amplitude min");
  }

  function new_magnitude() {
    return Math.random() * (amplitude_max - amplitude_min) + amplitude_min;
  }

  return function (x, y) {
    var magnitude = null,
        current = null,
        direction = null,
        time = null,
        deltaTime = null;

    return function () {
      if (magnitude == null) {
        magnitude = new_magnitude();
        if (startup == startupEnum.RANDOM) {
          current = new_magnitude();
        } else if (startup == startupEnum.ZERO) {
          current = 0;
        }
        direction = current >= magnitude ? -1 : 1;
        time = Date.now();
      }
      if (direction > 0 && current >= magnitude || direction < 0 && current <= magnitude) {
        magnitude = new_magnitude();
        direction = current >= magnitude ? -1 : 1;
      }
      deltaTime = Date.now() - time;
      current += deltaTime * speed * direction;
      time = Date.now();
      return current;
    };
  };
};

var sawtoothWave = exports.sawtoothWave = function sawtoothWave() {
  var amplitude_min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -30;
  var amplitude_max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.2;
  var startup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startupEnum.RANDOM;


  if (amplitude_max < amplitude_min) {
    throw new _error2.default("amplitude max inferior to amplitude min");
  }

  return function (x, y) {
    var magnitude = null,
        current = null,
        direction = null,
        time = null,
        deltaTime = null;

    return function () {
      if (magnitude == null) {
        magnitude = Math.random() > 0.5 ? amplitude_min : amplitude_max;
        if (startup == startupEnum.RANDOM) {
          current = Math.random() * (amplitude_max - amplitude_min) + amplitude_min;
        } else if (startup == startupEnum.ZERO) {
          current = 0;
        }
        direction = current >= magnitude ? -1 : 1;
        time = Date.now();
      }
      if (direction > 0 && current >= magnitude || direction < 0 && current <= magnitude) {
        magnitude = magnitude == amplitude_min ? amplitude_max : amplitude_min;
        direction = current >= magnitude ? -1 : 1;
      }

      deltaTime = Date.now() - time;
      current += deltaTime * speed * direction;
      time = Date.now();
      return current;
    };
  };
};

/***/ }),

/***/ "./src/point.js":
/*!**********************!*\
  !*** ./src/point.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! mathjs/core */ "./node_modules/mathjs/core.js");

var _core2 = _interopRequireDefault(_core);

var _bignumber = __webpack_require__(/*! mathjs/lib/type/bignumber */ "./node_modules/mathjs/lib/type/bignumber/index.js");

var _bignumber2 = _interopRequireDefault(_bignumber);

var _matrix = __webpack_require__(/*! mathjs/lib/type/matrix */ "./node_modules/mathjs/lib/type/matrix/index.js");

var _matrix2 = _interopRequireDefault(_matrix);

var _index = __webpack_require__(/*! mathjs/lib/type/matrix/function/index */ "./node_modules/mathjs/lib/type/matrix/function/index.js");

var _index2 = _interopRequireDefault(_index);

var _subset = __webpack_require__(/*! mathjs/lib/function/matrix/subset */ "./node_modules/mathjs/lib/function/matrix/subset.js");

var _subset2 = _interopRequireDefault(_subset);

var _multiply = __webpack_require__(/*! mathjs/lib/function/arithmetic/multiply */ "./node_modules/mathjs/lib/function/arithmetic/multiply.js");

var _multiply2 = _interopRequireDefault(_multiply);

var _add = __webpack_require__(/*! mathjs/lib/function/arithmetic/add */ "./node_modules/mathjs/lib/function/arithmetic/add.js");

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var math = _core2.default.create();
math.import(_matrix2.default);
math.import(_bignumber2.default);
math.import(_index2.default);
math.import(_subset2.default);
math.import(_multiply2.default);
math.import(_add2.default);

var Point = function () {
  function Point(x, y, _amplitudeFunc) {
    _classCallCheck(this, Point);

    this.position = null;
    this.absolutePosition = null;
    this.absolutePositionObject = null;
    this.x = x;
    this.y = y;
    this.getMagnitude = _amplitudeFunc(this.x, this.y);
  }

  _createClass(Point, [{
    key: 'setAmplitude',
    value: function setAmplitude(_amplitudeFunc) {
      this.getMagnitude = _amplitudeFunc(this.x, this.y);
    }
  }, {
    key: 'setRawPosition',
    value: function setRawPosition(_position) {
      this.position = _position;
      this.absolutePosition = null;
    }
  }, {
    key: 'calculateAbsolutePosition',
    value: function calculateAbsolutePosition(_rotation, _deviation) {
      var vec = math.subset(this.position, math.index(2, 0), this.getMagnitude());
      vec = math.multiply(_rotation.rotationMatrix, vec);
      vec = math.add(vec, _deviation);
      this.absolutePosition = vec;
      this.absolutePositionObject = {
        x: math.subset(this.absolutePosition, math.index(0, 0)),
        y: math.subset(this.absolutePosition, math.index(1, 0)),
        z: math.subset(this.absolutePosition, math.index(2, 0))
      };
    }
  }, {
    key: 'X',
    get: function get() {
      return this.absolutePositionObject == null ? NaN : this.absolutePositionObject.x;
    }
  }, {
    key: 'Y',
    get: function get() {
      return this.absolutePositionObject == null ? NaN : this.absolutePositionObject.y;
    }
  }, {
    key: 'Z',
    get: function get() {
      return this.absolutePositionObject == null ? NaN : this.absolutePositionObject.z;
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),

/***/ "./src/resizeSensor.js":
/*!*****************************!*\
  !*** ./src/resizeSensor.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
    if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var f; }
}(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (require, module, exports) {
            var css = function (global) {
                'use strict';

                /** @var {null|Object} */

                var animationPropertiesForBrowser = null;
                /** @var {null|boolean} */
                var isCssAnimationSupported = null;

                /**
                 * Determines which style convention (properties) to follow
                 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations/Detecting_CSS_animation_support
                 * @returns {{keyframesRule: string, styleDeclaration: string, animationStartEvent: string, animationName: string}}
                 */
                function getAnimationPropertiesForBrowser() {
                    if (animationPropertiesForBrowser !== null) {
                        return animationPropertiesForBrowser;
                    }

                    var testElement = global.document.createElement('div');
                    var supportsUnprefixedAnimationProperties = 'animationName' in testElement.style;

                    // Unprefixed animation properties
                    var animationStartEvent = 'animationstart';
                    var animationName = 'resizeanim';

                    if (supportsUnprefixedAnimationProperties) {
                        return {
                            keyframesRule: '@keyframes ' + animationName + ' {from { opacity: 0; } to { opacity: 0; }}',
                            styleDeclaration: 'animation: 1ms ' + animationName + ';',
                            animationStartEvent: animationStartEvent,
                            animationName: animationName
                        };
                    }

                    // Browser specific animation properties
                    var keyframePrefix = '';
                    var browserPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    var startEvents = ['webkitAnimationStart', 'animationstart', 'oAnimationStart', 'MSAnimationStart'];

                    var i;
                    var l = browserPrefixes.length;

                    for (i = 0; i < l; i++) {
                        if (browserPrefixes[i] + 'AnimationName' in testElement.style) {
                            keyframePrefix = '-' + browserPrefixes[i].toLowerCase() + '-';
                            animationStartEvent = startEvents[i];
                            break;
                        }
                    }

                    animationPropertiesForBrowser = {
                        keyframesRule: '@' + keyframePrefix + 'keyframes ' + animationName + ' {from { opacity: 0; } to { opacity: 0; }}',
                        styleDeclaration: keyframePrefix + 'animation: 1ms ' + animationName + ';',
                        animationStartEvent: animationStartEvent,
                        animationName: animationName
                    };

                    return animationPropertiesForBrowser;
                }

                /**
                 * @returns {boolean}
                 */
                function isCSSAnimationSupported() {
                    if (isCssAnimationSupported !== null) {
                        return isCssAnimationSupported;
                    }

                    var testElement = global.document.createElement('div');
                    var isAnimationSupported = 'animationName' in testElement.style;

                    if (isAnimationSupported) {
                        isCssAnimationSupported = true;
                        return isCssAnimationSupported;
                    }

                    var browserPrefixes = 'Webkit Moz O ms'.split(' ');
                    var i = 0;
                    var l = browserPrefixes.length;

                    for (; i < l; i++) {
                        if (browserPrefixes[i] + 'AnimationName' in testElement.style) {
                            isCssAnimationSupported = true;
                            return isCssAnimationSupported;
                        }
                    }

                    isCssAnimationSupported = false;
                    return isCssAnimationSupported;
                }

                /**
                 * Adds a style block that contains CSS essential for detecting resize events
                 */
                function insertResizeSensorStyles() {
                    var cssRules = [getAnimationPropertiesForBrowser().keyframesRule ? getAnimationPropertiesForBrowser().keyframesRule : '', '.ResizeSensor__resizeTriggers { ' + (getAnimationPropertiesForBrowser().styleDeclaration ? getAnimationPropertiesForBrowser().styleDeclaration : '') + ' visibility: hidden; opacity: 0; }', '.ResizeSensor__resizeTriggers, .ResizeSensor__resizeTriggers > div, .ResizeSensor__contractTrigger:before { content: \' \'; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .ResizeSensor__resizeTriggers > div { background: #eee; overflow: auto; } .ResizeSensor__contractTrigger:before { width: 200%; height: 200%; }'];

                    cssRules = cssRules.join(' ');

                    var headElem = global.document.head || global.document.getElementsByTagName('head')[0];

                    var styleElem = global.document.createElement('style');
                    styleElem.type = 'text/css';

                    if (styleElem.styleSheet) {
                        styleElem.styleSheet.cssText = cssRules;
                    } else {
                        styleElem.appendChild(global.document.createTextNode(cssRules));
                    }

                    headElem.appendChild(styleElem);
                }

                return {
                    insertResizeSensorStyles: insertResizeSensorStyles,
                    isAnimationSupported: isCSSAnimationSupported,
                    getAnimationPropertiesForBrowser: getAnimationPropertiesForBrowser
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = css;
        }, {}], 2: [function (require, module, exports) {
            var getStyle = function (global) {
                'use strict';

                /**
                 * @param {HTMLElement} element
                 * @param {string} property
                 * @returns {null|string}
                 */

                return function (element, property) {
                    if (!('currentStyle' in element) && !('getComputedStyle' in global)) {
                        return null;
                    }

                    if (element.currentStyle) {
                        return element.currentStyle[property];
                    }

                    return global.document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = getStyle;
        }, {}], 3: [function (require, module, exports) {
            var polyfill = function (global) {
                'use strict';

                /**
                 * @see https://gist.github.com/mrdoob/838785
                 */

                function polyfillRequestAnimationFrame() {
                    if (!global.requestAnimationFrame) {
                        global.requestAnimationFrame = function () {
                            return global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
                                global.setTimeout(callback, 1000 / 60);
                            };
                        }();
                    }

                    if (!global.cancelAnimationFrame) {
                        global.cancelAnimationFrame = function () {
                            return global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame || global.clearTimeout;
                        }();
                    }
                }

                return {
                    requestAnimationFrame: polyfillRequestAnimationFrame
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = polyfill;
        }, {}], 4: [function (require, module, exports) {
            var resizeSensorFactory = function (global) {
                'use strict';

                /** @var {Function} */

                var getStyle = require('./getStyle');
                /** @var {Object} */
                var css = require('./css');

                /**
                 * @param {HTMLElement} targetElement
                 * @param {Function} callback
                 * @constructor
                 */
                var resizeSensor = function resizeSensor(targetElement, callback) {
                    /** @var {HTMLElement} */
                    this.targetElement = targetElement;
                    /** @var {Function} */
                    this.callback = callback;
                    /** @var {{width: int, height: int}} */
                    this.dimensions = {
                        width: 0,
                        height: 0
                    };

                    if ('attachEvent' in global.document) {
                        this.boundOnResizeHandler = this.onElementResize.bind(this);
                        this.targetElement.attachEvent('onresize', this.boundOnResizeHandler);
                        return;
                    }

                    /** @var {{container: HTMLElement, expand: HTMLElement, expandChild: HTMLElement, contract: HTMLElement}} */
                    this.triggerElements = {};
                    /** @var {int} */
                    this.resizeRAF = 0;

                    this.setup();
                };

                resizeSensor.prototype.setup = function () {
                    // Make sure the target element is "positioned"
                    if (getStyle(this.targetElement, 'position') === 'static') {
                        this.targetElement.style.position = 'relative';
                    }

                    // Create and append resize trigger elements
                    this.insertResizeTriggerElements();

                    // Start listening to events
                    this.boundScrollListener = this.handleElementScroll.bind(this);
                    this.targetElement.addEventListener('scroll', this.boundScrollListener, true);

                    if (css.isAnimationSupported()) {
                        this.boundAnimationStartListener = this.resetTriggersOnAnimationStart.bind(this);
                        this.triggerElements.container.addEventListener(css.getAnimationPropertiesForBrowser().animationStartEvent, this.boundAnimationStartListener);
                    }

                    // Initial value reset of all triggers
                    this.resetTriggers();
                };

                resizeSensor.prototype.insertResizeTriggerElements = function () {
                    var resizeTrigger = global.document.createElement('div');
                    var expandTrigger = global.document.createElement('div');
                    var expandTriggerChild = global.document.createElement('div');
                    var contractTrigger = global.document.createElement('div');

                    resizeTrigger.className = 'ResizeSensor ResizeSensor__resizeTriggers';
                    expandTrigger.className = 'ResizeSensor__expandTrigger';
                    contractTrigger.className = 'ResizeSensor__contractTrigger';

                    expandTrigger.appendChild(expandTriggerChild);
                    resizeTrigger.appendChild(expandTrigger);
                    resizeTrigger.appendChild(contractTrigger);

                    this.triggerElements.container = resizeTrigger;
                    this.triggerElements.expand = expandTrigger;
                    this.triggerElements.expandChild = expandTriggerChild;
                    this.triggerElements.contract = contractTrigger;

                    this.targetElement.appendChild(resizeTrigger);
                };

                resizeSensor.prototype.onElementResize = function () {
                    var currentDimensions = this.getDimensions();

                    if (this.isResized(currentDimensions)) {
                        this.dimensions.width = currentDimensions.width;
                        this.dimensions.height = currentDimensions.height;
                        this.elementResized();
                    }
                };

                resizeSensor.prototype.handleElementScroll = function () {
                    var _this = this;

                    this.resetTriggers();

                    if (this.resizeRAF) {
                        global.cancelAnimationFrame(this.resizeRAF);
                    }

                    this.resizeRAF = global.requestAnimationFrame(function () {
                        var currentDimensions = _this.getDimensions();
                        if (_this.isResized(currentDimensions)) {
                            _this.dimensions.width = currentDimensions.width;
                            _this.dimensions.height = currentDimensions.height;
                            _this.elementResized();
                        }
                    });
                };

                /**
                 * @param {{width: number, height: number}} currentDimensions
                 * @returns {boolean}
                 */
                resizeSensor.prototype.isResized = function (currentDimensions) {
                    return currentDimensions.width !== this.dimensions.width || currentDimensions.height !== this.dimensions.height;
                };

                /**
                 * @returns {{width: number, height: number}}
                 */
                resizeSensor.prototype.getDimensions = function () {
                    return {
                        width: this.targetElement.offsetWidth,
                        height: this.targetElement.offsetHeight
                    };
                };

                /**
                 * @param {Event} event
                 */
                resizeSensor.prototype.resetTriggersOnAnimationStart = function (event) {
                    if (event.animationName === css.getAnimationPropertiesForBrowser().animationName) {
                        this.resetTriggers();
                    }
                };

                resizeSensor.prototype.resetTriggers = function () {
                    this.triggerElements.contract.scrollLeft = this.triggerElements.contract.scrollWidth;
                    this.triggerElements.contract.scrollTop = this.triggerElements.contract.scrollHeight;
                    this.triggerElements.expandChild.style.width = this.triggerElements.expand.offsetWidth + 1 + 'px';
                    this.triggerElements.expandChild.style.height = this.triggerElements.expand.offsetHeight + 1 + 'px';
                    this.triggerElements.expand.scrollLeft = this.triggerElements.expand.scrollWidth;
                    this.triggerElements.expand.scrollTop = this.triggerElements.expand.scrollHeight;
                };

                resizeSensor.prototype.elementResized = function () {
                    this.callback(this.dimensions);
                };

                resizeSensor.prototype.destroy = function () {
                    this.removeEventListeners();
                    this.targetElement.removeChild(this.triggerElements.container);
                    delete this.boundAnimationStartListener;
                    delete this.boundScrollListener;
                    delete this.callback;
                    delete this.targetElement;
                };

                resizeSensor.prototype.removeEventListeners = function () {
                    if ('attachEvent' in global.document) {
                        this.targetElement.detachEvent('onresize', this.boundOnResizeHandler);
                        return;
                    }

                    this.triggerElements.container.removeEventListener(css.getAnimationPropertiesForBrowser().animationStartEvent, this.boundAnimationStartListener);
                    this.targetElement.removeEventListener('scroll', this.boundScrollListener, true);
                };

                return {
                    /**
                     * @param {Element} targetElement
                     * @param {Function} callback
                     * @returns {resizeSensor}
                     */
                    create: function create(targetElement, callback) {
                        return new resizeSensor(targetElement, callback);
                    }
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = resizeSensorFactory;
        }, { "./css": 1, "./getStyle": 2 }], 5: [function (require, module, exports) {
            var sensors = function (global) {
                'use strict';

                /** @var {Object} */

                var css = require('./css');
                /** @var {Object} */
                var polyfill = require('./polyfill');
                /** @var {Object} */
                var resizeSensorFactory = require('./resizeSensor');

                /** {array} */
                var unsuitableElements = ['IMG', 'COL', 'TR', 'THEAD', 'TFOOT'];
                /** {boolean} */
                var supportsAttachEvent = 'attachEvent' in global.document;

                /** {{}} Map of all resize sensors (id => ResizeSensor) */
                var allResizeSensors = {};

                if (!supportsAttachEvent) {
                    css.insertResizeSensorStyles();

                    if (!('requestAnimationFrame' in global) || !('cancelAnimationFrame' in global)) {
                        polyfill.requestAnimationFrame();
                    }
                }

                /**
                 * @param {Element} targetElement
                 * @param {Function} callback
                 * @returns {resizeSensor}
                 */
                function create(targetElement, callback) {
                    if (isUnsuitableElement(targetElement)) {
                        console && console.error("Given element isn't suitable to act as a resize sensor. Try wrapping it with one that is. Unsuitable elements are:", unsuitableElements);
                        return null;
                    }

                    var sensorId = getSensorId(targetElement);

                    if (allResizeSensors[sensorId]) {
                        return allResizeSensors[sensorId];
                    }

                    var sensor = resizeSensorFactory.create(targetElement, callback);
                    allResizeSensors[sensorId] = sensor;
                    return sensor;
                }

                /**
                 * @param {Element} targetElement
                 */
                function destroy(targetElement) {
                    var sensorId = getSensorId(targetElement);
                    var sensor = allResizeSensors[sensorId];

                    if (!sensor) {
                        console && console.error("Can't destroy ResizeSensor (404 not found).", targetElement);
                    }

                    sensor.destroy();
                    delete allResizeSensors[sensorId];
                }

                /**
                 * @param {Element} targetElement
                 * @returns {string}
                 */
                function getSensorId(targetElement) {
                    return targetElement.id;
                }

                /**
                 * @param {HTMLElement} targetElement
                 * @returns {boolean}
                 */
                function isUnsuitableElement(targetElement) {
                    var tagName = targetElement.tagName.toUpperCase();
                    return unsuitableElements.indexOf(tagName) > -1;
                }

                return {
                    create: create,
                    destroy: destroy
                };
            }(typeof window !== 'undefined' ? window : this);

            module.exports = sensors;
        }, { "./css": 1, "./polyfill": 3, "./resizeSensor": 4 }] }, {}, [5])(5);
});

/***/ }),

/***/ "./src/rotation.js":
/*!*************************!*\
  !*** ./src/rotation.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! mathjs/core */ "./node_modules/mathjs/core.js");

var _core2 = _interopRequireDefault(_core);

var _matrix = __webpack_require__(/*! mathjs/lib/type/matrix */ "./node_modules/mathjs/lib/type/matrix/index.js");

var _matrix2 = _interopRequireDefault(_matrix);

var _multiply = __webpack_require__(/*! mathjs/lib/function/arithmetic/multiply */ "./node_modules/mathjs/lib/function/arithmetic/multiply.js");

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var math = _core2.default.create();
math.import(_matrix2.default);
math.import(_multiply2.default);

var Rotation = function () {
  function Rotation(roll, pitch, yaw) {
    _classCallCheck(this, Rotation);

    this.roll = roll;
    this.pitch = pitch;
    this.yaw = yaw;

    this.createMatrix();
  }

  _createClass(Rotation, [{
    key: 'add',
    value: function add(roll, pitch, yaw) {
      this.roll += roll;
      this.pitch += pitch;
      this.yaw += yaw;

      this.createMatrix();
    }
  }, {
    key: 'createMatrix',
    value: function createMatrix() {
      this.rollMatrix = Rotation.createRollMatrix(this.roll);
      this.pitchMatrix = Rotation.createPitchMatrix(this.pitch);
      this.yawMatrix = Rotation.createYawMatrix(this.yaw);

      this.rotationMatrix = math.multiply(math.multiply(this.yawMatrix, this.pitchMatrix), this.rollMatrix);
    }
  }], [{
    key: 'createRollMatrix',
    value: function createRollMatrix(angle) {
      return math.matrix([[1, 0, 0], [0, Math.cos(angle), -Math.sin(angle)], [0, Math.sin(angle), Math.cos(angle)]]);
    }
  }, {
    key: 'createPitchMatrix',
    value: function createPitchMatrix(angle) {
      return math.matrix([[Math.cos(angle), 0, Math.sin(angle)], [0, 1, 0], [-Math.sin(angle), 0, Math.cos(angle)]]);
    }
  }, {
    key: 'createYawMatrix',
    value: function createYawMatrix(angle) {
      return math.matrix([[Math.cos(angle), -Math.sin(angle), 0], [Math.sin(angle), Math.cos(angle), 0], [0, 0, 1]]);
    }
  }]);

  return Rotation;
}();

exports.default = Rotation;

/***/ }),

/***/ "./src/wireFrameLandscape.js":
/*!***********************************!*\
  !*** ./src/wireFrameLandscape.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(/*! mathjs/core */ "./node_modules/mathjs/core.js");

var _core2 = _interopRequireDefault(_core);

var _matrix = __webpack_require__(/*! mathjs/lib/type/matrix */ "./node_modules/mathjs/lib/type/matrix/index.js");

var _matrix2 = _interopRequireDefault(_matrix);

var _point = __webpack_require__(/*! ./point.js */ "./src/point.js");

var _point2 = _interopRequireDefault(_point);

var _rotation = __webpack_require__(/*! ./rotation.js */ "./src/rotation.js");

var _rotation2 = _interopRequireDefault(_rotation);

var _error = __webpack_require__(/*! ./error.js */ "./src/error.js");

var _error2 = _interopRequireDefault(_error);

var _resizeSensor = __webpack_require__(/*! ./resizeSensor.js */ "./src/resizeSensor.js");

var _resizeSensor2 = _interopRequireDefault(_resizeSensor);

var _magnitudeFunctions = __webpack_require__(/*! ./magnitudeFunctions.js */ "./src/magnitudeFunctions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var math = _core2.default.create();
math.import(_matrix2.default);

var WireFrameLandscape = function () {
  function WireFrameLandscape(wrapper) {
    var framerate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;

    _classCallCheck(this, WireFrameLandscape);

    if (typeof wrapper === "undefined") {
      throw new _error2.default("no wrapper given");
    } else if (typeof wrapper === "string") {
      this.wrapper = document.getElementById(wrapper);
      if (this.wrapper == null) {
        throw new _error2.default("wrong wrapper ID");
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

    this.amplitudeFunc = (0, _magnitudeFunctions.randomSawtoothWave)(-30, 30, 0.02, _magnitudeFunctions.startupEnum.RANDOM);
    this.setPositionType("CENTER");
    this.setDimensionsType("FILL", { x: 5, y: 5, multiplier: 1.2 });
    this.rotation = new _rotation2.default(0, 0, 0);
    this.setSplittings(9);

    var $this = this;

    _resizeSensor2.default.create(this.wrapper, function () {
      var WIDTH = $this.getWidth();
      var HEIGHT = $this.getHeight();

      $this.refreshParamsCanvas();

      if ($this.positionType == "CENTER") {
        $this.setPosition();
      }
      if ($this.dimensionsType = "FILL") {
        $this.setDimensions();
      }
    });
  }

  _createClass(WireFrameLandscape, [{
    key: 'display',
    value: function display() {
      this.context.fillRect(0, 0, this.getWidth(), this.getHeight());
      for (var x = 0; x < this.splittings.x; ++x) {
        this.context.beginPath();
        this.context.moveTo(this.points[x][0].X, this.points[x][0].Y);
        for (var y = 1; y < this.splittings.y; ++y) {
          this.context.lineTo(this.points[x][y].X, this.points[x][y].Y);
        }
        this.context.stroke();
      }

      for (var _y = 0; _y < this.splittings.y; ++_y) {
        this.context.beginPath();
        this.context.moveTo(this.points[0][_y].X, this.points[0][_y].Y);
        for (var _x2 = 1; _x2 < this.splittings.x; ++_x2) {
          this.context.lineTo(this.points[_x2][_y].X, this.points[_x2][_y].Y);
        }
        this.context.stroke();
      }
    }
  }, {
    key: 'start',
    value: function start() {
      var checkup = ["dimensions", "position", "splittings"];
      for (var i = 0; i < checkup.length; ++i) {
        if (this[checkup[i]] == null) {
          throw new _error2.default(checkup[i] + " not specified");
        }
      }
      this.createPoints();

      var $this = this;
      var time = 0,
          deltaTime = void 0;

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
  }, {
    key: 'setPositionType',
    value: function setPositionType(type) {
      if (typeof type !== "string" || type !== "CENTER" && type !== "STATIC") {
        throw new _error2.default("wrong setPositionType parameters");
      }
      this.positionType = type;
      if (this.positionType === "CENTER") {
        var WIDTH = this.getWidth();
        var HEIGHT = this.getHeight();
        this.setPosition(WIDTH / 2.0, HEIGHT / 2.0);
      }
      return this;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      if (this.positionType == "CENTER") {
        this.position = {
          x: this.getWidth() / 2.0,
          y: this.getHeight() / 2.0
        };
      } else {
        if (typeof x !== "number" || typeof y !== "number") {
          throw new _error2.default("wrong type parameters setPosition");
        }
        this.position = {
          x: x,
          y: y
        };
      }
      this.positionMatrix = math.matrix([[this.position.x], [this.position.y], [0]]);
      this.changed = 1;
      return this;
    }
  }, {
    key: 'setRotation',
    value: function setRotation(roll, pitch, yaw) {
      if (typeof roll !== "number" || typeof pitch !== "number" || typeof yaw !== "number") {
        throw new _error2.default("wrong type parameters setRotation");
      }
      this.rotation = new _rotation2.default(roll, pitch, yaw);
      this.changed = 1;
      return this;
    }
  }, {
    key: 'addRotation',
    value: function addRotation(roll, pitch, yaw) {
      if (typeof roll !== "number" || typeof pitch !== "number" || typeof yaw !== "number") {
        throw new _error2.default("wrong type parameters addRotation");
      }
      this.rotation.add(roll, pitch, yaw);
      this.changed = 1;
    }
  }, {
    key: 'setDimensionsType',
    value: function setDimensionsType(type, params) {
      if (typeof type !== "string" || type != "FILL" && type != "STATIC") {
        throw new _error2.default("wrong setDimensionsType parameters");
      }
      this.dimensionsType = type;
      if (type === "FILL") {
        if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== "object" || typeof params.x !== "number" || typeof params.y !== "number") {
          throw new _error2.default("wrong setDimensionsType params");
        }
        this.dimensions = params;
        this.setDimensions();
      }
      return this;
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions(columns, rows) {
      if (this.dimensionsType === "FILL") {
        var WIDTH = this.getWidth();
        var HEIGHT = this.getHeight();
        var d_x = this.dimensions.x / WIDTH;
        var d_y = this.dimensions.y / HEIGHT;
        var alpha = (d_x <= d_y ? WIDTH / this.dimensions.x : HEIGHT / this.dimensions.y) * this.dimensions.multiplier;

        this.dimensions = Object.assign({}, this.dimensions, {
          x: this.dimensions.x * alpha,
          y: this.dimensions.y * alpha
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
  }, {
    key: 'setAmplitudeFunction',
    value: function setAmplitudeFunction(_func) {
      this.amplitudeFunc = _func;
      this.changed = 1;
      return this;
    }
  }, {
    key: 'setSplittings',
    value: function setSplittings(item, item_2) {
      var x = 0,
          y = 0;
      if (typeof item === "number" && typeof item_2 === "number") {
        x = item;
        y = item_2;
      } else if (typeof item === "number") {
        var divs = [];
        for (var i = 0; i < item / 2.0; ++i) {
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
        throw new _error2.default("first argument not a number in setSquares");
      }
      this.splittings = { x: x, y: y };
      this.changed = 1;
      return this;
    }
  }, {
    key: 'getRawPosition',
    value: function getRawPosition(x, y) {
      var lx = this.splittings.x - 1.0;
      var ly = this.splittings.y - 1.0;
      return math.matrix([[(x - lx / 2.0) / lx * this.dimensions.x], [(y - ly / 2.0) / ly * this.dimensions.y], [0]]);
    }
  }, {
    key: 'setBackgroundColor',
    value: function setBackgroundColor(color) {
      this.backgroundColor = color;
      this.changed = 1;
      return this;
    }
  }, {
    key: 'setWireColor',
    value: function setWireColor(color) {
      this.wireColor = color;
      this.changed = 1;
      return this;
    }
  }, {
    key: 'setColors',
    value: function setColors(backgroundColor, wireColor) {
      this.setBackgroundColor(backgroundColor);
      this.setWireColor(wireColor);
      this.changed = 1;
      return this;
    }
  }, {
    key: 'setLineWidth',
    value: function setLineWidth(width) {
      this.lineWidth = width;
      this.changed = 1;
      return this;
    }
  }, {
    key: 'processPoints',
    value: function processPoints() {
      var $this = this;
      this.forEachPoint(function (point, x, y) {
        point.setRawPosition($this.getRawPosition(x, y));
      });
      this.forEachPoint(function (point) {
        point.calculateAbsolutePosition($this.rotation, $this.positionMatrix);
      });
    }
  }, {
    key: 'createPoints',
    value: function createPoints() {
      this.points = new Array(this.splittings.x);
      for (var x = 0; x < this.splittings.x; ++x) {
        this.points[x] = new Array(this.splittings.y);
        for (var y = 0; y < this.splittings.y; ++y) {
          this.points[x][y] = new _point2.default(x, y, this.amplitudeFunc);
        }
      }
    }
  }, {
    key: 'forEachPoint',
    value: function forEachPoint(func) {
      for (var x = 0; x < this.splittings.x; ++x) {
        for (var y = 0; y < this.splittings.y; ++y) {
          func(this.points[x][y], x, y);
        }
      }
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.wrapper.offsetWidth;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.wrapper.offsetHeight;
    }
  }, {
    key: 'refreshParamsCanvas',
    value: function refreshParamsCanvas() {
      this.canvas.width = this.getWidth();
      this.canvas.height = this.getHeight();
      this.context.fillStyle = this.backgroundColor;
      this.context.strokeStyle = this.wireColor;
      this.context.lineWidth = this.lineWidth;
    }
  }, {
    key: 'addAnimation',
    value: function addAnimation(func) {
      this.animations.push(func);
      return this;
    }
  }]);

  return WireFrameLandscape;
}();

exports.default = WireFrameLandscape;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map