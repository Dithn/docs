---
title: Workato connectors - Zoom new event
date: 2018-03-23 06:00:00 Z
---

# Zoom - New event trigger
This trigger picks up new events in Zoom in real time. Each new job represents a single event. The output of the event trigger depends on the event selected in the trigger configuration.

![New event trigger](~@img/zoom/new-event-trigger.png)
<center><i>New event trigger*</i></center>

|Input field|Description|
|--- |--- |
|Event category|Select the category of event. Categories help you filter down to events by type such as Webinar events or Meeting events.|
|Event|Select the event in Zoom which will trigger this recipe. A new job is created for each event across your Zoom instance.|

::: tip
Events are triggered on an organizational level. For example, when the trigger is set up to fire on meetings that have ended, a new job is created for every meeting ended by anyone in the connected Zoom organization. Use a meeting's or webinar's tracking fields to filter for events that are relevant. Find out more about how to filter by events by tracking fields [here.](/connectors/zoom/best-practices.md#filtering-trigger-events-on-zoom)
:::

## Configuring the Zoom trigger
Configuring the Zoom trigger is simple. After creating a connection, you will be prompted to provide an **Event category**. This event category helps you filter down events in Zoom based on categories like Webinars, Meetings or even Users. The following dropdown will show the actual **Event** itself. Select from the list of events possible and you're good to go!

Below are some of the more advanced triggers in Zoom and descriptions of their trigger events.
| Category        	| Event                                  	| Description                                                                                                                                         	|
|-----------------	|---------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------	|
| Meeting         	| Meeting alerts                        	| Triggers when a meeting has alerts such as bad connection or unstable video                                                                  	|
| Meeting         	| Meeting registrant created            	| Triggers a person registers for any meeting in Zoom. Registrant can be created via UI or API                                                 	|
| Meeting         	| Meeting sharing started               	| Triggers a person starts sharing their screen during a meeting.                                                                              	|
| Meeting         	| Meeting sharing ended                 	| Triggers a person starts stops their screen during a meeting.                                                                                	|
| Meeting         	| Participant waiting for Host          	| Triggers a participant in a waiting room is waiting for the host to join. This occurs when participants cannot join a meeting before a host. 	|
| Meeting         	| Participant joined before host        	| Triggers a participant in the meeting is waiting for the host to join. This occurs when participants can join a meeting before a host.       	|
| Webinar         	| Webinar alerts                        	| Triggers when a Webinar has alerts such as bad connection or unstable video                                                                  	|
| Webinar         	| Webinar sharing started               	| Triggers a person starts sharing their screen during a webinar.                                                                              	|
| Webinar         	| Webinar sharing ended                 	| Triggers a person stops sharing their screen during a webinar.                                                                               	|
| Webinar         	| Webinar registrant created            	| Triggers a person registers for any Webinar in Zoom. Registrant can be created via UI or API                                                 	|
| Cloud Recording  	| Cloud recording completed             	| Triggers when a cloud recording has processed fully on Zoom.                                                                                 	|
| Cloud Recording  	| Cloud recording transcript completed  	| Triggers when a cloud recording transcript is available.                                                                                      |
| User            	| User settings updated                 	| Triggers when a users profile information has been updated                                                                                   	|
| User            	| User personal notes updated           	| Triggers when a user changes their person note at the top of their chat profile.                                                            	|
