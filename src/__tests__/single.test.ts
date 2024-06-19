import GeezSMS from '../geezsms';
import GeezSMSBadRequestException from '../exceptions/APIBadRequestException';
import SingleSMS, { SingleSMSRequest } from '../single';
import 'dotenv/config'

describe('GeezSMS Checkout', () => {
  test('singleSMS Is istance of  SingleSMS', () => {
    const geezsms = new GeezSMS('myAPI');
    expect(geezsms.single).toBeInstanceOf(SingleSMS);
  });
  test('cand send single sms', async () => {
    const geezsms = new GeezSMS(process.env.APIKey || '');
    const data: SingleSMSRequest = {
      phone: process.env.phone || '',
      msg: "Test message",
      callback: "https://webhook.site/bce0de92-88fc-461d-b108-cab62bce9d5f"
    };
    let session = await geezsms.single.send(data);
    expect(session.msg).toBe('SMS_SENT_SUCCSSFULLY');
  });
  test('Check API key is Invalid', async () => {
    try {
      const geezsms = new GeezSMS('myAPI');
      await geezsms.single.send({msg: 'must fail', phone: process.env.phone || ''});
    } catch (err) {
      expect(err).toBeInstanceOf(GeezSMSBadRequestException);
    }
  });
})