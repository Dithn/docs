---
title: Workato connectors - Okta delete user action
date: 2020-06-03 18:00:00 Z
---

# Delete user action
This action deletes an existing user permanently.

This action only works on a user whose status is `Deprovisioned`. You can set a user to `Deprevisioned` with the [Deactivate user action](deactivate-user-action.md).

::: danger Warning!
This action cannot be recovered! Find out more [here](https://developer.okta.com/docs/reference/api/users/#delete-user).
:::

![Delete user action](~@img/connectors/okta/delete-user.png)
*Delete user action*

## Input fields
| Field   | Description |
| ------- | ----------- |
| User ID | The unique ID of the target user. If an invalid user ID is provided, it will cause a job error. |

## Output fields
There are no outputs for this action.
