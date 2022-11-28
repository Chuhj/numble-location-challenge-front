export interface Social {
  socialings: any[];
  id: number;
  images: string[];
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
