import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      title: "Personalized Learning",
      description: "Adaptive learning paths tailored to your unique needs and pace.",
      icon: "📚"
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals and experienced educators.",
      icon: "👨‍🏫"
    },
    {
      title: "Global Community",
      description: "Connect with learners worldwide and share knowledge.",
      icon: "🌍"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "200+", label: "Courses" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20 md:py-40"
      id='about'
    >
      <div className="container mx-auto px-6">
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-center mb-20"
        >
          About Us.
        </motion.h1>

        {/* Mission & Vision Section */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-16 mb-24"
        >
          <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To provide quality education to all students in the world. We believe in breaking down barriers to education and making learning accessible to everyone, regardless of their location or background.
            </p>
          </div>

          <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To be the leading online education platform in the world, fostering a global community of lifelong learners and empowering individuals to achieve their full potential through education.
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-lg text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;