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
      imagePaths = _useSelector.imagePaths,
      isUploadingPost = _useSelector.isUploadingPost;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector2.isLoggedIn;

  var _useInput = Object(_login__WEBPACK_IMPORTED_MODULE_7__["useInput"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      title = _useInput2[0],
      setTitle = _useInput2[1];

  var _useInput3 = Object(_login__WEBPACK_IMPORTED_MODULE_7__["useInput"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      description = _useInput4[0],
      setDescription = _useInput4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isLoggedIn) {
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
    }
  }, [isLoggedIn]);

  var addPhoto = function addPhoto(e) {
    e.preventDefault();

    if (isLoggedIn) {
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["UPPLOAD_POST_REQUEST"],
        data: {
          title: title,
          description: description,
          imagePaths: imagePaths
        }
      });
    } else {
      alert('작성 권한이 없습니다. 로그인페이지로 이동합니다.');
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
    }
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

  var handleDeleteImage = function handleDeleteImage() {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["DELETE_PHOTO"]
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isUploadingPost) {
      handleDeleteImage();
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["UPPLOADING_DONE"]
      });
      next_Router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/gallery');
    }
  }, [isUploadingPost]);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '300px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, imagePaths[0] ? __jsx("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "http://localhost:5000/".concat(imagePaths[0]),
    style: {
      height: '100%'
    },
    alt: imagePaths[0],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleDeleteImage,
    style: {
      position: 'absolute',
      top: '5px',
      right: '5px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "X")) : __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "\uBBF8\uB9AC\uBCF4\uAE30 \uC774\uBBF8\uC9C0"))), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: addPhoto,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "file",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: title,
    onChange: setTitle,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uC124\uBA85"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Textarea"], {
    value: description,
    onChange: setDescription,
    style: {
      resize: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "submit",
    value: "\uC791\uC131",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=upload.js.dcf3c7752517e570d8b7.hot-update.js.map