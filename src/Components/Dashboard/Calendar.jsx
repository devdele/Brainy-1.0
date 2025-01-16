
import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(undefined, { weekday: 'short' });
    setDaysOfWeek(Array.from({ length: 7 }).map((_, i) => formatter.format(new Date(2023, 11, i))));
  }, []);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth).getDay();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="bg-gray-100 p-2 sm:p-4 rounded-lg shadow-md overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Calendar & Attendance</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out" onClick={handlePreviousMonth}>
            <FaArrowLeft className="text-gray-700" />
          </button>
          <div className='pt-[5.5px] text-gray-800 font-medium'>{currentMonth + 1} {currentYear}</div>
          <button className="p-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out" onClick={handleNextMonth}>
            <FaArrowRight className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="min-w-[300px] overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day} className="p-1 sm:p-2 border border-gray-300 text-center bg-gray-200 text-gray-600 text-xs sm:text-sm">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 7 }).map((_, columnIndex) => {
                  const dayIndex = rowIndex * 7 + columnIndex - firstDayOfMonth + 1;
                  return (
                    <td key={columnIndex} className={`p-1 sm:p-2 border border-gray-300 text-center text-xs sm:text-sm transition duration-300 ease-in-out ${dayIndex > 0 && dayIndex <= daysInMonth ? 'bg-white hover:bg-blue-100' : 'bg-transparent'}`}>
                      {dayIndex > 0 && dayIndex <= daysInMonth ? dayIndex : '\u00A0'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}