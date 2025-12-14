const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { permit } = require('../middleware/roles');
const { addQuestion, getQuestion } = require('../controllers/questionController');

router.post('/', auth, permit('teacher','admin'), addQuestion);
router.get('/:id', auth, getQuestion);

module.exports = router;
