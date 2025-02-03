
# Item List

## Structure

`ItemList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Item's Name, must be unique on the list<br>**Constraints**: *Maximum Length*: `100` |
| `amount` | `number \| undefined` | Optional | Item's Amount<br>**Constraints**: `>= -999999999`, `<= 999999999` |

## Example (as JSON)

```json
{
  "name": "Bread",
  "amount": 2015
}
```

