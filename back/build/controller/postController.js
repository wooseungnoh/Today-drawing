"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWord = exports.loadWord = exports.unlike = exports.like = exports.deletePost = exports.editPost = exports.loadedPostDetail = exports.loadedSelectedPostList = exports.loadedPostList = exports.uploadPost = exports.uploadPhoto = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Post = _interopRequireDefault(require("../model/Post"));

var _User = _interopRequireDefault(require("../model/User"));

var _Word = _interopRequireDefault(require("../model/Word"));

var _wordList = require("../wordList");

var DateConstructor = /*#__PURE__*/function () {
  function DateConstructor(model) {
    (0, _classCallCheck2["default"])(this, DateConstructor);
    this.model = model;
  }

  (0, _createClass2["default"])(DateConstructor, [{
    key: "thisMonthIndexnumber",
    value: function thisMonthIndexnumber() {
      var date = new Date();
      var thisMonthIndexnumber = this.model.findIndex(function (i) {
        return i.name === "".concat(date.getMonth() + 1, "\uC6D4");
      });
      return thisMonthIndexnumber;
    }
  }, {
    key: "yesterdayWord",
    value: function yesterdayWord() {
      var date = new Date();
      var thisMonthIndexnumber = this.model.findIndex(function (i) {
        return i.name === "".concat(date.getMonth() + 1, "\uC6D4");
      });
      return this.model[thisMonthIndexnumber].wordListArray[date.getDate() - 2];
    }
  }, {
    key: "todayWord",
    value: function todayWord() {
      var date = new Date();
      var thisMonthIndexnumber = this.model.findIndex(function (i) {
        return i.name === "".concat(date.getMonth() + 1, "\uC6D4");
      });
      return this.model[thisMonthIndexnumber].wordListArray[date.getDate() - 1];
    }
  }]);
  return DateConstructor;
}();

var uploadPhoto = function uploadPhoto(req, res) {
  res.json(req.file.location);
};

exports.uploadPhoto = uploadPhoto;

var uploadPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, title, description, imagePaths, word, newPost, post;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description, imagePaths = _req$body.imagePaths, word = _req$body.word;
            _context.next = 3;
            return _Post["default"].create({
              fileUrl: imagePaths[0],
              title: title,
              description: description,
              creator: req.user.id,
              subject: word
            });

          case 3:
            newPost = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return _Post["default"].findById(newPost.id).populate('creator');

          case 7:
            post = _context.sent;
            res.send(post);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0);
            res.status(400);

          case 15:
            return _context.abrupt("return");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function uploadPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.uploadPost = uploadPost;

var loadedPostList = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var wordData, dateConstructor, post;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Word["default"].find({});

          case 3:
            wordData = _context2.sent;
            dateConstructor = new DateConstructor(wordData);
            _context2.next = 7;
            return _Post["default"].find({
              subject: dateConstructor.todayWord()
            }).sort({
              _id: -1
            });

          case 7:
            post = _context2.sent;
            res.json(post);
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400);

          case 15:
            return _context2.abrupt("return");

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function loadedPostList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loadedPostList = loadedPostList;

var loadedSelectedPostList = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var word, post;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            word = req.body.word;
            console.log(word);
            _context3.prev = 2;
            _context3.next = 5;
            return _Post["default"].find({
              subject: word
            });

          case 5:
            post = _context3.sent;
            res.json(post);
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(400);

          case 13:
            return _context3.abrupt("return");

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));

  return function loadedSelectedPostList(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.loadedSelectedPostList = loadedSelectedPostList;

var loadedPostDetail = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var postId, user, post, data, _data;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            postId = req.body.postId, user = req.user;
            _context4.prev = 1;
            _context4.next = 4;
            return _Post["default"].findById(postId).populate('creator');

          case 4:
            post = _context4.sent;

            if (user) {
              data = {
                post: post,
                user: user
              };
              res.json(data);
            } else {
              _data = {
                post: post,
                user: ''
              };
              res.json(_data);
            }

            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(400);

          case 12:
            return _context4.abrupt("return");

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function loadedPostDetail(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.loadedPostDetail = loadedPostDetail;

var editPost = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, id, title, description, post;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, title = _req$body2.title, description = _req$body2.description;
            _context5.prev = 1;
            _context5.next = 4;
            return _Post["default"].findByIdAndUpdate(id, {
              title: title,
              description: description
            });

          case 4:
            post = _context5.sent;
            res.send('수정완료');
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            res.status(400);

          case 12:
            return _context5.abrupt("return");

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function editPost(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.editPost = editPost;

var deletePost = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, PostList;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.body.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _Post["default"].findByIdAndRemove({
              _id: id
            });

          case 4:
            _context6.next = 6;
            return _Post["default"].find({}).populate('creator').sort({
              _id: -1
            });

          case 6:
            PostList = _context6.sent;
            res.json(PostList);
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 13:
            return _context6.abrupt("return");

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 10]]);
  }));

  return function deletePost(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deletePost = deletePost;

var like = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, user, post, users, data, _data2;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.body.id, user = req.user;
            _context7.prev = 1;
            _context7.next = 4;
            return _Post["default"].findById(id).populate('creator');

          case 4:
            post = _context7.sent;
            _context7.next = 7;
            return _User["default"].findById(user._id);

          case 7:
            users = _context7.sent;
            post.liker.push(req.user._id);
            users.likeList.push(id);
            users.save();
            post.save();

            if (user) {
              data = {
                post: post,
                user: user
              };
              res.json(data);
            } else {
              _data2 = {
                post: post,
                user: ''
              };
              res.json(_data2);
            }

            _context7.next = 19;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            res.status(400);

          case 19:
            return _context7.abrupt("return");

          case 20:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 15]]);
  }));

  return function like(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.like = like;

var unlike = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, user, post, users, data, _data3;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.body.id, user = req.user;
            _context8.prev = 1;
            _context8.next = 4;
            return _Post["default"].findById(id).populate('creator');

          case 4:
            post = _context8.sent;
            _context8.next = 7;
            return _User["default"].findById(user._id);

          case 7:
            users = _context8.sent;
            users.likeList.pull(id);
            post.liker.pull(user._id);
            users.save();
            post.save();

            if (user) {
              data = {
                post: post,
                user: user
              };
              res.json(data);
            } else {
              _data3 = {
                post: post,
                user: ''
              };
              res.json(_data3);
            }

            _context8.next = 19;
            break;

          case 15:
            _context8.prev = 15;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            res.status(400);

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 15]]);
  }));

  return function unlike(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.unlike = unlike;

var loadWord = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var date, lastDate, wordArray, lastDay, wordLength, wordData, dateConstructor, i, worditem, _wordData, findindex, sortOldWordList;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            date = new Date();
            lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            wordArray = [];
            lastDay = lastDate.getDate();
            wordLength = _wordList.basicWordList.length;
            _context9.prev = 5;
            _context9.next = 8;
            return _Word["default"].find({});

          case 8:
            wordData = _context9.sent;
            dateConstructor = new DateConstructor(wordData);

            if (!(date.getDate() === 1 && dateConstructor.thisMonthIndexnumber() === -1)) {
              _context9.next = 18;
              break;
            }

            //1일마다 새로운 배열생성
            for (i = 0; i < lastDay; i++) {
              worditem = _wordList.basicWordList[Math.floor(Math.random() * wordLength)];
              wordArray.push(worditem);
            }

            _context9.next = 14;
            return _Word["default"].create({
              name: String("".concat(date.getMonth() + 1, "\uC6D4")),
              wordListArray: wordArray,
              oldWordList: []
            });

          case 14:
            _wordData = _context9.sent;
            res.json(_wordData.wordListArray[date.getDate() - 1]);
            _context9.next = 23;
            break;

          case 18:
            //오늘의 단어를 리턴하는 부분
            //어제의 단어가 oldWordList 에 포함되었는지 확인용
            findindex = wordData[dateConstructor.thisMonthIndexnumber()].oldWordList.includes(dateConstructor.yesterdayWord()); //민약 어제의 단어가 리스트에 없다면 추가하는 부분

            if (!findindex) {
              wordData[dateConstructor.thisMonthIndexnumber()].oldWordList.push(dateConstructor.yesterdayWord());
            } //oldList 정렬


            sortOldWordList = wordData[dateConstructor.thisMonthIndexnumber()].oldWordList.reverse();
            wordData[dateConstructor.thisMonthIndexnumber()].save(); //프론트로 반환

            res.json({
              word: dateConstructor.todayWord(),
              oldWordList: sortOldWordList
            });

          case 23:
            _context9.next = 29;
            break;

          case 25:
            _context9.prev = 25;
            _context9.t0 = _context9["catch"](5);
            console.log(_context9.t0);
            res.status(400);

          case 29:
            return _context9.abrupt("return");

          case 30:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[5, 25]]);
  }));

  return function loadWord(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.loadWord = loadWord;

var addWord = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var wordName, date, wordData, dateConstructor;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            wordName = req.body.wordName;
            date = new Date();
            _context10.prev = 2;
            _context10.next = 5;
            return _Word["default"].find({});

          case 5:
            wordData = _context10.sent;
            dateConstructor = new DateConstructor(wordData);
            wordData[dateConstructor.thisMonthIndexnumber()].wordListArray.splice(Math.floor(Math.random() * (wordData[dateConstructor.thisMonthIndexnumber()].wordListArray.length - (date.getDate() + 1)) + (date.getDate() + 1)), 0, wordName);
            wordData[dateConstructor.thisMonthIndexnumber()].save();
            res.send('추가성공');
            _context10.next = 16;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            res.status(400);

          case 16:
            return _context10.abrupt("return");

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 12]]);
  }));

  return function addWord(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.addWord = addWord;