const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { permit } = require('../middleware/roles');
const { createTest, getTest, publishTest, listTests } = require('../controllers/testController');

router.post('/', auth, permit('teacher','admin'), createTest);
router.get('/', auth, listTests);
router.get('/:id', auth, getTest);
router.post('/:id/publish', auth, permit('teacher','admin'), publishTest);

module.exports = router;
