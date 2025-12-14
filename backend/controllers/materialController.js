const Material = require('../models/Material');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const fileFilter = function (req, file, cb) {
  // accept pdf/doc/docx
  const allowed = ['.pdf', '.doc', '.docx'];
  if (!allowed.includes(path.extname(file.originalname).toLowerCase())) {
    return cb(new Error('Only PDF/DOC/DOCX allowed'), false);
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });

const uploadMaterialHandler = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: 'No file' });
    const material = new Material({
      title: req.body.title || req.file.originalname,
      description: req.body.description,
      filename: req.file.originalname,
      filepath: req.file.filename,
      uploadedBy: req.user._id
    });
    await material.save();
    res.json(material);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: err.message || 'Server error' });
  }
};

const listMaterials = async (req, res) => {
  try {
    const items = await Material.find().populate('uploadedBy','name email').sort({ uploadedAt: -1 });
    res.json(items);
  } catch(err){
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { upload, uploadMaterialHandler, listMaterials };
