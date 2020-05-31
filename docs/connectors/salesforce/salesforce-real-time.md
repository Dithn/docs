---
title: Salesforce real-time triggers
date: 2018-01-04 06:15:00 Z
---

# Salesforce Real-time triggers
Workato offers real-time capabilities for 3 Salesforce triggers:
- New Object
- New/Updated Object
- New Outbound message

These real-time triggers are powered by [Salesforce workflow rules](https://help.salesforce.com/articleView?id=workflow_rules_new.htm&type=5). Via these workflow rules, Salesforce monitors records for certain changes and notifies Workato immediately via an outbound message when these changes occur. These outbound messages will be received and processed by a Workato recipe as trigger events.

## Real-time trigger permissions
To use real-time triggers in Salesforce, workflow rules have to be set up in your Salesforce organization. These workflow rules require the `Customize application` permission under the Administrative Permissions tab to be setup, although the connected user does not need to be the user who sets these rules up.

![Customize application permission - profile setup](~@img/salesforce-docs/customize-application-permission.png)
*Customize application permission - profile setup*

## Choosing the right trigger
While all 3 triggers will be triggered on the outbound messages sent to Workato from Salesforce, there are some differences that you should note:

| | New & New/Updated Object | New Outbound Message |
|-|-------------------------|----------------------|
| Backup polling enabled | Yes, the recipe will pick up all changes to the selected Object | No, the recipe will only trigger when it receives an Outbound message |
| Related Objects field | Yes | No |
| SOQL WHERE clause | Yes | No |
| Configure fields on the outbound message | No, Workato automatically picks up all fields or those specified in the ['Fields' input field](/connectors/salesforce/salesforce-generic.md#fields-input-field). | Yes, all fields that are sent in the outbound message must be specified in when setting it up in Salesforce. See [below](http://localhost:8080/connectors/salesforce/salesforce-real-time.html#new-outbound-message-real-time) for more. |
| Unique endpoint URL (per recipe) | No, the URL is unique to the Salesforce connection and Object selected. | Yes, the URL is unique to the Salesforce connection and Object selected as well as a user specified name. |

## New & New/Updated Object (Real-time)
The 'New Object' and 'New/Updated Object' are used in a similar way as the generic [polling triggers](https://docs.workato.com/connectors/salesforce/salesforce-generic.html), but help with various use cases with real-time needs such as point-of-sale or inventory and fulfillment use cases. Rather than wait 5 minutes for the Workato recipe to poll for changes, an Outbound message is configured and used to trigger the recipe.

The 'New Object' will trigger in real time upon receipt of the outbound message that a record of the selected object has been **created**. This is shown in the example [below](#setup), where the outbound message will be sent whenever the record's `Created Date not equal to null`, which is set in the workflow rule.

Similarly, the 'New/Updated Object' trigger will trigger when a record of the selected object has been either **created or updated**. The workflow rule is given the same criteria of `Created Date not equal to null`. The difference is that Workato also looks at the `LastModifiedDate` field on the record.

If any records need to be filtered out from all the Outbound message events the Workato recipe is receiving, you should use the SOQL where clause field on the trigger or the [trigger conditions](/recipes/triggers.md#trigger-conditions) to do so.

With these 2 triggers, Workato guarantees delivery through the use of a 6-hourly backup poll where all the new/updated changes to the object will be picked up even if Salesforce fails to deliver an Outbound message. This means that all record changes will be picked up by the Workato recipe if not filtered out with a SOQL condition or a trigger condition.

## Setup

To set up these triggers, we need to:
1. Create a Workato recipe with a Salesforce real-time trigger, and copy the generated endpoint URL from the trigger.
2. Create a Salesforce workflow rule to monitor events we're interested in and send outbound messages to that endpoint URL when these events occur.
3. Activate the workflow rule.
4. Add trigger conditions in the recipe, if desired.
5. Start the recipe.

In the following sections, we provide a detailed walkthrough to setup the real-time triggers:
- [New object trigger](#new-object-real-time)
- [New/updated object trigger](#new-updated-object-real-time)


## New object (Real-time)
We go through the setup for the **New object** real-time trigger below. We will be setting up a real-time trigger for new contacts in Salesforce.

1) Select the trigger in Workato. You will be prompted to connect to your Salesforce account.

2) Connect to Salesforce.

3) Select the specific object you wish to monitor in Salesforce. In this case, we'll select Contact.

Upon selecting an object, the trigger will provide you with an endpoint URL to setup a Salesforce workflow rule with. This URL will tell Salesforce to send real-time events about newly created contacts to this Workato recipe. Copy this URL to the clipboard for use in creating the Salesforce workflow rule.

![Workato generates endpoint URL for Salesforce workflow rule](~@img/salesforce-docs/workato-generates-workflow-url.gif)
*Workato generates endpoint URL for Salesforce workflow rule*

This endpoint URL is unique to the Salesforce organization connected to the trigger and the Salesforce object you've selected. You will need to regenerate this endpoint URL again if you decide to change Salesforce connection or the Salesforce object monitored.

4) Go to your Salesforce organization and click on **Setup**. Go to *Create > Workflow & Approvals > Workflow rules* and click on **New rule** to create a new workflow rule. This will bring you into the Salesforce workflow rule setup wizard.

![In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule](~@img/salesforce-docs/navigate-to-create-new-rule.gif)
*In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule*

5) In step 1 of the setup wizard, select the same Salesforce object you have selected in the recipe.

![Select specific object to monitor in Salesforce](~@img/salesforce-docs/select-workflow-rule-object.png)
*Select specific object to monitor in Salesforce*

6) In step 2 of the setup wizard, set the workflow rule to be evaluated **every time a record is created**. We set the rule criteria to be `Created Date not equal to null`. Because no record will ever have a null date for the field Created Date, this ensures that the workflow rule will always be triggered when a record is created.

![Setup the Salesforce workflow rule to be evaluated when record is created](~@img/salesforce-docs/workflow-rule-setup-for-new-object-trigger.png)
*Setup the Salesforce workflow rule to be evaluated when record is created*

7) In step 3 of the setup wizard, add a workflow action "New outbound message". This ensures that Salesforce will always notify our Workato recipe whenever a record is created, via sending an outbound message to that recipe's endpoint URL.

![Add outbound message as the workflow action. Newly created contacts that meet the evaluation criteria will send an outbound message](~@img/salesforce-docs/add-outbound-message-for-new-object-trigger.png)
*Add outbound message as the workflow action. Newly created contacts that meet the evaluation criteria will send an outbound message*

8) Set up the outbound message using the endpoint URL we copied in Step 3, and save it.

![Setup outbound message using endpoint URL generated by recipe](~@img/salesforce-docs/setup-new-outbound-message-using-endpoint-url.png)
*Setup outbound message using endpoint URL generated by recipe*

9) Save the workflow rule and activate it.

![Activate workflow rule to start monitoring new contacts created in Salesforce](~@img/salesforce-docs/activating-workflow-rule-new-object-trigger.gif)
*Activate workflow rule to start monitoring new contacts created in Salesforce*

10) Return to Workato and start the recipe. To test that the recipe is working, create a new contact in your Salesforce instance. Check that the recipe picks up the trigger event immediately to verify that the workflow rule is working.

If the trigger event is indeed picked up immediately, this means that your workflow rule and Workato trigger has been set up properly. While the recipe is running, it should monitor newly created records in Salesforce and process them as trigger events immediately. If your workflow requires additional logic to filter out certain records, add trigger conditions.

## New/Updated object (Real-time)
We go through the setup for the **New and updated object** real-time trigger below. We will be setting up a real-time trigger for new and updated leads in Salesforce.

1) Select the trigger in Workato. You will be prompted to connect to your Salesforce account.

2) Connect to Salesforce.

3) Select the specific object you wish to monitor in Salesforce. In this case, we select Lead.

The trigger will provide you with an endpoint URL to setup a Salesforce workflow rule with. This URL will tell Salesforce to send real-time events about newly created or updated contacts to this Workato recipe. Copy this URL to the clipboard for use in creating the Salesforce workflow rule.

This endpoint URL is unique to the Salesforce organization connected to the trigger and the Salesforce object you selected. You will need to regenerate this endpoint URL again if you decide to change Salesforce connection or the Salesforce object monitored.

4) Go to your Salesforce organization and click on **Setup**. Go to *Create > Workflow & Approvals > Workflow rules* and click on **New rule** to create a new workflow rule. This will bring you into the Salesforce workflow rule setup wizard.

5) In step 1 of the setup wizard, select the same Salesforce object you have selected in the recipe.

![Select specific object to monitor in Salesforce](~@img/salesforce-docs/select-workflow-rule-object-lead.png)
*Select specific object to monitor in Salesforce*

6) In step 2 of the setup wizard, set the workflow rule to be evaluated every time a record is created, **and every time it's edited**.

We set the rule criteria to be `Created Date not equal to null`. Because no record will ever have a null date for the field Created Date, this ensures that the workflow rule will always be triggered when a record is created or updated.

![Setup the Salesforce workflow rule to be evaluated when record is created or updated](~@img/salesforce-docs/workflow-rule-setup-for-new-updated-object-trigger.png)
*Setup the Salesforce workflow rule to be evaluated when record is created or updated*

7) In step 3 of the setup wizard, add a workflow action "New outbound message". This ensures that Salesforce will always notify our Workato recipe whenever a record is created or updated, via sending an outbound message to that recipe's endpoint URL.

![Add outbound message as the workflow action. Newly created or updated contacts that meet the evaluation criteria will send an outbound message](~@img/salesforce-docs/add-outbound-message-for-new-updated-object-trigger.png)
*Add outbound message as the workflow action. Newly created or updated contacts that meet the evaluation criteria will send an outbound message*

8) Set up the outbound message using the endpoint URL we copied in Step 3, and save it.

![Setup outbound message using endpoint URL generated by recipe](~@img/salesforce-docs/setup-new-updated-outbound-message-using-endpoint-url.png)
*Setup outbound message using endpoint URL generated by recipe*

9) Save the workflow rule and activate it.

![Activate workflow rule to start monitoring new leads created in Salesforce](~@img/salesforce-docs/activating-workflow-rule-new-updated-object-trigger.gif)
*Activate workflow rule to start monitoring new leads created in Salesforce*

10) Return to Workato and start the recipe. To test that the recipe is working, update a Lead. In this case, you should update an existing Lead. Check that the recipe picks up the trigger event immediately to verify that the workflow rule is working.

If the trigger event is indeed picked up immediately, this means that your workflow rule and Workato trigger has been set up properly. While the recipe is running, it should monitor newly created or updated records in Salesforce and process them as trigger events immediately. If your workflow requires additional logic to filter out certain records, add trigger conditions.

## New Outbound message (Real-time)
The 'New Outbound message' trigger can be used like a Webhook trigger, where a recipe is triggered only when an Outbound message is received from Salesforce.

The output of the trigger is all fields from the object specified in the outbound message.

![New outbound message trigger](~@img/salesforce-docs/new-outbound-message.png)
*New Outbound message trigger*

To configure the trigger, give a unique name in the 'Outbound message name' field and select a Salesforce object. The recipe will generate a URL unique to the Salesforce connection, the object selected and the name provided.

Use this URL when setting up the outbound message in the 'Endpoint URL' field.

![New outbound message trigger](~@img/salesforce-docs/outbound-message-fields.png)
*Outbound message in Salesforce*

All fields required in subsequent steps in the workflow should be specified in the outbound message. In the screenshot above, the selected fields in the Opportunity that are required are: `AccountId`, `Amount` etc. This will provide the output that Workato eventually receives in the trigger.

![New outbound message trigger](~@img/salesforce-docs/outbound-message-output.png)
*New Outbound message final output*

### Always on
Since the 'New Outbound message trigger' does not guarantee delivery through backup polling, please ensure that the recipe is always turned on if you expect to receive events.

This works in the same way as a webhook trigger. The recipe cannot receive events when it is stopped. It may miss events if the recipe is stopped for an extended period of time (>24h).

### Outbound messages information
While it's easy to create and configure outbound messages, this Salesforce feature has a limit. If an outbound message cannot be delivered to the endpoint, it will only retry sending the message within 24 hours in an exponential interval up to 2 hours maximum between retries (see [documentation](https://help.salesforce.com/apex/HTViewHelpDoc?id=workflow_managing_outbound_messages.htm)).

::: warning Note
You can't build an audit trail using outbound messages. While each message should be delivered at least once, it might be delivered more than once.

Also, it might not be delivered at all if delivery cannot be done within 24 hours. Finally, as noted above, the source object might change after a notification is sent but before it is delivered, so the endpoint will only receive the latest data, not any intermediate changes.
:::

To view existing outbound messages, from `Setup`, enter 'Outbound Messages' in the _Quick Find box_, then select it in the Salesforce user interface.

- Click New Outbound Message to define a new outbound message.
- Click View Message Delivery Status to track the status of an outbound message.
- Select an existing outbound message to view details about it or view workflow rules and approval processes that use it.
