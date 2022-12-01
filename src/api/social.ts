import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import axiosInstance from './config/axios';
import { ErrorResponse, Social } from './types';

export const useGetSocialList = (sort: string, category: number) => {
  let sortNum: number;
  if (sort === 'recent') sortNum = 1;
  if (sort === 'deadline') sortNum = 2;
  if (sort === 'popular') sortNum = 3;
  return useQuery<Social[]>(['socials', sort, category], async () => {
    const res = await axiosInstance.get(`/social${category === 0 ? '' : `/${category}`}/sort/${sortNum}`);
    return res.data.data;
  });
};

export const useSearchSocials = () => {
  return useMutation<Response, AxiosError<ErrorResponse>, { tagId: string }>(['socials', 'search'], async ({ tagId }) => {
    const res = await axiosInstance.get(`/social/search/${tagId}`);
    return res.data.data;
  });
};
