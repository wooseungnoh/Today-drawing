webpackHotUpdate("static\\development\\pages\\drawing.js",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas, PainterSize, Ul, Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainterSize", function() { return PainterSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].canvas.withConfig({
  displayName: "canvas__Canvas",
  componentId: "ffrlo-0"
})(["width:500px;height:500px;border-radius:15px;background:#ffffff;border:2px solid "]);
var PainterSize = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "canvas__PainterSize",
  componentId: "ffrlo-1"
})(["position:absolute;width:", "px;height:", "px;background:", ";border-radius:50%;transform:translateX(120px);"], function (_ref) {
  var size = _ref.size;
  return size || '2.5';
}, function (_ref2) {
  var size = _ref2.size;
  return size || '2.5';
}, function (_ref3) {
  var color = _ref3.color;
  return color || '#000000';
});
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "canvas__Ul",
  componentId: "ffrlo-2"
})(["position:absolute;display:flex;flex-direction:row;bottom:-15px;padding:0;"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "canvas__Li",
  componentId: "ffrlo-3"
})(["width:30px;height:30px;border-radius:50%;margin:5px;list-style:none;cursor:pointer;", ""], function (_ref4) {
  var scale = _ref4.scale;
  return scale && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["&:hover{transform:scale(1.1);}"]);
});

/***/ })

})
//# sourceMappingURL=drawing.js.39b3b4fb57798bd73342.hot-update.js.map