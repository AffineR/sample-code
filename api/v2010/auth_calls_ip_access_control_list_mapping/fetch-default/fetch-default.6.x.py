# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

auth_calls_ip_access_control_list_mapping = client.sip \
    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .auth \
    .calls \
    .ip_access_control_list_mappings('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .fetch()

print(auth_calls_ip_access_control_list_mapping.friendly_name)
