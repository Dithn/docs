---
title: Workato connectors - Okta get recent log on events by user action
date: 2020-06-03 18:00:00 Z
---

# Get recent log on events by user action
This action retrieves a log on recent events for a specific user. This action uses the email address to identify the user.

This action will retrieve up to 100 actions from the last 12 hours.

![Get recent log on events by user ction](~@img/connectors/okta/get-recent-log-on-events-by-user.png)
*Get recent log on events by user action*

## Input fields
| Field   | Description |
| ------- | ----------- |
| User ID | The unique ID of the target user.  |

## Output fields
The output datatree contains a list of logs on events. Each log event contains information about the event like the timestamp, the actor, the client used, the authentication and security contents.

See [here](events-output-datatree.md) for the full list of output fields.
