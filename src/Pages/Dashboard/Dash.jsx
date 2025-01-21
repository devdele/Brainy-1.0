import { Card } from '../../Components/Dashboard/card';
import Calendar from '../../Components/Dashboard/Calendar';
import PerformanceChart from '../../Components/Dashboard/PerformanceChart';
import TopScorers from '../../Components/Dashboard/TopScorers';
import Sidebar from '../../Components/Dashboard/Sidebar';
import StatsOverview from '../../Components/Dashboard/StatsOverview';
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
   
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold ml-[50px] mt-[10px]">Welcome to Brainy</h1>

        
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
         
            <div className="relative w-full sm:w-auto">
              <input
                type="search"
                placeholder="Search"
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white border-transparent 
                         focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>

           
            <div className="flex items-center justify-end gap-2">
              <button
                className="p-2 rounded-full bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Messages"
              >
                <FaRegEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                className="p-2 rounded-full bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Notifications"
              >
                <FaRegBell className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                aria-label="Profile"
              >
                <CgProfile className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

       
        <div className="mb-8">
          <StatsOverview />
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">
          <Card className="p-4 sm:p-6">
            <Calendar />
          </Card>
          <Card className="p-4 sm:p-6">
            <PerformanceChart />
          </Card>
        </div>

     
        <div className="mb-8">
          <TopScorers />
        </div>
      </main>
    </div>
  );
}