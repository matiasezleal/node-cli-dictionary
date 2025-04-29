import mongoose from 'mongoose';
const { Schema } = mongoose;

const dictionarySchema = new Schema({
  word: String,
  lang: String,
  description: String,
  date: { type: Date, default: Date.now },
  example: String
});

export const DictionaryModel = mongoose.model('dictionary',dictionarySchema);