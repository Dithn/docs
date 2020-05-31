---
title: Collection by Workato
date: 2019-06-26 18:00:00 Z
search:
  keywords: ['collection', 'query', 'list', 'table']
---

# Collection by Workato
Collection by Workato is a robust native application that provides you with the tools to manipulate table data. You can use Collection to synchronize related data across multiple systems (databases, web services).

## Why use Collection
Collection allows you to run SQL statements with data from multiple sources. You can create temporary tables from a list input or CSV file. Subsequently, you can perform a variety of SQL queries to arrive at the required output for your use case.

Collection tables (also called **Collection lists**) are temporary meaning it exists only for the duration of the job and it will not persist across multiple jobs. Once you are done processing the data, load them directly to your target system.

### Transformation
Collection is built on SQL lite and functions like any database. You can create lists and query them using standard SQL syntax. Use common SQL keywords like `WHERE`, `GROUP BY` and `JOIN` to manipulate data from tables into your desired format.

Subsequently, load them directly into your target system with the Collection output or export the data as a CSV file.

### Collection works with large datasets
Collection excels at moving large datasets. Batch your tables and run them in parallel for optimal speed. Run recipes with 1,000 or 1,000,000 records with the same ease.

You will not have to worry about storage capacity with Collection. Extract them to Workato directly for processing without needing to recruit a third-party application.

## Connection setup
No connection setup is required. Simply select **App** > **Collection by Workato** to get started.

![Collection by Workato](~@img//features/collection/collection-by-workato.png)
*Collection by Workato*

## Actions
Start working with lists with the [Create list in Collection](#create-list-in-collection-action) and [Create list in Collection from CSV file](#create-list-in-collection-from-csv) actions. Perform data transformations with flexible SQL queries using the [Query list in Collection](#query-list-in-collection) action.

### Create list in collection action
This action creates a Collection list in the recipe from a list input. The Collection list will contain the column headers according to the schema of the list.

For example, you can take a list of all workers from **Workday**.

![Create list in Collection](~@img/features/collection/create-list-in-collection.png)
*Create list in Collection*

| Input field     | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| List source     | Select a list [`datapill`]. Ensure that this field is in formula mode. |
| List name       | The name of the list.                                                  |
| Index primary   | Select one or more columns as the primary index of your list.          |
| Index secondary | Select one or more columns as the secondary index of your list.        |

### Create list in Collection from CSV
This action creates a Collection list from a CSV input. It will contain the column headers according to the schema of the CSV string.

For example, if you are retrieving files from your **on-prem** systems, you can download a CSV file and use it directly with Collection.

![Create list in Collection from CSV](~@img/features/collection/create-list-in-collection-from-csv.png)
*Create list in Collection from CSV*

| Input field           | Description                                                                 |
| --------------------- | --------------------------------------------------------------------------- |
| CSV source            | Select a CSV string as source input.                                        |
| List name             | The name of the list.                                                       |
| File encoded type     | Select the file encoded type. The default value is UTF-8.                   |
| Column names          | The column headers in your CSV source input. Select **use a sample CSV file** to define your schema with a CSV file. |
| Ignore CSV header row | Select `Yes` if the CSV source has a header row, otherwise select `No`.     |
| Column delimiter      | Select the character used to separate value in each line of the CSV.        |
| Index primary         | Select one or more columns as the primary index of your list.               |
| Index secondary       | Select one or more columns as the secondary index of your list.             |

### Query list in Collection
This action allows you to perform standard SQL queries on your lists.

![Query list in Collection](~@img/features/collection/query-list-in-collection.png)
*Query list in Collection*

| Input field        | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| SQL query          | Write your SQL query. Normal SQL syntax applies.                                 |
| Output list schema | Define the schema according to your column headers in your output list. Select **use sample JSON** to define your schema with JSON. |
| Write to CSV       | Select `Yes` to convert the query results to a CSV string, this will display the input fields below. To use this query output in further SQL queries, select `No`. |
| Add CSV header     | Select `Yes` to use the column names as a CSV header row, otherwise select `No`. |
| Column delimiter   | Select the character used to separate values in each line of the CSV.            |

Here are some of the commonly used SQL keywords that can be used in the **Query list** action.

| SQL keywords | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| SELECT       | Use the SQL wildcard `*` to call all the columns in this list.               |
| WHERE        | Define conditions that specify what data you want to retrieve from the list. |
| JOIN         | Use `JOIN`, `LEFT JOIN`, `INNER JOIN` to combine lists.                      |
| INSERT INTO  | Define new entries for your list.                                            |
| DELETE       | Define rows to remove from your list.                                        |

Remember to query the full list before exporting or loading unto your target systems. Some SQL keywords (e.g. `INSERT INTO`, `DELETE`) do not return list outputs. Therefore, datapills from these actions will not contain all the rows/columns in your Collection list.

#### Example query: delete rows from list
For example, you can tailor your workers list from **Workday** to exclude certain groups of people.

![Delete rows with Query list in Collection](~@img/features/collection/query-list-in-collection-delete.png)
*Delete rows with Query list in Collection*

Since a `DELETE` query does not return a list output, datapills from this step **should not be used** to export your list.

Instead, run a `SELECT` query and use the datapills from that step.
```SQL
SELECT * FROM workers_list
```
