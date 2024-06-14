[<img src="https://geezsms.com/wp-content/uploads/2021/06/geez-white2-1-1.png" />](https://geezsms.com)

# GeezSMS Node.js Library

[![npm version](https://img.shields.io/npm/v/geezsms.svg?style=flat-square)](https://www.npmjs.com/package/geezsms)
[![npm downloads](https://img.shields.io/npm/dm/geezsms.svg?style=flat-square)](https://www.npmjs.com/package/geezsms)
[![npm total downloads](https://img.shields.io/npm/dt/geezsms.svg?style=flat-square)](https://www.npmjs.com/package/geezsms)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/aquilaict/geez-js-sdk/Tests/main?label=tests&style=flat-square)](https://github.com/aquilaict/geez-js-sdk/actions?query=workflow%3ATests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/workflow/status/aquilaict/geez-js-sdk/Code%20Style/main?label=code%20style&style=flat-square)](https://github.com/aquilaict/geez-js-sdk/actions?query=workflow%3A"Code+Style"+branch%3Amain)


The GeezSMS Node.js library offers a convenient way to integrate SMS functionalities into applications written in server-side JavaScript, focusing on sending SMS messages.

## Documentation

For additional details, visit the [Developer API docs](https://documenter.getpostman.com/view/11254016/TzK2YZ2J#intro).

## Requirements

Node.js version 8, 10, or higher.

## Installation

Install the GeezSMS package using npm or Yarn:

```sh
npm install geezsms --save
# or
yarn add geezsms
```

## Usage

To use the library, you need to configure it with your account's API key, which you can obtain from the [GeezSMS Dashboard](http://geezsms.com/#/api).

### Using CommonJS

```js
const GeezSMS = require('geezsms').default;
const geezSMS = new GeezSMS('YOUR_API_KEY');
```

### Using ES Modules

```js
import GeezSMS from 'geezsms';
const geezSMS = new GeezSMS('YOUR_API_KEY');
```

## Sending an SMS

To send an SMS, use the `single` property of the GeezSMS instance:

```js
const message = {
  phone: 'recipient_phone_number',
  msg: 'Your message text',
  sender_id: 'your_sender_id',  // Optional
  callback: 'your_callback_url',  // Optional
};

try {
  const response = await geezSMS.single.send(message);
  console.log('Message sent successfully:', response);
} catch (error) {
  console.error('Failed to send message:', error);
}
```

## Advanced SMS Options

You can specify additional options such as using a template or sandbox mode:

```js
const message = {
  phone: 'recipient_phone_number',
  msg: 'Your message text',
  template: true,
  templateValues: {
    name: 'John',
    date: '2022-06-15',
  },
};

const options = {
  sandbox: true,
  apiVersion: 1,
};

try {
  const response = await geezSMS.single.send(message, options);
  console.log('Message sent successfully:', response);
} catch (error) {
  console.error('Failed to send message:', error);
}
```

## Handling Errors

The library provides detailed exceptions for various errors such as unauthorized access, bad requests, and network issues:


## Change Log

- **Version 1.0.0 (June 14, 2024)**: Initial release supporting basic SMS functionalities.
- **Version 1.0.0 (June 14, 2024)**: Added support for SMS templates and advanced error handling.

## More Information

- [REST API Version](https://documenter.getpostman.com/view/11254016/TzK2YZ2J#intro)
- [GeezSMS](https://geezsms.com)