---
title: Workato connectors - Okta get groups by name action
date: 2020-06-03 18:00:00 Z
---

# Get groups by name action
This action retrieves all groups that start with a given name.

![Get user groups action](~@img/connectors/okta/get-group.png)
*Get user groups action*

## Input fields
| Field | Description |
| ----- | ----------- |
| Name  | Input a name. Workato will match groups starting with this name. |

## Output fields
The output datatree contains a list of groups. Each group contains information like the group ID and group profile properties.

| Field                 | Description |
| --------------------- | ----------- |
| ID                    | The unique ID for the group. |
| Creation time         | The timestamp when the group was created. |
| Last modification time | The timestamp when the group was last modified. |
| Last membership updated time | The timestamp when the group's membership was last updated. |
| Object class          | An array of strings. This determines the group profile. |
| Type                  | This determines how a group's profile and membership are managed. |
| Profile               | Information about the group, including the name and description of the group. |
| Links                 | This object contains a collection of link relations for the group. It includes lifecycle operations and related resources. Learn more about Okta group link objects [here](https://developer.okta.com/docs/reference/api/groups/#links-object). |
| List size             | The number of groups in the list. |
| List index            | The index of this group in the list of groups. |