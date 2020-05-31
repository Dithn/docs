---
title: Workato connectors - SQL Server Execute stored procedure actions
date: 2018-03-19 06:00:00 Z
---

# SQL Server - Execute stored procedure action

## Execute stored procedure
This action lets you execute any stored procedure or functions saved in your database instance. Stored procedures are user defined processes written directly into your database. They can be written to accept input parameters and perform actions on these input parameters. Workato's `Execute stored procedure` action is able to pick up on parameter inputs and allows you to dynamically input these parameters directly from your workflow.

Using stored procedures are a great way to improve recipe efficiency and balance load between Workato and your database. [Find out more in our best practices section how to use stored procedures to make your recipes more efficient.](/connectors/mssql/best-practices.md#when-to-use-custom-sql-and-stored-procedures-in-workato)

## Supported versions
This action is only supported for SQL Server 2012 or newer. It uses a default stored procedure `sp_describe_first_result_set` that is only available from SQL Server 2012 onwards.

![Execute stored procedure rows action](~@img/mssql/stored-procedure.png)
*Execute stored procedure rows action*

### Stored procedure
First, select a stored procedure to execute. This can be done either by selecting from the pick list, or toggling the input to text mode and providing the full stored procedure name.

### Input parameters
Next, provide any input parameters required for the selected stored procedure.

### Output
If the selected stored procedures outputs multiple datasets, only the first will be returned in this action. The returned dataset size is limited to 100 rows.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/mssql/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Scheduled query trigger](/connectors/mssql/scheduled-query-trigger.md)
  * [Select actions](/connectors/mssql/select.md)
  * [Insert actions](/connectors/mssql/insert.md)
  * [Update actions](/connectors/mssql/update.md)
  * [Upsert actions](/connectors/mssql/upsert.md)
  * [Delete actions](/connectors/mssql/delete.md)
  * [Run custom SQL action](/connectors/mssql/run_sql.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
