---
title: Workato connectors - Okta get user groups action
date: 2020-06-03 18:00:00 Z
---

# Get user groups action
This action retrieves the group memberships of a specific user.

![Get user groups action](~@img/connectors/okta/get-user-groups.png)
*Get user groups action*

## Input fields
| Field   | Description |
| ------- | ----------- |
| User ID | The unique ID of the target user.  |

## Output fields
The output datatree contains a list of group membership. Each group membership contains information like the group ID and group profile properties.

| Field                 | Description |
| --------------------- | ----------- |
| ID                    | The unique ID for the group. |
| Creation time         | The timestamp when the group was created. |
| Last modifiation time | The timestamp when the group was last modified. |
| Last membership updated time | The timestamp when the group's membership was last updated. |
| Object class          | An array of strings. This determines the group profile. |
| Type                  | This determines how a group's profile and membership are managed. |
| Profile               | Information about the group, including name and description of the group. |
| Links                 | This object contains a collection of link relations for the group. It includes lifecycle operations and related resources. Learn more about Okta group link objects [here](https://developer.okta.com/docs/reference/api/groups/#links-object). |
| List size             | The number of groups in the list. |
| List index            | The index of this group in the list of groups. |
