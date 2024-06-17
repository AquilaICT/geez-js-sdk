interface GeezSMSAPIResponse<T> {
  data: T;
  error: boolean;
  msg: string;
}
export interface GeezSuccesReponse{
  api_log_id: number;
  date: string;
}

export default GeezSMSAPIResponse;