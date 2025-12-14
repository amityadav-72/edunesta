const Submission = require('../models/Submission');
const Test = require('../models/Test');
const Question = require('../models/Question');
const { gradeQuestion } = require('../utils/grader');

const startOrAutosave = async (req, res) => {
  // Saves partial answers (autosave) and returns the submission id
  try {
    const { testId, answers, autosave } = req.body;
    if (!testId) return res.status(400).json({ msg: 'Missing testId' });

    // Find or create in-progress submission for this student/test
    let submission = await Submission.findOne({ test: testId, student: req.user._id, status: 'in-progress' });
    if (!submission) {
      // Determine attemptNumber
      const attemptsCount = await Submission.countDocuments({ test: testId, student: req.user._id, status: { $in: ['submitted','graded'] }});
      submission = new Submission({ test: testId, student: req.user._id, attemptNumber: attemptsCount + 1 });
    }

    // Update answers but don't grade yet if autosave/in-progress
    submission.answers = (answers || []).map(a => ({ question: a.question, selected: a.selected }));
    submission.autosave = !!autosave;
    await submission.save();
    res.json({ submissionId: submission._id, status: submission.status });
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const submitTest = async (req, res) => {
  try {
    const { submissionId, answers } = req.body;
    if (!submissionId && !answers) return res.status(400).json({ msg: 'Missing payload' });

    let submission = null;
    if (submissionId) submission = await Submission.findById(submissionId);
    if (!submission) {
      // create fresh one (if no autosave)
      submission = new Submission({ test: req.body.testId, student: req.user._id });
    }
    // attach answers
    submission.answers = (answers || submission.answers || []).map(a => ({ question: a.question, selected: a.selected }));
    submission.status = 'submitted';
    submission.submittedAt = new Date();

    // Grading
    let total = 0;
    for (let i = 0; i < submission.answers.length; i++) {
      const ans = submission.answers[i];
      const q = await Question.findById(ans.question);
      const grade = gradeQuestion(q, ans.selected);
      ans.isCorrect = grade.isCorrect;
      ans.marksObtained = grade.marksObtained;
      total += grade.marksObtained;
    }
    submission.totalMarks = total;
    submission.status = 'graded';
    await submission.save();

    res.json({ submissionId: submission._id, totalMarks: submission.totalMarks });
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getSubmissionsForStudent = async (req, res) => {
  try {
    const subs = await Submission.find({ student: req.user._id }).populate('test','title durationMinutes').sort({ submittedAt: -1 });
    res.json(subs);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getSubmissionsForTest = async (req, res) => {
  try {
    const subs = await Submission.find({ test: req.params.testId }).populate('student','name email').sort({ submittedAt: -1 });
    res.json(subs);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { startOrAutosave, submitTest, getSubmissionsForStudent, getSubmissionsForTest };
