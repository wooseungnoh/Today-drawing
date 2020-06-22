import User from '../model/User';
import Post from '../model/Post';

export const secession = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const user = await User.findByIdAndRemove(id);
    const userList = await User.find({});
    res.json(userList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};
//포스트와 회원목록 불러오기
export const loadPostAndUser = async (req, res) => {
  try {
    const post = await Post.find({}).populate('creator');
    const user = await User.find({});
    const allList = {
      post,
      user,
    };
    res.json(allList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};