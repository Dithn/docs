---
title: Workato connectors - Coupa Object actions
date: 2020-03-02 12:40:00 Z
---

# Coupa - Object actions
Workato allows you to create, update or search for objects on Coupa. In Workato, we classify things like invoices, expenses and even suppliers as objects. We currently work with a long list of Coupa objects. [Find out which objects we work with](/connectors/coupa/introduction.md#objects). When using actions in Workato that reference objects, you'll be able to specify which object you want to work with later on.

**Object actions available in Workato**
- `Create object`
- `Update object`
- `Search object`
- `Get object by ID`
- `Get remit to addresses by object ID`
- `Create attachment on object`

____________

### Input fields for create/update actions
This step will perform the selected action on the object you select. For example, selecting the `Create object` action and selecting `Invoice` as your object will create an invoice in Coupa when the step is executed in a recipe.

![Selecting an object](~@img/coupa/selecting-object.gif)
<center><i>Selecting an object in the Coupa connector in the create/update object action</i></center>
<br>

After the object is selected, all relevant fields will be shown to you. For example, if you were to select the `Create Object` action and select `Invoice`, the action would populate with all relevant invoice related fields for you to fill in. Use datapills from earlier steps to make objects based on data in your workflow.

Required fields will always show up in the recipe configuration. Remember to fill them in to prevent errors from happening. You can also find custom fields defined in your Coupa instance in the additional fields tab.

#### List input fields
Some Coupa objects actions in Workato can accept list input lines. This is often the case in invoices and purchase orders when looking to generate a list of invoice lines or purchase order lines. Workato gives you a quick and easy way to generate these lists. When you are working with actions earlier on in your recipe that generates list outputs, easily map them using over with the list input fields. [Find out more about list inputs.](/features/list-management.md)

### Create Object
This action creates an object which you specify such as a purchase order or an invoice. The dynamically generated input fields will show you all input fields that are required to successfully create this object. Optional input fields may be hidden away in the fields tab below.

A good practice would be to create custom fields in Coupa to store the ID of the record in the application the data is coming from. For example, any new supplier created in Coupa through an integration pulling data from NetSuite should have a custom field to store NetSuite ID of that same supplier. Another subsequent action should be done to update the NetSuite record with the Coupa internal ID of that very same action. This makes future recipes and integrations easier by having this relationship between records in applications explicitly defined.

### Update Object
This action updates a specific object in Coupa. One required input field is the specific Coupa internal ID of that object. This lets Coupa know exactly which object you want to update. All other fields will be dynamically generated.

If your recipe does not have the internal ID of this invoice in Coupa, use our `search object` action. The `search object` action allows you to search for that specific object in Coupa based on other fields such as `Invoice number` for invoices and `Purchase order number` for purchase orders. Use the search action's result's ID datapill to update your object after.

### Output fields for create/update actions
Each create/update object action executes an action on a single object in Coupa. This action in Workato retrieves all object-related information included custom fields. You can then use the output datapills in subsequent steps in your recipe.

____________

### Input fields for Search/Retrieval actions
This action performs a search in Coupa when the step is executed. It receives input from you on a few attributes and returns objects in a list of objects that match those returns

After the object is selected, all relevant fields will be shown to you. Workato supports different relevant fields for you to search for if you are using the `Search object` action. All other search/retrieval actions require you to use the internal Coupa object ID.

### Search Object
This action searches for objects in Coupa based on certain fields which you determine. Common fields available include the Coupa internal ID as well as numbers/name associated with the Object. For example, you are able to search invoices based on invoice numbers or search suppliers based on supplier name. This is useful when you are looking to update these objects but don't have their Coupa internal ID on hand.

This action can return **multiple** object records. The Workato connector allows you to search in two ways.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Search type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fields</td>
      <td>Search for records using a predefined set of filters. First, choose the object type and then the relevant fields will be shown to you.</td>
    </tr>
    <tr>
      <td>Query</td>
      <td>Search for records using a free-form query. Find out more details <a href='https://success.coupa.com/Integrate/Technical_Documentation/API/Get_Started/Querying_Options'>here</a></td>
    </tr>
  </tbody>
</table>

![Configure search type for search actions](~@img/coupa/search_input.gif)
<center><i>Search by either standard fields or write your own Coupa Query</i></center>

### Get object by ID
This action retrieves a specific object in Coupa. Define the type of object you are looking for and also the internal ID. The object returned would be similar to the `Search Object` action's results.

This action returns only a **single** unique record.

### Get remit to addresses by object ID
This action allows you to select an object and an associated internal Coupa ID with that object to retrieve their remit-to addresses. This is the address which you will send payment to. The output for this action comes in the form of a list of addresses for that specified object. We currently only support this action for Suppliers.

### Output fields for search/retrieval actions
Each search/retrieval action except the `Get object by ID` action returns a list of object(s) that match your search criteria. Use this action to search for objects in Coupa that could be related to common objects in other applications.
____________

### Input fields for Add file attachment on object action
The `Add file attachment on object` action allows you to create file attachments on various objects in Coupa. The table below details what objects we currently support. When configuring the action, you'll first need to define the object you want to create an attachment for in Coupa. You may do so by selecting the object type manually or mapping a datapill to do so dynamically. You'll also need to provide the internal Coupa ID of the object and the attachment contents. We currently support adding file attachments for `Contracts`, `Purchase Orders`, `Requisitions`, `Invoices`.

::: warning Note
The attachment name is optional and a generic attachment name will be generated by Coupa is none is supplied. We recommend that you give a meaningful name to your attachments.
:::

![Sample configuration](~@img/coupa/attachment-action-config.png)
<center><i>Action configuration example</i></center>

![Coupa view](~@img/coupa/attachment-coupa-view.png)
<center><i>Where it shows up in Coupa</i></center>

### Output fields for Add file attachment on object action
The action returns the location of the attachment just created in Coupa in the form of a URL.

## List of triggers and actions
Workato currently supports the following Coupa triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the sidebar.

  * [Introduction](/connectors/coupa/introduction.md)
  * [Object triggers](/connectors/coupa/object-triggers.md)
  * [Purchase order actions](/connectors/coupa/purchase-order-actions.md)
  * [Supplier actions](/connectors/coupa/supplier-actions.md)
  * [Integration actions](/connectors/coupa/integration-action.md)
