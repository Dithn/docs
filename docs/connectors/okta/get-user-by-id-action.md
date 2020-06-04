---
title: Workato connectors - Okta get user by ID action
date: 2020-06-03 18:00:00 Z
---

# Get user by ID action
This action retrieves account details of a specific user.

![Get user by ID action](~@img/connectors/okta/get-user-by-id.png)
*Get user by ID action*

## Input fields
| Field   | Description |
| ------- | ----------- |
| User ID | The unique ID of the target user. |

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
