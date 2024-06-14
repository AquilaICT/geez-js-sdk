interface GeezSMSAPIResponse<T> {
  data: T;
  error: boolean;
  msg: string;
}

export default GeezSMSAPIResponse;
