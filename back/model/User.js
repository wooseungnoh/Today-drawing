import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const UserSchema = new mongoose.Schema({
  name: String,
  writer: String,
  email: String,
  userInfo: String,
  likeList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo',
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const model = mongoose.model('User', UserSchema);

export default model;
