webpackHotUpdate("static\\development\\pages\\signUp.js",{

/***/ "./components/editProfile.js":
/*!***********************************!*\
  !*** ./components/editProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./components/container.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _uiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uiComponent */ "./components/uiComponent.js");


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\components\\editProfile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var EditProfile = function EditProfile(_ref) {
  var signUp = _ref.signUp;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      editing = _useSelector.editing,
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    userInfo: '',
    name: ''
  }),
      info = _useState[0],
      setInfo = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var writerData = {
      userInfo: info.userInfo,
      writer: info.name
    };
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["EDITING_PROFILE_REQUEST"],
      data: {
        me: me,
        writerData: writerData
      }
    });
  };

  var modalOff = function modalOff() {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["EDITING_PROFILE_OFF"]
    });
  };

  var handleChangeInfo = function handleChangeInfo(e) {
    setInfo(_objectSpread({}, info, {
      userInfo: e.target.value
    }));
  };

  var handleChangename = function handleChangename(e) {
    setInfo(_objectSpread({}, info, {
      name: e.target.value
    }));
  };

  return __jsx(_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#4e4e4e6b',
      zIndex: 99999,
      top: '0',
      display: "".concat(editing && me ? '' : 'none')
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    wsize: "400px",
    flexDirection: "column",
    style: {
      borderRadius: '10px',
      background: '#ccc'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "\uC791\uAC00 \uD504\uB85C\uD544"), __jsx("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "text",
    value: info.name,
    onChange: handleChangename,
    placeholder: "\uC791\uAC00\uBA85",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Textarea"], {
    value: info.userInfo,
    onChange: handleChangeInfo,
    placeholder: "\uC791\uAC00\uC18C\uAC1C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      margin: '0',
      justifyContent: 'space-between'
    },
    wsize: "150px",
    hsize: "50px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "\uD655\uC778"), !signUp && __jsx(_uiComponent__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: modalOff,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "\uCDE8\uC18C")))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditProfile);

/***/ })

})
//# sourceMappingURL=signUp.js.41bee570819f8b63cb16.hot-update.js.map