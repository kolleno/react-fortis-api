
# Response Transaction Level 3 Visa

## Structure

`ResponseTransactionLevel3Visa`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type110Enum \| undefined`](../../doc/models/type-110-enum.md) | Optional | Resource Type<br>**Default**: `Type110Enum.TransactionLevel3Visa` |
| `data` | [`Data28 \| undefined`](../../doc/models/data-28.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionLevel3Visa",
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

