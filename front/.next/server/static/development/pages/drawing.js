module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/askUploadModal.js":
/*!**************************************!*\
  !*** ./components/askUploadModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./components/text.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
/* harmony import */ var _uiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uiComponent */ "./components/uiComponent.js");
var _jsxFileName = "C:\\Users\\shdnt\\Desktop\\today\\front\\components\\askUploadModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const AskUploadModal = () => {
  const {
    modalState
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.drawing);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const upload = () => {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["MODAL_OFF"]
    });
    next_Router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/upload');
  };

  const modalOff = () => {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["MODAL_OFF"]
    });
  };

  return __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#4e4e4e6b',
      zIndex: 99999,
      top: '0',
      display: `${modalState ? '' : 'none'}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    wsize: "400px",
    hsize: "250px",
    flexDirection: "column",
    style: {
      borderRadius: '10px',
      background: '#ccc'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "big",
    style: {
      margin: '30px',
      color: '#333'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "\uBC29\uAE08 \uC800\uC7A5\uD558\uC2E0 \uADF8\uB9BC\uC744", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), "\uC5C5\uB85C\uB4DC \uD558\uB7EC \uAC00\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"), __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      margin: '0',
      justifyContent: 'space-between'
    },
    wsize: "150px",
    hsize: "50px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: upload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\uC608"), __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: modalOff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\uC544\uB2C8\uC624"))));
};

/* harmony default export */ __webpack_exports__["default"] = (AskUploadModal);

/***/ }),

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas, PainterSize, Ul, Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainterSize", function() { return PainterSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Canvas = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.canvas.withConfig({
  displayName: "canvas__Canvas",
  componentId: "ffrlo-0"
})(["width:500px;height:500px;border-radius:15px;background:#ffffff;border:2px solid #eee;"]);
const PainterSize = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "canvas__PainterSize",
  componentId: "ffrlo-1"
})(["position:absolute;width:", "px;height:", "px;background:", ";border-radius:50%;transform:translateX(120px);"], ({
  size
}) => size || '2.5', ({
  size
}) => size || '2.5', ({
  color
}) => color || '#000000');
const Ul = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "canvas__Ul",
  componentId: "ffrlo-2"
})(["position:absolute;display:flex;flex-direction:row;bottom:-40px;padding:0;"]);
const Li = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "canvas__Li",
  componentId: "ffrlo-3"
})(["width:30px;height:30px;border-radius:50%;margin:5px;list-style:none;cursor:pointer;", ""], ({
  scale
}) => scale && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["&:hover{transform:scale(1.1);}"]));

/***/ }),

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: GalleryContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryContainer", function() { return GalleryContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GalleryContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "container__GalleryContainer",
  componentId: "sc-1pv9ren-0"
})(["margin-top:30px;display:grid;grid-template-rows:repeat(3,200px);grid-template-columns:repeat(2,300px);grid-gap:10px;margin-bottom:30px;", ""], ({
  mypage
}) => mypage && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["grid-template-rows:repeat(2,200px);"]));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "container__Container",
  componentId: "sc-1pv9ren-1"
})(["display:flex;justify-content:", ";align-items:", ";text-align:center;width:", ";height:", ";flex-direction:", ";"], ({
  justifyContent
}) => justifyContent || 'center', ({
  alignItems
}) => alignItems || 'center', ({
  wsize
}) => wsize || '100%', ({
  hsize
}) => hsize || '100%', ({
  flexDirection
}) => flexDirection || 'row');
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/text.js":
/*!****************************!*\
  !*** ./components/text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SIZES = {
  mini: '10px',
  tiny: '13px',
  small: '14px',
  medium: '15px',
  large: '16px',
  big: '19px',
  huge: '25px',
  massive: '50px',
  mainTitle: '35px'
};
const COLOR = {
  normal: '#707070'
};
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "text__Text",
  componentId: "g13gku-0"
})(["color:", ";font-size:", ";", ""], COLOR.normal, ({
  fontSize
}) => SIZES[fontSize] || `${SIZES.medium}`, ({
  bold
}) => bold && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:bold;"]));
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/uiComponent.js":
/*!***********************************!*\
  !*** ./components/uiComponent.js ***!
  \***********************************/
/*! exports provided: Button, NavUl, NavLi, Input, Textarea, Form, InputContainer, Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUl", function() { return NavUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLi", function() { return NavLi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "uiComponent__Button",
  componentId: "sc-4dqk1x-0"
})(["margin:10px;border:none;outline:none;width:300px;height:25px;background:#e0cfb6;border-radius:5px;transition:0.3s;color:#555;&:hover{background:#f0e1cc;}&:active{box-shadow:inset 2px 2px 3px;background:#e3d3bc;}"]);
const NavUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "uiComponent__NavUl",
  componentId: "sc-4dqk1x-1"
})(["position:fixed;z-index:99;top:0;display:flex;width:100%;height:30px;background:#1111116b;justify-content:center;align-items:center;margin:0;padding:25px 0;"]);
const NavLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "uiComponent__NavLi",
  componentId: "sc-4dqk1x-2"
})(["display:flex;align-items:center;font-weight:bold;height:50px;color:#333;list-style:none;margin:0 15px;transition:0.5s;text-align:center;&:hover{border-bottom:2px solid #fff;}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "uiComponent__Input",
  componentId: "sc-4dqk1x-3"
})(["width:300px;height:35px;border-radius:5px;outline:none;border:1px solid #ccc;margin:10px;text-align:center;"]);
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "uiComponent__Textarea",
  componentId: "sc-4dqk1x-4"
})(["width:300px;", " border-radius:5px;border:1px solid #ccc;margin:10px;text-align:center;padding:10px;"], ({
  edit
}) => edit ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["height:100px;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["min-height:110px;"]));
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "uiComponent__Form",
  componentId: "sc-4dqk1x-5"
})(["display:flex;justify-content:center;flex-direction:column;", ""], ({
  none
}) => !none && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["align-items:center;"]));
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "uiComponent__InputContainer",
  componentId: "sc-4dqk1x-6"
})(["height:10px;display:flex;flex-direction:row-reverse;justify-content:center;align-items:center;transform:rotate(-90deg);position:absolute;right:10px;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "uiComponent__Img",
  componentId: "sc-4dqk1x-7"
})([""]);

/***/ }),

/***/ "./pages/drawing.js":
/*!**************************!*\
  !*** ./pages/drawing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_askUploadModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/askUploadModal */ "./components/askUploadModal.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/canvas */ "./components/canvas.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
var _jsxFileName = "C:\\Users\\shdnt\\Desktop\\today\\front\\pages\\drawing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "drawing__Input",
  componentId: "sc-7ptcot-0"
})([""]);

const Upload = () => {
  const {
    0: colorPicker,
    1: setColorPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: background,
    1: setBackground
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('#000');
  const {
    modalState
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.drawing);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const {
    0: lineSize,
    1: setLineSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(2.5);
  const {
    0: canvasState,
    1: setCanvasState
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    painter: false,
    strokeStyle: '#000',
    lineWidth: 2.5,
    defaultCanvasSize: 500
  });
  const canvas = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  const startPainting = () => {
    setCanvasState(_objectSpread({}, canvasState, {
      painter: true
    }));
  };

  const stopPainting = () => {
    setCanvasState(_objectSpread({}, canvasState, {
      painter: false
    }));
  };

  const onMouseMove = e => {
    const {
      offsetY: y,
      offsetX: x
    } = e.nativeEvent;
    const ctx = canvas.current.getContext('2d');

    if (!canvasState.painter) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const colorChange = e => {
    const ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = e.nativeEvent.target.style.backgroundColor;
    setCanvasState(_objectSpread({}, canvasState, {
      strokeStyle: e.nativeEvent.target.style.backgroundColor
    }));
  };

  const lineWidthChange = e => {
    const ctx = canvas.current.getContext('2d');
    const size = e.nativeEvent.target.value;
    ctx.lineWidth = size;
  };

  const lineChange = e => {
    const size = e.nativeEvent.target.value;
    setLineSize(size);
  };

  const handleSave = () => {
    const image = canvas.current.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'myImg';
    link.click();
    setTimeout(() => {
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_8__["MODAL_ON"]
      });
    }, 2500);
  };

  const handleChangeColor = color => {
    const ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = color.hex;
    setCanvasState(_objectSpread({}, canvasState, {
      strokeStyle: `${color.hex}`
    }));
  };

  const togleState = () => {
    setColorPicker(prev => !prev);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    canvas.current.width = canvasState.defaultCanvasSize;
    canvas.current.height = canvasState.defaultCanvasSize;
    const ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = canvasState.strokeStyle;
    ctx.lineWidth = canvasState.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasState.defaultCanvasSize, canvasState.defaultCanvasSize);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_askUploadModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modalState: modalState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uADF8\uB9AC\uAE30"), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      padding: '15px 0 15px 0',
      width: '580px',
      height: '530px',
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Canvas"], {
    ref: canvas,
    onMouseMove: onMouseMove,
    onMouseDown: startPainting,
    onMouseUp: stopPainting,
    onMouseLeave: stopPainting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_6__["InputContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["PainterSize"], {
    size: lineSize,
    color: canvasState.strokeStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }), __jsx(Input, {
    type: "range",
    min: "0.1",
    max: "100",
    defaultValue: lineSize,
    onChange: lineChange,
    onMouseUp: lineWidthChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  })), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Ul"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    scale: true,
    style: {
      backgroundColor: '#000000'
    },
    onClick: colorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    scale: true,
    style: {
      backgroundColor: '#00a8ff'
    },
    onClick: colorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    scale: true,
    style: {
      backgroundColor: '#9c88ff'
    },
    onClick: colorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    scale: true,
    style: {
      backgroundColor: '#fbc531'
    },
    onClick: colorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    scale: true,
    style: {
      backgroundColor: '#e84118'
    },
    onClick: colorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    scale: true,
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid black'
    },
    onClick: colorChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_7__["Li"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: togleState,
    style: {
      width: '100%',
      height: '100%',
      background: 'url("/static/color_circle.png")',
      borderRadius: '50%',
      backgroundSize: 'cover'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }), colorPicker ? __jsx("div", {
    style: {
      position: 'relative',
      left: '-230px',
      top: '-140px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_2__["CompactPicker"], {
    color: canvasState.strokeStyle,
    onChangeComplete: handleChangeColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null)))), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      marginTop: '25px'
    },
    onClick: handleSave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, "SAVE")));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ "./reducers/drawing.js":
/*!*****************************!*\
  !*** ./reducers/drawing.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE, MODAL_ON, MODAL_OFF, ADDING_PHOTO_OFF, DELETE_PHOTO, UPPLOAD_CANVAS_REQUEST, UPPLOAD_CANVAS_SUCCESS, UPPLOAD_CANVAS_FAILURE, UPPLOAD_POST_REQUEST, UPPLOAD_POST_SUCCESS, UPPLOAD_POST_FAILURE, UPPLOADING_DONE, LOAD_POST_DETAIL_REQUEST, LOAD_POST_DETAIL_SUCCESS, LOAD_POST_DETAIL_FAILURE, EDIT_POST_DETAIL_REQUEST, EDIT_POST_DETAIL_SUCCESS, EDIT_POST_DETAIL_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_STATE_OFF, LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE, LIKE_ON, UNLIKE_REQUEST, UNLIKE_SUCCESS, UNLIKE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_REQUEST", function() { return LOAD_GALLERY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_SUCCESS", function() { return LOAD_GALLERY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_FAILURE", function() { return LOAD_GALLERY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_ON", function() { return MODAL_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_OFF", function() { return MODAL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDING_PHOTO_OFF", function() { return ADDING_PHOTO_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PHOTO", function() { return DELETE_PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_REQUEST", function() { return UPPLOAD_CANVAS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_SUCCESS", function() { return UPPLOAD_CANVAS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_FAILURE", function() { return UPPLOAD_CANVAS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_POST_REQUEST", function() { return UPPLOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_POST_SUCCESS", function() { return UPPLOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_POST_FAILURE", function() { return UPPLOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOADING_DONE", function() { return UPPLOADING_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_DETAIL_REQUEST", function() { return LOAD_POST_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_DETAIL_SUCCESS", function() { return LOAD_POST_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_DETAIL_FAILURE", function() { return LOAD_POST_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_DETAIL_REQUEST", function() { return EDIT_POST_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_DETAIL_SUCCESS", function() { return EDIT_POST_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST_DETAIL_FAILURE", function() { return EDIT_POST_DETAIL_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STATE_OFF", function() { return DELETE_STATE_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REQUEST", function() { return LIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_SUCCESS", function() { return LIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_FAILURE", function() { return LIKE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_ON", function() { return LIKE_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REQUEST", function() { return UNLIKE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_SUCCESS", function() { return UNLIKE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_FAILURE", function() { return UNLIKE_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  postList: [],
  modalState: false,
  addingPhoto: false,
  isLoadding: false,
  imagePaths: [],
  isUploadingPost: false,
  nowShowingPost: null,
  editingSuccess: false,
  deletePostSuccess: false,
  like: false
};
const LOAD_GALLERY_REQUEST = 'LOAD_GALLERY_REQUEST';
const LOAD_GALLERY_SUCCESS = 'LOAD_GALLERY_SUCCESS';
const LOAD_GALLERY_FAILURE = 'LOAD_GALLERY_FAILURE';
const MODAL_ON = 'MODAL_ON';
const MODAL_OFF = 'MODAL_OFF';
const ADDING_PHOTO_OFF = 'ADDING_PHOTO_OFF';
const DELETE_PHOTO = 'DELETE_PHOTO';
const UPPLOAD_CANVAS_REQUEST = 'UPPLOAD_CANVAS_REQUEST';
const UPPLOAD_CANVAS_SUCCESS = 'UPPLOAD_CANVAS_SUCCESS';
const UPPLOAD_CANVAS_FAILURE = 'UPPLOAD_CANVAS_FAILURE';
const UPPLOAD_POST_REQUEST = 'UPPLOAD_POST_REQUEST';
const UPPLOAD_POST_SUCCESS = 'UPPLOAD_POST_SUCCESS';
const UPPLOAD_POST_FAILURE = 'UPPLOAD_POST_FAILURE';
const UPPLOADING_DONE = 'UPPLOADING_DONE';
const LOAD_POST_DETAIL_REQUEST = 'LOAD_POST_DETAIL_REQUEST';
const LOAD_POST_DETAIL_SUCCESS = 'LOAD_POST_DETAIL_SUCCESS';
const LOAD_POST_DETAIL_FAILURE = 'LOAD_POST_DETAIL_FAILURE';
const EDIT_POST_DETAIL_REQUEST = 'EDIT_POST_DETAIL_REQUEST';
const EDIT_POST_DETAIL_SUCCESS = 'EDIT_POST_DETAIL_SUCCESS';
const EDIT_POST_DETAIL_FAILURE = 'EDIT_POST_DETAIL_FAILURE';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
const DELETE_STATE_OFF = 'DELETE_STATE_OFF';
const LIKE_REQUEST = 'LIKE_REQUEST';
const LIKE_SUCCESS = 'LIKE_SUCCESS';
const LIKE_FAILURE = 'LIKE_FAILURE';
const LIKE_ON = 'LIKE_ON';
const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';
const UNLIKE_FAILURE = 'UNLIKE_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case LIKE_ON:
      {
        return _objectSpread({}, state, {
          like: true
        });
      }

    case LIKE_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LIKE_SUCCESS:
      {
        return _objectSpread({}, state, {
          like: true,
          nowShowingPost: action.data
        });
      }

    case LIKE_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case UNLIKE_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case UNLIKE_SUCCESS:
      {
        return _objectSpread({}, state, {
          like: false,
          nowShowingPost: action.data
        });
      }

    case UNLIKE_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_STATE_OFF:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: false
        });
      }

    case DELETE_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: false
        });
      }

    case DELETE_POST_SUCCESS:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: true
        });
      }

    case DELETE_POST_FAILURE:
      {
        return _objectSpread({}, state, {
          deletePostSuccess: false
        });
      }

    case EDIT_POST_DETAIL_REQUEST:
      {
        return _objectSpread({}, state, {
          editingSuccess: false
        });
      }

    case EDIT_POST_DETAIL_SUCCESS:
      {
        return _objectSpread({}, state, {
          editingSuccess: true
        });
      }

    case EDIT_POST_DETAIL_FAILURE:
      {
        return _objectSpread({}, state, {
          editingSuccess: true
        });
      }

    case LOAD_POST_DETAIL_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_POST_DETAIL_SUCCESS:
      {
        return _objectSpread({}, state, {
          nowShowingPost: action.data
        });
      }

    case LOAD_POST_DETAIL_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_GALLERY_REQUEST:
      {
        return _objectSpread({}, state, {
          isLoadding: true
        });
      }

    case LOAD_GALLERY_SUCCESS:
      {
        return _objectSpread({}, state, {
          postList: action.data,
          isLoadding: false
        });
      }

    case LOAD_GALLERY_FAILURE:
      {
        return _objectSpread({}, state, {
          isLoadding: false
        });
      }

    case MODAL_ON:
      {
        return _objectSpread({}, state, {
          modalState: true
        });
      }

    case MODAL_OFF:
      {
        return _objectSpread({}, state, {
          modalState: false
        });
      }

    case UPPLOAD_CANVAS_REQUEST:
      {
        return _objectSpread({}, state, {
          isLoadding: true
        });
      }

    case UPPLOAD_CANVAS_SUCCESS:
      {
        return _objectSpread({}, state, {
          addingPhoto: true,
          isLoadding: false,
          imagePaths: [...state.imagePaths, action.data]
        });
      }

    case UPPLOAD_CANVAS_FAILURE:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    case ADDING_PHOTO_OFF:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    case DELETE_PHOTO:
      {
        return _objectSpread({}, state, {
          imagePaths: []
        });
      }

    case UPPLOAD_POST_REQUEST:
      {
        return _objectSpread({}, state, {
          isUploadingPost: false
        });
      }

    case UPPLOAD_POST_SUCCESS:
      {
        return _objectSpread({}, state, {
          postList: [...state.postList, action.data],
          isUploadingPost: true
        });
      }

    case UPPLOAD_POST_FAILURE:
      {
        return _objectSpread({}, state, {
          isUploadingPost: false
        });
      }

    case UPPLOADING_DONE:
      {
        return _objectSpread({}, state, {
          isUploadingPost: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ 9:
/*!********************************!*\
  !*** multi ./pages/drawing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shdnt\Desktop\today\front\pages\drawing.js */"./pages/drawing.js");


/***/ }),

/***/ "next/Router":
/*!******************************!*\
  !*** external "next/Router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=drawing.js.map