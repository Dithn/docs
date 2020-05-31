---
title: Team collaboration
date: 2017-02-16 06:15:00 Z
---

# Workato Teams

Workato Teams is built with a vision of facilitating agile and iterative development through collaboration, and at the same time providing tools to admins to govern and keep things secure. Using the Teams features allow:

- **Role Based Access Control:** Admins can set fine grained access control for various assets/objects (e.g. recipes, connections, folders, jobs) and operations (e.g. read, edit, operate)  are grouped into pre-defined roles.

- **Custom Roles that fit your business:** In addition to the out-of-box roles that admins can use, they can also create custom roles e.g. for Marketing Admin, Marketing Ops.

- **Work with multiple teams:** A single user/account can be part of multiple teams and contribute to building/deploying or operating recipes. Very useful when you have a single admin/expert that needs to govern multiple departments.

- **Better Security w/ SAML based SSO Access:** Instead of creating separate accounts for team members, Workato accounts can be provisioned using SAML based [Single Sign On](/user-accounts-and-teams/single-sign-on.md) apps like OKTA, OneLogin etc. Centralizes security, faster provisioning and de-provisioning. Workato also allows for [Just in time provisioning](/user-accounts-and-teams/just-in-time-provisioning.md) for custom roles.

- **Audit Trail:** When collaborating, multiple users can work on the same recipe. Hence, it is important to keep an audit trail of the changes. [Auto-versioning](#tracking-changes-made-by-collaborators) provides the ability to roll back or roll-forward changes without losing any work.

- **Recipe Ownership:** Recipes created by users as part of a team are owned by the team. When a consultant leaves or an employee changes group/jobs, their contribution to the team doesn't go away with them.

The Teams feature is enabled only for certain users. Reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Differentiating factors

Other tools like Integromat/Tray.io/Zapier provide basic multi-user access capabilities (capabilities will vary by each vendor). It is often a collection of accounts under a team owner.

- The ownership of integrations remain with the account/user that built it. So when a member leaves or their account is removed from the team, the integrations would be lost.

- The team owner or other users in the team cannot view/edit or operate the integrations built by another user. Consequently when someone is on vacation or have left the team, any issues in integrations owned by them will have to wait till they are back or need to be rebuilt.

- Furthermore, there is no or limited capability to give users different permissions such that some users can only operate workflows, while others can create/edit it.This is a critical feature for lifecycle and change management

When investing in a feature like teams it is important to understand the team dynamics and how multiple users will collaborate, how admins can govern and protect data/work. Workato Teams translates to more control over data governance, more flexibility in collaboration across team members, and more granularity over security enforcement. Most importantly, these features drive true collaboration.

## Team owner permissions
For Workato users who are team owners, they can access the team admin page from the tools menu.

![Navigating to team admin page](~@img/user-accounts-and-teams/team-collaboration/team-menu-option.png)
*Navigating to team admin page*

In the team admin screen, team owners can view current collaborators on their team, view pending invitations to collaborators, configure the settings, and setup collaborator roles. Team owners can also invite collaborators to the team.

![Team admin page](~@img/user-accounts-and-teams/team-collaboration/team-admin-page.gif)
*Team admin page*

## Team roles
Each collaborator you invite to a team will have a role. Roles define the permissions a user has when logged into the team account, such as the ability to access particular folders, or the ability to create, edit, delete recipe assets.

The default roles for teams are:
- Admin
- Analyst
- Operator

The following table details the specific set of permissions each role has.

![Roles table](~@img/user-accounts-and-teams/team-collaboration/roles-table.png)
*Access rights comparison*

### Admin role
Admins have almost equivalent permissions as the team owner. They are able to add, edit and delete recipes, connections, SDK, API keys and on-prem agents. In addition, admins have administrative rights over the team and are able to invite collaborators or edit collaborators' roles.

The admin role is typically given to users managing the Workato team account.

### Analyst role
Analysts have no access to team administration nor API keys. They are able to add and edit recipes, connections, SDK, as well as start and stop the on-prem agents.

The analyst role is typically given to users building and testing integration recipes or custom connectors on Workato.

### Operator role
Operators only have access to view recipes and jobs, as well as start and stop recipes and rerun jobs.

The operator role is typically given to users maintaining the recipe and ensuring the recipes are running well.

### Custom roles
In addition to the default team roles, you can also define custom roles. These allow you to assign fine-grained permission sets to collaborators. You can create new roles on the team page.

![Roles management](~@img/user-accounts-and-teams/team-collaboration/roles-management.png)
*Manage your roles and create new roles in the roles tab within the Team feature*

When creating a new role, select the specific create, edit and delete rights for recipe assets. In addition, select the additional Workato features within the team account you would like the collaborators to have access to.

![Additional role access to features](~@img/user-accounts-and-teams/team-collaboration/role-permissons.gif)
*Additional role access to Workato features*

You can also define the folders, and correspondingly the recipes and connections contained in that folder, that the role will have access to. This is useful when there are multiple teams working on the same Workato account, such as development, QA and production teams in the [recipe development lifecycle](/recipe-development-lifecycle.md), or when different departments in the company wish to manage their recipes separately. Users assigned to those folders will not have access to other folders nor to the `Home` folder.

![Additional role access to features](~@img/user-accounts-and-teams/team-collaboration/folder-permissions.gif)
*Define folder permissions for the new role*

### Details of the privilege table

The following table provides a breakdown of each privilege you can confer a custom role.

|**Recipes**|**Description**|
|--- |--- |
|Recipes|Give your team members specific access to read, create, update, delete, run recipes and access the job history|
|Connections|Give your team members access to edit, create or delete connections in the app connections page|
|Folders|Give your team members access to edit, create or delete folders. Team members will have access to the ‘all’ folder if this field is checked. Please define specific access to folders in the fields below.|
|Project folder|Give your team members access to all folders.|
|**Tools/Connectors**||
|Message templates|Give your team members access to create or edit message templates|
|Workbot|Give your team members access to create or edit installed and custom Workbots|
|Pub/Sub|Give your team members access to create or edit PubSub topics|
|Schema reuse|Give your team members access to create or edit reusable schema|
|Developer| Give your team members access to create or edit SDK connectors|
|Custom OAuth profiles|Give your team members access to create or edit custom OAuth profiles|
|Lookup Tables|Give your team members access to create or edit all lookup tables|
|People task|Give your team members access to create or edit human approval workflows|
|Account properties|Give your team members access to create or edit account properties|
|Connector SDK|Give your team members access to create and edit custom SDK connectors|
|API key|Give your team members access to view all API keys in recipes|
|API management|Give your team members access to manage API tokens and REST endpoints|
|Recipe lifecycle management|Give your team members access to import/export recipe packages with recipe lifecycle management|
|Teams|Give your team members access to manage and edit your team members|
|Custom team roles|Give your team members access to manage custom team roles|
|SAML SSO|Give your team members access to sign in with SAML SSO. Team access will be authenticated via your identity provider.|
|Base plan connectors|Give your team members access to all base plan connectors.|
|Pro plan connectors|Give your team members access to all professional plan connectors.|
|Biz plan connectors|Give your team members access to all business plan connectors.|
|Biz plus plan connectors|Give your team members access to all business plus plan connectors.|
|Enterprise connectors|Give your team members access to all enterprise plan connectors.|

<table>
  <tr>
    <td>Folders access</td>
    <td>Specify access to individual recipe folders. If ‘Project folder' is checked, folders specified in this field will be overridden.</td>
  </tr>
</table>

## Invite collaborators
To invite collaborators, provide the full name of the collaborator and their email.

![Invite collaborators](~@img/user-accounts-and-teams/team-collaboration/invite-collaborators.gif)
*Invite collaborators*
Existing Workato users will be prompted to login to Workato and accept the team invite.

Non-Workato users will be prompted to sign up for a Workato account.

## Switching between personal accounts and team accounts
Team members will be able to view the teams they are collaborating on in their account menu, as well as their roles in the team. Members can toggle to these teams by clicking on the team.

![Team Switch with Okta](~@img/user-accounts-and-teams/single-sign-on/okta-team-switch.gif)
*Switch to Team account with Okta authorization*

## Leaving a team
To leave a team that you belong to, navigate to the Team memberships tab in the Account settings page and click on 'Leave team' on the team you wish to leave.

When you leave a team, all access to that team will be revoked and you will no longer be able to switch to the team via the team switcher. All recipes and assets that you previously contributed to the team will remain.

The team owner will be notified when a team member leaves their team via email.

![Invite collaborators](~@img/user-accounts-and-teams/team-collaboration/leave-team.png)
*Team memberships tab in the settings page*

## Tracking changes made by collaborators
When collaborating in a team, changes to recipes and exports/imports made by team members can be tracked. This establishes an audit trail so you can manage your team effectively and ensure they are making changes compliant with your security protocols.

### Recipe versions
Recipe changes are logged under **Versions** tab and attributed to the collaborator who made the change. Older versions of the recipe can be restored by users with admin or analyst roles.

![Recipe versions](~@img/user-accounts-and-teams/team-collaboration/recipe-versions.png)
*Recipe audit log in Versions tab*

### Exports/imports

Exports and imports to and from your team account during [recipe lifecycle management](/recipe-development-lifecycle.md) are tracked on the export/import histories pages on every manifest and import folder.

![Recipe export history](~@img/user-accounts-and-teams/team-collaboration/recipe-export-history.png)
*Recipe export history*
