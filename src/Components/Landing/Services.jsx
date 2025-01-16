import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineLiveTv, MdPersonalVideo } from 'react-icons/md';
import { BsBookHalf, BsPeople } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Live Online Classes",
      description: "Interactive sessions with expert instructors in real-time. Engage in discussions, ask questions, and learn collaboratively.",
      icon: <MdOutlineLiveTv className="w-12 h-12 text-purple-500" />,
      features: ["Live Q&A", "Interactive Whiteboard", "Recorded Sessions"]
    },
    {
      title: "Self-Paced Courses",
      description: "Learn at your own pace with our comprehensive course library. Access content anytime, anywhere.",
      icon: <BsBookHalf className="w-12 h-12 text-purple-500" />,
      features: ["24/7 Access", "Progress Tracking", "Downloadable Resources"]
    },
    {
      title: "1-on-1 Tutoring",
      description: "Get personalized attention from expert tutors who help you master challenging concepts and achieve your goals.",
      icon: <FaChalkboardTeacher className="w-12 h-12 text-purple-500" />,
      features: ["Flexible Scheduling", "Customized Learning", "Progress Reports"]
    },
    {
      title: "Study Groups",
      description: "Join virtual study groups to collaborate with peers, share knowledge, and enhance your learning experience.",
      icon: <BsPeople className="w-12 h-12 text-purple-500" />,
      features: ["Peer Learning", "Group Projects", "Knowledge Sharing"]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6"
        id='services'
      >
        <motion.div 
          variants={cardVariants}
          className="text-center text-black mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover our comprehensive range of educational services designed to help you achieve your learning goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-black mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <MdPersonalVideo className="w-5 h-5 mr-2 text-purple-500" />
                    {feature}
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white hover:opacity-90 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          variants={cardVariants}
          className="text-center text-black bg-gray-50 shadow-lg rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students already learning with us. Get started today!
          </p>
          <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300"
          >

            Get Started Now
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;