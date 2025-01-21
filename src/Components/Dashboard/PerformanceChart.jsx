

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

export default function PerformanceChart() {
  const data = [
    { name: '1st', value: 90 },
    { name: '2nd', value: 65 },
    { name: '3rd', value: 75 },
    { name: '4th', value: 95 },
    { name: '5th', value: 85 },
  ];

  const [loading, setLoading] = useState(true);

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

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        School Performance
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
         
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          
          <XAxis dataKey="name" stroke="#333" tick={{ fontSize: 12 }} />
          <YAxis stroke="#333" tick={{ fontSize: 12 }} />
          
        
          <Tooltip cursor={{ fill: '#f5f5f5' }} />
          
      
          <Legend wrapperStyle={{ fontSize: 14, marginTop: 10 }} />
          
      
          <Bar 
            dataKey="value" 
            fill="#4CAF50" 
            radius={[5, 5, 0, 0]} 
            animationDuration={800} 
            animationBegin={200} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
