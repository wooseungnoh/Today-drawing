"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controller/userController");

var _routes = _interopRequireDefault(require("../routes"));

var globalRouter = (0, _express["default"])();
globalRouter.post(_routes["default"].login, _userController.login);
globalRouter.post(_routes["default"].logout, _userController.logout);
globalRouter.post(_routes["default"].signup, _userController.signup, _userController.login);
globalRouter.post(_routes["default"].editing, _userController.editing);
globalRouter.get(_routes["default"].load, _userController.loadUser);
globalRouter.get(_routes["default"].loadlikelist, _userController.loadLikeList);
var _default = globalRouter;
exports["default"] = _default;