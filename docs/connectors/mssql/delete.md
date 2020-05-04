---
title: Workato connectors - SQL Server Delete actions
date: 2018-02-02 06:10:00 Z
---

# SQL Server - Delete actions

## Delete rows

This action lets you delete rows based on certain criteria defined by a ` WHERE` condition.

> **This action should be tested and used with care, as it will PERMANENTLY delete rows in your table. Testing should be done on a test database**

![Delete action](~@img/mssql/delete-rows-action.png)
<center><i>Delete rows action</i></center>

### Table
First, select a table to delete rows from. This can be done either by selecting a table from the pick list, or toggle the input to text mode and type the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be deleted. This condition can be as simple as filtering a single record to delete based on `ID`.

```sql
id = 5
```

Alternatively, it can be used to delete multiple rows.

```sql
status = 'closed'
```

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mssql/introduction.md#using-where-conditions) guide for more information.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/mssql/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Scheduled query trigger](/connectors/mssql/scheduled-query-trigger.md)
  * [Select actions](/connectors/mssql/select.md)
  * [Insert actions](/connectors/mssql/insert.md)
  * [Update actions](/connectors/mssql/update.md)
  * [Upsert actions](/connectors/mssql/upsert.md)
  * [Run custom SQL action](/connectors/mssql/run_sql.md)
  * [Execute stored procedure](/connectors/mssql/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
