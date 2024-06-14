import GeezSMSException from './geezsmsexception';

class GeezSMSBadRequestException extends GeezSMSException {
  msg: string;
  error: any;
  constructor(msg: string, error: any) {
    super(msg);
    this.msg = msg;
    this.error = error;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GeezSMSBadRequestException.prototype);
  }
}

export default GeezSMSBadRequestException;
