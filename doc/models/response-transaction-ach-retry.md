
# Response Transaction Ach Retry

## Structure

`ResponseTransactionAchRetry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type94Enum \| undefined`](../../doc/models/type-94-enum.md) | Optional | Resource Type<br>**Default**: `Type94Enum.TransactionAchRetry` |
| `data` | [`Data25 \| undefined`](../../doc/models/data-25.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionAchRetry",
  "data": {
    "rejected_transaction_id": "rejected_transaction_id4",
    "return_fee": 208,
    "id": "id0",
    "retry_transaction_id": "retry_transaction_id6",
    "return_fee_transaction_id": "return_fee_transaction_id4"
  }
}
```

