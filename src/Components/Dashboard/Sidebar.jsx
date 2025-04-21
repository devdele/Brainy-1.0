import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, Users, GraduationCap,FileText, Settings, Menu, X 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
 
  const currentPath = location.pathname.split('/')[1] || 'dashboard';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: 'dashboard' },
    { name: 'Students', icon: Users, path: 'students' },
    { name: 'Teachers', icon: GraduationCap, path: 'teachers' },
    { name: 'Exam', icon: FileText, path: 'exam' },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      display: "block"
    },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: "none"
      }
    }
  };

  const menuItemVariants = {
    hover: {
      x: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  return (
    <>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        aria-label="Toggle menu"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </button>


      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>


      <motion.div
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        className={`fixed lg:relative w-72 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white p-6 min-h-screen z-40
                   ${isMobile ? 'shadow-2xl' : ''} overflow-hidden`}
      >
        <Link to='/'>
          <motion.div 
            className="mb-8 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-3xl font-bold font-sans tracking-tight">
              Brainy
              <span className="text-purple-300">.</span>
            </span>
          </motion.div>
        </Link>
        
       
        <div className="absolute -right-8 top-24 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-xl"></div>
        <div className="absolute -left-10 top-64 w-28 h-28 bg-indigo-500 opacity-20 rounded-full blur-xl"></div>
        
        <nav className="space-y-1 relative z-10">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            
            return (
              <Link to={`/${item.path}`} key={item.name}>
                <motion.div
                  variants={menuItemVariants}
                  whileHover="hover"
                  className={`flex items-center py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out
                             ${isActive 
                                ? 'bg-white/10 text-white shadow-lg shadow-purple-900/20 font-medium' 
                                : 'hover:bg-white/5 hover:text-purple-200'}`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <div className={`mr-3 p-2 rounded-lg ${isActive ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' : 'text-purple-300'}`}>
                    <item.icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                  </div>
                  <span className={`font-medium transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      className="ml-auto w-1.5 h-8 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-6 right-6 z-10">
          <motion.div 
            className="p-4 bg-gradient-to-r from-purple-800/80 to-indigo-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/10 transition-all duration-300 cursor-pointer"
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.2)" }}
            onClick={handleLogout}
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center ring-2 ring-white/20">
                <span className="text-lg font-semibold">AT</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-purple-200">Admin</p>
                <p className="font-medium text-white">Logout</p>
              </div>
              <motion.div 
                className="ml-auto text-purple-200 hover:text-white"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Settings size={18} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
