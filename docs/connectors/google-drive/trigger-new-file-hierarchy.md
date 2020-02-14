---
title: Workato connectors - Google Drive trigger - New file or folder in folder hierarchy
date: 2018-12-20 06:00:00 Z
---

# Google Drive trigger - New file or folder in folder hierarchy
This trigger checks periodically for new files or folders created in a specified folder and its subfolders. Each new file and folder generates a new job. Use this to listen on a family of folders.

This trigger is compatible with [streaming](/features/file-streaming.md), allowing it to send large amounts of data from Google Drive to other streaming compatible connectors in Workato.

## Input fields

| Field name | Description |
|---|---|
| Folder | The folder to monitor for new files or folders. Sub-folders will not be monitored. Select a folder from the picklist or enter the folder ID directly. |
| Chunk size (KB) | Defaults to 1024 KB. This denotes the chunk size when sending data from Google drive to a downstream application. Only applicable when the downstream application is streaming compatible as well. |

## Output fields
Note that in Google Drive API, the terms `folder` and `file` are used interchangeably. A `folder` is technically a special `file`. So whenever the field name or field description mentions `file`, it also applies to `folder`.

| Field name | Description |
|---|---|
| Is folder | Whether this is a folder. |
| Is google file | Whether this is a Google file i.e. Google Sheets, Google Docs, Google Slides, etc. |
| Is other file | Whether this is a non-Google file i.e. csv, pdf, docx, etc. |
| File contents | Full contents of the file. This is a [streaming object](/features/file-streaming.md). |
| ID | ID of the file. |
| Name | Name of the file  older |
| Mime type | Mime type of this file, as stated in [Google documentation](https://developers.google.com/drive/api/v3/mime-types). |
| Description | A short description of the file. |
| Starred | Whether the user has starred the file. |
| Trashed | Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash. |
| Explicitly trashed | Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder (e.g. when you trashed the whole parent folder) |
| Parents | The list of the parent folders which contain the file. |
| - ID | The ID of the parent folder which contain the file. |
| - List size | The number of the parent folders which contain the file. |
| Version | A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. |
| Web content link | A link for downloading the content of the file in a browser. This is only available for files with binary content in Drive. |
| Web view link | A link for opening the file in a relevant Google editor or viewer in a browser. |
| Icon link | A static, unauthenticated link to the file's icon. |
| Thumbnail link | A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. |
| Viewed by me | Whether the file has been viewed by this user. |
| Viewed by me time | The last time the file was viewed by this user (RFC 3339 date-time). |
| Created time | The time at which the file was created (RFC 3339 date-time). |
| Modified time | The last time the file was modified by anyone (RFC 3339 date-time). |
| Modified by me time | The last time the file was modified by this user (RFC 3339 date-time). |
| Sharing user | The user who shared the file with the requesting user, if applicable. |
| - Display name | A plain text displayable name for this user. |
| - Email address | The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. |
| - Permission ID | The user's ID as visible in Permission resources. |
| - Photo link | A link to the user's profile photo, if available. |
| - Me | Whether this user is the requesting user. |
| Owners | The list of owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for Team Drive files. |
| - Display name | A plain text displayable name for this user. |
| - Email address | A link to the user's profile photo, if available. |
| - Permission ID | The user's ID as visible in Permission resources. |
| - Photo link | A link to the user's profile photo, if available. |
| - Me | Whether this user is the requesting user. |
| - List size | Number of owners in this list. |
| Last modifying user | The last user to modify the file. |
| - Display name | A plain text displayable name for this user. |
| - Email address | The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. |
| - Permission ID | The user's ID as visible in Permission resources. |
| - Photo link | A link to the user's profile photo, if available. |
| - Me | 	Whether this user is the requesting user. |
| Shared | Whether the file has been shared. Not populated for Team Drive files. |
| Owned by me | Whether the user owns the file. Not populated for Team Drive files. |
| Viewers can copy content | Deprecated. |
| Writers can share | Whether users with only writer permission can modify the file's permissions. Not populated for Team Drive files. |
| Original filename | The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Drive. |
| Full file extension | The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension. |
| File extension | The final component of fullFileExtension. This is only available for files with binary content in Drive. |
| MD5 checksum | The MD5 checksum for the content of the file. This is only applicable to files with binary content in Drive. |
| Size | The size of the file's content in bytes. This is only applicable to files with binary content in Drive. |
| Quota byte used | The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled. |
| Head revision ID | The ID of the file's head revision. This is currently only available for files with binary content in Drive. |
