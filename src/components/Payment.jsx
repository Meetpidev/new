import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle,CreditCard, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import chip from '../assest/cip.png';
import card from '../assest/card.png';

const Payment = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z\s]+$/;
    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    if (!name.match(namePattern)) {
      newErrors.name = 'Invalid name format.';
    }
    if (!cardNumber.match(cardNumberPattern)) {
      newErrors.cardNumber = 'Invalid card number format.';
    }
    if (!expiryDate.match(expiryDatePattern)) {
      newErrors.expiryDate = 'Invalid expiry date format.';
    }
    if (!cvv.match(cvvPattern)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-100 flex flex-col items-center justify-center p-4 mt-[2rem]">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
              <Lock className="h-6 w-6 text-indigo-600" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.cardNumber ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                    required
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.expiryDate ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                    required
                  />
                  {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.cvv ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                    required
                  />
                  {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Pay Securely
              </motion.button>
            </form>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          
          <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white shadow-xl">
            <div className="absolute top-4 right-4">
              <img src={chip} alt="chip" className="rounded h-8" />
            </div>
            <div className="h-full flex flex-col justify-between" style={{transform: "transLateY(-.5rem)"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOsJUPXMDaZXyJA2PxFYv2gEVkGofB0fsyQ&s" alt="card-chip" className="rounded h-8 w-11" />
              <div>
                <div className="text-xl mb-4">{cardNumber || '•••• •••• •••• ••••'}</div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs opacity-75">Card Holder</div>
                    <div>{name || 'YOUR NAME'}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75">Expires</div>
                    <div>{expiryDate || 'MM/YY'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStM9DzK9LnKI-n9yY_9h7wQ-OGyHoYgFCkow&s" alt="secure-payment" className="h-12" />
              <p>secure-payment</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPkSux1dPKZrATSfUPPG5HCSY5w4Xlwc5ig&s" alt="encrypted" className="h-8" />
              <p>encrypted</p>
            </div>
          </div>
        </motion.div>
      </div>

     
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Redirecting to dashboard...</p>
            <div className="animate-spin h-6 w-6 border-2 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Payment;