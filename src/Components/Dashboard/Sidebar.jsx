
import { 
  Home, Users, GraduationCap, UserPlus, BookOpen, 
  Calendar, FileText, Building2, CreditCard, Settings, Menu, X 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Students', icon: Users },
    { name: 'Teachers', icon: GraduationCap },
    { name: 'Parents', icon: UserPlus },
    { name: 'Library', icon: BookOpen },
    { name: 'Attendance', icon: Calendar },
    { name: 'Exam', icon: FileText },
    { name: 'Hostel', icon: Building2 },
    { name: 'Account', icon: CreditCard },
    { name: 'Settings', icon: Settings }
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

  return (
    <>
    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-purple-900 text-white hover:bg-purple-800 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

     
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

   
      <motion.div
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={sidebarVariants}
        className={`fixed lg:relative w-64 bg-purple-900 text-white p-6 min-h-screen z-40
                   ${isMobile ? 'shadow-2xl' : ''}`}
      >
        <div className="mb-[20px] flex items-center ml-[50px]">
          <span className="text-3xl font-bold font-sans tracking-tight">
            Brainy
            <span className="text-purple-400">.</span>
          </span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 10 }}
              className="group flex items-center py-3 px-4 rounded-r-[50px] rounded-l-[100px] 
                       cursor-pointer transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-purple-800 hover:shadow-lg
                       active:scale-95 active:shadow-md"
              onClick={() => isMobile && setIsOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3 transition-transform duration-300 
                                  group-hover:scale-110" />
              <span className="font-medium transition-all duration-300 
                             group-hover:font-semibold">
                {item.name}
              </span>
            </motion.div>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center p-4 bg-purple-800 rounded-xl 
                        transition-all duration-300 hover:bg-purple-700 
                        cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex 
                          items-center justify-center">
              <span className="text-lg font-semibold">JD</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">Ayodele Toluwani</p>
              <p className="text-sm text-purple-300">Owner</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
