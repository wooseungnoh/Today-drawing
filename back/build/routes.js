"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//global
var LOGIN = '/login';
var LOGOUT = '/logout';
var SIGNUP = '/signup';
var EDITING = '/editing';
var LOAD = '/load';
var LOADLIKELIST = '/loadlikelist'; //photo

var PHOTO = '/photo';
var UPLOADPHOTO = '/uploadphoto';
var UPLOADPOST = '/uploadpost';
var LOADEDPOST = '/loaded';
var LOADEDALLPOST = '/allloaded';
var PHOTODETAIL = '/photodetail';
var EDITPOST = '/editpost';
var DELETEPOST = '/deletepost';
var LIKE = '/like';
var UNLIKE = '/unlike';
var LOADWORD = '/loadword';
var ADDWORD = '/addword';
var SELECT = '/select'; //admin

var SECESSION = '/secession';
var REMOVEPOST = '/removepost';
var LOADLIST = '/loadlist';
var EDITROLE = '/editrole';
var routes = {
  editrole: EDITROLE,
  removepost: REMOVEPOST,
  select: SELECT,
  loadlist: LOADLIST,
  addword: ADDWORD,
  loadword: LOADWORD,
  login: LOGIN,
  logout: LOGOUT,
  signup: SIGNUP,
  editing: EDITING,
  load: LOAD,
  photo: PHOTO,
  uploadphoto: UPLOADPHOTO,
  uploadpost: UPLOADPOST,
  loadedpost: LOADEDPOST,
  loadedallpost: LOADEDALLPOST,
  photodetail: PHOTODETAIL,
  editpost: EDITPOST,
  deletepost: DELETEPOST,
  like: LIKE,
  loadlikelist: LOADLIKELIST,
  unlike: UNLIKE,
  secession: SECESSION
};
var _default = routes;
exports["default"] = _default;