---
title: Workato connectors - Okta output datatree for events
date: 2020-06-03 06:00:00 Z
---

# Output datatree for events
The output datatree contains basic information about the event like the outcome and timestamp. Additionally, it contains data objects about the following:
- Actor
- Client
- Authentication context
- Security context
- Transaction information
- Target(s) of the event

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan=2>Output field</th>
        <th width='70%'>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan=2>Version</td>
      <td>A versioning indicator.</td>
    </tr>
    <tr>
      <td rowspan=5>Actor<br><i>The entity that created the event.</i></td>
      <td>ID</td>
      <td>ID of the actor.</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>Type of actor.</td>
    </tr>
    <tr>
      <td>Alternate ID</td>
      <td>Alternative ID of the ator.</td>
    </tr>
    <tr>
      <td>Display Name</td>
      <td>Display name of the actor.</td>
    </tr>
    <tr>
      <td>Detail</td>
      <td>Details about the actor.</td>
    </tr>
    <tr>
      <td rowspan=6>Client<br><i>Where the HTTP request originated from.</i></td>
      <td>User Agent object</td>
      <td>A software acting on behalf of a user. This object includes the User agent, OS, and Browser.</td>
    </tr>
    <tr>
      <td>Zone</td>
      <td>Display name of the actor.</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>The type of device (e.g. a computer).</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>ID of the OAuth client or ID of the agent.</td>
    </tr>
    <tr>
      <td>IP address</td>
      <td>The IP address where the request originated.</td>
    </tr>
    <tr>
      <td>Geographical context object</td>
      <td>The physical location where the client made the request. It contains information about city, state, country, postal code as well as geolocation coordinates.</td>
    </tr>
    <tr>
      <td rowspan=7>Authentication context<br><i>This contains metadata about how the actor was authenticated.</i></td>
      <td>Authentication provider</td>
      <td>The system that proves the identity of an actor.</td>
    </tr>
    <tr>
      <td>Credential provider</td>
      <td>A credential provider is a software service that manages identities and their associated credentials.</td>
    </tr>
    <tr>
      <td>Credential type</td>
      <td>The credential type used.</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>The third party user interface.</td>
    </tr>
    <tr>
      <td>Authentication step</td>
      <td>A zero-based step number in the authentication pipeline.</td>
    </tr>
    <tr>
      <td>External session ID</td>
      <td>A proxy for the actor's session ID.</td>
    </tr>
    <tr>
      <td>Issuer object</td>
      <td>The specific software entity that created and issued the credential. It contains information about The ID and type of the authorization server.</td>
    </tr>
    <tr>
      <td colspan=2>Display message</td>
      <td>The display message for the event.</td>
    </tr>
    <tr>
      <td colspan=2>Event type</td>
      <td>The type of event that was retrieved.</td>
    </tr>
    <tr>
      <td rowspan=2>Outcome<br><i>Information about the result of the event.</i></td>
      <td>Result</td>
      <td>Result of the action.</td>
    </tr>
    <tr>
      <td>Reason</td>
      <td>The result of the result. Usually, this describes the error message.</td>
    </tr>
    <tr>
      <td colspan=2>Published</td>
      <td>The timestamp when the event was published.</td>
    </tr>
    <tr>
      <td rowspan=5>Security context<br><i>Security data of the event.</i></td>
      <td>As number</td>
      <td>Autonomous system number associated with the autonomous system that the event request was sourced to. Learn more <a href="https://en.wikipedia.org/wiki/Autonomous_system_(Internet)">here</a>.</td>
    </tr>
    <tr>
      <td>As organization</td>
      <td>Organization associated with the autonomous system that the event request was sourced to.</td>
    </tr>
    <tr>
      <td>ISP</td>
      <td>The internet service provider used to send the event request.</td>
    </tr>
    <tr>
      <td>Domain</td>
      <td>The domain name associated with the IP address of the inbound event request.</td>
    </tr>
    <tr>
      <td>Is proxy</td>
      <td>Specifies whether this event's request is from a known proxy.</td>
    </tr>
    <tr>
      <td colspan=2>Severity</td>
      <td>This indivates how severe the event is.</td>
    </tr>
    <tr>
      <td colspan=2>Debug context</td>
      <td>Contains additional information about the event. The debug data includes <b>Request URI, Request ID, and URL</b>.</td>
    </tr>
    <tr>
      <td colspan=2>Legacy event type</td>
      <td>Associated events API attribute value.</td>
    </tr>
    <tr>
      <td rowspan=2>Transaction<br><i>Transaction details of the event.</i></td>
      <td>Type</td>
      <td>Describes the kind of transaction. For example, `Web` or `Job`.</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>The unique identifiers for this transaction.</td>
    </tr>
    <tr>
      <td colspan=2>UUID</td>
      <td>A unique identifier for this event.</td>
    </tr>
    <tr>
      <td colspan=2>Request</td>
      <td>Information about the request that triggered this event. If it is sourced from a HTTP request, it will return an IP chain.</td>
    </tr>
    <tr>
      <td rowspan=7>Target<br><i>A list datapill that describes the target(s) of the event.</i></td>
      <td>ID</td>
      <td>ID of the target.</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>Type of the target</td>
    </tr>
    <tr>
      <td>Alternate ID</td>
      <td>The alternative ID of the target.</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>The display name of the target.</td>
    </tr>
    <tr>
      <td>Detail entry</td>
      <td>Details about the target.</td>
    </tr>
    <tr>
      <td>List size</td>
      <td>The number of targets in the list.</td>
    </tr>
    <tr>
      <td>List index</td>
      <td>The index of this target in the list of targets.</td>
    </tr>
  </tbody>
</table>

Find out more about Okta's log event object [here](https://developer.okta.com/docs/reference/api/system-log/#request-object).
