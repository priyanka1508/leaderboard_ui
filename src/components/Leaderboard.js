import React, { useEffect, useState } from 'react';
import API from '../api';

function Leaderboard() {
  const [topPlayers, setTopPlayers] = useState([]);

  const fetchTopPlayers = async () => {
    try {
      const res = await API.get('/top');
      console.log(res.data);
      setTopPlayers(res.data);
    } catch (err) {
      console.error('Error fetching leaderboard', err);
    }
  };

  useEffect(() => {
    fetchTopPlayers();
    const interval = setInterval(fetchTopPlayers, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '700px',
    margin: '30px auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '16px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    textAlign: 'left',
    padding: '12px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ccc',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #eee',
  };

  const rowHoverStyle = {
    transition: 'background-color 0.2s',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>🏆 Top 10 Leaderboard</div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>User ID</th>
            <th style={thStyle}>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((player, index) => (
            <tr
              key={player.user_id}
              style={rowHoverStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <td style={tdStyle}>{player.rank || index + 1}</td>
              <td style={tdStyle}>{player.user_id}</td>
              <td style={tdStyle}>{player.total_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
