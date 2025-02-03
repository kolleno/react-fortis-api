
# Field 17

## Structure

`Field17`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | id |
| `label` | `string \| undefined` | Optional | Label |
| `fieldType` | `string \| undefined` | Optional | Field Type |
| `position` | `string[] \| undefined` | Optional | Position<br>**Constraints**: *Minimum Items*: `1` |
| `required` | `boolean \| undefined` | Optional | Required |
| `readonly` | `boolean \| undefined` | Optional | Read Only |
| `visible` | `boolean \| undefined` | Optional | Visible |
| `value` | `string \| null \| undefined` | Optional | Value |

## Example (as JSON)

```json
{
  "id": "transaction_amount",
  "label": "Header",
  "field_type": "heading",
  "position": [
    "1",
    "0",
    "1",
    "1"
  ],
  "required": true,
  "readonly": true,
  "visible": true
}
```

