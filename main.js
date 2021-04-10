/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "setTime": () => (/* binding */ setTime)
/* harmony export */ });
/* harmony import */ var _getElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElement.js */ "./src/getElement.js");

function getDate() {
  const html = (0,_getElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(".weather-info-date");
  const today = new Date();
  const dd = String(today.getDate());
  const dEnding = addEnding(dd);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const mon = months[today.getMonth()];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = days[today.getDay()];
  const todaysDate = weekday + ", " + mon + " " + dEnding;
  html.textContent = todaysDate;
}

function addEnding(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

function getTime(params) {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  // time.toLocaleTimeString("en-US");
  return time;
}
function setTime(params) {
  let time = getTime();
  let html = (0,_getElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(".weather-info-time");
  html.textContent = time;
}
setTime();
getDate();



/***/ }),

/***/ "./src/getElement.js":
/*!***************************!*\
  !*** ./src/getElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function get(element) {
  const selection = document.querySelector(element);
  return selection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ "./src/date.js");



const location = async () => {
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
};

async function deniedLocation() {
  const city = "Belgium";
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  const url = "http://api.openweathermap.org/data/2.5/weather?q=";
  const response = await fetch(`${url}${city}${key}`, { mode: "cors" });
  const data = await response.json();
  console.log(data);
}

function successPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  changePosition(lat, lon);
}
async function changePosition(lat, lon) {
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${key}`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  console.log(data);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(successPosition, deniedLocation);
}

window.addEventListener("DOMContentLoaded", getLocation());

})();

/******/ })()
;
//# sourceMappingURL=main.js.map