---
title: Salesforce and database syncs
date: 2018-01-04 06:15:00 Z
---

# Syncing Salesforce with databases/data warehouses
While there no current inbuilt option to connect directly to your database warehouse with Salesforce, Workato provides a range of actions to help users build powerful recipes.

Integrations between Salesforce and databases are useful when there is a need to optimize organizational processes: Using an integration product to do so greatly reduces the cost of manually addressing inconsistencies of aligning data in different systems.

## Get object schema action

The 'Get object schema' action fetch schema information of a Salesforce object. This action can be used on both standard and custom objects. Use this action when you need to replicate a Salesforce object's schema to your data warehouse.

This action requires the user to select the object to fetch object schema from. The example snippet below shows the output when a custom object, 'Commission' is used in the action.

```json
{
   "name":"Commission__c",
   "label":"Commission",
   "custom":true,
   "fields":[
      {
         "name":"Id",
         "label":"Record ID",
         "custom":false,
         "length":18,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"OwnerId",
         "label":"Owner ID",
         "custom":false,
         "length":18,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"IsDeleted",
         "label":"Deleted",
         "custom":false,
         "length":0,
         "scale":0,
         "precision":0,
         "type":"boolean"
      },
      {
         "name":"Name",
         "label":"Commission Name",
         "custom":false,
         "length":80,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"CreatedDate",
         "label":"Created Date",
         "custom":false,
         "length":0,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"CreatedById",
         "label":"Created By ID",
         "custom":false,
         "length":18,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"LastModifiedDate",
         "label":"Last Modified Date",
         "custom":false,
         "length":0,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"LastModifiedById",
         "label":"Last Modified By ID",
         "custom":false,
         "length":18,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"SystemModstamp",
         "label":"System Modstamp",
         "custom":false,
         "length":0,
         "scale":0,
         "precision":0,
         "type":"string"
      },
      {
         "name":"Rate__c",
         "label":"Rate",
         "custom":true,
         "length":0,
         "scale":0,
         "precision":18,
         "type":"string"
      },
      {
         "name":"Name__c",
         "label":"Name",
         "custom":true,
         "length":0,
         "scale":0,
         "precision":18,
         "type":"double"
      },
      {
         "name":"User__c",
         "label":"User",
         "custom":true,
         "length":18,
         "scale":0,
         "precision":0,
         "type":"string"
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

View this [recipe](https://www.workato.com/recipes/1169161?st=39eedb) for an example of how this is done.
