---
title: Workato Connector - G2 Get Object actions
date: 2020-05-22 04:00:00 Z
---
# G2 - Get object actions
This action allows you to retrieve detailed information of a specific object that matches a search by the particular object's ID. Only records in your G2 instance that matches your criteria will be obtained.

## Objects supported
Workato currently supports the get action for two objects, these objects are listed below:

 * [Companies](#get-company-by-id)
 * [Users](#get-user-by-id)

## Get company by ID
This action retrieves a specific company that matches a search by company ID. Only records in your G2 instance that matches the criteria will be returned.

![Get company details by ID action](~@img/g2/get-company.png)
<center><i>Get company details by ID action</i></center>

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
      <td>Company ID</td>
      <td>The unique G2 ID of the company.</td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action contains the full set of data of the selected company.

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
  </tbody>
</table>

## Get user by ID
This action retrieves a specific user that matches a search by user ID. Only records in your G2 instance that matches the criteria will be returned.

![Get user details by ID action](~@img/g2/get-user.png)
<center><i>Get user details by ID action</i></center>

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
      <td>User ID</td>
      <td>The unique G2 ID of the user.</td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action contains the full set of data of the selected user.

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
  </tbody>
</table>
