
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Medal, School, Trophy } from 'lucide-react';

export default function TopScorers() {
  const [selectedYear, setSelectedYear] = useState('2023 - 2024');
  const [loading, setLoading] = useState(true);
  
  const scorers = [
    { name: 'Ayodele Toluwani', school: 'St.jhons School', score: '99.99%', rank: '1st', icon: Trophy },
    { name: 'Ojolowo Boluwatife', school: 'lavid School', score: '99.76%', rank: '2nd', icon: Medal },
    { name: 'Ayodele Tomisin', school: 'revalia School', score: '99.50%', rank: '3rd', icon: Medal }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const rankColors = {
    '1st': 'text-yellow-500',
    '2nd': 'text-gray-400',
    '3rd': 'text-amber-600'
  };

  return (
    <div className="mt-8 px-4 sm:px-0">
      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
          Top Scorer
        </h2>
        <motion.select
          className="w-full sm:w-auto p-2 px-4 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:border-transparent cursor-pointer
                     transition-all duration-300 ease-in-out hover:border-purple-400"
          onChange={(e) => setSelectedYear(e.target.value)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {['2018 - 2019', '2019 - 2020', '2020 - 2021', '2021 - 2022', '2022 - 2023', '2023 - 2024'].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </motion.select>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {scorers.map((scorer, index) => (
          <motion.div
            key={scorer.name}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl 
                       transition-all duration-300 ease-in-out relative
                       border border-transparent hover:border-purple-100"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="absolute -top-4 -right-4 bg-purple-100 rounded-full p-3"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {index === 0 ? (
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
              ) : (
                <Medal className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              )}
            </motion.div>

            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 
                          mb-4 flex items-center justify-center">
              <School className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-base sm:text-lg">{scorer.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{scorer.school}</p>
              <div className="text-2xl sm:text-3xl font-bold mt-3 bg-clip-text text-transparent 
                            bg-gradient-to-r from-purple-600 to-purple-900">
                {scorer.score}
              </div>
              <div className={`text-base sm:text-lg font-semibold ${rankColors[scorer.rank]}`}>
                {scorer.rank}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}