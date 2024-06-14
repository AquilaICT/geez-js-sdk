class GeezSMSNetworkException extends Error {
  msg: string;
  constructor(msg: string) {
    super(msg);
    this.msg = msg;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GeezSMSNetworkException.prototype);
  }
}

export default GeezSMSNetworkException;
