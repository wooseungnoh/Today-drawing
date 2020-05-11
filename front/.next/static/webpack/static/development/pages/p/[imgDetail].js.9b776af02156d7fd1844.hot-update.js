webpackHotUpdate("static\\development\\pages\\p\\[imgDetail].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./pages/p/[imgDetail].js":
/*!********************************!*\
  !*** ./pages/p/[imgDetail].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/text */ "./components/text.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/container */ "./components/container.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/drawing */ "./reducers/drawing.js");


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\p\\[imgDetail].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var imgDetail = function imgDetail() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.drawing;
  });

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSelector.nowShowingPost);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var nowUrl = document.location.href;
    var slice = nowUrl.split('p/');
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_7__["LOAD_PHOTO_DETAIL_REQUEST"],
      data: {
        postId: slice[1]
      }
    });
  }, []);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, nowShowingPost ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_4__["Img"], {
    src: "http://localhost:5000/".concat(nowShowingPost.fileUrl),
    width: "500px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 29,
      columnNumber: 11
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
      lineNumber: 37,
      columnNumber: 13
    }
  }, "".concat(nowShowingPost.creator.writer)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontSize: "medium",
    style: {
      paddingBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "".concat(nowShowingPost.createAt)), __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bold: true,
    fontSize: "huge",
    style: {
      paddingBottom: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "".concat(nowShowingPost.title)), __jsx("div", {
    style: {
      width: '500px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, nowShowingPost.description)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null));
};

/* harmony default export */ __webpack_exports__["default"] = (imgDetail);

/***/ })

})
//# sourceMappingURL=[imgDetail].js.9b776af02156d7fd1844.hot-update.js.map