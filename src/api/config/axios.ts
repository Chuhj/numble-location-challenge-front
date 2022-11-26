import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const instanceSetting: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const axiosInstance: AxiosInstance = axios.create(instanceSetting);

export default axiosInstance;
