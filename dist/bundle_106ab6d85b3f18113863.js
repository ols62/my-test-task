/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 47:
/***/ (() => {

var checkbox = document.getElementsByClassName('checkbox-css');
for (var i = 0; i < checkbox.length; i++) {
  var element = checkbox[i].getElementsByTagName('input');
  element[0].addEventListener('change', function (event) {
    if (event.target.checked) {
      this.parentElement.style.background = '#9E7D43';
      this.parentElement.style.color = '#FFFFFF';
    } else {
      this.parentElement.style.color = '#30261D';
      this.parentElement.style.background = '#F6F5F3';
    }
  });
}

/***/ }),

/***/ 95:
/***/ (() => {

var question = document.getElementsByClassName('question__text');
for (var i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    var active = false;
    for (var _i = 0; _i < question.length; _i++) {
      if (this.className.includes('question_active') && question[_i].className.includes('question_active')) {
        active = true;
        this.classList.toggle('question_active');
        if (this.nextElementSibling.style.display === 'block') {
          this.nextElementSibling.style.display = 'none';
        } else {
          this.nextElementSibling.style.display = 'block';
        }
      } else {
        question[_i].className = 'question__text';
        question[_i].nextElementSibling.style.display = 'none';
      }
    }
    if (!active) {
      this.className = 'question__text question_active';
      this.nextElementSibling.style.display = 'block';
    }
  });
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _pages_booking_checkbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _pages_booking_checkbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_booking_checkbox_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_questions_questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony import */ var _pages_questions_questions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_questions_questions__WEBPACK_IMPORTED_MODULE_1__);















})();

/******/ })()
;