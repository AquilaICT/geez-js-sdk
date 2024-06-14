import axios, { AxiosInstance } from 'axios';
import GeezSMSBadRequestException from './exceptions/APIBadRequestException';
import GeezSMSUnAuthorizedException from './exceptions/APIUnauthorized';
import GeezSMSException from './exceptions/geezsmsexception';
import GeezSMSNetworkException from './exceptions/geezsmsnetworkexception';
import GeezSMSAPIResponse from './interface/geezsmsapiresponse';

class SingleSMS {
  _httpClient: AxiosInstance;
  constructor(_httpClient: AxiosInstance) {
    this._httpClient = _httpClient;
  }

  async send(
    request: SingleSMSRequest,
    option: SmsOption = { sandbox: false, apiVersion: 1},
  ): Promise<string | {}> {
    try {
      const basePath: string = `/v${option.apiVersion}`;
      let {templateValues, ...body} = request;
      if(!templateValues) templateValues = {}
      const response = await this._httpClient.post(`${basePath}/sms/send`, {...body, ...templateValues});
      const arifAPIResponse = response.data as GeezSMSAPIResponse<string>;
      return arifAPIResponse.msg;
    } catch (error) {
      this.__handleException(error);
      throw error;
    }
  }

  __handleException(error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response?.status === 401)
          throw new GeezSMSUnAuthorizedException('Invalid authentication credentials');
        if (error.response?.status === 400) {
          const arifAPIResponse = error.response?.data as GeezSMSAPIResponse<any>;
          throw new GeezSMSBadRequestException(arifAPIResponse.msg as string, arifAPIResponse.data);
        }
        throw new GeezSMSException((error.response?.data as GeezSMSAPIResponse<any>).msg as string);
      } else throw new GeezSMSNetworkException(error.message);
    }
  }
}

export interface SingleSMSRequest {
  phone: string;
  msg: string;
  shortcode_id?: string;
  callback?: string;
  sender_id?: string[];
  template?: boolean;
  templateValues?: { [key: string]: string };
}

export interface SmsOption {
  sandbox: boolean;
  apiVersion: number
}

export default SingleSMS;
