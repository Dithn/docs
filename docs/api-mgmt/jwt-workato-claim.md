---
title: JWT Token
date: 2020-04-18 12:26:00 Z
---

# JWT Workato claim

Identity providers streamline the process of maintaining verified access to multiple applications. The end user only needs to authenticate with the identity provider. Subsequently, the end user can access multiple applications and services without needing to remember additional sets of credentials. For example, the identity provider will issue JWT tokens that allow the end user to make authenticated requests with Workato API platform.

![Identity provider issues JWT to the end user, who uses it to obtain verified access to Workato API platform](~@img/api-mgmt/jwt-flow.png)
*Identity provider issues JWT to the end user, who uses it to obtain verified access to Workato API platform*

When Workato receives an incoming request, the JWT token is checked to see if it contains a valid API key. This is done to determine that the request is coming from a valid access profile. If no valid token is found, the API request will return a `403 forbidden` error.

Workato will inspect the following JWT claims in sequential order. Workato identifies the **first claim** that is not empty and compares the claim value with an internal list of known access profiles. If the token is not verified, the API request will return a `403 forbidden` error. Otherwise, if a valid API key is found, the API request will be successful.

| Priority | Part | JWT claims | Description |
| :------: | :--: | ---------- | ----------- |
| 1st | _payload_ | `https://www.workato.com/sub ` | This is a namespace claim. As it uses unique names, this claim is unlikely to be restricted by the identity providers. |
| 2nd | _payload_ | `workato_sub` | Workato will inspect this claim if the above claims are empty. |
| 3rd | _header_  | `kid` | This is a header claim. Workato will inspect this claim if the above claims are empty. |
| 4th | _payload_ | `sub` | This represents the subject of the JWT. Some identity providers reserve this JWT claim and thus Workato API key cannot be used here. Workato will inspect this claim if the above claims are empty. |

## How to configure Workato claim

Workato claim works with most identity providers, including [ADFS](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services), [Auth0](https://auth0.com/), and [Okta](https://www.okta.com/). Let’s go through an example of configuring a workato claim for [Auth0](https://auth0.com/). This identity provider restricts the `kid` and `sub` claims. Furthermore, Auth0 requires all custom claims to be namespace. Hence, we will be configuring a namespace claim to hold our API key.

![Configure JWT in Auth0](~@img/api-mgmt/auth0-configure-jwt-flow.png)
*Configure JWT in Auth0*

This process consists of three stages:
1. Obtain the [RSA certificate](#_1-obtain-rsa-certificate) from Auth0.
2. Configure an access profile in Workato API platform and [obtain the API key](#_2-configure-workato-access-profile).
3. Configure Auth0 application metadata and [JWT namespace claim](#_3-configure-jwt-claim).

## 1. Obtain RSA certificate

First, create an application in Auth0 and obtain the RSA certificate.

| Steps | Description |
| ----- | ----------- |
| 1.    | Select **APIs** from the sidebar > **Create API**.<br>![Create Auth0 API](~@img/api-mgmt/auth0-configure-create-api.png)*Create Auth0 API* |
| 2.    | Define the name, identifiter, and signing algorithm.<br>**Workato recommends using RS256**.<br>![Set signing algorithm to RS256](~@img/api-mgmt/auth0-configure-rs256-api.png)*Set signing algorithm to RS256* |
| 3.    | Select **Applications** from the sidebar > **Create application**.![Create Auth0 application](~@img/api-mgmt/auth0-configure-create-application.png)*Create Auth0 application* |
| 4.    | Select **Machine to Machine**. Since, we are using an Auth0 API, Auth0 recommends using the [M2M configuration](https://auth0.com/docs/applications).<br>![Configure Auth0 application](~@img/api-mgmt/auth0-configure-choose-m2m.png)*Configure Auth0 application* |
| 5.    | Select the API that you have just created.<br>![Connect to Auth0 API](~@img/api-mgmt/auth0-configure-choose-api.png)*Connect the Auth0 API and application* |
| 6.    | In the Auth0 application, find the **Settings** tab > **Application Tokens** > **Advanced settings**<br>![Open advanced settings](~@img/api-mgmt/auth0-configure-advanced-settings.png)*Open advanced settings* |
| 7.    | Find the **Certificate** tab > copy the **Signing certificate**. We will use this to configure the Workato access profile in the next stage.<br>We will turn to this page in the 3rd stage.<br>![Obtain RSA certificate](~@img/api-mgmt/auth-configure-copy-certificate.png)*Obtain RSA certicate* |

## 2. Configure Workato access profile

Next, configure an access profile in Workato and obtain the API key.

| Steps | Description |
| ----- | ----------- |
| 1.    | Find **Tools** > **API platform** > select a Client > **Create access profile**. Learn more about API clients [here](/api-mgmt/api-client-mgmt#api-clients).<br>![Open Workato API platform](~@img/api-mgmt/open-api-platform.png)*Open Workato API platform* |
| 2.    | Select **JSON Web Taken (JWT)** as the authentication method. Profide the **RSA certificate** from the previously stage. Learn more about configuring access profiles [here](/api-mgmt/api-client-mgmt#create-new-access-profile).<br>![Provide RSA certificate](~@img/api-mgmt/auth0-configure-provide-certifcate.png)*Provide RSA certificate* |
| 3.    | Locate and copy the **API key** to the access profile you have just created.<br>![Copy API key](~@img/api-mgmt/copy-client-url.png)*Copy API key* |

## 3. Configure JWT claim

Lastly, configure the API key value into a namespace claim on Auth0.

| Steps | Description |
| ----- | ----------- |
| 1.    | Go to **Advanced settings** > find the **Application metadata** tab. Input the following `key=workato_sub`, ` value=<API-TOKEN>`. Then, select **Save changes**.<br>![Save API key in Auth0 application](~@img/api-mgmt/auth0-configure-add-token.png)*Save API key in Auth0 application* |
| 2.    | Select **Hooks** from the sidebar > **Create new hook**.<br>![Create new hook](~@img/api-mgmt/auth0-configure-create-hook.png)*Create new hook* |
| 3.    | Select **Client credentials exchange**. This step adds a custom Workato claim to the [JWT token](https://auth0.com/docs/hooks/extensibility-points/client-credentials-exchange) that is generate by Auth0.<br>![Select client credentials exchange](~@img/api-mgmt/auth0-configure-configure-hook.png)*Select client credentials exchange* |
| 4.    | Open the hook that you have just created.<br>![Edit hook](@img/api-mgmt/auth0-configure-edit-hook.png)*Edit hook* |
| 5.    | Add this line following line, remember to click **Save**.<br>`access_token['https://www.workato.com/sub'] = client.metadata.workato_sub;`<br><br>Congradualations, you have configured a JWT namespace claim!<br>![Add new line to hook](~@img/api-mgmt/auth0-configure-add-hook-line.png)*Add new line to hook* |
| 6.    | Now, it is time to test your new JWT token. Select **APIs** from the sidebar > Go to the API you have just created > Find the **Test** tab.<br><br>Copy the example and make an API call to Auth0.<br>![Request JWT token from Auth0](~@img/api-mgmt/auth0-configure-request-jwt.png)*Request JWT token from Auth0* |
| 7.    | You should receive a response containing the JWT token. Now you can send requests to Workato API using this JWT token in the authentication header.<br>![KWT token from Auth0](~@img/api-mgmt/auth0-configure-jwt-token.png)*JWT token from Auth0* |
| 8.    | If you decode the JWT token using an external resource (like [jwt.io](https://jwt.io)), you can observe that there is a JWT namespace claim in the JWT payload.<br>![Namespace claim in JWT token](~@img/api-mgmt/auth0-configure-namespace-claim.png)*Namespace claim in JWT token* |
