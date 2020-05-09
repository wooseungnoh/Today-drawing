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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ "./pages/login.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\shdnt\\Desktop\\today\\front\\pages\\upload.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Upload = function Upload() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      imagePaths = _useSelector.imagePaths;

  var _useInput = Object(_login__WEBPACK_IMPORTED_MODULE_7__["useInput"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      title = _useInput2[0],
      setTitle = _useInput2[1];

  var _useInput3 = Object(_login__WEBPACK_IMPORTED_MODULE_7__["useInput"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      desciption = _useInput4[0],
      setDesciption = _useInput4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var addPhoto = function addPhoto(e) {
    e.preventDefault();
  };

  var handlePhotoFile = function handlePhotoFile(e) {
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('photo', f);
    });
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["UPPLOAD_CANVAS_REQUEST"],
      data: imageFormData
    });
  };

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    wsize: "300px",
    hsize: "300px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, imag, __jsx("img", {
    src: "http://localhost:5000/".concat(imagePaths[0]),
    style: {
      width: '100%'
    },
    alt: imagePaths[0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: addPhoto,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "file",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\uD30C\uC77C \uC120\uD0DD"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "file",
    name: "photo",
    onChange: handlePhotoFile,
    accept: "image/*",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: title,
    onChange: setTitle,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC124\uBA85"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Textarea"], {
    value: desciption,
    onChange: setDesciption,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "submit",
    value: "\uC791\uC131",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=upload.js.119cba32970f4b4cec9f.hot-update.js.map