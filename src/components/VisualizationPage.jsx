import { useEffect, useState } from 'react'
import axios from 'axios'
import { 
  BarChart, Bar, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, ComposedChart 
} from 'recharts'
import { useQuery } from '@tanstack/react-query';

export default function VisualizationPage({ onBack }) {
  const fetchStats = async () => {
    const response = await axios.get('https://spacex-rxo2.onrender.com/api/launches/stats');
    return response.data;
  };

  const { data: stats, isLoading, isError } = useQuery({
    queryKey: ['launchStats'], 
    queryFn: fetchStats,      
    staleTime: Infinity,  
    cacheTime: Infinity, 
  });

  if (isLoading) {
    return <div className="loading">Loading data...</div>;
  }

  if (isError) {
    return <div className="error">Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="page-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      
      <h2>Launch Visualizations</h2>
      
      {isLoading ? (
        <div className="loading">Loading data...</div>
      ) : (
        <div className="visualization-grid">
          <div className="grid">
            {/* New Launch Count Chart */}
            <div className="chart-card">
            <h2>Launches Per Year</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={stats.yearly_stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                    formatter={(value) => [value, "Launches"]}
                    labelFormatter={(year) => `Year: ${year}`}
                />
                <Legend />
                <Bar 
                    dataKey="total_launches" 
                    fill="#8884d8" 
                    name="Total Launches"
                    radius={[4, 4, 0, 0]}
                />
                </BarChart>
            </ResponsiveContainer>
            </div>

            <div className="chart-card">
            <h2>Rocket Statistics</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={stats.rocket_stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rocket_name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total_launches" fill="#8884d8" name="Total Launches" />
                <Bar dataKey="total_payload_weight" fill="#82ca9d" name="Total Payload Weight (kg)" />
              </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
        </div>
      )}
    </div>
  )
}