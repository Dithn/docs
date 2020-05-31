---
title: Workato connectors - Amazon S3 action - Create bucket
date: 2018-12-13 23:00:00 Z
---

# Amazon S3 action - Create bucket
This action creates a new bucket in Amazon S3.

![Amazon S3 - Create bucket action](~@img/connectors/amazon-s3/create-bucket-action.png)
*Amazon S3 - Create bucket action*

## Input fields
| Field name    | Description |
| ------------- | ----------- |
| Bucket name   | Bucket name should be 3-63 characters long. Please refer to [Amazon S3 Rules for Bucket Naming](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). |
| Bucket region | The region where you want the bucket to reside.  Please refer to the [list of valid bucket regions](#list-of-valid-bucket-regions) below. |
| Canned ACL    | Use [Amazon's Canned Access Control List](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to specify permissions for this bucket. |

## Output fields
There is no output for this action.

## List of valid bucket regions
Amazon S3 bucket can be set to reside in the following regions:

| Region name               | Region value      |
| ------------------------- | ----------------- |
| US West (N. California)   | us-west-1         |
| US West (Oregon)          | us-west-2         |
| Canada (Central)          | ca-central-1      |
| EU (Ireland)              | eu-west-1         |
| EU (London)               | eu-west-2         |
| EU (Paris)                | eu-west-3         |
| EU (Frankfurt)            | eu-central-1      |
| Asia Pacific (Mumbai)     | ap-south-1        |
| Asia Pacific (Singapore)  | ap-southeast-1    |
| Asia Pacific (Sydney)     | ap-southeast-2    |
| Asia Pacific (Tokyo)      | ap-northeast-1    |
| Asia Pacific (Seoul)      | ap-northeast-2    |
| Asia Pacific (Osaka-Local) | ap-northeast-3   |
| South America (São Paulo) | sa-east-1         |
| US East (N. Virginia)     | us-east-1         |
| US East (Ohio)            | us-east-2         |
| China (Beijing)           | cn-north-1        |
| China (Ningxia)           | cn-northwest-1    |

See the [Amazon S3 documentation](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) for more information.
