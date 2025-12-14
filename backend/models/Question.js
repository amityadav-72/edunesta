const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
  text: String
});

const QuestionSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  text: { type: String, required: true },
  options: [{ type: String }], // array of option strings
  correctAnswers: [{ type: Number }], // indexes of correct options, supports multiple correct
  marks: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', QuestionSchema);
