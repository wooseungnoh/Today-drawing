webpackHotUpdate("static\\development\\pages\\p\\[imgDetail].js",{

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_0__);
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editing = _useState[0],
      setEditing = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      nowShowingPost = _useSelector.nowShowingPost,
      editingSuccess = _useSelector.editingSuccess;

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

  var handleEditingState = function handleEditingState() {
    setEditing(function (prev) {
      return !prev;
    });
  };

  var onChangeData = function onChangeData(e) {
    e.preventDefault();
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["EDIT_PHOTO_DETAIL_REQUEST"],
      data: {
        id: nowShowingPost.post._id,
        title: e.target.childNodes[2].value,
        description: e.target.childNodes[4].value
      }
    });
    setEditing(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (editingSuccess) {
      var nowUrl = document.location.href;
      var slice = nowUrl.split('p/');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["LOAD_PHOTO_DETAIL_REQUEST"],
        data: {
          postId: slice[1]
        }
      });
    }
  }, [editingSuccess]);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Img"], {
    src: "http://localhost:5000/".concat(nowShowingPost.post.fileUrl),
    width: "500px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 64,
      columnNumber: 11
    }
  }, editing ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    onSubmit: onChangeData,
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
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
      lineNumber: 85,
      columnNumber: 21
    }
  }, "".concat(nowShowingPost.post.creator.writer)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "".concat(nowShowingPost.post.createAt.split('T')[0])), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: ""
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "\uC791\uC131\uC644\uB8CC")), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "\uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    style: {
      width: '100%'
    },
    defaultValue: nowShowingPost.post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, "\uB0B4\uC6A9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    style: {
      width: '100%'
    },
    defaultValue: nowShowingPost.post.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
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
      lineNumber: 118,
      columnNumber: 19
    }
  }, "".concat(nowShowingPost.post.creator.writer)), nowShowingPost.post.creator._id === nowShowingPost.user._id ? __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: ""
    },
    onClick: handleEditingState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, "\uC218\uC815") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "".concat(nowShowingPost.post.createAt.split('T')[0])), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bold: true,
    fontSize: "huge",
    style: {
      paddingBottom: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, nowShowingPost.post.title), __jsx("div", {
    style: {
      width: '500px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, nowShowingPost.post.description))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.6c08e744ebff887215b7.hot-update.js.map