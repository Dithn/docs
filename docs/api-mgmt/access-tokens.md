---
title: Access Tokens
date: 2018-04-08 12:26:00 Z
---

# Access Token

Access tokens are strings that identify the client of a Callable Recipe. The token value is a secret that is shared between a client and the Workato server. A token is passed to the API in an authorization header. The header must have a valid value for the call to succeed.

Workato supports three token formats: [Auth Token](/api-mgmt/auth-token.md), [OAuth 2.0](/api-mgmt/oauth2.md) and [JSON Web Token (JWT)](/api-mgmt/jwt-token.md).

## Difference between Auth Token and JSON Web Token

| | Auth Token | OAuth 2.0 | JSON Web Token (JWT) |
| --------------------------------------------------- | --- | --- | --- |
| Simple to setup and configure into the API request. | Yes | Yes | Yes |
| Represents a Workato Access Profile.                | Yes | Yes | Yes |
| Can be reused for multiple web applications.        | No  | Yes | No  |
| Configured with token expiry.                       | No  | Yes | Optional |

Find out about how you can use access tokens with Workato API.
- [Auth Token](/api-mgmt/auth-token.md)
- [OAuth 2.0](/api-mgmt/oauth2.md)
- [JSON Web Token (JWT)](/api-mgmt/jwt-token.md)
