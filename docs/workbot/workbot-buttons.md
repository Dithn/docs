---
title: Workbot buttons
date: 2018-05-21 10:23:00 Z
---

# Workbot buttons
Buttons are important building blocks in designing conversational interfaces that simplify complex workflows.

Workbot commands require specific keywords to trigger. This unique language needs to be communicated and picked up by users in order to execute Workbot commands successfully. Buttons allow a call to action to be performed in one click, allowing the user to quickly decide what they want, without having to remember additional Workbot commands.

![Buttons](~@img/workbot/workbot-buttons/buttons.png)*Buttons use button clicks to trigger another recipe or workflow*

## Features

Buttons can:

1. Trigger another recipe that has a Workbot post command trigger

2. Pass command input values to that recipe

3. Invoke dialogs, as covered in the ['Using dialogs with Workbot'](/workbot/using-dialogs-with-workbot.md) guide.

4. Be posted as a set list, or a [dynamically generated one](#dynamic-list-of-buttons).

To ensure a good conversational interface, keep the number of buttons less than 5.

## Anatomy of a button

Buttons can be used in either a Workbot [post command reply](/workbot/workbot-command-reply.md) or a [post message action](/workbot/workbot-actions.md#post-message).

![Button fields](~@img/workbot/workbot-buttons/buttons-fields.png)

The following table shows what goes into the button fields:

<table class="unchanged rich-diff-level-one">
    <tbody>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
          <td>Button title</td>
          <td>
            Button title e.g. <kbd>Cancel</kbd>
          </td>
          <td>
            Key in the title of the button to be displayed.
            <img src="~@img/workbot/workbot-buttons/button-title.png"></img>
          </td>
        </tr>
        <tr>
          <td>Submit button command</td>
          <td>Workbot command to execute when button is clicked, e.g.
          <pre>salesforce update account</pre>
          </td>
          <td>
            Choose from a list of existing post command triggers (from different recipes), or key in your own 3-word command. Clicking on this button will trigger the recipe with the corresponding command trigger.
          </td>
        </tr>
        <tr>
          <td>Command input values</td>
          <td>
          Command input values to pass onto the next recipe when button is clicked, e.g.<br>
          <b>account_id</b>: <kbd>Account ID</kbd>
          <b>account_description</b>: <kbd>Account Description</kbd>
          </td>
          <td>
          Key in name-value pairs to pass onto the next recipe as command input fields.
          </td>
        </tr>
      </tbody>
    </table>

When a button is clicked, it triggers another recipe and passes onto it any command input values you define in the button fields.

For example, in the button fields below, where:

- **Title**: ``Highest``
- **Submit button command**: ``ui_feature highest priority``
- **Command input values**: ``project``, ``issue_type``, ``priority``

![Button 4 fields](~@img/workbot/workbot-buttons/button-4-fields.png)

This posts the button (along with 3 other buttons 'High', 'Low' and 'Lowest') to the user like so:

![Button 4 Slack](~@img/workbot/workbot-buttons/button-4-slack.png)

When clicked, the button triggers the following recipe:

![Triggered recipe](~@img/workbot/workbot-buttons/triggered-recipe.png)
*The recipe triggered by the button*

Notice that the command trigger ``ui_feature highest priority`` of the triggered recipe matches the **Submit button command** of the button.

## Dynamic list of Buttons

Buttons can also be generated dynamically using a list datapill (for more information on lists, see the [list management guide](/features/list-management.md))

From the button fields, click on the horizontal ellipses on the top-right and choose 'Dynamic List'. This should bring up the dynamic buttons fields.

![Dynamic buttons](~@img/workbot/workbot-buttons/dynamic-buttons.png)

The following table shows what goes into the dynamic buttons fields:

<table class="unchanged rich-diff-level-one">
    <tbody>
        <tr>
            <th>Input field</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
          <td>Button source list</td>
          <td>
            Input a list datapill. <kbd>Accounts</kbd>
          </td>
          <td>
            List datapills have a list icon next to them in the datatree, e.g. Salesforce Accounts, a list:
            <img src="~@img/workbot/workbot-buttons/list-datapill.png"></img>
          </td>
        </tr>
        <tr>
          <td>Button title</td>
          <td>
            Button title e.g. <kbd>Account Name</kbd>
          </td>
          <td>
            The title of the button to be displayed. Typically, you want to use datapills from the list datapill, e.g. Salesforce Account name, a datapill from the Salesforce Accounts list:
            <img src="~@img/workbot/workbot-buttons/datapill-from-list-datapill.png"></img>
          </td>
        </tr>
        <tr>
          <td>Submit button command</td>
          <td>Workbot command to execute when button is clicked, e.g.
          <pre>salesforce update account</pre>
          </td>
          <td>
            Choose from a list of existing post command triggers (from different recipes), or key in your own 3-word command. Clicking on this button will trigger the recipe with the corresponding command trigger.
          </td>
        </tr>
        <tr>
          <td>Command input values</td>
          <td>
            Command input values to pass onto the next recipe when button is clicked, e.g.<br>
            <b>account_id</b>: <kbd>Account ID</kbd>
            <b>account_description</b>: <kbd>Account Description</kbd>
          </td>
          <td>
          Key in name-value pairs to pass onto the next recipe as command input fields.
          </td>
        </tr>
      </tbody>
    </table>

In the example below, the user wants to update a Salesforce 'Direct Customer' account by clicking on a button associated with that account. As this list changes every day, a static list of buttons wouldn't work. In the dynamic button fields below, where:
  - **Buttons source list**: ``Accounts``
  - **Button Title**: ``Account Name``
  - **Submit button command**: ``salesforce update account``
  - **Command input values**: ``account_id``, ``account_description``

![Dynamic buttons fields](~@img/workbot/workbot-buttons/dynamic-buttons-fields-example.png)

This posts a dynamically generated list of buttons to the user like so:

![Dynamic buttons slack example](~@img/workbot/workbot-buttons/dynamic-buttons-slack-example.png)
