---
title: Cancel job
date: 2020-04-03 21:01:00 Z
---

# Cancel job
Workato lets users cancel a running job. Running (or pending) status means the job is currently executing the actions defined in the recipe.

Oftentimes developers and operators may need to cancel a job in the processing status when:
- there’s a bug in the recipe
- a data issue
- wrong application sandbox is used
- the recipe may take a few minutes to an hour or more to complete

Recipes that execute bulk actions take minutes to hours to complete depending on the size of the data. Some examples are:
- Create/Update/Upsert records in bulk from CSV file in the `Salesforce` connector
- Add/Create in bulk in the `NetSuite` connector
- Bulk import leads from file in the `Marketo` connector
- `Wait` action in the `Scheduler` connector

You can cancel a job from the job details page. Simply click on the `Cancel job` button.

![Cancel a job from job details page](~@img/cancel-job/cancel-job.png)
*Cancel a job from job details page*

Before the job cancellation is complete, the job status will show as `Canceling`. The job status will be updated to `Canceled` once the cancellation is complete. The `Reason for cancel` in the job details page is updated to `Job canceled by user`.

![Reason for cancel](~@img/cancel-job/reason-for-cancel.png)
*Reason for cancel*

# Callable recipes
Canceling a parent recipe job generally will not cancel the callable recipes. If the callable recipe is called in an asynchronous mode then the called recipe job will run independently to completion.

# Long actions
Long actions are actions in the recipe that usually deals with handling bulk data. As such, these long actions take minutes to hours to complete depending on the size of the data. Developers and operators may find it useful to cancel a job when such long action steps are in the recipe. It is typically supported by the applications like Salesforce, Marketo, NetSuite and more. Here is list of long actions.

<table>
  <thead>
    <tr>
      <th width=25%>Connector</th>
      <th width=25%>Action</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=4><b>Anaplan</b></td>
      <td>Run data import</td>
      <td>Run a data import process in Anaplan</td>
    </tr>
    <tr>
      <td>Run data export</td>
      <td>Run a data export process in Anaplan</td>
    </tr>
    <tr>
      <td>Run deletion</td>
      <td>Run a delete action in Anaplan</td>
    </tr>
    <tr>
      <td>Run process</td>
      <td>Run a process in Anaplan</td>
    </tr>
    <tr>
      <td rowspan=1><b>Scheduler</b></td>
      <td>Wait</td>
      <td>Wait for specified length of time</td>
    </tr>
    <tr>
      <td rowspan=3><b>Marketo</b></td>
      <td>Bulk export leads to file</td>
      <td>Retrieve a list of Marketo leads as comma, tab or semi-colon separated values</td>
    </tr>
    <tr>
      <td>Bulk import leads from file</td>
      <td>Bulk import leads to Marketo from file</td>
    </tr>
    <tr>
      <td>Bulk export activities to file</td>
      <td>Retrieve a list of Marketo activities as comma, tab or semi-colon separated values</td>
    </tr>
    <tr>
      <td rowspan=1><b>NetSuite</b></td>
      <td>Add/Create in bulk</td>
      <td>Adds/creates in bulk in Netsuite</td>
    </tr>
    <tr>
      <td rowspan=1><b>QuickBooks</b></td>
      <td>Wait for paid invoice</td>
      <td>Wait for paid invoice on QuickBooks</td>
    </tr>
    <tr>
      <td rowspan=4><b>Salesforce</b></td>
      <td>Create/Update/Upsert records in bulk from CSV file</td>
      <td></td>
    </tr>
    <tr>
      <td>Create/Update/Upsert records in bulk from CSV file (API 1.0)</td>
      <td></td>
    </tr>
    <tr>
      <td>Retry bulk job for failed records from CSV file</td>
      <td>Retry bulk job in Salesforce for failed records</td>
    </tr>
    <tr>
      <td>Search records in bulk using SOQL</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan=1><b>SAP</b></td>
      <td>Send IDoc</td>
      <td>Send IDoc to SAP</td>
    </tr>
    <tr>
      <td rowspan=1><b>SurveyMonkey</b></td>
      <td>Send survey invite via email and wait for response</td>
      <td>Send survey invite via email and wait for response in SurveyMonkey</td>
    </tr>
    <tr>
      <td rowspan=1><b>People Task</b></td>
      <td>Request task approval</td>
      <td>Request approval via People Task</td>
    </tr>
    <tr>
      <td rowspan=3><b>Google BigQuery</b></td>
      <td>Insert rows</td>
      <td>Inserts rows in the selected table</td>
    </tr>
    <tr>
      <td>Select rows</td>
      <td>Select rows in a table in BigQuery</td>
    </tr>
    <tr>
      <td>Select rows using custom SQL</td>
      <td>Select rows using custom SQL in BigQuery</td>
    </tr>
    <tr>
      <td rowspan=1><b>Zendesk</b></td>
      <td>Create/update object/record. Bulk upsert</td>
      <td>Creates object or record if it doesn't exist otherwise update existing</td>
    </tr>
  </tbody>
</table>
