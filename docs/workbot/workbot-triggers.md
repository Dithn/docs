---
title: Workbot triggers for Slack
date: 2017-03-30 05:00:00 Z
---

# Workbot triggers for Slack
Workbot for Slack allows you to send commands to Workbot on Slack. Workbot will handle these commands and interact with your connected apps to do things, such as display details of a customer account, close opportunities, display a list of invoices or tickets, or create/update existing tickets.

Each Workbot command is processed using a Workato recipe. The recipe trigger picks up the Workbot command as a trigger event, and the recipe determines the actions to carry out. With Workbot, you can create custom workflows that execute via your Slack commands, and optionally retrieve relevant data for you back to Slack.

The Workbot for Slack connector has 5 triggers:

- [New command](#new-command-trigger-building-custom-commands)
- [New event (real-time)](#new-event-trigger)
- [New shortcut trigger](#new-shortcut-trigger)
- [New URL mention](#new-url-mention)
- [New dynamic menu event](#new-dynamic-menu-event)

## New command trigger (building custom commands)
This trigger requires you to configure a custom Workbot command. When this recipe is started, Workbot will monitor for that command. Whenever the command is called, Workbot proceeds to carry out the recipe actions.

### New command trigger input fields
The following table lists the configurable input fields in the trigger, and what each field does.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>New command trigger input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>App</td>
            <td>
              1st part of the Workbot command. The app that the Workbot command is working with e.g. <br><code>Salesforce</code>
            </td>
        </tr>
        <tr>
            <td>Action</td>
            <td>
              2nd part of the Workbot command. What the Workbot command is doing with the action data, e.g.<br><code>show</code>, <code>create</code>, <code>update</code>.
            </td>
        </tr>
        <tr>
            <td>Action data</td>
            <td>
              3rd part of the Workbot command. The record that the Workbot command works with, e.g.<br><code>invoice</code>, <code>customer</code>, <code>ticket</code>.
            </td>
        </tr>
        <tr>
            <td>Command input fields</td>
            <td>
              The input to ask from the user so as to successfully carry out recipe actions, defined in a specific format. Parameters may have the type <code>file</code>, which accepts file content (e.g. text, binary content) as input. This can be uploaded into Slack. You can use this file in subsequent operations using the Workbot action <a href="/workbot/workbot-actions.html">Download Attachment.</a>
            </td>
        </tr>
        <tr>
            <td>Command hint</td>
            <td>
            Short description of what the command does. Shows up in the Workbot app page under <b>Commands</b>.
            </td>
        </tr>
        <tr>
            <td>Hidden command</td>
            <td>
              If <b>yes</b>, command will not show up as a button in the Slack channel when the user types app name. If <b>no</b>, command will show up as a button in the Slack channel when the user types app name.
            </td>
        </tr>
    </tbody>
</table>

#### Workbot command format
The Workbot command is created by piecing 3 elements together, the `app`, `action` and `action data`:

```
app action action-data
```

In the following case, the application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore:

```
Salesforce show account
```

#### Workbot command input parameters format
The **command input fields** field lets you decide what data is needed from the user to carry out the recipe actions successfully.

Each input parameter has to be provided in the following format:

```
param_name optional:true prompt:false type:string hint:hint_to_help_users sample:example_data
```

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Command input fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>Required. Needs to be a single word.</td>
        </tr>
        <tr>
            <td>Optional</td>
            <td>
              Not required. If not defined, defaults to <code>optional:true</code>. Input parameter will be optional.
            </td>
        </tr>
        <tr>
            <td>Prompt</td>
            <td>
              Not required. If not defined, defaults to <code>prompt:false</code>. No prompt will be generated.
            </td>
        </tr>
        <tr>
            <td>Data Type</td>
            <td>
              Not required. If not defined, defaults to <code>type:string</code>. Possible types are <code>string</code>, <code>boolean</code>, <code>number</code>, <code>file</code>, and <code>date_time</code>.
            </td>
        </tr>
        <tr>
            <td>Hint</td>
            <td>
            Not required. If not defined, defaults to no hint.
            </td>
        </tr>
        <tr>
            <td>Example</td>
            <td>
              Not required. If not defined, defaults to no sample data.
            </td>
        </tr>
    </tbody>
</table>


In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user.

```
name optional: false prompt: false type: string hint: Exact account name sample: IBM
```

The configured command input fields will be displayed as follow up questions for the user after the Workbot command.

![Salesforce show account input parameters](~@img/workbot/workbot-trigger/salesforce-show-account-input-params-display.png)
*A command input field displayed on Slack*

### New command trigger output datapills
The **New command** trigger also provides a set of datapill variables as that holds data about the command, such as the user making the command, the channel the command was made it, etc. The following table details these datapill variables.

![New command trigger output datatree](~@img/workbot/workbot-trigger/new-bot-command-trigger-datatree.png)
*New bot command output datatree*

The following table lists the output datapills from the trigger, and what data each field contains.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>New command trigger datapill variables</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>App</td>
            <td>
              1st part of the Workbot command. The app that the Workbot command is working with e.g. <br><code>Salesforce</code>
            </td>
        </tr>
        <tr>
            <td>Action data</td>
            <td>
              2nd part of the Workbot command. What the Workbot command is doing with the action data, e.g.<br><code>show</code>, <code>create</code>, <code>update</code>.
            </td>
        </tr>
        <tr>
            <td>Action</td>
            <td>
              3rd part of the Workbot command. The record that the Workbot command works with, e.g.<br><code>invoice</code>, <code>customer</code>, <code>ticket</code>.
            </td>
        </tr>
        <tr>
            <td>Message ID</td>
            <td>
              The epoch time when the Workbot command was sent. Can be used to populate <b>Thread ID</b> input fields to create a thread under this Workbot command message.<br> Can also be used in <b>Message to update</b>, to overwrite a previously posted message.
            </td>
        </tr>
        <tr>
            <td>Context</td>
            <td>
            Slack data about this Workbot command, e.g. the team and channel it was posted in, the user who posted it, ID of the thread it was in, if applicable.
            </td>
        </tr>
        <tr>
            <td>Command input parameters</td>
            <td>
              Data obtained from the user by asking follow up questions to their Workbot command.
            </td>
        </tr>
    </tbody>
</table>


The following table holds additional information about the **Context** object and the data it correspondingly holds.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Context datapill variables</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Team</td>
            <td>Slack team ID</td>
        </tr>
        <tr>
            <td>User</td>
            <td>Slack user ID</td>
        </tr>
        <tr>
            <td>Reply Channel</td>
            <td>
            Slack channel ID where message was posted
            </td>
        </tr>
        <tr>
            <td>User handle</td>
            <td>Slack user handle</td>
        </tr>
        <tr>
            <td>User e-mail</td>
            <td>Slack user email</td>
        </tr>
        <tr>
            <td>User name</td>
            <td>Slack user friendly name</td>
        </tr>
        <tr>
            <td>Thread ID</td>
            <td>
              Thread ID if message was posted to thread, <code>null</code> otherwise
            </td>
        </tr>
    </tbody>
</table>

The following table holds additional information about the **Modals** object and the data it correspondingly holds.
| Modal datapills  | Description                                                                                                                                                                                                                            |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View ID          | View ID of view from which command was invoked, a.k.a. the active view. If the command was invoked from a view submission, then this view ID cannot be used for updating/pushing views as the view has already closed on submission. If only 1 view is active, then this view ID will be identical to the root view ID.                                                                                                                                                                                         |
| Root View ID     | View ID of the root view.                                                                                                                                                                                                     |
| Previous View ID | View ID of the view beneath the current view                                                                                                                                                                                             |
| Private metadata | Private data you can optionally use to pass to downstream recipes. This field is encrypted and hidden from users.                                                                                                                      |
| Hash             | A unique value you can optionally use when updating modals. When provided, the hash is validated such that only the most recent view is updated, ensuring the correct view is being updated when updates are happening asynchronously. |

Triggers may contain **Message ID** in their output. Message ID has a value only when **New command** was triggered by a button action. If command was triggered as result of a manually typed command, this field will be empty.

### Example: Salesforce show account command
In the following gif, we're chatting directly with Workbot via a DM. When we type in the app name "Salesforce", Workbot generates a list of available commands and displays them as buttons. The command can also be manually typed into the DM as `Salesforce show account`.

![Salesforce show account command](~@img/workbot/workbot-trigger/salesforce-show-account-command.gif)
*Salesforce show account command*

When the `Salesforce show account` command is called, either via the button click or the typed command, a corresponding recipe with a Workbot for Slack **new command trigger** will trigger. This recipe will have a Workbot **New command** trigger that listens specifically to the command `Salesforce show account`. The [pre-built Workbot for Slack recipe](https://www.workato.com/recipes/57662) that does this can be found below.

![Salesforce show account command recipe](~@img/workbot/workbot-trigger/salesforce-show-account-recipe.png)
*Salesforce show account command recipe [Example recipe](https://www.workato.com/recipes/57662)*

The trigger configuration for the `Salesforce show account` command is as follows.

![Salesforce show account command trigger configuration 1](~@img/workbot/workbot-trigger/salesforce-show-account-config-1.png)

![Salesforce show account command trigger configuration 2](~@img/workbot/workbot-trigger/salesforce-show-account-config-2.png)
*Salesforce show account command trigger configuration*

We know that Workbot commands are created by piecing 3 elements together, the `app`, `action` and `action data`. In this case, application is "Salesforce", command action is "Show", and business data is "Account". The command that Workbot will respond to is therefore `Salesforce show account`.

The **command input parameters** field lets you decide what data is needed from the user to carry out the recipe actions successfully. In this case, to successfully retrieve Salesforce account data, we need the full account name from the Slack user, so we define the parameter as follows:

```
name optional: false prompt: false type: string hint: Exact account name sample: IBM
```

The configured command input parameters will be displayed as follow up questions for the user after the Workbot command.

![Salesforce show account input parameters](~@img/workbot/workbot-trigger/salesforce-show-account-input-params-display.png)
*Input parameters display on Slack*

When the user has finished providing all the required input, the recipe actions will be executed. In this case, the recipe action was to display the Salesforce account details as a message attachment in a grid format.

![Salesforce show account command results](~@img/workbot/workbot-trigger/salesforce-show-account-results.png)
*Salesforce show account command results*

## New event trigger
The **New event trigger** executes when the specified event occurs in your Slack workspace. The trigger works with Slack's [Events API](https://api.slack.com/events-api) and [interactive components](https://api.slack.com/messaging/interactivity#components) (like block actions & modal submissions). Each trigger subscribes to 1 type of event.

> **For events in the Events API, your bot must first be subscribed to the event in Slack.**

![New event trigger](~@img/workbot/workbot-trigger/new-event-trigger.png)
*Workbot for Slack new event trigger*

By default, this trigger contains a list of the most frequently subscribed events. If the event you're looking for is not on the list, you can switch to **Enter custom value** to manually configure the event.

![Custom event](~@img/workbot/workbot-trigger/custom-event.png)
*Event name points the event to the recipe and is useful in providing context — otherwise, no syntax is enforced*

You may also choose to generate the event payload by specifying a sample JSON by clicking on **Use a sample JSON** under **Event schema**.

![Event sample JSON](~@img/workbot/workbot-trigger/event-sample-json.png)

![Custom event JSON](~@img/workbot/workbot-trigger/custom-event-schema.png)

See the list of events you can subscribe to over at Slack's [API Event Types documentation](https://api.slack.com/events).

This trigger is best used with [custom bots](/workbot/workbot-custom-bots.md), as it allows you to specify which bot or workspace events your bot subscribes to. To subscribe to events, [head over to your bot in Slack](https://api.slack.com/apps) and navigate to **Event Subscriptions**. Subscribe to the events you need, then hit **Save Changes**.

![Event subscription](~@img/workbot/workbot-trigger/event-subscription.png)
*Event Subscriptions in Slack*

This trigger can also listen to [block action](https://api.slack.com/messaging/interactivity/enabling#understanding_payloads) and block kit modal [view submission](https://api.slack.com/block-kit/surfaces/modals#handling_submissions) events. These events get sent to the **Interactive Components** request URL, so if you've already enabled [interactive components in your custom bot](/workbot/workbot-custom-bots.md#enabling-interactive-components), then there's no further action required — you're all set.

## New shortcut trigger
The **New shortcut trigger** is a powerful way to kickstart your workflows. Launch a workflow from a global shortcut, or turn any Slack message into a task or a ticket using a message shortcut. This trigger works for both **Global** & **Message** shortcuts requires you to [create shortcuts in your custom bot](/workbot/workbot-shortcuts#creating-shortcuts-on-your-custom-bot-in-slack).

![Message action gif](~@img/workbot/workbot-message-actions/message-actions-example.gif)

When triggered, shortcuts launch a dialog to collect command input fields from the user. The original contents of the message (along with input obtained from the dialog) can be used to create tasks, tickets, and more. To start using shortcuts, check out our [shortcuts documentation](/workbot/workbot-shortcuts.md).

## New shortcut trigger
This trigger allows you to invoke a command using a shortcut you can define in your custom bot.

![Shortcuts trigger](~@img/workbot/workbot/shortcut-trigger.png)
*New shortcut trigger*

![Shortcuts example](~@img/workbot/workbot/shortcuts-example.jpg)
*Shortcut example*

If you define command input values, shortcuts launch a dialog to collect them from the user.

To start using shortcuts, check out our [Shortcuts documentation](/workbot/workbot-shortcuts.md).

## New URL mention
This trigger monitors certain types of URLs in Slack, and pulls pre-defined, formatted data into the channel when such an URL is mentioned. Currently, Salesforce and Github URLs are supported.

When you send a URL in Slack, you can have Workbot provide certain information into the channel for everyone to see. For example, you can send a Salesforce lead URL into your sales channel and workbot will automatically send a message showing more information about that particular lead.

![workbot triggers](~@img/workbot/workbot-trigger/workbot-url.gif)

Simply select the application in the trigger (Currently only Salesforce and Github), and select the Document, and set up your actions as you prefer. By default, giving a Salesforce or Github URL in a channel that Workbot is in will trigger a prompt from Workbot asking you if you want to show details of the content of the URL that you have sent. Click on yes to trigger the recipe. You can also edit the recipe in Workato if you want to have more or less fields included in the message.

![workbot triggers](~@img/workbot/workbot-trigger/workbot-url-mention.gif)

## New dynamic menu event
In Workbot command recipes that invoke dialogs, a `select` field can be defined with dynamic menu options.

![Dynamic menu](~@img/workbot/workbot-trigger/dynamic-menu.png/)
*A Workbot command recipe with dynamic menu options*

This trigger executes when a user types in such a field, and returns what the user typed (i.e. the `typeahead` value). At least 5 characters must be typed to trigger an event.

Use this `typeahead` value to retrieve a list of records (from another app, e.g. Salesforce) to return to the main recipe (i.e. the recipe that posts the dialog where the `select` field is).

![Typeahead example](~@img/workbot/workbot-trigger/typeahead-example.png)

You can return the list of records to the dynamic menu by using the [Return menu options](/workbot/workbot-actions.md#return-menu-options) action. Hence, this trigger should always be paired with a **Return menu options** action.

### Input

#### Dynamic menu name</td>
Identifier for this menu.

#### Command input fields
A Workbot command recipe with dynamic menu options can pass parameters to a Dynamic menu recipe via the **Dynamic menu recipe params** field. The dynamic menu recipe can use these additional parameters in generating menu options.

![Dynamic menu recipe params](~@img/workbot/workbot-trigger/dynamic-menu-recipe-params.png/)
*A Workbot command recipe with a dynamic menu options field passing a 'stagename' parameter with value 'Closed Won'*

Correspondingly, the trigger must also have the same parameter defined.

![Params in dynamic menu trigger](~@img/workbot/workbot-trigger/params-in-dynamic-menu-trigger.png/)
*The corresponding dynamic menu recipe with the same 'stagename' parameter defined*

The dynamic menu recipe is then able to utilize the additional parameters in generating menu options. In the example below, the parameter `stagename` is passed to the dynamic menu recipe, allowing the SOQL search to be further refined.

![Dynamic menu param example](~@img/workbot/workbot-trigger/dynamic-menu-param-example.png/)
*'stagename' parameter is passed to refine the SOQL search*

### Output
<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th colspan='2'>Fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td rowspan='5'>Event context</td>
          <td>Team</td>
          <td>Team ID and domain where command was invoked.</td>
        </tr>
        <tr>
            <td>User</td>
            <td>User ID and name of user who invoked command</td>
        </tr>
        <tr>
            <td>Channel</td>
            <td>
              Channel ID and name where command was invoked.
            </td>
        </tr>
        <tr>
            <td>State</td>
            <td>
              System message containing dynamic menu recipe ID and parameter name-value pair.
            </td>
        </tr>
        <tr>
            <td>Action ts</td>
            <td>
              Timestamp of when action was invoked.
            </td>
        </tr>
        <tr>
            <td rowspan='3'>Typeahead</td>
            <td>Name</td>
            <td>Name of parameter where dynamic menu event was received from.</td>
        </tr>
          <td>Value</td>
          <td>Characters typed by user in the dynamic menu options field.</td>
        <tr>
          <td>Callback ID</td>
          <td>System message</td>
        </tr>
        <tr>
        </tr>
        <tr>
        </tr>
        <tr>
            <td colspan='2'>Parameters</td>
            <td>
              Name-value pairs passed by a Workbot command recipe with dynamic menu options.
            </td>
        </tr>
    </tbody>
</table>
