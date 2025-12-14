const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  selected: [{ type: Number }], // indexes chosen
  isCorrect: Boolean,
  marksObtained: Number
});

const SubmissionSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [AnswerSchema],
  status: { type: String, enum: ['in-progress','submitted','graded'], default: 'in-progress' },
  startedAt: { type: Date, default: Date.now },
  submittedAt: Date,
  totalMarks: { type: Number, default: 0 },
  attemptNumber: { type: Number, default: 1 }, // for retakes
  autosave: { type: Boolean, default: false }
});

module.exports = mongoose.model('Submission', SubmissionSchema);
