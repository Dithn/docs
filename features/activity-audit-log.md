---
title: Activity audit log
date: 2019-09-16 19:00:00 Z
---

# Activity audit log

Integration projects, big or small, need administration, management and lifecycle capabilities from the integration platform. Your [team](/user-accounts-and-teams/team-collaboration.md) is likely to have multiple team members collaborating on the integration project. Your team may also include employees, short-term contractors and consultants. This makes it necessary for you to provide access to the Workato account to build, change and operate the recipes.

As team size and complexity grows around the project, it becomes increasingly important to have control and visibility on the activities within your Workato workspace.

## Overview

Activity audit provides a simple and powerful interface for Workato administrators to comprehensively track changes to  the account, connections, recipes, folders and packages. Throughout the lifecycle of your project, it gives you the visibility to quickly identify the changes and opportunity to analyze the impact of those changes.
* Comprehensive log of changes made to account, connection, folder, recipe and package
* Track nature of change (for example, recipe stopped), author, and timeline
* Quickly navigate to specific change activity using filters

Activity audit is available with select plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Viewing activity audit

The activity audit log is available in the `Dashboard` > `Audit` tab. With the activity audit log, you will be able to find out which user in the team stopped a business-critical recipe or disconnected a connection. You'll also be able to find out when the recipe was stopped or connection was disconnected.

Activity audit log is visible to owner of the account and the users with `Admin` role.

## Types of activity audit

### Account

| Activity | Description |
| ----- | -------- | ------- |
| User login | User logging in through SSO or using password|
| User login failed | User login attempt failed. Click on the activity to find out if user was logging in through SSO or using password. |
| User logout | User logging out of Workato |
| Password changed | User changing their password by going to `Account Settings` > `Change password`|
| User switched team | User can switch to another team account by navigating to the Account menu on top right. Switching team is considered as login activity of the user to the switched team. Click on the activity to view the value of the `Activity`  attribute in the details section, the value `switch_team` implies user switched to another team.|
| Account email updated | User updated the email registered with Workato by going to `Account Settings` > `Account` and updating `Account email` field |
| User name updated | User updated the username registered with Workato by going to `Account Settings` > `Profile` and updating `Username` field |
| Password reset requested | User has requested to reset password by clicking on `Forgot password?` during login. In the next screen, by providing the email and clicking on the `Reset password` user confirms the intent to reset password.|
| Delegated admin added | User has given another Workato user delegated administration access by going to `Account Settings` > `Delegated administrator` |
| Delegated admin password updated | User changing their delegated administrator password by going to `Account Settings` > `Change password` > `Delegated administrator password` and updating it with the new password |
| Delegated admin removed | User has removed another Workato user's delegated administration access by going to `Account Settings` > `Delegated administrator` |
| Enabled two-factor authentication | User has enabled two-factor authentication by going to `Account Settings` > `Two-Factor Authentication` |
| Disabled two-factor authentication | User has disabled two-factor authentication by going to `Account Settings` > `Two-Factor Authentication` and clicking on `Disable Two-Factor Authentication`|
| Viewed two-factor authentication recoevery codes | User has viewed the two-factor authentication recovery codes by going to `Account Settings` > `Two-Factor Authentication` and clicking on `View recovery codes` |
| API key refreshed | User has refreshed the API key used to connect to Workato platform APIs by going to `Account Settings` > `API key` and clicking on `Refresh key` |
| Error notifications email updated | User has updated list of emails receiving error notifications from Workato by going to `Account Settings` > `Jobs settings` and entering emails in the `Error notifications` field |
| Error notification throttling | User has enabled or disabled notification throttling by going to `Account Settings` > `Jobs settings` and toggling the `Error notification throttling` checkbox |
| Audit log streaming | User has enabled or disabled audit log streaming by going to `Account Settings` > `Audit log streaming` and toggling the `ENABLE AUDIT LOG STREAMING` |
| Audit log streaming data inclusion | User has updated what is included in the audit log streaming by selecting or unselecting one or more of the options under `Include in stream`. The options to include in the audit log streaming are `Job history`, `Recipe step details` and `Login & user activity`. These settings are available by going to `Account Settings` > `Audit log streaming` > `Include in stream` |
| Audit log streaming destination updated | User has updated the destination where the audit log streaming is sent to. To update audit log streaming destination, go to `Account Settings` > `Audit log streaming` > `Audit stream destination` and pick the destination from drop down |

### Team
| Activity | Description |
| ----- | -------- | ------- |
| Invite created | User invites a collaborator by going to `Tools` > `Teams` and clicking on `Invite collaborator` |
| Invite accepted | Collaborator accepts the invite to join the team by clicking on the accept invite button in the invitation email |
| Invite modified | User modifies the invitation by going to `Pending invitations` tab in the `Team` page |
| Invite canceled | User cancels the invitation sent to a collaborator by going to `Pending invitations` tab in the `Team` page and clicking on the delete button |
| Member updated | A member of the team is updated (for example, role changed) as collaborator by clicking on the edit button in the `Collaborators` tab in the `Team` page |
| Member deleted | A member of the team is deleted as a collaborator by clicking on the delete button in the `Collaborators` tab in the `Team` page |
| Role created | User adds a new custom role by going to the `Team` page > `Roles` tab and clicking on `Add new role` |
| Role updated | User updates a custom role by going to the `Roles` tab and clicking on the edit button of the custom role from the list of custom roles|
| Role deleted | User deletes a custom role by going to the `Roles` tab and clicking on the delete button |

### Recipe
| Activity | Description |
| ----- | -------- | ------- |
| Started | User started a recipe by clicking on `Start recipe` button from the recipe details page |
| Stopped | User stopped a recipe by clicking on `Stop recipe` button from the recipe details page |
| Created | User creates a new recipe by clicking on the `Create a new recipe` button from the `Recipes` page |
| Updated | User modifies a recipe by clicking on the recipe to go the details page, editing the recipe and saving the recipe |
| Renamed | User renames a recipe by clicking on the recipe title, editing and saving it |
| Moved   | User moves a recipe from one folder to another by dragging and dropping recipe from the `Recipes` page |
| Cloned/Copy   | User clones or copies a recipe by clicking on the `...` > `Clone recipe` in the `Recipes` page or by clicking on the `Copy` button in the recipe details page |
| Access scope updated   | User can make a recipe private or public by toggling the `Is this a public recipe` setting found in the recipe details page under the `Settings` tab |
| Deleted | User deletes a recipe by clicking on the `...` in the `Recipes` page > clicking `Delete recipe` from the menu  or by clicking on the `Delete` button in the recipe details page  |

### Connection
| Activity | Description |
| ----- | -------- | ------- |
| Connection is connected | A connection is connected by the user by linking an account or providing credentials in the connection settings |
| Connection is disconnected | User disconnects the connection by clicking on `Disconnect` button in the connection settings |
| Connection is created | New connection is created by the user by clicking on the `Create a new connection` button in the `App Connections` page  |
| Connection is updated | Existing connection is updated by the user by going to `App Connections` or the `Connections` tab in the recipe details page, disconnecting the connection and then modifying the connection settings |
| Connection is deleted | Connection is deleted by the user by going to the `App Connections` > selecting a connection > clicking on `Delete connection` button |

### Folder
| Activity | Description |
| ----- | -------- | ------- |
| Folder created | User creates a new folder by clicking on the `+ Create new folder` in the `Recipes` page |
| Folder deleted | User deletes a folder by clicking on the gear button on the folder and selecting `Delete` from the menu |
| Folder renamed | User renames a folder by clicking on the gear button on the folder and selecting `Rename` from the menu |
| Folder moved | User moves a folder by dragging and dropping in to the new destination in the `Recipes` page|

### Package
| Activity | Description |
| ----- | -------- | ------- |
| Manifest created | User creates a new manifest by going to `Tools` > `Recipe lifecycle management` and clicking on `Create new manifest` |
| Manifest updated | User updates an existing manifest by going to `Tools` > `Recipe lifecycle management` > `Export` tab > selecting a manifest and clicking on `Edit manifest` button to update the manifest |
| Manifest deleted | User deletes an existing manifest by going to `Tools` > `Recipe lifecycle management` > `Export` tab > selecting a manifest and clicking on `...` and selecting `Delete manifest` from the menu |
| Package exported | User exports a package by creating a manifest and then building and packaging the manifest in to .zip file by going to `Recipe lifecycle management` page |
| Package imported | User imports a package by going to `Tools` >  `Recipe lifecycle management` > `Imports` tab > `Import package to a new folder` |

### Connector SDK
| Activity | Description |
| ----- | -------- | ------- |
| Custom connector created | User creates a new connector by going to `Tools` > `Connector SDK` and clicking on `Create connector` |
| Custom connector updated | User updates a connector by going to `Tools` > `Connector SDK` > selecting the connector and modifying source code |
| Custom connector released | User releases a new version of the latest connector changes by going to `Tools` > `Connector SDK` > selecting the connector and clicking on `Release latest version` |
| Custom connector deleted | User deletes a connector by going to `Tools` > `Connector SDK` > selecting the connector and clicking on the delete button |

### Common Data Model
| Activity | Description |
| ----- | -------- | ------- |
| Common data model created | User creates a new data model by going to `Tools` > `Common data models` and clicking on `Create a new data model` |
| Common data model updated | User updates a data model by going to `Tools` > `Common data models` > selecting the data model and modifying it |
| Common data model deleted | User deletes a data model by going to `Tools` > `Common data models` > selecting the data model and clicking on `Delete data model` |

### Lookup Table
| Activity | Description |
| ----- | -------- | ------- |
| Lookup table created | User creates a new lookup table by going to `Tools` > `Lookup table` and clicking on `Create a new lookup table` |
| Lookup table updated | User updates a lookup table by going to `Tools` > `Lookup table` > selecting the lookup table and modifying it |
| Lookup table deleted | User deletes a lookup table by going to `Tools` > `Lookup table` > selecting the lookup table and clicking on `Delete table` |

### Message Template
| Activity | Description |
| ----- | -------- | ------- |
| Message template created | User creates a new message template by going to `Tools` > `Message templates` and clicking on `Create a new template` |
| Message template updated | User updates a message template by going to `Tools` > `Message templates` > selecting the message template and modifying it |
| Message template deleted | User deletes a message template by going to `Tools` > `Message templates` > selecting the message template and clicking on `Delete template` |

### Properties
| Activity | Description |
| ----- | -------- | ------- |
| Property created | User creates a new property by going to `Tools` > `Properties` and clicking on `Add new property` |
| Property updated | User updates a property by going to `Tools` > `Properties` > selecting the edit button for the property and modifying it |
| Property deleted | User deletes a property by going to `Tools` > `Properties` > selecting the delete button for the property |

### Pub/Sub Topic
| Activity | Description |
| ----- | -------- | ------- |
| Pub/Sub topic created | User creates a new pub/sub topic by going to `Tools` > `Pub/Sub topics` and clicking on `Create a new topic` |
| Pub/Sub topic updated | User updates a pub/sub topic by going to `Tools` > `Pub/Sub topics` > selecting the topic and modifying it |

### API Collection
| Activity | Description |
| ----- | -------- | ------- |
| API collection created | User creates a new API collection by going to `Tools` > `API platform` > clicking on `API Collections` tab and clicking on `Add a new API collection` |
| API collection updated | User updates a API collection by going to `Tools` > `API platform` > clicking on `API Collections` tab > clicking `...` for the collection to be modified > selecting `Edit collection` from the menu and modifying it |
| API collection deleted | User deletes a API collection by going to `Tools` > `API platform` > clicking on `API Collections` tab > clicking `...` for the collection to be deleted > selecting `Delete collection` from the menu |

### API Endpoint
| Activity | Description |
| ----- | -------- | ------- |
| API endpoint created | User creates a new API endpoint by going to `Tools` > `API platform` > clicking on `API Collections` tab > select a API collection from the list > and clicking on `Create a new endpoint` |
| API endpoint updated | User updates a API endpoint by going to `Tools` > `API platform` > clicking on `API Collections` tab > select a API collection from the list > clicking `...` for the endpoint to be modified > selecting `Edit endpoint` from the menu and modifying it |
| API endpoint deleted | User deletes a API endpoint by going to `Tools` > `API platform` > clicking on `API Collections` tab > select a API collection from the list > clicking `...` for the endpoint to be deleted > selecting `Delete endpoint` from the menu |
| API endpoint activated | User activates a API endpoint by going to `Tools` > `API platform` > clicking on `API Collections` tab > select a API collection from the list > select a API endpoint from the list > click on the toggle to activate |
| API endpoint deactivated | User deactivates a API endpoint by going to `Tools` > `API platform` > clicking on `API Collections` tab > select a API collection from the list > select a API endpoint from the list > click on the toggle to deactivate |

### API Customer
| Activity | Description |
| ----- | -------- | ------- |
| API customer created | User creates a new API customer by going to `Tools` > `API platform` > clicking on `Clients` tab and clicking on `Add new client` |
| API customer updated | User updates a API customer by going to `Tools` > `API platform` > clicking on `Clients` tab > clicking `...` for the customer to be modified > selecting `Edit client` from the menu and modifying it |
| API customer deleted | User deletes a API customer by going to `Tools` > `API platform` > clicking on `Clients` tab > clicking `...` for the customer to be deleted > selecting `Delete endpoint` from the menu |

### API Access Profile
| Activity | Description |
| ----- | -------- | ------- |
| API access profile created | User creates a new API access profile by going to `Tools` > `API platform` > clicking on `Clients` tab > selecting a client from the list and clicking on `Create access profile` |
| API access profile updated | User updates a API access profile by going to `Tools` > `API platform` > clicking on `Clients` tab > selecting a client from the list > clicking `...` for the access profile to be modified > selecting `Edit access profile` from the menu and modifying it |
| API access profile deleted | User deletes a API access profile by going to `Tools` > `API platform` > clicking on `Clients` tab > selecting a client from the list > clicking `...` for the access profile to be deleted > selecting `Delete access profile` from the menu |
| API access profile token refreshed | User refreshes the API access profile API token by going to `Tools` > `API platform` > clicking on `Clients` tab > selecting a client from the list > clicking `Refresh` for the access profile whose API token needs to be refreshed |

### API Policy
| Activity | Description |
| ----- | -------- | ------- |
| API policy created | User creates a new API policy by going to `Tools` > `API platform` > clicking on `Policies` tab and clicking on `Create new policy` |
| API policy updated | User updates a API policy by going to `Tools` > `API platform` > clicking on `Policies` tab > selecting a policy from the list > clicking `...` for the policy to be modified > selecting `Edit policy` from the menu and modifying it |
| API policy deleted | User deletes a API policy by going to `Tools` > `API platform` > clicking on `Policies` tab > selecting a client from the list > clicking `...` for the policy to be deleted > selecting `Delete policy` from the menu |

## Activity audit data retention
The activity audit log data will be retained for one year from when it is generated. To get longer data retention period, you may reach out to Workato sales representative at +1 (844) 469-6752 to find out more.

Alternatively, you can use the activity log streaming to stream the data to your choice of data storage like `Amazon S3` or data storage providers like `sumologic` using the standard REST API interface. You can find more information about audit log streaming [here](/job-history-replication.md).

## Activity audit logs in more detail

Imagine an unplanned stoppage of a business critical recipe syncing product SKU data between your ERP like NetSuite or SAP and e-commerce app; or an update to Salesforce connection settings rendering it inactive; or someone inadvertently deleting a employee onboarding recipe connecting to Workday, a connection, or a folder. As an administrator, would you like to know if user login has failed? And how many times? Below are some examples where you will find the audit of activities that provide just the answers to the scenarios outlined above.

#### Recipe stopped by user

![Recipe stopped](/assets/images/activity-audit/recipe-stopped-user.png "Recipe stopped by user")

#### Connection disconnected by user

![Connection disconnected](/assets/images/activity-audit/connection-disconnected-user.png "Connected disconnected by user")

#### Folder created

![Folder created](/assets/images/activity-audit/folder-created.png "Folder created")

#### Folder deleted

![Folder deleted](/assets/images/activity-audit/folder-deleted.png "Folder deleted")

#### User login

![User login](/assets/images/activity-audit/user-login.png "User login")

#### User login failed

![User login failed](/assets/images/activity-audit/user-login-failed.png "User login failed")

#### Invite team member

![Invite team member](/assets/images/activity-audit/team-invited-user.png "Invite team member")

#### Team member joined

![Team member joined](/assets/images/activity-audit/team-joined-user.png "Team member joined")

#### Using filters

Find information quickly and efficiently using time-based, user-based and Workato asset-based filters.

Filtering by time lets you see the activity audit for certain time period like last 7 days or 30 days and more.

![Time filter](/assets/images/activity-audit/filter-time.png "Filter by time period")

In this example, simply select the user to find all the activities by that user in the Workato workspace. If you have lot of team members collaborating on Workato, scrolling and selecting in the dropdown can become difficult, so we've made it easy to just type in the user name and find the user you want.

![User filter](/assets/images/activity-audit/filter-user.png "User filter")
![User search](/assets/images/activity-audit/filter-user-search.png "User search")

Similarly, find all the activities by any user on any Workato asset like recipes, folders, connections in the workspace using the asset filter. Similar to user search, you can simply type in the asset you want to filter and just select the asset from the result.

![Asset filter](/assets/images/activity-audit/filter-asset.png "Filter by asset type")
![Asset search](/assets/images/activity-audit/filter-asset-search.png "Search by asset type")
