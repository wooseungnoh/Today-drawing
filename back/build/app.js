"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _passport = _interopRequireDefault(require("passport"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./passport");

var _globalrouter = _interopRequireDefault(require("./router/globalrouter"));

var _postrouter = _interopRequireDefault(require("./router/postrouter"));

var _adminrouter = _interopRequireDefault(require("./router/adminrouter"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var CokieStore = (0, _connectMongo["default"])(_expressSession["default"]);
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use('/', _express["default"]["static"]('uploads'));
app.use((0, _cookieParser["default"])(process.env.SECRET_KEY));
app.use((0, _cors["default"])({
  origin: true,
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  secret: process.env.SECRET_KEY,
  resave: true,
  saveUninitialized: false,
  store: new CokieStore({
    mongooseConnection: _mongoose["default"].connection
  })
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use('/', _globalrouter["default"]);
app.use('/upload', _postrouter["default"]);
app.use('/admin', _adminrouter["default"]);
var _default = app;
exports["default"] = _default;