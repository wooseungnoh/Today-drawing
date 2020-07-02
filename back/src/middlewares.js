import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  accessKeyId: process.env.AWS_KEY,
  region: 'ap-northeast-1',
});

const multerPhoto = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'todaydraw/photo',
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

export const uploadPhotoMulter = multerPhoto.single('photo');

// multer.diskStorage({
//   destination(req, file, done) {
//     done(null, 'uploads');
//   },
//   filename(req, file, done) {
//     const ext = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, ext);
//     done(null, basename + new Date().valueOf() + ext);
//   },
// })
