import React, { useState } from 'react';
import API from '../api';

function RankChecker() {
  const [userId, setUserId] = useState('');
  const [rankInfo, setRankInfo] = useState(null);

  const fetchRank = async () => {
    try {
      const res = await API.get(`/rank/${userId}`);
      setRankInfo(res.data);
    } catch (err) {
      console.error('Error fetching rank', err);
      setRankInfo(null);
    }
  };

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
    marginBottom: '20px',
  };

  const inputGroupStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
  };

  const inputStyle = {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 16px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4c6ef5',
    color: '#fff',
    cursor: 'pointer',
  };

  const resultStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>🔍 Check Your Rank</div>

      <div style={inputGroupStyle}>
        <input
          type="text"
          placeholder="Enter user_id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={inputStyle}
        />
        <button onClick={fetchRank} style={buttonStyle}>Check</button>
      </div>

      {rankInfo && (
        <div style={resultStyle}>
          <strong>User ID:</strong> {rankInfo.user_id} <br />
          <strong>Rank:</strong> {rankInfo.rank ?? 'Not ranked yet'}
        </div>
      )}
    </div>
  );
}

export default RankChecker;
