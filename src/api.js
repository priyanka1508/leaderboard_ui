import axios from 'axios';

const localhost_url = 'http://localhost:8000';
const host_url = process.env.REACT_APP_API_BASE_URL;

const API = axios.create({
  baseURL: `${host_url}/api/leaderboard`,
});

export default API;
