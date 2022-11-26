export interface Response {
  success: boolean;
  message: string;
  data: any[];
}

export interface ErrorResponse {
  errorCode: number;
  errorMessage: string;
}
