
# Response Transaction Level 3 Master

## Structure

`ResponseTransactionLevel3Master`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type109Enum \| undefined`](../../doc/models/type-109-enum.md) | Optional | Resource Type<br>**Default**: `Type109Enum.TransactionLevel3Master` |
| `data` | [`Data28 \| undefined`](../../doc/models/data-28.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionLevel3Master",
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

