// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.preview.understand
              .assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
              .intentActions()
              .fetch()
              .then(intent_actions => console.log(intent_actions.assistantSid))
              .done();
