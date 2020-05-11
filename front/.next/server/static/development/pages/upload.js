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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "D:\\todayDraw\\front\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useInput = (initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Login = () => {
  const [userId, setUserId] = useInput('');
  const [userPassword, setUserPassword] = useInput('');
  const {
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const handleLogin = e => {
    e.preventDefault();
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_IN_REQUEST"],
      data: {
        email: userId,
        password: userPassword
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoggedIn) {
      next_Router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  }, [isLoggedIn]);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "email",
    placeholder: "\uC774\uBA54\uC77C",
    value: userId,
    onChange: setUserId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    placeholder: "\uD328\uC2A4\uC6CC\uB4DC",
    value: userPassword,
    onChange: setUserPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleLogin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Router */ "next/Router");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./pages/login.js");
var _jsxFileName = "D:\\todayDraw\\front\\pages\\upload.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Upload = () => {
  const {
    imagePaths,
    isUploadingPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.drawing);
  const {
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const [title, setTitle] = Object(_login__WEBPACK_IMPORTED_MODULE_6__["useInput"])('');
  const [description, setDescription] = Object(_login__WEBPACK_IMPORTED_MODULE_6__["useInput"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isLoggedIn) {
      next_Router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  }, [isLoggedIn]);

  const addPhoto = e => {
    e.preventDefault();
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["UPPLOAD_POST_REQUEST"],
      data: {
        title,
        description,
        imagePaths
      }
    });
  };

  const handlePhotoFile = e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('photo', f);
    });
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["UPPLOAD_CANVAS_REQUEST"],
      data: imageFormData
    });
  };

  const handleDeleteImage = () => {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["DELETE_PHOTO"]
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isUploadingPost) {
      handleDeleteImage();
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["UPPLOADING_DONE"]
      });
      next_Router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/gallery');
    }
  }, [isUploadingPost]);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      minHeight: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, imagePaths[0] ? __jsx("div", {
    style: {
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `http://localhost:5000/${imagePaths[0]}`,
    style: {
      width: '100%'
    },
    alt: imagePaths[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleDeleteImage,
    style: {
      position: 'absolute',
      top: '5px',
      right: '5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "X")) : __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "\uBBF8\uB9AC\uBCF4\uAE30 \uC774\uBBF8\uC9C0")), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: addPhoto,
    encType: "multipart/form-data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "file",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "\uD30C\uC77C \uC120\uD0DD"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "file",
    name: "photo",
    onChange: handlePhotoFile,
    accept: "image/*",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: title,
    onChange: setTitle,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC124\uBA85"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    value: description,
    onChange: setDescription,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "submit",
    value: "\uC791\uC131",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, EDITING_PROFILE_REQUEST, EDITING_PROFILE_SUCCESS, EDITING_PROFILE_FAILURE, EDITING_PROFILE_OFF, EDITING_PROFILE_ON, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_REQUEST", function() { return EDITING_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_SUCCESS", function() { return EDITING_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_FAILURE", function() { return EDITING_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_OFF", function() { return EDITING_PROFILE_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_ON", function() { return EDITING_PROFILE_ON; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isSignedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: '',
  // 회원가입 실패 사유
  me: null,
  // 내 정보
  isUserLoadding: false,
  editing: false
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_REQUEST';
const EDITING_PROFILE_REQUEST = 'EDITING_PROFILE_REQUEST';
const EDITING_PROFILE_SUCCESS = 'EDITING_PROFILE_SUCCESS';
const EDITING_PROFILE_FAILURE = 'EDITING_PROFILE_FAILURE';
const EDITING_PROFILE_OFF = 'EDITING_PROFILE_OFF';
const EDITING_PROFILE_ON = 'EDITING_PROFILE_ON';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_USER_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          me: action.data
        });
      }

    case LOAD_USER_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOG_IN_REQUEST:
      {
        return _objectSpread({}, state, {
          isLoggingIn: true,
          isUserLoadding: true
        });
      }

    case LOG_IN_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          isUserLoadding: false,
          me: action.data
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOG_OUT_SUCCESS:
      {
        return _objectSpread({}, state, {
          me: null,
          isLoggedIn: false
        });
      }

    case LOG_OUT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case SIGN_UP_REQUEST:
      {
        return _objectSpread({}, state, {
          isSigningUp: true,
          isUserLoadding: true
        });
      }

    case SIGN_UP_FAILURE:
      {
        return _objectSpread({}, state, {
          isSigningUp: true
        });
      }

    case SIGN_UP_SUCCESS:
      {
        return _objectSpread({}, state, {
          isUserLoadding: false,
          me: action.data,
          editing: true
        });
      }

    case EDITING_PROFILE_REQUEST:
      {
        return _objectSpread({}, state, {
          isUserLoadding: true
        });
      }

    case EDITING_PROFILE_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          editing: false,
          isUserLoadding: false,
          me: action.data
        });
      }

    case EDITING_PROFILE_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case EDITING_PROFILE_OFF:
      {
        return _objectSpread({}, state, {
          editing: false,
          isUserLoadding: false
        });
      }

    case EDITING_PROFILE_ON:
      {
        return _objectSpread({}, state, {
          editing: true
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
/*!*******************************!*\
  !*** multi ./pages/upload.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\todayDraw\front\pages\upload.js */"./pages/upload.js");


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
//# sourceMappingURL=upload.js.map