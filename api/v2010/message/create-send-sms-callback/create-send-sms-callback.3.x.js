// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC540a606a5b8ee34f1debfe580a651251';
const authToken = '0ce9afc136faadede61505fc6fd5f3fd';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'McAvoy or Stewart? These timelines can get so confusing.',
         from: '+15017122661',
         statusCallback: 'http://postb.in/1234abcd',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid))
      .done();
