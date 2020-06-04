---
title: Workato connectors - Okta connection setup
date: 2020-06-03 06:00:00 Z
---

## Okta connection setup
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

### Roles and permissions required to connect
Workato recommends that the user (and the API key) that is used to connect to Workato have **Organization Administrator** or **Super Administrator** entitlements to use this action. Several triggers and actions require administrator privileges to perform.
