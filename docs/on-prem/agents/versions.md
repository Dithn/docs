---
title: On-prem Agent - Version notes
date: 2020-04-22 12:00:00 Z
---

# OPA versions

The current version of the Workato On-Premise Agent (OPA) is `v2.6.1`.

Learn more about how to upgrade your OPA [here](/on-prem/agents/upgrade.md).

## v2.6
___

This is a major upgrade from [**v2.5**](#v2-5). In order to improve reliability and throughput, Workato introduced [on-prem groups](/on-prem/groups.md).

On-prem groups help achieve zero downtime for recipes that involves on-prem connections and prevent data and revenue loss through missing SLAs. All critical workflows running on on-prem connections are kept running 100% of the time because recipe can process jobs successfully even when one of the user’s on-prem servers goes down.

To do so, the OPA will be connecting to an expanded set of Workato on-prem gateways. If you are using a firewall whitelist to explicitly allow OPA traffic to the Workato cloud, you may need to expand the [firewall whitelist](/security/ip-whitelists.md#on-premise-agent) accordingly.

Learn more about on-prem groups [here](/on-prem/groups.md).

### 2.6.2

- Allow large HTTP headers
- Fixes LDAPS connection issue when using `trustAll` flag
- Support for SQL update-only queries
- Improved logging for Active Directory
- Fix for SQL Server stored procedure issue.

### 2.6.1

- Fixes a connectivity issue in v2.6.0.

### 2.6.0

- Major release.
- Introduce [on-prem groups](/on-prem/groups.md).
- Introduce High Availability (HA) and load balancing.

## v2.5
___

Workato On-prem agent now supports database connection pooling to reduce lag between reconnection attempts. Oracle Binary Large Object (BLOB) size limit has been increased.

### 2.5.7

- Fixes the issue with conenction pool not recycling connections properly.

### 2.5.6

- Support for database XML types
- Ensure that command-line script is fully read for background scripts.
- Update MySQL JDBC driver.

### 2.5.5

- Allows cancelling database queries on recipe job timeout.
- Fixes Active Directory issue with retrieving a schema.

### 2.5.4

- Support for SAP connector array types.
- Log rotation feature.

### 2.5.3

- Fixes reconnection delay.
- Fixes for SAP connector classpath issue.
- Fixes the issue with uninstalling a Windows service.

### 2.5.2

- Fixes Windows service configuration shortcut.

### 2.5.1

- Fixes proxy authentication issues on initial connect.

### 2.5.0

- Support for database connection pooling.
- Oracle **SELECT** performance enhancements.
- Allow Oracle BLOBs larger than 4000 bytes.
- Added digital signature to Windows Installer.
- Windows installer is now able to deploy several agent instances on the same box.
- Fixes the issue of multiple connection attempts using the same key. When the agent recognizes that two or more agents are using same key, it will stop reconnecting.

