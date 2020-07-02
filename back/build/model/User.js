"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));

var UserSchema = new _mongoose["default"].Schema({
  name: String,
  writer: String,
  email: String,
  userInfo: String,
  role: String,
  likeList: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Photo'
  }],
  createAt: {
    type: Date,
    "default": Date.now
  }
});
UserSchema.plugin(_passportLocalMongoose["default"], {
  usernameField: 'email'
});

var model = _mongoose["default"].model('User', UserSchema);

var _default = model;
exports["default"] = _default;