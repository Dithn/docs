---
title: Workato connectors - Okta get recent log on events by IP address action
date: 2020-06-03 18:00:00 Z
---

# Get recent log on events by IP address action
This action retrieves a log on recent events that originated from a specified IP address.

This action will retrieve up to 100 actions from the last 12 hours.

![Get recent log on events by IP address ction](~@img/connectors/okta/get-recent-log-on-events-by-ip-address.png)
*Get recent log on events by IP address action*

## Input fields
| Field   	 | Description |
| ---------- | ----------- |
| IP address | The IP address as the source of the log events. |

## Output fields
The output datatree contains a list of logs on events. Each log event contains information about the event like the timestamp, the actor, the client used, the authentication and security contents.

See [here](events-output-datatree.md) for the full list of output fields.
