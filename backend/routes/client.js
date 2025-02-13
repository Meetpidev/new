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

// POST route to login a client
router.post('/login', async (req, res) => {
  try {
    // Find the client by email
    const client = await Client.findOne({ email: req.body.email });
    
    if (!client) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(req.body.password, client.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful', clientId: client._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
