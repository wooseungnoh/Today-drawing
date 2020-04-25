webpackHotUpdate("static\\development\\pages\\signUp.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, EDITING_PROFILE_REQUEST, EDITING_PROFILE_SUCCESS, EDITING_PROFILE_FAILURE, EDITING_PROFILE_OFF, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_REQUEST", function() { return EDITING_PROFILE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_SUCCESS", function() { return EDITING_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_FAILURE", function() { return EDITING_PROFILE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITING_PROFILE_OFF", function() { return EDITING_PROFILE_OFF; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  editing: false
};
var dummyUser = {
  id: 1,
  nickName: '노우승',
  userInfo: '안녕하세요 노우승입니다.',
  photo: []
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var EDITING_PROFILE_REQUEST = 'EDITING_PROFILE_REQUEST';
var EDITING_PROFILE_SUCCESS = 'EDITING_PROFILE_SUCCESS';
var EDITING_PROFILE_FAILURE = 'EDITING_PROFILE_FAILURE';
var EDITING_PROFILE_OFF = 'EDITING_PROFILE_OFF';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
          me: dummyUser
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
        return _objectSpread({}, state, {
          isLoggedIn: false
        });
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
          editing: true
        });
      }

    case EDITING_PROFILE_REQUEST:
      {
        return _objectSpread({}, state, {
          editing: true,
          isUserLoadding: true
        });
      }

    case EDITING_PROFILE_SUCCESS:
      {
        return _objectSpread({}, state, {
          isLoggedIn: true,
          editing: false,
          isUserLoadding: false,
          me: dummyUser
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

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ })

})
//# sourceMappingURL=signUp.js.ac46c4f3e47423246ce8.hot-update.js.map