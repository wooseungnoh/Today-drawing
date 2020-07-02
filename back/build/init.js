"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./db");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

require("./model/User");

require("./model/Post");

require("./model/Word");

_dotenv["default"].config();

var handleListening = function handleListening() {
  console.log('Listening on : http://localhost:5000');
};

_app["default"].listen(process.env.PORT, handleListening);