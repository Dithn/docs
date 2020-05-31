---
title: Workbot actions for Slack
date: 2017-03-30 05:00:00 Z
---

# Workato actions for Slack
Workbot actions allow Workbot to post notifications into a specified channel when there are events to take note of, or respond to a command.

Workbot supports 11 actions:
* [Post command reply](#post-command-reply)
* [Post message](#post-message)
* [Open/update or push modal view](#open-update-or-push-modal-view-action)
* [Publish app home view](#publish-app-home-view)
* [Return menu options](#return-menu-options)
* [Upload file](#upload-file)
* [Post notifications](#post-notifications)
* [Download attachment](#download-attachment)
* Delete message
* Post attachments
* Post dialog

## Block kit compatibility
Blocks can be used together with existing message attachments present in the [Post command reply](#post-command-reply) and [Post message](#post-message).

For more information, see [Block kit](/workbot/block-kit.md).

## Post command reply
Post command reply allows you to customize how Workbot replies when an event is completed. This reply can be a simple message about the task completion, or a prompt for the user to take a subsequent action once the first has been done, e.g. after retrieving data for a custom account in Salesforce, ask if the user wishes to copy that information across to another application.

Here is what the Post Command Reply action's output will look like in Slack.

![Workbot post command reply](~@img/workbot/workbot-custom-commands/post-command-reply.png)
*Workbot's post command reply action in Slack*

The corresponding action with mapped fields can be found below.

![Workbot post command reply](~@img/workbot/workbot-custom-commands/post-command-action-mapping.png)
*Post command reply action fields mapping*

The following table lists the fields available in a **Post command reply** action.

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
            <td>App</td>
            <td>The application you are dealing with (e.g. Salesforce, JIRA)
            </td>
            <td>Use the <kbd>App</kbd> pill from the Workato Trigger output for this</td>
        </tr>
<!--        <tr>
            <td>Reply Channel</td>
            <td>The channel Workbot replies in</td>
            <td>Use the <b>Reply channel</b> Field from the Workato Trigger output
        </tr>Reply channel has been moved to Post message > Advanced
        <tr>
            <td>Message to update</td>
            <td>
              ID of an existing message that you want to replace with the new message. This overwrites the existing message in the channel
            </td>
            <td>
              Message ID can be obtained from the output of a <b>Post command reply</b> or <b>Post notification</b> action, or the <b>New command trigger</b>. Note: manual user inputs cannot be overwritten.
            </td>
        </tr> Message to update has been moved to Post message action
        <tr>
            <td>Thread ID</td>
            <td>
              Pass in a thread ID to post your new message in that thread. Pass in a message ID if you wish to create a new thread and post your new message under that existing message.
            </td>
            <td>For replying to the current thread use thread ID value from <b>New command</b> trigger. For creating new thread pass here message ID from output of another <b>Post command reply</b> or <bold>New command</b> trigger - make sure it is not empty in the last case.
            </td>
        </tr> Thread ID has been moved to Post message > Advanced-->
        <tr>
            <td>Message text</td>
            <td>
              Message posted in the channel
            </td>
            <td>
            Whatever you want. Slack Emojis are supported too. This field is optional if you use the <b>Fields</b> input field.
            </td>
        </tr>
        <tr>
            <td>Message menu</td>
            <td>A drop-down menu in the message posted in the channel</td>
            <td>
              Decide what text to display for each menu option.
            </td>
        </tr>
        <tr>
            <td>Title</td>
            <td>Title as seen in Slack message</td>
            <td>
              Whatever you want. Slack Emojis are supported too.
            </td>
        </tr>
        <tr>
            <td>Title link</td>
            <td>Allows you to embed a link in the title
            </td>
            <td>URL of a page you want to be brought to.
            </td>
        </tr>
        <tr>
            <td>Message attachments</td>
            <td>Detailed message</td>
            <td>
              Whatever you want. Slack Emojis are supported too.
            </td>
        </tr>
        <tr>
            <td>Buttons</td>
            <td>
              Buttons will be shown on the message, and you can click them in lieu of typing out another command
            </td>
            <td>
              You can define the button label, as well as what command is executed when the button is clicked. You can also choose to pass multiple parameters with this button click e.g. <br><code>name: John Smith age: 42</code>
            </td>
        </tr>
        <tr>
            <td>Attachment color</td>
            <td>
              Color displayed with the message to indicate message's importance or type
            </td>
            <td>
              Good = Green<br>
              Warning = Amber<br>
              Danger = Red<br>
            </td>
        </tr>
        <tr>
            <td>Attachment Fields</td>
            <td>Fields to display in a grid</td>
            <td>
              One name-value pair per line, e.g.<br>Name: <kbd>Full Name</kbd><br> Address: <kbd>Address</kbd>
            </td>
        </tr>
        <tr>
            <td>Image URL</td>
            <td>Attach a picture to the message</td>
            <td>
              URL of an image that will be displayed below the message.
            </td>
        </tr>
<!--     <tr>
            <td>Related documents</td>
            <td>
              Commands can be linked to other commands via the document they operate on. Workbot uses this to recommend commands in a conversation
            </td>
            <td>
              Specify links using this format: document name identifier_1:"App data from data tree" identifier_2:"App data from data tree" E.g. ticket id:"[data tree pill]" Specify one parameter per line. No spaces allowed in document name.
        </tr>
Related commands are deprecated-->
    </tbody>
</table>

## Post message
This action will post a message response to a user who invokes a command. The post message action is similar to that of the post command reply, but has more features.

Use post message if you:

1. Are not using a post command in your trigger step

2. Want control over who (\@username) or where (\#channel_name) Workbot should respond to

3. Want to use advanced features like updating a previous message or posting/updating messages in a thread.

### Channel name/DM
**Channel name/DM** field allows you post a message in a specified Slack channel or direct message (DM). Use the <kbd>Channel/DM</kbd> datapill from a Post command trigger, or key in the channel name e.g. **#general** or username e.g. **\@john**.

![Message to update example](~@img/workbot/workbot-actions/channel-dm.png)
*Message to update example*

### Advanced section
 The advanced section has 2 fields: <br>**Message to update** and **Thread ID**.

- #### Message to update
  **Message to update** allows you to overwrite a previously posted message from an earlier action step. Simply use the <code>Message ID</code> datapill from a **Post command** trigger, **Post message** action or **Post notification** output datatrees.

  ![Message to update example](~@img/workbot/workbot-actions/message-to-update-example.png)
*Message to update example*

- #### Thread ID
  **Thread ID** allows you to post a message within an existing thread in Slack. Simply use the <code>Thread ID</code> datapill from a **Post message** or **Post notification** output datatree.

  ![Thread ID example](~@img/workbot/workbot-actions/thread-id-example.png)
  *Thread ID example*

  If you don't see **Thread ID**, make sure it's checked in the 'Add/remove optional fields' section at the bottom of the post message action step:

  ![Thread ID example](~@img/workbot/workbot-actions/thread-id-optional.png)


## Post notifications
This action allows you to define which Slack channel to post customized notifications to. By default, Workbot posts direct messages only to the user who installed Workbot. Note, it is also possible to subscribe from a channel (where Workbot participates) to these notifications.

The fields available are simillar to that of the **Post command reply** action, with all the typical fields you see in a Slack message. However, there is the addition of the field **Notification filter**. This field allows you to set parameters for filters, which acts like a trigger filter for sending out notifications (i.e. the notification will only get sent when the set criteria is met).

## Download attachment
This action allows you to download attachments from Slack, received as input to [**New command** trigger](/workbot/workbot-triggers.md#new-command-trigger-building-custom-commands). Make sure command parameter for uploaded content has type *file*, e.g. `attachment type:file`. Pass file URL from **New command** output into the **URL** field to get attachment content. Then you may further pass this file content to Dropbox, Box or other connectors to upload them as files.

## Return menu options
This action allows you to dynamically generate menu options, then return them to a dynamic menu in a Slack dialog.

For Workbot command recipes that invoke dialogs, a `select` field can be defined with dynamic menu options.

![Dynamic menu](~@img/workbot/workbot-trigger/dynamic-menu.png/)
*A Workbot command recipe with dynamic menu options*

After retrieving a list of records from another app (e.g. Salesforce), you can return them back to the dynamic menu by using the **Return menu options** action.

![Return menu options recipe](~@img/workbot/workbot-actions/return-menu-options-recipe.png)
*Retrieving Salesforce opportunities before returning them as menu options back to the Slack dialog with the dynamic menu*

Hence, this action should always be paired with a [New dynamic menu event](/workbot/workbot-triggers.md#new-dynamic-menu-event) trigger.

### Input
By default, you can specify a static list of menu options by adding menu options 1-by-1.

![Add static menu option](~@img/workbot/workbot-actions/add-static-menu-option.gif)
*Adding static menu options 1-by-1*

However, you can create a dynamic list by changing the input mode to dynamic. Simply pass a list datapill from the ouput of a previous action step.

![Static to dynamic menu options](~@img/workbot/workbot-actions/switching-from-static-to-dynamic.gif)
*Configuring dynamic menu options*

Returned menu options are in an ungrouped list by default.

![Ungrouped options in the recipe](~@img/workbot/workbot-actions/ungrouped-options-recipe.png)
*Ungrouped options in recipe*

![Ungrouped options](~@img/workbot/workbot-actions/ungrouped-options-slack.png)
*Ungrouped options in Slack*

When returning menu options, you can group menu options together by setting **Group menu options?** to **Yes**. This will require you to specify **Title of group** for each group you add.

![Grouped options in the recipe](~@img/workbot/workbot-actions/grouped-options-recipe.png)
*Groups options look in recipe*

![Grouped options](~@img/workbot/workbot-actions/grouped-options.png)
*Grouped options in Slack*

## Upload file
This action will upload a file to the specified channel, DM or thread. You can also include a simple message together with the file.

![Upload file with simple message](~@img/workbot/workbot-actions/upload-file-with-message.png)
*A short message before the Chat history.json file*

The following table lists the fields available in an **Upload file** action.

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
      <td>Channel name/DM</td>
      <td>
        Upload a file to a specified Slack channel or direct message (DM).
        </td>
      <td>
        Use the <kbd>Channel/DM</kbd> datapill from a Post command trigger, or key in the channel name e.g. <b>#general</b> or username e.g. <b>@johndonahue</b>.<img src="~@img/workbot/workbot-actions/channel-dm.png"></img>
      </td>
    </tr>
    <tr>
      <td>Initial comment</td>
      <td>
        Simple message to post together with the uploaded file.</td>
        <td>Include a simple message to give more context to your file.<br><img src="~@img/workbot/workbot-actions/upload-file-with-message.png"></img>
      </td>
    </tr>
    <tr>
      <td>File name</td>
      <td>Name of your file.</td>
      <td>Provide a name for your file, e.g. <b>chat_history.json</b>. This will be the name of the file when any user downloads it from Slack.</td>.
    </tr>
    <tr>
      <td>File type</td>
      <td>Type of file</td>
      <td>Provide the file type of your file. For the full list of file types which Slack supports, see <a href='https://api.slack.com/types/file#file_types'>here.</a></td>
    </tr>
    <tr>
      <td>File content</td>
      <td>Contents of the file</td>
      <td>
        Use a <kbd>Content</kbd> datapill from the output of preceding action or trigger, e.g. a File contents datapills from a Google Drive Download attachment action.<br><br><img src="~@img/workbot/workbot-actions/file-content-pill-example.png"></img>
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>Display title of the file</td>
      <td>Displays the title of the file. If left blank, the <b>File name</b> will be displayed instead.</td>
    </tr>
    <tr>
      <td>Thread ID</td>
      <td>Uploads the file within an existing thread</td>
      <td>
        Use the <kbd>Thread ID</kbd> datapill from the output datatree of a <b>Post message</b> or <b>Post command reply</b> to upload the file to an existing thread. <br><img src="~@img/workbot/workbot-actions/thread-id-example.png"></img><br>If no thread exists yet, use the <kbd>Message ID</kbd> datapill instead. This will create a new thread for the uploaded file.
      </td>
    </tr>
    </tbody>
</table>

## Open/update or push modal view action
This action allows you to build rich, interactive and dynamic modals that collect information from users in a structured manner. Modal views are built using blocks.
![Modal example](~@img/workbot/workbot-blockkit/pretty-modal.png)

You can open a new modal view, update an existing view, or push a new view on top of an existing one by setting the <b>Modal action type</b> to <b>open</b>, <b>update</b> or <b>push</b> respectively.
![Open/update or push modal view](~@img/workbot/workbot-blockkit/open-update-or-push-modal-view.png)

For all modal action types, **Trigger ID** is always required. Trigger IDs are generated by Slack when users interact with:
- buttons,
- menus,
- overflow,
- select menus,
- datepickers,
- radio buttons,
- shortcuts,
- message actions,
- slash commands,
- modal view submissions

Opening a modal view requires **Trigger ID**, obtained from the output of a **New command** trigger.
![Trigger ID](~@img/workbot/workbot-blockkit/open-modal-trigger-id.png)
*Trigger ID for opening modal views (found in the New command trigger)*

Updating a modal view also requires **Trigger ID**, but you must also specify the **View ID** of the view to update. This **View ID** can also be found in the **New command** trigger datatree, under **Modals**.
![Trigger ID and View ID for updating modal views](~@img/workbot/workbot-blockkit/update-modal-trigger-id.png)
*Trigger ID and View ID (both found in New command trigger) for updating modal views*

Pushing a modal view (on top of an existing one) requires **Trigger ID**. However, this **Trigger ID** must be generated from an existing view.
![Trigger ID for pushing modal views](~@img/workbot/workbot-blockkit/push-modal-trigger-id.png)
*Trigger ID for pushing modal views (found in New command trigger)*

### When to update modal views
Typically, bot commands update the active view they exist in (View ID).
![Update modal](~@img/workbot/workbot-blockkit/update-modal.gif)
*Making changes on the active view*

In contrast, modal submissions usually update the root view (Root View ID) or the previous view (Previous View ID). These views can be found in the **New command trigger** datatree, under **Modals**.

![Modals object in New command trigger datatree](~@img/workbot/workbot-blockkit/modals-in-datatree.png)
*Root View ID and Previous View ID found in the New command trigger*

::: warning
When a view is submitted, it closes by default. Use the correct View ID when updating views in response to view submissions.
:::

### When to push modal views
Typically, bot commands push views on top of the active view they exist in (**View ID**). The **View ID** can be found in the **New command trigger** datatree, under **Modals**.

![Push modal](~@img/workbot/workbot-blockkit/push-modal.gif)
*Making changes on the active view*

![Modals object in New command trigger datatree](~@img/workbot/workbot-blockkit/modals-in-datatree.png)
*Root View ID and Previous View ID found in the New command trigger*

::: warning
When a view is submitted, it closes by default. Take care to only push a modal view on top of an active view.
:::
### Open/update or push modal view action input
The following table describes the configuration when working with Modals.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th colspan=3>Input</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan=3>Trigger ID (required)</td>
            <td>
                Modal views can only be opened by interactive components (like buttons & menus), modal submissions, message actions, shortcuts, and slash commands. When users interact with or use these features, a trigger ID is generated. You can grab these from the New command trigger dataree under the Modals object.
            </td>
        </tr>
        <tr>
            <td colspan=3>Modal action type (required)</td>
            <td>
                You can open a new modal view, update an existing view, or push a new view on top of an existing one by setting the <b>Modal action type</b> to <b>open</b>, <b>update</b> or <b>push</b> respectively. This can be set dynamically by toggling to <b>Custom value</b>. View ID will be ignored if the action does not require it (e.g. opening/pushing a modal view).
            </td>
        </tr>
        <tr>
            <td colspan=3>View ID (optional)</td>
            <td>
                To update an existing modal, specify the view ID of the view you want to update. This field is ignored when opening or pushing modal views.
            </td>
        </tr>
        <tr>
            <td rowspan="8">View</td>
            <td colspan=2>Title of modal</td>
            <td>Title of the modal view. Up to 24 characters only.</td>
        </tr>
        <tr>
            <td colspan=2>Blocks</td>
            <td>An array of blocks you can stack and rearrange.</td>
        </tr>
        <tr>
            <td rowspan=6>Submit view</td>
            <td>Submit command</td>
            <td>Command to invoke when users do a modal submission.</td>
        </tr>
        <tr>
            <td>Hidden parameters</td>
            <td>
            When users submit modals, you may want to pass some parameters (e.g. the user ID, opportunity ID) so that the downstream recipe has context to work with.<br><br>You'll need to define these parameters in the <b>New command</b> trigger in the downstream recipe so that it's prepared to receive them. The parameter names in both upstream & downstream recipes must match.<br><br>Parameters can be passed either in comma-separated name-value pairs, e.g. name: John Smith, user_id: AB12345 or in JSON, e.g. {"opportunity_id": "OPP1234567"}. When using JSON, you can also pass array or object parameters.<br><br>It's important to ensure the parameter names and data types match their upstream counterparts, e.g. when using <code>opportunity_id</code> as a singleline input in the view of modal (rendered in an upstream recipe), also specify <code>opportunity_id</code> as a string parameter in the <b>New command</b> of the downstream recipe.
            </td>
        </tr>
        <tr>
            <td>Submit button label</td>
            <td>
                Label of the submit button. Up to 24 characters only.
            </td>
        </tr>
        <tr>
            <td>Close button label</td>
            <td>
                Label of the close button. Up to 24 characters only.
            </td>
        </tr>
        <tr>
            <td>Clear on close</td>
            <td>
                Clicking on the close button will clear all views in a modal and close it. Defaults to false.
            </td>
        </tr>
        <tr>
            <td>Notify on close</td>
            <td>
                Sends a <code><a href="https://api.slack.com/reference/interaction-payloads/views#view_closed">view_closed</a></code> event when a user clicks the close button. Defaults to false. Use the New event trigger to listen to this event.
            </td>
        </tr>
        <tr>
            <td rowspan=3>Advanced</td>
            <td colspan=2>Private metadata</td>
            <td>
                For advanced users. Used to pass sensitive data. This field is encrypted and hidden to users. Max length of 3000 characters.
            </td>
        </tr>
        <tr>
            <td colspan=2>Callback ID</td>
            <td>
                For advanced users. Used to reference the view submission event in downstream recipes. Max length of 255 characters.
            </td>
        </tr>
        <tr>
          <td colspan=2>Hash</td>
          <td>A unique value you can optionally use when updating modals. When provided, the hash is validated such that only the most recent view is updated, ensuring the correct view is being updated when updates are happening asynchronously. This field is ignored when opening or pushing modal views.</td>
        </tr>
    </tbody>
</table>

## Publish app home view
App homes are a great way for users to interact with your bot. Rather than using bot commands, slash commands, or shortcuts, provide users with a rich app home surface for them to interact with.

![App home example](~@img/workbot/workbot-blockkit/app-home-example.png)
*App home for ApprovalsBot*

The **Publish app home view** action allows you to publish an app home view for your custom bot using blocks.

![Publish app home view action](~@img/workbot/workbot-blockkit/publish-app-home-view.png)
*Publish app home view paired with New event trigger (app_home_opened event)*

This action is typically used together with a [New event trigger](/workbot/workbot-triggers.md#new-event-trigger) that is configured to listen to [`app_home_opened`](https://api.slack.com/events/app_home_opened) events.
![app_home_opened event example](~@img/workbot/workbot-blockkit/app_home_opened-event-example.png)
*`app_home_opened` event example*

App home views are unique to each user who visits your bot's app home. This is why the **User ID** is required when publishing app home views. You can take advantage of this fact by publishing app home views that display information that is scoped to the user, e.g. showing approvals that only the user has the authority to approve.

![App home example](~@img/workbot/workbot-blockkit/app-home-example.png)
*App home greets and displays data scoped only to the specific user*
