
# Response Declined Recurring Transaction

## Structure

`ResponseDeclinedRecurringTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type15Enum \| undefined`](../../doc/models/type-15-enum.md) | Optional | Resource Type<br>**Default**: `Type15Enum.DeclinedRecurringTransaction` |
| `data` | [`Data3 \| undefined`](../../doc/models/data-3.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "DeclinedRecurringTransaction",
  "data": {
    "id": "id0",
    "declined_transaction_id": "declined_transaction_id6",
    "payment_transaction_id": "payment_transaction_id4",
    "status": "paid",
    "recurring_id": "recurring_id4"
  }
}
```

