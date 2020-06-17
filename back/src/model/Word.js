import mongoose from 'mongoose';

const WordSchema = new mongoose.Schema({
  name: String,
  wordListArray: Array,
  oldWordList:Array,
});

const model = mongoose.model('Word', WordSchema);
export default model;
