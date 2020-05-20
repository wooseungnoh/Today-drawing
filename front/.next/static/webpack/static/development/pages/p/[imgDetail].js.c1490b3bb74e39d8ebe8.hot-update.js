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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/drawing */ "./reducers/drawing.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var imgDetail = function imgDetail() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editing = _useState[0],
      setEditing = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.drawing;
  }),
      nowShowingPost = _useSelector2.nowShowingPost,
      editingSuccess = _useSelector2.editingSuccess,
      deletePostSuccess = _useSelector2.deletePostSuccess,
      like = _useSelector2.like;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var nowUrl = document.location.href;
    var slice = nowUrl.split('p/');
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["LOAD_POST_DETAIL_REQUEST"],
      data: {
        postId: slice[1]
      }
    });
  }, []);

  var handleEditingState = function handleEditingState(e) {
    e.preventDefault();
    setEditing(function (prev) {
      return !prev;
    });
  };

  var onChangeData = function onChangeData(e) {
    e.preventDefault();
    var result = confirm("게시물을 수정하시겠습니까?");

    if (result) {
      if (me === null) {
        alert('권한이 없습니다.');
        location.href = "".concat(document.location.href);
      } else if (me._id === nowShowingPost.post.creator._id) {
        dispatch({
          type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["EDIT_POST_DETAIL_REQUEST"],
          data: {
            id: nowShowingPost.post._id,
            title: e.target.childNodes[2].value,
            description: e.target.childNodes[4].value
          }
        });
      } else {
        alert('권한이 없습니다.');
        location.href = "".concat(document.location.href);
      }

      setEditing(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (editingSuccess) {
      var nowUrl = document.location.href;
      var slice = nowUrl.split('p/');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["LOAD_POST_DETAIL_REQUEST"],
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
        location.href = "".concat(document.location.href);
      } else if (me._id === nowShowingPost.post.creator._id) {
        dispatch({
          type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["DELETE_POST_REQUEST"],
          data: {
            id: nowShowingPost.post._id
          }
        });
      } else {
        alert('권한이 없습니다.');
        location.href = "".concat(document.location.href);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (deletePostSuccess) {
      next_Router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/gallery');
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["DELETE_STATE_OFF"],
        data: {
          id: nowShowingPost.post._id
        }
      });
    }
  }, [deletePostSuccess]);

  var likeRequest = function likeRequest() {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["LIKE_REQUEST"],
      data: {
        id: nowShowingPost.post._id
      }
    });
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["LIKE_ON"]
    });
  };

  var unlikeRequest = function unlikeRequest() {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_REQUEST"],
      data: {
        id: nowShowingPost.post._id
      }
    });
  };

  var printLike = function printLike() {
    if (nowShowingPost && me) {
      return String(nowShowingPost.post.liker.indexOf(me._id)) === '-1' ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHeart"],
        onClick: likeRequest,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }
      }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHeart"],
        onClick: unlikeRequest,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      });
    }
  };

  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Img"], {
    src: "http://localhost:5000/".concat(nowShowingPost.post.fileUrl),
    width: "30%",
    style: {
      minWidth: '350px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      margin: '10px 0 ',
      width: '30%',
      minWidth: '350px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, editing ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onChangeData,
    none: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexDirection: true,
    style: {
      justifyContent: 'space-between'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      justifyContent: 'space-between'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "big",
    style: {
      padding: '15px 0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }, "".concat(nowShowingPost.post.creator.writer)), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      width: '80px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, "\uC791\uC131\uC644\uB8CC")), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 23
    }
  }, "".concat(nowShowingPost.post.createAt.split('T')[0]))), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, "\uC81C\uBAA9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    style: {
      width: '100%'
    },
    defaultValue: nowShowingPost.post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 19
    }
  }, "\uB0B4\uC6A9"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    edit: true,
    style: {
      width: '100%',
      resize: 'none'
    },
    defaultValue: nowShowingPost.post.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "big",
    style: {
      padding: '15px 0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }, "".concat(nowShowingPost.post.creator.writer)), nowShowingPost.post.creator._id === nowShowingPost.user._id && isLoggedIn ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 21
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      width: '80px',
      margin: '2.5px'
    },
    onClick: handleEditingState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, "\uC218\uC815"), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      width: '80px',
      margin: '2.5px'
    },
    onClick: onDeletePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, "\uC0AD\uC81C")) : printLike()), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "".concat(nowShowingPost.post.createAt.split('T')[0])), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "huge",
    style: {
      paddingBottom: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, nowShowingPost.post.title), __jsx("div", {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  }, nowShowingPost.post.description))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.c1490b3bb74e39d8ebe8.hot-update.js.map