webpackHotUpdate("static\\development\\pages\\upload.js",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "D:\\todayDraw\\front\\pages\\upload.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Ul = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "upload__Ul",
  componentId: "sc-19rfv45-0"
})(["position:absolute;display:flex;flex-direction:row;bottom:45px;"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "upload__Li",
  componentId: "sc-19rfv45-1"
})(["width:30px;height:30px;border-radius:50%;margin:5px;list-style:none;cursor:pointer;"]);
var Canvas = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].canvas.withConfig({
  displayName: "upload__Canvas",
  componentId: "sc-19rfv45-2"
})(["width:700px;height:700px;border-radius:15px;background:#ffffff;box-shadow:18px 18px 25px #00000057,-18px -18px 25px #ffffff;"]);
var RangeInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "upload__RangeInput",
  componentId: "sc-19rfv45-3"
})([""]);
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "upload__InputContainer",
  componentId: "sc-19rfv45-4"
})(["height:10px display:flex;flex-direction:row-reverse;justify-content:center;align-items:center;transform:rotate(-90deg);position:absolute;right:0;"]);
var PainterSize = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "upload__PainterSize",
  componentId: "sc-19rfv45-5"
})(["width:", "px;height:", "px;background:#000000;border-radius:50%;transform:translateX(40px);"], function (_ref) {
  var size = _ref.size;
  return size || '2.5';
}, function (_ref2) {
  var size = _ref2.size;
  return size || '2.5';
});

var Upload = function Upload() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2.5),
      lineSize = _useState[0],
      setLineSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    painter: false,
    strokeStyle: '#000',
    lineWidth: 2.5
  }),
      canvasState = _useState2[0],
      setCanvasState = _useState2[1];

  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    canvas.current.width = 700;
    canvas.current.height = 700;
    var ctx = canvas.current.getContext('2d');
    ctx.strokeStyle = canvasState.strokeStyle;
    ctx.lineWidth = canvasState.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);
  return __jsx(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: '50px',
      position: 'relative',
      width: '700px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(Canvas, {
    ref: canvas,
    onMouseMove: onMouseMove,
    onMouseDown: startPainting,
    onMouseUp: stopPainting,
    onMouseLeave: stopPainting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), __jsx(Ul, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(Li, {
    style: {
      backgroundColor: '#00a8ff'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }), __jsx(Li, {
    style: {
      backgroundColor: '#9c88ff'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), __jsx(Li, {
    style: {
      backgroundColor: '#fbc531'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx(Li, {
    style: {
      backgroundColor: '#e84118'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx(Li, {
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid black'
    },
    onClick: colorChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  })), __jsx(InputContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(PainterSize, {
    size: lineSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), __jsx(RangeInput, {
    type: "range",
    min: "0.1",
    max: "100",
    defaultValue: lineSize,
    onChange: lineChange,
    onMouseUp: lineWidthChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=upload.js.abfd1749e6a919fee19f.hot-update.js.map