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

function add(a) {
  console.log(a * 2);
  return a * 2;
}
const subtract = add(2);
console.log(subtract);
window.addEventListener("DOMContentLoaded", getLocation());

})();

/******/ })()
;
//# sourceMappingURL=main.js.map