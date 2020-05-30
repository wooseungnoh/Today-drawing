import Photo from '../model/Photo';
import User from '../model/User';
import Word from '../model/Word';
import { wordList } from '../wordList';
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
  const {
    body: { id },
    user,
  } = req;
  try {
    const post = await Photo.findById(id).populate('creator');
    const users = await User.findById(user._id);
    post.liker.push(req.user._id);
    users.likeList.push(id);
    users.save();
    post.save();

    if (user) {
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

export const unlike = async (req, res) => {
  const {
    body: { id },
    user,
  } = req;
  try {
    const post = await Photo.findById(id).populate('creator');
    const users = await User.findById(user._id);
    users.likeList.pull(id);
    post.liker.pull(user._id);
    users.save();
    post.save();

    if (user) {
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
};

export const loadWord = async (req, res) => {
  const date = new Date();
  const now = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let wordArray = [];
  const lastDay = now.getDate();
  const wordLength = wordList.length;
  try {
    const wordsLists = await Word.find({});
    const arrnumber = wordsLists.findIndex(
      (i) => i.name === `${date.getMonth() + 1}월`,
    );

    if (date.getDate() === 1 && arrnumber === -1) {
      for (let i = 0; i < lastDay; i++) {
        const choiceword = wordList[Math.floor(Math.random() * wordLength)];
        wordArray.push(choiceword);
      }

      const wordData = await Word.create({
        name: String(`${date.getMonth() + 1}월`),
        wordListArray: wordArray,
      });

      res.json(wordData.wordListArray[date.getDate() - 1]);
    } else {
      const wordData = await Word.find({});

      const arrnumber = wordData.findIndex(
        (i) => i.name === `${date.getMonth() + 1}월`,
      );

      res.json(wordData[arrnumber].wordListArray[date.getDate() - 1]);
    }
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
  // const day = String(date).split(' ')[2];
  // res.json(wordList[Number(day)]);
};

export const addWord = async (req, res) => {
  const { wordName } = req.body;
  const date = new Date();
  try {
    const wordData = await Word.find({});
    const arrnumber = wordData.findIndex(
      (i) => i.name === `${date.getMonth() + 1}월`,
    );
    wordData[arrnumber].wordListArray.splice(date.getDate(), 0, wordName);
    wordData[arrnumber].save();
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};
