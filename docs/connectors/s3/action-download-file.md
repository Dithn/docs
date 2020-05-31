---
title: Workato connectors - Amazon S3 action - Download file
date: 2018-12-13 23:00:00 Z
---

# Amazon S3 action - Download file
This action downloads contents of a file in Amazon S3. File contents can be used in subsequent steps of the recipe to upload the file into other applications.

This action uses [streaming mechanism](/features/file-streaming.md) and can support large file. However, the maximum file size you can download depends on how long the download takes. It is limit to Workato's job runtime limit (**5400 seconds**). Consider enabling [Amazon S3 transfer acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) to speed up the download.

![Amazon S3 - Download file action](~@img/connectors/amazon-s3/download-file-action.png)
*Amazon S3 - Download file action*

## Input fields
| Field name  | Description |
| ----------- | ----------- |
| Region      | The region of the bucket to download the file from, e.g. us-west-2. In Amazon S3, go to **Bucket > Properties > Static website hosting** to find your region in the Endpoint URL. |
| Bucket name | The bucket to download the file from. Enter the bucket name directly, this is case sensitive. |
| Object name | The name of the file to download. |
| Use accelerated endpoint | Specify **true** if [Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) is enabled for your Amazon S3 instance. |
| Download chunk size in kilobytes | File contents will be [streamed](/features/file-streaming.md) in chunks of this size. Default is 1024 KB, minimum is 32 KB. Workato manages the chunk size automatically by default. Configure this when you want to optimize the data throughput yourself. Larger chunk size will increase throughput, but may exceed API limit. |

## Output fields
| Field name    | Description |
| ------------- | ----------- |
| File contents | The contents of the file. This is a [streaming object](/features/file-streaming.md). |
| Size          | The size of the file in bytes. |
