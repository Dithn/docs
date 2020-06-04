---
title: Workato connectors - Okta update user action
date: 2020-06-03 18:00:00 Z
---

# Update user action
This action updates an existing user. The user is identified by the user ID.

![Update user action](~@img/connectors/okta/update-user.png)
*Update user action*

## Input fields
The input configuration contains the full set of user properties. Learn more about the Okta's user properties [here](https://developer.okta.com/docs/reference/api/users/#user-object).

Below are the commonly used user properties.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan=2>Input field</th>
        <th width='70%'>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan=2>User ID</td>
      <td>The unique ID of the target user.</td>
    </tr>
    <tr>
      <td rowspan=8>Profile</td>
      <td>First name</td>
      <td>First name for the user.</td>
    </tr>
    <tr>
      <td>Last name</td>
      <td>Last name for the user.</td>
    </tr>
    <tr>
      <td>Primary email ID</td>
      <td>Primary email address of the user.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>A unique identifier for the user. This must be an email.</td>
    </tr>
    <tr>
      <td>Title</td>
      <td>Title of the user.</td>
    </tr>
    <tr>
      <td>Employee number</td>
      <td>An organization assigned identifier for the user.</td>
    </tr>
    <tr>
      <td>Manager ID</td>
      <td>The Okta ID of the user's manager.</td>
    </tr>
    <tr>
      <td>Manager</td>
      <td>The display name of the user's manager</td>
    </tr>
  </tbody>
</table>

## Output fields
The output datatree contains information about the user like the ID and status.

| Field                 | Description |
| --------------------- | ----------- |
| ID                    | The unique ID for the user. |
| Status                | The current status of the user. |
| Created time          | The timestamp when the user was created. |
| Activated time        | The timestamp when the user's status was updated to `Active`. |
| Status changed time   | The timestamp when the status was last changed. |
| Last login time       | The timestamp when the user was last logged in. |
| Last updated time     | The timestamp when the user was last updated. |
| Password changed time | The timestamp when the password was last changed. |
| Profile               | This object contains information about the user's profile, including first and last name, email, organization, and title. Learn more about Okta user profiles [here](https://developer.okta.com/docs/reference/api/users/#profile-object). |
| Credentials           | This object specifies the primary authentication and recovery credentials for the user. It includes the recovery question and credentials provider. |
| Links                 | This object contains a collection of link relations for the user. It includes lifecycle operations and credentials operations. Learn more about Okta user link objects [here](https://developer.okta.com/docs/reference/api/users/#links-object). |
