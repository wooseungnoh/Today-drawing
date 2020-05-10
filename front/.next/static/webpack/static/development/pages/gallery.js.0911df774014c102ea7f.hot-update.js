webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text */ "./components/text.js");
/* harmony import */ var _components_photoView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/photoView */ "./components/photoView.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");
var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Gallery = function Gallery() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.drawing;
  }),
      postList = _useSelector.postList;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_6__["LOAD_GALLERY_REQUEST"]
    });
  }, []);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flexDirection: "column",
    style: {
      minHeight: '700px',
      justifyContent: 'flex-start',
      marginTop: '100px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "\uC624\uB298\uC758 \uADF8\uB9BC\uB4E4"), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      marginTop: '30px',
      display: 'grid',
      gridTemplateRows: 'repeat(3, 200px)',
      gridTemplateColumns: 'repeat(2, 300px)',
      gridGap: '10px',
      marginBottom: '30px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, postList.map(function (item, id) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      key: id,
      href: "/p/[imgDetail]",
      as: "/p/".concat(item._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx(_components_photoView__WEBPACK_IMPORTED_MODULE_5__["default"], {
      creater: item.title,
      url: "http://localhost:5000/".concat(item.fileUrl),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=gallery.js.0911df774014c102ea7f.hot-update.js.map