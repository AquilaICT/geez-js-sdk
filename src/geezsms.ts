import axios, { AxiosInstance } from 'axios';
import SingleSMS from './single';

class GeezSMS {
  DEFAULT_HOST: string = 'https://api.geezsms.com/api';
  PACKAGE_VERSION: string = '1.0.0';
  DEFAULT_TIMEOUT: number = 1000 * 60 * 2;

  _httpClient: AxiosInstance;
  single: SingleSMS;
  // bulk: DirectPay;
  apiKey: string;

  constructor(apikey: string) {
    this.apiKey = apikey;

    this._httpClient = axios.create({
      baseURL: `${this.DEFAULT_HOST}`,
      timeout: this.DEFAULT_TIMEOUT,
      headers: {
        'X-GeezSMS-Key': apikey,
      },
    });
    this.single = new SingleSMS(this._httpClient);
    // TODO: add bulk support and otp support
    // this.bulk = new BulkSMS(this._httpClient);
  }
}

export default GeezSMS;
