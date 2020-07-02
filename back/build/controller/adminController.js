"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editRole = exports.secession = exports.loadPostAndUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../model/User"));

var _Post = _interopRequireDefault(require("../model/Post"));

//포스트와 회원목록 불러오기
var loadPostAndUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var post, user, allList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Post["default"].find({}).populate('creator').sort({
              _id: -1
            });

          case 3:
            post = _context.sent;
            _context.next = 6;
            return _User["default"].find({}).sort({
              _id: -1
            });

          case 6:
            user = _context.sent;
            allList = {
              post: post,
              user: user
            };
            res.json(allList);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(400);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function loadPostAndUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //회원 탈퇴시키기


exports.loadPostAndUser = loadPostAndUser;

var secession = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, userList;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.body.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findByIdAndRemove(id);

          case 4:
            _context2.next = 6;
            return _User["default"].find({}).sort({
              _id: -1
            });

          case 6:
            userList = _context2.sent;
            res.json(userList);
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(400);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function secession(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //권한 수정


exports.secession = secession;

var editRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, objectId, role, newUserList;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, objectId = _req$body.objectId, role = _req$body.role;
            _context3.prev = 1;
            console.log(objectId, role);
            _context3.next = 5;
            return _User["default"].findByIdAndUpdate(objectId, {
              role: role
            });

          case 5:
            _context3.next = 7;
            return _User["default"].find({}).sort({
              _id: -1
            });

          case 7:
            newUserList = _context3.sent;
            return _context3.abrupt("return", res.json(newUserList));

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(400);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 11]]);
  }));

  return function editRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.editRole = editRole;