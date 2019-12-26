---
title: Workato connectors - Snowflake
date: 2019-01-10 06:10:00 Z
---

# Snowflake
Snowflake is a relational ANSI SQL data warehouse in the cloud. Due to its unique architecture designed for the cloud, Snowflake offers a data warehouse that is faster, easier to use, and far more flexible than traditional data warehouses

## How to connect to Snowflake on Workato
The Snowflake connector uses username and password to authenticate with Snowflake. If your snowflake instance has network policies that restrict access based on IP address, you will need to whitelist [Workato IP addresses](/security/ip-whitelists.md) to successfully create a connection.

![Snowflake connection](~@img/snowflake/connection.png)
*Snowflake connection*

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
      <td>Account name</td>
      <td><p>Account name of your Snowflake instance. Additional segments may be needed depending on the cloud platform (AWS or Azure) and the region where your Snowflake instance is hosted.</p>
      <table class="unchanged rich-diff-level-one">
        <thead>
          <tr>
            <th>Account hosted in</th>
            <th>Full account name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AWS US west</td>
            <td>workatodemo</td>
          </tr>
          <tr>
            <td>AWS US east</td>
            <td>workatodemo.us-east-1</td>
          </tr>
          <tr>
            <td>AWS EU (Frankfurt)</td>
            <td>workatodemo.eu-central-1</td>
          </tr>
          <tr>
            <td>AWS AP (Sydney)</td>
            <td>workatodemo.ap-southeast-2</td>
          </tr>
          <tr>
            <td>Azure West Europe</td>
            <td>workatodemo.west-europe.azure</td>
          </tr>
        </tbody>
      </table>
      <a href='https://docs.snowflake.net/manuals/user-guide/connecting.html#your-snowflake-account-name-and-url'>Find out more</a> about Snowflake account naming.</td>
    </tr>
    <tr>
      <td><a href="#warehouse-considerations">Warehouse</a></td>
      <td>Name of the warehouse to use for performing all compute for this connection. See <a href='#warehouse-considerations'>Warehouse considerations</a> for more information.</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>Name of the Snowflake database you wish to connect to.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to Snowflake. 
        <br>The role granted to the User should have SYSADMIN privileges or lower. 
      </td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to Snowflake.
      <br>The role granted to the User should have SYSADMIN privileges or lower. 
      </td>
    </tr>
    <tr>
      <td>Schema</td>
      <td><b>Optional</b>. Name of the schema within the Snowflake database you wish to connect to. Defaults to <b>public</b>.</td>
    </tr>
    <tr>
      <td><a href="#database-timezone">Database timezone</a></td>
      <td><b>Optional</b>. Apply this to all timestamps without timezone.</td>
    </tr>
  </tbody>
</table>

> Workato connected Snowflake accounts should keep in line with the security considerations detailed [here](https://docs.snowflake.net/manuals/user-guide/security-access-control-configure.html). As a general guideline, SYSADMIN privileges can be used but custom roles should be created to restrict Workato access to **only** Snowflake objects which you want to build recipes with. Do not connect users with ACCOUNTADMIN privileges to Workato as this would throw errors and also represent a security concern. 

## Working with the Snowflake connector

### Warehouse considerations

Snowflake utilizes per-second billing for all compute (loading, transforming and query). Here are some things to consider when setting up a warehouse for a Snowflake connection. There is a 60-second minimum each time a warehouse starts, so there is no advantage of suspending a warehouse within the first 60 seconds of resuming

When choosing the following warehouse properties, consider the frequency and time between queries, the number of concurrent active recipes and complexity of each query.

#### Warehouse size

For most use cases, **X-Small** warehouse is sufficient. A larger warehouse has more servers and does more work proportional to the per-second cost. This means that a larger warehouse will complete a query faster while consuming the same number of credits.

If your use case involves long and complex queries it is recommended to use a larger warehouse to prevent timeouts.

#### Multi-cluster warehouses

A multi-cluster warehouse with auto-scale enabled is able to create multiple warehouses (of the same size) to meet temporary load fluctuation.

Use a multi-cluster warehouse if you expect concurrent jobs or jobs with large queries. Learn more about [multi-cluster warehouses](https://docs.snowflake.net/manuals/user-guide/warehouses-multicluster.html).

#### Auto-suspend and auto-resume

Warehouses used in the connection must have auto-resume enabled. Otherwise, recipe jobs will fail when trying to run on a suspended warehouse.

Warehouses can be configured to auto-suspend after a period of inactivity. This specified period of time depends on your business process.

A running warehouse maintains a cache of table data. This reduces the time taken for subsequent queries if the cached data can be used instead of reading from the table again. A larger warehouse has a larger cache capacity. This cache is dropped when the warehouse is suspended. As a result, performance for initial queries on a warehouse that was auto-resumed will be slower.

Use cases with high frequency and low down time in between queries will benefit from a longer period of time before auto-suspend.

### Database timezone

Snowflake supports TIMESTAMP_NTZ data type ("wallclock" time information without timezone). This creates a challenge trying to integrate with external systems. When sending or reading data from these columns, it needs to be converted to a default timezone for APIs of other applications to process accurately.

Select a timezone that your database operates in. This timezone will only be applied to these columns. Other timestamp columns with explicit timezone values will be unaffected.

> **If left blank, your Workato account timezone will be used instead.**

When **writing** timestamp values to such columns in a table, it will first be converted to this specified timezone. Then, only the "wallclock" value will be stored.

When **reading** timestamp without timezone values in a table, the timestamp will be assigned the selected timezone and processed as a timestamp with timezone value.

### Table and view
The Snowflake connector works with all tables and views available to the username used to establish the connection. These are available in pick lists in each trigger/action, or you can provide the exact name.

![Table selection from pick list](~@img/snowflake/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](~@img/snowflake/table_name_text.png)
*Provide exact table/view name in a text field*

### Single row vs batch of rows
Snowflake connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size.

![Batch trigger inputs](~@img/snowflake/new-batch-of-rows-trigger.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](~@img/snowflake/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](~@img/snowflake/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. The output of the trigger can be used in actions with batch operations (like Salesforce **Create objects in bulk action**) that requires mapping the <kbd>Rows</kbd> datapill into the source list. Learn how to work with lists in [List management](/features/list-management.md#using-datapills-in-an-action-with-a-list-input-action-handles-list-processing-implicitly).

![Using batch trigger output](~@img/snowflake/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax.

#### Simple statements

String values must be enclosed in single quotes (`''`) and columns used must exist in the table/view.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that has the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](~@img/snowflake/use_datapill_in_where.png)
*Using datapills wrapped with single quotes in `WHERE` condition*

Column identifiers with spaces must be enclosed in double quotes (`""`). For example, **currency code** must to enclosed in brackets to be used as an identifier.

```sql
"currency code" = 'USD'
```

![WHERE condition with enclosed identifier](~@img/snowflake/where-condition-with-enclosed-identifier.png)
*`WHERE` condition with column identifier enclosed with double quotes*

#### Complex statements

Your `WHERE` condition can also contain subqueries. The example below selects inactive users from the `DISTRIBUTORS` table.

```sql
ID IN(SELECT DISTRIBUTOR_ID FROM USERS WHERE ACTIVE = FALSE)
```

When used in a **Select rows** action, this will select all rows in the `DISTRIBUTORS` table related to rows in the `USERS` table that are not active (`ACTIVE = FALSE`).

![Using subquery in WHERE condition](~@img/snowflake/subquery-in-where-condition.png)
*Using subquery in WHERE condition*
