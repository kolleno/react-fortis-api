
# Message Extension

## Structure

`MessageExtension`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique identifier for the extension. Payment System Registered Application Provider Identifier (RID) is required as prefix of the ID. The maximum length is 64 characters.<br>**Constraints**: *Maximum Length*: `64` |
| `name` | `string \| undefined` | Optional | The name of the extension data set as defined by the extension owner. Maximum length is 64 characters.<br>**Constraints**: *Maximum Length*: `64` |
| `criticalityIndicator` | `boolean \| undefined` | Optional | A boolean value indicating whether the recipient must understand the contents of the extension to interpret the entire message. |
| `data` | `unknown \| undefined` | Optional | The data carried in the extension as. The maximum length is 8059 characters. |

## Example (as JSON)

```json
{
  "id": "id0",
  "name": "name0",
  "criticality_indicator": false,
  "data": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

