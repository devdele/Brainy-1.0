
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { School, Users, GraduationCap, UserPlus } from 'lucide-react';

export default function StatsOverview() {
  const stats = [
    { title: 'Schools', count: 6000, Icon: School },
    { title: 'Students', count: 25000, Icon: Users },
    { title: 'Teachers', count: 3500, Icon: GraduationCap },
    { title: 'Parents', count: 11020, Icon: UserPlus },
  ];

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0"
      variants={containerVariants}
      initial="hidden"
      animate={isAnimated ? 'visible' : 'hidden'}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-[4px_5px_25px_9px_rgba(0,_0,_0,_0.1)] 
                     backdrop-blur-sm transition-colors duration-300 
                     hover:bg-gradient-to-br hover:from-white hover:to-purple-50"
          variants={cardVariants}
          whileHover="hover"
          custom={index}
        >
          <motion.div 
            className="mb-2 align-middle flex justify-center"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <stat.Icon size={28} className="text-purple-600" />
          </motion.div>
          <motion.div className="text-gray-600 align-middle flex justify-center font-medium text-sm sm:text-base">
            {stat.title}
          </motion.div>
          <motion.div 
            className="text-xl sm:text-2xl font-bold align-middle flex justify-center bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-600 to-purple-900"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            {stat.count.toLocaleString()}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}