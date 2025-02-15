import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Brain, Heart, Activity, Dumbbell, Utensils, Radiation as Meditation, Zap, Trophy, Target,Users } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

const userProgressData = [
  { month: 'Jan', fitness: 65, nutrition: 45, mental: 70 },
  { month: 'Feb', fitness: 68, nutrition: 52, mental: 73 },
  { month: 'Mar', fitness: 75, nutrition: 58, mental: 78 },
  { month: 'Apr', fitness: 80, nutrition: 65, mental: 82 },
  { month: 'May', fitness: 85, nutrition: 72, mental: 85 },
  { month: 'Jun', fitness: 88, nutrition: 78, mental: 88 },
];

const serviceUsageData = [
  { name: 'Fitness Training', value: 35 },
  { name: 'Planning', value: 25 },
  { name: 'Mental Wellness', value: 20 },
  { name: 'Sleep Analysis', value: 15 },
  { name: 'Social Support', value: 5 },
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#6366F1', '#EC4899'];

const Services = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [chartsRef, chartsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Meditation,
      title: 'Emotion-detection',
      description: 'Emotion detection - face & voice/speech also to add logic for frequent changes',
      //price: '$29/month',
      features: [
        'Real-time emotion detection',
      'Voice analysis for stress levels',
      'Frequent mood change alerts',
      'Emotion-driven recommendations'
      ],
    },
    {
      icon: Meditation,
      title: 'Hand-Excercise',
      description: 'Hand Excersice detection & feedback',
      //price: '$29/month',
      features: [
      'Exercise detection via camera',
      'Real-time feedback',
      'Progress tracking',
      'Posture improvement tips'
      ],
    },
    {
      icon: Meditation,
      title: 'Search-for-Doctor',
      description: 'Search Doctor',
      //price: '$29/month',
      features: [
'Search by specialty',
      'Location-based results',
      'Doctor availability filter',
      'Specialist recommendations'
      ],
    },
    {
      icon: Dumbbell,
      title: 'AI-based-reminders',
      description: 'AI-based reminders for: Vaccinations, Annual health check-ups.',
      // price: '$49/month',
      features: [
        'Personalized reminders',
        'Health check-up alerts',
        'Vaccination schedules',
        'Customizable notification settings'
      ],
    },
    {
      icon: Utensils,
      title: 'AI-Doctor-Assistant',
      description: 'AI translator for varid languages - for user to give in their native language and we will also give results in many language option feature',
      //price: '$39/month',
      features: [
        'Real-time language translation',
        'Multiple language support',
        'Voice-to-text conversion',
        'Multilingual medical term dictionary'
      ],
    },
    {
      icon: Meditation,
      title: 'Health-Score-Predictor',
      description: ' self-reported data (sleep hours, diet logs, exercise routines) and outputs a health score model with suggestion feature',
      //price: '$29/month',
      features: [
'Health score calculation',
      'Sleep and diet analysis',
      'Exercise routine tracking',
      'Personalized improvement suggestions'
      ],
    },
    {
      icon: Meditation,
      title: 'Symptom Checker for various disease',
      description: 'Symptom Checker for various disease',
      //price: '$29/month',
      features: [
        'Symptom input and analysis',
        'Possible condition predictions',
        'Matching with specialists',
        'Health insights and alerts'
      ],
    },
    {
      icon: Meditation,
      title: 'Mood Tracking',
      description: 'other full body excercise detection and Mood Tracking',
      //price: '$29/month',
      features: [
      'Daily mood logging',
      'Exercise impact analysis',
      'Trend analysis over time',
      'Wellness insights'
      ],
    },
    {
      icon: Meditation,
      title: 'Medical-Report-Based-Disease-Checking',
      description: 'Medical-Report-Based-Disease-Checking',
      //price: '$29/month',
      features: [
        'Report scanning and analysis',
        'Disease prediction',
        'Health risk indicators',
        'Doctor consultation recommendations'
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[3.5rem]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-indigo-600 text-white overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transform Your Life with Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Discover our comprehensive suite of AI-powered wellness services designed to help you achieve your health and fitness goals.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        ref={servicesRef}
        variants={containerVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} key={service.title}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    rotate: 5,
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300"
                >
                  <div className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6"
                    >
                      <service.icon className="h-8 w-8 text-indigo-600" />
                    </motion.div> 
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <p className="text-3xl font-bold text-indigo-600 mb-6">{service.price}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.2 }}
                          className="flex items-center text-gray-600"
                        >
                          <Target className="h-5 w-5 text-indigo-600 mr-3" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300"
                    >
                      Know More
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.div>
        <motion.p className='text-2xl font-semibold text-blue-900' style={{marginLeft: '33rem'}}>More Services will come soon....</motion.p>
      </motion.div>

      {/* Analytics Section */}
      <motion.section
        ref={chartsRef}
        initial={{ opacity: 0 }}
        animate={chartsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Real-Time Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Progress Chart */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={chartsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">User Progress Overview</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="fitness" stroke="#4F46E5" strokeWidth={2} />
                    <Line type="monotone" dataKey="nutrition" stroke="#10B981" strokeWidth={2} />
                    <Line type="monotone" dataKey="mental" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Service Chart */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={chartsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">Service Usage Distribution</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceUsageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      

      {/* Success Metrics */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0 }}
        animate={statsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: 'Success Rate', value: '60%' },
              { icon: Users, title: 'Active Users', value: '50+' },
              { icon: Zap, title: 'Goals Achieved', value: '150+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ y: 50, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg opacity-80">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;