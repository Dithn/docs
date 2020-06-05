---
title: Workato connectors - Okta deactivate user action
date: 2020-06-03 18:00:00 Z
---

# Deactivate user action
This action deactivates an existing user and sets the user status to `Deprovisioned`.

::: danger Warning!
Deactivating a user is a destructive operation. The user is deprovisioned from all assigned applications which may destroy their data such as email or files. This action cannot be recovered! Find out more [here](https://developer.okta.com/docs/reference/api/users/#deactivate-user).
:::

![Deactivate user action](~@img/connectors/okta/deactivate-user.png)
*Deactivate user action*

## Input fields
| Field   | Description                       |
| ------- | --------------------------------- |
| User ID | The unique ID of the target user. |

## Output fields
There are no outputs for this action.
