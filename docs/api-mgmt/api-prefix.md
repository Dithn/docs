---
title: API Prefix
date: 2020-01-20 00:00:00 Z
---

## API Prefix

API prefixes are base paths that are unique to each Workato account. You can use it to define your API platform environment. For example, you can use the API prefix to differentiate development, testing, and production callable endpoints. Doing so allows you to reuse your collection paths.

Having standardized collection names across your company simplifies the [recipe export process](/recipe-development-lifecycle.md). For example, your team can easily export recipes from the development account (`/acme-dev/sales-api/`) to the production account `/acme/sales-api/` without worrying about conflicting collection paths. API Prefix lets your work seemlessly between your environments.

::: warning
`oauth2` is a reserved namespace. The path prefix `oauth2/*` is not allowed.
:::

## Understanding the Endpoint

Every Workato endpoint consists of several parts. These components together form a unique API endpoint.

![Endpoint components](~@img/api-mgmt/url-endpoint-explained.png)
*Endpoint components*

| Component | Description |
| --- | --- |
| Domain and subdomain | By default, Workato API's are called from `apim.workato.com`. You can customize the domain name with [custom domain configuration](/api-mgmt/custom-domain.md). |
| API prefix | API prefix are higher-level directory paths used to define your API platform environment. |
| Collection path | Collections are logical groups of endpoints whose access pattern has some common features, see [API collection](/api-mgmt/api-collections.md) to find out more. |
| Endpoint path | Endpoint paths can be configured from the [endpoint overview](/api-mgmt/api-endpoints.md#customize-url-path-for-an-endpoint). |

## Configuration

Navigate to **Tools** > **API Platform** > **Settings** tab > **API path prefix** on the left menu.

![Customize API prefix](~@img/api-mgmt/path-prefix.png)
*Customize API prefix*

This API prefix will apply for all API collections and endpoints in this account (individual or team). The default API prefix is set to the initials of your account profile name.

::: warning
Changes to API prefix will require existing clients of the API to make adjustments on their end.
:::

### API Prefix for old API collection

All newly created Workato API collections come preconfigured with an API prefix. However, this does not apply to older API collections. Those will retain their existing URL until you decide to upgrade them.

#### Why upgrade API collection?

This upgrade immediately enables API prefix for this API collection. This includes the benefits of a streamlined recipe export/import. It will also enable custom domain configuration, which allows you to expose API endpoints under your own subdomain. Lastly, future upgrades to API platform will build on this version of API collection. Upgrade this API collection to benefit from new features.

:::warning
Note that this action cannot be undone. Once your API collection has been upgraded to use API prefix, you will not be able to revert back to the old URLs. You should prepare to inform all existing clients using this API of this change.
:::

#### How to upgrade API collection

For example, this API collection has not activated API prefix. We will run through the process to upgrade your API collection.

![API collection without API prefix](~@img/api-mgmt/api-collection-before-prefix.png)
*API collection without API prefix*

| Steps | Description |
| ----- | ----- |
| 1.    | Move to the **Settings** tab of the API collection.<br>![API collection setting](~@img/api-mgmt/api-collection-before-prefix-settings.png)*API collection setting* |
| 2.    | Select **Start upgrade**. |
| 3.    | Read the upgrade notes and select **Start upgrade** when you are ready.<br>![Upgrade API collection](~@img/api-mgmt/api-collection-before-prefix-wizard.png)*Upgrade API collection* |
| 4.    | Upgrade completed. Now all endpoints in this API collections have API prefixes enabled.<br>![API prefix enabled](~@img/api-mgmt/api-collection-prefix-enabled.png)*API prefix enabled*

Next, inform the existing users of this API collection, if you have not already done so.
