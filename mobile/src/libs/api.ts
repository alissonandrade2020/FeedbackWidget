import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.1.4:3333',
  baseURL: 'https://feedbackwidget-production.up.railway.app/',
});