import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: 'file URL is required',
  },
  title: {
    type: String,
    required: 'file Title is required',
  },
  description: {
    type: String,
    required: 'file description is required',
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  liker: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  subject: String,
});

const model = mongoose.model('Photo', PhotoSchema);
export default model;
