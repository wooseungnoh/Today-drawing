webpackHotUpdate("static\\development\\pages\\p\\[imgDetail].js",{

/***/ "./components/like.js":
/*!****************************!*\
  !*** ./components/like.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\shdnt\\Desktop\\today\\front\\components\\like.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Like = function Like() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.drawing;
  }),
      nowShowingPost = _useSelector2.nowShowingPost;

  var likeRequest = function likeRequest() {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["LIKE_REQUEST"],
      data: {
        id: nowShowingPost.post._id
      }
    });
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["LIKE_ON"]
    });
  };

  var unlikeRequest = function unlikeRequest() {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_5__["UNLIKE_REQUEST"],
      data: {
        id: nowShowingPost.post._id
      }
    });
  };

  var printLike = function printLike() {
    if (nowShowingPost && me) {
      return String(nowShowingPost.post.liker.indexOf(me._id)) === '-1' ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"],
        color: "#707070",
        onClick: likeRequest,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"],
        color: "#ff5959",
        onClick: unlikeRequest,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      });
    }
  };

  return printLike();
};

/* harmony default export */ __webpack_exports__["default"] = (Like);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.0e9d61fc3e55846f1061.hot-update.js.map