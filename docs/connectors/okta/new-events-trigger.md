---
title: Workato connectors - Okta new events trigger
date: 2020-06-03 06:00:00 Z
---

# Okta - New events trigger
Configure the Okta connector to listen to new events that are created in your Okta instance. You can choose from the following triggers
- Listen to events at polling intervals with the [polling trigger](#new-event).
- Or listen in real-time with the [real-time trigger](#new-event-real-time).

## New event
This trigger picks up new events in your Okta instance. It checks for new events once every poll interval and each event is processed as a separate job.

![New event trigger](~@img/connectors/okta/new-events-trigger.png)
*New event trigger*

### Input fields
| Field          | Description |
| -------------- | ----------- |
| Event category | Specify the category of events that you wish to receive from Okta. |
| Event type     | Specify the specific event that you wish to receive from Okta. |
| Event result   | Specify whether you are observing a positive or negative event. |
| When first started, this recipe should pick up events from | Events created after this time will be processed by the recipe. If left blank, the default will be set to **one hour** before the recipe is first started. |

### Output fields
The output datatree contains information about the event like the timestamp, the actor, the client used, the authentication and security contents.

See [here](events-output-datatree.md) for the full list of output fields.

## New event (real-time)
This trigger picks up new events in your Okta instance in real-time. Each event is processed as a separate job.

![New event trigger (real-time)](~@img/connectors/okta/new-events-trigger-realtime.png)
*New event trigger (real-time)*

### Input fields
| Field          | Description |
| -------------- | ----------- |
| Event category | Specify the category of events that you wish to receive from Okta. |
| Event type     | Specify the specific event that you wish to receive from Okta. |
| Event result   | Specify whether you are observing a positive or negative event. |
| When first started, this recipe should pick up events from | Events created after this time will be processed by the recipe. If left blank, the default will be set to **one hour** before the recipe is first started. |

### Output fields
The output datatree contains information about the event like the timestamp, the actor, the client used, the authentication and security contents.

See [here](events-output-datatree.md) for the full list of output fields.
