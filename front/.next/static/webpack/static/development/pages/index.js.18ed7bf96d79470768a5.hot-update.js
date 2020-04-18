webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/text.js":
/*!****************************!*\
  !*** ./components/text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SIZES = {
  mini: '10px',
  tiny: '13px',
  small: '14px',
  medium: '15px',
  large: '16px',
  big: '19px',
  huge: '25px',
  massive: '50px',
  mainTitle: '35px'
};
var COLOR = {
  normal: '#707070'
};
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "text__Text",
  componentId: "g13gku-0"
})(["color:", ";font-size:", ";", ""], COLOR.normal, function (_ref) {
  var fontSize = _ref.fontSize;
  return SIZES[fontSize] || "".concat(SIZES.medium);
}, function (_ref2) {
  var bold = _ref2.bold;
  return bold && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-weight:bold;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.18ed7bf96d79470768a5.hot-update.js.map