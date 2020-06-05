---
title: Workato connectors - Okta activate user action
date: 2020-06-03 18:00:00 Z
---

# Activate user action
This action activates an existing user. Additionally, choose whether to send an activation email to the user.

:::warning User status restriction
This operation can only be performed on users with a `Staged` status. Find out more [here](https://developer.okta.com/docs/reference/api/users/#reactivate-user).
:::

![Activate user action](~@img/connectors/okta/activate-user.png)
*Activate user action*

## Input fields
| Field   | Description |
| ------- | ----------- |
| User ID | The unique ID of the target user. |
| Send activation email to user | Specify if you want to send an activation email to the user. If set to **False**, the activation credentials will be returned as an output to this action. |

## Output fields
| Field            | Description           |
| ---------------- | --------------------- |
| Activation URL   | The activation URL.   |
| Activation TOken | The activation token. |