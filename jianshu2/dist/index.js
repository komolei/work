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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var a = __webpack_require__(1);
var a = __webpack_require__(2);
// var $ = require('./src/js/jquery.min.js')
__webpack_require__(3);
__webpack_require__(4);
// require('./src/sass/komo.scss');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var a = function a(sum) {
    return sum + 1;
};
var ul = "<div class=\"box\">I am a god!</div>";
// const div = $('<div>hih</div>').appendTo($('body'));
// $('ul').appendTo($("div"));
// const addUl = document.body.appendChild(ul);
// const addUl = document.body.innerHTML = ul;
// const cc = document.body.innerHTML = ul;
var I = "hello world!";

module.exports = I; //提供给内部其他的js文件使用的接口
// module.exports = document.body.innerHTML = ul;
// module.exports = addUl;
// module.exports = ul;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// var ul = require('./goTop');
// // document.body.innerHTML = ul;
// $('body').text(ul);
// ! function rem() {
//     let pageWidth = document.documentElement.clientWidth / 16;
//     let content = "html:{font-size:" + pageWidth + "px}"
//     console.log(pageWidth * 16);
//     console.log("one", pageWidth);
//     let style = document.createElement("style");
//     style.innerHTML = content;
//     document.head.appendChild(style);
// }()


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);