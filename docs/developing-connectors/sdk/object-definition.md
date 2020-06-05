---
title: SDK - Object Definitions
date: 2018-05-24 14:00:00 Z
---

# Object Definitions and structuring input and output fields
Object Definitions are an important component of the SDK. It allows you to define your schema for objects to be used in the actions and triggers. While we have gone through examples on how to do this directly from inside your `input_fields:` and `output_fields:` blocks, object_definitions allow you to declare it once and reuse it multiple times in various areas of your connector code.

> Object definitions are a key indicator of well written code. It makes your custom connector more maintainable and easier to read.

After that, we will dive deeper into the details of how you can clearly define your input and output fields. This will have important effects on what end users see when building recipes using your connector.

## Static object definitions
The most basic way to build an object definition is to define the field name and type

### Sample code snippet
```ruby
{
  title: 'My close.io connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },
  actions: {

    get_lead_by_id: {
      input_fields: lambda do
        [
          { name: "lead_id", optional: false }
        ]
      end,

      execute: lambda do |connection, input|
        get("https://app.close.io/api/v1/lead/#{input["lead_id"]}/")
      end,

      output_fields: lambda do |object_definitions|
        object_definitions["lead"]
      end
    }

  },

  triggers: {
    # Some code here
  },

  object_definitions: {
    lead: {
      fields: lambda do
        [
          { name: "name", type: :boolean },
          { name: "email" },
          { name: "number"}
        ]
      end
    }
  }

  picklists: {
    # Some code here
  },
  methods: {
    # Some code here
  },
}
```

In this example, the object `leads` is being defined in the fields lambda function. This can then be easily referenced in the action above. Defined as an array of objects. Each field object corresponds to a field in the lead object.

## Dynamic object definitions
Object definitions can also be used to dynamically generate input and output schemas. This is often done by a HTTP requests to metadata endpoints which return data about what fields to expect. Below we go through a simple example of using a `GET` request to a metadata endpoint to know what fields to expect in a form.

### Sample code snippet
```ruby
object_definitions: {
  form: {
    fields: lambda do |connection|
      get("https://api.unbounce.com/pages/#{connection['page_id']}/form_fields")["formFields"].
        map { |field| { name: field["id"] } }
    end
  }
}
```

Remember that the ultimate output of the lambda function would still have to be in the format that Workato expects. This often means using ruby methods like `map` to transform the response from an HTTP call.

### Testing
Testing and debugging your object definitions can be done in the same way that you would for your actions or triggers. Make sure that your object definition is being used in a specific action and test that action in the code editor. HTTP calls from the object definition should be recorded in the `Network` tab and any `puts` functions in your object definition block should be displayed in the `Console` tab as well.

## Structuring input and output fields
Up until now, our sample code snippets have largely only included the basic parameters such as `name` when defining input and output fields. Workato allows you to define a much larger set of variables that affect the way your fields are displayed to end users.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Key</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name of this field. For example <code>id</code> or <code>created_at</code>
            </td>
        </tr>
        <tr>
            <td>label</td>
            <td>An optional key. All fields will have default labels based on the field name. Use this to change the default value of the field label.
            </td>
        </tr>
        <tr>
            <td>hint</td>
            <td>An optional key. This allows you to add some hints below the input field to guide the user. Links to documentation can be given using HTML syntax.
            </td>
        </tr>           
        <tr>
            <td>type</td>
            <td>
              The data type of this field. <b>Default value is "string"</b>.
              Should be given the symbol notation (prepend colon).
              <ul>
                <li><code>"string"</code></li>
                <li><code>"integer"</code></li>
                <li><code>"number"</code></li>
                <li><code>"date_time"</code></li>
                <li><code>"date"</code></li>
                <li><code>"timestamp"</code></li>
                <li><code>"boolean"</code></li>
                <li><code>"object"</code> Must be accompanied with <code>properties:</code></li>
                <li><code>"array"</code> Must be accompanied with <code>properties:</code> and the <code>of:</code></li>
              </ul>
            </td>
        </tr>
        <tr>
            <td>of</td>
            <td>
              When defining arrays, you need to declare <code>of</code> where <code>of: "object"</code>. Only the type <code>object</code> is compatible with this parameter. Primitive data types like <code>string</code> and <code>integer</code> are not yet supported.
            </td>
        </tr>
        <tr>
            <td>properties</td>
            <td>
              When defining nested objects, use the <code>properties</code> key to define the fields in the object or array of objects.
            </td>
        </tr>
        <tr>
            <td>control_type</td>
            <td>
              This field relates only to input fields and it dictates the input field type to expose in a recipe. Refer to the list of <a href="#control-types">Control types</a> supported.
              <br>
              If this is declared for output fields, whether as an object definition or if it is hardcoded, it would be ignored.
            </td>
        </tr>
        <tr>
            <td>default</td>
            <td>
              Allows you to set a default value for that input field. This is useful in defaulting certain inputs to values that you believe most customers would choose and improve the usability of your connector.
            </td>
        </tr>
        <tr>
            <td>pick_list</td>
            <td>
              If <code>control_type</code> is <code>:select</code> or <code>:multiselect</code>, this property is required.
              See more in <a href="/developing-connectors/sdk/pick-list-toggle-fields.html">Pick List</a> chapter.
            </td>
        </tr>
        <tr>
            <td>sticky</td>
            <td>Use this property to make the optional field visible on the Input section. For example: Since is optional field but to be displayed always under Input fields. Use <code>sticky: true</code>.
            </td>
        </tr>
        <tr>
            <td>render_input</td>
            <td>An optional key. This must be accompanied with `parse_output`. Since our payloads are normally JSON objects, they are normally represented as strings. This field helps to convert them to other data types such like integers.
            <ul>
              <li><code>"integer_conversion"</code> - converts input into data type integer</li>
              <li><code>"render_iso8601_timestamp" - converts input into date string that confirms to ISO8601</code></li>
              <li><code>"boolean_conversion"</code> - converts input into data type boolean</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td>parse_output</td>
            <td>An optional key. This must be accompanied with `render_input`. Since our payloads are normally JSON objects, they are normally represented as strings. This field helps to convert them to other data types such like integers.
            <ul>
              <li><code>"integer_conversion"</code> - converts output into data type integer/number</li>
              <li><code>"date_time_conversion"</code> - converts input into a format that matches Javascript's Date objects <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON">toJSON</a> method</li>
              <li><code>"boolean_conversion"</code> - converts input into data type boolean</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td>change_on_blur</td>
            <td>An optional boolean key. When true, config fields and dependent fields only evaluate the value when the user blurs out of the field instead of after every keystroke. This parameter often doesn't need to be configured.
            </td>
        </tr>
        <tr>
            <td>support_pills</td>
            <td>An optional boolean key. When true, this field doesn't allow datapills to be mapped to it. This parameter often doesn't need to be configured.
            </td>
        </tr>
        <tr>
            <td>custom</td>
            <td>An optional boolean key. When true, a special marker is introduced to indicate to the user that this field is custom. Normally used when dynamically generating object definitions which may contain custom fields.
            </td>
        </tr>
        <tr>
          <td>extends_schema</td>
          <td>
            Defines whether this specific input field can influence other input or output fields. Setting this field to <code>extends_schema: true</code> makes this input field act as if it were a <a href="/developing-connectors/sdk/config-fields.html">configuration field.</a>
            <br>
            <br>
            Learn more about how to use the extends_schema field <a href="/developing-connectors/sdk/object-definition.html#using-fields-with-extends-schema">here</a>
          </td>
        </tr>
        <tr>
          <td>list_mode</td>
          <td>
            Used when working with arrays. Workato defaults to dynamic lists but this parameter allows you to set configure this input field to a static array input field. Defaults to <code>dynamic</code>
            Used by setting <code>list_mode: "static"</code> or <code>list_mode: "dynamic"</code>
          </td>
        </tr>
        <tr>
          <td>list_mode_toggle</td>
          <td>
            Used when working with arrays. Workato allows users to toggle between static and dynamic lists when working with arrays. Defaults to <code>true</code>.
            Set <code>list_mode_toggle: false</code> to disallow users to toggle list modes.
          </td>
        </tr>
        <tr>
          <td>item_label</td>
          <td>
            Only used with control_types <code>schema_designer</code> and <code>key_value</code>.
            This allows you to configure the item name stated in the modal popup. Setting <code>item_label: "Item Label"</code> will result in the following:
            <img src="~@img/sdk/item_label.png" alt="item_label">
          </td>
        </tr>
        <tr>
          <td>add_field_label</td>
          <td>
            Only used with control_types <code>schema_designer</code> and <code>key_value</code>.
            This allows you to configure the label of the add button. Setting <code>add_field_label: "Custom Add Label"</code> will result in the following:
            <img src="~@img/sdk/add_field_label.png" alt="add_field_label">
          </td>
        </tr>
        <tr>
          <td>empty_schema_message</td>
          <td>
            Only used with control_types <code>schema_designer</code> and <code>key_value</code>.
            This allows you to configure the message when the input field is empty. Setting <code>empty_schema_message: 'Custom empty schema message that allows to <button type="button" data-action="addField">add field</button> and <button type="button" data-action="generateSchema">generate schema</button>'</code> will result in the following:
            <img src="~@img/sdk/empty_schema_message.png" alt="empty_schema_message">
          </td>
        </tr>
        <tr>
          <td>sample_data_type</td>
          <td>
            Only used with control_types <code>schema_designer</code>
            This allows you to configure the type of data the schema_designer input field will accept. Setting <code>sample_data_type: 'csv'</code> will result in the following:
            <img src="~@img/sdk/sample_data_type.png" alt="sample_data_type">
            Other possible inputs are <code>json_input</code> and <code>xml</code>. The schema_designer defaults to <code>json_input</code>.
          </td>
        </tr>
    </tbody>
</table>

### Control types
Control types are a way for you to declare how input fields are displayed to users of your connector.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Control type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>
        Simple text input field with formula mode option.<br>
        <img src="~@img/sdk/text.png" alt="text control type">
      </td>
    </tr>
    <tr>
      <td>text-area</td>
      <td>
        Long text input field with formula mode option.<br>
        <img src="~@img/sdk/text-area.png" alt="text-area control type">
      </td>
    </tr>
    <tr>
      <td>plain-text</td>
      <td>
        Simple text input field without formula mode option.<br>
        <img src="~@img/sdk/plain-text.png" alt="plain-text control type">
      </td>
    </tr>
    <tr>
      <td>plain-text-area</td>
      <td>
        Long text input field with formula mode option. This input field can be expanded using the adjust icon.<br>
        <img src="~@img/sdk/plain-text-area.png" alt="plain-text-area control type">
      </td>
    </tr>
    <tr>
      <td>number</td>
      <td>
        Simple number field with icon to indicate either an integer or float value. This control type has formula mode option.<br>
        <img src="~@img/sdk/number.png" alt="number control type">
      </td>
    </tr>
    <tr>
      <td>url</td>
      <td>
        Text field with icon to indicate a URL value. This control type has formula mode option.<br>
        <img src="~@img/sdk/url.png" alt="url control type">
      </td>
    </tr>
    <tr>
      <td>select</td>
      <td>
        Control type to provide a predefined list of values to choose from. Make sure to include the <code>pick_list</code> property.<br>
        <img src="~@img/sdk/select.png" alt="select control type">
      </td>
    </tr>
    <tr>
      <td>checkbox</td>
      <td>
        Simple Yes/No select interface. It is advisable to add a <a href='/developing-connectors/sdk/toggle-fields.html'>toggle field</a> for dynamic mapping and formula mode option.<br>
        <img src="~@img/sdk/checkbox.png" alt="checkbox control type">
      </td>
    </tr>
    <tr>
      <td>multiselect</td>
      <td>
        Control type similar to <code>select</code> with additional ability to select multiple values. This control type must be accompanied with <code>pick_list</code> and <code>delimiter</code> properties.<br>
        <img src="~@img/sdk/multiselect.png" alt="multiselect control type">
      </td>
    </tr>
    <tr>
      <td>date</td>
      <td>
        Control type indicating date value. This control type has formula mode option.
        <img src="~@img/sdk/date.png" alt="date control type">
      </td>
    </tr>
    <tr>
      <td>date_time</td>
      <td>
        Control type indicating date with time value. This control type has formula mode option.
        <img src="~@img/sdk/date_time.png" alt="date_time control type">
      </td>
    </tr>
    <tr>
      <td>phone</td>
      <td>
        Control type indicating phone value. This control type has formula mode option.<br>
        <img src="~@img/sdk/phone.png" alt="phone control type">
      </td>
    </tr>
    <tr>
      <td>email</td>
      <td>
        Control type indicating email value. This control type has formula mode option.<br>
        <img src="~@img/sdk/email.png" alt="email control type">
      </td>
    </tr>
    <tr>
      <td>subdomain</td>
      <td>
        Control type to indicate a subdomain of a particular site. Typically used in connection fields. Make sure to include the <code>url</code> property.<br>
        <img src="~@img/sdk/subdomain.png" alt="subdomain control type">
      </td>
    </tr>
    <!-- <tr>
      <td>static-list</td>
      <td>
        Control type for arrays where the size of the array is statically determined by the recipe designer. Remember to define <code>item_label</code>, <code>add_item_label</code>, <code>empty_list_title</code> and <code>empty_list_text</code>.<br>
        <img src="~@img/sdk/static-list.png" alt="static-list control type">
      </td>
    </tr> -->
    <tr>
      <td>schema_designer</td>
      <td>
        Control type that allows you to collect schema information from users. This is useful when you need users to give your input during recipe design time to create input or output fields. This requires <code>extends_schema: true</code> to take effect.
        <pre><code style="display: block; white-space: pre-wrap;">{
  name: "schema",
  extends_schema: true,
  schema_neutral: false,
  control_type: 'schema-designer',
  label: 'Schema designer label',
  hint: 'Hint for schema designer field',
  item_label: 'button',
  add_field_label: 'Custom Add Label',
  empty_schema_message: 'Custom empty schema message that allows to &lt;button type="button" data-action="addField"&gt;add field&lt;/button&gt; and &lt;button type="button" data-action="generateSchema"&gt;generate schema&lt;/button&gt;',
  sample_data_type: 'csv' # json_input / xml     
},</code></pre>
        <img src="~@img/sdk/schema_designer.png" alt="schema_designer">
      </td>
    </tr>    
    <tr>
      <td>key_value</td>
      <td>
        Control type that allows you to collect key and value pairs from users. This is useful when you need users to give your input during recipe design time for URL query parameters. Must be accompanied with `properties:` defined and two inputs given.
        <pre><code style="display: block; white-space: pre-wrap;">{
  name: "key_value",
  control_type: "key_value",
  label: "key_value",
  empty_list_title: "Add query parameters",
  empty_list_text: "Description for empty list",
  item_label: "Query parameter",
  type: "array",
  of: "object",
  properties: [
    { name: "key"},
    { name: "value"}
  ]
},
        </code></pre>
        <img src="~@img/sdk/key_value.png" alt="key_value">
      </td>
    </tr>
  </tbody>
</table>

## Variations

### Nested objects
Often, data returned from API request is not a simple one-level JSON. More often than not, the returned JSON object is much more complex, with multiple levels of nesting. This section aims to illustrate how to define nested fields.

#### Sample code snippet
```json
{
  "id": "00ub0oNGTSWTBKOLGLNR",
  "status": "STAGED",
  "created": "2013-07-02T21:36:25.344Z",
  "activated": null,
  "lastLogin": "2013-07-02T21:36:25.344Z",
  "profile": {
    "firstName": "Isaac",
    "lastName": "Brock",
    "email": "isaac.brock@example.com",
    "login": "isaac.brock@example.com",
    "mobilePhone": "555-415-1337"
  },
  "credentials": {
    "provider": {
      "type": "OKTA",
      "name": "OKTA"
    }
  },
  "_links": {
    "activate": {
      "href": "https://your-domain.okta.com/api/v1/users/00ub0oNGTSWTBKOLGLNR/lifecycle/activate"
    }
  }
}
```

Nested object field `profile` can be defined `type: :object` with fields nested inside using `properties`. Properties should be an array of fields objects (just like `fields` within the `user` object).

```ruby
object_definitions: {
  user: {
    fields: lambda do
      [
        {
          name: "id"
        },
        {
          name: "status"
        },
        {
          name: "created",
          type: :timestamp
        },
        {
          name: "activated",
          type: :timestamp
        },
        {
          name: "lastLogin",
          type: :timestamp
        },
        {
          name: "profile",
          type: :object,
          properties: [
            {
              name: "firstName"
            },
            {
              name: "lastName"
            },
            {
              name: "email",
              control_type: :email
            },
            {
              name: "login",
              control_type: :email
            },
            {
              name: "mobilePhone",
              control_type: :phone
            }
          ]
        }
      ]
    end
  }
}
```

### Nested Arrays
The other common type of nested field is array of objects. This type of field contains a list of repeated objects of the same fields. The defining such fields will be very similar to defining objects. Take the following sample `user` object from Asana for instance.

#### Sample code snippet
```json
{
  "data": {
    "id": 12149914544379,
    "email": "eeshan@workato.com",
    "name": "Ee Shan",
    "workspaces": [
      {
        "id": 1041269201604,
        "name": "Workato"
      },
      {
        "id": 498346130780,
        "name": "Product Documentation"
      }
    ]
  }
}
```

The `workspaces` array should be given `type: :array` as well as `of: :object`. This tells the `object_definitions` framework that the field contains an array of objects. Similar to nested objects, you will need to define `properties`, which is an array of fields corresponding to the fields of each object in the `workspaces` array.

```ruby
object_definitions: {
  user: {
    fields: lambda do
      [
        {
          name: 'id',
          type: :integer
        },
        { name: 'name' },
        {
          name: 'email',
          control_type: :phone
        },
        {
          name: 'workspaces',
          type: :array,
          of: :object,
          properties: [
            {
              name: 'id',
              label: 'Workspace ID',
              type: :integer
            },
            { name: 'name' }
          ]
        }
      ]
    end
  }
}
```

### Using fields with extends_schema
Sometimes, what input fields to show in an action depend on the answer to an input field in the same action. Rather than using config fields, extends_schema is an advanced way of introducing even more dynamic behaviour into your action.

#### Sample code snippet
```ruby
object_definitions:
  schema_input: {
    fields: lambda do |connection, config_fields|
      input_schema = parse_json(config_fields.dig('schema') || '[]')
      [
        {
          name: "schema",
          extends_schema: true,
          schema_neutral: false,
          control_type: 'schema-designer',
          label: 'Schema designer label',
          hint: 'Hint for schema designer field',
          item_label: 'button',
          add_field_label: 'Custom Add Label',
          empty_schema_message: 'Custom empty schema message that allows to <button type="button" data-action="addField">add field</button> and <button type="button" data-action="generateSchema">generate schema</button>',
          sample_data_type: 'csv' # json_input / xml     
        },
        if input_schema.present?
          { name: 'data', type: 'object', properties: input_schema }
        end
      ].compact
    end
  }
```

In the code sample above, we use an input field with the control_type `schema_designer`. When `extends_schema` is set to `true`, any inputs by an end user immediately cause the `object_definitions` block to re-evaluate itself with the inputs given being passed as `config_fields` again. In this example, we see that the input `schema` is referenced at the beginning of the object_definition block. When users give inputs for the `schema` field, it can be referenced as a `config_field` which use to build the `data` input field.



### Arrays of primitive data types
Arrays in Workato input and output schema currently only work with objects. In cases where you need to collect an array of primitive datatypes such as strings or integers, consider the code below. In this example, we hope to send an array of strings to a target API in the format `["column1","column2","column3"]`. This can be done by declaring an array of objects with the declaration for the `column names` input field wrapped inside the object layer.

#### Sample code snippet
```ruby
object_definitions: {
  columns: {
    fields: lambda do
    [
      {
        label: 'Column Names',
        name: 'columnNames',
        type: :array,
        of: :object,
        properties: [
          {
            name: 'columnName'
          }
        ]
      }
    ]
    end
  }
}
```

When users design their recipes, we expect the `input` from this to look like this:

```JSON
{
  "columnNames": [
    {
      "columnName": "column1"
    },
    {
      "columnName": "column2"
    },
    {
      "columnName": "column3"
    }
  ]
}
```

This input can be massaged into our desired format with a simple `.pluck` method.

```ruby
actions:{
  get_column_names:{
    input_fields: lambda do |object_definitions|
      object_definitions["columns"]
    end,

    execute: lambda do |connection, input|
      column_names = input["columnNames"]&.pluck("columnName") # This gives us ["column1","column2","column3"]

      post("Target_URL", column_names)
    end
  }
}
```

### Next section
The next section goes through some additional concepts related to object definitions which we call picklists. Pick lists allow you to declare dropdowns for your users instead of have to enter text. [Go to our picklist documentation](/developing-connectors/sdk/pick-list.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips on how to use object definitions.
