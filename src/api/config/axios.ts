import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const BASE_URL = process.env.REACT_APP_BASE_URL

const instanceSetting: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

const axiosInstance: AxiosInstance = axios.create(instanceSetting)

const requestSuccess = (req: AxiosRequestConfig) => {
  const authToken = window.localStorage.getItem('access_token')
  if (!authToken) return req
  if (authToken && req.headers) req.headers.Authorization = `Bearer ${authToken}`
  return req
}
const requestError = (err: AxiosError) => {
  return Promise.reject(err)
}

const responseSuccess = (res: AxiosResponse) => res
const responseError = (err: AxiosError) => Promise.reject(err)

axiosInstance.interceptors.request.use(requestSuccess, requestError)
axiosInstance.interceptors.response.use(responseSuccess, responseError)

export default axiosInstance
