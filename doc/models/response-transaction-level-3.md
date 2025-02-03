
# Response Transaction Level 3

## Structure

`ResponseTransactionLevel3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type111Enum \| undefined`](../../doc/models/type-111-enum.md) | Optional | Resource Type<br>**Default**: `Type111Enum.TransactionLevel3` |
| `data` | [`Data28 \| undefined`](../../doc/models/data-28.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionLevel3",
  "data": {
    "id": "id0",
    "transaction_id": "transaction_id8",
    "level3_data": {
      "destination_country_code": "destination_country_code4",
      "duty_amount": 182,
      "freight_amount": 60,
      "national_tax": 50,
      "sales_tax": 222
    }
  }
}
```

