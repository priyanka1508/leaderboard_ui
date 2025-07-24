import axios from 'axios';

function normalizeUrl(url) {
  return url.replace(/([^:]\/)\/+/g, "$1");
}


const localhost_url = 'http://localhost:8000';
const host_url = process.env.REACT_APP_API_BASE_URL;
console.log('host_url', host_url);
const API = axios.create({
  baseURL: normalizeUrl(`${host_url}/api/leaderboard`),
});

export default API;
