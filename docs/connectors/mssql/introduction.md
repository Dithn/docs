---
title: Workato connectors - Introduction
date: 2018-03-13 12:40:00 Z
---
# SQL Server
[SQL Server](https://www.microsoft.com/en-us/sql-server/) is a relational database management system by Microsoft. It supports transactional processes, business intelligence and analytics applications for enterprises. Workato's integrations with SQL server help you to accomplish a wide range of tasks such as migrating data, building data pipelines to data warehouses and lakes, backing up data automatically or transforming and exporting data to build complex workflows. Find out how to set up connections to your SQL server from Workato and how Workato can work with SQL server to fulfill your business needs.

## Supported versions
All versions of SQL Server are supported. However, some triggers/actions are restricted to newer versions. Refer to individual trigger/action documentation to find out.

## How to connect to SQL Server on Workato
The SQL Server connector uses basic authentication to authenticate with SQL Server.
![Configured SQL Server connection](~@img/mssql/connection.png)

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this SQL Server connection a unique name that identifies which SQL Server instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.html">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to SQL Server.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to SQL Server.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>URL of your hosted server.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>Port number that your server is running on, typically <b>3306</b>.</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>Name of the SQL Server database you wish to connect to.</td>
    </tr>
    <tr>
      <td>Advanced Settings</td>
      <td>Contains advanced connection settings such as improved datetime handling and ability to set database timezone.</td>
    </tr>
    <tr>
      <td>Azure SQL</td>
      <td>Choose 'Yes' if connecting to an Azure SQL instance.</td>
    </tr>
  </tbody>
</table>

### Improved datetime handling
The SQL Server connector now has the option to utilise improved handling of datetime, datetime2 and datetimeoffset datatype. This can be enabled in the connection settings of each SQL server connection. This defaults to `Yes` for all new connections and defaults to UTC timezones. Change this to the local timezone of your database if needed. This affects all actions that **insert rows** into SQL server.

![Advanced connection setting](~@img/mssql/advanced_date_time_handling.png)
<center><i>Configure this in the setting of your SQL server connection</i></center>

**Summary of behaviour**

| Datatype           | Workato input   | Improved datetime handling set to false/unselected | Improved datetime handling set to true |
|--------------------|-----------------|--------------------------------------------------------------------------------------|---------------------------------------------|
| datetime/datetime2 | Time with no timezone | Workato workspace timezone assumed. Converted to UTC before insertion. | No TZ assumed. Inserted as is.               |
| datetime/datetime2 | Time with timezone    | Converted to UTC before insertion.   | Converted to database timezone in connection setting timezone before insertion. |
| datetimeoffset     | Time with no timezone | Workato workspace timezone assumed. Converted to UTC before insertion with +00:00 tz | Inserted with +00:00 timezone assumed.       |
| datetimeoffset     | Time with timezone    | Converted to UTC before insertion with +00:00 timezone.  | Insert with given timezone .                 |

::: warning Note
When using the calendar datepicker for datetime/datetime2/datetimeoffset fields, times are defined using your Workato workspace timezone.
:::

### Permissions required to connect

At minimum, the database user account must be granted `SELECT` permission to the database specified in the [connection](#how-to-connect-to-sql-server-on-workato). Check out the example below to find out more about how to set permissions if you are the one setting up the SQL server connection for your business.

> <details><summary><b>Click here to find out how to set up permissions</b></summary>
>
> If we are trying to connect to a named database (<kbd>HR_PROD</kbd>) in a SQL Server instance, using a new database user <kbd>workato</kbd>, the following example queries can be used.
>
> First, create a new login and user dedicated to integration use cases with Workato.
> <pre><code style="display: block; white-space: pre-wrap;">CREATE LOGIN workato WITH PASSWORD = 'password1234';
> USE HR_PROD;
> CREATE USER workato FOR LOGIN workato;
> </code></pre>
> Replace <kbd>password1234</kbd> with a secure password. Remember to set a password that you and others in your organisation can remember.
>
> This allows the user to have login access to the SQL Server instance. However, this user will not have access to any tables.
>
> The next step is to grant permission to the necessary tables. There are a few ways to do this. One of the simplest ways is to grant access based on a <b>ROLE</b>.
> <br><a href="https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-2017">Find out more about database-level roles here</a>
> <br>
> <pre><code style="display: block; white-space: pre-wrap;">ALTER ROLE db_datareader ADD MEMBER workato;
> </code></pre>
> Alternatively, we can grant access to all tables defined by a <b>SCHEMA</b>, <kbd>HR</kbd>.
>
> <pre><code style="display: block; white-space: pre-wrap;">GRANT SELECT,INSERT ON SCHEMA :: HR TO workato;
> </code></pre>
>
> To grant permissions only for certain tables, specify their table names separately and run this query.
> <pre><code style="display: block; white-space: pre-wrap;">GRANT SELECT,INSERT ON tablename1 TO workato;
> GRANT SELECT,INSERT ON tablename2 TO workato;
> </code></pre>
> Granting selective permission are useful for databases that have sensitive information. Only give Workato access to the tables that contain the information you need for recipes.
>
> Finally, check that this user has the necessary permissions. Run a query to see all permissions.
>
> <pre><code style="display: block; white-space: pre-wrap;">SELECT
>   pr.name,
>   pr.type_desc,
>   perm.permission_name,
>   perm.class_desc,
>   object_name(perm.major_id) AS "object",
>   schema_name(perm.major_id) AS "schema"
> FROM sys.database_principals pr
> LEFT JOIN sys.database_permissions perm ON perm.grantee_principal_id = pr.principal_id
> WHERE pr.name = 'workato';
> </code></pre>
>
> This should return the following minimum permission to create a SQL Server connection on Workato.
>
> <pre><code style="display: block; white-space: pre-wrap;">+---------+-----------+-----------------+------------+--------+-------------+
> | name    | type_desc | permission_name | class_desc | object | schema      |
> +---------+-----------+-----------------+------------+--------+-------------+
> | workato | SQL_USER  | CONNECT         | DATABASE   | NULL   | NULL        |
> | workato | SQL_USER  | INSERT          | SCHEMA     | NULL   | workatodemo |
> | workato | SQL_USER  | SELECT          | SCHEMA     | NULL   | workatodemo |
> +---------+-----------+-----------------+------------+--------+-------------+
> 3 rows in set (0.20 sec)
> </code></pre>
>
> </details>

## Working with the SQL Server connector

## Using tables, views and stored procedures

After successfully connecting to your SQL Server and selecting an action/trigger in your recipe, you will often be prompted to select either a table, view or stored procedure. This tells Workato which tables you want to pull or send data to.

### Tables & Views
The SQL Server connector works with all tables and views. These are available in pick lists in each trigger/action or you can provide the exact name. Views can be called using this as well and be used in the same way as a table.

<br>

![Table selection from pick list](~@img/mssql/table_pick_list.png)
<center><i>Select a table/view from pick list</i></center>

<br>

![Exact table name provided](~@img/mssql/table_name_text.png)
<center><i>Provide exact table/view name in a text field</i></center>

<br>

Case sensitivity of the name of a table/view depends on your database implementation. A default SQL Server is case insensitive. Databases or database objects with `CS` in the **COLLATION** indicates that it is case sensitive.

### Stored Procedures
Stored procedures are custom written SQL statements that are written and saved within your SQL server. They are able to do a range of functionalities including creating, reading, updating and deleting rows. They can also accept parameters. [Find out more about how Workato works with stored procedures.](/connectors/mssql/stored-procedure.md)

## Using `WHERE` conditions

This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [SQL Server documentation](https://docs.microsoft.com/en-us/sql/t-sql/queries/where-transact-sql) for a comprehensive list of rules for constructing `WHERE` statements. Below, we go through some of the basics needed to form your `WHERE` statements.

### Operators

At the foundation of any `WHERE` statement, we have operators that help us filter and identify what rows we want returned in Workato. By chaining operators in the same way you would do it in SQL, you'll be able to use them to create robust and complex filters on your data directly from Workato.

> <details><summary><b>Click here for a list of operators</b></summary>
>
> <table class="unchanged rich-diff-level-one">
>   <thead>
>     <tr>
>         <th>Operator</th>
>         <th width='40%'>Description</th>
>         <th width='40%'>Example</th>
>     </tr>
>   </thead>
>   <tbody>
>     <tr>
>       <td>=</td>
>       <td>Equal</td>
>       <td><code>WHERE ID = 445</code></td>
>     </tr>
>     <tr>
>       <td>
>         !=<br>
>         <>
>       </td>
>       <td>Not equal</td>
>       <td><code>WHERE ID <> 445</code></td>
>     </tr>
>     <tr>
>       <td>
>         &gt<br>
>         &gt=
>       </td>
>       <td>
>         Greater than<br>
>         Greater than or equal to
>       </td>
>       <td><code>WHERE PRICE > 10000</code></td>
>     </tr>
>     <tr>
>       <td>
>         &lt<br>
>         &lt=
>       </td>
>       <td>
>         Less than<br>
>         Less than or equal to
>       </td>
>       <td><code>WHERE PRICE > 10000</code></td>
>     </tr>
>     <tr>
>       <td>IN(...)</td>
>       <td>List of values</td>
>       <td><code>WHERE ID IN(445, 600, 783)</code></td>
>     </tr>
>     <tr>
>       <td>LIKE</td>
>       <td>Pattern matching with wildcard characters (<code>%</code> to represent zero or more characters and <code>&#95</code> to represent a single character)</td>
>       <td><code>WHERE EMAIL LIKE '%@workato.com'</code></td>
>     </tr>
>     <tr>
>       <td>BETWEEN</td>
>       <td>Retrieve values with a range</td>
>       <td><code>WHERE ID BETWEEN 445 AND 783</code></td>
>     </tr>
>     <tr>
>       <td>
>         IS NULL<br>
>         IS NOT NULL
>       </td>
>       <td>
>         NULL values check<br>
>         Non-NULL values check
>       </td>
>       <td><code>WHERE NAME IS NOT NULL</code></td>
>     </tr>
>     <tr>
>       <td>
>         AND
>       </td>
>       <td>
>         Requires both preceding and proceeding conditions to be fulfilled to be true
>       </td>
>       <td><code>WHERE ID = 445 AND NAME IS NOT NULL</code></td>
>     </tr>
>     <tr>
>       <td>
>         OR
>       </td>
>       <td>
>         Requires either the preceding and proceeding conditions to be fulfilled to be true
>       </td>
>       <td><code>WHERE ID = 445 OR NAME IS NOT NULL</code></td>
>     </tr>
>   </tbody>
> </table>
> <br>
> </details>

### Data types

The other component of a `WHERE` condition would be to use these operators in conjunction with the proper datatypes. When writing `WHERE` statements, make sure you compare a variable of `data type = integer` in your table with a  variable of `data type = integer` instead of `data type = string`.

Workato also helps to reveal the data types expected for each input field when you select
- **Update rows** actions
- **Upsert rows** actions

They appear directly below the output field, allowing you to know the expected data type to be sent while building the recipe. Use these hints to send the proper data types over to your SQL server as failing to do so might lead to unexpected behaviour or failed jobs.

<br>

![input field hints](~@img/mssql/Mssql-input-field-date-type.png)
<center><i>Hints below each input field inform you about the data type expected</i></center>

<br>

Here are some of the common data types you can expect to see. A more comprehensive list can be found [here](https://www.w3schools.com/sql/sql_datatypes.asp)

> <details><summary><b>Click here for a list of common data types</b></summary>
> <table class="unchanged rich-diff-level-one">
>   <thead>
>     <tr>
>         <th>Data type</th>
>         <th width='40%'>Description</th>
>         <th width='40%'>Example</th>
>     </tr>
>   </thead>
>   <tbody>
>     <tr>
>       <td>int</td>
>       <td>Allows whole numbers between -2,147,483,648 and 2,147,483,647</td>
>       <td><code>-100</code>,<code>1</code>,<code>30,000</code></td>
>     </tr>
>     <tr>
>       <td>decimal</td>
>       <td>Fixed precision and scale numbers that are exact. This is commonly used. Max length can be specified but defaults to </td>
>       <td><code>1.11</code>,<code>2.0761</code>,<code>1.61803398875</code></td>
>     </tr>
>     <tr>
>       <td>smallint</td>
>       <td>Allows whole numbers from 0 to 255</td>
>       <td><code>1</code>,<code>245</code>,<code>100</code></td>
>     </tr>
>     <tr>
>       <td>bigint</td>
>       <td>Allows whole numbers between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807</td>
>       <td><code>10,000,000,000</code></td>
>     </tr>
>     <tr>
>       <td>bit</td>
>       <td>Integer that can be 0, 1, or NULL</td>
>       <td><code>1</code>,<code>0</code>,<code>NULL</code></td>
>     </tr>
>     <tr>
>       <td>varchar(n)</td>
>       <td><b>Variable</b> width character string of length <code>n</code></td>
>       <td><code>Foo_bar</code></td>
>     </tr>
>     <tr>
>       <td>nchar(n)</td>
>       <td><b>Fixed</b> width character string of length <code>n</code></td>
>       <td><code>Foo</code> where n = 3</td>
>     </tr>
>     <tr>
>       <td>datetime</td>
>       <td>From January 1, 1753 to December 31, 9999 with an accuracy of 3.33 milliseconds</td>
>       <td><code>2011-09-16 13:23:18.767</code></td>
>     </tr>
>     <tr>
>       <td>datetime2</td>
>       <td>From January 1, 0001 to December 31, 9999 with an accuracy of 100 nanoseconds</td>
>       <td><code>2011-09-16 13:23:18.7676720</code></td>
>     </tr>
>     <tr>
>       <td>date</td>
>       <td>Store a date only. From January 1, 0001 to December 31, 9999</td>
>       <td><code>2012-10-11</code></td>
>     </tr>
>     <tr>
>       <td>time</td>
>       <td>Store a time only to an accuracy of 100 nanoseconds. Minimum length <code>hh:mm:ss</code> and maximum length <code>hh:mm:ss.nnnnnnnn</code></td>
>       <td><code>08:30:12</code>,<code>09:12:20.12898400</code></td>
>     </tr>
>   </tbody>
> </table>
> </details>

### Writing `WHERE` conditions

Now that we've gone through operators and data types, we are ready to write our `WHERE` conditions. String values must be enclosed in single quotes (`''`) and columns used must exist in the table/view.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that has the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

<br>

![Using datapills in WHERE condition](~@img/mssql/use_datapill_in_where.png)
<center><i>Using datapills in `WHERE` condition</i></center>

<br>

Column names with spaces must be enclosed in double quotes (`""`) or square brackets (`[]`). For example, **currency code** must to enclosed in brackets to be used as an identifier.

```sql
[currency code] = 'USD'
```

<br>

![WHERE condition with enclosed identifier](~@img/mssql/where-condition-with-enclosed-identifier.png)
<center><i>`WHERE` condition with enclosed identifier</i></center>

<br>

Click the tabs below for more details into the functionality you can explore with your `WHERE` conditions.

><details><summary>Using <code>AND</code> and <code>OR</code> in your <code>WHERE</code> conditions</summary>
><code>WHERE</code> conditions can also be used in conjunction with basic SQL logical operators like <code>AND</code> and <code>OR</code> to add more filters on the rows you return.
>
> <pre><code style="display: block; white-space: pre-wrap;">([currency code] = 'USD' AND totalAmt >1000) OR totalAmt>2000 </code></pre>
>
>When used together,  this <code>WHERE</code> condition will return all rows that either have the value 'USD' in the <code>currency code</code> column <code>AND</code> more than 1000 in the <code>totalAmt</code> column <code>OR</code> more than 2000 in the <code>totalAmt</code> column
>
></details>


><details><summary>Using sub-queries in your <code>WHERE</code> conditions</summary>
>
>Your <code>WHERE</code> condition can also contain subqueries. The following query can be used on the <code>compensation</code> table.
>
><pre><code style="display: block; white-space: pre-wrap;">id in (select compensation_id from users where active = 0)</code></pre>
>
>When used in a <b>Delete rows</b> action, this will delete all rows in the <code>compensation</code> table related to users who are no longer active (<code>active = 0</code>).
>
> <br>
>
> <img src="~@img/mssql/subquery-in-where-condition.png" alt="Using subquery in WHERE condition">
><center><i>Using subquery in WHERE condition</i></center>
>
></details>

## Configuring triggers

SQL Server connector has triggers for both new and updated rows. For the triggers to work, both **Unique keys** must be configured.**Sort columns** need to be configured for triggers that find recently updated rows.

A table must satisfy some constraints to be used in a trigger. The following sections contain more information about specific constraints. [Read our best practices to find out how you can prepare your table for use with Workato](/connectors/mssql/best-practices.md#designing-tables-for-use-in-workato).

### Unique keys
In all triggers and some actions, this is a required input. Values from this selected column are used to uniquely identify rows in the selected table. As such, the values in the selected column must be unique. Typically, this column is the **primary key** of the table (e.g. `ID`).

When used in a trigger, this column must be incremental. This constraint is required because the trigger uses values from this column to look for new rows. In each poll, the trigger queries for rows with a unique key value greater than the previous greatest value.

> <details><summary><b>Click here for a detailed example</b></summary>
> Let's use a simple example to illustrate this behavior. We have a <b>New row trigger</b> that processed rows from a table. The <b>unique key</b> configured for this trigger is <code>ID</code>. The last row processed has <code>100</code> as it's <code>ID</code> value. In the next poll, the trigger will use <code>>= 101</code> as the condition to look for new rows.
> Performance of a trigger can be improved if the column selected to be used as the <b>unique key</b> is indexed.
> </details>

### Sort column
This is required for **New/updated row triggers**. Values in this selected column are used to identify updated rows.

When a row is updated, the **Unique key** value remains the same. However, it should have it's **Sort column** updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected **Unique key** column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

For SQL Server, only **datetime2** and **datetime** column types can be used.

> <details><summary><b>Click here for a detailed example</b></summary>
> Let's use a simple example to illustrate this behavior. We have a <b>new/updated row trigger</b> that processed rows from a table. The <b>Unique key</b> and <b>Sort column</b> configured for this trigger is <code>ID</code> and <code>UPDATED_AT</code> respectively. The last row processed by the trigger has <code>ID</code> value of <code>100</code> and <code>UPDATED_AT</code> value of <code>2018-05-09 16:00:00.000000</code>. In the next poll, the trigger will query for new rows that satisfy either of the 2 conditions: <br>
> 1. <code>UPDATED_AT'2018-05-09 16:00:00.000000'</code> <br>
> 2. <code>ID</code> > 100 AND <code>UPDATED_AT = '2018-05-09 16:00:00.000000'</code>
> </details>

## Using single row actions/triggers vs using batch of rows actions/triggers
SQL Server connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size. Batch triggers and actions are great for jobs when you expect to read, create or update a large number of rows. Choosing to batch your job runs rather than having them split into separate jobs runs not only saves operations but [reduces recipe runtimes and decreases load on your servers](/features/batch-processing.md).

![Batch trigger inputs](~@img/mssql/batch_trigger_input.png)
<center><i>Batch trigger inputs</i></center>

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](~@img/mssql/single_row_trigger_output.png)
<center><i>Single row output</i></center>

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](~@img/mssql/batch_trigger_output.png)
<center><i>Batch trigger output</i></center>

As a result, the output of batch triggers/actions needs to be handled differently. This [recipe](https://www.workato.com/recipes/666198) uses a batch trigger for new rows in the `users` table. The output of the trigger is used in a Salesforce bulk upsert action that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](~@img/mssql/using_batch_output.png)
<center><i>Using batch trigger output</i></center>

Outputs from batch triggers/actions can also be used outside of actions that work specifically with lists. By using Workato's repeat step, you'll be able to control batch outputs and [use them with any action built for single rows.](/features/list-management.md#using-datapills-in-an-action-with-a-repeat-step-action-does-not-handle-list-processing-list-processing-needs-to-be-done-explicitly-at-the-recipe-logic-level).

> Unsure when to use batch actions and single row actions? [Check out our best practices section for recipe design tips!](/connectors/mssql/best-practices.md#when-to-use-batch-of-rows-triggers-actions-vs-single-row-triggers-actions)

## List of Workato triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [New row trigger](/connectors/mssql/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Scheduled query trigger](/connectors/mssql/scheduled-query-trigger.md)
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
