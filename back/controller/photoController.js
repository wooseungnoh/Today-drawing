import Photo from '../model/Photo';
import User from '../model/User';
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
    res.status(400);
  }
  return;
};

export const loadedPostList = async (req, res) => {
  try {
    const post = await Photo.find({}).sort({ _id: -1 });
    res.json(post);
  } catch (e) {
    console.log(e);
    res.status(400);
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
    res.status(400);
  }
  return;
};

export const editPost = async (req, res) => {
  const { id, title, description } = req.body;

  try {
    const post = await Photo.findByIdAndUpdate(id, {
      title,
      description,
    });
    res.send('수정완료');
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};

export const deletePost = async (req, res) => {
  const { id } = req.body;
  try {
    const post = await Photo.findByIdAndRemove({ _id: id });
    res.send('삭제완료');
  } catch (e) {
    console.log(e);
  }
  return;
};

export const like = async (req, res) => {
  const { id } = req.body;
  try {
    const post = await Photo.findById(id);
    req.user.likeList.push(id);
    req.user.save();
    post.like = post.like += 1;
    post.save();
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

export const unlike = async (req, res) => {};
