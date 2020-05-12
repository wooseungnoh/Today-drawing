import Photo from '../model/Photo';
import mongoose from 'mongoose';

export const postUploadPhoto = (req, res) => {
  res.json(req.file.filename);
};

export const postUploadPost = async (req, res) => {
  const {
    body: { title, description, imagePaths },
  } = req;

  const newPost = await Photo.create({
    fileUrl: imagePaths[0],
    title,
    description,
    creator: req.user.id,
  });

  try {
    const post = await Photo.findById(newPost.id).populate('creator');
    res.send(post);
  } catch (e) {
    console.log(e);
    res.send('포스트 업데이트 실패');
  }
  return;
};

export const loadedPostList = async (req, res) => {
  try {
    const post = await Photo.find({}).sort({ _id: -1 });
    res.json(post);
  } catch (e) {
    console.log(e);
  }
  return;
};

export const loadedPhotoDetail = async (req, res) => {
  const {
    body: { postId },
    user,
  } = req;
  try {
    const post = await Photo.findById(postId).populate('creator');
    if (user) {
      console.log(user);
      const data = {
        post,
        user,
      };
      res.json(data);
    } else {
      const data = {
        post,
        user: '',
      };
      res.json(data);
    }
  } catch (e) {
    console.log(e);
  }
  return;
};

export const editPost = async (req, res) => {
  const { id, title, description } = req.body;
  mongoose.set('useFindAndModify', false);

  try {
    const post = await Photo.findByIdAndUpdate(id, {
      title,
      description,
    });
    console.log(post);
    res.send('수정완료');
  } catch (e) {
    console.log(e);
  }
  return;
};
