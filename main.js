/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getGeocode(city){\r\n    let result = { lat:0 , lon:0};\r\n    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:\"cors\"});\r\n    const getGeocode = await response.json();\r\n    result.lat = await getGeocode[0].lat;\r\n    result.lon = await getGeocode[0].lon;\r\n    return result;\r\n}\r\nasync function getWeather(geo={lat:0,lon:0}){\r\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:\"cors\"});\r\n    const weather = await response.json();\r\n    console.log(weather.name);\r\n    return weather.weather[0].main;\r\n}\r\nasync function whatWeather(){\r\n    let city = prompt(\"enter city\");\r\n    const result = await getGeocode(city);\r\n    const weather = await getWeather(result);\r\n    console.log(weather);\r\n}\r\n\r\nwhatWeather();\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;