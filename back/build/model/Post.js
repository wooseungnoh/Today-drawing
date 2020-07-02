"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var PhotoSchema = new _mongoose["default"].Schema({
  fileUrl: {
    type: String,
    required: 'file URL is required'
  },
  title: {
    type: String,
    required: 'file Title is required'
  },
  description: {
    type: String,
    required: 'file description is required'
  },
  createAt: {
    type: Date,
    "default": Date.now
  },
  creator: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  liker: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  }],
  subject: String
});

var model = _mongoose["default"].model('Photo', PhotoSchema);

var _default = model;
exports["default"] = _default;