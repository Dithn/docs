---
title: Developer program
date: 2019-05-08 17:00:00 Z
---

[![Workato](~@img/workato_developer_program.png)](https://www.workato.com)

# Introduction
Here you will find the SDK documentation you need to build custom connectors to applications Workato currently doesn't support just yet. Building a great connector on Workato means managing both technical aspects as well as the user experience that you provide to those using your connector.

Workato was built with the philosophy that anyone can do enterprise-level integrations without any coding involved. As such, connectors on the platform should aim to balance functionality with ease of use. Whether you're developing a connector for your own team's use or you're a 3rd party developer looking to list your connector on Workato, reading this documentation is useful in getting you started on your journey.

## What is a custom connector?
A connector allows Workato to interact with a single application through a series of [triggers](/recipes/triggers.md) and [actions](/recipes/actions.md). Triggers monitor for events that occur in the application you hope to connect to and kickstart a workflow of actions that we call [recipes](/workato-concepts.md#recipes). Actions carry out specific pre-defined operations in the target application.

Connectors built on the SDK are called **custom connectors**. These connectors have a private scope by default which means that they are only visible and available to the connector owner. After the connector is built and ready, you also have the ability to share it with others on various levels.

## Before we begin...
Workato has a whole host of other features and functionalities that might help you achieve what you are hoping for such as our universal HTTP connector or custom actions if your integration needs aren't so complex. [Learn more](/developing-connectors.md).

If you've decided that a custom connector is necessary, do check in at our [developer portal](https://developer.workato.com/) to see if anyone has contributed a custom connector to the application you're looking for. Our friendly support team via chat on our main website can also help you check our internal repository of custom connectors built by our customer success team.

Reading the SDK documentation is still useful as you'll be able to install these custom connectors and continue working on them if you wish to do so.

## Documentation Format
This section will list everything you need to know about our SDK as well as provide some guides, walkthroughs and example connectors that our users have built. You may use the links below to skip ahead to your desired section but it is recommended that you go through this documentation the order stated so as to not miss any of the features we have that might help you down the line.

> In our documentation, we default to JSON when giving examples. It is highly recommended that you read about how other data formats can be handled if the API you plan to connect to uses a different data format.

* [Quick Start guide to using the Workato SDK platform](/developing-connectors/sdk/quick-Start.md)
* [SDK Overview](/developing-connectors/sdk/SDK-conceptual-model.md)
* [Walkthrough - Building your first connector!](/developing-connectors/sdk/walk-through.md)
* [Data Format](/developing-connectors/sdk/data-format.md)
  * [JSON](/developing-connectors/sdk/data-format/json-format.md)
  * [XML](/developing-connectors/sdk/data-format/xml-format.md)
  * [Multipart form](/developing-connectors/sdk/data-format/request_format_multipart_form.md)
  * [URL encoded form](/developing-connectors/sdk/data-format/form-url-encoded.md)
* [Authentication](/developing-connectors/sdk/authentication.md)
  * [Basic Authentication](/developing-connectors/sdk/authentication/basic-authentication.md)
  * [Header Authentication](/developing-connectors/sdk/authentication/header-authentication.md)
  * [OAuth 2.0](/developing-connectors/sdk/authentication/oauth2-authentication.md)
  * [Custom Authentication](/developing-connectors/sdk/authentication/custom-authentication.md)
  * [Testing your connection](/developing-connectors/sdk/authentication/test.md)
  * [Defining a base URI](/developing-connectors/sdk/authentication/base_uri.md)
  * [On premises connections](/developing-connectors/sdk/authentication/secure_connection.md)
* [Actions](/developing-connectors/sdk/action.md)
* [Triggers](/developing-connectors/sdk/trigger.md)
  * [Polling triggers](/developing-connectors/sdk/trigger/poll-trigger.md)
  * [Static Webhook triggers](/developing-connectors/sdk/trigger/static-webhook-trigger.md)
  * [Dynamic Webhook triggers](/developing-connectors/sdk/trigger/webhook-trigger.md)
* [HTTP requests](/developing-connectors/sdk/http-requests-and-response-handling.md)
* [Object definitions](/developing-connectors/sdk/object-definition.md)
* [Object definitions - Pick lists](/developing-connectors/sdk/pick-list.md)
* [Object definitions - Toggle fields](/developing-connectors/sdk/toggle-fields.md)
* [Object definitions - Config fields](/developing-connectors/sdk/config-fields.md)
* [Methods](/developing-connectors/sdk/methods.md)
* [Error handling](/developing-connectors/sdk/error-handling.md)
* [Best Practices](/developing-connectors/sdk/best-practices.md)
  * [General best practices](/developing-connectors/sdk/best-practices.md#general-best-practices)
  * [Block specific best practices](/developing-connectors/sdk/best-practices.md#block-specific-best-practices)
      * [Connection block](/developing-connectors/sdk/best-practices.md#connection-block)
      * [Test block](/developing-connectors/sdk/best-practices.md#test-block)
      * [Object definitions block](/developing-connectors/sdk/best-practices.md#object-definitions)
      * [Actions block](/developing-connectors/sdk/best-practices.md#actions)
      * [Triggers block](/developing-connectors/sdk/best-practices.md#triggers)
      * [Sample output block](/developing-connectors/sdk/best-practices.md#sample-output)
      * [Error handling](/developing-connectors/sdk/best-practices.md#error-handling)
  * [Usability and testing best practices](/developing-connectors/sdk/best-practices.md#usability-and-testing-best-practices)
* [Examples](/developing-connectors/sdk/examples.md)

## Coming soon
* How-to guides
* Troubleshooting
* Sharing the connector
