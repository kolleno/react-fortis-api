
# Response Three DS Authentication

## Structure

`ResponseThreeDSAuthentication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type45Enum \| undefined`](../../doc/models/type-45-enum.md) | Optional | Resource Type<br>**Default**: `Type45Enum.ThreeDSAuthentication` |
| `data` | [`Data12 \| undefined`](../../doc/models/data-12.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "ThreeDSAuthentication",
  "data": {
    "three_ds_server_trans_id": "three_ds_server_trans_id0",
    "acs_url": "acs_url2",
    "transaction_status": "D",
    "authentication_value": "authentication_value2",
    "eci": "eci0"
  }
}
```

