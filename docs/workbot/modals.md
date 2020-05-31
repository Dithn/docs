---
title: Modals
date: 2020-03-19 00:00:00 Z
---

# Block kit in modals
Modals allow you to build rich, interactive and dynamic views that collect information from users in a structured manner. This is done by using the [Open/update or push modal view](#open-update-or-push-modal-view-action) action.
![Block kit modal example](~@img/workbot/workbot-blockkit/pretty-modal.png)
*Block kit modal example*

Modals views are built using blocks. A modal view has a title, the view (comprised of blocks), and submit/close buttons. You can also use modal-only blocks called input blocks. These are:
- Single-line input
- Multi-line input
- Select menu input
- Datepicker input
- Checkboxes input

# Interactive components vs input blocks
Input blocks work differently from the interactive components from other blocks.

While buttons, menus, and other interactive components invoke commands **when clicked**, input blocks only invoke commands **when a view is submitted**. For example, a user is free to choose from 'Approve' or 'Reject' – the value is only locked in once he submits the modal by clicking the submit button.

![Example select input](~@img/workbot/workbot-blockkit/example-select-input.png)
*The user's choice is only locked in after clicking __submit__*

If a view contains input blocks, you **must** define submit/close buttons. If it does not, then it is not necessary to include submit/close buttons.

# Modal stack
A modal can hold up to 3 views at one time in a view stack. Users will only see the top-most view, also called the active view. View stacks are useful as it allows the user to return to previous views, after submitting/closing their active view(s).

![Modal stack with 3 views](~@img/workbot/workbot-blockkit/modal-stack.png)
*Each modal can stack up to 3 views*

Opening a modal opens in the root view. Updating a modal replaces an existing view you specify (through its **View ID**), while pushing a modal view applies a new view on top of the view stack.

Each view has an associated ID. You'll need this view ID if you want to update an existing view.

# Passing information between views
When users interact with interactive components or submit modals, a bot command is invoked, triggering the downstream recipe with that bot command. In the context of modals, this downstream recipe may be updating or pushing modal views. You may want to pass some parameters (e.g. the user ID, opportunity ID) so that the modal actions in the downstream recipe can use them in its views.

You'll need to define these parameters in the **New command** trigger in the downstream recipe so that it's prepared to receive them. It's important to ensure the parameter names and data types match their upstream counterparts, e.g. when using `opportunity_id` as a singleline input in the view of modal (rendered in an upstream recipe), also specify `opportunity_id` as a string parameter in the **New command** of the downstream recipe.

Parameters can be passed either in comma-separated name-value pairs, e.g. name: John Smith, user_id: AB12345 or in JSON, e.g. {"opportunity_id": "OPP1234567"}. When using JSON, you can also pass array or object parameters.

# Working with modals
Modals can be opened using:
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

The components above invoke a bot command and generate a Trigger ID. The New command trigger can then pick it up. Trigger IDs are mandatory for modals – opening, updating and pushing modal views all require this trigger ID.

The New command trigger datatree contains a **Modals** object which stores modal-related context for you to perform modal actions.
| Modal datapills  | Description |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View ID | View ID of view from which command was invoked, a.k.a. the active view. If the command was invoked from a view submission, then this view ID cannot be used for updating/pushing views as the view has already closed on submission. If only 1 view is active, then this view ID will be identical to the root view ID. |
| Root View ID | View ID of the root view. |
| Previous View ID | View ID of the view beneath the current view |
| Private metadata | Private data you can optionally use to pass to downstream recipes. This field is encrypted and hidden from users. |
| Hash | A unique value you can optionally use when updating modals. When provided, the hash is validated such that only the most recent view is updated, ensuring the correct view is being updated when updates are happening asynchronously. |

# Open/update or push modal view action
This action allows you to build rich, interactive and dynamic modals that collect information from users in a structured manner. Modals are built using blocks.
![Modal example](~@img/workbot/workbot-blockkit/pretty-modal.png)
*Open/update or push modal view action*

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

## When to update modal views
Typically, bot commands update the active view they exist in (View ID).
![Update modal](~@img/workbot/workbot-blockkit/update-modal.gif)
*Making changes on the active view*

In contrast, modal submissions usually update the root view (Root View ID) or the previous view (Previous View ID). These views can be found in the **New command trigger** datatree, under **Modals**.

![Modals object in New command trigger datatree](~@img/workbot/workbot-blockkit/modals-in-datatree.png)
*Root View ID and Previous View ID found in the New command trigger*

::: warning
When a view is submitted, it closes by default. Use the correct View ID when updating views in response to view submissions.
:::

## When to push modal views
Typically, bot commands push views on top of the active view they exist in (**View ID**). The **View ID** can be found in the **New command trigger** datatree, under **Modals**.

![Push modal](~@img/workbot/workbot-blockkit/push-modal.gif)
*Making changes on the active view*

![Modals object in New command trigger datatree](~@img/workbot/workbot-blockkit/modals-in-datatree.png)
*Root View ID and Previous View ID found in the New command trigger*

::: warning
When a view is submitted, it closes by default. Take care to only push a modal view on top of an active view.
:::
## Open/update or push modal view action input
The following table describes the configuration when using this action.

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
                You can open a new modal view, update an existing view, or push a new view on top of an existing one by setting the <b>Modal action type</b> to <b>open</b>, <b>update</b> or <b>push</b> respectively. This can be set dynamically by toggling to <b>Custom value</b>. View ID will be ignored if the action does not require it (e.g. when opening or pushing a modal view).
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
