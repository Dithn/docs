---
title: Workbot New shortcut trigger
date: 2020-04-14 10:40:00 Z
---

# New shortcut trigger (real-time)
The **New shortcut trigger** is a powerful way to kickstart your workflows. Launch a workflow from a global shortcut, or turn any Slack message into a task or a ticket using a message shortcut. This trigger works for both **Global** & **Message** shortcuts. To use this trigger, you'll need to [create shortcuts in your custom bot](#creating-shortcuts-on-your-custom-bot-in-slack).

![Shortcuts trigger](~@img/workbot/workbot/shortcut-trigger.png)
*New shortcut trigger*

![Shortcuts example](~@img/workbot/workbot/shortcuts-example.jpg)
*Shortcut example*

![Message shortcut gif](~@img/workbot/workbot-message-actions/message-actions-example.gif)
*Message shortcut in action*

Similar to the <b>[Post command](/workbot/workbot-commands.md)</b> trigger, command input fields can be defined if you need user input for follow-up actions. If command input fields are specified, shortcuts will launch a dialog to get user input.

## How global shortcuts work
Shortcuts can be triggered from the shortcuts menu or the search bar.

Click on the shortcuts menu or search for your shortcut in the search bar at the top of your Slack UI.

![Accessing shortcuts](~@img/workbot/workbot/shortcuts-example.jpg)
*Accessing shortcuts from Slack*

## How message shortcuts work
Message shortcuts can be triggered on any message in any channel, direct message, or multi-party message that your custom bot is a member of.

Hover on a message and click on the horizontal ellipsis menu to bring up a list of actions. Message shortcuts that you've created can be found at the bottom of the list.

If you don't see your message shortcut, click on **More message shortcuts** from the same menu to view all message menus in your Slack team.

![Message shortcut list](~@img/workbot/workbot-message-actions/message-actions-list.gif)
*Accessing message shortcuts from Slack*

What's unique about message shortcuts is that the content of the message (which the message shortcut was performed on) can be used in follow-up actions. Combined with the dialog (for collecting structured user input), you can transform any conversation into tasks, tickets, and more.

## Requirements: Custom bot
To use shortcuts, you first need to create a custom bot. If you haven't done so already, head over to our [custom bot documentation](/workbot/workbot-custom-bots.md) to learn how to do it.

The message shortcut must be added and configured under a custom bot in Slack before they can be used in Workato.

![Creating shortcuts in Slack](~@img/workbot/workbot/shortcuts-slack.png)
*Shortcuts created under Interactive Components*

If you already have a custom bot, proceed on to learn how to use shortcuts with your custom bot.

## Configuring a shortcut trigger
In this section, we will go through how to configure a shortcut trigger.

![Shortcuts trigger](~@img/workbot/workbot/shortcut-trigger.png)
*Shortcuts trigger fields*

The table below shows the input schema for the shortcuts trigger.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Field</th>
            <th>Explanation</th>
            <th>What goes in here</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Shortcut type</td>
          <td>Global or message</td>
          <td>
            Triggers when <b>Global</b> or <b>Message</b> shortcuts are invoked in Slack. <br><br><b>Global</b> shortcuts have team & user context.<br><br> <b>Message</b> shortcuts have team, user, channel and message context. You can also copy the original message text into a command input value.
          </td>
        </tr>
        <tr>
          <td>Shortcut name</td>
          <td>Name of the shortcut</td>
          <td>
            The name of the shortcut should be descriptive of its function, e.g. Create Jira ticket. <br><br>The shortcut name also doubles as a <b>Callback ID</b>, which is used in configuring the corresponding shortcut in Slack.<br><br>Shortcut names should be unique across all recipes.
          </td>
        </tr>
        <tr>
          <td>Command input fields</td>
          <td>
            Fields you need from the user
          </td>
          <td>
          Often, you need your bot to obtain more information from users before it can carry out subsequent recipe actions. <br><br>If you've defined any command input fields, the custom bot will automatically launch a dialog for users to key in each input field. Define up to 10 command input fields.
          </td>
        </tr>
        <tr>
          <td>Dialog title</td>
          <td>
            Title of the dialog that is launched
          </td>
          <td>
            Define the title of the dialog that launches when collecting user input for command input fields. Maximum of 24 characters.
          </td>
        </tr>
    </tbody>
</table>

### Callback ID
When shortcuts are triggered from Slack, the **Callback ID** is used to match the trigger event with the correct recipe.

![Callback ID](~@img/workbot/workbot/shortcuts-callback-id.png)
*Callback ID generated from Shortcuts name*

**Callback ID** is generated from the shortcut's name — so make sure that the name you choose is unique.

**Callback ID** is required to configure your shortcuts in Slack. More on this in a [later section](#creating-shortcuts-on-your-custom-bot-in-slack).

### Dialog for command input fields
If you've defined any command input fields, a dialog is automatically launched to collect values for each of them from the user. Up to 10 command input fields can be defined for each shortcut trigger.

![Adding command input fields](~@img/workbot/workbot-message-actions/message-actions-dialog.png)
*Message action dialog in Slack, with 5 different fields*

Each time you add a command input field, you can control how it shows up in the dialog.

![Adding command input fields](~@img/workbot/workbot-message-actions/add-command-input-field.png)
*Adding a command input field*

#### Display text field in dialog
Under **Dialog control type**, choose **text** to display a text field.

![Text field config](~@img/workbot/workbot-message-actions/text-config.png)
*Text control type in command input field*

![Text field](~@img/workbot/workbot-message-actions/text-field-dialog.png)
*Example text field in a Slack dialog*

Text fields are capped at 150 characters. If you're copying original messages into this input field, the original field cannot be longer than 150 characters. To avoid this issue, choose **text area** as your control type.

#### Display textarea field in dialog
Under **Dialog control type**, choose **text area** to display a text area field. Text area fields are capped at 3,000 characters. This control type is useful when copying original messages that are up to 3,000 characters long into this input field.

![Text area field config](~@img/workbot/workbot-message-actions/text-area-config.png)
*Text area control type in command input field*

![Text area field](~@img/workbot/workbot-message-actions/text-area-dialog.png)
*Example text area field in a Slack dialog*

#### Display a select menu in dialog
Under **Dialog control type**, choose **select** to display a select menu with menu options. This enables a new setting called **Select menu options type**.

![Select control type](~@img/workbot/workbot-message-actions/select-control-type.png)

You can choose from 3 different types of select menus. Each differs by the menu options displayed:
  - **Channels** displays the list of all public channels in your Slack workspace.

  ![Channel menu options](~@img/workbot/workbot-message-actions/channels-select.gif)
  *Example of a channels menu in a Slack dialog*

  When a channel is selected, the channel ID is returned, e.g. **CA83MDSK0**.

  - **Users** displays the list of all users (including bots) in your Slack workspace.

    ![Users menu options](~@img/workbot/workbot-message-actions/users-select.gif)
    *Example of a users menu in a Slack dialog*

    When a user is selected, the user ID is returned, e.g. **UBTDVPFMM**.

  - **Custom** allows you to define a list of comma-separated menu options in the **Options** field. The menu option themselves cannot contain commas.

    ![Custom menu config](~@img/workbot/workbot-message-actions/custom-select.png)
    *Custom menu config*

    ![Custom menu dialog](~@img/workbot/workbot-message-actions/custom-select.gif)
    *Example of a custom menu in a Slack dialog*

#### Copy original text into dialog field
You can also choose to copy the original message into a defined command input field so that it shows up in the dialog. You can do so by selecting a command input field from the picklist in the **Copy original text into dialog** field.

![Copy original field config](~@img/workbot/workbot-message-actions/copy-original-field-example.png)
*Copying original message into the 'description' command input field*

![Copy original field example](~@img/workbot/workbot-message-actions/copy-original-message.gif)
*Original text copied onto 'description' field in dialog*

Note that only fields of type `string` are selectable.

After configuring your shortcut trigger, you'll need to create the shortcut in Slack.

## Creating shortcuts on your custom bot in Slack
Head to https://api.slack.com/apps and go to your custom bot.

![Custom bot](~@img/workbot/workbot-slash-commands/custom-bot.png)
*Click on your custom bot*

Under **Interactive components**, click on **Create New Shortcut**.

![Create new shortcut](~@img/workbot/workbot/create-new-shortcut.png)
*Click on **Create New Shortcut***

On the next page, choose **Global**.

![Choose Global](~@img/workbot/workbot/choose-global.png)
*Click on **Global***

In the shortcuts configuration, choose a descriptive name for your shortcut, a short description of its function, followed by the [**Callback ID**](#callback-id).

![Shortcuts config](~@img/workbot/workbot/shortcuts-config.png)
*Shortcuts config*

As mentioned above, the **Callback ID** used here must be identical to the **Callback ID** in the shortcuts trigger.

![Callback ID](~@img/workbot/workbot/shortcuts-callback-id.png)
*Callback ID generated from shortcut name*

Click **Create** to finish setting up the shortcut on Slack. You can test it out by using the shortcut from the shortcut menu in the Slack UI.

## Troubleshooting
### Unable to see shortcut in shortcut menu
Reinstall your bot if you are unable to see your shortcut in the shortcut menu.

### Shortcut does not do anything after clicking
Make sure your shortcut recipe has been started, and that the callback ID is unique across your Workato workspace.
