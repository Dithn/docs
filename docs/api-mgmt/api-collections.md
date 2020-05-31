---
title: API Collections Management
date: 2018-02-02 00:00:00 Z
---

# API Collections Management

The API collections tab displays all API collections under this account (individual or team account). Navigate to this page by clicking on the **API Collections tab**. You will see something like this:

![API Collection Tab](~@img/api-mgmt/api-collections.png)
*API Collections Tab*

The next step is to organize these recipes into one or more API Collections. Generally, an API Collection should contain endpoints whose access pattern has some common features, so that you can manage them together. For example, a set of Salesforce endpoints that are intended to be called by recipes used with the Sales team might be put together in an API Collection.

API Collections are versioned, using a unique 1-10 character version identifier. Collections with the same name but different versions are distinct objects.

In this guide, we will go through API collection configurations:
- [How to create an API collection](#creating-an-api-collection)
- [How to edit an API collection](#editing-an-api-collection)
- [How to activate an API endpoint](#activating-or-deactivating-an-endpoint)
- [How to customize URL path for API collection](#customize-url-path-for-api-collection)
- [How to obtain machine-readable documentation (OpenAPI)](#machine-readable-documentation-openapi)

In a separate guide, we will go through [API endpoint configuration](/api-mgmt/api-endpoints.md).

## Creating an API Collection

Click on **Add new API Collection** to create a new collection.

| Step | Description |
| --- | --- |
| 1. | Provide information about the **Collection name**, **Version**, and **Description**. Also, select a **Recipe folder** from which the endpoints will be retrieved from.<br>![Select API Source dialog](~@img/api-mgmt/select-api-source.png)*Select API Source dialog*<br><br>It may be helpful to place recipes whose endpoints belong to the same API Collection within the same folder. An API Collection can be associated with a folder so that any new callable recipes added to the folder will be included in the collection automatically (they are not, however, automatically enabled for [external calling](#activating-or-deactivating-an-endpoint)). |
| 2. | This screen shows a list of the endpoints that will be initially placed into your collection from the folder you have selected. Don't worry if more endpoints are included than you actually intend to use. You can edit the list later.<br>![Review endpoints](~@img/api-mgmt/review-endpoints.png)*Review endpoints* |

Click on **Create API Collection** to create the collection. This returns you to the API Collections list, where you will see the new collection listed.

## Editing an API Collection

Once you have created an API collection, click on an API collection open up the collection overview page. From this page, you can add, remove, or edit endpoints that are available within this collection.

![API collection overview](~@img/api-mgmt/api-collection-overview.png)
*API collection overview*

## Activating or Deactivating an Endpoint

Control the recipes that are callable from this API collection page. When first created as part of creating an API Collection, or when first added to an existing collection, an endpoint is set to the **Inactive** state.

| State    | Description |
| -------- | ----------- |
| Active   | Active endpoints are callable from API requests. To set an endpoint to the **Active** state, the recipe associated with the endpoint must first be running.
| Inactive | Inactive endpoints cannot be called remotely. Using this slider to toggle to **Inactive** does not, however, stop the associated recipe. |

## Customize URL path for API collection

API collection URL paths are sub-directory paths that you can use to define your API collection. For example, you can use the path prefix to differentiate collections for sales, marketing, or HR.

Navigate to this page by **selecting your desired API collection** > click on the **Settings** tab, and selecting **URL settings** on the left menu.

![Customize endpoint URL](~@img/api-mgmt/customize-collection-url.png)
*Customize endpoint URL*

You can edit the URL path for this collection. Workato recommends using a meaningful name and standardizing the name across development teams. Having standardized collection names across your company will simplify the [recipe export process](/recipe-development-lifecycle.md) during versioning changes and updates between development, testing, and production-ready endpoint.

::: warning
`oauth2` is a reserved namespace. A collection path that begins with `oauth2/*` is not allowed.
:::

:::tip
New Workato collections are automatically configured with a custom path prefix. For more information on path prefixes, see [here](/api-mgmt/custom-domain.md).
:::

## Machine-readable documentation (OpenAPI)

The API Collection page has a link in the upper-right corner, labeled **Download OpenAPI spec**. This gives you access to a downloadable file that contains documentation for all the endpoints within the collection, in a format that can be used by tools like Postman. This format is called OpenAPI, also known as Swagger. Currently, Workato supports [version 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) of the specification.

## More information

Read our walkthrough for API endpoint configuration:
- [How to activate an API endpoint](/api-mgmt/api-endpoints.md#activating-or-deactivating-an-endpoint)
- [How to customize URL path for an endpoint](/api-mgmt/api-endpoints.md#customize-url-path-for-an-endpoint)
- [How to view individual endpoint](/api-mgmt/api-endpoints.md#viewing-an-endpoint)
- [How to test individual endpoints](/api-mgmt/api-endpoints.md#testing-an-endpoint)
