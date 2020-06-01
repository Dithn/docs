---
title: Workato Connector - G2 New Event triggers
date: 2020-05-21 10:00:00 Z
---
# G2 - Event triggers
This section contains documentation on the triggers that are currently supported on the Workato platform, including:

 * [New Lead in G2 Crowd (real time)](#new-lead-in-g2-crowd-trigger-real-time)
 * [New Remote Event Stream in G2 Crowd](#new-remote-event-stream-trigger)
 * [New Review in G2 Crowd](#new-review-trigger)

#### Trigger conditions
For each trigger, you can configure trigger conditions. Trigger conditions are like filters in Workato. Turning on trigger conditions in Workato means that you can selectively choose which events you want to trigger workflows. Conditions can be set on object attributes like approval status.  This allows you to build workflows that are only triggered on things such as approved purchase orders or invoices.

## New Lead in G2 Crowd trigger (real time)
When your G2 profile visitors want to know more about your solutions, they can fill up lead forms to register interest. This trigger picks up leads as soon as they are created. Each new lead is processed as a separate job.

![New lead in G2 trigger](~@img/g2/new-lead.png)
<center><i>New Lead trigger</i></center>

### Input fields
There are no input fields required for this trigger.

### Output fields
<table>
<thead>
  <tr>
    <th colspan="2" width='25%'>Output field</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ID</td>
    <td>The ID of the lead generated.</td>
  </tr>
  <tr>
    <td>First name</td>
    <td>First name of user.</td>
  </tr>
  <tr>
    <td>Last name</td>
    <td>Last name of user.</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>User's email address.</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>Phone number of user. </td>
  </tr>
  <tr>
    <td>Message</td>
    <td>Message included in the completed lead form.</td>
  </tr>
  <tr>
    <td>Company</td>
    <td>Name of user's company.</td>
  </tr>
  <tr>
    <td>Company size</td>
    <td>Size of user's company.</td>
  </tr>
  <tr>
    <td>Industry</td>
    <td>Industry that the user's company belongs to.</td>
  </tr>
  <tr>
    <td>Document title</td>
    <td>Title of the document the person interacted with before they sent in their form. The text that will pull in is what is contained in Title (Sent via WebHooks) in the Downloads section.</td>
  </tr>
  <tr>
    <td>User action</td>
    <td>Exact action performed by the user to generate the lead. E.g. Requested to be contact, Requested a demo, Viewed a report, etc...</td>
  </tr>
  <tr>
    <td>Action ID</td>
    <td>ID of user action.</td>
  </tr>
  <tr>
    <td>Created at</td>
    <td>Time when the lead was generated in UTC.</td>
  </tr>
</tbody>
</table>

## New Remote Event trigger
Remote event streams are sent when a direct visit is made to the Product profile, comparisons, category page of a given product, or whenever a user views sponsored content. This triggers only when G2 Crowd tracking can identify the visitor’s organization. Each Remote event stream is processed as a separate job. It checks for new jobs once every poll interval.

![New remote event in G2 trigger](~@img/g2/new-res.png)
<center><i>New Remote event trigger</i></center>

### Input fields
<table>
  <thead>
    <tr>
      <th>Input field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>From</td>
      <td>Remote event streams received after this time will be processed by the recipe. If left blank, the default date will be set to <strong>one day</strong> before the recipe is first started.
      </td>
    </tr>
  </tbody>
</table>


### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th colspan="2" width='25%'>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        Visitor ID
      </td>
      <td>
        Session ID for the visitor.
      </td>
    </tr>
      <tr>
        <td colspan="2">URL</td>
        <td>
          URL of the event's location.
        </td>
      </tr>
    <tr>
      <td colspan="2">
        Tag
      </td>
      <td>
        Specific tag of the event.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Time
      </td>
      <td>
        The time the event occurred.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Created at
      </td>
      <td>
        The time the event was stored.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Title
      </td>
      <td>
        Name of the event.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Product IDs
      </td>
      <td>
        List of product names where the event occurred if applicable.
      </td>
    </tr>
    <tr>
      <td colspan="2">
        Category IDs
      </td>
      <td>
        List of category names where the event occurred if applicable.
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        User Location
      </td>
      <td>Country</td>
      <td>The country that the user is in.</td>
    </tr>
    <tr>
      <td>Country Code</td>
      <td>Country code of country that the user is in.</td>
    </tr>
    <tr>
      <td>State</td>
      <td>The state that the user is in.</td>
    </tr>
    <tr>
      <td>State Code</td>
      <td>The state code of the state that the user is in.</td>
    </tr>
    <tr>
      <td>City</td>
      <td>The city that the user is in.</td>
    </tr>
    <tr>
      <td colspan="2">Organization</td>
      <td>Name of the organization received events.</td>
    </tr>
    <tr>
      <td rowspan="2">
        Relationships
      </td>
      <td>Company</td>
      <td>Contains the links to the data of the user's company.</td>
    </tr>
    <tr>
      <td>Industry</td>
      <td>Contains the links to the data of the user's industry.</td>
    </tr>
  </tbody>
</table>

## New Review trigger
This triggers when a G2 user submits a review of your product on G2. The output of this trigger is a series of questions and answers based on the user’s review. Each Review is processed as a separate job. It checks for new jobs once every poll interval.

![New review in G2 trigger](~@img/g2/new-review.png)
<center><i>New Review trigger</i></center>

### Input fields
<table>
  <thead>
    <tr>
      <th>Input field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>From</td>
      <td>Reviews received after this time will be processed by the recipe. If left blank, the default date will be set to <strong>one day</strong> before the recipe is first started.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
<table>
  <thead>
    <tr>
      <th>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Default Sort</td>
      <td>The default order of which the review has been sorted.</td>
    </tr>
    <tr>
      <td>Product name</td>
      <td>Name of the product.</td>
    </tr>
    <tr>
      <td>Is public</td>
      <td>True/False whether the reviewer permitted the review to be attributed to them.</td>
    </tr>
    <tr>
      <td>Slug</td>
      <td>URL Slug of the review.</td>
    </tr>
    <tr>
      <td>Percent complete</td>
      <td>The percentage complete all Review Questions are.</td>
    </tr>
    <tr>
      <td>Star rating</td>
      <td>Rating between 0-5.</td>
    </tr>
    <tr>
      <td>Title</td>
      <td>Title of the Review.</td>
    </tr>
    <tr>
      <td>Comment answers</td>
      <td>Primary review question answers.</td>
    </tr>
    <tr>
      <td>Secondary answers</td>
      <td>Secondary review question answers.</td>
    </tr>
    <tr>
      <td>Verified current user</td>
        <td>True/False whether the reviewer is verified.</td>
    </tr>
    <tr>
      <td>Is business partner</td>
      <td>True/False whether the reviewer has a business relationship with the product.</td>
    </tr>
    <tr>
      <td>Review source</td>
      <td>Was the review organic or incentivised.</td>
    </tr>
    <tr>
      <td>Votes up</td>
      <td>Total votes indicating the review was helpful.</td>
    </tr>
    <tr>
      <td>Votes down</td>
      <td>Total votes indicating the review was not helpful.</td>
    </tr>
    <tr>
      <td>Votes total</td>
      <td>Total votes on the review.</td>
    </tr>
    <tr>
      <td>User ID</td>
      <td>Internal UUID of the Reviewer.</td>
    </tr>
    <tr>
      <td>User name</td>
      <td>Name of the Reviewer.</td>
    </tr>
    <tr>
      <td>User image URL</td>
      <td>URL of reviewer's avatar.</td>
    </tr>
    <tr>
      <td>Regions</td>
      <td>Reviewer's geographical region(s).</td>
    </tr>
    <tr>
      <td>Country name</td>
      <td>Reviewer's country.</td>
    </tr>
    <tr>
      <td>Submitted at</td>
      <td>Date review was submitted.</td>
    </tr>
    <tr>
      <td>Updated at</td>
      <td>Date review was last edited.</td>
    </tr>
    <tr>
      <td>Moderated at</td>
      <td>Date review was moderated.</td>
    </tr>
    <tr>
      <td>Product ID</td>
      <td>UUID of the product the review was referencing.</td>
    </tr>
    <tr>
      <td>Reference user consent</td>
      <td>Has the Reviewer provided permission to use this review content.</td>
    </tr>
    <tr>
      <td rowspan="3">
        Relationships
      </td>
      <td>Product</td>
      <td>Contains the links to the data of the product under review.</td>
    </tr>
    <tr>
      <td>Questions</td>
      <td>Contains the links to the data of the review's questions.</td>
    </tr>
    <tr>
      <td>Answers</td>
      <td>Contains the links to the data of the review's answers.</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Returns the results as an array.</td>
    </tr>
    <tr>
      <td>Links</td>
      <td>This contains the links for remaining result pages with the same parameters. Returned as self, prev, first, next, and last. next and prev may be blank if you are on   the first or last page respectively.
      </td>
    </tr>
  </tbody>
</table>
