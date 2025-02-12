const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('../models/doctor.js');
const router = express.Router();

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET doctor by ID
router.get('/:id', async (req, res) => {
  try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
          return res.status(404).json({ message: 'Doctor not found' });
      }
      res.json(doctor);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }
});

// POST a new doctor
router.post('/', async (req, res) => {
  const doctor = new Doctor({
    name: {
      firstName: req.body.name.firstName,
      lastName: req.body.name.lastName
    },
    qualifications: req.body.qualifications,
    specialist: req.body.specialist,
    location: {
      address: req.body.location.address,
      city: req.body.location.city,
      state: req.body.location.state,
      zip: req.body.location.zip
    },
    availability: req.body.availability,
    contact: {
      phone: req.body.contact.phone,
      email: req.body.contact.email
    },
    description: req.body.description,
    fees: req.body.fees,
  });

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;


// UPDATE doctor profile
router.patch('/:id', async (req, res) => {
  try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
          return res.status(404).json({ message: 'Doctor not found' });
      }

      if (req.body.name) {
          doctor.name = req.body.name;
      }
      if (req.body.qualifications) {
          doctor.qualifications = req.body.qualifications;
      }
      if (req.body.specialist) {
          doctor.specialist = req.body.specialist;
      }
      if (req.body.location) {
          doctor.location = req.body.location;
      }
      if (req.body.contact) {
          doctor.contact = req.body.contact;
      }
      if (req.body.availability) {
        doctor.availability = req.body.availability;
    }
    if (req.body.description) {
      doctor.description = req.body.description;
    }
    if (req.body.fees) {
      doctor.fees = req.body.fees;
    }

      const updatedDoctor = await doctor.save();
      res.json(updatedDoctor);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});