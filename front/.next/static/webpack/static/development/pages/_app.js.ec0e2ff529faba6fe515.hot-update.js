webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PopupMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "navigation__PopupMenu",
  componentId: "sc-1rj3h6s-0"
})(["position:absolute;z-index:9;width:300px;height:500px;background:#aaa;border-radius:10px;transition:0.5s;opacity:", ";display:", ";"], function (_ref) {
  var opacity = _ref.opacity;
  return opacity;
}, function (_ref2) {
  var display = _ref2.display;
  return display;
});

var Navigation = function Navigation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    opacity: '0',
    display: 'none'
  }),
      popUpState = _useState2[0],
      setPopUpState = _useState2[1];

  var handelMenuState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setMenuOpen(function (prev) {
      return !prev;
    });

    if (menuOpen) {
      setTimeout(function () {
        setPopUpState({
          opacity: '0',
          display: 'block'
        });
        setTimeout(function () {
          setPopUpState({
            display: 'block',
            opacity: '0.7'
          });
        }, 10);
      }, 0);
    } else {
      setTimeout(function () {
        setPopUpState({
          display: 'block',
          opacity: '0'
        });
        setTimeout(function () {
          setPopUpState({
            opacity: '0',
            display: 'none'
          });
        }, 510);
      }, 0);
    }
  });
  return __jsx("div", {
    style: {
      display: 'inline-block',
      position: 'absolute',
      alignSelf: "flex-start"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisV"],
    size: '2x',
    style: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    onClick: handelMenuState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(PopupMenu, {
    opacity: popUpState.opacity,
    display: popUpState.display,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "\uD648"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/drawing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "\uC5C5\uB85C\uB4DC"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/drawing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "\uC5C5\uB85C\uB4DC"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "\uB9C8\uC774\uD398\uC774\uC9C0"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=_app.js.ec0e2ff529faba6fe515.hot-update.js.map