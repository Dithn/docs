---
title: Workato connectors - SQL Server Scheduled query trigger
date: 2022-05-04 06:00:00 Z
---

# SQL Server - Scheduled query trigger

## Scheduled query trigger
This trigger will execute a SQL query at a user-defined schedule. The returned rows will be processed in batches. The maximum batch size is **1000** rows.

![Scheduled query trigger](~@img/mssql/scheduled-query-trigger.png)
*Scheduled query trigger*

| Input field | Description |
| ----------- | ----------- |
| SQL         | Provide a valid SQL string to be executed. This SQL string will be executed in your SQL Server instance. |
| Indexed unique key | Select a unique key column to uniquely identify rows. This list of columns will be generated from the SQL query above. Learn more [here](/connectors/mssql/introduction.md#unique-keys). |
| Batch size  | Configure the batch size for this trigger. The maximum batch size is **1000** and the default is **100**. If there are fewer rows than the configured batch size, this trigger will deliver all rows as a smaller batch.|
| Trigger on  | Select the schedule configuration. Choose from **Specfic interval** or **Specific date/time**. |
| Schedule settings | Specify how often this SQL query will be run. |
| Output fields | You can manually configure the output for this SQL query with this step. If left blank, the output schema will be detected automatically. |

## Output field

This trigger will return rows in batches. Learn more about how to work with batches of rows [here](/connectors/mssql/introduction.md#using-single-row-actions-triggers-vs-using-batch-of-rows-actions-triggers).

## Next steps

Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/mssql/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Select actions](/connectors/mssql/select.md)
  * [Insert actions](/connectors/mssql/insert.md)
  * [Update actions](/connectors/mssql/update.md)
  * [Upsert actions](/connectors/mssql/upsert.md)
  * [Delete actions](/connectors/mssql/delete.md)
  * [Run custom SQL action](/connectors/mssql/run_sql.md)
  * [Execute stored procedure](/connectors/mssql/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
