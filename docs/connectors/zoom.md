---
title: Workato Zoom - Introduction
date: 2018-03-13 12:40:00 Z
---
# Zoom
[Zoom](https://zoom.us/) is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, collaboration, chat, and webinars across mobile devices, desktops, telephones, and room systems.

## How to connect to Zoom on Workato
The Zoom connector uses OAuth 2.0 to connect to Zoom
![Configured SQL Server connection](~@img/zoom/connection.png)

|Field|Description|
|--- |--- |
|Connection name|Give this Zoom connection a unique name that identifies which Zoom instance it is connected to.|
|JWT API key|Optional. Only needed if you need to download cloud recordings that are protected. To get your API key, you will need to register a JWT app with Zoom [here](https://marketplace.zoom.us/)|
|JWT API secret|Optional. Only needed if you need to download cloud recordings that are protected. To get your API key, you will need to register a JWT app with Zoom [here](https://marketplace.zoom.us/)|

### Permissions required to connect
To authorise Workato to your Zoom instance, you will need to be an Admin in your Zoom instance. This is required as the Workato Zoom connector performs actions at an Admin level scope. This allows you to schedule meetings or webinars on behalf of other Zoom users.

## List of Workato triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [New event trigger (Trigger recipes of events in Meetings, Webinars and more)](/connectors/zoom/new-event-trigger.md)
  * [Event actions (Webinar, meetings and cloud recordings)](/connectors/zoom/event-actions.md)
  * [Registration actions (Add, approve or list registrants for your events)](/connectors/zoom/registration-actions.md)
  * [User actions (Add, remove or update users in your Zoom organisation)](/connectors/zoom/user-actions.md)
  * [Download cloud recording files](/connectors/zoom/cloud-recording.md)
