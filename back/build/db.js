"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log('Connected to DB');
};

var handleError = function handleError(error) {
  return console.log("error on DB connetction:".concat(error));
};

db.once('open', handleOpen);
db.on('error', handleError);