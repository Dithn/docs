---
title: Workato connectors - Zoom User actions
date: 2018-03-23 06:00:00 Z
---

# Zoom - User actions
Manage users in your Zoom organisation easily with the Zoom connector's user actions. These actions help you to automate the process of onboarding or offboarding employees from your company if they require Zoom accounts for video conferencing.

The Zoom connector supports the following **user** actions:
* [Create user](#create-user)
* [Update user](#update-user)
* [Search users](#search-users)
* [Get user](#get-user)
* [Delete user](#delete-user)

___________________

## Create user
Create users in Zoom under your Zoom organisation. This allows you to provision Zoom accounts automatically for new employees in a Zoom organisation automatically from an upstream HR application. Help your employees get up and running as soon as they join.

![Create user](~@img/zoom/create-user.png)
<center><i>Create a user in Zoom</i></center>

### Configuring the action
When configuring this action, you'll need to configure the different attributes of this Zoom user. You'll be able to create users of any license and even SSO users. Simply fill up the relevant input fields by mapping datapills.

___________________

## Update user
Update users in Zoom under your Zoom organisation. This allows you to update users in your Zoom organisation such as their details, their passwords or their profile picture.

### Configuring the action
When configuring this action, you'll need to first select the **Update type** for the user. After selecting this, the relevant input fields will show up which you can then map datapills to.

|Update type|Description|
|--- |--- |
|User details|Change the details of a user in Zoom.|
|User password|Change the password of a user.|
|User profile picture|Change the profile picture of a user.|

___________________

## Search users
Search users in Zoom under your Zoom organisation. This allows you to search for users in your Zoom organisation and pull details about them. You can always narrow your search by the user's status or role.

### Configuring the action
When configuring this action, you'll need to define the filters for your search. Leave blank to pull all users in your organisation.

___________________

## Get user
Get a specific user under your Zoom organisation by their user ID. Use the output of this action to send information to downstream applications in a recipe.

### Configuring the action
When configuring this action, you'll need to provide the ID of the Zoom user.

___________________

## Delete user
Delete a user in your Zoom organisation via SSO token or directly. This allows you to remove users entirely or revoke their SSO tokens.

### Configuring the action
When configuring this action, you'll need to first select the **event type** for the user.

|Delete type|Description|
|--- |--- |
|User|Delete a user from your Zoom orgnisation.|
|User SSO token|Revoke a user's SSO token from your Zoom Organisation|
