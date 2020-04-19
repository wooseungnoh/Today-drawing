webpackHotUpdate("static\\development\\pages\\drawing.js",{

/***/ "./pages/drawing.js":
/*!**************************!*\
  !*** ./pages/drawing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_askUploadModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/askUploadModal */ "./components/askUploadModal.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_uiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/uiComponent */ "./components/uiComponent.js");
/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/canvas */ "./components/canvas.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_drawing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/drawing */ "./reducers/drawing.js");


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\drawing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Upload = function Upload() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.drawing;
  }),
      modalState = _useSelector.modalState;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2.5),
      lineSize = _useState[0],
      setLineSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    painter: false,
    strokeStyle: '#000',
    lineWidth: 2.5,
    defaultCanvasSize: 500
  }),
      canvasState = _useState2[0],
      setCanvasState = _useState2[1];

  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var startPainting = function startPainting() {
    setCanvasState(_objectSpread({}, canvasState, {
      painter: true
    }));
  };

  var stopPainting = function stopPainting() {
    setCanvasState(_objectSpread({}, canvasState, {
      painter: false
    }));
  };

  var onMouseMove = function onMouseMove(e) {
    var _e$nativeEvent = e.nativeEvent,
        y = _e$nativeEvent.offsetY,
        x = _e$nativeEvent.offsetX;
    var ctx = canvas.current.getContext('2d');

    if (!canvasState.painter) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  var colorChange = function colorChange(e) {
    var ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = e.nativeEvent.target.style.backgroundColor;
    setCanvasState(_objectSpread({}, canvasState, {
      strokeStyle: e.nativeEvent.target.style.backgroundColor
    }));
  };

  var lineWidthChange = function lineWidthChange(e) {
    var ctx = canvas.current.getContext('2d');
    var size = e.nativeEvent.target.value;
    ctx.lineWidth = size;
  };

  var lineChange = function lineChange(e) {
    var size = e.nativeEvent.target.value;
    setLineSize(size);
  };

  var handleSave = function handleSave() {
    var image = canvas.current.toDataURL();
    var link = document.createElement('a');
    link.href = image;
    link.download = 'myImg';
    link.click();
    setTimeout(function () {
      dispatch({
        type: _reducers_drawing__WEBPACK_IMPORTED_MODULE_8__["MODAL_ON"]
      });
    }, 3000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    canvas.current.width = canvasState.defaultCanvasSize;
    canvas.current.height = canvasState.defaultCanvasSize;
    var ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = canvasState.strokeStyle;
    ctx.lineWidth = canvasState.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasState.defaultCanvasSize, canvasState.defaultCanvasSize);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_askUploadModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    modalState: modalState,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("h2", {
    style: {
      margin: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "\uADF8\uB9BC \uADF8\uB9AC\uAE30"), __jsx(_components_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      padding: '30px',
      position: 'relative',
      width: '700px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Canvas"], {
    ref: canvas,
    onMouseMove: onMouseMove,
    onMouseDown: startPainting,
    onMouseUp: stopPainting,
    onMouseLeave: stopPainting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Ul"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Li"], {
    style: {
      backgroundColor: '#000000'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Li"], {
    style: {
      backgroundColor: '#00a8ff'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Li"], {
    style: {
      backgroundColor: '#9c88ff'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Li"], {
    style: {
      backgroundColor: '#fbc531'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Li"], {
    style: {
      backgroundColor: '#e84118'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }), __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["Li"], {
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid black'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(_components_canvas__WEBPACK_IMPORTED_MODULE_6__["PainterSize"], {
    size: lineSize,
    color: canvasState.strokeStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "range",
    min: "0.1",
    max: "100",
    defaultValue: lineSize,
    onChange: lineChange,
    onMouseUp: lineWidthChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }))), __jsx(_components_uiComponent__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleSave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "SAVE")));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=drawing.js.be38d0b4d19fbaf563c2.hot-update.js.map