---
title: Workato connectors - Best practices
date: 2019-03-17 23:00:00 Z
---

# Zoom - Best Practices
We compiled a few of our best practices that make your life easier when developing workflows with Zoom on Workato.

## Filtering trigger events on Zoom
As the Zoom connector works on an organisational level, this means that jobs are created regardless of the user. To help filter only the events you want, make use of tracking fields in Zoom to define the purpose of your meetings or webinars. Tracking fields allow you to define the purpose of the meeting or webinar so you can label it as a sales call or a marketing webinar. Find out more about tracking fields [here](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields)

When events are triggered in the Zoom connector, you can then use these tracking fields to filter events. Below, we have an example of 2 tracking fields we have set up for `Department` and purpose. These fields can be made required and help indicate the department and purpose of the meeting.

![Tracking fields in Zoom](~@img/zoom/tracking-field-set-up.png)
<center><i>Set up tracking fields in your Zoom instance</i></center>

When users have to schedule a Zoom meeting, they'll have additional fields to help label these meetings. These tracking fields can be assigned to meetings or webinars through the Zoom web UI or through the API.

![Tracking fields when scheduling a meeting](~@img/zoom/tracking-field-schedule.png)
<center><i>Set up tracking fields for each meeting</i></center>

As events are triggered in Zoom, recipes can be set up that listen on these triggers. In the example below, we have a recipe listening on new webinars starting in Zoom. By checking on the tracking fields assigned to that webinar, we can find out if the webinar is marketing related rather than an internal all-hands meeting. In this case, we would stop the job if the `Purpose` of the webinar was anything other than `Marketing`.

![Check tracking field on Workato](~@img/zoom/check-tracking-field.png)
<center><i>Use conditional statements in Workato to check if the tracking field for an event is correct.</i></center>

Check out the full recipe [here](https://www.workato.com/recipes/1156425?st=cbf2d2)

# Making sense of Webinar results easily
Zoom Webinars have fantastic ways to make collecting data from attendees easy. They allow you to launch polls and also have Q&A sessions with your attendees. One critical part of this is massaging the webinar result data from Zoom into a templated format which is easy to read. This goes a long way when sending this data to Salesforce as sales reps will be able to read a specific registrants poll results more easily.

The first step is to create a message template in Workato. Message templates are a structured way to transform lists of data into another format of your design. In the example below, we have this new template called `Webinar poll`, which accepts an array of Questions and answers.

![Message template](~@img/zoom/message-template.png)
<center><i>Message templates for Webinar poll</i></center>
In the template input section, we have the following schema which can be copied and pasted:
```
[
  {
    "name": "Array",
    "type": "array",
    "optional": false,
    "properties": [
      {
        "name": "Question",
        "type": "string",
        "optional": false,
        "control_type": "text"
      },
      {
        "name": "Answer",
        "type": "string",
        "optional": false,
        "control_type": "text"
      }
    ]
  }
]
```

In the template body section, we have the following texts:
```
Webinar poll answers:
{{#Array}}
Question: {{Question}}
Answer: {{Answer}}
{{/Array}}
```

Back in any recipe where we are retrieving poll results from a Webinar, we can then use this message template `Webinar poll` which we have just created to create human readable notes.

![Recipe view](~@img/zoom/recipe-view.png)
<center><i>Massage the data for poll results</i></center>

![action view](~@img/zoom/action-view.png)
<center><i>Use the message template we have just created</i></center>

After this message has been crafted using the `Webinar poll` message template and the poll results we retrieved, we have used it to create a note attached to this specific contact in Salesforce.

![Push note into Salesforce](~@img/zoom/salesforce-action-view.png)
<center><i>Update contact with poll results</i></center>

![Note in Salesforce](~@img/zoom/note-view.png)
<center><i>Poll appears nicely formatted in Salesforce</i></center>

Check out the full recipe [here](https://www.workato.com/recipes/1156429?st=add07c)
