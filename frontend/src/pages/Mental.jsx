import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, DollarSign, Info, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Mental = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChoosePlanClick = () => {
    navigate('/payment');
  };
 
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-[4.7rem]">
      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <CheckCircle className="h-10 w-10 text-indigo-600" />, title: 'Customized Plans', description: 'Tailored workout plans to fit your individual needs.' },
            { icon: <Star className="h-10 w-10 text-indigo-600" />, title: 'Expert Trainers', description: 'Work with certified trainers who are dedicated to your success.' },
            { icon: <Users className="h-10 w-10 text-indigo-600" />, title: 'Community Support', description: 'Join a community of like-minded individuals for motivation.' },
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 scroll-animate"
>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Our Approach
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card for Our Approach */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img 
        src="https://www.rothwellgroup.com/wp-content/uploads/OurApproach_Page_JPEGmax.jpg" 
        alt="Fitness Training" 
        className="w-full h-40 object-cover rounded-t-lg mb-4" 
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Our Approach</h3>
      <p className="text-gray-600 mb-4">
        We believe in a holistic approach to fitness that encompasses physical training, nutrition, and mental well-being. Our trainers work closely with you to develop a plan that fits your lifestyle and goals.
      </p>
      <p className="text-gray-600">
        Each session is designed to challenge you while ensuring safety and proper form. We also provide ongoing support and motivation to keep you on track.
      </p>
    </div>

    {/* Card for Nutrition Guidance */}
    <div className="bg-gray-50 rounded-lg shadow-lg p-6">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8Ob8wsCjriG6aRN8jfb_-JJb9jpfu5JHPg&s" 
        alt="Nutrition Guidance" 
        className="w-full h-40 object-cover rounded-t-lg mb-4" 
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Nutrition Guidance</h3>
      <p className="text-gray-600 mb-4">
        Alongside your training, we offer personalized nutrition advice to help you fuel your body effectively. Our nutritionists will work with you to create meal plans that align with your fitness goals.
      </p>
    </div>

    {/* Card for Mental Wellness */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img 
        src="https://media.licdn.com/dms/image/C4D12AQFMKwxN75hAxQ/article-cover_image-shrink_720_1280/0/1623563688999?e=2147483647&v=beta&t=5EoIFNuh_warn_L3L1sUqcPy8_F899im8z8Z27sijj8" 
        alt="Mental Wellness" 
        className="w-full h-40 object-cover rounded-t-lg mb-4" 
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Mental Wellness</h3>
      <p className="text-gray-600 mb-4">
        We believe that mental health is a crucial part of overall well-being. That's why we incorporate mindfulness and stress management techniques into our training sessions. Our trainers are trained to help you develop coping mechanisms and strategies to navigate challenges, ultimately leading to a more balanced and fulfilling life.
      </p>
    </div>
  </div>
</motion.div>





      {/* Testimonials Section */}
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10"
>
  <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        name: 'Amit S.',
        feedback: 'The personalized training has transformed my fitness journey!',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLwDqDwd2JfzifvfBTFT8I7iKFFevcedYg&s' 
      },
      {
        name: 'Nikita T.',
        feedback: 'I love the community support and motivation from my trainer.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsR1j5c5rh3Or62MF39b1EffRT1nXnqN4BQ&s'
      },
    ].map((testimonial, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg p-6">
        <img src={testimonial.image} alt={testimonial.name} className="w-25 h-[7rem] rounded-full mx-auto mb-4" /> 
        <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
        <p className="text-right font-semibold mt-4">- {testimonial.name}</p>
      </div>
    ))}
  </div>
</motion.div>

      {/* Pricing Section */}
      <motion.div
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 scroll-animate"
>
  <h2 className="text-3xl font-bold text-center mb-6">Pricing Plans</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: 'Basic Plan', price: '$29/month', features: [
        { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Guided meditation' },
        { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Stress tracking' },
          { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Sleep optimization' },
             { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Basic plan features' },
                      ]
                      },
      { title: 'Standard Plan', price: '$89/month', features: [
        { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: '2 Sessions/Week' },
        { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Personalized Plan' },
          { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Phone Support' },
             { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Basic plan features' },
      ] },
      { title: 'Premium Plan', price: '$129/month', features: [
        { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Unlimited Sessions' },
        { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Personalized Plan' },
          { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: '24/7 Support' },
             { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Basic plan features' },
      ] },
    ].map((plan, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg shadow-lg p-6 text-center w-[20rem]"
      >
        <h3 className="text-xl font-semibold">{plan.title}</h3>
        <p className="text-2xl font-bold text-indigo-600 mt-2">{plan.price}</p>
        <ul className="mt-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              {feature.icon}
              <span className="ml-2 font-semibold">{feature.title}</span>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg mt-4"
          onClick={handleChoosePlanClick}
        >
          Choose Plan
        </motion.button>
      </motion.div>
    ))}
  </div>
</motion.div>

            {/* Certifications Section */}
            <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Award className="w-8 h-8 text-green-600 mr-3"  />, title: 'Mental Health Innovation Award' },
            { icon: <Award className="w-8 h-8 text-green-600 mr-3"  />, title: 'Wellness Excellence Recognition' }
          ].map((certification, index) => (
            <motion.div 
                key={index} 
                className="flex items-center bg-green-50 p-4 rounded-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
              >
              {certification.icon}
              <h3 className="text-green-800 font-medium">{certification.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

   

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-[6rem]">
          {[
            { question: "What should I bring to my first session?", answer: "Please bring a water bottle, a towel, and wear comfortable workout clothes." },
            { question: "How long are the training sessions?", answer: "Each session typically lasts about 60 minutes, including warm-up and cool-down." },
            { question: "Can I train with a friend?", answer: "Yes! We offer buddy training sessions at a discounted rate." },
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <Info className="h-6 w-6 text-indigo-600" />
                </span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="pl-6 pb-4 text-gray-600"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Mental;