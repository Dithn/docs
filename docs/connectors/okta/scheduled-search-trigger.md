---
title: Workato connectors - Okta scheduled event search trigger
date: 2020-06-03 06:00:00 Z
---

# Okta - Scheduled event search trigger

Configure the Okta connector to execute a search of log events on a specified schedule. Events can be filtered (e.g. searching for a specific target ID or actor ID).

Events will be returned in batches. The default batch size is **100** and the max batch size is **1000**.

![Scheduled event search trigger](~@img/connectors/okta/schedule-event-search-trigger.png)
*Scheduled event search trigger*

## Input fields
| Field          | Description |
| -------------- | ----------- |
| When first started, this recipe should pick up events from | Events created after this time will be processed by the recipe. |
| Schedule | Select which interval to execute the search. The following time definitions will follow your schedule format.<br><br>**Monthly** will require you to specify the day of the month, hour and minute.<br><br>**Daily** will require you to specify which days of the week to execute the search, as well as the hour and minute.<br><br>**Hourly** will require you to specify which days of the week to execute the search, as well as the minute. |
| Time zone | Select the time zone. |
| Filter | Use Okta's filter definitions to filter the results of this search. Learn more about Okta filters [here](https://developer.okta.com/docs/reference/api/system-log/#expression-filter). |
| Batch size | Minimum is 1, maximum is 1000, default is 100. |

## Output fields
This trigger will return metadata data about the scheduled event search as well as data about individual log events. Learn more about event outputs [here](events-output-datatree.md).

| Field           | Description |
| --------------- | ----------- |
| Range           | The range of event IDs retrieved from the search.      |
| First record ID | The ID of the first event in the batch.                |
| Last record ID  | The ID of the last event in the batch.                 |
| Events | This contains a list of events. Each event contains information about the event like the timestamp, the actor, the client used, the authentication and security contents. Learn more about event outputs [here](events-output-datatree.md). |
| Scheduled time  | The time the search was executed.                      |
| Total number of records | The number of events retrieved in this search. |
| First batch     | Whether this is the first batch of log events.         |
| Last batch      | Whether this is the last batch of log events.          |
| Starting offset | The offset number for the first event of this batch. For example, if there are `500` events from this scheduled search and the trigger uses a batch size of `100`. On the 2nd batch (rows `101` to `200`), the starting offset will be `100`. |
| Ending offset   | The offset number for the last event of this batch. For example, if there are `500` events from this scheduled search. and the trigger uses a batch size of `200`. On the 2nd batch (rows `101` to `200`), the ending offset will be `200`. |
