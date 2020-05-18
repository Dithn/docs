---
title: Salesforce generic actions
date: 2018-01-04 06:15:00 Z
---

# Triggers/actions in Salesforce

## Salesforce triggers

In Workato, a Trigger refers to a condition that is set to start off a recipe. All the triggers on the Salesforce connector deals with **Objects**. The name of the trigger tells you exactly what event must occur for a recipe to take place. The Salesforce connector supports several different trigger types:

- [Real-time triggers](/connectors/salesforce/salesforce-real-time.md)
- Polling triggers
- Bulk triggers

### Configuring a trigger

In the example below, we will configure a simple polling trigger. Polling triggers check the connected Salesforce account every 5 or 10 minutes (this interval is dependent on your Workato plan) for new or updated objects.

All the triggers on the Salesforce connector deals with **Objects**. The name of the trigger tells you exactly what event must occur for a recipe to take place. The term "object" is exactly the same as how it is used within Salesforce itself, and refers to things such as leads, opportunities, accounts, as well as custom objects you may have created for your organization. Simply click on the Object field's dropdown list and you will be able to see all the objects associated with the instance of Salesforce you have connected to a recipe. For example, you use the trigger **"New/Updated Record"** and select **Lead** as the object. Your recipe will trigger every time a new lead is created or updated.

![New/updated lead trigger](~@img/salesforce-docs/trigger-new-updated-lead.png)
*The recipe will now trigger when there is a new/updated lead*

### Fields input field
The `Fields` list input field allows users to select the fields they wish to use in the recipe. This ensures that the recipe will be affected only by changes to these subset of fields, and therefore minimize impact on the recipe due to schema changes.

The benefits of using the `Fields` list are:
1. Improved recipe performance
2. Improved recipe usability due to smaller datatree with only relevant datapills
2. Minimizes impact on recipe by Salesforce object schema changes

### How to use Fields list
Salesforce triggers and actions have an optional input field called `Fields`. This is a multi-select field for you to select the data fields you want to use in the recipe. If left blank, the Salesforce trigger/action will retrieve all data fields in the datatree by default.

![Unconfigured fields selector](~@img/salesforce-docs/unconfigured-fields-selector.gif)
*Unconfigured fields selector. All Account fields are retrieved in the data tree by default.*

All data fields of your selected object will be available in the `Fields` list.

![Available base object fields](~@img/salesforce-docs/available-base-object-fields.gif)
*Fields selector displays all available data fields for your selected object by default*

By selecting any subset of these fields, the data tree will be regenerated to display only the selected datapills.

![Configured base object fields selector](~@img/salesforce-docs/configured-fields-selector-base-object.gif)
*Configuring the fields selector - the data tree is regenerated when any fields are selected*

In Salesforce, you can choose to retrieve related objects' data as well, e.g. if your trigger is a new opportunity in Salesforce, we can retrieve data about the Salesforce account the opportunity is related to. If your trigger is a new case, we can retrieve data about the Salesforce contact, lead or account the opportunity is related to. To tell Workato the fields to select, first select the related objects you're interested in, then select the fields of this related object you're interested in.

In the following example, we first selected `account` as the primary base object, then `parent account` as the join object. The `Fields` multi-select list is promptly populated with fields belonging to the parent account as well. Similarly, if the `Fields` list is not configured, all `account` and `parent account`fields will be fetched from Salesforce.

![Available join object fields](~@img/salesforce-docs/available-join-object-fields.gif)
*Available join object fields will be shown when the related join objects is selected*

All data fields of your selected base and related join objects will be available in the `Fields` list. By selecting any subset of these fields, the datatree will be regenerated to display only the selected datapills.

![Configured join object fields selector](~@img/salesforce-docs/configured-fields-selector-join-object.gif)
*Configuring the fields selector containing base and related join object data fields - the datatree is regenerated when any fields are selected*

By limiting the datatree to the fields we're interested in using, we mitigate the effects of Salesforce schema changes on our recipe.

## Deleted record trigger in Salesforce
The deleted record trigger allows you to trigger a recipe when a record is deleted. The object picklist fetches only soft-deleted records which are still stored in Salesforce (usually for 15 days) after deletion.

If you cannot find the object you need in the picklist, this may mean that the records for the object are hard deleted immediately when you delete them - Salesforce does not store them in the recycle bin. These objects cannot be supported by the Deleted object trigger.

To try and resolve the issue, configure the object to have records be soft deleted (and placed on a deleted item list/Recycle Bin for 15 days), depending on the record setup. Note that junction records (records that create many-to-many relationships between objects) are usually hard deleted and cannot be configured for soft-deletion. Check with your Salesforce administrator if more information is needed regarding soft/hard deletions.

### Create/update/search/upsert actions in Salesforce
When working with Salesforce Actions on Workato, you should find it extremely easy if you are familiar with the fields in the objects on your Salesforce account.

When you select an object to use in a create/update/search action, you will see all the fields associated with that object appearing in your action. For example, if you were to choose **Lead** you will see fields like phone, email, lead status etc. Simply drag and drop pills into the associated fields you want to populate in a create/update action, or for the field you want to search with in the search action.


## Attachments in Salesforce

### Uploading
To upload an attachment **to** Salesforce using Workato, you can use the **Create Object** Action, and select **Attachment** under the **Object** field. Before that however, you need to have a step that downloads the file that is to be uploaded to Salesforce. You may use the **Box** action **get file download URL**, followed by using the **utilities** tool to upload it from the obtained URL, or a similar flow of actions with another connector.  You can check out [this example here](http://docs.workato.com/handling-files-and-attachments.html#example-of-using-utilities-to-download-file-from-public-url) on how to download a file to Workato.

### Downloading
To download an attachment **from** Salesforce, you can use the **Download file** Action.  The **file ID** must be obtained from a previous step, usually from the **Get object details** step. Once that step is properly set up, you will be able to use the attachment as a pill in the other steps of the recipe, for example, you can use the **Upload file** action in the **Box** connector.

### Prevent schema errors with Fields list
When using a Salesforce trigger/action in a recipe, all object fields (standard and custom fields) are requested from Salesforce by default, **even if these fields are not used in the recipe**.

If a Salesforce admin changes the Salesforce object schema, e.g. deletes fields in the object, the recipe throws an error when making API requests to Salesforce for that object. This is because these deleted fields are still being requested from Salesforce by the recipe, which is an invalid request. On the other hand, if fields are added to the Salesforce object, there will not be any recipe errors as Workato will simply not request for these additional fields.

Such schema differences between Salesforce and Workato can be resolved by a schema refresh. However, if frequent schema changes are expected, we can utilize the `Fields` input field to control the fields that we request from Salesforce. This will ensure that schema changes unrelated to the recipe will not cause the recipe to break or experience errors.
