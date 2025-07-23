import axios from 'axios';

const localhost_url = 'http://localhost:8000';
const host_url = 'https://leaderboard-backend-snowy.vercel.app';

const API = axios.create({
  baseURL: `${host_url}/api/leaderboard`,
});

export default API;
