webpackHotUpdate("static\\development\\pages\\p\\[imgDetail].js",{

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Router */ "./node_modules/next/Router.js");
/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/drawing */ "./reducers/drawing.js");
/* harmony import */ var _back_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../back/routes */ "../back/routes.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var imgDetail = function imgDetail() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editing = _useState[0],
      setEditing = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      nowShowingPost = _useSelector2.nowShowingPost,
      editingSuccess = _useSelector2.editingSuccess,
      deletePostSuccess = _useSelector2.deletePostSuccess;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var nowUrl = document.location.href;
    var slice = nowUrl.split('p/');
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["LOAD_POST_DETAIL_REQUEST"],
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

    if (me === null) {
      alert('권한이 없습니다.');
      next_Router__WEBPACK_IMPORTED_MODULE_1___default.a.push("{document.location.href}");
    } else if (me._id === nowShowingPost.creator._id) {
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["EDIT_POST_DETAIL_REQUEST"],
        data: {
          id: nowShowingPost.post._id,
          title: e.target.childNodes[2].value,
          description: e.target.childNodes[4].value
        }
      });
    } else {
      alert('권한이 없습니다.');
    }

    setEditing(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (editingSuccess) {
      var nowUrl = document.location.href;
      var slice = nowUrl.split('p/');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["LOAD_POST_DETAIL_REQUEST"],
        data: {
          postId: slice[1]
        }
      });
    }
  }, [editingSuccess]);

  var onDeletePost = function onDeletePost() {
    if (confirm('정말 게시물을 삭제하시겠습니까?') === true) {
      if (me === null) {
        alert('권한이 없습니다.');
      } else if (me._id === nowShowingPost.creator._id) {
        dispatch({
          type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["DELETE_POST_REQUEST"],
          data: {
            id: nowShowingPost.post._id
          }
        });
      } else {
        alert('권한이 없습니다.');
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (deletePostSuccess) {
      next_Router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/gallery');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["DELETE_STATE_OFF"]
      });
    }
  }, [deletePostSuccess]);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Img"], {
    src: "http://localhost:5000/".concat(nowShowingPost.post.fileUrl),
    width: "500px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 101,
      columnNumber: 11
    }
  }, editing ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: onChangeData,
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '65px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
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
      lineNumber: 124,
      columnNumber: 23
    }
  }, "".concat(nowShowingPost.post.creator.writer)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, "".concat(nowShowingPost.post.createAt.split('T')[0]))), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: '80px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, "\uC791\uC131\uC644\uB8CC")), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, "\uB0B4\uC6A9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    edit: true,
    style: {
      width: '100%',
      resize: 'none'
    },
    defaultValue: nowShowingPost.post.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 156,
      columnNumber: 19
    }
  }, "".concat(nowShowingPost.post.creator.writer)), nowShowingPost.post.creator._id === nowShowingPost.user._id ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: '80px',
      margin: '2.5px'
    },
    onClick: handleEditingState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, "\uC218\uC815"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: '80px',
      margin: '2.5px'
    },
    onClick: onDeletePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, "\uC0AD\uC81C")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 182,
      columnNumber: 17
    }
  }, nowShowingPost.post.title), __jsx("div", {
    style: {
      width: '500px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }, nowShowingPost.post.description))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.bd03a4364c1ad8bdde9f.hot-update.js.map