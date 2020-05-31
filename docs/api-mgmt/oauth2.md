---
title: API platform - 0Auth2.0
date: 2020-04-22 12:26:00 Z
---

# 0Auth 2.0 Token

Workato allows API platform users to authenticate themselves using the OAuth 2.0 (Client Credentials grant) specification. Instead of authentication credentials, the user makes API requests with OAuth 2.0 access tokens.

Users first obtain an access token from Workato's token request endpoint, after which they can make API calls to Workato API endpoints using the access tokens. Access tokens are valid for 1 hour. After this, users will need to generate a new access token to continue making API requests.

## How to setup OAuth2 .0

| Steps | Description |
| ----- | ----------- |
| 1. | Create an [access profile](/api-mgmt/api-client-mgmt.md#access-profile). Select **OAuth 2.0** as the authentication method.<br>![Access profile - OAuth 2.0 Authentication method](~@img/api-mgmt/access-profile-oauth2.png)*Access profile - OAuth 2.0 Authentication method* |
| 2. | Copy the access profile credentials (**Client ID** and **Client Secret**).<br>![Access profile - OAuth 2.0 Credentials](~@img/api-mgmt/oauth-credentials.png)*Access profile - OAuth 2.0 Credentials* |

## Request access token

Next, send a **POST** request to the Workato token request endpoint. The token request must contain the client credentials and `grant_type` parameter. The [RFC](https://tools.ietf.org/html/rfc6749#section-4.4) recommends that the client credentials should be encoded and sent in the header. See the example below.

```bash
curl -XPOST 'https://apim.workato.com/oauth2/token' \
-H 'Authorization: Basic Y2xpZW50OjY4NmI5NzNjYTIzYTIzOGFmYWJmOTc4MGE5N2Iw==' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=client_credentials'
```

> For applications that do not support header authentication, Workato will accept the `client_id` and `client_secret` in the body parameters.

You can also use tools like [Postman](https://www.postman.com/) to generate an access token.

![Request access token with Postman](~@img/api-mgmt/oauth-access-token-postman.png)
*Generate access token with Postman*

### Token request endpoint

The default token request endpoint is `https://apim.workato.com/oauth2/token`.

For API platform owners who have enabled [custom domains](/api-mgmt/custom-domain.md), the token request endpoints will follow the custom domain. For example, for the custom domain `api.boltcompany.com`, the token request endpoint is `api.boltcompany.com/oauth2/token`.

## Obtain OAuth 2.0 access token

Upon sending a successful access token request, Workato's authorization server will respond with a JSON object containing the following properties:

```json
{
    "access_token": "12cb1a7d52322fa0f669cd1f320e24ea2bf52b42b7345b924f7c2fa700b2e563",
    "token_type": "bearer",
    "expires_in": 3599
}
```

:::tip
Take note of the `exprires_in` field. Every access token will expire after 1 hour from the time it was generated.
:::

## Using OAuth 2.0 access token in API request

Use the OAuth 2.0 access token to make API calls to Workato API endpoints.

Provide the access token obtained in the authorization header, using the bearer authentication scheme. Learn more about making an API request [here](/api-mgmt/calling-apis.md).

```bash
curl -XGET 'https://apim.workato.com/prefix/api-endpoints-v1/call?email=john-doe%40acme.com'\
-H 'Authorization: Bearer 12cb1a7d52322fa0f669cd1f320e24ea2bf52b42b7345b924f7c2fa700b2e563' \

```
