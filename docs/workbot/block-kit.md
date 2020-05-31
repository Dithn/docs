---
title: Block kit
date: 2019-09-16 10:46:00 Z
---

# Block kit in Workbot for Slack

[Block Kit](https://api.slack.com/block-kit) is Slack's UI framework that allows more control and flexibility when building messages for Slack.

You can stack "blocks" and customize the order and appearance of each block, as well as the elements within each block. The table below shows the different types of blocks and the actions which support them.

Blocks can be used in the following Slack surfaces:
| Surface  | Applicable actions               |
|----------|----------------------------------|
| Messages | Post message, post command reply |
| Modals   | Open/update or push modal    |

# Block kit previewer
Preview the messages you've built with the Post message or Post command reply actions by clicking on **See preview on block kit builder** in the block hint.

![Block kit preview](~@img/workbot/workbot-blockkit/block-kit-preview.png)
*Block kit preview link*

![Block kit preview example](~@img/workbot/workbot-blockkit/block-kit-preview-example.png)
*Placeholder info in block kit preview*

# Compatibility with message attachments
Post message and post command reply previously used message attachments to construct messages. Blocks can be used together with message attachments.

You can optionally provide secondary attachments, which will display *below* any defined blocks.

## Behavior of blocks when used with message attachments
- When both blocks and message attachments are defined, blocks will always appear above message attachments.
![Blocks with message attachments](~@img/workbot/workbot-blockkit/blocks-with-message-attachments.png)

- When any blocks are defined, any input in the **Message text** field will be used as the Slack notification message.

![Message text](~@img/workbot/workbot-blockkit/message-text.png)

# Supported blocks
Supported blocks are displayed in the table below.

<table>
  <tr>
    <th>Blocks</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Section with text</td>
    <td>Displays text.</td>
  </tr>
  <tr>
    <td>Section with image</td>
    <td>Displays text alongside an image thumbnail.</td>
  </tr>
  <tr>
    <td>Section with button</td>
    <td>Displays text alongside a button. <br><br>On button submission, a button invokes another recipe and passes on any command input values it has.</td>
  </tr>
  <tr>
    <td>Section with fields</td>
    <td>Displays text, along with an array of title-value fields, rendered in 2 columns beneath the section text. Maximum number of fields is 10. Maximum length for the text in each field is 2000 characters.</td>
  </tr>
  <tr>
    <td>Section with select menu</td>
    <td>Displays text, alongside a select menu. Supports Slack's built-in dynamic menus such as Select user, Select conversation, Select channel. You can also define your own custom dynamic menu.<br><br>On submission, a menu option invokes another recipe and passes on any command input values it has.</td>
  </tr>
  <tr>
    <td>Section with overflow menu</td>
    <td>Displays text, alongside an overflow menu. Supports static or dynamically generated overflow menu options.<br><br>On submission, an overflow menu option invokes another recipe and passes on any command input values it has.</td>
  </tr>
  <tr>
    <td>Section with date picker</td>
    <td>Displays text, alongside a date picker.<br><br>On date selection, a date picker invokes another recipe and passes on the selected date via a date parameter. You can customize the name of this date parameter.<br><br>You can optionally pass additional command input values together with the date parameter.</td>
  </tr>
  <tr>
    <td>Repeat block group</td>
    <td>
      This a special block type that's available only on the Workato bot platform. The repeat block group allows you to define a set of blocks to use as a pattern. By iterating through an existing list and mapping the list fields to the fields of the blocks in the pattern, you can dynamically generate repeat blocks.
    </td>
  </tr>
  <tr>
    <td>Divider</td>
    <td>A content divider, like an &lt;hr&gt;, used to split up different blocks inside of a message.</td>
  </tr>
  <tr>
    <td>Image</td>
    <td>Displays an image using a provided public URL.</td>
  </tr>
  <tr>
    <td>Actions</td>
    <td>A block that can hold multiple interactive elements like buttons, overflow menus, select menus, and date pickers.</td>
  </tr>
  <tr>
    <td>Context</td>
    <td>Displays message context, which can include both images and texts. All images and texts will be joined together into a single string, in the order they appear in.</td>
  </tr>
</table>

# Limitations
- Include up to 100 blocks in each message.
