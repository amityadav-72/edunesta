const Question = require('../models/Question');
const Test = require('../models/Test');

const addQuestion = async (req, res) => {
  try {
    const { testId, text, options, correctAnswers, marks } = req.body;
    const test = await Test.findById(testId);
    if (!test) return res.status(404).json({ msg: 'Test not found' });

    const q = new Question({ test: test._id, text, options, correctAnswers, marks });
    await q.save();
    test.questions.push(q._id);
    await test.save();
    res.json(q);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getQuestion = async (req, res) => {
  try {
    const q = await Question.findById(req.params.id);
    if (!q) return res.status(404).json({ msg: 'Not found' });
    res.json(q);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { addQuestion, getQuestion };
