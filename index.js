var awsIot = require('aws-iot-device-sdk');
require('dotenv').config();

var device = awsIot.device({
   keyPath: process.env.AWS_IOT_keyPath,
  certPath: process.env.AWS_IOT_certPath,
    caPath: process.env.AWS_IOT_caPath,
  clientId: process.env.AWS_IOT_clientId,
      host: process.env.AWS_IOT_host,
});

device
  .on('connect', function(conn) {
    console.log(conn);
    device.subscribe('topic_1');
    device.subscribe('topic_2');
    device.publish('topic_2', JSON.stringify({ test_data: 1}));
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });