---
title: Salesforce Approvals
date: 2020-05-04 06:15:00 Z
---

# Salesforce approval process

The Salesforce approval process is an automated combination of steps for a Salesforce record to be approved and the steps to take when a record is rejected.

Approval steps define the chain of approval for a particular approval process. Each step determines which records can advance to that step, who to assign approval requests to, and whether to let each approver’s delegate respond to the requests.

In an approval process, you usually specify:

- The **steps** necessary for a record to be approved and **who** approves it at each step:
  - When the record is first submitted for approval
  - The record is approved
  - The record is rejected
  - The record is recalled
- The actions to take based on what happens during the approval process

With Workato's Salesforce connector, users can choose to automate the steps of **approving**, **rejecting** and **submitting a record for approval** with these actions:

1. Approve record in an approval process
2. Reject record in an approval process
3. Submit record for approval

## Building an approval process
If you are unfamiliar with Salesforce approvals, learn how to build an approval process from start to finish from Salesforce documentation [here](https://trailhead.salesforce.com/en/content/learn/modules/business_process_automation/approvals) and [here](https://help.salesforce.com/articleView?id=approvals_getting_started.htm&type=5).

In the examples below, we will be approving or rejecting a request for a Discount rate above 10% on an Invoice. `Discount` is a custom field created on the Invoice object (custom object) for this demonstration.

The following image shows the configured approval process in Salesforce:

![Setting up a Salesforce approval](~@img/salesforce-docs/approval-setup.png)
*Setting up a Salesforce approval*

Please note that approval processes must be activated before they can be used in a Workato recipe. 

### Who can approve requests?
Any of the following can approve or reject a request.
- A user or queue that the approval request submitter chooses.
- A queue specified by the administrator.
- A user listed in the Manager standard field on the submitter’s user detail page.
- A user listed in a custom hierarchy field on the submitter’s user detail page.
- Any combination of users and related users (users listed in a standard or custom field on the submitted record) specified by the administrator.


## Submit record for approval
This action does the equivalent of clicking on the 'Submit for approval' button on a Salesforce record. Doing this via a Workato recipe automates this manual click.

This action requires the following inputs:

| Input field | Description |
|------------------|-------------|
| Approval process | Select a approval process from the dropdown or provide the unique name (eg. `Invoice_discount_approval`) or ID (eg. `04a1K000000PnvP`) of the process. </br> The unique name and ID are available on the Approval process page. |
| Record ID | ID of the record to be submitted for approval. This will usually be a datapill from a previous step where a Salesforce record is created or updated. |
| Approver ID | This is required if the process is not auto-approved and if the approver is not selected by default. |
| Submitter ID | The ID of the user who is submitting this record for approval. |
| Comments | Comments to include with the submission. |

After the record has been successfully submitted, it should be updated with Approval History in the 'Pending' state.

![Setting up a Salesforce approval](~@img/salesforce-docs/approval-submitted.png)
*An Invoice record submitted for approval*

## Approve record in an approval process
This action approves the record and all approval steps defined in the approval process are triggered. This could include the record getting locked, field updates, an outbound message or an email alert being sent out.

If the approval steps automatically sends the record through the 'Final approval actions', these steps will also be performed.

The 'Approve record' and 'Reject record' actions should be used in the logic flow of your recipe where conditions are defined for approval and rejection accordingly.

This action requires the following inputs:

| Input field | Description |
|------------------|-------------|
| Record ID & approval process ID OR Approval request ID | If one of the previous steps in the recipe submits the record for approval, users may simply use the `Approval request ID`. </br> Otherwise, specify the record ID of the record and the approval process. |
| Comments | Comments to include with the approval. |


## Reject record in an approval process
This action rejects the record and all rejection steps defined in the approval process are triggered. This could include the record getting locked, field updates, an outbound message or an email alert being sent out.

If the rejection steps automatically sends the record through the 'Final rejection actions', these steps will also be performed.

The 'Approve record' and 'Reject record' actions should be used in the logic flow of your recipe where conditions are defined for approval and rejection accordingly.

This action requires the following inputs:

| Input field | Description |
|------------------|-------------|
| Record ID & approval process ID OR Approval request ID | If one of the previous steps in the recipe submits the record for approval, users may simply use the `Approval request ID`. </br> Otherwise, specify the record ID of the record and the approval process. |
| Comments | Comments to include with the approval. |
