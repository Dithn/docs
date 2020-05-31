---
title: Workato connectors - SQL Server Insert actions
date: 2018-02-02 06:10:00 Z
---

# SQL Server - Insert actions
Workato offers both batch and single insert row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our [best practices on whether to use batch or single insert actions](/connectors/mssql/best-practices.md#when-to-use-batch-of-rows-triggers-actions-vs-single-row-triggers-actions) and [when to use insert, update or update](/connectors/mssql/best-practices.md#when-to-use-update-insert-and-upsert-actions).

> Errors raised in a step after an `insert row` action has been executed during a job run will result in another insert if the job is repeated. Consider using upserts that prevent inserting multiple rows into your database tables by deduping them on a key

## Insert row
This action inserts a single row into the selected table.

![Insert row action](~@img/mssql/insert-row-action.png)
<center><i>Insert row action</i></center>

### Table/view
First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Columns
Next, enter data manually into the input fields or map the datapills from your previous triggers or actions into their respective columns. The input fields generated here are based off columns in your table.

## Insert batch of rows
This action allows you to insert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to SQL Server. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.

![Insert batch of rows action](~@img/mssql/insert-rows-batch-action.png)
<center><i>Insert batch of rows action*</i></center>

### Table
Just like with the single row insert action, you need to select the target table first.

### Rows source list
Unlike the **Insert row** action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the *source* of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.

![A list datapill from the datatree](~@img/mssql/list_datapill_in_output_tree.png)
<center><i>A list datapill from the datatree*</i></center>

If you do not map a list datapill to this field, this action will insert only 1 row and will behave like the **Insert row** action.

### Columns
Finally, you will need to map the required fields from the output datatree here to insert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.

Refer to the [List management](/features/list-management.md) guide for more information about working with batches.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/mssql/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Scheduled query trigger](/connectors/mssql/scheduled-query-trigger.md)
  * [Select actions](/connectors/mssql/select.md)
  * [Update actions](/connectors/mssql/update.md)
  * [Upsert actions](/connectors/mssql/upsert.md)
  * [Delete actions](/connectors/mssql/delete.md)
  * [Run custom SQL action](/connectors/mssql/run_sql.md)
  * [Execute stored procedure](/connectors/mssql/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
