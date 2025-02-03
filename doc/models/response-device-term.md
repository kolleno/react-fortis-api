
# Response Device Term

## Structure

`ResponseDeviceTerm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type22Enum \| undefined`](../../doc/models/type-22-enum.md) | Optional | Resource Type<br>**Default**: `Type22Enum.DeviceTerm` |
| `data` | [`Data6 \| undefined`](../../doc/models/data-6.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "DeviceTerm",
  "data": {
    "location_id": "location_id4",
    "terminal_id": "terminal_id6",
    "require_signature": false,
    "device_term_api_id": "device_term_api_id0",
    "terms_conditions": "terms_conditions0"
  }
}
```

