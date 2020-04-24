webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
/* harmony import */ var _components_photoView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/photoView */ "./components/photoView.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Gallery = function Gallery() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      photo = _useSelector.photo;

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "\uC624\uB298\uC758 \uADF8\uB9BC\uB4E4"), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginTop: '30px',
      display: 'grid',
      gridTemplateRows: 'repeat(3, auto)',
      gridTemplateColumns: 'repeat(2, 300px)',
      gridGap: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, photo.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: "/p/[imgDetail]",
      as: "/p/".concat(item.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(_components_photoView__WEBPACK_IMPORTED_MODULE_5__["default"], {
      creater: item.creater,
      url: item.Img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=gallery.js.9682a19ee9982da6d644.hot-update.js.map