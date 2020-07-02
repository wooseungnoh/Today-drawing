"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLikeList = exports.editing = exports.signup = exports.logout = exports.loadUser = exports.login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../model/User"));

var _passport = _interopRequireDefault(require("passport"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config(); //로그인


var login = function login(req, res, next) {
  _passport["default"].authenticate('local', function (err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    }

    if (info) {
      return res.status(401).send(info);
    }

    req.login(user, function (loginErr) {
      if (loginErr) {
        return next(loginErr);
      }

      var userData = Object.assign({}, user.toJSON());
      delete userData.password;
      return res.json(userData);
    });
  })(req, res, next);
}; //유저 정보 불러오기


exports.login = login;

var loadUser = function loadUser(req, res) {
  if (!req.user) {
    return res.status(401);
  }

  return res.json(req.user);
}; //로그아웃


exports.loadUser = loadUser;

var logout = function logout(req, res) {
  req.logout();
  req.session.destroy(function () {
    res.clearCookie('connect.sid');
    res.send('로그아웃 성공');
  });
}; //회원가입


exports.logout = logout;

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, email, name, password, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, name = _req$body.name, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return (0, _User["default"])({
              name: name,
              email: email,
              userInfo: '',
              writer: '',
              role: String(process.env.ADMIN_KEY) === String(password) ? 'admin' : 'user'
            });

          case 4:
            user = _context.sent;
            _context.next = 7;
            return _User["default"].register(user, password);

          case 7:
            next();
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.send('가입실패');

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function signup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); //프로필 정보 수정


exports.signup = signup;

var editing = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, _id, _req$body2$writerData, userInfo, writer, user;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, _id = _req$body2.me._id, _req$body2$writerData = _req$body2.writerData, userInfo = _req$body2$writerData.userInfo, writer = _req$body2$writerData.writer;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findByIdAndUpdate(_id, {
              userInfo: userInfo,
              writer: writer
            });

          case 4:
            user = req.user;
            return _context2.abrupt("return", res.json(user));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.send('프로필 업데이트 실패');

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function editing(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}(); // like list 불러오기


exports.editing = editing;

var loadLikeList = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _id, user;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = req.user._id;
            _context3.prev = 1;
            _context3.next = 4;
            return _User["default"].findById(_id).populate('likeList');

          case 4:
            user = _context3.sent;
            res.json(user.likeList);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(400);

          case 12:
            return _context3.abrupt("return");

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function loadLikeList(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.loadLikeList = loadLikeList;