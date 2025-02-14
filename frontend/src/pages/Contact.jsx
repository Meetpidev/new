import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300";

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-[3.5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8 transform hover:shadow-2xl transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  required
                ></textarea>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">27, Navjyot Park, 150 Feet Ring Rd</p>
                    <p className="text-gray-600">Rajkot, Gujarat 360005</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 1234567894</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@vitalityai.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 h-[300px] transform hover:shadow-2xl transition-all duration-300"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59069.71061283741!2d70.69738264863281!3d22.2834094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca3b1422b099%3A0x1cc7e83e34911d14!2sShree%20Giriraj%20Hospital!5e0!3m2!1sen!2sin!4v1737993820093!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
