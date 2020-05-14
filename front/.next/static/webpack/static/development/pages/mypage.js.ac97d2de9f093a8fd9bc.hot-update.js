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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_editProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/editProfile */ "./components/editProfile.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\mypage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Mypage = function Mypage() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      isLoggedIn = _useSelector.isLoggedIn,
      likeList = _useSelector.likeList;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isLoggedIn) {
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }
  }, [isLoggedIn]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_LIKELIST_REQUEST"]
    });
  }, []);

  var editProfile = function editProfile(e) {
    e.preventDefault();
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["EDITING_PROFILE_ON"]
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_editProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    flexDirection: "column",
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
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: editProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Edit Profile"), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      marginBottom: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "\uC791\uAC00"), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "big",
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, me ? me.writer : ''), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      marginBottom: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\uC791\uAC00 \uC18C\uAC1C"), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "big",
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, me ? me.userInfo : '')), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["GalleryContainer"], {
    mypage: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Mypage);

/***/ })

})
//# sourceMappingURL=mypage.js.ac97d2de9f093a8fd9bc.hot-update.js.map