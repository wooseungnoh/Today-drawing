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
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var dummyPhoto = [{
  creater: 'suna',
  Img: 'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true'
}, {
  creater: 'ffff',
  Img: 'https://cdn.crowdpic.net/list-thumb/thumb_l_EAA2072F8D20A092FD567A0C46661012.jpeg'
}];

var Gallery = function Gallery() {
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, dummyPhoto.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: "/imgDetail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
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
        lineNumber: 24,
        columnNumber: 13
      }
    }), __jsx(Text, {
      bold: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, item.creater)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=gallery.js.6795b6e0080c4b791f97.hot-update.js.map