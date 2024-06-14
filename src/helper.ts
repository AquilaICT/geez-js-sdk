import axios from 'axios';
import GeezSMSBadRequestException from './exceptions/APIBadRequestException';
import GeezSMSUnAuthorizedException from './exceptions/APIUnauthorized';
import GeezSMSException from './exceptions/geezsmsexception';
import GeezSMSNetworkException from './exceptions/geezsmsnetworkexception';
import GeezSMSAPIResponse from './interface/geezsmsapiresponse';

export function getExpireDateFromDate(date: Date) {
  return date.toISOString();
}
export function __handleException(error: any) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      if (error.response?.status === 401) throw new GeezSMSUnAuthorizedException('Invalid authentication credentials');
      if (error.response?.status === 400) {
        const arifAPIResponse = error.response?.data as GeezSMSAPIResponse<any>;
        throw new GeezSMSBadRequestException(arifAPIResponse.msg as string, arifAPIResponse.data);
      }
      throw new GeezSMSException((error.response?.data as GeezSMSAPIResponse<any>).msg as string);
    } else throw new GeezSMSNetworkException(error.message);
  }
}
