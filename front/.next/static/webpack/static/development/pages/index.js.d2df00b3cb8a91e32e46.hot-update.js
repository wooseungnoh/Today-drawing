webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var dummyPhoto = [{
  creater: 'wooseung',
  Img: 'https://lh3.googleusercontent.com/proxy/3xD_WNEL6XNE0KqDncEN1Brdul2GsqcOt2ryNcVFP4_FB77PpMMTD0To-hUyHXhPxYEQxAE3yxRVhfRGBp9UruLLw1l7JDoJVMlw5bT1UxlK9wga3bgg8MCTjCEDfcdEMwDGOD3Y-RNINCHRgiRHLf4yIM040YEx6nSQGJC9QHSE4YQInXSevJwTsO3lai4rmvIWWPAAf45oobE-3DwyA4ZGAzOHYvJd7z66oiEMVU-SdpRpV0AeoakLnO_tLwe2Rh-xKORra3jjUNH8nA9rtQd1f-iNsC2sstbbY0SWS1Rv2MKDmqcYKuYiZ0bAz-fZi1hGfKfYPiFJpMpbZA9AgpdR9jgLQfw8'
}, {
  creater: 'suna',
  Img: 'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true'
}, {
  creater: 'ffff',
  Img: 'https://cdn.crowdpic.net/list-thumb/thumb_l_EAA2072F8D20A092FD567A0C46661012.jpeg'
}];
var style = {
  width: '300px',
  height: '200px'
};

var Home = function Home() {
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    flex_direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: "mainTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "\uD558\uB8E8 \uADF8\uB9BC"), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "\uB2F9\uC2E0\uC758 \uADF8\uB9BC\uC2B5\uAD00"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginTop: '100px'
    },
    fontSize: "massive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "\"\uC2A4\uCF00\uCE58\uBD81\""), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginBottom: '100px'
    },
    bold: true,
    fontSize: "big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "\uB0B4 \uADF8\uB9BC \uC62C\uB9AC\uAE30"))), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      margin: '30px'
    },
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "\uC624\uB298\uC758 \uADF8\uB9BC\uB4E4"), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, dummyPhoto.map(function (item) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        margin: '10px',
        width: '400px',
        height: '250px',
        background: "url(\"".concat(item.Img, "\") no-repeat"),
        backgroundSize: 'cover',
        borderRadius: '10px',
        boxShadow: '5px 5px 15px #999'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
      bold: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, item.creater));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d2df00b3cb8a91e32e46.hot-update.js.map