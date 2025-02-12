const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const User = require('../models/User');  

// Middleware to authenticate admin
const authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token missing or invalid' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.status(401).json({ message: 'Admin not found or unauthorized' });
    }

    req.admin = admin; 
    next(); 
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', error: error.message });
  }
};

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token missing or invalid' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);  
      const user = await User.findById(decoded.id);  
  
      if (!user) {
        return res.status(401).json({ message: 'User not found or unauthorized' });
      }
  
      req.user = user;
      next(); 
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token', error: error.message });
    }
  };

  module.exports = authenticateAdmin;

  module.exports = authenticateUser;