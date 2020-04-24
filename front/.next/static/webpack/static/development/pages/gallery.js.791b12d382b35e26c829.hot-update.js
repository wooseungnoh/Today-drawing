webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./components/photoView.js":
/*!*********************************!*\
  !*** ./components/photoView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\components\\photoView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "photoView__Text",
  componentId: "sc-1d1eruo-0"
})(["background:#000;line-height:35px;width:100%;height:35px;font-weight:bold;font-size:15px;"]);
var ViewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "photoView__ViewContainer",
  componentId: "sc-1d1eruo-1"
})(["display:flex;justify-content:center;align-items:flex-end;width:300px;height:200px;background:", ";background-size:cover;margin:5px;&:hover ", "{transition:0.5s;color:red;}"], function (_ref) {
  var url = _ref.url;
  return "url(".concat(url, ") no-repeat");
}, Text);

var PhotoView = function PhotoView(_ref2) {
  var creater = _ref2.creater,
      url = _ref2.url;
  return __jsx(ViewContainer, {
    url: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, creater));
};

/* harmony default export */ __webpack_exports__["default"] = (PhotoView);

/***/ })

})
//# sourceMappingURL=gallery.js.791b12d382b35e26c829.hot-update.js.map