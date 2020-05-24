---
title: SDK - Dynamic Webhook Trigger
date: 2018-05-24 14:00:00 Z
---

# Dynamic Webhook Trigger
A dynamic webhook trigger is one that can programmatically be set up and torn down. This is something should be explicitly stated in the API of application that you are building a connector to. In the example below, you can define the process of setting up and tearing down webhooks in various blocks in the trigger object.

## Sample code snippet
```ruby
{
  title: 'My Cisco connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },
  actions: {
    # Some code here
  },
  triggers: {
    new_message: {

      input_fields: lambda do |object_definitions|
        object_definitions["room"].only("id")
      end,

      webhook_subscribe: lambda do |webhook_url, connection, input, recipe_id|
        post("https://api.ciscospark.com/v1/webhooks",
             name: "Workato recipe #{recipe_id}",
             targetUrl: webhook_url,
             resource: "messages",
             event: "created",
             filter: "roomId=#{input['id']}")
      end,

      webhook_notification: lambda do |input, payload|
        payload["data"]
      end,

      webhook_unsubscribe: lambda do |webhook|
        delete("https://api.ciscospark.com/v1/webhooks/#{webhook['id']}")
      end,

      dedup: lambda do |message|
        message["id"]
      end,

      output_fields: lambda do |object_definitions|
        object_definitions["message"]
      end
    }
  }
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

## `webhook_subscribe:`
When a recipe is started, a webhook subscription should be created. This webhook subscription should be given the "callback url" specific to the recipe to receive and process as jobs. This block is responsible for this subscription.

This block is executed whenever a recipe is started. The block usually contains the necessary API requests to create a webhook subscription. This request is typically a **POST** request with a payload containing the relevant data for successful event notifications.

Below we have the block inside our `new_message` trigger that handles the subscription of our webhook_url. Inside this block, we send a **POST** request to the Cisco spark API endpoint with the relevant details documented [here](https://developer.webex.com/docs/api/v1/webhooks/create-a-webhook). Tailor your webhook_subscribe block to send the expected HTTP request.

```ruby
webhook_subscribe: lambda do |webhook_url, connection, input, recipe_id|
  post("https://api.ciscospark.com/v1/webhooks",
       name: "Workato recipe #{recipe_id}",
       targetUrl: webhook_url,
       resource: "messages",
       event: "created",
       filter: "roomId=#{input['id']}")
end
```

| Argument | Description |
| -- | ----- |
| webhook_url | URL specific to the recipe. This URL is randomly generated and points to the recipe that uses this trigger. A second recipe that uses the same trigger will have a different unique URL. All webhook subscription will require this URL. |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| recipe_id | Recipe ID of the recipe using this trigger. This is useful to identify webhook-recipe pairs in the event of multiple pairs. |

> Take note that the variable `webhook_url` is an argument that is passed into the block by Workato. This should not be hardcoded.

The output of the `webhook_subscribe:` block is the response from the **POST** request in this example. It usually contains useful information about the webhook that is used in the future. This output will be stored and passed to the webhook_unsubscribe block as an argument which can be referenced as the `webhook` object.

```json
{
  "id" : "96abc2aa-3dcc-11e5-a152-fe34819cdc9a",
  "name" : "My Awesome Webhook",
  "targetUrl" : "https://example.com/mywebhook",
  "resource" : "messages",
  "event" : "created",
  "filter" : "roomId=Y2lzY29zcGFyazovL3VzL1JPT00vYmJjZWIxYWQtNDNmMS0zYjU4LTkxNDctZjE0YmIwYzRkMTU0",
  "secret" : "86dacc007724d8ea666f88fc77d918dad9537a15",
  "created" : "2015-10-18T14:26:16+00:00"
}
```

## `webhook_unsubscribe:`
This block will be called when a running recipe is stopped. It should contain an expression to unsubscribe from the existing webhook notifications.

```ruby
webhook_unsubscribe: lambda do |webhook, connection|
  delete("https://api.ciscospark.com/v1/webhooks/#{webhook['id']}")
end
```

| Argument | Description |
| -- | ----- |
| webhook | This will contain the output of the webhook_subscribe block. In this example, it will contain the JSON response shown above. For this particular API, making a DELETE request to the resource endpoint will unsubsribe the webhook from notifications and effectively stop the recipe from receive any new notifications. |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |

## `webhook_notification:`
When the webhook trigger receives a webhook notification, the payload is processed through this block. Here, we can access the desired key that contains the webhook notification data.

| Argument | Description |
| -- | ----- |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| payload | original payload from the webhook POST/PUT notification. |

Extract from the CiscoSpark API documentation:
> "When one of your webhooks is triggered, Spark will send an HTTP POST to your backend at the specified targetUrl. The body of the POST will look something like this:"

```json
{
  "id":"Y2lzY29zcGFyazovL3VzL1dFQkhPT0svZjRlNjA1NjAtNjYwMi00ZmIwLWEyNWEtOTQ5ODgxNjA5NDk3",
  "name":"Guild Chat to http://requestb.in/1jw0w3x1",
  "resource":"messages",
  "event":"created",
  "filter":"roomId=Y2lzY29zcGFyazovL3VzL1JPT00vY2RlMWRkNDAtMmYwZC0xMWU1LWJhOWMtN2I2NTU2ZDIyMDdi",
  "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi8xZWI2NWZkZi05NjQzLTQxN2YtOTk3NC1hZDcyY2FlMGUxMGY",
  "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8xZjdkZTVjYi04NTYxLTQ2NzEtYmMwMy1iYzk3NDMxNDQ0MmQ",
  "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
  "ownedBy": "creator",
  "status": "active",
  "actorId": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS8xZjdkZTVjYi04NTYxLTQ2NzEtYmMwMy1iYzk3NDMxNDQ0MmQ",
  "data":{
    "id":"Y2lzY29zcGFyazovL3VzL01FU1NBR0UvMzIzZWUyZjAtOWFhZC0xMWU1LTg1YmYtMWRhZjhkNDJlZjlj",
    "roomId":"Y2lzY29zcGFyazovL3VzL1JPT00vY2RlMWRkNDAtMmYwZC0xMWU1LWJhOWMtN2I2NTU2ZDIyMDdi",
    "personId":"Y2lzY29zcGFyazovL3VzL1BFT1BMRS9lM2EyNjA4OC1hNmRiLTQxZjgtOTliMC1hNTEyMzkyYzAwOTg",
    "personEmail":"person@example.com",
    "created":"2015-12-04T17:33:56.767Z"
  }
}
```

Looking at the sample payload, the main message data is contained in the "data" object. Hence, we just need to access and return this "data" object in the webhook_notification block output. This output is then processed in through the trigger into the recipe as a job. You can always configure this in the webhook_notification block to extract as much or as little from the payload object.

```ruby
webhook_notification: lambda do |input, payload|
  payload["data"]
end
```

## `output_fields:`
You can define output_fields in the same way you define input_fields. This time, however, we have used something called object_definitions to define the output schema, where we defined the schema for the `message` object once and can continue to reuse this same schema by referencing it in multiple areas in the custom connector code.

This is something we will cover later on in our [object definitions](/developing-connectors/sdk/object-definition.md) section.

## `sample_output:`
This optional block populates the datapills defined in the `output_fields:` block with some sample information for users. It is exposed as grey text next to datapills. Check out [best practices](/developing-connectors/sdk/best-practices.md) section on how to use sample_outputs.

```ruby
sample_output: lambda do |_connection, _input|
  {
    accounts: call("format_api_output_field_names",
                   get("/api/accounts",
                       return_object: "shallow",
                       limit: 1)&.compact)
  }
end
```

![Sample output](~@img/sdk/sample_output_sample.png)
*Sample outputs make your datapills more usable by giving some context to users.*

## Other optional blocks
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='10%'>Block</th>
        <th width='20%'>Example</th>        
        <th width='70%'>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>title:</code></td>
      <td><code>title: "This is the title of the action"</code></td>
      <td>This shows up as the main action/trigger name and override the name given to the action block. This is useful in naming actions and triggers that have special characters<br>
      <img src="~@img/sdk/title.png">
      </td>
    </tr>
    <tr>
      <td><code>subtitle:</code></td>
      <td><code>subtitle: "This is a subtitle"</code></td>
      <td>This shows up below the main action name when users are looking at the dropdown of possible actions<br>
      <img src="~@img/sdk/subtitle.png">
      </td>
    </tr>
    <tr>
      <td><code>description:</code></td>
      <td><code>description: "This is a description"</code></td>
      <td>This is what shows up as the summary of an action when looking at the recipe.<br>
      <img src="~@img/sdk/description.png">
      </td>
    </tr>
    <tr>
      <td><code>help:</code></td>
      <td><code>help: "This is a help text"</code></td>
      <td>This shows up as the help hint when users are configuring the action. Use this to detail any important information the user should have<br>
      <img src="~@img/sdk/help.png">
      </td>
    </tr>  
  </tbody>
</table>

## Other trigger types
Check out the other trigger types we support. [Go back to our list of triggers.](/developing-connectors/sdk/trigger.md)

## Next section
If you're already familiar with the trigger types we support, check out the various types of HTTP requests that our SDK supports as well as how to use them in your `connection:`, `actions:` and `triggers:` blocks. [Go to our HTTP methods documentation](/developing-connectors/sdk/http-requests-and-response-handling.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips on building triggers.
