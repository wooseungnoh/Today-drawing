webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/text.js":
/*!****************************!*\
  !*** ./components/text.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  \n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-size: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SIZES = {
  mini: '10px',
  tiny: '13px',
  small: '14px',
  medium: '15px',
  large: '16px',
  big: '19px',
  huge: '20px',
  massive: '50px',
  mainTitle: '35px'
};
var COLOR = {
  normal: '#707070'
};
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject(), COLOR.normal, function (_ref) {
  var fontSize = _ref.fontSize;
  return SIZES[fontSize] || "".concat(SIZES.medium);
}, function (_ref2) {
  var bold = _ref2.bold;
  return bold && css(_templateObject2());
});
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.7cb5806f63a6240aa1ff.hot-update.js.map