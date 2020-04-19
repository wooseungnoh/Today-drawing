webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/drawing.js":
/*!*****************************!*\
  !*** ./reducers/drawing.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_GALLERY_POST, MODAL_ON, MODAL_OFF, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_POST", function() { return LOAD_GALLERY_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_ON", function() { return MODAL_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_OFF", function() { return MODAL_OFF; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  photo: [{
    id: 1,
    creater: '개',
    Img: 'https://us.123rf.com/450wm/bigandt/bigandt1408/bigandt140800118/30980522-%EC%95%BC%EC%99%B8%EC%97%90%EC%84%9C-%EB%A7%91%EC%9D%80-%EB%82%A0%EC%97%90-7-%EC%A3%BC-%EC%98%A4%EB%9E%98-%EB%90%9C-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84-%EA%B0%95%EC%95%84%EC%A7%80-.jpg?ver=6',
    description: '강아지입니다.',
    title: '강아지',
    createAt: '2020.10.03'
  }, {
    id: 2,
    creater: 'wooseung',
    Img: 'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true',
    description: '이 그림은 그냥 그려본 그림입니다.',
    title: '고먐미',
    createAt: '2020.10.03'
  }, {
    id: 3,
    creater: 'suna',
    Img: 'https://cdn.pixabay.com/photo/2020/04/13/12/18/flower-5038110__340.jpg',
    description: '이 그림은 그냥 그려본 그림입니다.',
    title: '먐미',
    createAt: '2020.10.03'
  }, {
    id: 4,
    creater: 'woo',
    Img: 'https://helpx.adobe.com/content/dam/help/ko/photoshop/how-to/compositing/_jcr_content/main-pars/image/compositing_1408x792.jpg',
    description: '이 그림은 그냥 그려본 그림입니다.',
    title: '먐미',
    createAt: '2020.10.03'
  }, {
    id: 5,
    creater: 'www',
    Img: 'https://pbs.twimg.com/media/DZwbCQRU8AAgYyp.jpg',
    description: '이 그림은 그냥 그려본 그림입니다.',
    title: '먐미',
    createAt: '2020.10.03'
  }],
  modalState: false
};
var LOAD_GALLERY_POST = 'LOAD_GALLERY_POST';
var MODAL_ON = "MODAL_ON";
var MODAL_OFF = "MODAL_OFF";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD_GALLERY_POST:
      {
        return _objectSpread({}, state);
      }

    case MODAL_ON:
      {}

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.5a5c98497ac297004e07.hot-update.js.map