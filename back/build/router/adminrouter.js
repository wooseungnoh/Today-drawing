"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _adminController = require("../controller/adminController");

var _postController = require("../controller/postController");

var adminRouter = (0, _express["default"])();
adminRouter.post(_routes["default"].secession, _adminController.secession);
adminRouter.post(_routes["default"].removepost, _postController.deletePost);
adminRouter.post(_routes["default"].editrole, _adminController.editRole);
adminRouter.get(_routes["default"].loadlist, _adminController.loadPostAndUser);
var _default = adminRouter;
exports["default"] = _default;