---
title: Workato API - Adapters
date: 2019-03-21 11:20:00 Z
---

# Connectors

All API endpoints listed here requires `oem_vendor` privilege. Talk to your Workato representative to enable this privilege in your account.

## List Connector Metadata

Returns a list of connectors and associated metadata specified in the API request.

```
GET /api/integrations
```

### Request body

| Name | Type | Description |
|------|------|-------------|
| applications | **string**<br>_required_ | Comma separated connector identifiers. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET http://www.workato.com/api/integrations \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
      -d '{
            "applications": "google_drive,service_now"
          }'
```

### Response

```json
{
    "items": [
        {
            "name": "google_drive",
            "title": "Google Drive",
            "categories": [
                "Document/File",
                "Sales Enablement"
            ],
            "oauth": true,
            "deprecated": false,
            "secondary": false,
            "triggers": [
                {
                    "name": "new_file_in_subfolder",
                    "title": "New file or folder in folder hierarchy",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "new_file_or_folder",
                    "title": "New file or folder",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                }
            ],
            "actions": [
                {
                    "name": "__adhoc_http_action",
                    "title": "Custom action",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_folder",
                    "title": "Create folder",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "download_file_contents",
                    "title": "Download file",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "move_rename_file",
                    "title": "Rename or move file/folder",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_file_or_folder",
                    "title": "Search files or folders",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "upload_file",
                    "title": "Upload small file",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "upload_file_stream",
                    "title": "Upload large file",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                }
            ]
        },
        {
            "name": "service_now",
            "title": "ServiceNow",
            "categories": [
                "Customer Service",
                "IT Service Management"
            ],
            "oauth": true,
            "deprecated": false,
            "secondary": false,
            "triggers": [
                {
                    "name": "closed_incident",
                    "title": "Closed incident",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "new_incident",
                    "title": "New incident",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "new_object",
                    "title": "New record",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "new_object_webhook",
                    "title": "New record",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "new_sys_user",
                    "title": "New user",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "scheduled_query",
                    "title": "Scheduled record search",
                    "deprecated": false,
                    "bulk": false,
                    "batch": true
                },
                {
                    "name": "updated_incident",
                    "title": "New/updated incident",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "updated_object",
                    "title": "New/updated record",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "updated_object_webhook",
                    "title": "New/updated record",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "updated_sys_user",
                    "title": "New/updated user",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                }
            ],
            "actions": [
                {
                    "name": "__adhoc_http_action",
                    "title": "Custom action",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "assign_user_to_incident",
                    "title": "Assign user to incident",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_asset",
                    "title": "Create asset",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_catalog_task",
                    "title": "Create catalog task",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_change",
                    "title": "Create change",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_core_company",
                    "title": "Create core company",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_incident",
                    "title": "Create incident",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_object",
                    "title": "Create record",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_object_using_template",
                    "title": "Create record using a template",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_problem",
                    "title": "Create problem",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "create_user",
                    "title": "Create user",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "get_incident",
                    "title": "Get incident details by ID",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "get_user",
                    "title": "Get user details by ID",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "lookup_user",
                    "title": "Search users",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_assets",
                    "title": "Search assets",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_companies",
                    "title": "Search companies",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_objects",
                    "title": "Search records",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_objects_v2",
                    "title": "Search records",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_users",
                    "title": "Search users",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "search_using_query",
                    "title": "Search records using query",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "update_asset",
                    "title": "Update asset",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "update_company",
                    "title": "Update company",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "update_incident",
                    "title": "Update incident",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "update_object",
                    "title": "Update record",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "update_object_using_template",
                    "title": "Update record using a template",
                    "deprecated": false,
                    "bulk": false,
                    "batch": false
                },
                {
                    "name": "update_user",
                    "title": "Update user",
                    "deprecated": true,
                    "bulk": false,
                    "batch": false
                }
            ]
        }
    ]
}
```
