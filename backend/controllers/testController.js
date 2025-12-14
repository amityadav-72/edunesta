const Test = require('../models/Test');
const Question = require('../models/Question');

const createTest = async (req, res) => {
  try {
    const { title, description, durationMinutes, startTime, endTime, allowRetake, maxAttempts } = req.body;
    const test = new Test({
      title,
      description,
      durationMinutes,
      startTime,
      endTime,
      createdBy: req.user._id,
      allowRetake: !!allowRetake,
      maxAttempts: maxAttempts || 1
    });
    await test.save();
    res.json(test);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const getTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id).populate('questions');
    if (!test) return res.status(404).json({ msg: 'Test not found' });
    res.json(test);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const publishTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ msg: 'Not found' });
    test.isPublished = true;
    await test.save();
    res.json(test);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

const listTests = async (req, res) => {
  try {
    const tests = await Test.find().populate('createdBy','name email');
    res.json(tests);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { createTest, getTest, publishTest, listTests };
