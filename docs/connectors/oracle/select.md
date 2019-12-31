---
title: Workato connectors - Oracle Select actions
date: 2018-03-19 06:00:00 Z
---

# Oracle - Select actions

## Select rows
This action lets you select rows based on certain criteria defined by a ` WHERE` condition. Rows from the selected table that match the `WHERE` condition will be returned as the output of this action.

![Select rows action](~@img/oracle/select-rows-action.png)
*Select rows action*

### Table/Views
First, select a table/view to work with. This can be done either by selecting a table or view from the pick list, or toggling the input to text mode and typing the full table name.

### WHERE condition
Next, provide a `WHERE` condition to filter rows. This condition can be as simple as filtering a single record by it's `ID`.

```sql
CUSTOMER_ID = 123
```

Alternatively, it can be used to select multiple rows based on values in one or more columns.

```sql
CUSTOMER_EMAIL = 'eeshan@workato.com' AND PRIORITY = 1
```

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/oracle/introduction.md#using-where-conditions) guide for more information.

### Order by
Rows returned from this action can be ordered based on the **Order by** input field. This field is used to change the default ordering of rows from your Oracle database.

You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by `priority` in ascending order followed by `created_date` in descending order (latest first).

```sql
CUSTOMER_ID DESC
```

### Limit
This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single **Select rows** action.

### Offset
This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input `100` to this field. The default is `0`.

## Select rows using custom SQL
This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action.

![Select rows using custom SQL action](~@img/oracle/custom-sql-action.png)
*Select rows using custom SQL action*

### SQL
Provide the SQL query to be executed to select rows. The query here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`). **Do not add a `;` at the end of your SQL query as this will cause the action to fail.**

Avoid using limit clauses like `ROWNUM` in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the [**Limit** input field](#limit). Adding your own limit clause will cause the action to fail.

### Limit
This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single **Select rows using custom SQL** action.

If this field is left blank, `ROWNUM <= 100` will be used.

## List of Workato triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [New row trigger](/connectors/oracle/new-row-trigger.md)
  * [New/updated row trigger](/connectors/oracle/updated-row-trigger.md)
  * [Insert actions](/connectors/oracle/insert.md)
  * [Update actions](/connectors/oracle/update.md)
  * [Upsert actions](/connectors/oracle/upsert.md)
  * [Delete actions](/connectors/oracle/delete.md)
  * [Run custom SQL action](/connectors/oracle/run_sql.md)
  * [Execute stored procedure](/connectors/oracle/stored-procedure.md)

  Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/oracle/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
