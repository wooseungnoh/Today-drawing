module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "container__Container",
  componentId: "sc-1pv9ren-0"
})(["display:flex;justify-content:center;align-items:center;flex-direction:", ";text-align:center;width:", ";height:", ";"], ({
  flexDirection
}) => flexDirection || 'row', ({
  wsize
}) => wsize || '100%', ({
  hsize
}) => hsize || '100%');
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
})(["margin:10px;border:none;outline:none;width:300px;height:35px;background:#bbb;border-radius:5px;transition:0.3s;color:#444;&:hover{background:#ccc;}&:active{background:#888;}"]);
const NavUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "uiComponent__NavUl",
  componentId: "sc-4dqk1x-1"
})(["position:fixed;z-index:99;top:0;display:flex;width:100%;height:30px;background:#3f3f3f6b;justify-content:center;align-items:center;margin:0;padding:25px 0;"]);
const NavLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "uiComponent__NavLi",
  componentId: "sc-4dqk1x-2"
})(["font-weight:bold;color:#333;list-style:none;margin:0 10px;text-align:center;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "uiComponent__Input",
  componentId: "sc-4dqk1x-3"
})(["width:300px;height:35px;border-radius:5px;outline:none;border:1px solid #ccc;margin:10px;text-align:center;"]);
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "uiComponent__Textarea",
  componentId: "sc-4dqk1x-4"
})(["width:300px;min-height:200px;border-radius:5px;border:1px solid #ccc;margin:10px;text-align:center;padding:10px;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "uiComponent__Form",
  componentId: "sc-4dqk1x-5"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "uiComponent__InputContainer",
  componentId: "sc-4dqk1x-6"
})(["height:10px;display:flex;flex-direction:row-reverse;justify-content:center;align-items:center;transform:rotate(-90deg);position:absolute;right:10px;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "uiComponent__Img",
  componentId: "sc-4dqk1x-7"
})([""]);

/***/ }),

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/drawing */ "./reducers/drawing.js");
var _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const imgDetail = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    nowShowingPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.drawing);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const nowUrl = document.location.href;
    const slice = nowUrl.split('p/');
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["LOAD_PHOTO_DETAIL_REQUEST"],
      data: {
        postId: slice[1]
      }
    });
  }, []);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Img"], {
    src: `http://localhost:5000/${nowShowingPost.fileUrl}`,
    width: "500px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      margin: '10px 0 '
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bold: true,
    fontSize: "big",
    style: {
      padding: '15px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, `${nowShowingPost.creator.writer}`), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, `${nowShowingPost.createAt.split('T')[0]}`), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bold: true,
    fontSize: "huge",
    style: {
      paddingBottom: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, `${nowShowingPost.title}`), __jsx("div", {
    style: {
      width: '500px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, nowShowingPost.description)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ }),

/***/ "./reducers/drawing.js":
/*!*****************************!*\
  !*** ./reducers/drawing.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_GALLERY_REQUEST, LOAD_GALLERY_SUCCESS, LOAD_GALLERY_FAILURE, MODAL_ON, MODAL_OFF, ADDING_PHOTO_OFF, DELETE_PHOTO, UPPLOAD_CANVAS_REQUEST, UPPLOAD_CANVAS_SUCCESS, UPPLOAD_CANVAS_FAILURE, UPPLOAD_POST_REQUEST, UPPLOAD_POST_SUCCESS, UPPLOAD_POST_FAILURE, UPPLOADING_DONE, LOAD_PHOTO_DETAIL_REQUEST, LOAD_PHOTO_DETAIL_SUCCESS, LOAD_PHOTO_DETAIL_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PHOTO_DETAIL_REQUEST", function() { return LOAD_PHOTO_DETAIL_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PHOTO_DETAIL_SUCCESS", function() { return LOAD_PHOTO_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PHOTO_DETAIL_FAILURE", function() { return LOAD_PHOTO_DETAIL_FAILURE; });
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
  nowShowingPost: null
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
const LOAD_PHOTO_DETAIL_REQUEST = 'LOAD_PHOTO_DETAIL_REQUEST';
const LOAD_PHOTO_DETAIL_SUCCESS = 'LOAD_PHOTO_DETAIL_SUCCESS';
const LOAD_PHOTO_DETAIL_FAILURE = 'LOAD_PHOTO_DETAIL_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTO_DETAIL_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_PHOTO_DETAIL_SUCCESS:
      {
        return _objectSpread({}, state, {
          nowShowingPost: action.data
        });
      }

    case LOAD_PHOTO_DETAIL_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_GALLERY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_GALLERY_SUCCESS:
      {
        return _objectSpread({}, state, {
          postList: action.data
        });
      }

    case LOAD_GALLERY_FAILURE:
      {
        return _objectSpread({}, state);
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

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/p/[imgDetail].js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\todayDraw\front\pages\p\[imgDetail].js */"./pages/p/[imgDetail].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=[imgDetail].js.map