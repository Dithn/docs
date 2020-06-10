---
title: Key Rotation
date: 2019-09-13 19:45:00 Z
---

# Key rotation

Security comes in many forms, one of them is how the data is stored securely.

With regulations such as GDPR, data protection has become increasingly important for all organizations, big and small.

## Overview

By default, Workato encrypts all data at rest. Key rotation automatically rotates  encryption keys every hour. New rotated keys are considered active keys used for encrypting the data for storage. Active keys become inactive at the end of the hour from when it was generated. Inactive keys are then only used for decrypting data.

* By regularly rotating encryption key used every hour, volume of data that remains unprotected is limited if a key is compromised.

* Workato follows industry best practice to store encryption key and encrypted data in separate storage providing greater level of protection against data compromise.
* At the end of data retention period, all encrypted data and the key used to encrypt it are destroyed
* Key rotation restricts the usage of encryption key to just one hour

## How it works

![Encryption key rotation](~@img/security/data-protection/encryption-key-management/hourly-key-rotation.png)
*Example encryption key rotation*

* Workato key management generates new encryption key `Key1` when needed
* For next one hour, the newly generated encryption key `Key1` is considered active key and is used to encrypt the data `Job1` and `Job2`
* At the end of one hour, encryption key is rotated and new `Key2` key is generated
* `Key2` is used to encrypt data beginning `10:00 AM` for `Job3` and `Job4`
* `Key1` becomes inactive and is used only for decrypting data
* Similarly, `Key2` becomes inactive at `11:00 AM` and is used only for decrypting data
* When [data retention period](/security/data-protection/data-retention-faq.md#customizing-data-retention-period) ends, the encryption key and the encrypted data is destroyed
* Above process repeats every hour

***Do I need to do anything to get key rotation?***

The encryption key rotation is completely transparent and automatic for Workato customers.
