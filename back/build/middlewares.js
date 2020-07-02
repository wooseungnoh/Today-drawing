"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadPhotoMulter = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_awsSdk["default"].config.update({
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  accessKeyId: process.env.AWS_KEY,
  region: 'ap-northeast-1'
});

var s3 = new _awsSdk["default"].S3();
var multerPhoto = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: 'public-read',
    bucket: 'todaydraw/photo'
  }),
  limits: {
    fileSize: 20 * 1024 * 1024
  }
});
var uploadPhotoMulter = multerPhoto.single('photo'); // multer.diskStorage({
//   destination(req, file, done) {
//     done(null, 'uploads');
//   },
//   filename(req, file, done) {
//     const ext = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, ext);
//     done(null, basename + new Date().valueOf() + ext);
//   },
// })

exports.uploadPhotoMulter = uploadPhotoMulter;