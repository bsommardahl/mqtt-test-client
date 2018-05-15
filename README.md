## Welcome

This is a quick test app in Node.JS that connects to the MQTT broker at AWS IoT and exercises a few publishes and subscribes. You can view the broker's interations at https://console.aws.amazon.com/iot/home?region=us-east-1#/test (change region as needed).

### Install

`npm i`

### Setup
You will need the following values in your environment or in a `.env` file:

```
AWS_IOT_keyPath=./private.pem.key
AWS_IOT_certPath=./cert.pem.crt
AWS_IOT_caPath=./root.pem
AWS_IOT_clientId=arn:aws:iot:us-east-1:00000000000000:thing/Test_Client
AWS_IOT_host=0000000000000.iot.us-east-1.amazonaws.com
```

### Running

`node index`

### Debug

You can debug in VS Code very easily.
