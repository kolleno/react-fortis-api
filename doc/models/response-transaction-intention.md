
# Response Transaction Intention

## Structure

`ResponseTransactionIntention`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type28Enum \| undefined`](../../doc/models/type-28-enum.md) | Optional | Resource Type<br>**Default**: `Type28Enum.TransactionIntention` |
| `data` | [`Data8 \| undefined`](../../doc/models/data-8.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionIntention",
  "data": {
    "action": "refund",
    "digitalWalletsOnly": false,
    "methods": [
      {
        "type": "ach",
        "product_transaction_id": "product_transaction_id4"
      }
    ],
    "amount": 236,
    "tax_amount": 62
  }
}
```

