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
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Gallery = function Gallery(props) {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.drawing;
  }),
      photo = _useSelector.photo;

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    flex_direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "\uC624\uB298\uC758 \uADF8\uB9BC\uB4E4"), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 230px)',
      gridTemplateColumns: 'repeat(2, 300px)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, photo.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(props.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        margin: '10px',
        width: '250px',
        height: '150px',
        background: "url(\"".concat(item.Img, "\") no-repeat"),
        backgroundSize: 'cover',
        borderRadius: '10px',
        boxShadow: '5px 5px 15px #999'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      bold: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, item.creater)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=gallery.js.ed586b8115f1bbf234da.hot-update.js.map