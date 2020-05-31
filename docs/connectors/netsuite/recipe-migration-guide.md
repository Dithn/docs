---
title: Workato connectors - NetSuite - Recipe Migrations
date: 2019-02-15 06:00:00 Z
---

# Migrating NetSuite recipes across environments

On 19/5/2020, enhancements were deployed to the NetSuite connector that allows users to seamlessly migrate recipes across environments. Before this, changing your recipe's connection from a sandbox Netsuite account to a production NetSuite account would preserve mappings for all standard fields in NetSuite. With this new enhancement, even mapping for custom fields will be preserved when switching connections.

## For recipes created after 19/5/2020

No action is needed. When switching connections, all mappings will be preserved.

## For recipes created before 19/5/2020

You will need to do an initial remapping of custom fields **only if you still plan to change the NetSuite connection for this recipe.**

### Steps needed
1. For a specific recipe, you will need to go to each action and perform remapping of datapills to custom fields. In the example below, i have an `Update Purchase order` action with a single custom field selected.

![NetSuite custom fields](~@img/connectors/netsuite/recipe-migr-1.png)
*Update Purchase Order with 1 Custom field*

![NetSuite custom fields](~@img/connectors/netsuite/recipe-migr-2.png)
*Custom field mapping*

2. To enable seamless migration, you will need to go to the `Standard record` selection and reselect the `Purchase Order` object. When searching, you should see 2 `Purchase Order` options. **You should select the top most option.** After selecting this, your custom field selection will be cleared out. Be sure to either have a reference of this recipe in another browser tab open or a copy of this recipe elsewhere.

![NetSuite custom fields](~@img/connectors/netsuite/recipe-migr-3.png)
*Custom field mapping*

3. Reselect the custom fields you need and remap all custom fields again. Once this is done, you have now enabled this new feature on this action. You will need to continue this for the rest of the actions in this recipe and other recipes where needed.

## FAQ
1. Do i need to migrate every action and every recipe?

There is no requirement that you need to migrate all existing recipes and/or actions. You can choose to only do this for selected recipes and actions where custom fields are used **AND** if this recipe is going to be migrated via recipe lifecycle management to a production Workato workspace. For actions and recipes that only interact with standard fields, this enablement is not necessary.

2. Do i need to migrate recipes in my production Workspace?

Netsuite recipes in production workspaces probably do not need to be migrated. In cases where you do not foresee this recipe's connection being switched OR it being exported and imported into another Workato workspace, this migration is not needed. The most value from migration would be to do so for NetSuite recipes in UAT environments that will be eventually imported into production environments.
