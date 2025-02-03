
# Response Paylink

## Structure

`ResponsePaylink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type48Enum \| undefined`](../../doc/models/type-48-enum.md) | Optional | Resource Type<br>**Default**: `Type48Enum.Paylink` |
| `data` | [`Data15 \| undefined`](../../doc/models/data-15.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "Paylink",
  "data": {
    "location_id": "location_id4",
    "cc_product_transaction_id": "cc_product_transaction_id2",
    "email": "email6",
    "amount_due": 196,
    "location_api_id": "location_api_id0"
  }
}
```

