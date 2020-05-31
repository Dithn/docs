---
title: Calling APIs
date: 2020-01-28 03:00:00 Z
---

# Calling APIs

APIs that are exposed through the API Platform console can be called from recipes in accounts other than one owning the recipe, as well as from third-party tools, programs, and scripts. The API manager must provide the Auth Token or JWT token value to the client in order to call any endpoints in an API Collection.

With raw content support, the API platform allow clients to send text based (e.g. XML/SOAP) requests and receive custom responses from the callable recipes exposed as REST endpoints. This extends the security benefits of Workato's recipes to API calls from other systems. See more [here](/features/callable-recipes/handling-raw-content.md).

# Authorization Headers

If the Access Profile specifies the **Auth Token** method of authentication, then the Auth Token value must be passed by the client as the value of the `API-Token` header. If the authorization method is **OAuth2.0** or **JSON Web Token**, then the value of the encoded and signed token is passed in the `Authorization` header, using the `Bearer` scheme.

| Header          | Authentication method | cURL Example |
| --------------- | --------------------- | ------------ |
| `API-Token`     | Auth token            | `-H 'API-TOKEN: 24ea2bf52b42b7345b9'` |
| `Authorization` | OAuth 2.0 & JWT token | `-H 'Authorization: Bearer 12cb1a7d5233'` |

# Calling an API Endpoint from a Recipe

An API Endpoint that belongs to another user can be called from a recipe using the HTTP Connector. Select the **Send request** action of the Connector. The following screen shows a typical configuration for this action (in this case a POST request):

![API Client Request](~@img/api-mgmt/api-client-request.png)
*API Client Request*

Make sure that the type of request (POST, PUT, GET) matches the API that you are calling. Any required fields need to be specified in the body (for POST and PUT) or as query parameters in the URL (for GET).

Also, note that an `API-Token` request header has been added. Its value should be set to the token that the API owner has supplied to you. (This assumes the **Auth Token** method of authentication).

> **Caution**
> Do not hard-code <b>API token</b> into input fields. Check out the recommended [security best practices](/recipes/recipe-security.md) for your recipe.

# Testing a Call to an API

Using the recipe test feature, you can run the recipe a single time and have it generate a call to the REST API. If successful, the API will return a 200 status and the recipe execution will continue to completion. There are several possible errors that can occur. Here are some of the common ones.

| Error code | Description | Details |
| ---------- | -- | ----|
| 401       | Unauthorized | This indicates a problem with the API token. It is missing or does not match the correct code for the API you are trying to call. |
| 404         | Not found | This may indicate that you have the incorrect URL in the request configuration on your side. Another possible cause is that the recipe you are calling is not running. Yet another possibility is that the recipe owner has either the API Collection or your client configuration set to **Disabled**. |
| 422       | Processing error | This indicate that there is an issue with the callable recipe - the job failed to complete. It could due to a mismatch between the request syntax and the expected syntax written in the recipe. |
| 500       | Server error | This usually indicates that the request parameters were missing or invalid for the API. |

# Calling the API from other clients

Clients can access the Open API description for the service by performing a GET request on the API URL and adding `/swagger` to the path. This URL should also have the API token as a query parameter. So for example, if the API URL is `https://workato.com/doc/service/sales-api-v1`, the Open API description is available at a URL like:

```bash
https://workato.com/doc/service/sales-api-v1/swagger?token=e6883d64843aaed62d48bcdf3cf4ebbf
```

The Open API description can be used by tools such as the [Swagger UI](https://swagger.io/tools/swagger-ui/) to make requests. For programmers, it is possible to generate API client code using [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).

Any other standard HTTP request tool, such as the command-line tool [cURL](https://curl.haxx.se/) or the popular open source tool [Postman](https://www.getpostman.com/), can be used to make requests.
