webpackHotUpdate("static\\development\\pages\\p\\[imgDetail].js",{

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/drawing */ "./reducers/drawing.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var imgDetail = function imgDetail() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      postData = _useState[0],
      setData = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      nowShowingPost = _useSelector.nowShowingPost;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var nowUrl = document.location.href;
    var slice = nowUrl.split('p/');
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["LOAD_PHOTO_DETAIL_REQUEST"],
      data: {
        postId: slice[1]
      }
    });
  }, []);

  if (nowShowingPost) {
    var _fileUrl = nowShowingPost.fileUrl,
        writer = nowShowingPost.creator.writer,
        _createAt = nowShowingPost.createAt,
        _title = nowShowingPost.title,
        _description = nowShowingPost.description;
    setData({
      fileUrl: _fileUrl,
      creator: {
        writer: writer
      },
      createAt: _createAt,
      title: _title,
      description: _description
    });
    console.log(_fileUrl);
  }

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Img"], {
    src: "http://localhost:5000/".concat(fileUrl),
    width: "500px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      margin: '10px 0 '
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bold: true,
    fontSize: "big",
    style: {
      padding: '15px 0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "".concat(creator.writer)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "".concat(createAt)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bold: true,
    fontSize: "huge",
    style: {
      paddingBottom: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "".concat(title)), __jsx("div", {
    style: {
      width: '500px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, description)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.2b5e9941c08570fbcd8d.hot-update.js.map