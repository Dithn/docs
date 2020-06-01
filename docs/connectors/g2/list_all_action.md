---
title: Workato Connector - G2 List all actions
date: 2020-05-22 05:00:00 Z
---
# G2 - List all actions
These actions retrieve a list of all chosen objects related to your G2 instance.

Workato currently supports the list all action for two objects, these objects are listed below:

 * [Companies](#list-all-companies-action)
 * [Users](#list-all-users-action)

## List all companies action
These companies are related to you through the buyer intent function of G2. These are the companies that have previously researched or are actively researching your organisation and/or product.

![List all Companies action](~@img/g2/list-companies.png)
<center><i>List all companies in your G2 crowd action</i></center>

### Input fields
<table>
<thead>
  <tr>
    <th colspan="2" width='25%'>Input field</th>
    <th colspan="2">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="2">Page size</td>
    <td colspan="2">The page size to fetch your records. </td>
  </tr>
  <tr>
    <td colspan="2">Page Number</td>
    <td colspan="2">The specific page number to fetch records from.</td>
  </tr>
  <tr>
    <td colspan="2">Next page URL</td>
    <td colspan="2">The URL of the next page to fetch records from.</td>
  </tr>
</tbody>
</table>

### Output fields
The output of this action contains the full set of data of all companies in your G2 instance.

<table>
  <thead>
    <tr>
      <th>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Name of company.</td>
    </tr>
    <tr>
      <td>Legal name</td>
      <td>Legal name of company.</td>
    </tr>
    <tr>
      <td>Domain</td>
      <td>Domain of company’s website.</td>
    </tr>
    <tr>
      <td>Domain aliases</td>
      <td>List of domains also used by the company.</td>
    </tr>
    <tr>
      <td>External ID</td>
      <td>Clearbit ID for company.</td>
    </tr>
    <tr>
      <td>Twitter</td>
      <td>Company's Twitter username.</td>
    </tr>
    <tr>
      <td>Twitter ID</td>
      <td>Company's Twitter ID.</td>
    </tr>
    <tr>
      <td>Twitter bio</td>
      <td>Company's Twitter bio.</td>
    </tr>
    <tr>
      <td>Twitter followers</td>
      <td>Company's Twitter followers count.</td>
    </tr>
    <tr>
      <td>Twitter following</td>
      <td>Company's Twitter following count.</td>
    </tr>
    <tr>
      <td>Twitter location</td>
      <td>Company's Twitter location.</td>
    </tr>
    <tr>
      <td>Twitter site</td>
      <td>Company's Twitter URL.</td>
    </tr>
    <tr>
      <td>Twitter avatar</td>
      <td>Company's Twitter logo.</td>
    </tr>
    <tr>
      <td>Linkedin</td>
      <td>Company's LinkedIn profile.</td>
    </tr>
    <tr>
      <td>Facebook</td>
      <td>Company's Facebook profile.</td>
    </tr>
    <tr>
      <td>URL</td>
      <td>URL of company's website.</td>
    </tr>
    <tr>
      <td>Site title</td>
      <td>Page title of company's website.</td>
    </tr>
    <tr>
      <td>Site header</td>
      <td>Page heading of company's website.</td>
    </tr>
    <tr>
      <td>Site meta</td>
      <td>Page meta of company's website.</td>
    </tr>
    <tr>
      <td>Site author</td>
      <td>Page author of company's website.</td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>List of market categories.</td>
    </tr>
    <tr>
      <td>Tech</td>
      <td>List of known technologies used.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Description of the company.</td>
    </tr>
    <tr>
      <td>Founded year</td>
      <td>Year company was founded.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>Address of company.</td>
    </tr>
    <tr>
      <td>Time zone</td>
      <td>The timezone for the company’s location.</td>
    </tr>
    <tr>
      <td>UTC offset</td>
      <td>The offset from UTC in hours in the company’s location.</td>
    </tr>
    <tr>
      <td>Crunchbase</td>
      <td>Crunchbase handle.</td>
    </tr>
    <tr>
      <td>Email provider</td>
      <td>If the domain is associated with a free email provider.</td>
    </tr>
    <tr>
      <td>Company type</td>
      <td>The company’s type, either education, government, nonprofit, private, public, or personal.</td>
    </tr>
    <tr>
      <td>Alexa US rank</td>
      <td>Alexa’s US site rank.</td>
    </tr>
    <tr>
      <td>Alexa global rank</td>
      <td>Alexa’s global site rank.</td>
    </tr>
    <tr>
      <td>Market cap</td>
      <td>Market Cap.</td>
    </tr>
    <tr>
      <td>Raised</td>
      <td>Total amount raised.</td>
    </tr>
    <tr>
      <td>Employees</td>
      <td>Amount of employees.</td>
    </tr>
    <tr>
      <td>Employees range</td>
      <td>Employees range.</td>
    </tr>
    <tr>
      <td>Annual revenue</td>
      <td>Annual Revenue (public companies only).</td>
    </tr>
    <tr>
      <td>Street number</td>
      <td>Headquarters street number.</td>
    </tr>
    <tr>
      <td>Street name</td>
      <td>Headquarters street name.</td>
    </tr>
    <tr>
      <td>Sub premise</td>
      <td>Headquarters suite number.</td>
    </tr>
    <tr>
      <td>City</td>
      <td>Headquarters city name.</td>
    </tr>
    <tr>
      <td>State</td>
      <td>Headquarters state name.</td>
    </tr>
    <tr>
      <td>State code</td>
      <td>Headquarters two character state code.</td>
    </tr>
    <tr>
      <td>Postal code</td>
      <td>Headquarters postal/zip code.</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>Headquarters country name.</td>
    </tr>
    <tr>
      <td>Country code</td>
      <td>Headquarters two character country code.</td>
    </tr>
    <tr>
      <td>Latitude</td>
      <td>Headquarters latitude.</td>
    </tr>
    <tr>
      <td>Longitude</td>
      <td>Headquarters longitude.</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Returns the results as an array.</td>
    </tr>
    <tr>
      <td>Links</td>
      <td>This contains the links for remaining result pages with the same parameters. Returned as self, prev, first, next, and last. next and prev may be blank if you are on the first or last page respectively.
      </td>
    </tr>
  </tbody>
</table>

## List all users action
These user object in G2 represents G2 users regardless of whether they are related to your organisation as buyers or vendors.

![List all Users action](~@img/g2/list-users.png)
<center><i>List all users in your G2 crowd action</i></center>

### Input fields
<table>
<thead>
  <tr>
    <th colspan="2" width='25%'>Input field</th>
    <th colspan="2">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="2">Page size</td>
    <td colspan="2">The page size to fetch your records. </td>
  </tr>
  <tr>
    <td colspan="2">Page Number</td>
    <td colspan="2">The specific page number to fetch records from.</td>
  </tr>
  <tr>
    <td colspan="2">Next page URL</td>
    <td colspan="2">The URL of the next page to fetch records from.</td>
  </tr>
</tbody>
</table>

### Output fields
The output of this action contains the full set of data of all users in your G2 instance.

<table>
  <thead>
    <tr>
      <th>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First name</td>
      <td>First name of the user.</td>
    </tr>
    <tr>
      <td>Last name</td>
      <td>Last name of the user.</td>
    </tr>
    <tr>
      <td>Company</td>
      <td>Name of the Company the user belongs to.</td>
    </tr>
    <tr>
      <td>Company size</td>
      <td>Size of the user's company.</td>
    </tr>
    <tr>
      <td>Image_url</td>
      <td>URL of user's avatar.</td>
    </tr>
    <tr>
      <td>Industry</td>
      <td>Industry that the user's company belongs to.</td>
    </tr>
    <tr>
      <td>Brief description</td>
      <td>A brief description of the user.</td>
    </tr>
    <tr>
      <td>Public detail URL</td>
      <td>URL to user profile on G2.</td>
    </tr>
    <tr>
      <td>Created at</td>
      <td>Date user signed up to G2.</td>
    </tr>
    <tr>
      <td>Updated at</td>
      <td>Date user last updated.</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Returns the results as an array.</td>
    </tr>
    <tr>
      <td>Links</td>
      <td>This contains the links for remaining result pages with the same parameters. Returned as self, prev, first, next, and last. next and prev may be blank if you are on the first or last page respectively.
      </td>
    </tr>
  </tbody>
</table>
