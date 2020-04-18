webpackHotUpdate("static\\development\\pages\\p\\[imgDetail].js",{

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ "./components/input.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var imgDetail = function imgDetail() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      photo = _useSelector.photo;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var indexNumber = photo.findIndex(function (i) {
    return i.id == router.query.imgDetail;
  });
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flex_direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_3__["Img"], {
    src: photo[indexNumber].Img,
    width: "500px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "\uC791\uD488 \uC81C\uBAA9 : ", photo[indexNumber].title), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, photo[indexNumber].description));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.c5c3dcb846e2851a7968.hot-update.js.map