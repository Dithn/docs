---
title: Salesforce and database syncs
date: 2018-01-04 06:15:00 Z
---

# Syncing Salesforce with databases/data warehouses
While there no current inbuilt option to connect directly to your database warehouse with Salesforce, Workato provides a range of actions to help users build powerful recipes.

Integrations between Salesforce and databases are useful when there is a need to optimize organizational processes: Using an integration product to do so greatly reduces the cost of manually addressing inconsistencies of aligning data in different systems.

## Get object schema action

The 'Get object schema' action fetch schema information of a Salesforce object. This action can be used on both standard and custom objects. Use this action when you need to replicate a Salesforce object's schema to your data warehouse.

This action requires the user to select the object to fetch object schema from. The example snippet below shows the output when the 'Opportunity' object is selected.

```json
{
  "actionOverrides": [],
  "activateable": false,
  "childRelationships": [
  {
    "cascadeDelete": true,
    "childSObject": "Attachment",
    "deprecatedAndHidden": false,
    "field": "ParentId",
    "junctionIdListNames": [],
    "junctionReferenceTo": [],
    "relationshipName": "Attachments",
    "restrictedDelete": false
  }
  ],
  "compactLayoutable": true,
  "createable": true,
  "custom": false,
  "customSetting": false,
  "deletable": true,
  "deprecatedAndHidden": false,
  "feedEnabled": true,
  "hasSubtypes": false,
  "isSubtype": false,
  "keyPrefix": "006",
  "label": "Opportunity",
  "labelPlural": "Opportunities",
  "layoutable": true,
  "listviewable": null,
  "lookupLayoutable": null,
  "mergeable": false,
  "mruEnabled": true,
  "name": "Opportunity",
  "namedLayoutInfos": [],
  "networkScopeFieldName": null,
  "queryable": true,
  "recordTypeInfos": [
  {
  "active": true,
  "available": true,
  "defaultRecordTypeMapping": true,
  "master": true,
  "name": "Master",
  "recordTypeId": "012000000000000AAA",
  "urls": {
  "layout": "/services/data/v42.0/sobjects/Opportunity/describe/layouts/012000000000000AAA"
  }
  }
  ],
  "replicateable": true,
  "retrieveable": true,
  "searchLayoutable": true,
  "searchable": true,
  "supportedScopes": [
  {
  "label": "All opportunities",
  "name": "everything"
  }
  ],
  "triggerable": true,
  "undeletable": true,
  "updateable": true,
  "urls": {
  "compactLayouts": "/services/data/v42.0/sobjects/Opportunity/describe/compactLayouts",
  "rowTemplate": "/services/data/v42.0/sobjects/Opportunity/{ID}"
  },
  "Fields": [
  {
  "name": "Id",
  "type": "string"
  },
  {
  "name": "IsDeleted",
  "type": "boolean"
  },
  {
  "name": "AccountId",
  "type": "string"
  },
  {
  "name": "IsPrivate",
  "type": "boolean"
  },
  {
  "name": "Name",
  "type": "string"
  },
  {
  "name": "Description",
  "type": "string"
  }
  ]
}
```
The output provides the metadata of the sObject and the list of fields and their data types. The array contains only the fields that the user can view, as defined by the user's field-level security settings.

For more details on the fields returned, please view this [article](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm).

## Detect new or updated custom data

This boolean field is available in Salesforce triggers for all single-record and batch New, New/Updated record triggers as well as Scheduled record search using SOQL. Use this field only if trying to replicate object records to a database.

When 'Yes' is selected, the trigger output will include data of any newly added or modified custom fields. It is then used in conjunction with a replicate data action in the corresponding database. This is currently supported on the Snowflake adapter.

When new/updated data is detected from the data source, Workato first inspects the new object definition against the existing Snowflake table schema. Any mismatches will be reconciled by updating the table definition in Snowflake. Following that, the data is then deduplicated and inserted/updated in the Snowflake table.

View this [recipe](https://www.workato.com/recipes/1166959?st=675ceb) for an example of how this is done.
