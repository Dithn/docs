---
title: Product Updates
date: 2018-06-05 21:45:00 Z
---

<p>
  <img alt="Product Updates banner" src="~@img/product-updates/product-updates-banner.png" data-no-zoom/>
</p>

Our engineers are hard at work daily to make Workato better! View the latest updates to our platform below.

## NetSuite Connector Update
##### May 2020

### Zero-hassle migration for recipes using NetSuite custom fields
We upgraded our NetSuite connector to preserve the mapping of custom fields when migrating recipes or reusing templates. This is important as connections to apps have to be re-established when a recipe is migrated using a manifest or copied from a template. Previously, mappings for Netsuite standard fields would be saved, but custom fields would need to be remapped. 

This update has several impacts:
- Gives admins and developers time back by not requiring them to remap custom NetSuite fields in deployed recipes
- Reduces human error from having to remap
- Makes using template recipes with NetSuite valuable and scalable


![NetSuite Custom Fields](~@img/product-updates/netsuite-fields-highlighted.png)
*Any mapping that includes a NetSuite custom field will now persist when migrating the recipe to other environments*

**Link:**
- [NetSuite Migration Documentation](/connectors/netsuite/recipe-migration-guide.md)

## Team Membership Tab
##### May 2020

### Take charge of your team memberships
The new Team memberships tab in the account settings page allows everyone to manage their team memberships, including accepting team invitations and leaving teams, in one place. Previously, leaving a team required approaching the admin of the team to remove you or you had to manually switch to that team’s workspace and remove your own membership.

**Why this matters**

As a recipe-developer, you are often working with multiple teams across several workspaces. As your list of workspaces grows, it takes more time to find the right workspace in the team switcher and notifications from different workspaces start cluttering your inbox.

![Team Membership Tab](~@img/product-updates/leave-team-highlighted.png)
*Now you can leave teams easily from the Team membership tab on your Account Settings page*

**Link:**
- [Documentation](/user-accounts-and-teams/team-collaboration.md#leaving-a-team)

## Folder-Level Error Notifications
##### May 2020

### Take control of job error notifications at the folder-level
Workspace account owners now have the option to control job error notifications. Before this update, account owners and people selected by the account owner would either receive all job error notifications or no notifications at all.

Select the newly released “Receive error notifications only from specific folders” setting to choose which folders of recipes you want to receive errors notifications for. This enables admins to only receive notifications for key recipes in development or critical recipes in production. Folders that are unchecked will not send error notifications for any recipe contained within it.

![Folder Level Error Notifications](~@img/product-updates/job-error-control-panel-highlighted.png)
*Customize your job error notifications through the “Error Notifications” tab on your Account Settings page*

**Link:**
- [Documentation](/recipes/error-notifications.md#receive-error-notifications-for-select-folders)

## HTTP Authentication for Audit Log Streaming
##### May 2020

### Stream Workato audit logs to more monitoring tools with HTTP authentication
Workato now supports HTTP authentication in audit log streaming, which enables securely sending job details and audit log events to centralized logging services over HTTP. 

**Why this matters**

Engineers in charge of monitoring and reliability play a critical role in ensuring crucial business systems are online and operating efficiently. Modern devops stacks have grown to include everything from SaaS and cloud providers to databases, so it’s easy to lose track of the status of each system. 

Many companies are turning to centralized logging, monitoring, and alerting services such as Datadog, Sumo Logic, S3, and Splunk to keep track of their systems in one place and set up automatic alerts when irregularities occur. Some of these services, like Datadog, require HTTP authentication to accept logs. 

![Audit Log Streaming](~@img/product-updates/audit-log-streaming-highlighted.png)
*Select the “Requires Authentication” option to set up HTTP authentication for streaming audit logs*

**Link:**
- [Documentation](/job-history-replication.md#audit-stream-destination) 

## New Zoom Connector
##### April 2020

### Easily take action on Zoom webinar and meeting data
As recent events have forced conferences to go virtual, webinars and other virtual events have become key demand generation activities. The new Zoom connector makes it easy to stream webinar and meeting data to any repository, like Box or Google Drive. It also enables you to automate everything from approving webinar registrants to alerting sales that a contact attended a recent webinar. This allows your sales teams to respond to leads faster, HR teams to recruit talent faster, and more.

![Zoom Connector](~@img/product-updates/zoom-connector-triggers-actions.png)
*Save Zoom recordings directly to repositories and add attendee data to your CRM with the new Zoom connector*

**Link:**
- [Documentation](/connectors/zoom.md)

## Workbot for Slack Updates
##### April 2020

### Use Slack modals, shortcuts, and Workato’s repeat blocks to streamline processes
Workato is leveraging the brand new UI and Shortcuts release from Slack to introduce our own Modals, built on Block Kit. Simplify business processes by creating interactive forms, powered by Workbot, that can be launched right from a Slack shortcut. Create beautiful, dynamic lists in modals with our Repeat Blocks builder. Creating dynamic lists of records in modals without code is unique to Workato.

![Slack Modals](~@img/product-updates/slack-updates-modals-highlighted.png)
*Use Workbot to build dynamic forms with Slack Modals and Shortcuts and Workato’s Repeat Blocks*

**Links:**
- [Slack Modals Documentation](/workbot/modals.md)
- [Slack Shortcuts Documentation](/workbot/workbot-shortcuts.html)

## Google BigQuery Connector Updates
##### April 2020

### Fast, powerful data pipelines with Google BigQuery updates
New updates to the Google BigQuery Connector significantly improve the capabilities for setting up data pipelines for ingestion and transformation. Here are some of the key updates:

New Triggers:
- New job completed - Trigger jobs in Workato when jobs are completed in BigQuery
- Scheduled query (Batch) - Retrieve rows in BigQuery on your schedule (batches as large as 50k rows)

New Actions:
- Insert Rows (Bulk) - Supports batch sizes as large as 50,000 rows for higher throughput
- Insert Rows (Batch) - Supports moving extremely large volumes of data e.g. hundreds of millions of rows at high speed
- Run CustomSQL in BigQuery - Enables Push-down ELT i.e. uses BigQuery’s power to process complex transformations defined using SQL in the recipe
- Load data into BigQuery - Simplifies replication of objects/tables from cloud and on-prem apps into BigQuery

![Google BigQuery](~@img/product-updates/bigquery-new-actions-highlighted.png)
*New triggers and actions in the Google BigQuery Connector make building robust data pipelines simple and fast*

**Links:**
- [Documentation](/connectors/bigquery.md)

## Cancel Job
##### April 2020

### More control and less stress with cancel job
Sometimes you need to cancel a Recipe before it finishes running. Maybe the recipe you're testing that upserts massive data sets and takes hours to run was put into the wrong sandbox. Or you realize the recipe with hundreds of steps that automate complex processes would end at an inconvenient time.

Cancel job gives Workato users full control over the timing and outcome of their recipes by enabling them to stop a recipe while it’s in the “Processing” status at the current step it’s on. It then creates an audit log entry, showing the job’s status as “Canceled.” 

Now you can schedule recipes to start whenever is most convenient, pause or cancel them if conditions change or you find an error, and restart at will. It is helpful both for building and testing new recipes and running existing ones. 

![Cancel Job](~@img/product-updates/cancel-job-screenshot-highlighted.png)
*The new Cancel Job functionality lets you stop a job mid-process*

**Links:**
- [Documentation](/recipes/cancel-job.md#cancel-job)

## Synthetic datapills for batch processing
##### April 2020

### Boost batch processing efficiency with Synthetic datapills
We are constantly looking for ways to enable users by simplifying the steps needed to build recipes and automate complex processes  That’s why Workato recently added several “synthetic” datapills that make processing data in batches simpler. We call them “synthetic” because our platform creates them from the extracted data; they weren’t naturally existing in the source. These new datapills can be found when running a “Repeat Action” in a Workato recipe. 

They are: 
- List Index: A field in a recipe that returns the row index when used in the in-line array mapper.
- Size: This field returns the list size when used in the in-line array mapper.
- Is first: Flags the first row batch coming in from an upstream system for batch processing.
- Is last: Flags the last row batch of a batch processing step.

These small but powerful bits of metadata streamline the creation of Workato recipes by automating the creation of complex logic. Here’s an example of how a recipe is condensed using synthetic datapills.

![Synthetic Datapills](~@img/product-updates/synthetic-pill-comparison.png)
*Recipe logic is more compact using the new synthetic datapill, List Index*

**Links:**
- [Product Blog](https://product.workato.com/boost-batch-processing-efficiency-with-synthetic-datapills/)

## JWT Workato Claim
##### April 2020

### Use tokens from 3rd party IDPs for API Platform endpoints
We added 2 new accepted claims to check access profile key in JWT for API platform. This enables JWT generated from 3rd party IDPs (identity providers) like Okta, Auth0 and ADFS. 

Configure access profile key to any of the 4 accepted JWT claims to let the API gateway recognise your JWT token. OpenID connect tokens from 3rd party IDPs can now be used.

**Links:**

- [Documentation](/api-mgmt/jwt-workato-claim.md)

## Repeat in Batches
##### March 2020

### Process large volumes of data in batches
We just released a powerful new feature called “Repeat in Batches.” When the rate at which an upstream app or system (e.g., Salesforce) transmits the data is faster than the rate at which a downstream app or system (e.g., NetSuite) can receive it, the control of this data flow often requires complex logic. 

The “Repeat in Batches” feature enables users to process such a data movement without having to build extra recipe logic, saving time on build and error handling. Users can easily configure the batch size to optimize the throughput, allowing them to control the data flow, and large data sets are automatically broken down into smaller batches for transfer. 

![SFDC Primary Key](~@img/product-updates/repeat-in-batches-action.png)
*Transferring data at different batch sizes is easy with the Repeat in Batches action*

**Links:**
- [Documentation](/recipes/steps.md#repeat-in-batches)

## Salesforce Connector update
##### March 2020

### Trigger off of outbound messages
You can now trigger a recipe off of Salesforce outbound messages. This allows you to use native Salesforce functionality (i.e. Workflow Rules that sends an Outbound Message) to kick off a recipe. This provides for real-time use cases, like point-of-sale or order fulfillment, to be handled more easily.

**Links:**
- [Learn More: New Outbound Message Trigger](connectors/salesforce/salesforce-real-time.md#choosing-the-right-trigger)

## API Platform update
##### March 2020

### Custom Domain Names for simpler and intuitive API URLs
By setting up custom domain names for REST APIs, you can provide better customer experience with user-friendly names, develop consistency in branding, and improve security.

The base URL format for invoking APIs you deploy uses the default hostname apim.workato.com.
```
https://apim.workato.com/
```
With custom domain names, you can use an alternative domain to set up your API’s hostname.
```
https://www.acme.com/
```
In order to set up a custom domain for your APIs, you must have a registered internet domain name. Additionally, you will be required to provide a certificate for a custom domain name.
Typically, the steps to register a custom domain and obtain certificates take a long time and often require special developer resources.

Workato makes it straightforward to set up and use a custom domain name by enabling you to register for a domain name and providing the required certificates. For increased security, Workato automatically updates these certificates on your behalf periodically to reduce the attack surface area.

![API Custom Domain](~@img/product-updates/api-custom-domain.png)
*Now you can register a custom domain to personalize your API*

**Links:**
- [Documentation](/api-mgmt/custom-domain.md)

## Workbot for Microsoft Teams
##### March 2020

### Making Workbot for Microsoft Teams secure and personalized
Workato’s Workbot for Microsoft Teams is a multi-purpose and powerful tool that you can use to execute tasks from MS Teams that perform actions like updating opportunities in Salesforce, approving expenses in Concur, and assigning tickets in ServiceNow, just to name a few. Now, by turning on Verify user access at runtime, you can have Workbot authenticate user credentials and only let authorized users complete the requested actions (e.g. approving expense, updating ticket status, etc.).

By allowing only authorized users to have access to viewing or modifying information in a business process or application, you improve security and also make the experience more personalized (e.g. listing only opportunities that an Account Executive cares about).

![Workbot verify user access at runtime](~@img/product-updates/workbot-personal-connections.png)
*Turning on "Verify user access at runtime" ensures the person using Workbot for MS Teams has the right credentials*

**Links:**
- [Documentation](/workbot-for-teams/workbot-latebinding.md)

## PGP Connector Update
##### March 2020

### More options when encrypting and decrypting with the PGP connector
Workato’s Pretty Good Privacy (PGP) connector is used by companies to meet common security requirements to ensure privacy (encryption) and authentication (digital signature). This added layer of security above and beyond network level security meets the needs of companies integrating with partners, like banks, who often need to transfer files with sensitive information.

We enhanced existing encrypt and decrypt actions as well as added standalone actions for signing and verifying. This includes:
- Encrypt action with optional signing
- Decrypt action with optional verification
- New Sign action for digitally signing the data
- New Verify action to authenticate signed content

![PGP Connector Actions](~@img/product-updates/pgp-connector-new-actions.png)
*The PGP Connector got a few additional actions that provide more flexibility when encrypting and decrypting files*

**Links:**
- [Documentation](/features/pgp-encryption.md)

## UI update
##### Feb 2020

### Recipe Editor design updates
We are constantly making updates to the user interface to increase user productivity and make Workato even easier to use. Below are a few updates you may have noticed recently.

The "What happens next?" action in our recipe editor is horizontal instead of vertical to make it easier to see the options while preserving visibility to the rest of the recipe.

![Horizontal Action Bar](~@img/product-updates/horizontal-action-bar.png)
*The 'What happens next?' options are displayed horizontally*

We have also improved the color and styling on the event tags (New, Bulk, Batch, Deprecated, and Real Time), and additional source information will now be shown when hovering over Data Pills.

## Connector update
##### Feb 2020

### Google Drive update
The new trigger - **New file or folder in folder hierarchy** - is a powerful addition to the Google Drive connector. It enables recipes to trigger jobs on a selected folder and any of its sub-folders. This trigger checks periodically for new files or folders created in a specified folder and its subfolders. Each new file and folder generates a new job.
This trigger is compatible with streaming, allowing it to send large amounts of data from Google Drive to other streaming compatible connectors in Workato.

This new trigger has many benefits, including:
- Reduces maintenance by eliminating the need to refresh the folder/sub-folder data for the trigger
- Simplifies automated backup of folders and files in Google drive into any downstream file management software
- Prevents loss of data/files owing to new sub-folders and files created after the recipe start

**Links:**
- [Documentation](/connectors/google-drive/trigger-new-file-hierarchy.md)

## Connector update
##### Feb 2020

### Salesforce bulk upsert action update
We previously only allowed External ID as a valid field for Primary Key in the Salesforce bulk upsert action. We now accept all indexed fields (Salesforce record ID, Name, any custom indexed field) as well.

**Use cases**
For customers that do not store an ID in their external systems and use the Salesforce record ID (or other internal fields) as the primary identifier of a record, they can now use that field as the Primary Key by toggling the field to text and entering the name of the field.

**Links:**
- [Documentation](/connectors/salesforce/salesforce-bulk.md#salesforce-object-to-create-update-upsert)

## Platform update
##### Feb 2020

### Tracking billable recipes
We announced some radical changes to simplify pricing for customers last year and a lot of you have taken advantage of the new recipe-based pricing model. To help you plan and optimize usage, we have added a new section in your Workspace to view all purchased add-ons and recipe packages. Additionally, you can also track current and historical recipe usage trends.

Legacy usage-based plans will be supported through this release in the following way: Plans that have a billable metric, like tasks, will have a thermometer representation in the UI to show the consumption of tasks. Usage-based plans with no billable metrics will just show the plan name and feature add-ons.

**Subscription Page (under account settings):**
![Recipe Pricing Subscription Screen](~@img/product-updates/recipe_pricing_subscription_screen.png)
*Plan information, usage stats, and tasks are now displayed on the user subscription page*

## Platform update
##### Feb 2020

### Trash smartfolder
Teams of developers working together who may accidentally delete a recipe will now have a safety net of 30 days to recover an item that was deleted. This will help our customers solve the often costly problem of a mistakenly deleted item.

Users will only be able to see items in the Trash folder to which they have access. The customer's admin will have access to all items and will serve as the point of contact for help in recovering accidentally deleted items.

- Customers can view items that were deleted and restore items within 30 days of deletion
- Customers have the option to permanently delete items from the Trash folder
- Restore recipes that have been accidentally deleted

## Connector update
##### Feb 2020

### NetSuite SuiteTalk 2019_2 API
We recently migrated our NetSuite connector to the SuiteTalk 2019_2 API. NetSuite has 2 major releases of their API every year which includes updates to their WSDL. With this update, the NetSuite connector now has access to more record types and field types which may not have been found previously.

**Links:**
- [View added record types](https://docs.workato.com/connectors/netsuite.html#suitetalk-2019-2-changes)

## Connector update
##### Feb 2020

### Data replication in Snowflake
Let Workato replicate your data into Snowflake without data warehouse maintenance or DevOps. Maintain table definition from data source automatically and utilize built-in data deduplication.

When new/updated data is detected from the data source, Workato first inspects the new object definition against the existing Snowflake table schema. Any mismatches will be reconciled by updating the table definition in Snowflake. Following that, the data is then deduplicated and inserted/updated in the Snowflake table.

This action performs data loading in batches. It is able to handle batch sizes of up to 16,384 rows (Snowflake limitation).

For the schema replication as intended, the data source (application) must able to pick up new fields when an object definition changes. Additionally, the object structure should not be too complex (highly nested, nested arrays) for optimal results.

**Links:**
- [View data replication action documentation](https://docs.workato.com/connectors/snowflake/replicate.html)

## Connector update
##### Jan 2020

### Enhanced hierarchical relationship management in Salesforce
An object relationship in Salesforce is a two-way association between two objects. Relationships are created by creating custom relationship fields on an object. This is done so that when users view records, they can also see and access related data from related objects.

We have updated the Salesforce connector to allow access to relationships beyond the parent. Toggle the related objects field in triggers and actions to accept text input. This will allow you to enter multiple object relationships. Learn more in the link below.

**Links:**
- [Related objects in Salesforce](https://docs.workato.com/connectors/salesforce/related-objects.html#grandparent-relationships)

## Platform update
##### Dec 2019

### Dependency Graph
As the number of your automations and the size of teams building automations increase, there’s also a dramatic increase in the interdependency between assets e.g. callable recipes, connections, common data models, lookup tables etc.

Workato’s Dependency Graph visually illustrates the relationships between every asset and resource in a Workspace. Users can easily browse and inspect dependencies, and identify and assess how a change in one asset e.g. connection might impact other assets.

**Links:**
- [Video](https://www.youtube.com/watch?v=9JaetuTIBoM)

## Platform update
##### Dec 2019

### Azure AD and G Suite SAML SSO support
Seamlessly use your Azure AD and G Suite identity provider to securely connect to multiple Workato workspaces using single sign-on.

With this enhancement, Workato makes it easy for IT to provision users in all the top identity providers in the market - Okta, Onelogin, Azure AD and G Suite.

**Links:**
- [Azure AD](https://docs.workato.com/user-accounts-and-teams/single-sign-on.html#azure-ad-single-sign-on)
- [G suite](https://docs.workato.com/user-accounts-and-teams/single-sign-on.html#google-g-suite-single-sign-on)

## New connectors
##### Dec 2019

### Google BigQuery
Google BigQuery is a serverless, highly scalable, and cost effective cloud data warehouse. BigQuery is amongst the top 3 solutions customers look to use when migrating from traditional data warehousing products. Build data pipelines faster to accelerate time to insights, create scalable ELT/ETL data pipelines effortlessly with the Workato BigQuery connector.

**Connector features**
- The connector currently supports OAuth2 connection. No app registration needed.
- [Triggers/Actions](https://www.workato.com/integrations/google_big_query)
- [Documentation](https://docs.workato.com/connectors/bigquery.html)

## New connectors
##### Dec 2019

### Zuora
Zuora is a popular and critical application for businesses that offer product/services as a subscription e.g. BOX, HBO, Zoom, Clear, Prezi, BetterCloud, Zendesk, and more.

**Configure Price Quote (CPQ) integrations**
For B2B companies with an existing CPQ can connect their CPQ (e.g. Salesforce, Microsoft CRM Dynamics, Apttus etc.) solution to the Zuora. By connecting to Zuora, they can sync the pricing, orders, subscription, usage, AR, and revenue data.

**CRM Integrations**
By connecting Zuora to CRM applications customers can provide sales and support teams instant access to billing data.
- **Sales:** Zuora’s pricing catalog can be exposed in sales system so pricing and transactional (i.e., invoices, payments, refunds) information can be used to automate creation of subscription quotes.
- **Support / Service:** By providing instant access to customer subscription, billing and payment history, renewal dates, and key subscriber metrics in the support / service system for complete visibility into the subscriber relationship allowing agents to resolve issues faster, and create better CX.

**Connector features**
- The connector currently supports OAuth2 connection. App registration needed.
- [Triggers/Actions](https://www.workato.com/integrations/zuora)
- [Documentation](https://docs.workato.com/connectors/zuora.html)

## New connectors
###### Oct 2019

### BIM 360 (Autodesk)
BIM 360 is construction management software that connects project teams and data in real-time from design through construction. Workato's BIM 360 connector allows you to manage your projects, files, folders and drawings in BIM 360 and connect them to all our other applications.

**Links:**
- [Triggers & actions](https://www.workato.com/integrations/bim360)

## Activity audit log
###### Oct 10, 2019

### Why this is important
Business systems group in a lot of enterprises consists of big teams developing and managing automations. As team size grows, it becomes important to track and audit changes made by the team members so that disruptions to business are minimized by unintended changes.

### What this means
Activity audit log provides quick and easy access to events, operations and actions done by users of Workato workspace. It is a critical tool for administrators to monitor changes done to the integrations. Activity audit log is available in the Dashboard > Audit  tab.

### Benefits
- Critical investigation tool in case of unauthorized or unintended operations
- Create activity audit document for compliance purposes
- Visibility and monitoring in a collaborative team environment
- Helps administrators answer questions such as -
  - Which user stopped the recipe? When?
  - When did user last login?
  - What actions a user has taken in last 7 days?
  - Who invited a collaborator?
  - When was my connection modified? By Who?

**Links:**
- [Documentation](/features/activity-audit-log.md)

## Job debug tracing
###### Oct 25, 2019

### Why this is important
Many a times recipes and actions in the recipe may run into an error requiring debugging. For example, if a customer gets `404 Not Found` when updating incident in ServiceNow as part of incident management automation. As the size and complexity of the project grows, so does the time consumed in debugging errors. Whether Workato is used by developers, integration specialists or citizen developers, it is critically important to make it easy to find and debug errors so developers can spend more time building automations.

### What we’ve done

- Most connectors make HTTP requests as part of each action (for example, actions like  Update Record or Search Record by the Salesforce connector)
- This feature traces HTTP request details for each action in the recipe
- Shows HTTP URL, headers, request and response for each HTTP request
- Available in the Debug tab of the action line when a job is rerun

### Benefits

- Increase developer velocity in building functional Workato recipes (because of faster identification, investigation, and resolution of issues)
- Respond to and solve production issues faster
- Shorten duration of  impact to user experience during production issues
- Reduce time and cost in troubleshooting issues

**Links:**
- [Documentation](/recipes/job-debug-tracing.md)

## New connectors
###### Sept 2019

### Plangrid
[PlanGrid](https://www.plangrid.com/) is construction productivity software. The platform provides builders real-time access to blueprints, punch lists, daily reports, submittals and more. Refer to our documentation on support for objects and actions with the Plangrid connector.

**Links:**
- [Connection setup](/connectors/plangrid.md)
- [Supported objects](/connectors/plangrid/object.md)
- [Actions](/connectors/plangrid/object-action.md)
- [Triggers](/connectors/plangrid/object-trigger.md)

### Percolate
[Percolate](https://percolate.com/) is a content marketing platform offering solutions to introduce visibility into the marketing process. The connector will allow users to manage standard & custom objects and schemas on their Percolate instance.

**Links:**
- [Triggers & actions](https://www.workato.com/integrations/percolate)

### Workfront
Workfront is a software company that develops web-based work management and project management software that features enterprise work management, issue tracking, document management time tracking and portfolio management. Create and update objects on Workfront and build custom actions to manage all other use cases.

**Links:**
- [Triggers & actions](https://www.workato.com/integrations/workfront)

## Slack Block kit on Workato
###### Sept 25, 2019

### What is Block kit on Workbot
- Leverages [Slack Block Kit](https://api.slack.com/block-kit), Slack’s UI framework
- Allows more control and flexibility over the message layout and interactive elements
- Stack and re-order blocks

### What does this mean?
- Richer messages in post message / post command reply actions
- New date picker block
- New overflow menu block
- New divider block
- Ease of use - easier to add blocks, re-arrange by dragging & dropping
- Prototyping  - preview message from recipe in Slack’s block kit builder

Check out the new Block kit functionalities here:
- [Video](https://www.youtube.com/watch?v=mJSpPaT4opg&feature=youtu.be)
- [Documentation](/workbot/block-kit.md)

## On-prem groups
###### Sept 16, 2019

### Key Value Propositions:
- High Availability (HA) and Load Balancing
- Customer Experience
- Prevent Data and Revenue Loss

[On-prem groups](/on-prem/groups.md) help achieve zero downtime for recipes that involves on-prem connections and prevent data and revenue loss through missing SLAs. All critical workflows running on on-prem connections are kept running 100% of the time because recipe can process jobs successfully even when one of the user’s on-prem servers goes down.

### How it works:
- Users can add multiple agents to each group
- A connection uses an on-prem group to interact with on-prem apps instead of through a single agent
- Connection is live and recipe can process jobs successfully even when one of the user’s on-prem server goes down

## Robust data protection and compliance with flexible data retention
###### Sept 01, 2019

Securing customer data is a core value of our platform. With data protection standards, such as GDPR, and the sheer mass of data that companies collect and accumulate, the protection and control of information has become increasingly important.

### What is flexible data retention?
- Customers can customize their data retention period to fit their compliance policies
- Data retention periods can be set in hours or days
- The retention periods will vary by plan

### Why is this important?
Due to highly publicized instances of data breach, most enterprise customers are sensitive and insistent on protecting their data. With the flexible and lower data retention period support, data breach exposure is limited since Workato will destroy the data when data retention period ends.

### How do I change the data retention period?
Customer administrator or account owner of Business and above plans can navigate to `Account Settings` > `Data retention` to configure data retention. Specify number of hours or days and the data retention period unit.

## Recipe collections
###### Aug 16, 2019

Recipe Collections are a group of curated recipes that work together to solve a specific use case. Recipe Collections expect to bring customer centric view of the automations instead of a recipe centric view. We hope to improve discoverability of automation possibilities and better communicate the problems solved and value of recipes.

View the first release of recipe collections at: https://www.workato.com/recipes/browse.

## Connector SDK version control and release management
###### Aug 10, 2019

The latest updates to the [connector SDK](/developing-connectors/sdk/quick-Start.md) enable customers to manage versions of the connector, rollback or roll forward to a specific version, control which version of the connector is used in recipes, and sharing custom connectors across workspaces.

### Auto-versioning
Similar to recipe versioning, connector SDKs are automatically versioned when changes are made.

### Version rollback and roll forward
It is easy to view the history of changes made to the connector by browsing the versions. Users can deploy a specific version by simply choosing to revert to that version of the connector.

### Releasing a version
Users can now control which version of their custom connector is used in recipes by choosing to release a stable version of it. They can then continue building their custom connector without it affecting any active running recipes.

### Sharing a custom connector
Users can share a custom connector across workspaces using share links or our recipe lifecycle management feature. When new versions of a custom connector are released, cloned connectors get a notification to upgrade to the latest released version.

### Key benefits:
- Active safeguards against the unwanted syntax errors spoiling recipes. 
- Ability to release stable versions and continue development without implicating live recipes.
- Ability to roll back unwanted changes
- Greater control over custom connector management
- Enhanced developer experience 


## Connector update: Hubspot
###### Jul 20, 2019

Check out our [last update](#major-connector-update-hubspot) on Hubspot for more information on the latest major Hubspot connector enhancement.

#### HubSpot Companies API Support
Support has been added for the Company object in Hubspot with the following triggers/actions:

**Triggers:**
- New company
- New/updated company

**Actions:**
- Create company
- Update company
- Get company details by ID
- Search companies by domain name

#### HubSpot Additional OAuth Scopes
Support has been added for users to select multiple OAuth scopes when establishing a connection with our HubSpot connector. This will allow you to build custom actions for HubSpot APIs beyond the scope of Contacts, Deals, Engagements and Companies.


## Connector update: Wrike
###### Jul 17, 2019

#### Custom fields selector on triggers and actions
The custom field selector has been added to the Wrike connector's triggers and actions. This field selector is usually implemented on applications that usually have many customer-defined custom fields (eg. Salesforce, Quickbase).

The Fields list input field allows users to select the fields they wish to use in the recipe. This ensures that the recipe will be affected only by changes to these subset of fields, and therefore minimize impact on the recipe due to schema changes. Some benefits include:

- Improved recipe performance
- Improved recipe usability due to smaller datatree with only relevant datapills
- Minimizes impact on recipe by Salesforce object schema changes


## Connector update: Marketo
###### Jul 06, 2019

#### Marketo upsert leads in batches
The Marketo connector has been enhanced with a new action: Upsert lead (Batch). By utilizing bulk APIs to sync large amounts of data, fewer jobs are needed and fewer API calls to move the same amount of data. As a result, recipe run time often decreases.

The action accepts a list of 300 leads at maximum.


## Major connector update: Hubspot
###### Jun 30, 2019


#### Update details
The Hubspot connector has been updated to support [new triggers, actions and custom fields](https://www.workato.com/integrations/hubspot).

The new set of triggers and actions enables automation of marketing workflows for campaign management, email list generation, lead enrichment, lead tracking, customer onboarding, partner onboarding, and more. They enable Hubspot customers to build custom workflows, connect to on-prem apps/databases, and perform bulk operations e.g. syncing millions of contacts with Salesforce or Mailchimp.

#### Resources
- [Connector Overview](https://www.workato.com/integrations/hubspot)
- [Popular Automations](https://www.workato.com/recipes/browse?q=hubspot)


## Platform security: Just-in-Time provisioning now supports custom roles
###### Jun 23, 2019

#### What is Just-in-time provisioning
Just-in-Time provisioning enables customers to use a SAML assertion to create users in downstream  apps e.g. Workato on-demand when users log into the app for the very first time.
This eliminates the need to manually provision user accounts in advance. For example, instead of manually creating a Workato account for a new employee customers can use Just-in-Time provisioning to dynamically create the Workato account when the new employee initially logs in using Single Sign On (SSO).

#### For Whom
- Available for all plans that include SSO & Teams
- All current accounts using Teams with SAML based SSO (e.g. OKTA, One Login or other)

#### Why we built it
- Supporting custom roles for Just-in-time provisioning allows customers to enforce custom security policies for Workato
- The standard roles Admin, Analyst, and operator available with Just-in-time provisioning  don't suffice for customer's security policies

#### How it works
- First, Workato admin creates a custom role e.g.mktg_ops for marketingOps that can only access, create, or modify objects (recipes, connections,OPA etc.) in the Marketing folder.
- Next, the authentication method is set to SAML based SSO (e.g. Okta, OneLogin) with SAML JIT enabled.
- The 3rd party identity provider (i.e. Okta, Onelogin) is configured to use the custom role value e.g. mktg_ops for the workato_role as one of the SAML attributes
- When a user logs into Workato using SAML based SSO for the first time, the identity provider (i.e. Okta,OneLogin) passes the custom role value e.g. mktg_ops for workato_role.
- The user's Workato account is then automatically provisioned with the custom role i.e. mktg_ops

#### Why it is useful
- *Reduced Administrative Costs:* Eliminates manual work to provision Workato accounts thus reducing cost of operations.
- *Increased Security:* In addition to the access/security policies enforced by the identity provider, customers can now enforce custom security policies for Workato accounts.
- *Faster Onboarding & improved employee experience:* New hires have faster access to Workato accounts with the right access privileges.

#### Resources
- [Documentation](/user-accounts-and-teams/just-in-time-provisioning.md)
___

## Platform security: Two-factor authentication
###### Jun 12, 2019

#### What is Two-Factor Authentication (2FA)
Two-Factor Authentication is an extra layer of security used to make sure that people trying to gain access to an online account are who they say they are. First, a user will enter their username and a password. Then, instead of immediately gaining access, they will be required to provide another piece of information. This second factor could come from one of the following categories:

1. **Something you know:** This could be a personal identification number (PIN), a password, answers to “secret questions” or a specific keystroke pattern
2. **Something you have:** Typically, a user would have something in their possession, like a credit card, a smartphone, or a small hardware token
3. **Something you are:** This category is a little more advanced, and might include biometric pattern of a fingerprint, an iris scan, or a voice print

**Source**: https://authy.com/what-is-2fa/

#### For Whom
- Available for all plans
- All existing and new accounts

#### How it works
Workato's two-factor authentication uses a software generated time-based, one-time passcode (also called TOTP, or soft-token)
- First, a user must download and install a free 2FA app (e.g. Google Authenticator, Authy, or other) on their smartphone or desktop
- Next, they will need to go to their Account settings section to enable two-factor authentication.
- When enabled, the user will be prompted to go through a couple of simple steps to activate 2FA for their account

#### Why is it useful
- Customers can add a secondary layer of security to protect unauthorized and fraudulent access to their Workato account
- Similar to SSO, enterprise IT teams can now use 2FA to alleviate risks by enforcing security policies that require 2FA.
- Enables secure onboarding of collaborators to a team
- Eliminates the painful policy for periodic password reset

#### Resources
- [Documentation](/security/two-factor-authentication.md)
- [Video demo](https://www.dropbox.com/s/7dyi467bsl3aw7v/2FA%20Tutorial%20-%20V02.mp4?dl=0-)

___

## Connector update: Zendesk Sunshine
###### Jun 03, 2019

#### Introduction to Zendesk Sunshine
- [Zendesk Sunshine](https://www.zendesk.com/platform/) is an open, flexible CRM platform. Sunshine is built on AWS and lets customers seamlessly connect and understand all their customer data--wherever it lives.
- With Zendesk Sunshine, customers can build entirely custom applications that help go beyond customer support
- Zendesk Sunshine introduced Custom objects and relationships to store custom entities like products, subscriptions - that are unique to each customer/business.

#### How it works

Workato is the first, and currently the only integration platform to support Zendesk Sunshine. The Zendesk connector has been updated to support actions for newly introduced Zendesk Sunshine objects and APIs:

**Custom Objects:**
- Create custom object record
- Update custom object record
- Get custom object record by ID
- Get list of custom object records by external ID
- Delete custom object record

**Custom relationship**
- Create relationship record
- Get related records
- Delete Relationship Record

#### Resources:
- [Overview](https://www.workato.com/integrations/zendesk)

___

## Webhooks wizard
###### Jun 03, 2019

#### Background: Why webhooks?
Webhooks is part of a larger platform offering: custom connectivity. While we have a strong list of triggers out of the box, user data shows that 44% of our users require custom connectivity to some extent. It is typically used to connect to proprietary or legacy apps.

Users use need webhooks for time-sensitive use cases. These use cases require real-time triggering of workflows like requesting an outbound call to a lead downloading the company ebook.

#### For Whom
- Users looking to build recipes with real-time triggers
- Available to all plans

#### Why we built it
Webhooks has been a key part of many customer use cases. In the last year alone, Workato saw more than 2.5x increase in the number of recipes using webhook triggers to enable real-time automation. This trend is expected to continue increasing exponentially. We want to make the user experience for this popular trigger the best out there.

#### How it works
This wizard takes the user through a guided flow to test and verify a webhook trigger. We take the information from this test to configure the metadata automatically.

#### What problems does it solve for you
Unlike other products in the iPaaS space, building a webhooks trigger can now take less than 5 mins (down from 15-30 minutes). Often, users will need to switch back and forth between the recipe and their app.
Additionally, users need to learn/understand the webhooks metadata - what the webhook schema looks like, which HTTP method and data type to expect.
Lastly, it is difficult to verify that a webhook trigger is configured correctly. Users needed to do end-to-end tests with active recipes.

1. Simplify UX - users can verify if the webhook trigger works immediately.
2. Reduce skill barrier and human error - wizard detects key information  and uses it to configure the trigger automatically.

#### Resources
- [Documentation](/connectors/workato-webhooks.md)
- [Common errors and how to resolve them](/connectors/workato-webhooks/common-errors.md)

___

## New connector: Airtable
###### May 26, 2019

#### For Whom
- Customers looking to connect Airtable to enterprise business system apps - Salesforce, ServiceNow, Workday, Netsuite, ERPs, Databases, and more
- Customers looking to automate employee/customer/partner onboarding campaign/event/project management workflows, and more
- Available for Business and above plans

#### How it works
The Airtable Connector provides:

- Polling Triggers -  Access to new records in base, table, and view
- Actions - To create/update records, search records
- Custom Actions - To extend the functionality of the connector
- Time Machine- Access to current and historical data

#### Why it is useful
- Addresses key LOB automations - Enables marketing, sales, finance, HR, and other business teams to create automations connecting enterprise apps
- Connects business and technology teams - HR,Marketing, Sales, Finance teams can easily create and track requests for IT and engineering teams

#### Resources
- [Overview](https://www.workato.com/integrations/airtable)

___

## New connector: Coupa
###### May 19, 2019

#### For Whom
- Customers looking to connect Coupa to ERP, invoicing, order management, contract management, travel & expense management, CRM, Identity managment, enterprise content sharing appps, and more
- Customers looking to automate procure-to-pay, record-to-reports, expense management, procurement approval, and other processes
- Available for Business and above plans

#### How it works
The Coupa Connector provides:

- Polling Triggers - For major standard objects e.g. Account, Address, Contract, Expense Report, Lookup Value, Inventory Transaction, Supplier, and more
- Actions - To create/update standard objects, close purchase order, Get Object id, Search objects, and more
- Custom Actions - To extend the functionality of the connector
- Custom Fields- Access to standard and custom fields for various objects

#### Why it is useful
- Addresses key finance automations - Enables customers to automate key financial processes e.g. procure-to-pay, record-to-report, spend and expense management, source-to-pay, and more
- Increases value and usage of Coupa - Connects Coupa to all corners of the business i.e. finance, IT, HR, Marketing, Sales, Support

#### Example recipes
- [Manage Procure To Pay integrations between Coupa and your ERP](https://product.workato.com/2019/05/10/automating-procure-to-pay-by-connecting-coupa-to-netsuite/)
- [Manage Procure To Order integrations between Coupa and your ERP](https://product.workato.com/2019/05/10/coupa-integrations-with-netsuite-powered-by-workato-expense-management/)
- [Manage Expense Management integrations between Coupa and your ERP](https://product.workato.com/2019/05/10/coupa-integrations-with-netsuite-powered-by-workato-expense-management/)
- [Sync Supplier data from your ERP to Coupa](https://www.workato.com/recipes/929986-sync-supplier-data-from-netsuite-to-coupa)
- [Sync invoice data from Coupa to your ERP](https://www.workato.com/recipes/930010-invoice-approval-in-coupa-updates-netsuite)
- [Sync purchase order data from Coupa to your ERP](https://www.workato.com/recipes/930615-new-updated-purchase-order-in-coupa-creates-updates-purchase-order-in-netsuite)
- [Close purchase orders in Coupa](https://www.workato.com/recipes/930619-vendor-payment-in-netsuite-closes-purchase-order-in-coupa)
- [Sync expense reports data in Expensify and Coupa](https://www.workato.com/recipes/930715-new-expense-report-in-expensify-creates-new-expense-report-in-coupa#settings)

#### Resources
- [Overview](https://www.workato.com/integrations/coupa)
- [Product Blog](https://product.workato.com/2019/05/10/extending-coupa-with-workato/)  
- [Coupa Link](https://www.coupa.com/coupalink/middleware/workato/)

___

## API Platform with JWT authentication
###### May 12, 2019

#### For Whom
- Customers looking to expose internal business processes, and data to be accessed from portals, widgets in SaaS apps, and other internal service
- Customers looking to expose business processes, and data for external partners to consume
- Add-on for Business Plus and above plans

#### Why we built it
- Customers expect API management capabilities when purchasing iPaaS
- Digital businesses need APIs for agility to improve time-to-market, reduce cost of change, and solve a diverse set of use cases
- Increase the publishing and consumption of APIs by reducing the skill and cost barriers

#### How it works
API platform provides the following:

- *RESTful API Endpoints* - expose callable recipes as RESTFUL endpoints
- *API access control* - JWT and auth token based authentication; IP whitelisting
- *API Collections & Policies* - Purpose specific API groups; rate and usage metering for QoS
- *Dashboard & Activity* - Real-time monitoring of usage and health

#### Why is it useful
- *Create New Experiences* - Access to data & services through mobile apps, portals, widgets, bots, and other interfaces
- *Improve security and compliance* - Share data without direct access to underlying apps and systems
- *Increase reuse to reduce cost* - Create reusable components that can be shared to reduce dev costs

#### Competitive Advantages
- *Reduced skill barrier*  -  business analysts, App admins, and non-developer personas can publish & consume
- *Reduced costs* - lower development & maintenance costs; lower operations cost; zero DevOps
- *Faster time to value* - faster development cycles; rapid iterations for adapting to changing requirements
- *Rapid adoption at scale* - enables more roles in the enterprise to participate in the digital transformation

#### Resources
- [Product Hour](https://resources.workato.com/product-hour/api-management-with-workato-jan-17/)
- [Product Blog post](https://product.workato.com/2019/02/08/feb-2019-product-release-api-platform-update/)
- [Documentation](/api-mgmt/access-tokens.md)

___

## Automation Dashboard And Job History Search
###### May 05, 2019

#### For Whom
- Customers looking to monitor mission and business critical automations
- Operators/Admins responsible for triaging/resolving issues quickly for SLA
- All plans

#### Challenges Addressed
- Elimination of manual steps to analyze and discover issues across all recipes in an account
- Lack of visibility into historical trends in jobs processed/failed to analyze health of all recipes in an account.
- Extremely time consuming manual process of reviewing log for each job run for auditing and triaging issues. Unsustainable for recipes with 100s of jobs.

#### How it works
Users have instant visibility into the health of recipes, connections, OPA, jobs from a single view- Automation Dashboard.

- Real-time visualization of data pertaining to recipes, connections, etc.
- Target issues that matter with filters to drill down to details of specific time periods, folders, recipe status
- Manage and fix errors that need immediate attention
- Google like search using keywords across all job history data

#### Why is it useful
- Faster discovery and resolution of issues increases uptime & improves SLA
- Significant savings in time and effort in monitoring all recipes for an account
- Unprecedented access to audit, troubleshoot and resolve issues to improve data quality & integrity

#### Competitive Advantage
For other iPaaS vendors:

- Dashboards provide operational insights using technical data vis-a-vis CPU, memory and I/O utilization & performance, and aggregated job run stats - requiring users to manually analyze and discover issues.
- Accessing and querying job history data/logs when available would require custom tooling or 3rd party tools.

#### Resources
- [Demo](https://www.youtube.com/watch?v=L3eY4EPCgLY)
- [Product Hour](https://resources.workato.com/product-hour/autonomous-operations-mar-28/)
- [Product Blog post](https://product.workato.com/2019/04/09/apr-2019-product-release/)

___

## Recipe Lifecycle Management automation with Manifests and APIs
###### Apr 28, 2019

#### For Whom
- Enterprise Customers
- Multiple Environments/Accounts (Dev/Test/Production)
- Available for Business Plus and above plans

#### Challenges Addressed
- Automation of delivery cycles - from build/change, to testing to deployment to reduce error rates and increase speed of delivery for business
- Elimination of manual steps to create and move packages (recipes & dependencies) across environments
Support integration with external version control software and  deployment automation

#### How it works
Users can create manifests- a record of all assets (recipes & dependencies) that is  included in the package.

- Manifests eliminate manual selection to ensure consistency in export of recipes & dependencies
- Automated tracking and auditability of package changes to reduce errors
- Additionally, APIs available to export and import packages help with deployment automation

#### Why is it useful
- Faster recipe deployment cycles with less effort
- Reduced errors when deploying mission critical automations in production
- Improved visibility and consistency across the development lifecycle

#### Resources
- [Docs](/recipe-development-lifecycle.md)
- [Best Practices](/recipe-development-lifecycle.md)
