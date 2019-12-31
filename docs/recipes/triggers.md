---
title: Workato triggers
date: 2017-02-18 22:15:00 Z
---

# Triggers
Triggers determine what event to listen to in order to execute the actions described in a recipe.

Trigger events can be set off in apps (e.g. Salesforce, JIRA) when a certain event happens (e.g. new contact is created, existing ticket is updated), when a new line is added in a file, or according to a schedule (fires at a certain time or interval), etc.

Depending on the available API, Workato can receive trigger events in real-time, or check for the occurrence of an event periodically by polling the app.

Triggers can be classified into different types based on when they check for new events (trigger mechanism) and how they group new events (trigger dispatch).

![Trigger types](~@img/recipes/triggers/trigger-types.png)
*Trigger mechanisms and dispatches*

## Trigger behaviour

Workato recipes pick up and queue trigger events in-sequence to be processed as recipe jobs. The recipe maintains a cursor and progresses through the trigger event queue synchronously, with an adjustable throughput. No duplication of jobs occur as Workato maintains a record of the trigger events it has seen.

![Queued trigger events](~@img/recipes/triggers/queued-trigger-events.png)
*Trigger events are queued and processed by the recipe as jobs*

Workato triggers have the following behaviour.

- In-sequence delivery

Triggers will be delivered in chronological order, e.g. oldest records will be processed first, or in the sequence they were delivered to Workato.

- Durable cursor position

Recipes remember the jobs it has processed even across stopped and running states. Whenever a recipe is started, it will pick up where it stopped and begin processing all trigger events since it was stopped.

![Durable cursor position](~@img/recipes/triggers/durable-cursor-position.png)
*When the recipe is stopped at 10/21/2017, 11.30am and started again days or weeks later, it will pick up trigger events from when it stopped at 10/21/2017, 11.30am*

- No duplication

Each recipe maintains a record of the trigger events it has seen, and will not process duplicate events. 

- Flow control

Recipes process trigger events synchronously, e.g. only process a second job when the first job has been completed. Workato provides flow control over recipes by enabling multiple jobs to be processed concurrently.

- Guaranteed delivery

For Workato polling triggers, Workato guarantees trigger event delivery. Even if servers experience temporary downtime, or if the network is unstable, Workato ensures that triggers are picked up and processed in-sequence.

Webhook events, which powers most real-time Workato triggers, inherently have the possibility of being lost. To mitigate this, most Workato-built real-time triggers (a notable exception is the HTTP webhook trigger) have a backup polling mechanism that ensures missed webhook trigger events will be picked up.

## Trigger mechanisms
Trigger mechanisms determine when a trigger will fire. In this section, we cover polling triggers, real-time triggers and scheduled triggers.

### Polling triggers
Polling triggers check for new events by periodically querying the app to see if new events are available. The polling frequency is determined by the type of Workato plan, and can be as low as 5 minutes. Each poll may yield multiple events ready for processing i.e. a single poll can result in several jobs being created.

When the recipe is first started, the polling trigger fetches all events after the **From** date, e.g. "fetch all NetSuite customers created or updated since 2017 January 10am, PST". Subsequently, polls are made at regular intervals as dictated by the plan type. A recipe with a 5 minutes polling interval that is kept running continuously will therefore fetch new trigger events every 5 minutes, e.g. "fetch all NetSuite customers created or updated in the last 5 minutes".

When the recipe is stopped, polling triggers stop fetching events from the trigger app. However, if the recipe is started again, polling triggers will fetch all events since the recipe was stopped.

#### Example: Polling trigger
A Workato account on the Business plan has a 5-minute polling interval, as displayed on their polling triggers.

![Polling intervals](~@img/recipes/triggers/polling_intervals.png)
*Trigger hint regarding the specific polling interval*

The recipe polls every 5 minutes for new accounts created in Salesforce, and fetches any new accounts. If there were multiple accounts created, each will result in a new job.

If the recipe is stopped on 1 Feb 2017, midnight PST, it will cease to fetch trigger events. However, when the recipe is started again, lets say on the 10 of March midnight PST, Workato will fetch all Salesforce accounts created since Feb 1.

### Real-time triggers
Real-time triggers are usually built on top of an asynchronous notification mechanism. Real-time triggers typically require registration in your connected app (either via the API or manually via the app interface), to let the app know that you are interested in a specific event. When that event occurs, the app will send a notification to Workato and generate a trigger event.

Webhooks are one such mechanism. Most real-time triggers supported on Workato are built on webhooks. The advantage of webhooks is that there is no delay, and it is more efficient as we only receive notifications from apps when events occur, instead of Workato having to check at regular intervals for new events.

Real-time triggers supported by Workato (this excludes HTTP real-time triggers) are generally webhooks supported by regular polling. The polling intervals for real-time triggers are generally longer than the normal polling triggers, however, i.e. instead of polling once every 5 minutes or so, the trigger can now poll once every hour. The polling mechanism in real-time triggers is also what allows you to select a **From** date at the time of recipe start.

### Scheduled triggers
Scheduled triggers are executed at specified days and times, hourly, daily, monthly, etc.

![Salesforce scheduled trigger schedules](~@img/recipes/triggers/scheduled_trigger_schedules.png)
*Various schedule options for Salesforce scheduled search trigger*

At the scheduled time or interval, this trigger will fetch all events matching the specified criteria. Also, unlike other triggers, scheduled triggers will return events that have already been picked up previously.

Scheduled triggers will return events in batches, similar to how batch triggers work. Users can specify the maximum batch size, e.g. if the batch size is set to 100 and 420 new events are identified, 5 new jobs will be created. The first four jobs will have 100 events each and the fifth will have 20 jobs.

#### Scheduler/clock/timer
Scheduler triggers allows you to schedule when exactly your recipe will run. There are two triggers:

- New scheduled event

This trigger allows you to specify the time the recipe should first trigger, and subsequently, the time intervals to continue triggering on.

![Basic scheduler trigger](~@img/recipes/triggers/basic-scheduler-trigger.png)
*Basic scheduler trigger that triggers the first time when recipe is started, then subsequently every hour after that*

- New scheduled event (advanced)

This trigger allows you to specify the days of the week the recipe should trigger on, as well as the times it should trigger on. If you specify only the minutes, e.g. 30, the recipe will trigger 24 times in a day, every 30 minutes past the hour. If both hour and minute inpur fields are filled, the recipe will trigger once a day.

![Advanced scheduler trigger](~@img/recipes/triggers/advanced-scheduler-trigger.gif) *Advanced scheduler trigger that triggers every Monday at midnight 0000*

## Trigger dispatches
Trigger dispatches determine whether a trigger returns a single event or a list of events. In this section, we cover single triggers and batch triggers.

### Single triggers
Single triggers are useful for continuous real-time synchronization of data, e.g. moving opportunities from Salesforce into NetSuite as sales orders the moment these opportunities close. Most Workato triggers are single triggers.

### Batch triggers
Batch triggers are generally used for increasing throughput, as trigger events are retrieved in lists instead of single events, e.g. moving high volume of user activity data from Marketo into data warehouses like Redshift.

Batch triggers are similar to polling triggers in terms of how they fetch new events. This group size i.e. batch size can be specified by the end user as part of the trigger configuration.

![Batch triggers process trigger events in batches of user-specified sizes](~@img/recipes/triggers/batching-diagram.png)
*Batch triggers process trigger events in batches of user-specified sizes*

For further details about batch triggers, refer to the Batch processing article [here](/features/batch-processing.md).

## Since/From
The **Since** or **From** setting enables recipes to fetch past trigger events from a specified date and time. i.e. instead of picking up new trigger events (events created since recipe was started) this enables picking events that have already occurred.

In the example below, the **New Salesforce object** trigger has a **From** date as 1 Jan 2017, midnight PST and the 'accounts' object is selected.

![Setting since date](~@img/recipes/triggers/set-since-date-for-trigger.gif)
*Setting the Since date for the trigger. Trigger will only pick up new accounts created since midnight of Jan 1, 2017*

When the recipe is started, only Salesforce accounts created after 1 Jan 2017, midnight PST will be picked up, as viewed from the created date column on the job report.

![Since parameter](~@img/recipes/triggers/since_param_ran_recipe.png)
*Job report shows that only Salesforce accounts created after Jan 1, 2017 were processed*

If the trigger was **New/updated Salesforce object**, only Salesforce accounts created or updated after 1 Jan 2017, midnight PST will be picked up.

However, not all triggers have the **Since/From** parameter. For such triggers, the date and time from which trigger events will be fetched is predetermined by default, usually as an offset from the time the recipe is started. Common values are:
- When recipe is first started
- An hour before recipe is first started
- A day before recipe is first started.
This offset is usually communicated in the trigger hint for the connector.

![Google Calendar since parameter](~@img/recipes/triggers/google_calendar_since_param.png)
*Trigger hint regarding the default offset of 1 hour ago for Google Calendar*

The **Since/From** value can only be set once, and will be locked from further changing after the recipe has been started for the first time.

## Trigger conditions
Trigger conditions are additional rules that define what kind of trigger events should be selected for processing, e.g. you can specify that only Salesforce accounts from California must be processed.

Trigger conditions are evaluated by Workato after the trigger events have been fetched i.e. Workato retrieves all new Salesforce accounts created in the last 5 minutes, and then filters out accounts not from California. This also means that, with a **New Salesforce account** trigger, accounts which are subsequently updated to be from California will not be picked up. If you find that your recipe seems to be missing events that you expected to be picked up, this might be the issue. Refer to the [recipe logic errors article](/recipes/recipe-logic-errors.md#missing-trigger-events) to find out more.

Note: trigger conditions generally do not monitor a field change, but simply check if the trigger condition is fulfilled. For example, if you wish to sync only closed won opportunities from Salesforce into your ERP system, setting the following trigger condition will cause every update made to the opportunity when its in `Closed Won` state be picked up by the recipe. This is as opposed to having the recipe pick up the opportunity only when its status is marked closed won for the first time. Refer to the [recipe logic errors article](/recipes/recipe-logic-errors.md#unexpected-trigger-events-data-duplication) to find out more.

To add a trigger condition, check the **Trigger IF** checkbox. The trigger datatree will appear, displaying the variables that can be used to formulate the trigger condition.

![Configure trigger filter](~@img/recipes/triggers/configure-trigger-filter.gif)
*Checking the Trigger IF checkbox brings up trigger condition fields to be configured*

Define the trigger condition. For more information on the available conditions you can use, refer to the [IF condition](/features/if-conditions.md) article. The following ensures that only Salesforce accounts with a **Warm** rating value will be picked up by the trigger. Values are case sensitive and should be exact.

![Define trigger filter](~@img/recipes/triggers/define-trigger-condition.gif)
*Define the trigger condition*

To add an additional trigger condition, select from the OR or AND in the picklist. The selected operator will define how all additional trigger conditions will be added.

![Adding trigger filter](~@img/recipes/triggers/adding-trigger-filter-with-or.gif)
*Adding another trigger condition with the OR operator*

Define the additional trigger condition. Values are case sensitive and should be exact. The following ensures that accounts with a **Hot** rating value will also be picked up by the trigger. Notice that from the third trigger condition onwards, trigger conditions will be combined with the previously selected operator (OR or AND).

![Define additional trigger condition](~@img/recipes/triggers/define-additional-trigger-condition.gif)
*Define the additional trigger condition. Subsequent trigger conditions has to use the same AND operator*
