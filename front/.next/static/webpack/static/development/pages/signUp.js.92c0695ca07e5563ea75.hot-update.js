webpackHotUpdate("static\\development\\pages\\signUp.js",{

/***/ "./components/editProfile.js":
/*!***********************************!*\
  !*** ./components/editProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _uiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiComponent */ "./components/uiComponent.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\components\\editProfile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var EditProfile = function EditProfile(_ref) {
  var signUp = _ref.signUp;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      editing = _useSelector.editing;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["EDITING_PROFILE_REQUEST"]
    });
  };

  var modalOff = function modalOff() {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["EDITING_PROFILE_OFF"]
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
      display: "".concat(editing ? '' : 'none')
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    wsize: "400px",
    flexDirection: "column",
    style: {
      borderRadius: '10px',
      background: '#ccc'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\uC791\uAC00 \uD504\uB85C\uD544"), __jsx("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "text",
    defaultValue: "\uC791\uAC00\uBA85",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Textarea"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "\uC791\uAC00\uC18C\uAC1C"), __jsx(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      margin: '0',
      justifyContent: 'space-between'
    },
    wsize: "150px",
    hsize: "50px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "\uD655\uC778"), !signUp && __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: modalOff,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "\uCDE8\uC18C")))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditProfile);

/***/ })

})
//# sourceMappingURL=signUp.js.92c0695ca07e5563ea75.hot-update.js.map