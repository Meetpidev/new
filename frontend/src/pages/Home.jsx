import React from 'react';
import { ArrowRight, Activity, Brain, Heart, Users, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 4000 },
  { month: 'Feb', users: 5000 },
  { month: 'Mar', users: 7000 },
  { month: 'Apr', users: 8500 },
  { month: 'May', users: 11000 },
  { month: 'Jun', users: 15000 },
];

const statsData = [
  { label: 'Active Users', value: '50+', icon: Users },
  { label: 'Wellness Goals Achieved', value: '100+', icon: Trophy },
  { label: 'Success Rate', value: '60%', icon: Target },
];

const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [chartRef, chartInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Wellness Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Personal AI Wellness Coach
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Transform your life with personalized health and wellness recommendations powered by artificial intelligence.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        initial={{ opacity: 0 }}
        animate={statsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-indigo-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-indigo-400" />
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-indigo-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: 'Personalized Fitness Plans',
                description: 'AI-generated workout routines tailored to your goals and fitness level.'
              },
              {
                icon: Brain,
                title: 'Mental Wellness',
                description: 'Cognitive exercises and meditation guidance for mental clarity.'
              },
              {
                icon: Heart,
                title: 'Nutrition Coaching',
                description: 'Smart meal planning and nutritional advice based on your preferences.'
              }
              ,
              {
                icon: Brain,
                title: 'Mental Wellness',
                description: 'Cognitive exercises and meditation guidance for mental clarity.'
              },
              {
                icon: Heart,
                title: 'Nutrition Coaching',
                description: 'Smart meal planning and nutritional advice based on your preferences.'
              }
              ,
              {
                icon: Brain,
                title: 'Mental Wellness',
                description: 'Cognitive exercises and meditation guidance for mental clarity.'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="p-6 bg-gray-50 rounded-lg transform transition-all duration-300 hover:rotate-1"
              >
                <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
{/* Growth Chart Section */}
<motion.section
  ref={chartRef}
  initial={{ opacity: 0, y: 20 }}
  animate={chartInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="py-20 bg-gradient-to-b from-gray-100 via-gray-50 to-white"
>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-b from-indigo-50 via-indigo-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-t from-indigo-50 via-indigo-100 to-transparent opacity-50 rounded-full blur-3xl"></div>

  
    <div className="relative text-center mb-12">
  <h2 className="text-3xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 leading-tight">
    Our Growing Community
  </h2>
  <p className="text-xl text-gray-700">
    Join thousands of users transforming their lives with Vitality AI
  </p>
</div>



    {/* Chart Container */}
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
      className="relative h-[400px] bg-white p-8 rounded-lg shadow-2xl transition-transform duration-300"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
       
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
            </linearGradient>
          </defs>
         
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 14, fill: "#6B7280" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 14, fill: "#6B7280" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#4F46E5",
              borderRadius: "10px",
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
            cursor={{ fill: "rgba(79, 70, 229, 0.1)" }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#4F46E5"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  </div>
</motion.section>


   
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8">Join thousands of users who have already improved their wellness journey with Vitality AI.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;