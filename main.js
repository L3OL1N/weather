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

eval("async function getGeocode(city){\r\n    try{\r\n        let result = { lat:0 , lon:0 };   \r\n        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:\"cors\"});\r\n        const getGeocode = await response.json();\r\n        result.lat = await getGeocode[0].lat;\r\n        result.lon = await getGeocode[0].lon;\r\n        return result;\r\n    }\r\n    catch(e){\r\n        console.log(e);\r\n    }\r\n \r\n}\r\nasync function getWeather(geo={lat:0,lon:0}){\r\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:\"cors\"});\r\n    const weather = await response.json();\r\n    console.log(weather);\r\n    return weather.weather[0];\r\n}\r\nasync function getGif(weather){\r\n    console.log(weather);\r\n    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=tuKdNPTJOA9Dwp8OTawwzHYS8iMH8mBa&s=${weather}`);\r\n    console.log(response);\r\n    const gifData = await response.json();\r\n    console.log(gifData);\r\n    return gifData.data.images.original.url;\r\n}\r\nasync function sumbitHandle(){\r\n    const load =  document.querySelector(\"#load\");\r\n    const main =  document.querySelector(\"main\");\r\n    main.style.display = \"none\";\r\n    load.style.display = \"block\";\r\n    const city = document.querySelector(\"form\").elements.city.value;\r\n    document.querySelector(\"h2\").innerHTML =  city;\r\n    const result = await getGeocode(city);\r\n    const weather = await getWeather(result);\r\n    document.querySelector(\"h3\").innerHTML = `${weather.main} <img id=\"icon\" src=\"http://openweathermap.org/img/wn/${weather.icon}@2x.png\">`;\r\n    const img = await getGif(weather.description);\r\n    document.querySelector(\"#gif\").src = img;\r\n    load.style.display = \"none\";\r\n    main.style.display = \"block\";\r\n}\r\n\r\nconst sumitBtn = document.querySelector(\"[type=button]\");\r\nsumitBtn.addEventListener(\"click\",sumbitHandle);\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

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