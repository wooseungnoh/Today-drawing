webpackHotUpdate("static\\development\\pages\\upload.js",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./pages/login.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\upload.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Upload = function Upload() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.drawing;
  }),
      addingPhoto = _useSelector.addingPhoto;

  var _useInput = Object(_login__WEBPACK_IMPORTED_MODULE_6__["useInput"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      title = _useInput2[0],
      setTitle = _useInput2[1];

  var _useInput3 = Object(_login__WEBPACK_IMPORTED_MODULE_6__["useInput"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      desciption = _useInput4[0],
      setDesciption = _useInput4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var addPhoto = function addPhoto(e) {
    e.preventDefault();
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["UPPLOAD_CANVAS_REQUEST"],
      data: title,
      desciption: desciption
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addingPhoto) {
      next_Router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/gallery');
      dispatch;
    }
  }, [addingPhoto]);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    wsize: "300px",
    hsize: "300px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "\uBBF8\uB9AC\uBCF4\uAE30 \uC774\uBBF8\uC9C0"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: addPhoto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "file",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "\uD30C\uC77C \uC120\uD0DD"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "file",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: title,
    onChange: setTitle,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC124\uBA85"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    value: desciption,
    onChange: setDesciption,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "submit",
    value: "\uC791\uC131",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=upload.js.a457971da7d792fc3200.hot-update.js.map