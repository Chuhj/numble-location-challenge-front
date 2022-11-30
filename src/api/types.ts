export interface Feed {
  postId: number;
  user: {
    id: number;
    profile: any; // ?
    nickname: string;
  };
  contents: string;
  social: {
    id: number;
    thumbnail: {
      imagePath: string;
    };
    title: string;
    region: number;
    regionName: string;
    startDate: string;
  } | null; // ?
  thumbnail: {
    imagePath: string;
  };
  comment: {
    commentId: number;
    user: {
      id: number;
      profile: string;
      nickname: string;
    };
    contents: string;
    createDate: string;
  } | null; // ?
  comments_cnt: number;
  regions: number;
  regionName: string;
  createTime: string;
  likes: number;
  liked: boolean;
}

export interface Social {
  socialings: any[];
  id: number;
  images: { imagePath: string }[];
  regionCode: number;
  dongCode: number;
  dongName: string;
  title: string;
  endDate: string;
  currentNums: number;
  limitedNums: number;
  status: 'AVAILABLE' | 'EXPIRATION';
  category: {
    id: number;
    name: '문화활동' | '운동/액티비티' | '음식' | '취미/창작' | '여행';
  };
  tags: [
    {
      tag_id: number;
      tag_name: string;
    }
  ];
  likeCnt: number;
  likeOrElse: boolean;
  createDate: string;
}

export interface Response {
  success: boolean;
  message: string;
  data: any;
}

export interface ErrorResponse {
  errorCode: number;
  errorMessage: string;
}
