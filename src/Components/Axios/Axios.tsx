import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://matchmate-server.onrender.com/';

const axiosinstance: AxiosInstance = axios.create({
  baseURL: baseURL,
});

export { axiosinstance };
