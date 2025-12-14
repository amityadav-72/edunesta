const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { permit } = require('../middleware/roles');
const { upload, uploadMaterialHandler, listMaterials } = require('../controllers/materialController');

router.post('/', auth, permit('teacher','admin'), upload.single('file'), uploadMaterialHandler);
router.get('/', auth, listMaterials);

module.exports = router;
