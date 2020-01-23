---
title: Version management
date: 2017-02-22 05:15:00 Z
---

# Version management
Every time a recipe is saved, a version of the recipe is saved. Previous versions of a recipe can be restored at any time. Recipe versions can be viewed in the **Versions** tab and are denoted by their version number.

In the version history view, each version is attributed to the user who made the change (relevant for multi-user team accounts), with a timestamp when the version was saved, as well as the change type associated with that version.

![Recipe versions](~@img/recipes/recipe-version-management/recipe-versions.png)
*Recipe versions as viewed from the Versions tab*

The are 2 types of changes:

- Recipe change

These changes driven by user actively changing the recipe. e.g. adding or removing steps and changing field mappings, will create a new version of the recipe when the recipe is saved.

- Schema change

These changes are driven by Workato when it notices that the underlying schema of objects in the recipe has changed. e.g. when a Salesforce custom object has a new field added.

Such schema refreshes will auto create a new version of the recipe.

# Restoring versions
To restore previous versions of the recipe, switch to the **Versions** tab to view all available versions. Recipe versions can be first previewed before being restored.

![Preview and restore recipe](~@img/recipes/recipe-version-management/preview-restore-recipe.gif)
*Previewing and restoring a previous version of the recipe*

Restored versions will be created as a new version. In the following case, the recipe had 3 versions initially. When version 2 of the recipe was restored, the restored version was created as Version 4.

![Restored version](~@img/recipes/recipe-version-management/restored-version.png)
*Restoring version 2 of the recipe creates that copy as version 4*
