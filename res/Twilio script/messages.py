from twilio.rest import TwilioRestClient
import csv
import pandas as pd

#DON'T TEXT YET!
account_sid = ""
auth_token = ""
reverse_command = 0
gravity_command = 0
dark_command = 0
invisible_command =0


client = TwilioRestClient(account_sid, auth_token)
messages = client.messages.list()


for x in messages:
	if(x.direction == 'inbound'):
		
		if(x.body == '!reverse'):
			reverse_command += 1
		if(x.body == '!gravity'):
			gravity_command += 1
		if(x.body == '!dark'):
 			dark_command += 1
		if(x.body == '!invisible'):
 			invisible_command += 1

array_values = [reverse_command, gravity_command, dark_command, invisible_command]

data_frame = pd.DataFrame(array_values, index=['reverse', 'gravity', 'dark', 'invisible'],columns=['Points'])

data_frame.to_csv('game_poll.csv')

print(data_frame)

