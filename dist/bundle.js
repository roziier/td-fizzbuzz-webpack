/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _ret_multipleof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _small_big__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* module decorator */ module = __webpack_require__.hmd(module);
// import "./css/back.scss";





// STEP 1
const stepOne = () => {
  const numFromTo = (0,_my_range__WEBPACK_IMPORTED_MODULE_0__.default)(1, 100);
  (0,_ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 3, 5, "FizzBuzz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 3, "Fizz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 5, "Buzz");
  return numFromTo;
};

console.log(stepOne());

// STEP 2
const stepTwo = (val1, val2) => {
  const numFromTo = (0,_my_range__WEBPACK_IMPORTED_MODULE_0__.default)(val1, val2);
  (0,_ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 3, 5, "FizzBuzz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 3, "Fizz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 5, "Buzz");
  return numFromTo;
};

console.log(stepTwo(21, 25));

// STEP 3
const stepThree = () => {
  const numFromTo = (0,_my_range__WEBPACK_IMPORTED_MODULE_0__.default)(11, 44);
  (0,_ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 7, 11, "FooBoo");
  (0,_ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 3, 5, "FizzBuzz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 3, "Fizz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 5, "Buzz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 7, "Foo");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 11, "Boo");
  return numFromTo;
};

console.log(stepThree());

// STEP 4
const stepFour = () => {
  const numFromTo = (0,_my_range__WEBPACK_IMPORTED_MODULE_0__.default)(11, 97);
  (0,_small_big__WEBPACK_IMPORTED_MODULE_3__.default)(numFromTo, 16, 95, "Small", "Big");
  (0,_ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 7, 11, "FooBoo");
  (0,_ret_2multipleof__WEBPACK_IMPORTED_MODULE_2__.default)(numFromTo, 3, 5, "FizzBuzz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 3, "Fizz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 5, "Buzz");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 7, "Foo");
  (0,_ret_multipleof__WEBPACK_IMPORTED_MODULE_1__.default)(numFromTo, 11, "Boo");
  return numFromTo;
};

console.log(stepFour());

const allSteps = {
  one: stepOne,
  two: stepTwo,
  three: stepThree,
};

module.exports = allSteps;


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// CREATE ARRAY WITH DESIRE NUMBERS
const myRange = function (min, max) {
  let array = [];
  for (let index = min; index < max + 1; index++) {
    array.push(index);
  }
  return array;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myRange);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// CREATE SMALL AND BIG
const multipleOf = function (range, num, string) {
  range.map((x, i, arr) => {
    if (x % num === 0) {
      return (arr[i] = string);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (multipleOf);


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// CREATE ARRAY WITH DESIRE NUMBERS
const doubleMultipleOf = function (range, num1, num2, string) {
  range.map((x, i, arr) => {
    if (x % num1 === 0 && x % num2 === 0) {
      return (arr[i] = string);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doubleMultipleOf);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const smallBig = function (range, num1, num2, string1, string2) {
  range.map((x, i, arr) => {
    if (x < num1) {
      return (arr[i] = string1);
    } else if (x > num2) {
      return (arr[i] = string2);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smallBig);


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;