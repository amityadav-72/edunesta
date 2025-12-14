const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { permit } = require('../middleware/roles');
const { startOrAutosave, submitTest, getSubmissionsForStudent, getSubmissionsForTest } = require('../controllers/submissionController');

router.post('/autosave', auth, permit('student'), startOrAutosave);
router.post('/submit', auth, permit('student'), submitTest);
router.get('/me', auth, permit('student'), getSubmissionsForStudent);
router.get('/test/:testId', auth, permit('teacher','admin'), getSubmissionsForTest);

module.exports = router;
