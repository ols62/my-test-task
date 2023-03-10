/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 395:
/***/ (() => {

(function () {
  var nav = document.querySelector('.header_nav_small');
  nav.addEventListener('click', function (event) {
    this.previousElementSibling.classList.toggle('nav_active');
    /*for (let element of this.children) {
      console.log(element);
      element.classList.toggle('active');
    }*/
    event.stopPropagation;
  });
})();

/***/ }),

/***/ 22:
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function () {
  var actieColor = '#9E7D43';
  var passiveColor = '#FFFFFF';
  var sliders = [];
  var mql = window.matchMedia('(max-width: 1080px)');
  var controlsClass = function controlsClass(carusel) {
    var sliderControls = {
      bntprev: 'prev',
      bntnext: 'next',
      leftarrow: 'left-arrow',
      rightarrow: 'right-arrow',
      container: 'marker_container',
      marker: 'slider_marker'
    };
    var caruselControls = {
      bntprev: 'carusel_prev',
      bntnext: 'carusel_next',
      leftarrow: 'carusel_left-arrow',
      rightarrow: 'carusel_right-arrow',
      container: 'carusel_marker_container',
      marker: 'carusel_marker'
    };
    return carusel ? caruselControls : sliderControls;
  };
  var addElements = function addElements(element) {
    ctrlClass = controlsClass(element.carusel);
    element.container.insertAdjacentHTML('beforeend', "<label class=\"".concat(ctrlClass.bntprev, "\"><span class=\"").concat(ctrlClass.leftarrow, "\"></span></label>"));
    element.container.insertAdjacentHTML('beforeend', "<label class=\"".concat(ctrlClass.bntnext, "\"><span class=\"").concat(ctrlClass.rightarrow, "\"></span></label>"));
    var div = document.createElement('div');
    var divContent = '';
    div.className = ctrlClass.container;
    for (var j = 0; j < element.count; j++) {
      divContent += "<div class=\"".concat(ctrlClass.marker, "\"></div>");
    }
    div.innerHTML = divContent;
    element.container.append(div);
    if (element.imgCount > element.count) {
      div = document.createElement('div');
      div.innerHTML = element.container.firstElementChild.firstElementChild.innerHTML;
      element.container.firstElementChild.prepend(div);
      div = document.createElement('div');
      div.innerHTML = element.container.firstElementChild.lastElementChild.innerHTML;
      element.container.firstElementChild.append(div);
    }
  };
  var getOffset = function getOffset(slider) {
    var viewWidth = slider.container.offsetWidth;
    var wrapWidth = viewWidth * slider.carusel * slider.imgCount;
    var imgWidth = viewWidth * slider.carusel;
    var offset = Math.round((imgWidth - (viewWidth - imgWidth) / 2) / wrapWidth * 100);
    return offset;
  };
  var moveSlide = function moveSlide(slider) {
    var percent = -100 / slider.imgCount * slider.current - slider.offset;
    slider.container.firstElementChild.style.transform = "translateX(".concat(percent, "%)");
  };
  var showText = function showText(slider, flag) {
    if (slider.text) {
      if (flag === 0) {
        slider.container.querySelectorAll('.slider_text')[slider.current].style.opacity = 0;
        slider.container.querySelectorAll('.slider_text')[slider.current].style.visibility = 'hidden';
      } else if (flag === 1) {
        slider.container.querySelectorAll('.slider_text')[slider.current].style.visibility = 'visible';
        slider.container.querySelectorAll('.slider_text')[slider.current].style.opacity = 1;
      }
    }
  };
  var pressButtonNext = function pressButtonNext() {
    for (var _i = 0, _sliders = sliders; _i < _sliders.length; _i++) {
      var slider = _sliders[_i];
      if (this.parentElement === slider.container) {
        this.parentElement.lastElementChild.children.item(slider.current).style.backgroundColor = passiveColor;
        showText(slider, 0);
        if (slider.current < slider.count - 1) {
          slider.current++;
        } else {
          slider.current = 0;
        }
        this.parentElement.lastElementChild.children.item(slider.current).style.backgroundColor = actieColor;
        moveSlide(slider);
        showText(slider, 1);
        break;
      }
    }
  };
  var pressButtonPrev = function pressButtonPrev() {
    for (var _i2 = 0, _sliders2 = sliders; _i2 < _sliders2.length; _i2++) {
      var slider = _sliders2[_i2];
      if (this.parentElement === slider.container) {
        this.parentElement.lastElementChild.children.item(slider.current).style.backgroundColor = passiveColor;
        showText(slider, 0);
        if (slider.current > 0) {
          slider.current--;
        } else {
          slider.current = slider.count - 1;
        }
        this.parentElement.lastElementChild.children.item(slider.current).style.backgroundColor = actieColor;
        moveSlide(slider);
        showText(slider, 1);
        break;
      }
    }
  };
  var initWrapper = function initWrapper(slider) {
    var element = {
      container: slider,
      carusel: 0,
      count: slider.getElementsByClassName('slide').length,
      imgCount: 0,
      current: 0,
      text: slider.getElementsByClassName('slider_text').length,
      offset: 0
    };
    var persent = 100;
    element.imgCount = element.count;
    if (slider.firstElementChild.classList.contains('carusel_slider')) {
      element.imgCount = element.count + 2;
      element.carusel = element.container.firstElementChild.offsetWidth / element.container.offsetWidth;
      persent = element.carusel * 100;
    }
    addElements(element);
    persent = persent * element.imgCount;
    element.container.firstElementChild.style.width = "".concat(persent, "%");
    if (element.carusel) {
      element.offset = getOffset(element);
    }
    element.container.firstElementChild.style.transform = "translateX(".concat(element.offset * -1, "%)");
    var btnPrev = slider.children[slider.children.length - 3];
    var btnNext = slider.children[slider.children.length - 2];
    btnNext.addEventListener('click', pressButtonNext);
    btnPrev.addEventListener('click', pressButtonPrev);
    slider.children[slider.children.length - 1].firstElementChild.style.backgroundColor = actieColor;
    if (element.text) {
      slider.querySelectorAll('.slider_text')[0].style.opacity = 1;
      slider.querySelectorAll('.slider_text')[0].style.visibility = 'visible';
    }
    return element;
  };
  var toggleControls = function toggleControls(slider, removelClass, addClass) {
    var elements = slider.container.firstElementChild.parentElement.children;
    elements.item(elements.length - 3).classList.remove(removelClass.bntprev);
    elements.item(elements.length - 3).classList.add(addClass.bntprev);
    elements.item(elements.length - 3).firstElementChild.classList.remove(removelClass.leftarrow);
    elements.item(elements.length - 3).firstElementChild.classList.add(addClass.leftarrow);
    elements.item(elements.length - 2).classList.remove(removelClass.bntnext);
    elements.item(elements.length - 2).classList.add(addClass.bntnext);
    elements.item(elements.length - 2).firstElementChild.classList.remove(removelClass.rightarrow);
    elements.item(elements.length - 2).firstElementChild.classList.add(addClass.rightarrow);
    elements.item(elements.length - 1).classList.remove(removelClass.container);
    elements.item(elements.length - 1).classList.add(addClass.container);
    var _iterator = _createForOfIteratorHelper(elements.item(elements.length - 1).children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var marker = _step.value;
        marker.classList.remove(removelClass.marker);
        marker.classList.add(addClass.marker);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var _iterator2 = _createForOfIteratorHelper(document.getElementsByClassName('slider')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var slider = _step2.value;
      sliders.push(initWrapper(slider));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var changeSlider = function changeSlider(e) {
    var _loop = function _loop() {
      var slider = _sliders3[_i3];
      slider.container.style.visibility = 'hidden';
      if (slider.carusel) {
        if (e.matches) {
          slider.container.firstElementChild.classList.remove('carusel_slider');
          slider.container.firstElementChild.style.width = 100 * slider.imgCount + '%';
          slider.container.firstElementChild.style.transform = 'translateX(-20%)';
          slider.offset = 20;
          toggleControls(slider, controlsClass(true), controlsClass(false));
        } else {
          slider.container.firstElementChild.classList.add('carusel_slider');
          slider.container.firstElementChild.style.width = slider.carusel * 100 * slider.imgCount + '%';
          slider.offset = getOffset(slider);
          slider.container.firstElementChild.style.transform = 'translateX(-' + slider.offset + '%)';
          toggleControls(slider, controlsClass(false), controlsClass(true));
        }
        moveSlide(slider);
      }
      setTimeout(function () {
        slider.container.style.visibility = 'visible';
      }, 350);
    };
    for (var _i3 = 0, _sliders3 = sliders; _i3 < _sliders3.length; _i3++) {
      _loop();
    }
  };
  changeSlider(mql);
  mql.addEventListener('change', changeSlider);
})();

/***/ }),

/***/ 892:
/***/ (() => {

(function () {
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
})();

/***/ }),

/***/ 290:
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
/* harmony import */ var _pages_common_slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _pages_common_slider_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_common_slider_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_main_booking_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(892);
/* harmony import */ var _pages_main_booking_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_main_booking_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_main_questions_questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(290);
/* harmony import */ var _pages_main_questions_questions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_main_questions_questions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_common_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(395);
/* harmony import */ var _pages_common_header_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_common_header_header__WEBPACK_IMPORTED_MODULE_3__);

















})();

/******/ })()
;