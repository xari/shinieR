/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./srcjs/time.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wojtekmaj/date-utils/dist/esm/index.js ***!
  \**************************************************************/
/*! exports provided: getYear, getMonth, getMonthHuman, getDate, getHours, getMinutes, getSeconds, getCenturyStart, getPreviousCenturyStart, getNextCenturyStart, getCenturyEnd, getPreviousCenturyEnd, getNextCenturyEnd, getCenturyRange, getDecadeStart, getPreviousDecadeStart, getNextDecadeStart, getDecadeEnd, getPreviousDecadeEnd, getNextDecadeEnd, getDecadeRange, getYearStart, getPreviousYearStart, getNextYearStart, getYearEnd, getPreviousYearEnd, getNextYearEnd, getYearRange, getMonthStart, getPreviousMonthStart, getNextMonthStart, getMonthEnd, getPreviousMonthEnd, getNextMonthEnd, getMonthRange, getDayStart, getPreviousDayStart, getNextDayStart, getDayEnd, getPreviousDayEnd, getNextDayEnd, getDayRange, getDaysInMonth, getHoursMinutes, getHoursMinutesSeconds, getISOLocalMonth, getISOLocalDate, getISOLocalDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return getYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthHuman", function() { return getMonthHuman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return getHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeconds", function() { return getSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyStart", function() { return getCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousCenturyStart", function() { return getPreviousCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextCenturyStart", function() { return getNextCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyEnd", function() { return getCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousCenturyEnd", function() { return getPreviousCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextCenturyEnd", function() { return getNextCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyRange", function() { return getCenturyRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeStart", function() { return getDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDecadeStart", function() { return getPreviousDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDecadeStart", function() { return getNextDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeEnd", function() { return getDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDecadeEnd", function() { return getPreviousDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDecadeEnd", function() { return getNextDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeRange", function() { return getDecadeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearStart", function() { return getYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousYearStart", function() { return getPreviousYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextYearStart", function() { return getNextYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearEnd", function() { return getYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousYearEnd", function() { return getPreviousYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextYearEnd", function() { return getNextYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearRange", function() { return getYearRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthStart", function() { return getMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthStart", function() { return getPreviousMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthStart", function() { return getNextMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthEnd", function() { return getMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthEnd", function() { return getPreviousMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthEnd", function() { return getNextMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthRange", function() { return getMonthRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayStart", function() { return getDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDayStart", function() { return getPreviousDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDayStart", function() { return getNextDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayEnd", function() { return getDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDayEnd", function() { return getPreviousDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDayEnd", function() { return getNextDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayRange", function() { return getDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutes", function() { return getHoursMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutesSeconds", function() { return getHoursMinutesSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalMonth", function() { return getISOLocalMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalDate", function() { return getISOLocalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalDateTime", function() { return getISOLocalDateTime; });
/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}

function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}

function makeGetRange(functions) {
  return function makeGetRangeInternal(date) {
    return functions.map(function (fn) {
      return fn(date);
    });
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */

/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */


function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */

function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }

  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */

function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }

  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */

function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */

function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var hoursString = datePieces[0];
      var hours = parseInt(hoursString, 10);

      if (!isNaN(hours)) {
        return hours;
      }
    }
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */

function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var minutesString = datePieces[1] || 0;
      var minutes = parseInt(minutesString, 10);

      if (!isNaN(minutes)) {
        return minutes;
      }
    }
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */

function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var secondsString = datePieces[2] || 0;
      var seconds = parseInt(secondsString, 10);

      if (!isNaN(seconds)) {
        return seconds;
      }
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Century
 */

function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);
/**
 * Decade
 */

function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);
/**
 * Year
 */

function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange([getYearStart, getYearEnd]);
/**
 * Month
 */

function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
/**
 * Day
 */

function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange([getDayStart, getDayEnd]);
/**
 * Other
 */

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */

function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

function padStart(num) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return "0000".concat(num).slice(-val);
}

function getHoursMinutes(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  return "".concat(hours, ":").concat(minutes);
}
function getHoursMinutesSeconds(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  var seconds = padStart(getSeconds(date));
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */

function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */

function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}
function getISOLocalDateTime(date) {
  return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-clock/dist/Clock.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-clock/dist/Clock.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-clock {\n  display: block;\n  position: relative;\n}\n.react-clock,\n.react-clock *,\n.react-clock *:before,\n.react-clock *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-clock__face {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid black;\n  border-radius: 50%;\n}\n.react-clock__hand {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__hand__body {\n  position: absolute;\n  background-color: black;\n  transform: translateX(-50%);\n}\n.react-clock__mark {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__mark__body {\n  position: absolute;\n  background-color: black;\n  transform: translateX(-50%);\n}\n.react-clock__mark__number {\n  position: absolute;\n  left: -40px;\n  width: 80px;\n  text-align: center;\n}\n.react-clock__second-hand__body {\n  background-color: red;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-time-picker/dist/TimePicker.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-time-picker/dist/TimePicker.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-time-picker {\n  display: inline-flex;\n  position: relative;\n}\n.react-time-picker,\n.react-time-picker *,\n.react-time-picker *:before,\n.react-time-picker *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.react-time-picker--disabled {\n  background-color: #f0f0f0;\n  color: #6d6d6d;\n}\n.react-time-picker__wrapper {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  border: thin solid gray;\n}\n.react-time-picker__inputGroup {\n  min-width: calc((4px * 3) +  0.54em * 6  +  0.217em * 2);\n  flex-grow: 1;\n  padding: 0 2px;\n  box-sizing: content-box;\n}\n.react-time-picker__inputGroup__divider {\n  padding: 1px 0;\n  white-space: pre;\n}\n.react-time-picker__inputGroup__input {\n  min-width: 0.54em;\n  height: 100%;\n  position: relative;\n  padding: 0 1px;\n  border: 0;\n  background: none;\n  font: inherit;\n  box-sizing: content-box;\n  -moz-appearance: textfield;\n}\n.react-time-picker__inputGroup__input::-webkit-outer-spin-button,\n.react-time-picker__inputGroup__input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.react-time-picker__inputGroup__input:invalid {\n  background: rgba(255, 0, 0, 0.1);\n}\n.react-time-picker__inputGroup__input--hasLeadingZero {\n  margin-left: -0.54em;\n  padding-left: calc(1px +  0.54em);\n}\n.react-time-picker__inputGroup__amPm {\n  font: inherit;\n  -moz-appearance: menulist;\n}\n.react-time-picker__button {\n  border: 0;\n  background: transparent;\n  padding: 4px 6px;\n}\n.react-time-picker__button:enabled {\n  cursor: pointer;\n}\n.react-time-picker__button:enabled:hover .react-time-picker__button__icon,\n.react-time-picker__button:enabled:focus .react-time-picker__button__icon {\n  stroke: #0078d7;\n}\n.react-time-picker__button:disabled .react-time-picker__button__icon {\n  stroke: #6d6d6d;\n}\n.react-time-picker__button svg {\n  display: inherit;\n}\n.react-time-picker__clock {\n  width: 200px;\n  height: 200px;\n  max-width: 100vw;\n  padding: 25px;\n  background-color: white;\n  border: thin solid #a0a096;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n}\n.react-time-picker__clock--closed {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/detect-element-overflow/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/detect-element-overflow/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRect = function getRect(element) {
  return element.getBoundingClientRect();
};

var detectElementOverflow = function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return getRect(element).top < getRect(container).top;
    },

    get collidedBottom() {
      return getRect(element).bottom > getRect(container).bottom;
    },

    get collidedLeft() {
      return getRect(element).left < getRect(container).left;
    },

    get collidedRight() {
      return getRect(element).right > getRect(container).right;
    },

    get overflowTop() {
      return getRect(container).top - getRect(element).top;
    },

    get overflowBottom() {
      return getRect(element).bottom - getRect(container).bottom;
    },

    get overflowLeft() {
      return getRect(container).left - getRect(element).left;
    },

    get overflowRight() {
      return getRect(element).right - getRect(container).right;
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (detectElementOverflow);

/***/ }),

/***/ "./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: getUserLocales, getUserLocale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocales", function() { return getUserLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return getUserLocale; });
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.once */ "./node_modules/lodash.once/index.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);


function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
}

function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
}

function getUserLocalesInternal() {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList = languageList.concat(window.navigator.languages);
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
}

var getUserLocales = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getUserLocales()[0];
}

var getUserLocale = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocaleInternal);
/* harmony default export */ __webpack_exports__["default"] = (getUserLocale);

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */

function before(n, func) {
  var result;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  n = toInteger(n);
  return function () {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }

    if (n <= 1) {
      func = undefined;
    }

    return result;
  };
}
/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */


function once(func) {
  return before(2, func);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */


function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber(value);

  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */


function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = once;

/***/ }),

/***/ "./node_modules/make-event-props/dist/entry.js":
/*!*****************************************************!*\
  !*** ./node_modules/make-event-props/dist/entry.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.focusEvents = exports.keyboardEvents = exports.touchEvents = exports.mouseEvents = void 0; // As defined on the list of supported mouse events: https://reactjs.org/docs/events.html#mouse-events

var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp']; // As defined on the list of supported touch events: https://reactjs.org/docs/events.html#touch-events

exports.mouseEvents = mouseEvents;
var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#keyboard-events

exports.touchEvents = touchEvents;
var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#focus-events

exports.keyboardEvents = keyboardEvents;
var focusEvents = ['onFocus', 'onBlur'];
/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */

exports.focusEvents = focusEvents;

var makeEventProps = function makeEventProps(props, getArgs) {
  var eventProps = {};
  [].concat(mouseEvents, touchEvents, keyboardEvents, focusEvents).forEach(function (eventName) {
    if (props[eventName]) {
      eventProps[eventName] = function (event) {
        return getArgs ? props[eventName](event, getArgs(eventName)) : props[eventName](event);
      };
    }
  });
  return eventProps;
};

var _default = makeEventProps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/merge-class-names/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/merge-class-names/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClassNames; });
function mergeClassNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(Boolean).join(' ');
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-clock/dist/Clock.css":
/*!*************************************************!*\
  !*** ./node_modules/react-clock/dist/Clock.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./Clock.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-clock/dist/Clock.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/react-clock/dist/Clock.js":
/*!************************************************!*\
  !*** ./node_modules/react-clock/dist/Clock.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Clock;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _Hand = _interopRequireDefault(__webpack_require__(/*! ./Hand */ "./node_modules/react-clock/dist/Hand.js"));

var _Mark = _interopRequireDefault(__webpack_require__(/*! ./Mark */ "./node_modules/react-clock/dist/Mark.js"));

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-clock/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-clock/dist/shared/propTypes.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function Clock(_ref) {
  var className = _ref.className,
      hourHandLength = _ref.hourHandLength,
      hourHandOppositeLength = _ref.hourHandOppositeLength,
      hourHandWidth = _ref.hourHandWidth,
      hourMarksLength = _ref.hourMarksLength,
      hourMarksWidth = _ref.hourMarksWidth,
      minuteHandLength = _ref.minuteHandLength,
      minuteHandOppositeLength = _ref.minuteHandOppositeLength,
      minuteHandWidth = _ref.minuteHandWidth,
      minuteMarksLength = _ref.minuteMarksLength,
      minuteMarksWidth = _ref.minuteMarksWidth,
      renderHourMarks = _ref.renderHourMarks,
      renderMinuteHand = _ref.renderMinuteHand,
      renderMinuteMarks = _ref.renderMinuteMarks,
      renderNumbers = _ref.renderNumbers,
      renderSecondHand = _ref.renderSecondHand,
      secondHandLength = _ref.secondHandLength,
      secondHandOppositeLength = _ref.secondHandOppositeLength,
      secondHandWidth = _ref.secondHandWidth,
      size = _ref.size,
      value = _ref.value;

  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    var minuteMarks = [];

    for (var i = 1; i <= 60; i += 1) {
      var isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(_react["default"].createElement(_Mark["default"], {
          key: "minute_".concat(i),
          angle: i * 6,
          length: minuteMarksLength,
          name: "minute",
          width: minuteMarksWidth
        }));
      }
    }

    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    var hourMarks = [];

    for (var i = 1; i <= 12; i += 1) {
      hourMarks.push(_react["default"].createElement(_Mark["default"], {
        key: "hour_".concat(i),
        angle: i * 30,
        length: hourMarksLength,
        name: "hour",
        number: renderNumbers ? i : null,
        width: hourMarksWidth
      }));
    }

    return hourMarks;
  }

  function renderFace() {
    return _react["default"].createElement("div", {
      className: "react-clock__face"
    }, renderMinuteMarksFn(), renderHourMarksFn());
  }

  function renderHourHandFn() {
    var angle = value ? (0, _dates.getHours)(value) * 30 + (0, _dates.getMinutes)(value) / 2 + (0, _dates.getSeconds)(value) / 600 : 0;
    return _react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: hourHandLength,
      name: "hour",
      oppositeLength: hourHandOppositeLength,
      width: hourHandWidth
    });
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    var angle = value ? (0, _dates.getHours)(value) * 360 + (0, _dates.getMinutes)(value) * 6 + (0, _dates.getSeconds)(value) / 10 : 0;
    return _react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: minuteHandLength,
      name: "minute",
      oppositeLength: minuteHandOppositeLength,
      width: minuteHandWidth
    });
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    var angle = value ? (0, _dates.getMinutes)(value) * 360 + (0, _dates.getSeconds)(value) * 6 : 0;
    return _react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: secondHandLength,
      name: "second",
      oppositeLength: secondHandOppositeLength,
      width: secondHandWidth
    });
  }

  return _react["default"].createElement("time", {
    className: (0, _mergeClassNames["default"])('react-clock', className),
    dateTime: value instanceof Date ? value.toISOString() : value,
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, renderFace(), renderHourHandFn(), renderMinuteHandFn(), renderSecondHandFn());
}

Clock.defaultProps = {
  hourHandLength: 50,
  hourHandWidth: 4,
  hourMarksLength: 10,
  hourMarksWidth: 3,
  minuteHandLength: 70,
  minuteHandWidth: 2,
  minuteMarksLength: 6,
  minuteMarksWidth: 1,
  renderHourMarks: true,
  renderMinuteHand: true,
  renderMinuteMarks: true,
  renderSecondHand: true,
  secondHandLength: 90,
  secondHandWidth: 1,
  size: 150
};
Clock.propTypes = {
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  hourHandLength: _propTypes2.isHandLength,
  hourHandOppositeLength: _propTypes2.isOppositeHandLength,
  hourHandWidth: _propTypes2.isHandWidth,
  hourMarksLength: _propTypes2.isMarkLength,
  hourMarksWidth: _propTypes2.isMarkWidth,
  minuteHandLength: _propTypes2.isHandLength,
  minuteHandOppositeLength: _propTypes2.isOppositeHandLength,
  minuteHandWidth: _propTypes2.isHandWidth,
  minuteMarksLength: _propTypes2.isMarkLength,
  minuteMarksWidth: _propTypes2.isMarkWidth,
  renderHourMarks: _propTypes["default"].bool,
  renderMinuteHand: _propTypes["default"].bool,
  renderMinuteMarks: _propTypes["default"].bool,
  renderNumbers: _propTypes["default"].bool,
  renderSecondHand: _propTypes["default"].bool,
  secondHandLength: _propTypes2.isHandLength,
  secondHandOppositeLength: _propTypes2.isOppositeHandLength,
  secondHandWidth: _propTypes2.isHandWidth,
  size: _propTypes["default"].number,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])
};

/***/ }),

/***/ "./node_modules/react-clock/dist/Hand.js":
/*!***********************************************!*\
  !*** ./node_modules/react-clock/dist/Hand.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hand;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-clock/dist/shared/propTypes.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function Hand(_ref) {
  var angle = _ref.angle,
      name = _ref.name,
      length = _ref.length,
      oppositeLength = _ref.oppositeLength,
      width = _ref.width;
  return _react["default"].createElement("div", {
    className: "react-clock__hand react-clock__".concat(name, "-hand"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, _react["default"].createElement("div", {
    className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"),
    style: {
      width: "".concat(width, "px"),
      top: "".concat(50 - length / 2, "%"),
      bottom: "".concat(50 - oppositeLength / 2, "%")
    }
  }));
}

Hand.defaultProps = {
  angle: 0,
  length: 100,
  oppositeLength: 10,
  width: 1
};
Hand.propTypes = {
  angle: _propTypes["default"].number,
  length: _propTypes2.isHandLength,
  name: _propTypes["default"].string.isRequired,
  oppositeLength: _propTypes2.isHandLength,
  width: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-clock/dist/Mark.js":
/*!***********************************************!*\
  !*** ./node_modules/react-clock/dist/Mark.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Mark;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-clock/dist/shared/propTypes.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function Mark(_ref) {
  var angle = _ref.angle,
      length = _ref.length,
      name = _ref.name,
      width = _ref.width,
      number = _ref.number;
  return _react["default"].createElement("div", {
    className: "react-clock__mark react-clock__".concat(name, "-mark"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, _react["default"].createElement("div", {
    className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"),
    style: {
      width: "".concat(width, "px"),
      top: 0,
      bottom: "".concat(100 - length / 2, "%")
    }
  }), number && _react["default"].createElement("div", {
    className: "react-clock__mark__number",
    style: {
      transform: "rotate(-".concat(angle, "deg)"),
      top: "".concat(length / 2, "%")
    }
  }, number));
}

Mark.defaultProps = {
  angle: 0,
  length: 10,
  width: 1
};
Mark.propTypes = {
  angle: _propTypes["default"].number,
  length: _propTypes2.isMarkLength,
  name: _propTypes["default"].string.isRequired,
  number: _propTypes["default"].number,
  width: _propTypes2.isMarkWidth
};

/***/ }),

/***/ "./node_modules/react-clock/dist/entry.nostyle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-clock/dist/entry.nostyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Clock", {
  enumerable: true,
  get: function get() {
    return _Clock["default"];
  }
});
exports["default"] = void 0;

var _Clock = _interopRequireDefault(__webpack_require__(/*! ./Clock */ "./node_modules/react-clock/dist/Clock.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var _default = _Clock["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-clock/dist/shared/dates.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-clock/dist/shared/dates.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHours = getHours;
exports.getMinutes = getMinutes;
exports.getSeconds = getSeconds;
var hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;
var hourRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9])$/;

function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    var hourString = date.split(':')[0];
    return parseInt(hourString, 10);
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}

function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    var minuteString = date.split(':')[1];
    return parseInt(minuteString, 10);
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}

function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    if (hourRegExp.test(date)) {
      var secondString = date.split(':')[2];
      return parseInt(secondString, 10);
    }

    if (hourOptionalSecondsRegExp.test(date)) {
      return 0;
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}

/***/ }),

/***/ "./node_modules/react-clock/dist/shared/propTypes.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-clock/dist/shared/propTypes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMarkWidth = exports.isMarkLength = exports.isHandWidth = exports.isOppositeHandLength = exports.isHandLength = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-clock/dist/shared/utils.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var isNumberBetween = function isNumberBetween(min, max) {
  return function (props, propName, componentName) {
    var value = props[propName];

    if ((0, _utils.isDefined)(value)) {
      if (typeof value !== 'number') {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(value), "` supplied to `").concat(componentName, "`, expected `number`."));
      }

      if (value < min || value > max) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(value), "` supplied to `").concat(componentName, "`, length must be between ").concat(min, " and ").concat(max, "."));
      }
    } // Everything is fine


    return null;
  };
};

var isHandLength = isNumberBetween(0, 100);
exports.isHandLength = isHandLength;
var isOppositeHandLength = isNumberBetween(-100, 100);
exports.isOppositeHandLength = isOppositeHandLength;

var isHandWidth = function isHandWidth(props, propName, componentName) {
  var width = props[propName];

  if ((0, _utils.isDefined)(width)) {
    if (typeof width !== 'number') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(width), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (width < 0) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(width), "` supplied to `").concat(componentName, "`, width must be greater or equal to 0."));
    }
  } // Everything is fine


  return null;
};

exports.isHandWidth = isHandWidth;
var isMarkLength = isHandLength;
exports.isMarkLength = isMarkLength;
var isMarkWidth = isHandWidth;
exports.isMarkWidth = isMarkWidth;

/***/ }),

/***/ "./node_modules/react-clock/dist/shared/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-clock/dist/shared/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefined = void 0;
/* eslint-disable import/prefer-default-export */

/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */

var isDefined = function isDefined(variable) {
  return typeof variable !== 'undefined';
};

exports.isDefined = isDefined;

/***/ }),

/***/ "./node_modules/react-fit/dist/esm/Fit.js":
/*!************************************************!*\
  !*** ./node_modules/react-fit/dist/esm/Fit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! detect-element-overflow */ "./node_modules/detect-element-overflow/dist/esm/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-fit/dist/esm/shared/utils.js");
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}






var isBrowser = typeof window !== 'undefined';
var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
}

function findScrollContainer(element) {
  if (!element) {
    return undefined;
  }

  var parent = element.parentElement;

  while (parent) {
    var _window$getComputedSt = window.getComputedStyle(parent),
        overflow = _window$getComputedSt.overflow;

    if (overflow.split(' ').every(function (o) {
      return o === 'auto' || o === 'scroll';
    })) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
}

function alignAxis(_ref) {
  var axis = _ref.axis,
      container = _ref.container,
      element = _ref.element,
      invertAxis = _ref.invertAxis,
      secondary = _ref.secondary,
      scrollContainer = _ref.scrollContainer,
      spacing = _ref.spacing;
  var style = window.getComputedStyle(element);
  var parent = container.parentElement;
  var parentCollisions = Object(detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__["default"])(parent, scrollContainer);
  var isX = axis === 'x';
  var startProperty = isX ? 'left' : 'top';
  var endProperty = isX ? 'right' : 'bottom';
  var sizeProperty = isX ? 'width' : 'height';
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var scrollProperty = "scroll".concat(capitalize(startProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scroll = scrollContainer[scrollProperty];
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var availableStartSpace = -parentCollisions[overflowStartProperty] - spacing + scroll;
  var availableEndSpace = -parentCollisions[overflowEndProperty] - spacing - scroll - scrollbarWidth;

  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }

  var offsetSize = element[offsetSizeProperty];

  var displayStart = function displayStart() {
    element.style[startProperty] = 'unset';
    element.style[endProperty] = secondary ? '0' : '100%';
  };

  var displayEnd = function displayEnd() {
    element.style[startProperty] = secondary ? '0' : '100%';
    element.style[endProperty] = 'unset';
  };

  var displayIfFits = function displayIfFits(availableSpace, display) {
    var fits = offsetSize <= availableSpace;

    if (fits) {
      display();
    }

    return fits;
  };

  var displayStartIfFits = function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  };

  var displayEndIfFits = function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  };

  var displayWhereverShrinkedFits = function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var minSize = style[minSizeProperty] && parseInt(style[minSizeProperty], 10);

    var shrinkToSize = function shrinkToSize(size) {
      if (minSize && size < minSize) {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])("<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      }

      var newSize = Math.max(size, minSize || 0);
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])("<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    };

    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  };

  var fits;

  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }

  if (!fits) {
    displayWhereverShrinkedFits();
  }
}

function alignMainAxis(args) {
  alignAxis(args);
}

function alignSecondaryAxis(args) {
  alignAxis(_objectSpread({}, args, {
    axis: args.axis === 'x' ? 'y' : 'x',
    secondary: true
  }));
}

var alignBothAxis = function alignBothAxis(args) {
  var invertAxis = args.invertAxis,
      invertSecondaryAxis = args.invertSecondaryAxis,
      commonArgs = _objectWithoutProperties(args, ["invertAxis", "invertSecondaryAxis"]);

  alignMainAxis(_objectSpread({}, commonArgs, {
    invertAxis: invertAxis
  }));
  alignSecondaryAxis(_objectSpread({}, commonArgs, {
    invertAxis: invertSecondaryAxis
  }));
};

var Fit = /*#__PURE__*/function (_Component) {
  _inherits(Fit, _Component);

  function Fit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Fit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Fit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onMutation", function () {
      _this.fit();
    });

    _defineProperty(_assertThisInitialized(_this), "mutationObserver", isMutationObserverSupported && new MutationObserver(_this.onMutation));

    _defineProperty(_assertThisInitialized(_this), "fit", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          scrollContainer = _assertThisInitialize.scrollContainer,
          container = _assertThisInitialize.container,
          element = _assertThisInitialize.element;

      if (!element) {
        return;
      }

      var elementWidth = element.clientWidth;
      var elementHeight = element.clientHeight; // No need to recalculate - already did that for current dimensions

      if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
        return;
      } // Save the dimensions so that we know we don't need to repeat the function if unchanged


      _this.elementWidth = elementWidth;
      _this.elementHeight = elementHeight;
      var parent = container.parentElement;
      /**
       * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */

      var style = window.getComputedStyle(element);
      var position = style.position;

      if (position !== 'absolute') {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('<Fit />\'s child does not have absolute position. You should apply `position: absolute` to it.');
        element.style.position = 'absolute';
      }
      /**
       * We need to ensure that <Fit />'s parent has a relative position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var parentStyle = window.getComputedStyle(parent);
      var parentPosition = parentStyle.position;

      if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('<Fit />\'s parent does not have relative position. You should apply `position: relative` to it.');
        parent.style.position = 'relative';
      }

      var _this$props = _this.props,
          invertAxis = _this$props.invertAxis,
          invertSecondaryAxis = _this$props.invertSecondaryAxis,
          mainAxis = _this$props.mainAxis,
          spacing = _this$props.spacing;
      alignBothAxis({
        container: container,
        element: element,
        invertAxis: invertAxis,
        invertSecondaryAxis: invertSecondaryAxis,
        axis: mainAxis,
        scrollContainer: scrollContainer,
        spacing: spacing
      });
    });

    return _this;
  }

  _createClass(Fit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!isDisplayContentsSupported) {
        // eslint-disable-next-line react/no-find-dom-node
        var element = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this);
        this.container = element;
        this.element = element;
        this.scrollContainer = findScrollContainer(element);
      }

      this.fit();

      if (isMutationObserverSupported) {
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeFilter: ['class', 'style']
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);

      if (isDisplayContentsSupported) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: function ref(container) {
            _this2.container = container;
            var element = container && container.firstChild;
            _this2.element = element;
            _this2.scrollContainer = element && findScrollContainer(element);
          },
          style: {
            display: 'contents'
          }
        }, child);
      }

      return child;
    }
  }]);

  return Fit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Fit.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  invertAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  invertSecondaryAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  mainAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['x', 'y']),
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Fit.defaultProps = {
  mainAxis: 'y',
  spacing: 8
};

/***/ }),

/***/ "./node_modules/react-fit/dist/esm/shared/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-fit/dist/esm/shared/utils.js ***!
  \*********************************************************/
/*! exports provided: isProduction, warnOnDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnDev", function() { return warnOnDev; });
/**
 * Checks whether we're running on a production build or not.
 */
var isProduction = "development" === 'production';

var consoleOnDev = function consoleOnDev(method) {
  if (!isProduction) {
    var _console;

    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    } // eslint-disable-next-line no-console


    (_console = console)[method].apply(_console, message);
  }
};

var warnOnDev = function warnOnDev() {
  for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    message[_key2] = arguments[_key2];
  }

  return consoleOnDev.apply(void 0, ['warn'].concat(message));
};

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



/***/ }),

/***/ "./node_modules/react-time-picker/dist/Divider.js":
/*!********************************************************!*\
  !*** ./node_modules/react-time-picker/dist/Divider.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function Divider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("span", {
    className: "react-time-picker__inputGroup__divider"
  }, children);
}

Divider.propTypes = {
  children: _propTypes["default"].node
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Divider = _interopRequireDefault(__webpack_require__(/*! ./Divider */ "./node_modules/react-time-picker/dist/Divider.js"));

var _Hour12Input = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/Hour12Input */ "./node_modules/react-time-picker/dist/TimeInput/Hour12Input.js"));

var _Hour24Input = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/Hour24Input */ "./node_modules/react-time-picker/dist/TimeInput/Hour24Input.js"));

var _MinuteInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/MinuteInput */ "./node_modules/react-time-picker/dist/TimeInput/MinuteInput.js"));

var _SecondInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/SecondInput */ "./node_modules/react-time-picker/dist/TimeInput/SecondInput.js"));

var _NativeInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/NativeInput */ "./node_modules/react-time-picker/dist/TimeInput/NativeInput.js"));

var _AmPm = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/AmPm */ "./node_modules/react-time-picker/dist/TimeInput/AmPm.js"));

var _dateFormatter = __webpack_require__(/*! ./shared/dateFormatter */ "./node_modules/react-time-picker/dist/shared/dateFormatter.js");

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-time-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var allViews = ['hour', 'minute', 'second'];

function hoursAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1 !== date2 // TODO: Compare 11:22:00 and 11:22 properly
  ;
}

function isValidInput(element) {
  return element.tagName === 'INPUT' && element.type === 'number';
}

function findInput(element, property) {
  var nextElement = element;

  do {
    nextElement = nextElement[property];
  } while (nextElement && !isValidInput(nextElement));

  return nextElement;
}

function focus(element) {
  if (element) {
    element.focus();
  }
}

function _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function (el) {
    return "".concat(el, "+");
  }).join('|'), 'g');
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function (arr, element, index) {
    var divider = element && // eslint-disable-next-line react/no-array-index-key
    _react["default"].createElement(_Divider["default"], {
      key: "separator_".concat(index)
    }, element);

    var res = [].concat(_toConsumableArray(arr), [divider]);
    var currentMatch = matches && matches[index];

    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function (elementFunction) {
        return currentMatch.match(elementFunction);
      })];

      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        res.push(currentMatch);
      } else {
        res.push(renderFunction(currentMatch, index));
        usedFunctions.push(renderFunction);
      }
    }

    return res;
  }, []);
}

var TimeInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimeInput, _PureComponent);

  function TimeInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      amPm: null,
      hour: null,
      minute: null,
      second: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      if (event.target === event.currentTarget) {
        // Wrapper was directly clicked
        var firstInput = event.target.children[1];
        focus(firstInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case _this.divider:
          {
            event.preventDefault();
            var input = event.target;
            var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
            var nextInput = findInput(input, property);
            focus(nextInput);
            break;
          }

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      var key = event.key,
          input = event.target;
      var isNumberKey = !isNaN(parseInt(key, 10));

      if (!isNumberKey) {
        return;
      }

      var value = input.value;
      var max = input.getAttribute('max');
      /**
       * Given 1, the smallest possible number the user could type by adding another digit is 10.
       * 10 would be a valid value given max = 12, so we won't jump to the next input.
       * However, given 2, smallers possible number would be 20, and thus keeping the focus in
       * this field doesn't make sense.
       */

      if (value * 10 > max || value.length >= max.length) {
        var property = 'nextElementSibling';
        var nextInput = findInput(input, property);
        focus(nextInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      switch (name) {
        case 'hour12':
          {
            _this.setState(function (prevState) {
              return {
                hour: value ? (0, _dates.convert12to24)(parseInt(value, 10), prevState.amPm) : null
              };
            }, _this.onChangeExternal);

            break;
          }

        case 'hour24':
          {
            _this.setState({
              hour: value ? parseInt(value, 10) : null
            }, _this.onChangeExternal);

            break;
          }

        default:
          {
            _this.setState(_defineProperty({}, name, value ? parseInt(value, 10) : null), _this.onChangeExternal);
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeNative", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;

      if (!onChange) {
        return;
      }

      var processedValue = function () {
        if (!value) {
          return null;
        }

        return value;
      }();

      onChange(processedValue, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeAmPm", function (event) {
      var value = event.target.value;

      _this.setState({
        amPm: value
      }, _this.onChangeExternal);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeExternal", function () {
      var onChange = _this.props.onChange;

      if (!onChange) {
        return;
      }

      var formElements = [_this.hour12Input, _this.hour24Input, _this.minuteInput, _this.secondInput, _this.amPmInput].filter(Boolean);
      var formElementsWithoutSelect = formElements.slice(0, -1);
      var values = {};
      formElements.forEach(function (formElement) {
        values[formElement.name] = formElement.value;
      });

      if (formElementsWithoutSelect.every(function (formElement) {
        return !formElement.value;
      })) {
        onChange(null, false);
      } else if (formElements.every(function (formElement) {
        return formElement.value && formElement.checkValidity();
      })) {
        var hour = parseInt(values.hour24 || (0, _dates.convert12to24)(values.hour12, values.amPm) || 0, 10);
        var minute = parseInt(values.minute || 0, 10);
        var second = parseInt(values.second || 0, 10);

        var padStart = function padStart(num) {
          return "0".concat(num).slice(-2);
        };

        var proposedValue = "".concat(padStart(hour), ":").concat(padStart(minute), ":").concat(padStart(second));

        var processedValue = _this.getProcessedValue(proposedValue);

        onChange(processedValue, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour", function (currentMatch, index) {
      if (/h/.test(currentMatch)) {
        return _this.renderHour12(currentMatch, index);
      }

      return _this.renderHour24(currentMatch, index);
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour12", function (currentMatch, index) {
      var _this$props = _this.props,
          autoFocus = _this$props.autoFocus,
          hourAriaLabel = _this$props.hourAriaLabel,
          hourPlaceholder = _this$props.hourPlaceholder;
      var _this$state = _this.state,
          amPm = _this$state.amPm,
          hour = _this$state.hour;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_Hour12Input["default"], _extends({
        key: "hour12"
      }, _this.commonInputProps, {
        amPm: amPm,
        ariaLabel: hourAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: hourPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: hour
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour24", function (currentMatch, index) {
      var _this$props2 = _this.props,
          autoFocus = _this$props2.autoFocus,
          hourAriaLabel = _this$props2.hourAriaLabel,
          hourPlaceholder = _this$props2.hourPlaceholder;
      var hour = _this.state.hour;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_Hour24Input["default"], _extends({
        key: "hour24"
      }, _this.commonInputProps, {
        ariaLabel: hourAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: hourPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: hour
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMinute", function (currentMatch, index) {
      var _this$props3 = _this.props,
          autoFocus = _this$props3.autoFocus,
          minuteAriaLabel = _this$props3.minuteAriaLabel,
          minutePlaceholder = _this$props3.minutePlaceholder;
      var _this$state2 = _this.state,
          hour = _this$state2.hour,
          minute = _this$state2.minute;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_MinuteInput["default"], _extends({
        key: "minute"
      }, _this.commonInputProps, {
        ariaLabel: minuteAriaLabel,
        autoFocus: index === 0 && autoFocus,
        hour: hour,
        placeholder: minutePlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: minute
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSecond", function (currentMatch, index) {
      var _this$props4 = _this.props,
          autoFocus = _this$props4.autoFocus,
          secondAriaLabel = _this$props4.secondAriaLabel,
          secondPlaceholder = _this$props4.secondPlaceholder;
      var _this$state3 = _this.state,
          hour = _this$state3.hour,
          minute = _this$state3.minute,
          second = _this$state3.second;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch ? currentMatch.length === 2 : true;
      return _react["default"].createElement(_SecondInput["default"], _extends({
        key: "second"
      }, _this.commonInputProps, {
        ariaLabel: secondAriaLabel,
        autoFocus: index === 0 && autoFocus,
        hour: hour,
        minute: minute,
        placeholder: secondPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: second
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderAmPm", function (currentMatch, index) {
      var _this$props5 = _this.props,
          amPmAriaLabel = _this$props5.amPmAriaLabel,
          autoFocus = _this$props5.autoFocus,
          locale = _this$props5.locale;
      var amPm = _this.state.amPm;
      return _react["default"].createElement(_AmPm["default"], _extends({
        key: "ampm"
      }, _this.commonInputProps, {
        ariaLabel: amPmAriaLabel,
        autoFocus: index === 0 && autoFocus,
        locale: locale,
        onChange: _this.onChangeAmPm,
        value: amPm
      }));
    });

    return _this;
  }

  _createClass(TimeInput, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var nativeValueParser = this.nativeValueParser;
      return nativeValueParser(value);
    }
    /**
     * Returns value type that can be returned with currently applied settings.
     */

  }, {
    key: "renderCustomInputs",
    value: function renderCustomInputs() {
      var placeholder = this.placeholder;
      var format = this.props.format;
      var elementFunctions = {
        h: this.renderHour,
        H: this.renderHour,
        m: this.renderMinute,
        s: this.renderSecond,
        a: this.renderAmPm
      };
      var allowMultipleInstances = typeof format !== 'undefined';
      return _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
  }, {
    key: "renderNativeInput",
    value: function renderNativeInput() {
      var _this$props6 = this.props,
          disabled = _this$props6.disabled,
          maxTime = _this$props6.maxTime,
          minTime = _this$props6.minTime,
          name = _this$props6.name,
          nativeInputAriaLabel = _this$props6.nativeInputAriaLabel,
          required = _this$props6.required,
          value = _this$props6.value;
      return _react["default"].createElement(_NativeInput["default"], {
        key: "time",
        ariaLabel: nativeInputAriaLabel,
        disabled: disabled,
        maxTime: maxTime,
        minTime: minTime,
        name: name,
        onChange: this.onChangeNative,
        required: required,
        value: value,
        valueType: this.valueType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      /* eslint-disable jsx-a11y/click-events-have-key-events */

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return _react["default"].createElement("div", {
        className: className,
        onClick: this.onClick
      }, this.renderNativeInput(), this.renderCustomInputs());
    }
  }, {
    key: "formatTime",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      var options = {
        hour: 'numeric'
      };
      var level = allViews.indexOf(maxDetail);

      if (level >= 1) {
        options.minute = 'numeric';
      }

      if (level >= 2) {
        options.second = 'numeric';
      }

      return (0, _dateFormatter.getFormatter)(options);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "formatNumber",
    get: function get() {
      var options = {
        useGrouping: false
      };
      return (0, _dateFormatter.getFormatter)(options);
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return maxDetail;
    }
  }, {
    key: "nativeValueParser",
    get: function get() {
      switch (this.valueType) {
        case 'hour':
        case 'minute':
          return _dateUtils.getHoursMinutes;

        case 'second':
          return _dateUtils.getHoursMinutesSeconds;

        default:
          throw new Error('Invalid valueType.');
      }
    }
  }, {
    key: "divider",
    get: function get() {
      return this.placeholder.match(/[^0-9a-z]/i)[0];
    }
  }, {
    key: "placeholder",
    get: function get() {
      var _this$props7 = this.props,
          format = _this$props7.format,
          locale = _this$props7.locale;

      if (format) {
        return format;
      }

      var hour24 = 21;
      var hour12 = 9;
      var minute = 13;
      var second = 14;
      var date = new Date(2017, 0, 1, hour24, minute, second);
      return this.formatTime(locale, date).replace(this.formatNumber(locale, hour12), 'h').replace(this.formatNumber(locale, hour24), 'H').replace(this.formatNumber(locale, minute), 'mm').replace(this.formatNumber(locale, second), 'ss').replace(new RegExp((0, _utils.getAmPmLabels)(locale).join('|')), 'a');
    }
  }, {
    key: "commonInputProps",
    get: function get() {
      var _this2 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          disabled = _this$props8.disabled,
          isClockOpen = _this$props8.isClockOpen,
          maxTime = _this$props8.maxTime,
          minTime = _this$props8.minTime,
          required = _this$props8.required;
      return {
        className: className,
        disabled: disabled,
        itemRef: function itemRef(ref, name) {
          // Save a reference to each input field
          _this2["".concat(name, "Input")] = ref;
        },
        maxTime: maxTime,
        minTime: minTime,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        placeholder: '--',
        // This is only for showing validity when editing
        required: required || isClockOpen
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextState = {};
      /**
       * If isClockOpen flag has changed, we have to update it.
       * It's saved in state purely for use in getDerivedStateFromProps.
       */

      if (nextProps.isClockOpen !== prevState.isClockOpen) {
        nextState.isClockOpen = nextProps.isClockOpen;
      }
      /**
       * If the next value is different from the current one  (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var nextValue = nextProps.value;

      if ( // Toggling calendar visibility resets values
      nextState.isClockOpen // Flag was toggled
      || hoursAreDifferent(nextValue, prevState.value)) {
        if (nextValue) {
          var _convert24to = (0, _dates.convert24to12)((0, _dateUtils.getHours)(nextValue));

          var _convert24to2 = _slicedToArray(_convert24to, 2);

          nextState.amPm = _convert24to2[1];
          nextState.hour = (0, _dateUtils.getHours)(nextValue);
          nextState.minute = (0, _dateUtils.getMinutes)(nextValue);
          nextState.second = (0, _dateUtils.getSeconds)(nextValue);
        } else {
          nextState.amPm = null;
          nextState.hour = null;
          nextState.minute = null;
          nextState.second = null;
        }

        nextState.value = nextValue;
      }

      return nextState;
    }
  }]);

  return TimeInput;
}(_react.PureComponent);

exports["default"] = TimeInput;
TimeInput.defaultProps = {
  maxDetail: 'minute',
  name: 'time'
};
TimeInput.propTypes = {
  amPmAriaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  hourAriaLabel: _propTypes["default"].string,
  hourPlaceholder: _propTypes["default"].string,
  isClockOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDetail: _propTypes["default"].oneOf(allViews),
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minuteAriaLabel: _propTypes["default"].string,
  minutePlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  secondAriaLabel: _propTypes["default"].string,
  secondPlaceholder: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes2.isTime, _propTypes["default"].instanceOf(Date)])
};
(0, _reactLifecyclesCompat.polyfill)(TimeInput);

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/AmPm.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/AmPm.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AmPm;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-time-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function AmPm(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      locale = _ref.locale,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value;
  var amDisabled = minTime && (0, _dates.convert24to12)((0, _dateUtils.getHours)(minTime))[1] === 'pm';
  var pmDisabled = maxTime && (0, _dates.convert24to12)((0, _dateUtils.getHours)(maxTime))[1] === 'am';
  var name = 'amPm';

  var _getAmPmLabels = (0, _utils.getAmPmLabels)(locale),
      _getAmPmLabels2 = _slicedToArray(_getAmPmLabels, 2),
      amLabel = _getAmPmLabels2[0],
      pmLabel = _getAmPmLabels2[1];

  return _react["default"].createElement("select", {
    "aria-label": ariaLabel,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(name)),
    disabled: disabled,
    name: name,
    onChange: onChange,
    ref: function ref(_ref2) {
      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    value: value !== null ? value : ''
  }, !value && _react["default"].createElement("option", {
    value: ""
  }, "--"), _react["default"].createElement("option", {
    disabled: amDisabled,
    value: "am"
  }, amLabel), _react["default"].createElement("option", {
    disabled: pmDisabled,
    value: "pm"
  }, pmLabel));
}

AmPm.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOf(['am', 'pm'])
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/Hour12Input.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/Hour12Input.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hour12Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-time-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function Hour12Input(_ref) {
  var amPm = _ref.amPm,
      hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["amPm", "hour", "maxTime", "minTime", "value"]);

  var maxHour = (0, _utils.min)(12, maxTime && function () {
    var _convert24to = (0, _dates.convert24to12)((0, _dateUtils.getHours)(maxTime)),
        _convert24to2 = _slicedToArray(_convert24to, 2),
        maxHourResult = _convert24to2[0],
        maxAmPm = _convert24to2[1];

    if (maxAmPm !== amPm) {
      // pm is always after am, so we should ignore validation
      return null;
    }

    return maxHourResult;
  }());
  var minHour = (0, _utils.max)(1, minTime && function () {
    var _convert24to3 = (0, _dates.convert24to12)((0, _dateUtils.getHours)(minTime)),
        _convert24to4 = _slicedToArray(_convert24to3, 2),
        minHourResult = _convert24to4[0],
        minAmPm = _convert24to4[1];

    if ( // pm is always after am, so we should ignore validation
    minAmPm !== amPm // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
    || minHourResult === 12) {
      return null;
    }

    return minHourResult;
  }());
  var value12 = value !== null ? (0, _dates.convert24to12)(value)[0] : null;
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxHour,
    min: minHour,
    name: "hour12",
    nameForClass: "hour",
    value: value12
  }, otherProps));
}

Hour12Input.propTypes = {
  amPm: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/Hour24Input.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/Hour24Input.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hour24Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function Hour24Input(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime"]);

  var maxHour = (0, _utils.min)(23, maxTime && (0, _dateUtils.getHours)(maxTime));
  var minHour = (0, _utils.max)(0, minTime && (0, _dateUtils.getHours)(minTime));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxHour,
    min: minHour,
    name: "hour24",
    nameForClass: "hour"
  }, otherProps));
}

Hour24Input.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/Input.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/Input.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _updateInputWidth = _interopRequireWildcard(__webpack_require__(/*! update-input-width */ "./node_modules/update-input-width/dist/esm/index.js"));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable jsx-a11y/no-autofocus */


function onFocus(event) {
  var target = event.target;
  requestAnimationFrame(function () {
    return target.select();
  });
}

function updateInputWidthOnFontLoad(element) {
  if (!document.fonts) {
    return;
  }

  var font = (0, _updateInputWidth.getFontShorthand)(element);

  if (!font) {
    return;
  }

  var isFontLoaded = document.fonts.check(font);

  if (isFontLoaded) {
    return;
  }

  function onLoadingDone() {
    (0, _updateInputWidth["default"])(element);
  }

  document.fonts.addEventListener('loadingdone', onLoadingDone);
}

function getSelectionString() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.getSelection().toString();
}

function makeOnKeyPress(maxLength) {
  return function onKeyPress(event) {
    var value = event.target.value;
    var selection = getSelectionString();

    if (selection || value.length < maxLength) {
      return;
    }

    event.preventDefault();
  };
}

function Input(_ref) {
  var ariaLabel = _ref.ariaLabel,
      autoFocus = _ref.autoFocus,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      nameForClass = _ref.nameForClass,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      _onKeyUp = _ref.onKeyUp,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '--' : _ref$placeholder,
      required = _ref.required,
      showLeadingZeros = _ref.showLeadingZeros,
      step = _ref.step,
      value = _ref.value;
  var hasLeadingZero = showLeadingZeros && value !== null && value < 10;
  var maxLength = max.toString().length;
  return [hasLeadingZero && _react["default"].createElement("span", {
    key: "leadingZero",
    className: "".concat(className, "__leadingZero")
  }, "0"), _react["default"].createElement("input", {
    key: "input",
    "aria-label": ariaLabel,
    autoComplete: "off",
    autoFocus: autoFocus,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
    disabled: disabled,
    max: max,
    min: min,
    name: name,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    onKeyPress: makeOnKeyPress(maxLength),
    onKeyUp: function onKeyUp(event) {
      (0, _updateInputWidth["default"])(event.target);

      if (_onKeyUp) {
        _onKeyUp(event);
      }
    },
    placeholder: placeholder,
    ref: function ref(_ref2) {
      if (_ref2) {
        (0, _updateInputWidth["default"])(_ref2);
        updateInputWidthOnFontLoad(_ref2);
      }

      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    step: step,
    type: "number",
    value: value !== null ? value : ''
  })];
}

Input.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  step: _propTypes["default"].number,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/MinuteInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/MinuteInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MinuteInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function MinuteInput(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      _ref$showLeadingZeros = _ref.showLeadingZeros,
      showLeadingZeros = _ref$showLeadingZeros === void 0 ? true : _ref$showLeadingZeros,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime", "showLeadingZeros"]);

  function isSameHour(date) {
    return date && hour === (0, _dateUtils.getHours)(date);
  }

  var maxMinute = (0, _utils.min)(59, isSameHour(maxTime) && (0, _dateUtils.getMinutes)(maxTime));
  var minMinute = (0, _utils.max)(0, isSameHour(minTime) && (0, _dateUtils.getMinutes)(minTime));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxMinute,
    min: minMinute,
    name: "minute",
    showLeadingZeros: showLeadingZeros
  }, otherProps));
}

MinuteInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/NativeInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/NativeInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NativeInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function NativeInput(_ref) {
  var ariaLabel = _ref.ariaLabel,
      disabled = _ref.disabled,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      valueType = _ref.valueType;

  var nativeValueParser = function () {
    switch (valueType) {
      case 'hour':
        return function (receivedValue) {
          return "".concat((0, _dateUtils.getHours)(receivedValue), ":00");
        };

      case 'minute':
        return _dateUtils.getHoursMinutes;

      case 'second':
        return _dateUtils.getHoursMinutesSeconds;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  var step = function () {
    switch (valueType) {
      case 'hour':
        return 3600;

      case 'minute':
        return 60;

      case 'second':
        return 1;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return _react["default"].createElement("input", {
    "aria-label": ariaLabel,
    disabled: disabled,
    max: maxTime ? nativeValueParser(maxTime) : null,
    min: minTime ? nativeValueParser(minTime) : null,
    name: name,
    onChange: onChange,
    onFocus: stopPropagation,
    required: required,
    step: step,
    style: {
      visibility: 'hidden',
      position: 'absolute',
      top: '-9999px',
      left: '-9999px'
    },
    type: "time",
    value: value ? nativeValueParser(value) : ''
  });
}

NativeInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]),
  valueType: _propTypes2.isValueType
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/SecondInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/SecondInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SecondInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function SecondInput(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      minute = _ref.minute,
      _ref$showLeadingZeros = _ref.showLeadingZeros,
      showLeadingZeros = _ref$showLeadingZeros === void 0 ? true : _ref$showLeadingZeros,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime", "minute", "showLeadingZeros"]);

  function isSameMinute(date) {
    return date && hour === (0, _dateUtils.getHours)(date) && minute === (0, _dateUtils.getMinutes)(date);
  }

  var maxSecond = (0, _utils.min)(59, isSameMinute(maxTime) && (0, _dateUtils.getSeconds)(maxTime));
  var minSecond = (0, _utils.max)(0, isSameMinute(minTime) && (0, _dateUtils.getSeconds)(minTime));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxSecond,
    min: minSecond,
    name: "second",
    showLeadingZeros: showLeadingZeros
  }, otherProps));
}

SecondInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minute: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimePicker.css":
/*!************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimePicker.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./TimePicker.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-time-picker/dist/TimePicker.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimePicker.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimePicker.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _makeEventProps = _interopRequireDefault(__webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _reactFit = _interopRequireDefault(__webpack_require__(/*! react-fit */ "./node_modules/react-fit/dist/esm/Fit.js"));

var _entry = _interopRequireDefault(__webpack_require__(/*! react-clock/dist/entry.nostyle */ "./node_modules/react-clock/dist/entry.nostyle.js"));

var _TimeInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput */ "./node_modules/react-time-picker/dist/TimeInput.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var allViews = ['hour', 'minute', 'second'];
var baseClassName = 'react-time-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];

var TimePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimePicker, _PureComponent);

  function TimePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeClock();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var closeClock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        isOpen: !closeClock
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      _this.openClock();
    });

    _defineProperty(_assertThisInitialized(_this), "openClock", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeClock", function () {
      _this.setState(function (prevState) {
        if (!prevState.isOpen) {
          return null;
        }

        return {
          isOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleClock", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideActionListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          onClockClose = _this$props2.onClockClose,
          onClockOpen = _this$props2.onClockOpen;

      if (isOpen !== prevState.isOpen) {
        this.handleOutsideActionListeners();
        (0, _utils.callIfDefined)(isOpen ? onClockOpen : onClockClose);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideActionListeners(false);
    }
  }, {
    key: "handleOutsideActionListeners",
    value: function handleOutsideActionListeners(shouldListen) {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var shouldListenWithFallback = typeof shouldListen !== 'undefined' ? shouldListen : isOpen;
      var fnName = shouldListenWithFallback ? 'addEventListener' : 'removeEventListener';
      outsideActionEvents.forEach(function (eventName) {
        return document[fnName](eventName, _this2.onOutsideAction);
      });
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this$props3 = this.props,
          amPmAriaLabel = _this$props3.amPmAriaLabel,
          autoFocus = _this$props3.autoFocus,
          clearAriaLabel = _this$props3.clearAriaLabel,
          clearIcon = _this$props3.clearIcon,
          clockAriaLabel = _this$props3.clockAriaLabel,
          clockIcon = _this$props3.clockIcon,
          disableClock = _this$props3.disableClock,
          disabled = _this$props3.disabled,
          format = _this$props3.format,
          hourAriaLabel = _this$props3.hourAriaLabel,
          hourPlaceholder = _this$props3.hourPlaceholder,
          isOpen = _this$props3.isOpen,
          locale = _this$props3.locale,
          maxDetail = _this$props3.maxDetail,
          maxTime = _this$props3.maxTime,
          minTime = _this$props3.minTime,
          minuteAriaLabel = _this$props3.minuteAriaLabel,
          minutePlaceholder = _this$props3.minutePlaceholder,
          name = _this$props3.name,
          nativeInputAriaLabel = _this$props3.nativeInputAriaLabel,
          required = _this$props3.required,
          secondAriaLabel = _this$props3.secondAriaLabel,
          secondPlaceholder = _this$props3.secondPlaceholder,
          value = _this$props3.value;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 1),
          valueFrom = _concat2[0];

      var ariaLabelProps = {
        amPmAriaLabel: amPmAriaLabel,
        hourAriaLabel: hourAriaLabel,
        minuteAriaLabel: minuteAriaLabel,
        nativeInputAriaLabel: nativeInputAriaLabel,
        secondAriaLabel: secondAriaLabel
      };
      var placeholderProps = {
        hourPlaceholder: hourPlaceholder,
        minutePlaceholder: minutePlaceholder,
        secondPlaceholder: secondPlaceholder
      };
      return _react["default"].createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, _react["default"].createElement(_TimeInput["default"], _extends({}, ariaLabelProps, placeholderProps, {
        autoFocus: autoFocus,
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        format: format,
        isClockOpen: isOpen,
        locale: locale,
        maxDetail: maxDetail,
        maxTime: maxTime,
        minTime: minTime,
        name: name,
        onChange: this.onChange,
        placeholder: this.placeholder,
        required: required,
        value: valueFrom
      })), clearIcon !== null && _react["default"].createElement("button", {
        "aria-label": clearAriaLabel,
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: this.stopPropagation,
        type: "button"
      }, clearIcon), clockIcon !== null && !disableClock && _react["default"].createElement("button", {
        "aria-label": clockAriaLabel,
        className: "".concat(baseClassName, "__clock-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onBlur: this.resetValue,
        onClick: this.toggleClock,
        onFocus: this.stopPropagation,
        type: "button"
      }, clockIcon));
    }
  }, {
    key: "renderClock",
    value: function renderClock() {
      var disableClock = this.props.disableClock;
      var isOpen = this.state.isOpen;

      if (isOpen === null || disableClock) {
        return null;
      }

      var _this$props4 = this.props,
          clockClassName = _this$props4.clockClassName,
          timePickerClassName = _this$props4.className,
          maxDetail = _this$props4.maxDetail,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          clockProps = _objectWithoutProperties(_this$props4, ["clockClassName", "className", "maxDetail", "onChange", "value"]);

      var className = "".concat(baseClassName, "__clock");

      var _concat3 = [].concat(value),
          _concat4 = _slicedToArray(_concat3, 1),
          valueFrom = _concat4[0];

      var maxDetailIndex = allViews.indexOf(maxDetail);
      return _react["default"].createElement(_reactFit["default"], null, _react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'))
      }, _react["default"].createElement(_entry["default"], _extends({
        className: clockClassName,
        renderMinuteHand: maxDetailIndex > 0,
        renderSecondHand: maxDetailIndex > 1,
        value: valueFrom
      }, clockProps))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          disabled = _this$props5.disabled;
      var isOpen = this.state.isOpen;
      return _react["default"].createElement("div", _extends({
        className: (0, _mergeClassNames["default"])(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref) {
          if (!_ref) {
            return;
          }

          _this3.wrapper = _ref;
        }
      }), this.renderInputs(), this.renderClock());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps["default"])(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen !== prevState.isOpenProps) {
        return {
          isOpen: nextProps.isOpen,
          isOpenProps: nextProps.isOpen
        };
      }

      return null;
    }
  }]);

  return TimePicker;
}(_react.PureComponent);

exports["default"] = TimePicker;
var iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 19,
  height: 19,
  viewBox: '0 0 19 19',
  stroke: 'black',
  strokeWidth: 2
};

var ClockIcon = _react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clock-button__icon ").concat(baseClassName, "__button__icon"),
  fill: "none"
}), _react["default"].createElement("circle", {
  cx: "9.5",
  cy: "9.5",
  r: "7.5"
}), _react["default"].createElement("path", {
  d: "M9.5 4.5 v5 h4"
}));

var ClearIcon = _react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon")
}), _react["default"].createElement("line", {
  x1: "4",
  x2: "15",
  y1: "4",
  y2: "15"
}), _react["default"].createElement("line", {
  x1: "15",
  x2: "4",
  y1: "4",
  y2: "15"
}));

TimePicker.defaultProps = {
  clearIcon: ClearIcon,
  clockIcon: ClockIcon,
  isOpen: null,
  maxDetail: 'minute'
};

var isValue = _propTypes["default"].oneOfType([_propTypes2.isTime, _propTypes["default"].instanceOf(Date)]);

TimePicker.propTypes = {
  amPmAriaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clearAriaLabel: _propTypes["default"].string,
  clearIcon: _propTypes["default"].node,
  clockAriaLabel: _propTypes["default"].string,
  clockClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clockIcon: _propTypes["default"].node,
  disableClock: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  hourAriaLabel: _propTypes["default"].string,
  hourPlaceholder: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDetail: _propTypes["default"].oneOf(allViews),
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minuteAriaLabel: _propTypes["default"].string,
  minutePlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClockClose: _propTypes["default"].func,
  onClockOpen: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  secondAriaLabel: _propTypes["default"].string,
  secondPlaceholder: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)])
};
(0, _reactLifecyclesCompat.polyfill)(TimePicker);

/***/ }),

/***/ "./node_modules/react-time-picker/dist/entry.js":
/*!******************************************************!*\
  !*** ./node_modules/react-time-picker/dist/entry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! react-clock/dist/Clock.css */ "./node_modules/react-clock/dist/Clock.css");

var _TimePicker = _interopRequireDefault(__webpack_require__(/*! ./TimePicker */ "./node_modules/react-time-picker/dist/TimePicker.js"));

__webpack_require__(/*! ./TimePicker.css */ "./node_modules/react-time-picker/dist/TimePicker.css");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved


var _default = _TimePicker["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/dateFormatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/dateFormatter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = getFormatter;

var _getUserLocale = _interopRequireDefault(__webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* eslint-disable import/prefer-default-export */


function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/dates.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/dates.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert12to24 = convert12to24;
exports.convert24to12 = convert24to12;

function convert12to24(hour12, amPm) {
  var hour24 = parseInt(hour12, 10);

  if (amPm === 'am' && hour24 === 12) {
    hour24 = 0;
  } else if (amPm === 'pm' && hour24 < 12) {
    hour24 += 12;
  }

  return hour24;
}

function convert24to12(hour24) {
  var hour12 = hour24 % 12 || 12;
  return [hour12, hour24 < 12 ? 'am' : 'pm'];
}

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/propTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/propTypes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValueType = exports.isTime = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var allViews = ['hour', 'minute', 'second'];
var allValueTypes = [].concat(allViews);
var hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;

var isTime = function isTime(props, propName, componentName) {
  var time = props[propName];

  if (time) {
    if (!hourOptionalSecondsRegExp.test(time)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate === "undefined" ? "undefined" : _typeof(minDate), "` supplied to `").concat(componentName, "`, expected time in HH:mm(:ss) format."));
    }
  } // Everything is fine


  return null;
};

exports.isTime = isTime;

var isValueType = _propTypes["default"].oneOf(allValueTypes);

exports.isValueType = isValueType;

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callIfDefined = exports.getAmPmLabels = exports.max = exports.min = void 0;

var _dateFormatter = __webpack_require__(/*! ./dateFormatter */ "./node_modules/react-time-picker/dist/shared/dateFormatter.js");

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var isValidNumber = function isValidNumber(a) {
  return typeof a === 'number' && !isNaN(a);
};

var min = function min() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.min = min;

var max = function max() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.max = max;
var nines = ['9', '٩'];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, _dateFormatter.getFormatter)({
  hour: 'numeric'
});

var getAmPmLabels = function getAmPmLabels(locale) {
  var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
  var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));

  var _amString$split = amString.split(ninesRegExp),
      _amString$split2 = _slicedToArray(_amString$split, 2),
      am1 = _amString$split2[0],
      am2 = _amString$split2[1];

  var _pmString$split = pmString.split(ninesRegExp),
      _pmString$split2 = _slicedToArray(_pmString$split, 2),
      pm1 = _pmString$split2[0],
      pm2 = _pmString$split2[1];

  if (pm2 !== undefined) {
    // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
    if (am1 !== pm1) {
      return [am1, pm1].map(function (el) {
        return el.trim();
      });
    }

    if (am2 !== pm2) {
      return [am2, pm2].map(function (el) {
        return el.trim();
      });
    }
  } // Fallback


  return ['AM', 'PM'];
};
/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */


exports.getAmPmLabels = getAmPmLabels;

var callIfDefined = function callIfDefined(fn) {
  if (fn && typeof fn === 'function') {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    fn.apply(void 0, args);
  }
};

exports.callIfDefined = callIfDefined;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/update-input-width/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/update-input-width/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: getFontShorthand, measureText, updateInputWidth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontShorthand", function() { return getFontShorthand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureText", function() { return measureText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputWidth", function() { return updateInputWidth; });
var allowedVariants = ['normal', 'small-caps'];
/**
 * Gets font CSS shorthand property given element.
 *
 * @param {HTMLElement} element Element to get font CSS shorthand property from
 */

function getFontShorthand(element) {
  var style = window.getComputedStyle(element);

  if (style.font) {
    return style.font;
  }

  var isFontDefined = style['font-family'] !== '';

  if (!isFontDefined) {
    return '';
  }

  var fontVariant = allowedVariants.includes(style['font-variant']) ? style['font-variant'] : 'normal';
  return "".concat(style['font-style'], " ").concat(fontVariant, " ").concat(style['font-weight'], " ").concat(style['font-size'], " / ").concat(style['line-height'], " ").concat(style['font-family']);
}
/**
 * Measures text width given text and font CSS shorthand.
 *
 * @param {String} text Text to measure
 * @param {String} font Font to use when measuring the text
 */

function measureText(text, font) {
  var canvas = measureText.canvas || (measureText.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d'); // Context type not supported

  if (!context) {
    return null;
  }

  context.font = font;

  var _context$measureText = context.measureText(text),
      width = _context$measureText.width;

  return Math.ceil(width);
}
/**
 * Updates input element width to fit its content given input element
 * @param {HTMLInputElement} element
 */

function updateInputWidth(element) {
  if (typeof window === 'undefined') {
    return null;
  }

  var font = getFontShorthand(element);
  var text = element.value || element.placeholder;
  var width = measureText(text, font);

  if (width === null) {
    return null;
  }

  element.style.width = "".concat(width, "px");
  return width;
}
/* harmony default export */ __webpack_exports__["default"] = (updateInputWidth);

/***/ }),

/***/ "./srcjs/time.jsx":
/*!************************!*\
  !*** ./srcjs/time.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-time-picker */ "./node_modules/react-time-picker/dist/entry.js");
/* harmony import */ var react_time_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_time_picker__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var TimeInput = function TimeInput(_ref) {
  var configuration = _ref.configuration,
      value = _ref.value,
      setValue = _ref.setValue;
  return /*#__PURE__*/React.createElement(react_time_picker__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    onChange: function onChange(newTime) {
      return setValue(newTime);
    },
    value: value
  }, configuration));
};

Object(reactR__WEBPACK_IMPORTED_MODULE_0__["reactShinyInput"])('.time', 'shinieR.time', TimeInput);

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "react-dom":
/*!**********************************!*\
  !*** external "window.ReactDOM" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=time.js.map