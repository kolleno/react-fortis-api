
# Response Location Info

## Structure

`ResponseLocationInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type44Enum \| undefined`](../../doc/models/type-44-enum.md) | Optional | Resource Type<br>**Default**: `Type44Enum.LocationInfo` |
| `data` | [`Data11 \| undefined`](../../doc/models/data-11.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "LocationInfo",
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

