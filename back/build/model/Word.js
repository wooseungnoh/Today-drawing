"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var WordSchema = new _mongoose["default"].Schema({
  name: String,
  wordListArray: Array,
  oldWordList: Array
});

var model = _mongoose["default"].model('Word', WordSchema);

var _default = model;
exports["default"] = _default;