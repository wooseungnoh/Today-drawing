webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  width: 250px;\n  height: 500px;\n  background: #aaa;\n  border\n  transition: 0.5s;\n  opacity: ", ";\n  display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PopupMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var opacity = _ref.opacity;
  return opacity;
}, function (_ref2) {
  var display = _ref2.display;
  return display;
});

var Navigation = function Navigation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    opacity: '0',
    display: 'none'
  }),
      popUpState = _useState2[0],
      setPopUpState = _useState2[1];

  var handelMenuState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setMenuOpen(function (prev) {
      return !prev;
    });

    if (menuOpen) {
      setTimeout(function () {
        console.log('디스플레이 온');
        setPopUpState({
          opacity: '0',
          display: 'block'
        });
        setTimeout(function () {
          console.log('오퍼시티 1');
          setPopUpState({
            display: 'block',
            opacity: '1'
          });
        }, 10);
      }, 0);
    } else {
      setTimeout(function () {
        console.log('디스플레이 오프');
        setPopUpState({
          display: 'block',
          opacity: '0'
        });
        setTimeout(function () {
          console.log('디스플레이 논');
          setPopUpState({
            opacity: '0',
            display: 'none'
          });
        }, 510);
      }, 0);
    }
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisV"],
    size: '2x',
    style: {
      cursor: 'pointer'
    },
    onClick: handelMenuState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(PopupMenu, {
    opacity: popUpState.opacity,
    display: popUpState.display,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=_app.js.9a9d1037a4dc6fc59eaf.hot-update.js.map