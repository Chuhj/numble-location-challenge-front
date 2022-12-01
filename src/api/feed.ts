import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { AddFeedBody } from '../views/FeedAdd';
import axiosInstance from './config/axios';
import { ErrorResponse, Feed, FeedDetail, Response } from './types';

export const useGetHotFeeds = () => {
  return useQuery<{ data: Feed[]; hasNextPage: boolean }>(['feeds', 'hot'], async () => {
    const res = await axiosInstance.get(`/posts?filter=HOT`);
    return { data: res.data.data, hasNextPage: res.data.hasNextPage };
  });
};

export const useGetFeeds = () => {
  return useQuery<{ data: Feed[]; hasNextPage: boolean }>(['feeds', 'hot'], async () => {
    const res = await axiosInstance.get(`/posts?filter=LATEST`);
    return { data: res.data.data, hasNextPage: res.data.hasNextPage };
  });
};

export const useGetFeed = (id?: string) => {
  return useQuery<FeedDetail>(
    ['feed', id],
    async () => {
      const res = await axiosInstance.get(`/posts/${id}`);
      return res.data.data;
    },
    { enabled: false }
  );
};

export const useAddComment = () => {
  return useMutation<Response, AxiosError<ErrorResponse>, { id: number; contents: string }>(async ({ id, contents }) => {
    const res = await axiosInstance.post(`/comment/${id}`, { contents });
    return res.data.data;
  });
};

export const useReplyComment = () => {
  return useMutation<Response, AxiosError<ErrorResponse>, { id: number; commentId: number; contents: string }>(
    async ({ id, commentId, contents }) => {
      const res = await axiosInstance.post(`/comment/${id}/${commentId}`, { contents });
      return res.data.data;
    }
  );
};

export const useLike = () => {
  return useMutation<Response, AxiosError<ErrorResponse>, { id: number }>(async ({ id }) => {
    const res = await axiosInstance.post(`/like/${id}`);
    return res.data.data;
  });
};

export const useAddFeed = () => {
  return useMutation<Response, AxiosError<ErrorResponse>, AddFeedBody>(async (body) => {
    const res = await axiosInstance.post(`/posts`, body);
    return res.data.data;
  });
};
