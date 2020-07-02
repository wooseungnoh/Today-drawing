"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _middlewares = require("../middlewares");

var _postController = require("../controller/postController");

var postRouter = (0, _express["default"])();
postRouter.post(_routes["default"].uploadphoto, _middlewares.uploadPhotoMulter, _postController.uploadPhoto);
postRouter.post(_routes["default"].uploadpost, _postController.uploadPost);
postRouter.get(_routes["default"].loadedpost, _postController.loadedPostList);
postRouter.post(_routes["default"].photodetail, _postController.loadedPostDetail);
postRouter.post(_routes["default"].editpost, _postController.editPost);
postRouter.post(_routes["default"].deletepost, _postController.deletePost);
postRouter.post(_routes["default"].like, _postController.like);
postRouter.post(_routes["default"].unlike, _postController.unlike);
postRouter.get(_routes["default"].loadword, _postController.loadWord);
postRouter.post(_routes["default"].addword, _postController.addWord);
postRouter.post(_routes["default"].select, _postController.loadedSelectedPostList);
var _default = postRouter;
exports["default"] = _default;