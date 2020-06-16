---
title: Jobs
date: 2017-03-23 14:00:00 Z
---

# Jobs
When an active recipe processes a trigger event and run the sequence of actions, as defined in the recipe logic, it creates a **job**. Each job holds a unique trigger event and executes its recipe logic based on that data (e.g. running `If..Then` action based on the availability the data).

Workato provides complete details into the execution flow of a job, i.e. what steps were executed, and the data input and output from every step. Workato also supports rerunning of jobs, in cases whereby an error stops a job from full completion.

## Jobs report
The jobs report is a record of all processed jobs. For each processed job, you can view complete details i.e. execution flow, data input/output from every step.

Information such as date, time processed and job IDs, can be found here. The following shows the default jobs report page.

Jobs report will only retain data for a limited duration corresponding to your account's data retention policy. Find out more [here](https://www.workato.com/users/current/edit#data_retention).

![Default jobs report](~@img/job-details/default-jobs-report.png)
*Default jobs report page*

### Custom report
The jobs report can be further customized to show any data available in the recipe, e.g. if processing invoices, your job report can have Invoice ID, Invoice amount, etc. Below, as the recipe is retrieving details about a Zendesk ticket, the relevant IDs and names are reflected in the custom jobs report.

![Custom jobs report](~@img/job-details/custom-jobs-report.png)
*Customized jobs report page*

To create a custom jobs report, click on the 'Customize report' tab. You can only create custom jobs report when the recipe is not active. If you want to edit an active recipe, select **stop recipe** before creating the custom report. Remember to select **start recipe** after you are done with the configuration.

![Customize report tab](~@img/job-details/customize-report-button.png)
*Customize report tab*

You can use datapills from any data tree in your recipe for the column values. In the example below, the custom jobs report contains the Salesforce name and Salesforce IDn.

![Customize report popup](~@img/job-details/customize-report-popup.png)
*Customization of jobs report*

## Job details
The job details page shows the input data and output data of each step in the recipe, allowing you to inspect the job and debug it if needed.

Each job details page includes:
- **Job Metadata**
The top part of the page holds the job metadata - job ID, repeat # (the rerun number of this job), the recipe version that the job was carried out on, the [status of this job](#job-status) etc.

- **Job step details**
The bottom part of the page holds the execution details of the job. Expand the steps to view the input and output data.

![Job details page](~@img/job-details/job-details-overview.png)
*Job details page*

To view job details, simply click on the job you are interested in seeing. This brings you into the job details screen, where the sequence of actions carried out by the job is listed in detail.

![Getting to job details page](~@img/job-details/clicking-through-to-job-details.png)
*Getting to job details page*

From the job details screen, you can view detailed information about each job as well as step-level information. This is useful in several ways:

- Debugging your recipe

During testing, jobs may show up as completed in the jobs report, but they might not be processed in the manner you expect - taking a look at the exact steps processed by the recipe will help in ensuring the recipe is processing jobs in the expected manner.

- Troubleshooting your job errors

If jobs fail, you can take a look at the run-time data to understand why the job failed at a [specific step](#errors).

### Job status
Jobs can have the following statuses:

| Status    | Description |
| --------- | ----------- |
| Completed | This indicates that the job was processed successfully. |
| Failed    | This indicates that the job ended because of an [error](#errors). Errors can generally be attributed to failures in executing actions. e.g. an app was not reachable, or a contact being added already exists, etc.<br><br>When an error is encountered, job execution stops i.e. downstream steps are not executed. Such jobs may create incomplete records in your apps as it failed before finishing all steps. |
| Processing   | This indicates that the job is still being processed. |
| Paused   | Paused jobs indicate that the job containing [long actions](cancel-job.md#long-actions) was paused when the recipe was stopped |
| Aborted   | This is a rare state that a job can get into if it has pending jobs and the recipe has been affected in a manner that these pending jobs cannot finish processing. |

### Paused jobs
Recipes containing [long actions](cancel-job.md#long-actions) may run for a while, upto minutes and hours, depending on the recipe. When a user stops a recipe, the jobs that are in the processing state are `paused`. Paused jobs resume when the recipe is restarted.
![Pause jobs](~@img/job-details/pause-jobs-at-recipe-stop.png)
*Pause jobs*

If the recipe is edited and saved, the recipe will be on a new version. The paused jobs are resumed with the **same** recipe version with which it was first started. In this example, the job started with recipe version 1. It will resume and complete after recipe modifications and restart with the recipe version 1 with which it was started.
![Resume jobs](~@img/job-details/resume-job-after-restart.png)
*Resume jobs*

After recipe restart, new jobs are executed using the new version of the recipe. In this example, the new job has started with the recipe version 3.
![New jobs](~@img/job-details/new-jobs-after-restart.png)
*New jobs*

### Errors
If your job encounters an error and stops processing before it should, the job details page will indicate the failed step. Expand it to view the details.

![Job error](~@img/job-details/job-error.png)
*Job error*

In addition, to quickly view errors from the jobs report page, hover on the job and a popup will appear with the error details.

![Error popup](~@img/job-details/error-popup.png)
*Error popup on hover*

### Conditional step
When conditional actions are expanded, there is a single "Output" tab. This shows whether the condition evaluated to true or false. If true, the nested actions take place. If false, the nested actions do not take place, and the recipe proceeds to the next possible action.

In the following example, we see that the conditional action in step 4 was evaluated as false. In this case, step 5 was not carried out as `Condition was not met`. However, step 6 was evaluated as true. Subsequently, step 7 was executed and its action details can be retrieved.

![Conditional action](~@img/job-details/conditional-action-job-details.png)
*Job details for recipe with conditional action*

### Repeat step
Repeat steps will not display steps made during all iterations. For example, if your foreach step processed a list with 10 items, only the last (tenth) item will show up in the job details page.

Similarly, when an error occurs within a repeat step, the job details will show only the steps carried out in that particular iteration, and not any other iteration before that.

![Error within repeat step](~@img/job-details/error-in-repeat-step.png)
*Error within repeat step*

## Rerun jobs
Any job (completed, failed, etc.) can be rerun. Workato stores the data of the trigger event, and reruns jobs using this copy of the trigger event.

Rerun of a job will always use the latest version of the recipe. i.e. if the recipe has been modified since the job ran, rerun will use the most recent version.

You can find out more about job reruns [here](rerun-job.md).

## Timeouts
If a job or a single step is taking too long to execute, it will time out. The current limit is 90 seconds for a single step, and 90 minutes for a single job. The error message for a job that times out will explicitly mention the reason.

In these cases, you might have to further optimize your recipe to ensure that they don't hit this time limit.
