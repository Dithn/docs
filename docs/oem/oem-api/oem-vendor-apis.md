---
title: OEM vendor APIs
date: 2020-01-04 11:00:00 Z
---

# OEM Vendor APIs
Workato's OEM vendor platform APIs allow OEM partners to control and even automate the provisioning of customer accounts and assets within them like recipes and connections.

The requests are authenticated by the credentials of the partner's OEM vendor account. To start using the APIs listed below, the OEM vendor Workato account has to first be assigned the `oem_vendor` privilege.

## Authentication
All API requests must contain:

- `X-USER-TOKEN` and `X-USER-EMAIL` in the request headers
OR
- `user_token` & `user_email` in the query parameters

For all OEM vendor APIs, the token and email belong to the main OEM account.

The `user_token`/`X-USER-TOKEN` can be found in the [settings page](https://www.workato.com/users/current/edit#api_key). Alternatively, navigate to account settings by clicking on `Account Settings` in the dropdown of the top right of the homepage in Workato. The API key can be found in the left navigation panel in the subsequent page.

### Supported Formats
Workato API supports sending request body with the `application/json` content-type. All replies are also encoded in `application/json; charset=utf-8`.

## HTTP response codes

| Name  | Description  | Sample reply                  |
|-------|--------------|-------------------------------|
| `200` | Success      | `{"Success": true}`           |
| `400` | Bad request  | `{"message": "Bad request"}`  |
| `401` | Unauthorized | `{"message": "Unauthorized"}` |
| `404` | Not found    | `{"message": "Not found"}`    |
| `500` | Server error | `{"message":"Server error","id":"3188c2d0-29a4-4080-908e-582e7ed82580"}` |
{: .api-input :}

## Connectors

| Type |Resource | Description |
|------|---------|-------------|
| GET | [/api/integrations](/oem/oem-api/adapters.md#list-connector-metadata) | Query connector metadata.|
{: .api-quick-reference :}

## Connections

| Type |Resource | Description |
|------|---------|-------------|
| GET  | [/api/managed_users/:managed_user_id/connections](/oem/oem-api/connections.md#list-connections) | Returns a list of connections in a customer account.|
| POST | [/api/managed_users/:id/connections](/workato-api/connections.md) | Allows the OEM vendor to add a shell connection in a customer account. |
{: .api-quick-reference :}

## Picklists

| Type |Resource | Description |
|------|---------|-------------|
| POST | [/managed_users/:id/connections/:connection_id/pick_list](/oem/oem-api/picklists.md) | Obtains a list of picklist values for a specified connection in an OEM customer account. |
{: .api-quick-reference :}

## Folders

| Type |Resource | Description |
|------|---------|-------------|
| POST | [/api/managed_users/:id/folders](/oem/oem-api/folders.md) | Creates a new folder in a customer account. |
{: .api-quick-reference :}

## Manage customer accounts

| Type | Resource | Description |
|------|----------|-------------|
| POST | [/api/managed_users](/oem/oem-api/managed-users.md#create-customer-account) | Create customer account. |
| PUT  | [/api/managed_users](/oem/oem-api/managed-users.md#update-customer-account) | Update customer account. |
| GET  | [/api/managed_users/:id](/oem/oem-api/managed-users.md#get-customer-account) | Get customer account. |
| PUT  | [/api/managed_users/:id/upgrade](/oem/oem-api/managed-users.md#upgrade-customer-account) | Upgrade customer account. |
| PUT  | [/api/managed_users/:id/downgrade](/oem/oem-api/managed-users.md#downgrade-customer-account) | Downgrade customer account. |
| POST | [/api/managed_users/:id/member](/oem/oem-api/managed-users.md#add-member-to-customer-account) | Add member to customer account. |
| DELETE | [/api/managed_users/:id/member](/oem/oem-api/managed-users.md#remove-member-from-customer-account) |  Remove member from customer account. |
{: .api-quick-reference :}

## Recipes

| Type | Resource | Description |
|------|----------|-------------|
| GET  | [/api/managed_users/:id/recipes](/oem/oem-api/recipes.md#list-recipes-in-a-customer-account)| List recipes belonging to a customer account. |
| GET  | [/api/recipes/search](/oem/oem-api/recipes.md#search-for-public-recipes) | Search for public recipes. |
| PUT  | [/api/managed_users/:managed_user_id/recipes/:recipe_id/start](/oem/oem-api/recipes.md#start-recipe-in-a-customer-account) | Start a recipe in a customer account. |
| PUT  | [/api/managed_users/:managed_user_id/recipes/:recipe_id/stop](/oem/oem-api/recipes.md#stop-recipe-in-a-customer-account) | Stop a recipe in a customer account. |
{: .api-quick-reference :}

## Recipe lifecycle management
The endpoints listed below are OEM vendor only endpoints for importing a package into a customer account.

The APIs for exporting a package are available [here](/workato-api.md#recipe-lifecycle-management).

| Type | Resource | Description |
|------|----------|-------------|
| POST | [/api/managed_users/:id/imports](/oem/oem-api/recipe-lifecycle-management.md#import-package-into-a-customer-account) | Import package into a folder in a customer account. |
| GET  | [/api/managed_users/:id/recipes](/oem/oem-api/recipe-lifecycle-management.md#get-package-status) | Get status of an imported package. |
{: .api-quick-reference :}
