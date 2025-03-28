import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import Card from './Card';  

export default function MetricsPage({ onBack }) {
  const [launchData, setLaunchData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  
  useEffect(() => {
    const cachedData = localStorage.getItem('launchData');
    if (cachedData) {
      setLaunchData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      axios
        .get('http://localhost:5000/api/metrix')  
        .then((response) => {
          setLaunchData(response.data);  
          localStorage.setItem('launchData', JSON.stringify(response.data)); 
          setLoading(false);  
        })
        .catch((err) => {
          console.error('Error fetching data:', err);
          setError('Failed to load data');
          setLoading(false);  
        });
    }
  }, []);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page-container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2>Launch Metrics</h2>
      <div className="metrics-container" style={styles.metricsContainer}>
      <Card title="Payload Contribution by Rocket">
          <ul>
            {launchData.payload_contribution.map(({ rocket_name, payload_contribution_percentage, total_payload_weight }) => (
              <li key={rocket_name}>
                {rocket_name}: {payload_contribution_percentage}% ({total_payload_weight} kg)
              </li>
            ))}
          </ul>
        </Card>
        
        {/* Total Launches Card */}
        <Card title="Total Launches">
          <p>{launchData.total_launches}</p>
        </Card>

        {/* Launch Frequencies per Year Card */}
        <Card title="Launch Frequencies per Year">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Year</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Total Launches</th>
            </tr>
          </thead>
          <tbody>
            {launchData.launch_frequencies.map(({ year, total_launches }) => (
              <tr key={year}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{year}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{total_launches}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Card>
      </div>
    </div>
  );
}

const styles = {
    backBtn: {
      backgroundColor: '#2d3748',
      color: '#f4f7fc',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px', 
    },
    metricsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '30px',
    },
  };
