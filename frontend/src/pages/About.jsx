import React from 'react';
import { Target, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import meet from "../assest/meet.png";

const About = () => {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [problemRef, problemInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col mt-[2rem]">
      {/* Mission Section */}
      <motion.section 
        ref={missionRef}
        initial={{ opacity: 0 }}
        animate={missionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ y: 20 }}
              animate={missionInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-6"
            >
              Our Mission
            </motion.h1>
            <motion.p 
              initial={{ y: 20 }}
              animate={missionInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              At Vitality AI, we're revolutionizing personal wellness through artificial intelligence. 
              Our mission is to make personalized health and wellness guidance accessible to everyone, 
              everywhere.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Vision',
                description: 'Creating a world where everyone has access to personalized wellness guidance.'
              },
              {
                icon: Users,
                title: 'Our Community',
                description: 'Building a supportive community of individuals committed to their wellness journey.'
              },
              {
                icon: Trophy,
                title: 'Our Impact',
                description: 'Transforming lives through innovative AI-powered wellness solutions.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="text-center p-6 bg-white rounded-lg transform transition-all duration-300"
              >
                <item.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Problem Statement Section */}
      <motion.section 
        ref={problemRef}
        initial={{ opacity: 0 }}
        animate={problemInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50 }}
              animate={problemInView ? { x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Navigating the Wellness Landscape</h2>
              <p className="text-gray-600 mb-4">
                In today's fast-paced world, maintaining a healthy lifestyle has become increasingly challenging. 
                Traditional wellness approaches are often:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>One-size-fits-all solutions that don't account for individual needs</li>
                <li>Expensive personal training and coaching services</li>
                <li>Lack of continuous support and accountability</li>
                <li>Overwhelming amount of conflicting health information</li>
              </ul>
              <p className="text-gray-600">
                Vitality AI addresses these challenges by providing personalized, accessible, and science-based 
                wellness guidance powered by artificial intelligence.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50 }}
              animate={problemInView ? { x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        ref={teamRef}
        initial={{ opacity: 0 }}
        animate={teamInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Meet Shah',
                role: 'CEO & Founder',
                image: meet,
              },
              {
                name: 'Somil Shah',
                role: 'AI Lead',
                image: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
              },
              {
                name: 'Rushikesh mayatra',
                role: 'Fitness manager',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl7G5A0wW3ypdrUU_xdGy0km_uyuHD9UddQ&s",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/meet-shah-0384891a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 inline-block"
                >
                  LinkedIn Profile
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;