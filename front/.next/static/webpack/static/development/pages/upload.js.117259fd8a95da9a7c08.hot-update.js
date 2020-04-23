webpackHotUpdate("static\\development\\pages\\upload.js",{

/***/ "./reducers/drawing.js":
/*!*****************************!*\
  !*** ./reducers/drawing.js ***!
  \*****************************/
/*! exports provided: initialState, LOAD_GALLERY_POST, MODAL_ON, MODAL_OFF, ADDING_PHOTO_OFF, UPPLOAD_CANVAS_REQUEST, UPPLOAD_CANVAS_SUCCESS, UPPLOAD_CANVAS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GALLERY_POST", function() { return LOAD_GALLERY_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_ON", function() { return MODAL_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_OFF", function() { return MODAL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDING_PHOTO_OFF", function() { return ADDING_PHOTO_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_REQUEST", function() { return UPPLOAD_CANVAS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_SUCCESS", function() { return UPPLOAD_CANVAS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPPLOAD_CANVAS_FAILURE", function() { return UPPLOAD_CANVAS_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  }],
  modalState: false,
  addingPhoto: false
};
var dummyPhoto = {
  id: 2,
  creater: '더미',
  Img: 'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true',
  description: '더미 그림',
  title: '더미더미',
  createAt: '2020.10.03'
};
var LOAD_GALLERY_POST = 'LOAD_GALLERY_POST';
var MODAL_ON = 'MODAL_ON';
var MODAL_OFF = 'MODAL_OFF';
var ADDING_PHOTO_OFF = 'ADDING_PHOTO_OFF';
var UPPLOAD_CANVAS_REQUEST = 'UPPLOAD_CANVAS_REQUEST';
var UPPLOAD_CANVAS_SUCCESS = 'UPPLOAD_CANVAS_SUCCESS';
var UPPLOAD_CANVAS_FAILURE = 'UPPLOAD_CANVAS_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD_GALLERY_POST:
      {
        return _objectSpread({}, state);
      }

    case MODAL_ON:
      {
        return _objectSpread({}, state, {
          modalState: true
        });
      }

    case MODAL_OFF:
      {
        return _objectSpread({}, state, {
          modalState: false
        });
      }

    case UPPLOAD_CANVAS_REQUEST:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    case UPPLOAD_CANVAS_SUCCESS:
      {
        return {
          addingPhoto: true,
          photo: [dummyPhoto].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.photo))
        };
      }

    case UPPLOAD_CANVAS_FAILURE:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    case ADDING_PHOTO_OFF:
      {
        return _objectSpread({}, state, {
          addingPhoto: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ })

})
//# sourceMappingURL=upload.js.117259fd8a95da9a7c08.hot-update.js.map