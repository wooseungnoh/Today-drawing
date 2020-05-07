import User from '../model/User';
import passport from 'passport';
import mongoose from 'mongoose';

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
export const logout = (req, res) => {
  res.send('로그아웃');
};
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
    7;
  } catch (e) {
    console.log(e);
    res.send('가입실패');
  }
};

export const editing = async (req, res) => {
  const {
    me: { _id, email, name },
    writerData: { userInfo, writer },
  } = req.body;
  mongoose.set('useFindAndModify', false);
  try {
    await User.findOneAndUpdate(_id, {
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
