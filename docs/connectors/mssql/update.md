---
title: Workato connectors - SQL Server Update actions
date: 2018-02-02 06:10:00 Z
---

# SQL Server - Update actions
Workato offers both batch and single update row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our [best practices on whether to use batch or single insert actions](/connectors/mssql/best-practices.md#when-to-use-batch-of-rows-triggers-actions-vs-single-row-triggers-actions) and [when to use insert, update or update](/connectors/mssql/best-practices.md#when-to-use-update-insert-and-upsert-actions).

## Update rows
This action updates one or more rows with a single set of values. It uses a `WHERE` condition to select the row(s) to perform the update.

![Update row(s) action](~@img/mssql/update-row-action.png)
*Update row(s) action*

### Table
First, select a table to update. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be updated. This condition can be as simple as filtering a single record to update based on `ID`.

```sql
ID = 123
```

Alternatively, it can be used to select and update multiple rows.

```sql
status = 'closed'
```

Take note that all rows matching this criteria will be updated with the same values provided in **Columns** input.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mssql/introduction.md#using-where-conditions) guide for more information.

### Columns
Lastly, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to insert datapills.

## Update batch of rows
This action allows you to update multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to SQL Server. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.

![Update batch of rows action](~@img/mssql/update-rows-batch-action.png)
*Update batch of rows action*

### Table
Just like with the single row update action, you need to select the target table first.

### Rows source list
Unlike the **Update row** action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the *source* of the batch of rows to update in the table. This can come from any trigger or action that outputs a list datapill.

![A list datapill from the datatree](~@img/mssql/list_datapill_in_output_tree.png)
*A list datapill from the datatree*

If you do not map a list datapill to this field, this action will update only 1 row and will behave like the **Update row** action.

### Columns
Finally, you will need to map the required fields from the output datatree here to update rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.

Refer to the [List management](/features/list-management.md) guide for more information about working with batches.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/mssql/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Scheduled query trigger](/connectors/mssql/scheduled-query-trigger.md)
  * [Select actions](/connectors/mssql/select.md)
  * [Insert actions](/connectors/mssql/insert.md)
  * [Upsert actions](/connectors/mssql/upsert.md)
  * [Delete actions](/connectors/mssql/delete.md)
  * [Run custom SQL action](/connectors/mssql/run_sql.md)
  * [Execute stored procedure](/connectors/mssql/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
