const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ msg: 'No token provided' });
  const token = header.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Invalid token format' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) return res.status(401).json({ msg: 'User not found' });
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ msg: 'Token invalid or expired' });
  }
};

module.exports = auth;
