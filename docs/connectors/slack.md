---
title: Workato connectors - Slack
date: 2017-09-12 12:00:00 Z
---

# Slack
[Slack](https://slack.com/) is a team collaboration platform that consolidates your team's communication and resources.

Workato allows you to connect Slack with the enterprise and productivity apps used across your organization. Transform your team's conversations into automated tasks in those apps - all without leaving your Slack workspace.

## Slack connector VS Workbot for Slack connector
Workato supports both the Slack connector and the Workbot for Slack connector.

If you're a Slack administrator (or part of an administrative team) that needs to automate workflows on a workspace-level, then the Slack connector is what you need. Using the Slack connector, you can subscribe to workspace-level events and and manage channels, groups and more. For example you can automate the creation, naming, purpose, and invitees of private Slack channels (typically between members from Customer Success and customers), triggered by a ticket escalation in Jira.

Workbot is a bot user. A bot user, like a human user, must be invited to channels before it can respond to other users. Workbot is primarily used to automate workflows specifically for users who command it to do so. If you envision a virtual assistant which your team can command to perform complex tasks specifically for them, go for Workbot.

A functional comparison table for both the Slack connector and the Workbot for Slack connector can be found [here](/workbot/workbot.md#slack-connector-vs-workbot-for-slack-connector).

## API version
The Slack connector uses the [Slack Web API](https://api.slack.com/web) with the endpoint URLs `https://slack.com/api/METHOD`.

## Supported editions and versions
Workato connects to to both Slack for Teams (for single workspaces) and Slack Enterprise Grid (for multiple workspaces).

## How to connect to Slack on Workato
Authorize Workato to access your Slack organization via the OAuth2 standard. This will require you to login to Slack and authorize the permissions that Workato requests.

![Configuring Slack connection](~@img/connectors/slack/slack-connection.gif)
*Setting up the Slack connection*

## Working with the Slack connector

### Using the post message action
The **Post message** action can be used to post a message to a channel or a direct message to a Slack user. By default, the message will be posted as the Workato app, but it can be configured to post under another name and corresponding icon image.

#### Example message with attachment
The following shows an example of how the different fields show up in Slack. As the **Post message as** and **Icon image URL** input fields have not been configured, the message displays as being posted by the Workato app.

![Post message example with attachment](~@img/connectors/slack/post-message-basic-example.png)
*Basic example of the post message action with attachment*

The corresponding configuration of the action step can be seen below. In addition, the **Message type** has been configured to **Good**.

![Post message basic configuration 1](~@img/connectors/slack/post-basic-message-config-1.png)

![Post message basic configuration 2](~@img/connectors/slack/post-basic-message-config-2.png)
*Post message action configuration - message with attachment. [Example recipe](https://www.workato.com/recipes/604131)*

#### Example message with attachment, customized app name and images
The following shows an example of how the different fields show up in Slack. As the **Post message as** and **Icon image URL** input fields have been configured to have the value of **Workato Chatbot** and the [Workbot icon](https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2017-04-11/168463184839_7e90d40c4856fdda4c19_512.png), the message displays as being posted by **Workato Chatbot** with the Workbot icon.

![Post message example with attachment, customized app name and images](~@img/connectors/slack/post-message-advanced-example.png)
*Example of the post message action with attachment, customized app name and images*

The corresponding configuration of the action step can be seen below.

![Post message advanced configuration 1](~@img/connectors/slack/post-basic-message-config-1.png)

![Post message advanced configuration 2](~@img/connectors/slack/post-basic-message-config-2.png)

![Post message advanced configuration 2](~@img/connectors/slack/post-advanced-message-config.png)
*Post message action configuration - message with attachment, customized app name and images. [Example recipe](https://www.workato.com/recipes/604145)*

### Using Slack message buttons
You can interact with messages in Slack via [Slack buttons](https://api.slack.com/docs/message-buttons). To use Slack buttons in Slack, you need:

1) A recipe with a **Post message** action that has buttons configured. This recipe needs to specifically refer to the second recipe below in its button configuration.

2) A button action handler recipe - a recipe with a **New button action** trigger, which picks up button clicks. In the actions, there should be recipe logic that carries out actions depending on which button has been clicked.

There are 2 ways we can build interactive Slack buttons recipes, either [via IF conditions](#using-if-conditions-to-build-interactive-slack-buttons-recipes), or [via the Slack action **Respond to button**](#using-slack-respond-to-button-action-to-build-interactive-slack-buttons-recipes).

#### Using IF conditions to build interactive Slack buttons recipes
Possible use cases for building your recipe via IF conditional recipe steps would be scenarios whereby you're okay with multiple clicks of the buttons, such as team polls.

##### Example recipe #1A: recipe with a post message action with buttons configured
We're going to add buttons configuration to the [basic recipe](https://www.workato.com/recipes/604131) we had [above](#example-message-with-attachment). The recipe we will be using can be found [here](https://www.workato.com/recipes/604149).

The buttons configured in this recipe show up in Slack as follows.

![Button display](~@img/connectors/slack/buttons-display.png)
*Corresponding buttons generated from the above configuration*

###### Button styles: danger and non-danger
There are two available styles for buttons - non-danger and danger style. The non-danger styled buttons, once clicked, records the button click immediately and triggers the second recipe with the **New button action** trigger.

![Interacting with non-danger style button](~@img/connectors/slack/interacting-with-normal-button.gif)
*Interacting with non-danger styled button*

The danger styled buttons, when clicked, generates a popup prompt that asks the Slack user for confirmation of their click.

![Interacting with danger style button](~@img/connectors/slack/interacting-with-danger-button.gif)
*Interacting with danger styled button*

The prompt that pops up can be completely configured in the button configuration in the Slack action **Post message**.

![Popup prompt example](~@img/connectors/slack/popup-prompt-example.png)
*Popup prompt*

###### Button definitions

The button configuration for both button styles is in the following screenshot. We're calling a recipe we have pre-built: [**New Salesforce account button response recipe - Notify BizDev & Notify Sales**](https://www.workato.com/recipes/602058). All recipes with the Slack trigger **New button action** should show up in this picklist - select the recipe you have built to respond to this particular set of buttons.

![Button configuration for action](~@img/connectors/slack/button-config.png)
*Button configuration for post message action step*

The following is the button configuration we used in the recipe. For non-danger styled actions, only the first 2 parameters need to be filled in, as there is no popup prompt generated. For danger styled actions, all 7 parameters need to be filled in.

```
Notify BizDev, bd, , , , ,
Notify Sales, sales, danger, Confirm, Are you sure?, Yes, Cancel
```

The above button configuration follows this format for button actions:

```
action name, action ID, style, confirmation title, confirmation text, ok button title, dismiss button title
```

The following is an elaboration on each field in the definition of a button.

<table class="unchanged rich-diff-level-one">
    <tbody>
        <tr>
            <th>Button definition input fields</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Action name</td>
            <td>Button label visible to Slack user interacting with the buttons.</td>
        </tr>
        <tr>
            <td>Action ID</td>
            <td>
              Internal value of the button. This needs to be unique. Not visible on Slack to anyone.
            </td>
        </tr>
        <tr>
            <td>Style</td>
            <td>
            Leave this field as well as the remaining 4 fields blank for non-danger styled actions since no pop-up will be generated.<br> Otherwise, put <b>danger</b> to generate a red button with a pop-up prompt, requiring the user to confirm the button click. You will then need to fill up the rest of the fields too.
            </td>
        </tr>
        <tr>
            <td>Confirmation title</td>
            <td>
              Shows up in the popup prompt as the header.
            </td>
        </tr>
        <tr>
            <td>Confirmation text</td>
            <td>
              Shows up in the popup prompt as the body text.
            </td>
        </tr>
        <tr>
            <td>Ok button title</td>
            <td>
              Button label in the popup prompt to confirm the button click.
            </td>
        </tr>
        <tr>
            <td>Dismiss button title</td>
            <td>
              Button label in the popup prompt to cancel the button click.
            </td>
        </tr>
    </tbody>
</table>

##### Example recipe #1B: button action handler recipe - recipe with a new button action trigger with IF conditional logic defining the actions to carry out upon each button click
This following recipe has been built for the above scenario. It posts different messages as a thread under the first Salesforce account notification message, depending on which button has been clicked. Using IF conditions is more versatile than using the Slack action **Respond to button**, because you can carry out multiple steps in the IF condition and in multiple apps.

In this recipe, to check which button has been clicked, we use the IF condition to check the button name. If it matches "Notify BizDev", we post a message for the business development team, and if it matches "Notify Sales", we post a message for the sales team.

![Button action example recipe](~@img/connectors/slack/button-action-example-recipe.png)
*Button response using IF conditions. [Example recipe](https://www.workato.com/recipes/602058)*

###### Output of the Slack trigger - new button action
The datapills used in the IF conditions come from the Slack trigger **New button action**. The following screenshot shows the output datatree from the Slack trigger **New button action**. The datapills are variables that the recipe builder can use while building the recipe actions.

![Button action datatree output](~@img/connectors/slack/button-action-datatree-output.png)
*Output datatree of the new button trigger*

The following table elaborates upon these datapill variables and what they can be used for.

<table class="unchanged rich-diff-level-one">
    <tbody>
        <tr>
            <th>
              New button click trigger output datapills
            </th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Action name</td>
            <td>
              Button label visible to Slack user interacting with the buttons.
            </td>
        </tr>
        <tr>
            <td>Action ID</td>
            <td>
              Internal value of the button. This needs to be unique. Not visible on Slack to anyone.
            </td>
        </tr>
        <tr>
            <td>Channel</td>
            <td>
              The channel where the button click occurred. You can obtain both the channel internal Slack ID and the channel name.
            </td>
        </tr>
        <tr>
            <td>User</td>
            <td>
              The user who clicked the button. You can obtain both the user internal Slack ID and the username.
            </td>
        </tr>
        <tr>
            <td>Team</td>
            <td>
              The Slack team where the button click occurred. You can obtain both the unique domain and the internal team ID.
            </td>
        </tr>
        <tr>
            <td>Action timestamp</td>
            <td>
              The epoch time when the button click occurred.
            </td>
        </tr>
        <tr>
            <td>Message ID</td>
            <td>
              The epoch time when the message with buttons was sent. Can be used to populate <b>Thread ID</b> input fields to create a thread under this message.
            </td>
        </tr>
        <tr>
            <td>Attachment ID</td>
            <td>
              ID of the attachment sent with the initial Slack message with buttons, if any.
            </td>
        </tr>
        <tr>
            <td>Response URL</td>
            <td>
              Used by Workato to respond to the button click. Also used in Slack action <b>Respond to button.</b>
            </td>
        </tr>
    </tbody>
</table>

An example of the values can be viewed in the job output, as follows.

![Button action data output](~@img/connectors/slack/button-action-output-data.png)
*Button action data output*

#### Using Slack respond to button action to build interactive Slack buttons recipes
Possible use cases for building your recipe in this way would be scenarios whereby you only wish the button to be clicked once, such as approval workflows, e.g. approving leave, approving expenses.

##### Example recipe #2A: recipe with 2 post message actions with buttons configured
We're going to use almost exactly the same recipe as [example recipe #1A](/connectors/slack.md#example-recipe-1a-recipe-with-a-post-message-action-with-buttons-configured), except that we're breaking up the single Slack action **Post message** into 2 separate **Post message** actions. The first action will post notification information (in this case, my Salesforce account information), while the second action will only post button data. The recipe we will be using can be found [here](https://www.workato.com/recipes/605784).

The buttons configured in this recipe show up in Slack as follows.

![Salesforce account information and button posted via separate actions](~@img/connectors/slack/post-notification-and-buttons-separately.png)
*Salesforce account information and button posted via separate actions*

When the button is clicked on, it is immediately replaced by a message notifying either the business development or the sales team.

![Salesforce account information and button posted via separate actions](~@img/connectors/slack/respond-to-button-action-replace-original.gif)

This is because the input field **Replace original?** has been marked as true in the **Respond to button** action configuration. We will cover this action in the following section. This allows us to remove the buttons from the Slack channel once they have been clicked on - so as to prevent multiple clicks on the buttons. This is also why the first recipe breaks up the notification information and the buttons data into 2 separate actions - we want to replace only the buttons with the new message, and not replace the notification information.

##### Example recipe #2B: button action handler recipe - recipe with a new button action trigger with Slack action **Respond to button** that responds to each button click with a Slack message
This following recipe is an alternative way we can build the interactive scenario on Slack. Similarly, it posts different messages back in the channel depending on which button has been clicked. We use the Slack action **Respond to button** to immediately post a message back onto the channel.

![Respond to button action example recipe](~@img/connectors/slack/respond-to-button-action-example-recipe.png)
*Respond to button action. [Example recipe](https://www.workato.com/recipes/605785)*

With the **Respond to button** action, we can simply pass in the **button response URL**, and the recipe will know, at run-time, which button has been clicked. Therefore, if we wish to do something like post a generic message that tells the channel which button has been clicked, this action is suited to handle that easily.

![Respond to button action configuration](~@img/connectors/slack/respond-to-button-action-config.png)
*Respond to button action configuration*

###### Input of the Slack action - respond to button action
The following are the new input fields that the Slack action **Respond to button** introduces to the usual input fields in the **Post message** action.

<table class="unchanged rich-diff-level-one">
    <tbody>
        <tr>
            <th>
              Respond to button action input field
            </th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Button response URL</td>
            <td>
              Provide this from the output datatree of the Slack trigger <b>New button action</b>. This tells the action what button click to respond to.
            </td>
        </tr>
        <tr>
            <td>Response type</td>
            <td>
              <b>In channel</b> will post the message like a normal chat message. <b>Ephemeral</b> will post the message in greyed out text.
            </td>
        </tr>
        <tr>
            <td>Replace original</td>
            <td>
            If <b>yes</b>, the new message will overwrite the original message with buttons and be posted in the same position in the channel.  
            <p>If <b>no</b>, the original message with buttons will remain in the same position in the channel. The new message will be added to the end of the channel conversation.</p>
            </td>
        </tr>
        <tr>
            <td>Delete original</td>
            <td>
              If <b>yes</b>, the original message with buttons will be removed from the channel. The new The new message will be added to the end of the channel conversation.
              <p>If <b>no</b>, the original message with buttons will remain in the same position in the channel. The new message will be added to the end of the channel conversation.</p>
            </td>
        </tr>
    </tbody>
</table>

### Using Slack threads
[Slack threads](https://api.slack.com/docs/message-threading) allow you to group related messages together, making it easier to follow conversations in Slack channels or groups. To use Slack threads, you can either:

1) continue a conversation by replying to a message ID and starting a thread,
2) continue a conversation by replying to the parent message ID (the very first message of the thread), or
3) continue an existing thread by replying to the thread ID.

You need to specify the message ID, parent message ID or thread ID in the **Thread ID** input field in order to start or continue a thread.

#### Example recipe #1: recipe that replies to a message ID and starts a thread
Let us relook at the [above example recipe](#example-recipe-1b-button-action-handler-recipe-recipe-with-a-new-button-action-trigger-with-if-conditional-logic-defining-the-actions-to-carry-out-upon-each-button-click) that responds to a button click.

![Button action example recipe](~@img/connectors/slack/button-action-example-recipe.png)
*Button response [example recipe](https://www.workato.com/recipes/602058)*

If a Slack user clicks on the **Notify BizDev** button, we can see that it creates a new thread by posting under the original message,

![Notify BD thread example](~@img/connectors/slack/notify-bd-thread.png)
*Thread created and message posted if Slack user clicks on the Notify BizDev button*

The configuration in the recipe is as follows. We're passing the message ID of the original Slack message into the **Thread ID** input field. As the message has no thread currently, it will create a new thread.

![Notify BD thread configuration](~@img/connectors/slack/notify-bd-thread-config.png)
*Action configuration for the Notify BizDev action. Message ID is used in the **Thread ID** input field.*

Correspondingly, if a Slack user clicks on the **Notify Sales** button, we can see that it creates a new thread by posting under the original message.

![Notify sales thread example](~@img/connectors/slack/notify-sales-thread.png)
*Thread created and message posted if Slack user clicks on the Notify Sales button*

The configuration in the recipe is as follows. We're passing the message ID of the original Slack message into the **Thread ID** input field. As the message has no thread currently, it will create a new thread.

![Notify sales thread configuration](~@img/connectors/slack/notify-sales-thread-config.png)
*Action configuration for the Notify Sales action. Message ID is used in the **Thread ID** input field.*

#### Example recipe #2: recipe that replies to a parent message ID and continues a thread
Using the [same recipe](https://www.workato.com/recipes/602058) as [above](#example-recipe-1a-recipe-with-a-post-message-action-with-buttons-configured), we can see that putting the parent message ID also works to post to an existing thread.

![Button action example recipe](~@img/connectors/slack/button-action-example-recipe.png)
*Button response [example recipe](https://www.workato.com/recipes/602058)*

For example, when I click on the **Notify BizDev** button for the second time, it posts to the same thread.

![Messages are posted under the same thread via parent message ID](~@img/connectors/slack/posting-to-existing-thread-via-parent-id.gif)
*Messages are posted under the same thread via parent message ID*

Referring back to the action's thread configuration, we see that we're specifying the parent message ID in the **Thread ID** input field, which is the initial message that the thread is under.

![Notify BD thread configuration](~@img/connectors/slack/notify-bd-thread-config.png)
*Action configuration for the Notify BizDev action. Message ID is used in the **Thread ID** input field.*
