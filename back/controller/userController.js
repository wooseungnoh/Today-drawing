import User from '../model/User';
import passport from 'passport';
import mongoose from 'mongoose';

//로그인
export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info);
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const userData = Object.assign({}, user.toJSON());
      delete userData.password;
      return res.json(userData);
    });
  })(req, res, next);
};

//유저 정보 불러오기
export const loadUser = (req, res) => {
  if (!req.user) {
    return res.status(401).send('로그인 되어있지 않음.');
  }
  return res.json(req.user);
};

//로그아웃
export const logout = (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.send('로그아웃 성공');
  });
};

//회원가입
export const signup = async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    const user = await User({
      name,
      email,
      userInfo: '',
      writer: '',
    });
    await User.register(user, password);
    next();
  } catch (e) {
    console.log(e);
    res.send('가입실패');
  }
};

//프로필 정보 수정
export const editing = async (req, res) => {
  const {
    me: { _id, email, name },
    writerData: { userInfo, writer },
  } = req.body;
  try {
    await User.findByIdAndUpdate(_id, {
      name,
      email,
      userInfo,
      writer,
    });
    const user = req.user;
    return res.json(user);
  } catch (e) {
    console.log(e);
    res.send('프로필 업데이트 실패');
  }
};

// like list 불러오기
export const loadLikeList = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id).populate('likeList');
    res.json(user.likeList);
  } catch (e) {
    console.log(e);
    res.status(400);
  }
  return;
};
