import GeezSMSException from './geezsmsexception';

class GeezSMSUnAuthorizedException extends GeezSMSException {
  msg: string;
  constructor(msg: string) {
    super(msg);
    this.msg = msg;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GeezSMSUnAuthorizedException.prototype);
  }
}

export default GeezSMSUnAuthorizedException;
