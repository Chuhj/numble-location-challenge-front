export interface CommentType {
  commentId: number;
  user: {
    id: number;
    profile: string;
    nickname: string;
  };
  contents: string;
  level: number;
  refOrder: number;
  parentNum: number;
  createDate: string;
  deleted: boolean;
  cgroup: number;
  regionName: string;
}

export interface FeedDetail {
  postId: number;
  user: {
    id: number;
    profile: string;
    nickname: string;
  };
  contents: string;
  images: [
    {
      imagePath: string;
    },
    {
      imagePath: string;
    }
  ];
  regions: number;
  regionName: string;
  likes: number;
  createTime: string;
  comments: CommentType[];
  social: {
    id: number;
    thumbnail: {
      imagePath: string;
    };
    title: string;
    region: number;
    regionName: string;
    startDate: string;
  } | null;
  liked: boolean;
}

export interface Feed {
  postId: number;
  user: {
    id: number;
    profile: string;
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
  } | null;
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
  } | null;
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
