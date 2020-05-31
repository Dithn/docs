---
title: SDK - OAuth 2.0
date: 2018-05-24 14:00:00 Z
---

# OAuth 2.0
For a more secure method of authentication, we recommend using [OAuth 2.0](https://tools.ietf.org/html/rfc6749). It is an open standard and a more secure way for users to log into third party websites without exposing their credentials.

> OAuth 2.0 authenticates a user on our connector by sending their browser over to the target applications website. Users can log in over there directly and the application sends their browser back to Workato with a token which the connector can now use to authenticate any future HTTP requests. This improves security as the user never has to give their username and password credentials directly to Workato.

There are many variants of the OAuth2 standard. By default, the Workato connector SDK supports the [Authorization Code Grant](https://tools.ietf.org/html/rfc6749#section-4.1) variant.

## Authorization Code Variant
To create an OAuth 2.0 flow, we need to gather a few pieces of information from the API we want to build a connector to. This information should be readily available if the API has followed the open standard for OAuth 2.0.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Information needed</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Authorization URL</td>
      <td>This is the URL that we will send the user's browser to so that he/she can authenticate themselve directly</td>
    </tr>
    <tr>
      <td>Token URL</td>
      <td>This is where Workato goes to so that it can retrieve a token that can prove its identity to the API</td>
    </tr>
    <tr>
      <td>Client ID</td>
      <td>This is the "username" that this specific custom connector has registered with the API. This might mean signing Workato up as a verified application in the application</td>
    </tr>
    <tr>
      <td>Client secret</td>
      <td>This is the "password" that this specific custom connector has registered with the API. This might mean signing Workato up as a verified application in the application. <b>Never share your client secret with others</b></td>
    </tr>
  </tbody>
</table>

Do read up about the OAuth 2.0 authorization flow over [here](https://tools.ietf.org/html/rfc6749) if you'd like to know more.

Redirect URLs will be appended to the authorization request by the framework, so there is no need to include it. If the application requires that you register the redirect URI beforehand, use: https://www.workato.com/oauth/callback

### Sample code snippet
Here we have a example of an object with a connection block which has an OAuth 2.0 flow set up.
```ruby
{
  title: 'My Podio connector',

  connection: {
    fields: [
      {
        name: 'client_id',
        optional: false
      },
      {
        name: 'client_secret',
        optional: false,
        control_type: 'password'
      }
    ],
    authorization: {
      type: "oauth2",

      authorization_url: lambda do
        "https://podio.com/oauth/authorize"
      end,

      token_url: lambda do
        "https://podio.com/oauth/token"
      end,

      client_id: lambda do |connection|
       connection['client_id']
      end,

      client_secret: lambda do |connection|
       connection['client_secret']
      end,

      apply: lambda do |connection, access_token|
        headers("Authorization": "OAuth2 #{access_token}")
      end
    }
  },

  test: {
    # Some code here
  },
  actions: {
    # Some code here
  },
  triggers: {
    # Some code here
  },
  object_definitions: {
    # Some code here
  },
  picklists: {
    # Some code here
  },
  methods: {
    # Some code here
  },
}
```
> In cases where you plan to share your connector with others and do not want to expose your personal client ID and secret, you may ask users of your connector supply their own client IDs and secrets by declaring fields that accept these inputs. Check out our example below when we go through variations

### apply:
All requests made in actions, triggers, tests and pick lists will be applied with the credentials defined here. In the example above, the apply block pulls the `token` field directly from user input fields in the `connection` object.

Here are a list of accepted inputs into the apply block

```ruby
apply: lambda do |connection|
  # Adds in URL parameters passed as a hash object
  # i.e. authtoken=[connection['authtoken']]
  params(authtoken: connection['authtoken'])

  #Adds in payload fields (PATCH, POST, PUT only) pass as hash
  payload(grant_type: "authorization_code",
          client_id: connection["client_id"],
          client_secret: connection["client_secret"],
          code: auth_code)

  # Adds in headers into every request passed as a hash.
  # The variable access_token can be retrieved from input prompts defined in the 'fields' schema earlier or a return from the acquire block
  # i.e. Authorization : Bearer [given access token]
  headers("Authorization": "Bearer #{connection["access_token"]}")

  # Used in conjunction with password function
  # i.e. sends the input as username and password in HTTP authentication
  user(connection["username"])
  password(connection["username"])
end
```

> The `apply` block will not be applied to any requests made in `acquire`. So you will have to include the required credentials for a successful API request there.

Note:
- SDK makes a form url encoded POST request to the authorization and token endpoint. If a different type of request is expected, look at [Custom token authentication](/developing-connectors/sdk/authentication/custom-authentication.md)
- The `token_url` is required if the `acquire` or `refresh` hooks are not present (see below).
- Ensure that your implementation of OAuth 2.0 is compliant with the specifications stated in the [RFC document](https://tools.ietf.org/html/rfc6749). Else, your custom adapter might not start.
  - For example, related to [Issuing an Access Token - Successful Response](https://tools.ietf.org/html/rfc6749#section-5.1), Workato will be expecting a response with `access_token` in the response. Returning the access token under a key of `accessToken` in a JSON response will result in an unsuccessful Workato request to your `token_url`.
  - Usually this will not be a problem because most OAuth libraries out there will do most of the heavy lifting for you, such as returning response in the right format etc. It is good to be aware of this!

## Variations
The `token_url` is called using a `POST` request with the provided `client_id` and `client_secret` appended into the header.

In cases that deviate from the normal standard authentication flows, use our `acquire` block. This block allows you to define the HTTP calls that occurs during the authentication process. For example, some APIs require the authorization token to be obtained by using a `POST` request with basic authentication.

### Using the `acquire` block
In the case below, we used the acquire block to send a `POST` HTTP call with basic authentication since our `token_url` block defaults to header authentication. You can then pull the `access_token` and `refresh_token` from the response to the `POST` call.

```ruby
{
  title: 'My Purecloud connector',

  connection: {
    fields: [
      {
        name: 'client_id',
        label: 'Client ID',
        optional: false
      },
      {
        name: 'client_secret',
        label: 'Client secret',
        control_type: 'password',
        optional: false
      }
    ],
    authorization: {
      type: "oauth2",

      authorization_url: lambda do |connection|
        params = {
          response_type: "code",
          client_id: connection["client_id"]
        }.to_param

        "https://login.mypurecloud.com/oauth/authorize?" + params
      end,

      acquire: lambda do |connection, auth_code|
        response = post("https://login.mypurecloud.com/oauth/token").
          payload(
            grant_type: "authorization_code",
            code: auth_code,
            redirect_uri: "https://www.workato.com/oauth/callback"
          ).
          user(connection["client_id"]).
          password(connection["client_secret"]).
          request_format_www_form_urlencoded

          # After defining the POST method, we now need to define the output of the acquire block in a fashion that we can recognise
          [
            {
              access_token: response["access_token"],
              refresh_token: response["refresh_token"],
            },
            nil,
            { instance_id: nil } # Optional. Will be merged into connection hash
          ]
        end,

        apply: lambda do |connection, access_token|
          headers("Authorization": "Bearer #{connection["access_token"]}")
        end
      }
    },

    test: {
      # Some code here
    },
    actions: {
      # Some code here
    },
    triggers: {
      # Some code here
    },
    object_definitions: {
      # Some code here
    },
    picklists: {
      # Some code here
    },
    methods: {
      # Some code here
    },
  }
```

The methods `.user` and `.password` are the equivalent of appending `Authorization: BASIC ` and `<user>:<password>` in BASE-64 String encoding in the `POST` request header. Note that the request must be sent with `request_format_www_form_urlencoded`.

Upon receiving a the request, the API returns a JSON response. These can be accessed using the `response[key...]` variable defined. For example, if the call returns

```JSON
{
  "access_token": 12345,
  "refresh_token": 12345,
  "settings": "no"
}
```
Since we passed this output hash into the `response` variable, we can retrieve the `access_token` by referencing `response[access_token]`.

Take note that an array of hashes is expected when using the `acquire` block for OAuth 2.0 authentication methods but we expect a hash when using the `acquire` block for custom authentication methods. When using custom OAuth2 type connection, the `acquire` block must return an array with the following values in sequence:

- Tokens
- Owner ID
- Other values

```ruby
[
	{ # This hash is for your tokens
	  access_token: response["access_token"],
	  refresh_token: response["refresh_token"],
	},
  # This hash is for your Owner ID. It is optional
	nil,
  # This is for any other value you want to append to your connection object which you can reference later on.
	{ instance_id: nil }
]
```

#### Tokens
Tokens provided must be a hash with the exact key names (`access_token`, `refresh_token`). If the API returns tokens with other keys (eg: `id_access` and `id_refresh` respectively), you can map them here like so:

```ruby
{
  access_token: response["id_access"],
  refresh_token: response["id_refresh"]
}
```

Refresh tokens are optional. You can read more about them [here](#refresh-tokens).

#### Owner ID
This is an optional value used for clobber detection (substitute with `nil` if not used)

#### Other values
Here you can supply an optional hash that will be merged with the **original connection hash**. Assuming you have this original connection hash:

```ruby
{
  client_id: "CLIENT_ID",
  client_secret: "CLIENT_SECRET"
}
```

and you wish to merge the `settings` value from the response earlier, you can pass it here with the following hash:

```ruby
{ api_settings: response["settings"] }
```

The resulting connection hash will look like this:

```ruby
{
  client_id: "CLIENT_ID",
  client_secret: "CLIENT_SECRET",
  api_settings: response["settings"]
}
```

In the rest of the custom adapter, this value can be referenced with `connection["api_settings"]`.

## Refresh tokens
There may be situations in which the API expires the access token after a prescribed amount of time. In these cases, the refresh token is used to obtain a new access token. Refresh tokens do not usually expire.

Note that not all APIs issue refresh token credentials. Check with your provider about this requirement.

In the below example, the Namely API asks for the `refresh_token` to be appended in the payload of the refresh request.

```ruby
{
  title: 'My Purecloud connector',

  connection: {
    fields: [
      { name: "domain", control_type: "text", optional: false },
      { name: "client_id", control_type: "password", optional: false },
      { name: "client_secret", control_type: "password", optional: false }
    ],

    authorization: {
      type: "oauth2",

      authorization_url: lambda do |connection|
        params = {
          response_type: "code",
          client_id: connection["client_id"],
          redirect_uri: "https://www.workato.com/oauth/callback",
        }.to_param

        "https://#{connection["domain"]}.namely.com/api/v1/oauth2/authorize?" + params
      end,

      acquire: lambda do |connection, auth_code|
       response = post("https://#{connection["domain"]}.namely.com/api/v1/oauth2/token").
                    payload(
                      grant_type: "authorization_code",
                      client_id: connection["client_id"],
                      client_secret: connection["client_secret"],
                      code: auth_code
                    ).
                    request_format_www_form_urlencoded

        [
          {
            access_token: response["access_token"],
            refresh_token: response["refresh_token"]
          },
          nil, # Optional. This is for your Owner ID if needed
          { instance_id: nil }  # Optional. Will be merged into connection hash
        ]
      end,

      refresh_on: [401, 403],

      refresh: lambda do |connection, refresh_token|
        response = post("https://#{connection["domain"]}.namely.com/api/v1/oauth2/token").
                      payload(
                        grant_type: "refresh_token",
                        client_id: connection["client_id"],
                        client_secret: connection["client_secret"],
                        refresh_token: refresh_token,
                        redirect_uri: "https://www.workato.com/oauth/callback"
                      ).
                      request_format_www_form_urlencoded
        [
          { # This hash is for your tokens
            access_token: response["access_token"],
            refresh_token: response["refresh_token"]
          },
          { instance_id: nil } # Optional. Will be merged into connection hash
        ]   
      end,

      apply: lambda do |connection, access_token|
        headers("Authorization": "Bearer #{access_token}")
      end
    }
  },

  test: {
    # Some code here
  },
  actions: {
    # Some code here
  },
  triggers: {
    # Some code here
  },
  object_definitions: {
    # Some code here
  },
  picklists: {
    # Some code here
  },
  methods: {
    # Some code here
  },
}
```

### Output of `refresh` block
Take note that an array of hashes is expected when using the `refresh` block for OAuth 2.0 authentication methods. When refreshing an OAuth 2.0 connection, the `refresh` block must return an array with the following values in sequence. This works in exactly the same way as the output of the `acquire` block *except without `Owner ID`*

- Tokens
- Other values

::: tip
Before this, users were able to give a single hash as the output of the `refresh` block like the sample below.
```
{
  access_token: response["access_token"],
  refresh_token: response["refresh_token"]
}
```
This is still supported but not recommended.
:::

### Using the `refresh_on` block
This is an optional array of signals that is used to identify a need to re-acquire credentials . When an erroneous response is received (400, 401, 500...), the SDK framework checks it against this list of signals.

This list is optional. If not defined, will default to one attempt at re-acquiring credentials for all errors.

```ruby
refresh_on: [
  401,
  "Unauthorized",
  /Unauthorized/,
  /Invalid Ticket Id/
]
```

The example here shows multiple ways that we can define "signals" to watch.

- `401`: The response status code
- `"Unauthorized"`: The exact string matching the whole body or title of response
- `/Unauthorized/`: Regex matching the body or title of response
- `/Invalid Ticket Id/`: The actual "message" to watch for

If a match is found, it triggers a re-authorization (execute `refresh`, otherwise `acquire`).

### Using the `detect_on` block
Certain APIs don't signal errors with explicit response status code like a 401. Instead, they return a 200 (pseudo successful response) with a payload that signals the error.

For such APIs, an error (expired credentials, bad requests etc.) will not be picked up since it is interpreted as a successful request (Status code 200). A match with the signals defined here will raise an error.

When there is a match here, two things can happen.

Firstly, there can also be a match against refresh_on signals. When that happens, a re-authorization is triggered (acquire block is executed) instead of raising an error. In this case, detect_on is used to match errors hidden behind responses with status code 200, then used to identify that a credentials refresh is required.

If a match here does not match any of the signals defined in refresh_on, an error will be raised.

```ruby
detect_on: [
  "sample error message",
  /^\{"response":\{"error".+$/
]
```

There are two ways to match:

- `"Unauthorized"`: The exact string matching the whole body of response
- `/^\{"response":\{"error".+$/`: Regex matching the body of response

This list is optional. If not defined, pseudo successful response will be treated as a successful request instead of raising exceptions. Note: output values of trigger and action will be affected.

The `refresh_on`, `refresh` and `detect_on` hooks are also used in [Custom Authentication](/developing-connectors/sdk/authentication/custom-authentication.md#using-the-refresh-on-block).

### Other authentication methods
Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. [Go back to our list of authentication methods](/developing-connectors/sdk/authentication.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips.

### Next section
If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk/action.md)
