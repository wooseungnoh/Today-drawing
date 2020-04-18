webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/drawing.js":
/*!*****************************!*\
  !*** ./reducers/drawing.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_GALLERY_POST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_POST", function() { return LOAD_GALLERY_POST; });
var initialState = {
  photo: [{
    creater: 'suna',
    Img: 'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true',
    description: "이 그림은 그냥 그려본 그림입니다.",
    createAt: "2020.10.03"
  }]
};
var LOAD_GALLERY_POST = "LOAD_GALLERY_POST";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD_GALLERY_POST:
      {
        return {};
      }
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.2bf3cf9ec2fe90818fcc.hot-update.js.map