const express = require('express');
const bcrypt = require('bcryptjs');
const Client = require('../models/client.js');
const router = express.Router();

// POST route to register a new client
router.post('/register', async (req, res) => {
  try {
 
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    
    const client = new Client({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address
    });

 
    const newClient = await client.save();

    res.status(201).json({ message: 'Client registered successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
