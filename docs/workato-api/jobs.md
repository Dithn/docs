---
title: Workato API - Jobs
date: 2019-03-21 11:20:00 Z
---

# Jobs

## List Jobs from a Recipe

Returns aggregated job information as well as detailed job information for a specified recipe in Workato. Run-time data will not be available from this endpoint.

```
GET /api/recipes/:recipe_id/jobs
```

### URL Parameters

| Name          | Type | Description |
|-------------- |------|-------------|
| recipe_id     | **integer**<br>_required_ | Recipe id. |
| offset_run_id | **integer**<br>_(deprecated)_ | Offset run id. |
| offset_job_id | **integer**<br>_optional_ | Offset job id. Jobs occuring after the offset job will be returned. |
| prev          | **boolean**<br>_optional_ | Previous jobs if `true`, next otherwise. |
| failed        | **boolean**<br>_(deprecated)_ | If `true`, returns failed jobs only. |
| status        | **string**<br>_optional_ | Filter by status - succeeded, failed, pending. |
| rerun_jobs    | **boolean**<br>_optional_ | If `true`, returns rerun jobs only. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/recipes/<recipe_id>/jobs?status=failed \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
  "job_succeeded_count": 5,
  "job_failed_count": 3,
  "job_count": 8,
  "items": [
    {
      "id": 1004,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
        "is_poll_error": false,
        "error": null,
        "is_error": false
    },
    {
      "id": 1003,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
      "is_poll_error": false,
      "error": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
      "error_parts": {
        "adapter": "marketo",
        "error_type": "Missing required field",
        "message": "'Filter values' must be present",
        "error_id": "603260f5-a309-45b3-a20e-111d90a28917",
        "error_at": "2020-01-22T01:17:18.021-08:00",
        "input": "<redacted>",
        "inner_message": null
      },
      "is_error": true
    },
  ]
}
```

### Example of Run-time Data

Run-time data is the data that flows through the recipe at the time of job execution. This includes the input and output data from individual steps.

This data is available through the Workato platform on the [job details page](/recipes/jobs.md#job-details).

![Job details page](~@img/job-details/job-details-overview.png)
*Job details page*
