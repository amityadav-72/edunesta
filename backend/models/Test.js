const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  durationMinutes: { type: Number, default: 30 },
  startTime: Date,
  endTime: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  allowRetake: { type: Boolean, default: false },
  maxAttempts: { type: Number, default: 1 }, // if allowRetake = true
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', TestSchema);
