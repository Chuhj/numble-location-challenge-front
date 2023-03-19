import { atom } from 'recoil';

export const userState = atom<{ isLogin: boolean; id: number | null }>({
  key: 'user',
  default: {
    isLogin: false,
    id: null,
  },
});
