---
title: Workato connectors - SQL Server Run custom SQL action
date: 2018-09-20 06:10:00 Z
---

# SQL Server - Run custom SQL action

## Run custom SQL

This action lets you send a SQL string to the SQL Server instance to be executed. It can be used to execute Data Manipulation Language (DML) statements like `INSERT`, `UPDATE`, `SELECT` and `DELETE`, as well as Data Definition Language (DDL) commands, like `CREATE`, `ALTER` and `DROP`.

Unlike [Select rows using custom SQL](/connectors/mssql/select.md#select-rows-using-custom-sql), this action is not optimized for easy configuration. For `SELECT` statements with large number of columns, use that action instead. Using custom SQL is a great way to improve recipe efficiency and balance load between Workato and your database. [Find out more in our best practices section how to use custom SQL to make your recipes more efficient.](/connectors/mssql/best-practices.md#when-to-use-custom-sql-and-stored-procedures-in-workato)

**This action requires a connection using OPA version 2.4.3 or newer.**

![Run custom SQL action](~@img/mssql/run_sql.png)
*Run custom SQL action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SQL</td>
      <td>
        <p><b>This field is required</b>. Provide a valid SQL string to be executed. This SQL string will be executed in your SQL Server instance.</p>
        <p>If multiple SQL statements are provided, all of them will be executed. However, only results from the last statement will be returned. Make sure each statement is separated by a <code>;</code> character.</p>
        <p>You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (<code>''</code>).</p>
      </td>
    </tr>
    <tr>
      <td>Output fields</td>
      <td>
        <p>Use this input to describe the columns that you are expecting from your SQL statement.</p>
        <p>If you do not expect any return values or do not need any, you may ignore this input field.</p>
      </td>
    </tr>
  </tbody>
</table>

### Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rows</td>
      <td>
        <p>List of rows returned from the SQL execution. The fields in this list are defined by the <b>Output fields</b> input field.</p>
        <p>If left blank, this row will be available in the datatree as an array datapill.</p>
      </td>
    </tr>
    <tr>
      <td>Rows affected</td>
      <td>
        <p>This is an integer value indicating the number of rows inserted/updated/deleted from the SQL string.</p>
        <p>When executing <code>SELECT</code> statements, this will return <code>nil</code>.</p>
        <p>When executing a DDL (for example, creating a table), the value <code>0</code> will be returned.</p>
      </td>
    </tr>
  </tbody>
</table>

### Limitations

There is a size limit of `1000` rows when your custom SQL statement returns data.

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
  * [Execute stored procedure](/connectors/mssql/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
