webpackHotUpdate("static\\development\\pages\\mypage.js",{

/***/ "./pages/mypage.js":
/*!*************************!*\
  !*** ./pages/mypage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\mypage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Mypage = function Mypage() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h3", {
    style: {
      marginBottom: '70px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0"), __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      minHeight: '600px',
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: "medium",
    style: {
      marginBottom: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\uC791\uAC00"), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: "big",
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, me.nickName), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: "medium",
    style: {
      marginBottom: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\uC791\uAC00 \uC18C\uAC1C"), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: "big",
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, me.userInfo)));
};

/* harmony default export */ __webpack_exports__["default"] = (Mypage);

/***/ })

})
//# sourceMappingURL=mypage.js.850aa122bab1b0792037.hot-update.js.map