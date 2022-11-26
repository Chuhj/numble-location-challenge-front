import { useQuery } from 'react-query';
import axiosInstance from './config/axios';

export const useGetRecentSocialList = () => {
  return useQuery<any[]>(['socials', 'recent'], async () => {
    const res = await axiosInstance.get(`/social/sort/1`);
    return res.data.data;
  });
};

export const useGetDeadlineSocialList = () => {
  return useQuery<any[]>(['socials', 'deadline'], async () => {
    const res = await axiosInstance.get(`/social/sort/2`);
    return res.data.data;
  });
};

export const useGetPopularSocialList = () => {
  return useQuery<any[]>(['socials', 'popular'], async () => {
    const res = await axiosInstance.get(`/social/sort/3`);
    return res.data.data;
  });
};
