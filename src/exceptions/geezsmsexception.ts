class GeezSMSException extends Error {
  msg: string;
  constructor(msg: object|string) {
    let strmsg = ''
    if(typeof msg == 'object' ){
      for (const key in msg) {
        if (Object.prototype.hasOwnProperty.call(msg, key)) {
          const element = msg[key as never] as string;
          strmsg += `${key} - ${element} \n`;
        }
      }
    }else{
      strmsg = msg
    }
   
    super(strmsg);
    this.msg = strmsg;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GeezSMSException.prototype);
  }
}

export default GeezSMSException;
