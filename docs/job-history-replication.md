---
title: Activity audit log streaming
date: 2019-09-23 19:00:00 Z
---


# Audit Log Streaming
Workato can store the job history of all your recipes as well as login and user activity to an Amazon S3 bucket or any REST endpoint. Any log service provider (such as [Sumo Logic](https://www.sumologic.com), [Datadog](https://www.datadoghq.com)) may be used. When enabled, we will create a JSON file for each event. The file size varies from 1kB to 1MB based on the details that are present in the logs.

This is an add-on feature. Please view our Pricing page or speak with your account representative to enable audit log streaming in your account.

## How to set up
Click on the Audit log streaming tab in your Account Settings and use the toggle button to enable audit log streaming.

![Enable audit log streaming](~@img/activity-audit/enable-audit-log-streaming.png)

You will then be able to select the type of events that must be included in your audit log stream. You may stream the following information by selecting one or more options. If you choose to stream your job history, you will have the additional option to include your recipe step details in your audit log stream.

![Select data to stream](~@img/activity-audit/include-in-stream.png)

## Audit stream destination
You may choose one of the following options as your audit stream destination.

1. Amazon S3 bucket: Select an Amazon S3 connection that has a region and bucket set up. The connection should have read/write access to the bucket.
2. Cloud based logging service: Any log service provider (such as Sumo Logic, Datadog, Splunk) may be used. Learn more about configuring an HTTP based log collection using [Sumo logic](https://help.sumologic.com/03Send-Data/Sources/02Sources-for-Hosted-Collectors/HTTP-Source) or [Datadog](https://docs.datadoghq.com/logs/log_collection/?tab=httpussite).
3. Requires authentication: If the log service provider requires authentication to send HTTP requests then enable the `REQUIRES AUTHENTICATION` toggle.
![Requires authentication](~@img/activity-audit/http-requires-auth-url.png)
4. HTTP authentication: Select the authentication type in the HTTP connection. Provide authentication details based on the authentication type selected.
![Select HTTP authentication type](~@img/activity-audit/http-auth-type.png)
5. HTTP connection: Link an HTTP connection by creating or linking to an existing HTTP connection. Authentication information must be provided in the HTTP connection.
![Link an HTTP connection](~@img/activity-audit/link-your-account.png)
6. HTTP URL: Enter the HTTP URL from the cloud based loggin service provider. Workato audit log streaming will POST the audit log events in real-time to this URL.
![Enter an HTTP URL](~@img/activity-audit/http-url.png)

## JSON file details
Workato creates a JSON file for each event. The file path and name format are as follows:

| Item  | Description |
| :---- | :---        |
| path  | user_id/jobs/recipe_id/YYYYMMDD/formatted_job_id/ <br> <br> formatted_job_id is the job id expanded in to a 21 digit number(left padded with 0s) and split in to 3 character fragments separated by /.  <br> <br> Eg: Job id 100 is formatted as 000/000/000/000/000/000/100  |
| name  | user_id-recipe_id-job_id-YYYYMMDDHHMMSS-status.json <br>  <br> status is the job completion status: succeeded or failed <br> <br>Eg: 5234-234-100-20180521000000-succeeded.json |

Eg: 5234/jobs/234/20180521/000/000/000/000/000/000/100/5234-234-100-20180521000000-succeeded.json

## JSON file content - Job history and step details sample data

### Job history - Success
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHQTfsX3_snVwAAAABBWEhRVGZzWDlYaHh3bWJCazRBQQ",
  "content": {
    "timestamp": "2020-05-01T12:55:03.703Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "completed_at": "2020-05-01T05:55:03-07:00",
      "is_poll_error": false,
      "flow_id": 33085,
      "report": {
        "custom_column_1": "50"
      },
      "started_at": "2020-05-01T05:55:02-07:00",
      "id": 47991797,
      "action_count": 6,
      "lines": [
        {
          "output": {
            "time": "2020-05-01T05:55:02.114207-07:00"
          },
          "input": {
            "interval": "5"
          },
          "adapter_name": "clock",
          "recipe_line_number": 0,
          "adapter_operation": "timer",
          "line_stat": {
            "total": 0.000313982,
            "details": [
              {
                "average": 0.000017712,
                "total": 0.000017712,
                "min": 0.000017712,
                "max": 0.000017712,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000035239,
                "total": 0.000035239,
                "min": 0.000035239,
                "max": 0.000035239,
                "name": "normalize_input",
                "count": 1
              },
              {
                "average": 0.000045259,
                "total": 0.000045259,
                "min": 0.000045259,
                "max": 0.000045259,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000022058,
                "total": 0.000022058,
                "min": 0.000022058,
                "max": 0.000022058,
                "name": "summarize_output_report",
                "count": 1
              },
              {
                "average": 0.000193714,
                "total": 0.000193714,
                "min": 0.000193714,
                "max": 0.000193714,
                "name": "event_title",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "input": {
            "columns": {
              "last_name": "Smith",
              "first_name": "John",
              "age": "41"
            },
            "table": "simpsons"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 1,
          "adapter_operation": "insert_row",
          "line_stat": {
            "total": 0.2344978235,
            "details": [
              {
                "average": 0.000011922,
                "total": 0.000011922,
                "min": 0.000011922,
                "max": 0.000011922,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.0000247925,
                "total": 0.000049585,
                "min": 0.000016806,
                "max": 0.000032779,
                "name": "normalize_input",
                "count": 2
              },
              {
                "average": 0.000080607,
                "total": 0.000080607,
                "min": 0.000080607,
                "max": 0.000080607,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.000011578,
                "total": 0.000011578,
                "min": 0.000011578,
                "max": 0.000011578,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.00005903,
                "total": 0.00005903,
                "min": 0.00005903,
                "max": 0.00005903,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000013896,
                "total": 0.000013896,
                "min": 0.000013896,
                "max": 0.000013896,
                "name": "input_flattened",
                "count": 1
              },
              {
                "average": 0.234148357,
                "total": 0.234148357,
                "min": 0.234148357,
                "max": 0.234148357,
                "name": "execute",
                "count": 1
              },
              {
                "average": 0.00001106,
                "total": 0.00001106,
                "min": 0.00001106,
                "max": 0.00001106,
                "name": "output_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000079575,
                "total": 0.000079575,
                "min": 0.000079575,
                "max": 0.000079575,
                "name": "parse_output",
                "count": 1
              },
              {
                "average": 0.000005041,
                "total": 0.000005041,
                "min": 0.000005041,
                "max": 0.000005041,
                "name": "normalize_output",
                "count": 1
              },
              {
                "average": 0.000033233,
                "total": 0.000033233,
                "min": 0.000033233,
                "max": 0.000033233,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000018732,
                "total": 0.000018732,
                "min": 0.000018732,
                "max": 0.000018732,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "output": {
            "rows_updated": 1
          },
          "input": {
            "columns": {
              "age": 50
            },
            "where": "1=1",
            "table": "public.simpsons"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 2,
          "adapter_operation": "update_rows",
          "line_stat": {
            "total": 0.250237561,
            "details": [
              {
                "average": 0.000014512,
                "total": 0.000014512,
                "min": 0.000014512,
                "max": 0.000014512,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000024723,
                "total": 0.000049446,
                "min": 0.00001491,
                "max": 0.000034536,
                "name": "normalize_input",
                "count": 2
              },
              {
                "average": 0.000060136,
                "total": 0.000060136,
                "min": 0.000060136,
                "max": 0.000060136,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.000050531,
                "total": 0.000050531,
                "min": 0.000050531,
                "max": 0.000050531,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000058293,
                "total": 0.000058293,
                "min": 0.000058293,
                "max": 0.000058293,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000011793,
                "total": 0.000011793,
                "min": 0.000011793,
                "max": 0.000011793,
                "name": "input_flattened",
                "count": 1
              },
              {
                "average": 0.249734304,
                "total": 0.249734304,
                "min": 0.249734304,
                "max": 0.249734304,
                "name": "execute",
                "count": 1
              },
              {
                "average": 0.000011752,
                "total": 0.000011752,
                "min": 0.000011752,
                "max": 0.000011752,
                "name": "output_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000069147,
                "total": 0.000069147,
                "min": 0.000069147,
                "max": 0.000069147,
                "name": "parse_output",
                "count": 1
              },
              {
                "average": 0.000015591,
                "total": 0.000015591,
                "min": 0.000015591,
                "max": 0.000015591,
                "name": "normalize_output",
                "count": 1
              },
              {
                "average": 0.000121801,
                "total": 0.000121801,
                "min": 0.000121801,
                "max": 0.000121801,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000064978,
                "total": 0.000064978,
                "min": 0.000064978,
                "max": 0.000064978,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "output": {
            "rows_affected": 0,
            "rows_count": 1,
            "rows": [
              {
                "n_cnt": 1
              }
            ]
          },
          "input": {
            "update_only": "false",
            "sql": "SELECT COUNT(*) AS n_cnt FROM simpsons"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 3,
          "adapter_operation": "run_custom_sql",
          "line_stat": {
            "total": 0.088887868,
            "details": [
              {
                "average": 0.000012705,
                "total": 0.000012705,
                "min": 0.000012705,
                "max": 0.000012705,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000019369,
                "total": 0.000038738,
                "min": 0.000009866,
                "max": 0.000028872,
                "name": "normalize_input",
                "count": 2
              },
              {
                "average": 0.000050284,
                "total": 0.000050284,
                "min": 0.000050284,
                "max": 0.000050284,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.000007655,
                "total": 0.000007655,
                "min": 0.000007655,
                "max": 0.000007655,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000063322,
                "total": 0.000063322,
                "min": 0.000063322,
                "max": 0.000063322,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000011271,
                "total": 0.000011271,
                "min": 0.000011271,
                "max": 0.000011271,
                "name": "input_flattened",
                "count": 1
              },
              {
                "average": 0.088357697,
                "total": 0.088357697,
                "min": 0.088357697,
                "max": 0.088357697,
                "name": "execute",
                "count": 1
              },
              {
                "average": 0.000014042,
                "total": 0.000014042,
                "min": 0.000014042,
                "max": 0.000014042,
                "name": "output_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.00006397,
                "total": 0.00006397,
                "min": 0.00006397,
                "max": 0.00006397,
                "name": "parse_output",
                "count": 1
              },
              {
                "average": 0.000024232,
                "total": 0.000024232,
                "min": 0.000024232,
                "max": 0.000024232,
                "name": "normalize_output",
                "count": 1
              },
              {
                "average": 0.000140639,
                "total": 0.000140639,
                "min": 0.000140639,
                "max": 0.000140639,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000122682,
                "total": 0.000122682,
                "min": 0.000122682,
                "max": 0.000122682,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "output": {
            "rows_count": 1,
            "rows": [
              {
                "last_name": "Smith",
                "first_name": "John",
                "age": 50
              }
            ]
          },
          "input": {
            "offset": "0",
            "limit": "100",
            "table": "public.simpsons"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 4,
          "adapter_operation": "search_rows",
          "line_stat": {
            "total": 0.09445360800000001,
            "details": [
              {
                "average": 0.000014961,
                "total": 0.000014961,
                "min": 0.000014961,
                "max": 0.000014961,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000020602,
                "total": 0.000041204,
                "min": 0.000012366,
                "max": 0.000028838,
                "name": "normalize_input",
                "count": 2
              },
              {
                "average": 0.0001361,
                "total": 0.0001361,
                "min": 0.0001361,
                "max": 0.0001361,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.000008239,
                "total": 0.000008239,
                "min": 0.000008239,
                "max": 0.000008239,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000055138,
                "total": 0.000055138,
                "min": 0.000055138,
                "max": 0.000055138,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000011329,
                "total": 0.000011329,
                "min": 0.000011329,
                "max": 0.000011329,
                "name": "input_flattened",
                "count": 1
              },
              {
                "average": 0.093814615,
                "total": 0.093814615,
                "min": 0.093814615,
                "max": 0.093814615,
                "name": "execute",
                "count": 1
              },
              {
                "average": 0.000012463,
                "total": 0.000012463,
                "min": 0.000012463,
                "max": 0.000012463,
                "name": "output_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000101741,
                "total": 0.000101741,
                "min": 0.000101741,
                "max": 0.000101741,
                "name": "parse_output",
                "count": 1
              },
              {
                "average": 0.000031912,
                "total": 0.000031912,
                "min": 0.000031912,
                "max": 0.000031912,
                "name": "normalize_output",
                "count": 1
              },
              {
                "average": 0.000143128,
                "total": 0.000143128,
                "min": 0.000143128,
                "max": 0.000143128,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.00010338,
                "total": 0.00010338,
                "min": 0.00010338,
                "max": 0.00010338,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "output": {
            "rows_count": 1,
            "rows": [
              {
                "n_rows": 1
              }
            ]
          },
          "input": {
            "sql": "SELECT COUNT(*) AS n_rows FROM simpsons"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 5,
          "adapter_operation": "search_rows_sql",
          "line_stat": {
            "total": 0.089865915,
            "details": [
              {
                "average": 0.000010843,
                "total": 0.000010843,
                "min": 0.000010843,
                "max": 0.000010843,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000015405,
                "total": 0.00003081,
                "min": 0.000008541,
                "max": 0.000022269,
                "name": "normalize_input",
                "count": 2
              },
              {
                "average": 0.000043979,
                "total": 0.000043979,
                "min": 0.000043979,
                "max": 0.000043979,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.000006194,
                "total": 0.000006194,
                "min": 0.000006194,
                "max": 0.000006194,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000042017,
                "total": 0.000042017,
                "min": 0.000042017,
                "max": 0.000042017,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000010352,
                "total": 0.000010352,
                "min": 0.000010352,
                "max": 0.000010352,
                "name": "input_flattened",
                "count": 1
              },
              {
                "average": 0.089438981,
                "total": 0.089438981,
                "min": 0.089438981,
                "max": 0.089438981,
                "name": "execute",
                "count": 1
              },
              {
                "average": 0.000010808,
                "total": 0.000010808,
                "min": 0.000010808,
                "max": 0.000010808,
                "name": "output_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000057972,
                "total": 0.000057972,
                "min": 0.000057972,
                "max": 0.000057972,
                "name": "parse_output",
                "count": 1
              },
              {
                "average": 0.000020575,
                "total": 0.000020575,
                "min": 0.000020575,
                "max": 0.000020575,
                "name": "normalize_output",
                "count": 1
              },
              {
                "average": 0.000054933,
                "total": 0.000054933,
                "min": 0.000054933,
                "max": 0.000054933,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000153856,
                "total": 0.000153856,
                "min": 0.000153856,
                "max": 0.000153856,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "output": {
            "rows_deleted": 1
          },
          "input": {
            "where": "1=1",
            "table": "public.simpsons"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 6,
          "adapter_operation": "delete_rows",
          "line_stat": {
            "total": 0.0951820545,
            "details": [
              {
                "average": 0.000011141,
                "total": 0.000011141,
                "min": 0.000011141,
                "max": 0.000011141,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.0000176435,
                "total": 0.000035287,
                "min": 0.000010036,
                "max": 0.000025251,
                "name": "normalize_input",
                "count": 2
              },
              {
                "average": 0.000077178,
                "total": 0.000077178,
                "min": 0.000077178,
                "max": 0.000077178,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.000007207,
                "total": 0.000007207,
                "min": 0.000007207,
                "max": 0.000007207,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000039459,
                "total": 0.000039459,
                "min": 0.000039459,
                "max": 0.000039459,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000010776,
                "total": 0.000010776,
                "min": 0.000010776,
                "max": 0.000010776,
                "name": "input_flattened",
                "count": 1
              },
              {
                "average": 0.094703447,
                "total": 0.094703447,
                "min": 0.094703447,
                "max": 0.094703447,
                "name": "execute",
                "count": 1
              },
              {
                "average": 0.000012865,
                "total": 0.000012865,
                "min": 0.000012865,
                "max": 0.000012865,
                "name": "output_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000057928,
                "total": 0.000057928,
                "min": 0.000057928,
                "max": 0.000057928,
                "name": "parse_output",
                "count": 1
              },
              {
                "average": 0.000017104,
                "total": 0.000017104,
                "min": 0.000017104,
                "max": 0.000017104,
                "name": "normalize_output",
                "count": 1
              },
              {
                "average": 0.00009837,
                "total": 0.00009837,
                "min": 0.00009837,
                "max": 0.00009837,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000128936,
                "total": 0.000128936,
                "min": 0.000128936,
                "max": 0.000128936,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        }
      ],
      "status": "succeeded",
      "title": "Scheduler by Workato: new scheduled event: Start time=2020-05-01T05:55:02.114207-07:00"
    }
  }
}
```

</details>

### Job history - Failure
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTEOryBHZ_ogAAAABBWEhURU9yeWhoWWxoQ2IwbzRBQQ",
  "content": {
    "timestamp": "2020-05-02T01:47:13.522Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "completed_at": "2020-05-01T18:47:13-07:00",
      "is_poll_error": false,
      "flow_id": 33084,
      "error_type": "Missing required field",
      "started_at": "2020-05-01T18:47:13-07:00",
      "id": 48043948,
      "action_count": 1,
      "error": "{\"message\":\"'Columns' must be present\",\"inner_message\":\"nil\"}",
      "lines": [
        {
          "output": {
            "time": "2020-05-01T18:47:13.067769-07:00"
          },
          "input": {
            "interval": "5"
          },
          "adapter_name": "clock",
          "recipe_line_number": 0,
          "adapter_operation": "timer",
          "line_stat": {
            "total": 0.000271478,
            "details": [
              {
                "average": 0.000013257,
                "total": 0.000013257,
                "min": 0.000013257,
                "max": 0.000013257,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000032699,
                "total": 0.000032699,
                "min": 0.000032699,
                "max": 0.000032699,
                "name": "normalize_input",
                "count": 1
              },
              {
                "average": 0.000050194,
                "total": 0.000050194,
                "min": 0.000050194,
                "max": 0.000050194,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000022144,
                "total": 0.000022144,
                "min": 0.000022144,
                "max": 0.000022144,
                "name": "summarize_output_report",
                "count": 1
              },
              {
                "average": 0.000153184,
                "total": 0.000153184,
                "min": 0.000153184,
                "max": 0.000153184,
                "name": "event_title",
                "count": 1
              }
            ]
          },
          "mask_data": false
        },
        {
          "input": {
            "table": "Bern_table"
          },
          "adapter_name": "postgresql",
          "recipe_line_number": 1,
          "adapter_operation": "insert_row",
          "error": "'Columns' must be present",
          "line_stat": {
            "total": 0.000297488,
            "details": [
              {
                "average": 0.000009984,
                "total": 0.000009984,
                "min": 0.000009984,
                "max": 0.000009984,
                "name": "map_input",
                "count": 1
              },
              {
                "average": 0.000029774,
                "total": 0.000029774,
                "min": 0.000029774,
                "max": 0.000029774,
                "name": "normalize_input",
                "count": 1
              },
              {
                "average": 0.000060818,
                "total": 0.000060818,
                "min": 0.000060818,
                "max": 0.000060818,
                "name": "trim_input",
                "count": 1
              },
              {
                "average": 0.00000818,
                "total": 0.00000818,
                "min": 0.00000818,
                "max": 0.00000818,
                "name": "input_with_indifferent_access",
                "count": 1
              },
              {
                "average": 0.000125027,
                "total": 0.000125027,
                "min": 0.000125027,
                "max": 0.000125027,
                "name": "render_input",
                "count": 1
              },
              {
                "average": 0.000036386,
                "total": 0.000036386,
                "min": 0.000036386,
                "max": 0.000036386,
                "name": "summarize_input_report",
                "count": 1
              },
              {
                "average": 0.000027319,
                "total": 0.000027319,
                "min": 0.000027319,
                "max": 0.000027319,
                "name": "summarize_output_report",
                "count": 1
              }
            ]
          },
          "mask_data": false
        }
      ],
      "status": "failed",
      "title": "Scheduler by Workato: new scheduled event: Start time=2020-05-01T18:47:13.067769-07:00"
    }
  }
}
```

</details>

## JSON file content - Login and user activity

### User login
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTQKlCHWUViQAAAABBWEhUUUtsQ0JyRjh3TEhmdGNBQQ",
  "content": {
    "timestamp": "2020-05-02T02:39:22.434Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "email_confirmed_at": "2019-11-24 14:29:30 -0800",
        "name": "John Smith",
        "id": 4848,
        "type": "User",
        "email": "john.smith@workato.com"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        },
        "activity": "sso_login",
        "sso_provider": "google"
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "user_login",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:39:22 UTC"
    }
  }
}
```

</details>

### User logout
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTQHwjsXK5PgAAAABBWEhUUUh3alg0MmhFMzQ3N1lBQQ",
  "content": {
    "timestamp": "2020-05-02T02:39:10.883Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "email_confirmed_at": "2019-11-24 14:29:30 -0800",
        "name": "John Smith",
        "id": 4848,
        "type": "User",
        "email": "john.smith@workato.com"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        },
        "activity": "user_logout"
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "user_logout",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:39:10 UTC"
    }
  }
}
```

</details>

### Manifest updated
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTTASswDI6SgAAAABBWEhUVEFTczN4a2VMM2pMU01BQQ",
  "content": {
    "timestamp": "2020-05-02T02:51:46.732Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "name": "Document reading",
        "id": 911,
        "type": "ExportManifest"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato eam",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "manifest_updated",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:51:46 UTC"
    }
  }
}
```
</details>

### Package exported
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTTH4F5PGFLwAAAABBWEhUVEg0Rk9ZU3VBX0x0cmdBQQ",
  "content": {
    "timestamp": "2020-05-02T02:52:17.797Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "file_name": "vision-ai-license-and-registration_john-smith.zip",
        "id": 1076,
        "type": "Package",
        "folder_id": 5223,
        "folder_path": "Home/Vision AI - License and Registration"
      },
      "team": {
        "name": "Workato Team",
        "id": 4805,
        "email": "john.smith@workato.com"
      },
      "event": "package_exported",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:52:17 UTC"
    }
  }
}
```

</details>

### Package imported
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTTaXs5PTWrQAAAABBWEhUVGFYc09ZU3VBX0x0RFlBQQ",
  "content": {
    "timestamp": "2020-05-02T02:53:33.548Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "file_name": "griddynamics_demo.zip",
        "id": 1077,
        "type": "Package",
        "folder_id": 6593,
        "folder_path": "Home/HR"
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "package_imported",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:53:33 UTC"
    }
  }
}
```

</details>

### Recipe created
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTTaLtHYr3hgAAAABBWEhUVGFMdEJyRjh3TEhmTlFBQQ",
  "content": {
    "timestamp": "2020-05-02T02:53:32.781Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "name": "Candidate in Progress on JIRA will advance on GreenHouse",
        "id": 33167,
        "type": "Flow"
      },
      "team": {
        "name": "Workato team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "recipe_created",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:53:32 UTC"
    }
  }
}
```

</details>

### Recipe updated
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHg8Hrz9CU5hwAAAABBWEhnOEhyejFfUlJVQ0VyU1lBQQ",
  "content": {
    "timestamp": "2020-05-04T18:26:28.723Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "name": "Trigger on a specified interval will send request via HTTP",
        "id": 32896,
        "type": "Flow"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "recipe_updated",
      "user": {
        "name": "john.smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:26:28 UTC"
    }
  }
}
```

</details>

### Recipe deleted
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHg_C7e9FHJ3AAAAABBWEhnX0M3ZTFfUlJVQ0VyWHNBQQ",
  "content": {
    "timestamp": "2020-05-04T18:39:15.678Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "parent_id": 32896,
        "name": "Send opportunity sync request via HTTP",
        "id": 33179,
        "type": "Flow"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "recipe_deleted",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:39:15 UTC"
    }
  }
}
```

</details>

### Recipe cloned
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHg9jSJv1uQ_wAAAABBWEhnOWpTSk80NFdnU1hpMjBBQQ",
  "content": {
    "timestamp": "2020-05-04T18:32:43.913Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "name": "Trigger on a specified interval will send request via HTTP",
        "id": 32896,
        "type": "Flow"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "recipe_copied",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:32:43 UTC"
    }
  }
}
```

</details>

### Recipe renamed
<details><summary><b>Sample JSON</b></summary>

```json
  "id": "AQAAAXHg9s6WjDg_6gAAAABBWEhnOXM2V0FqMU5zX2hPVW9BQQ",
  "content": {
    "timestamp": "2020-05-04T18:33:23.350Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource_changes": {
        "name": {
          "old_value": "Send request via HTTP"
        }
      },
      "resource": {
        "parent_id": 32896,
        "name": "Send opportunity sync request via HTTP",
        "id": 33179,
        "type": "Flow"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "recipe_renamed",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:33:23 UTC"
    }
  }
}
```

</details>

### Recipe started
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHg-7wrmva0pAAAAABBWEhnLTd3cjg5LUtteV9xSFlBQQ",
  "content": {
    "timestamp": "2020-05-04T18:38:46.315Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "parent_id": 32896,
        "name": "Send opportunity sync request via HTTP",
        "id": 33179,
        "type": "Flow"
      },
      "details": {
        "request": {
          "ip_address": "67.164.97.88",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        },
        "run_once": false
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "recipe_started",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:38:46 UTC"
    }
  }
}
```

</details>

### Recipe stopped
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHg_AuW-AUagQAAAABBWEhnX0F1V1pOMUwtY3hXWEFBQQ",
  "content": {
    "timestamp": "2020-05-04T18:39:06.646Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "parent_id": 32896,
        "name": "Send opportunity sync request via HTTP",
        "id": 33179,
        "type": "Flow"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        },
        "stop_reason": "user",
        "force": false,
        "error": false
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "recipe_stopped",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:39:06 UTC"
    }
  }
}
```

</details>

### Folders created
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhBFFI38Zg5AAAAABBWEhoQkZGSW9QOWRwR1ZReE1BQQ",
  "content": {
    "timestamp": "2020-05-04T18:48:08.776Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "path": "Home/RevOps Salesforce <> Netsuite",
        "name": "RevOps Salesforce <> Netsuite",
        "id": 6847,
        "type": "Folder"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "folder_created",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:48:08 UTC"
    }
  }
}
```

</details>

### Folders deleted
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhBlYBxQgcMgAAAABBWEhoQmxZQklqS3FHMjByYllBQQ",
  "content": {
    "timestamp": "2020-05-04T18:50:21.057Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "path": "RevOps Salesforce <> Netsuite",
        "name": "RevOps Salesforce <> Netsuite",
        "id": 6847,
        "type": "Folder"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "folder_deleted",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:50:20 UTC"
    }
  }
}
```

</details>

### Teams - Invited a team member
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhCaq5mytRQQAAAABBWEhoQ2FxNTg5LUtteV9xUk1BQQ",
  "content": {
    "timestamp": "2020-05-04T18:53:59.353Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "role": "Admin",
        "name": "Alice Jackson",
        "id": 847,
        "type": "MemberInvitation",
        "email": "alice.jackson@workato.com"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "team_invitation_created",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:53:59 UTC"
    }
  }
}
```

</details>

### Teams - Member accepted invite
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhSrdywJ9wqgAAAABBWEhoU3JkeU80NFdnU1hpeGdBQQ",
  "content": {
    "timestamp": "2020-05-04T20:05:02.450Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "role": "Admin",
        "name": "Alice Jackson",
        "id": 847,
        "type": "MemberInvitation",
        "email": "alice.jackson@workato.com"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "team_invitation_accept",
      "user": {
        "name": "Alice Jackson",
        "id": 6464,
        "email": "alice.jackson@workato.com"
      },
      "timestamp": "2020-05-04 20:05:02 UTC"
    }
  }
}
```

</details>

### Teams - Member deleted
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhCQTYjH09sQAAAABBWEhoQ1FUWUFqMU5zX2hPeEVBQQ",
  "content": {
    "timestamp": "2020-05-04T18:53:16.888Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "role": "Admin",
        "grant_type": "team",
        "member": {
          "email_confirmed_at": "2019-09-11 14:38:19 -0700",
          "name": "Nick Jefferies",
          "id": 4941,
          "type": "User",
          "email": "nick.jefferies@workato.com"
        },
        "id": 1483,
        "type": "ManagedUserGrant"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "team_membership_deleted",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 18:53:16 UTC"
    }
  }
}
```

</details>
### Teams - Switched into team
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhX1eNnHATPwAAAABBWEhoWDFlTjg5LUtteV9xeEVBQQ",
  "content": {
    "timestamp": "2020-05-04T20:27:34.157Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "email_confirmed_at": "2019-11-24 14:29:30 -0800",
        "name": "John Smith",
        "id": 4848,
        "type": "User",
        "email": "johm.smith@workato.com"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0"
        },
        "activity": "switch_team"
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "user_login",
      "user": {
        "name": "Alice Jackson",
        "id": 6464,
        "email": "alice.jackson@workato.com"
      },
      "timestamp": "2020-05-04 20:27:33 UTC"
    }
  }
}
```

</details>

### Teams - Switched out of teams
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhX8OExl2m0wAAAABBWEhoWDhPRUlqS3FHMjByRmNBQQ",
  "content": {
    "timestamp": "2020-05-04T20:28:01.796Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "email_confirmed_at": "2019-11-24 14:29:30 -0800",
        "name": "John Smith",
        "id": 4848,
        "type": "User",
        "email": "john.smith@workato.com"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0"
        },
        "activity": "switch_team"
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "user_logout",
      "user": {
        "name": "Alice Jackson",
        "id": 6464,
        "email": "alice.jackson@workato.com"
      },
      "timestamp": "2020-05-04 20:28:01 UTC"
    }
  }
}
```

</details>

### Connection - Connected
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHheeg_wVFcJgAAAABBWEhoZWVnX080NFdnU1hpcFFBQQ",
  "content": {
    "timestamp": "2020-05-04T20:56:35.135Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "provider": "postgresql",
        "authorized": true,
        "name": "My PostgreSQL account",
        "id": 7145,
        "type": "SharedAccount"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "connection_connected",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 20:56:35 UTC"
    }
  }
}
```

</details>

### Connection - Disconnected
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHheb5s9iwhogAAAABBWEhoZWI1czFfUlJVQ0VyVUVBQQ",
  "content": {
    "timestamp": "2020-05-04T20:56:24.428Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "provider": "postgresql",
        "authorized": false,
        "name": "My PostgreSQL account",
        "id": 7145,
        "type": "SharedAccount"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "connection_disconnected",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 20:56:24 UTC"
    }
  }
}
```

</details>

### Connection - Created
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhs_OH9wR68wAAAABBWEhoc19PSDFfUlJVQ0VycElBQQ",
  "content": {
    "timestamp": "2020-05-04T21:59:59.111Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "provider": "asana",
        "authorized": false,
        "name": "My second Asana account",
        "id": 7174,
        "type": "SharedAccount"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "connection_created",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 21:59:58 UTC"
    }
  }
}
```

</details>

### Connection - Updated
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhed5bjihAOQAAAABBWEhoZWQ1YkFqMU5zX2hPWmtBQQ",
  "content": {
    "timestamp": "2020-05-04T20:56:32.603Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "provider": "postgresql",
        "authorized": false,
        "name": "My PostgreSQL account",
        "id": 7145,
        "type": "SharedAccount"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "connection_updated",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 20:56:32 UTC"
    }
  }
}
```

</details>

### Connection - Deleted
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHhepxpxsKiJgAAAABBWEhoZXB4cElqS3FHMjByNm9BQQ",
  "content": {
    "timestamp": "2020-05-04T20:57:21.257Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "provider": "greenhouse_connector_4805_1566279565",
        "authorized": false,
        "name": "Carly's Greenhouse Account",
        "id": 6588,
        "type": "SharedAccount"
      },
      "details": {
        "request": {
          "ip_address": "60.160.90.91",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36"
        }
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "event": "connection_deleted",
      "user": {
        "name": "Johm Smith",
        "id": 4848,
        "email": "johm.smith@workato.com"
      },
      "timestamp": "2020-05-04 20:57:21 UTC"
    }
  }
}
```

</details>

### Connector - Updated
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id": "AQAAAXHTTZYgBSvElAAAAABBWEhUVFpZZ2hoWWxoQ2IwNEFBQQ",
  "content": {
    "timestamp": "2020-05-02T02:53:29.504Z",
    "tags": [
      "source:undefined"
    ],
    "attributes": {
      "resource": {
        "name": "Greenhouse",
        "id": 1884,
        "type": "Adapter"
      },
      "team": {
        "name": "Workato Team",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "event": "connector_updated",
      "user": {
        "name": "John Smith",
        "id": 4848,
        "email": "john.smith@workato.com"
      },
      "timestamp": "2020-05-02 02:53:28 UTC"
    }
  }
}
```
</details>