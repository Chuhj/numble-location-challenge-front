import { useMutation } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from '../api/config/axios';
import { LoginInputs } from './../views/Login/index';
import { SignupInputs } from '../views/Signup';
import { Response, ErrorResponse } from './types';

interface SignupBody extends SignupInputs {
  userType: string;
}

export const getRefresh = async () => {
  const res = await axiosInstance.post(`/refresh`);
  setHeadersToken(res);
  return res;
};

export const setHeadersToken = (data: AxiosResponse) => {
  const access_token = data.headers.authorization;
  if (!access_token) throw new Error('토큰 없음');
  axiosInstance.defaults.headers.common['authorization'] = `Bearer ${access_token}`;
};

export const useSignup = () => {
  return useMutation<AxiosResponse<Response>, AxiosError<ErrorResponse>, SignupBody>(async (inputs) => {
    const res = await axiosInstance.post(`/users`, inputs);
    return res;
  });
};

export const useLogin = () => {
  return useMutation<AxiosResponse<Response>, AxiosError<ErrorResponse>, LoginInputs>(async (inputs) => {
    const res = await axiosInstance.post(`/login`, inputs);
    return res;
  });
};

export const useLogout = () => {
  return useMutation<AxiosResponse<Response>, AxiosError<ErrorResponse>>(async (inputs) => {
    const res = await axiosInstance.post('/logout');
    axiosInstance.defaults.headers.common['authorization'] = '';
    return res;
  });
};
