
# Response Declined Recurring Transaction Resend

## Structure

`ResponseDeclinedRecurringTransactionResend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type21Enum \| undefined`](../../doc/models/type-21-enum.md) | Optional | Resource Type<br>**Default**: `Type21Enum.DeclinedRecurringTransactionResend` |
| `data` | [`Data5 \| undefined`](../../doc/models/data-5.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "DeclinedRecurringTransactionResend",
  "data": {
    "id": "id0",
    "email_log_id": "email_log_id2",
    "success": false,
    "email": "email6"
  }
}
```

