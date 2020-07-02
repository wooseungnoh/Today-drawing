import User from '../model/User';
import Post from '../model/Post';

//포스트와 회원목록 불러오기
export const loadPostAndUser = async (req, res) => {
  try {
    const post = await Post.find({}).populate('creator').sort({ _id: -1 });
    const user = await User.find({}).sort({ _id: -1 });
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

//회원 탈퇴시키기
export const secession = async (req, res) => {
  const { id } = req.body;
  try {
    await User.findByIdAndRemove(id);
    const userList = await User.find({}).sort({ _id: -1 });
    res.json(userList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

//권한 수정
export const editRole = async (req, res) => {
  const { objectId, role } = req.body;
  try {
    console.log(objectId, role);
    await User.findByIdAndUpdate(objectId, {
      role,
    });
    const newUserList = await User.find({}).sort({ _id: -1 })
    return res.json(newUserList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};
