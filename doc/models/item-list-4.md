
# Item List 4

## Structure

`ItemList4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Item's Name, must be unique on the list<br>**Constraints**: *Maximum Length*: `100` |
| `amount` | `number` | Required | Item's Amount<br>**Constraints**: `>= -999999999`, `<= 999999999` |

## Example (as JSON)

```json
{
  "name": "Bread",
  "amount": 2015
}
```

