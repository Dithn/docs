---
title: Workato Connector - G2 Introduction
date: 2020-05-21 08:00:00 Z
---
# G2
[G2](https://www.g2.com) is a tech marketplace where businesses can discover, review, and manage the technology they need to reach their maximum potential. G2 provides a suite of services for vendors who list their applications on the G2 marketplace. This allows them to improve their market competitiveness by providing them with buyer intent data, lead generation tools, marketing content as well as profile activity data. G2 also supports integration with a wide range of selling, marketing, retention and data tools such as Salesforce CRM, Hubspot and Marketo.

Workato's integration with G2 will allow you to sync buyer intent data and leads generated with customer relations software to engage with potential customers as well as to identify at-risk customer accounts that are looking for alternatives so as to prevent churn.

## Use cases

#### New Lead in G2 creates new lead in [Salesforce](/connectors/salesforce.md)
By integrating lead data to Salesforce, you make the experience of lead processing a seamless one. Your sales representatives can assess profile information immediately and subsequently execute the relevant strategies to quickly convert these leads to clients.

![New Lead in G2 creates lead in salesforce view](~@img/g2/new-lead-trigger-to-salesforce.gif)
<center><i>Sample recipe for G2 and Salesforce integrations</i></center>

#### New Remote Event Stream in G2 posts real time [Slack](/connectors/slack.md) notifications
By integrating Remote Event Streams from G2 to Slack, sales representatives will be made known of new profile and product page activities to immediately engage these visitors.

![New RES in G2 posts real time Slack notifications view](~@img/g2/new-res-trigger-to-slack.gif)
<center><i>Sample recipe for G2 and Slack integrations</i></center>

## How to connect to G2 on Workato
The G2 API requires an API token for access. API tokens are tokens you generate to let G2 know that this Workato connection is allowed to work with your information.

You can generate a token from the [G2 Integrations Page](https://www.g2crowd.com/static/integrations).  Alternatively, you can find and generate tokens under the 'Home' => 'Integrations' => 'API Tokens' in the side navigation Menu of your G2 instance.

![Configure G2 connection view](~@img/g2/connection.png)
<center><i>The connection configuration page for G2 on Workato</i></center>

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this G2 connection a unique name that identifies which API token it is connected to.</td>
    </tr>
    <tr>
      <td>API token</td>
      <td>Enter your API token which you have generated in your G2 instance.</td>
    </tr>
  </tbody>
</table>

## List of triggers and actions
Workato currently supports the following G2 triggers and actions. We are actively working on adding support to a wider range of triggers, actions and objects. Find out more details about each by clicking on the links below. You can also navigate to them through the sidebar.

 * [New Event Trigger](/connectors/g2/event_triggers.md).
 * [Get object actions](/connectors/g2/get_object_actions.md).
 * [List all action](/connectors/g2/list_all_action.md).
