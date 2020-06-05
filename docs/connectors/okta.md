---
title: Workato connectors - Okta
date: 2020-06-03 18:00:00 Z
---

# Okta
[Okta](https://www.okta.com/) is a cloud service that organizes workforce and customer identities.

It provides cloud software that helps companies manage secure user authentication into modern applications, and for developers to build identity controls into applications, website web services and devices.

## API version
The Okta connector uses [Okta API v1](https://developer.okta.com/docs/reference/api-overview/).

## How to connect to Okta
The Okta connector uses an API key to authenticate with Okta.

![Okta connection setup](~@img/connectors/okta/connection-setup.png)
*Okta connection setup*

| Connection field | Description |
| ---------------- | ----------- |
| Connection name  | Give this connection a unique name that identifies which Okta instance it is connected to. |
| Okta domain      | Your Okta domain name (e.g. mycompany.okta.com or mytest.oktapreview.com ). |
| API Key          | An API key. You can generate API keys from your Okta instance > Security > API > Create token. |

:::tip API token privileges
Creating API tokens require administrator privileges. Ensure that you are logged on as an administrator before proceeding. Find out more on the [Okta documentation](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/).
:::

## Roles and permissions required to connect
Workato recommends that the user (and the API key) that is used to connect to Workato have **Organization Administrator** or **Super Administrator** entitlements. Several triggers and actions require administrator privileges to perform.

## Chapters
The following chapters contains triggers supported on Workato:
- [New events trigger](okta/new-events-trigger.md)
- [Scheduled event search trigger](okta/scheduled-search-trigger.md)

The following chapters contains user lifecycle actions supported on the Workato:
- [Create user](okta/create-user-action.md)
- [Activate user](okta/activate-user-action.md)
- [Update user](okta/update-user-action.md)
- [Add user to group](okta/add-user-to-group-action.md)
- [Remove user from group](okta/remove-user-from-group-action.md)
- [Deactivate user](okta/deactivate-user-action.md)
- [Delete user](okta/delete-user-action.md)

The following contains resource discovery actions supported on the Workato:
- [Get user by ID](okta/get-user-by-id-action.md)
- [Get user groups](okta/get-user-groups-action.md)
- [Get groups by name](okta/get-groups-action.md)
- [Get group members](okta/get-group-members-action.md)
- [Get recent log on events by user](okta/get-recent-events-by-user-action.md)
- [Get recent log on events by IP address](okta/get-recent-events-by-ip-action.md)
