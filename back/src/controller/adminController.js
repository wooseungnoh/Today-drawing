import User from '../model/User';
import Post from '../model/Post';

//포스트와 회원목록 불러오기
export const loadPostAndUser = async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      const post = await Post.find({}).populate('creator').sort({ _id: -1 });
      const user = await User.find({}).sort({ _id: -1 });
      const allList = {
        post,
        user,
      };
      return res.json(allList);
    } else {
      return res.status(400).send('권한없음');
    }
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
    return res.json(userList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

//권한 수정
export const editRole = async (req, res) => {
  const { objectId, role } = req.body;
  try {
    await User.findByIdAndUpdate(objectId, {
      role,
    });
    const newUserList = await User.find({}).sort({ _id: -1 });
    return res.json(newUserList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

//관리페이지에서 포스트 삭제

export const deletePostFromAdmin = async (req, res) => {
  const { id } = req.body;
  try {
    await Post.findByIdAndRemove({ _id: id });
    const PostList = await Post.find({}).populate('creator').sort({ _id: -1 });
    return res.json(PostList);
  } catch (e) {
    console.log(e);
  }
  return;
};
