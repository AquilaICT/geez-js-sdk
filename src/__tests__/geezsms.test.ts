import GeezSMS from '../geezsms';

describe('GeezSMS::class', () => {
  test('Creates Instance', () => {
    expect(new GeezSMS('myAPI')).toBeInstanceOf(GeezSMS);
  });
  test('Check API key is Set', () => {
    const geezsms = new GeezSMS('myAPI');
    expect(geezsms.apiKey).toBe('myAPI');
  });
  test('Check API key is Set', () => {
    const geezsms = new GeezSMS('myAPI');
    expect(geezsms.apiKey).toBe('myAPI');
  });
});
