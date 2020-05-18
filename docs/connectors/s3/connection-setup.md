---
title: Workato connectors - Amazon S3 - Connection setup
date: 2017-02-16 06:15:00 Z
---

# Amazon S3 Connection

## How to connect to Amazon S3 on Workato
The Amazon S3 connector uses the [AWS Signature Version 4](http://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) to authenticate to Amazon S3. There are 2 ways to connect:
1) Using [Access Key](#connect-to-amazon-s3-using-access-key)
2) Using [IAM role](#connect-to-amazon-s3-using-iam-role)

## Connect to Amazon S3 using Access Key

The simplest way to connect to Amazon S3 is to provision a Workato IAM user. For this authentication method, you will need to provide the [user credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html).

Workato will perform operations in your Amazon S3 as this IAM User. To use the full set of triggers and actions, the IAM User should have **List**/**Read**/**Write** permission to specific buckets & folders.

Refer to [Amazon documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) to learn how to create an IAM User.

![Authorization method - Access key](~@img/connectors/amazon-s3/auth-access-key.png)
*Authorization method - Access key*

### Input fields for Access Key

| Field              | Description |
| :----------------- | :---------- |
| Connection name    | Give this connection a unique name that identifies which S3 instance it is connected to. |
| Authorization type | Select **Access Key**. |
| Access key ID      | The ID of the IAM user. |
| Secret access key  | The secret of the IAM user. |
| Restrict to bucket | Define which bucket this connection is restricted to. |
| Region             | Provide the region for this S3 account.
| Download threads   | The default is one thread. |

## Connect to Amazon S3 using IAM Role

If you prefer not to share your Amazon S3 access key, you can connect using [IAM Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html).

By provisioning a dedicated IAM profile, the owner of the S3 instance can grant Workato access to AWS resources without sharing AWS security credentials. It also helps to maintain permission boundaries, including controlled access to specific AWS folders and actions that are permitted by the third-party application (e.g. Workato).

Workato recommends to grant only the required permissions and avoid using `AmazonS3AllAccess` whenever possible.

In this method, you will create an IAM Role for an external Workato's Amazon S3 account to access your Amazon S3. Learn more about IAM Role and granting access to third-party in this [Amazon documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).

![Authorization method - IAM role](~@img/connectors/amazon-s3/auth-iam-role.png)
*Authorization method - IAM role*

### Input fields for IAM role

| Field              | Description |
| :----------------- | :---------- |
| Connection name    | Give this connection a unique name that identifies which S3 instance it is connected to. |
| Authorization type | Select **IAM role**. |
| IAM role ARN       | The IAM role ARN. Find out how to retrieve this [here](#how-to-retrieve-iam-role-arn).<br><br>**Note**: Workato will generate a unique **external id** (e.g. `workato-user-84762`). This value is different for every Workato user and must be provided when creating an IAM role in S3. |
| Restrict to bucket | Define which bucket this connection is restricted to. |
| Region             | Provide the region for this S3 account.
| Download threads   | The default is one thread. |

### How to retrieve IAM role ARN

Follow these steps to retrieve the **Role ARN** required for the connection setup. Remember to use the Workato generated external ID found in the connection page.

| Steps | Description |
| :---- | :---------- |
| 1.    | Navigate to **My Security Credentials**.<br>![My Security Credentials](~@img/connectors/amazon-s3/security-credentials.png) |
| 2.    | Select **Roles** > **Create role**.<br>![Create role](~@img/connectors/amazon-s3/create-role.png) |
| 3.    | Select **Another AWS account**. Input Workato's Amazon S3 Account ID (`353360065216`).<br>![Workato Amazon S3 Account ID](~@img/connectors/amazon-s3/trusted-entity.png) |
| 4.    | Select **Require external ID** and provide the Workato generated **External ID**.<br><br>Every Workato user will have a unique **External id** (e.g. `workato-user-84762`). You can find this value in the **IAM role ARN** portion of the  [connection setup](#input-fields-for-iam-role).<br>![Require External ID](~@img/connectors/amazon-s3/require-external-id.png) |
| 5.    | Select proper permissions for Workato to run automation in your Amazon S3. At the minimum, Workato should have List/Read/Write access to specific buckets or folders. In this tutorial, we will select `AmazonS3FullAccess`. Workato recommends granting only the required permissions and avoid using `AmazonS3AllAccess` whenever possible.<br>![Select permissions](~@img/connectors/amazon-s3/select-permissions.png) |
| 6. (optional) | If you are using object taggings, select an appropriate tag for this IAM role.<br>![Add tag](~@img/connectors/amazon-s3/add-tag.png) |
| 7.    | Give this IAM Role an appropriate name & description.<br>Workato recommends that role name avoids using a non-guessable resource-id in the urn and does not include the external id.<br>![Review role](~@img/connectors/amazon-s3/review-role.png)
| 8.    | The IAM Role is now created. Select the role.<br>![Select IAM role](~@img/connectors/amazon-s3/select-iam-role.png) |
| 9.    | Copy the **Role ARN**. You will need to use this in the [connection setup](#input-fields-for-iam-role) when creating an Amazon S3 connection in Workato.<br>![Copy role ARN](~@img/connectors/amazon-s3/copy-role-arn.png) |

