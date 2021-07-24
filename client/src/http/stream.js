import axios from 'axios';

export const API_URL = `http://127.0.0.1:8888/api`;

export const streamApi = axios.create({
  baseURL: API_URL,
});
