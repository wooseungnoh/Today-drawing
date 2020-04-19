webpackHotUpdate("static\\development\\pages\\signUp.js",{

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./pages/login.js");


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\signUp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var SignUp = function SignUp() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      checkPasswordError = _useState[0],
      setPasswordCheckError = _useState[1];

  var _useInput = Object(_login__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      userPasswordCheck = _useInput2[0],
      setUserPasswordCheck = _useInput2[1];

  var _useInput3 = Object(_login__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      userName = _useInput4[0],
      setUserName = _useInput4[1];

  var _useInput5 = Object(_login__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      userEmail = _useInput6[0],
      setUserEmail = _useInput6[1];

  var _useInput7 = Object(_login__WEBPACK_IMPORTED_MODULE_4__["useInput"])(''),
      _useInput8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput7, 2),
      userPassword = _useInput8[0],
      setUserPassword = _useInput8[1];

  var signUp = function signUp(e) {
    e.preventDefault();
  };

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    placeholder: "\uC774\uB984",
    value: userName,
    onChange: setUserName,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "email",
    placeholder: "\uC774\uBA54\uC77C",
    value: userEmail,
    onChange: setUserEmail,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "password",
    placeholder: "\uD328\uC2A4\uC6CC\uB4DC",
    value: userPassword,
    onChange: setUserPassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "password",
    placeholder: "\uD328\uC2A4\uC6CC\uB4DC \uD655\uC778",
    value: userPasswordCheck,
    onChange: setUserPasswordCheck,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "\uD68C\uC6D0\uAC00\uC785")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signUp.js.a762fd9580a184219b2a.hot-update.js.map