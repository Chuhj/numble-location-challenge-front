import { useQuery } from 'react-query';
import axiosInstance from './config/axios';
import { Social } from './types';

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
