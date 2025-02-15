import React, { useState, useEffect } from 'react';
import { motion } from 'react-motion';
import { getDoctors } from '../apis/Doctor/doctor.js';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctors();
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctors</h1>
      {doctors.map(doctor => (
        <motion.div
          key={doctor._id}
          className="bg-white shadow rounded p-4 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold">{doctor.name.firstName} {doctor.name.lastName}</h2>
          <p>Specialist: {doctor.specialist}</p>
          <p>Location: {doctor.location.address}, {doctor.location.city}, {doctor.location.state} {doctor.location.zip}</p>
          <p>Contact: {doctor.contact.phone}, {doctor.contact.email}</p>
          <p>Qualifications: {doctor.qualifications.join(', ')}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DoctorList;
