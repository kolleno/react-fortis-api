
# Response Location

## Structure

`ResponseLocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type43Enum \| undefined`](../../doc/models/type-43-enum.md) | Optional | Resource Type<br>**Default**: `Type43Enum.Location` |
| `data` | [`Data10 \| undefined`](../../doc/models/data-10.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "Location",
  "data": {
    "id": "id0",
    "created_ts": 114,
    "modified_ts": 190,
    "account_number": "account_number0",
    "address": {
      "city": "city6",
      "state": "state2",
      "postal_code": "postal_code8",
      "country": "US",
      "street": "street6"
    }
  }
}
```

