/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createGoogleMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createGoogleMap */ \"./src/modules/createGoogleMap.js\");\n/* harmony import */ var _modules_showCoordinatesISSByText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showCoordinatesISSByText */ \"./src/modules/showCoordinatesISSByText.js\");\n/* harmony import */ var _modules_showCurrentTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showCurrentTime */ \"./src/modules/showCurrentTime.js\");\n/* harmony import */ var _modules_showAstronauts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showAstronauts */ \"./src/modules/showAstronauts.js\");\n// import returnCoordinatesISS from \"./modules/returnCoordinatesISS\";\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_createGoogleMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_showCoordinatesISSByText__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_showCurrentTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_showAstronauts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\nsetInterval(() => {\r\n    (0,_modules_showCoordinatesISSByText__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_modules_showCurrentTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    // showAstronauts();\r\n}, 5000);\r\n\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/index.js?");

/***/ }),

/***/ "./src/modules/createGoogleMap.js":
/*!****************************************!*\
  !*** ./src/modules/createGoogleMap.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createGoogleMap)\n/* harmony export */ });\n/* harmony import */ var _returnCoordinatesISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnCoordinatesISS */ \"./src/modules/returnCoordinatesISS.js\");\n\r\n\r\nfunction createGoogleMap() {\r\n    function initMap() {\r\n\r\n        let options = {\r\n            zoom: 2,\r\n            // this is random values:\r\n            center: {lat: 43.19, lng: 32.09}\r\n        };\r\n\r\n        let map = new google.maps.Map(document.querySelector('.google-map'), options);\r\n\r\n        let marker = new google.maps.Marker({\r\n            // this is random values:\r\n            position: {lat: 43.19, lng: 32.09},\r\n            map: map,\r\n            title: \"ISS is here now\"\r\n        });\r\n\r\n        refreshMap();    \r\n\r\n        async function refreshMap() {\r\n            let coordinates = await (0,_returnCoordinatesISS__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            \r\n            marker.setMap(null);\r\n            marker = null;\r\n    \r\n            map.setCenter(coordinates);\r\n    \r\n            marker = new google.maps.Marker({\r\n                position: coordinates,\r\n                map: map,\r\n                title: \"ISS is here now\"\r\n            });\r\n        }\r\n\r\n        setInterval(refreshMap, 5000);\r\n    }\r\n\r\n    globalThis.initMap = initMap;\r\n}\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/modules/createGoogleMap.js?");

/***/ }),

/***/ "./src/modules/returnAstronautClass.js":
/*!*********************************************!*\
  !*** ./src/modules/returnAstronautClass.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnAstronautClass)\n/* harmony export */ });\nfunction returnAstronautClass() {\r\n    'use strict';\r\n\r\n    const Astronaut = class {\r\n        constructor(name) {\r\n            this.name = name;\r\n            this.cardElement = document.querySelector('.astronaut-card').cloneNode(true);\r\n        }\r\n\r\n        pushAstronautInDOM() {\r\n            const containerElement = document.querySelector('.astronauts-container');\r\n            const nameElement = this.cardElement.querySelector('[data-astronaut-name]');\r\n\r\n            nameElement.innerText = this.name;\r\n            containerElement.append(this.cardElement);\r\n            this.cardElement.removeAttribute('data-invisible');\r\n        }\r\n\r\n        removeAstronautFromDOM() {\r\n            this.cardElement.remove();\r\n        }\r\n    }\r\n\r\n    return Astronaut;\r\n}\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/modules/returnAstronautClass.js?");

/***/ }),

/***/ "./src/modules/returnCoordinatesISS.js":
/*!*********************************************!*\
  !*** ./src/modules/returnCoordinatesISS.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnCoordinatesISS)\n/* harmony export */ });\nasync function returnCoordinatesISS() {\r\n    'use strict';\r\n    \r\n    let request = await fetch(\"http://api.open-notify.org/iss-now.json\");\r\n    request = await request.json();\r\n\r\n    let result = {\r\n        lat: Number(request.iss_position.latitude),\r\n        lng: Number(request.iss_position.longitude)\r\n    }\r\n    return result;\r\n}\r\n\r\n    // const longitudeElem = document.querySelector('.longitude');\r\n    // const latitudeElem = document.querySelector('.latitude');\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/modules/returnCoordinatesISS.js?");

/***/ }),

/***/ "./src/modules/showAstronauts.js":
/*!***************************************!*\
  !*** ./src/modules/showAstronauts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showAstronauts)\n/* harmony export */ });\n/* harmony import */ var _returnAstronautClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnAstronautClass */ \"./src/modules/returnAstronautClass.js\");\n\r\n\r\nasync function showAstronauts() {\r\n    'use strict';\r\n\r\n    const Astronaut = (0,_returnAstronautClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const astronautsOnISS = await returnAstronautsOnISS();\r\n    const astronautCountElement = document.querySelector('[data-astronaut-count]');\r\n    let showedAstronautsNames = [];\r\n    let showedAstronauts = [];\r\n\r\n    for (let elem of astronautsOnISS) {\r\n        if (!showedAstronautsNames.includes(elem)) {\r\n            let astronaut = new Astronaut(elem);\r\n            astronaut.pushAstronautInDOM();\r\n            showedAstronauts.push(astronaut);\r\n            showedAstronautsNames.push(astronaut.name);\r\n        }\r\n    }\r\n\r\n    // Удаление астронавтов, которых  уже нет на МКС.\r\n    for (let astronautObj of showedAstronauts) {\r\n        if (!astronautsOnISS.includes(astronautObj.name)) {\r\n            astronautObj.removeAstronautFromDOM();\r\n            let index = showedAstronauts.indexOf(astronautObj)\r\n            showedAstronauts.splice(index, 1);\r\n            showedAstronautsName.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    astronautCountElement.innerText = showedAstronauts.length;\r\n\r\n    async function returnAstronautsOnISS() {\r\n        let astronautsOnISS = [];\r\n        let request = await fetch('http://api.open-notify.org/astros.json');\r\n        request = await request.json();\r\n\r\n        for (let elem of request.people) {\r\n            if (elem.craft === 'ISS') {\r\n                astronautsOnISS.push(elem.name);\r\n            }\r\n        }\r\n\r\n        return astronautsOnISS;\r\n    }\r\n}\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/modules/showAstronauts.js?");

/***/ }),

/***/ "./src/modules/showCoordinatesISSByText.js":
/*!*************************************************!*\
  !*** ./src/modules/showCoordinatesISSByText.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCoordinatesISSByText)\n/* harmony export */ });\n/* harmony import */ var _returnCoordinatesISS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnCoordinatesISS */ \"./src/modules/returnCoordinatesISS.js\");\n\r\n\r\nasync function showCoordinatesISSByText() {\r\n    'use strict';\r\n\r\n    const coordinates = await (0,_returnCoordinatesISS__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const latitude = document.querySelector('.latitude');\r\n    const longitude = document.querySelector('.longitude');\r\n\r\n    latitude.innerText = coordinates.lat;\r\n    longitude.innerText = coordinates.lng;\r\n}\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/modules/showCoordinatesISSByText.js?");

/***/ }),

/***/ "./src/modules/showCurrentTime.js":
/*!****************************************!*\
  !*** ./src/modules/showCurrentTime.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCurrentTime)\n/* harmony export */ });\nfunction showCurrentTime() {\r\n    'use strict';\r\n\r\n    const date = new Date();\r\n\r\n    const dateElem = document.querySelector('.date');\r\n    const timeElem = document.querySelector('.time');\r\n\r\n    const currentDateString = `${getTextDayOfWeek()}, ${date.getDate()} ${getTextMonth()} ${date.getFullYear()}`;\r\n    const currentTimeString = `${date.getHours()}:${date.getMinutes()}`;\r\n\r\n    if (dateElem.innerText !== currentDateString) {\r\n        dateElem.innerText = currentDateString;\r\n    }\r\n\r\n    if (timeElem.innerText !== currentTimeString) {\r\n        timeElem.innerText = currentTimeString;\r\n    }\r\n    \r\n    function getTextDayOfWeek() {\r\n        switch(date.getDay()) {\r\n            case 0: return 'Sunday';\r\n            case 1: return 'Monday';\r\n            case 2: return 'Tuesday';\r\n            case 3: return 'Wednesday';\r\n            case 4: return 'Thursday';\r\n            case 5: return 'Friday';\r\n            case 6: return 'Saturday';\r\n        }\r\n    }\r\n\r\n    function getTextMonth() {\r\n        switch(date.getMonth()) {\r\n            case 0: return 'Jan';\r\n            case 1: return 'Feb';\r\n            case 2: return 'Mar';\r\n            case 3: return 'Apr';\r\n            case 4: return 'May';\r\n            case 5: return 'Jun';\r\n            case 6: return 'Jul';\r\n            case 7: return 'Aug';\r\n            case 8: return 'Sep';\r\n            case 9: return 'Oct';\r\n            case 10: return 'Nov';\r\n            case 11: return 'Dec';\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack://cleveload-trainee-test-task/./src/modules/showCurrentTime.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;