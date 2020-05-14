webpackHotUpdate("static\\development\\pages\\mypage.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, EDITING_PROFILE_REQUEST, EDITING_PROFILE_SUCCESS, EDITING_PROFILE_FAILURE, EDITING_PROFILE_OFF, EDITING_PROFILE_ON, LOAD_LIKELIST_REQUEST, LOAD_LIKELIST_SUCCESS, LOAD_LIKELIST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_REQUEST", function() { return EDITING_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_SUCCESS", function() { return EDITING_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_FAILURE", function() { return EDITING_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_OFF", function() { return EDITING_PROFILE_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_ON", function() { return EDITING_PROFILE_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKELIST_REQUEST", function() { return LOAD_LIKELIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKELIST_SUCCESS", function() { return LOAD_LIKELIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKELIST_FAILURE", function() { return LOAD_LIKELIST_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isSignedUp: false,
  // 회원가입 성공
  isSigningUp: false,
  // 회원가입 시도중
  signUpErrorReason: '',
  // 회원가입 실패 사유
  me: null,
  // 내 정보
  isUserLoadding: false,
  editing: false,
  likeList: []
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_REQUEST';
var EDITING_PROFILE_REQUEST = 'EDITING_PROFILE_REQUEST';
var EDITING_PROFILE_SUCCESS = 'EDITING_PROFILE_SUCCESS';
var EDITING_PROFILE_FAILURE = 'EDITING_PROFILE_FAILURE';
var EDITING_PROFILE_OFF = 'EDITING_PROFILE_OFF';
var EDITING_PROFILE_ON = 'EDITING_PROFILE_ON';
var LOAD_LIKELIST_REQUEST = 'LOAD_LIKELIST_REQUEST';
var LOAD_LIKELIST_SUCCESS = 'LOAD_LIKELIST_SUCCESS';
var LOAD_LIKELIST_FAILURE = 'LOAD_LIKELIST_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD_LIKELIST_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_LIKELIST_SUCCESS:
      {
        console.log(action.data);
        return _objectSpread({}, state, {
          likeList: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.likeList), [action.data])
        });
      }

    case LOAD_LIKELIST_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_USER_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_USER_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          me: action.data
        });
      }

    case LOAD_USER_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOG_IN_REQUEST:
      {
        return _objectSpread({}, state, {
          isLoggingIn: true,
          isUserLoadding: true
        });
      }

    case LOG_IN_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          isUserLoadding: false,
          me: action.data
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOG_OUT_SUCCESS:
      {
        return _objectSpread({}, state, {
          me: null,
          isLoggedIn: false
        });
      }

    case LOG_OUT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case SIGN_UP_REQUEST:
      {
        return _objectSpread({}, state, {
          isSigningUp: true,
          isUserLoadding: true
        });
      }

    case SIGN_UP_FAILURE:
      {
        return _objectSpread({}, state, {
          isSigningUp: true
        });
      }

    case SIGN_UP_SUCCESS:
      {
        return _objectSpread({}, state, {
          isUserLoadding: false,
          me: action.data,
          editing: true
        });
      }

    case EDITING_PROFILE_REQUEST:
      {
        return _objectSpread({}, state, {
          isUserLoadding: true
        });
      }

    case EDITING_PROFILE_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          editing: false,
          isUserLoadding: false,
          me: action.data
        });
      }

    case EDITING_PROFILE_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case EDITING_PROFILE_OFF:
      {
        return _objectSpread({}, state, {
          editing: false,
          isUserLoadding: false
        });
      }

    case EDITING_PROFILE_ON:
      {
        return _objectSpread({}, state, {
          editing: true
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
//# sourceMappingURL=mypage.js.0912fe22c4279239f934.hot-update.js.map