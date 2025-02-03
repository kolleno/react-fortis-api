
# Response Quick Invoice Resend

## Structure

`ResponseQuickInvoiceResend`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type56Enum \| undefined`](../../doc/models/type-56-enum.md) | Optional | Resource Type<br>**Default**: `Type56Enum.QuickInvoiceResend` |
| `data` | [`Data18 \| undefined`](../../doc/models/data-18.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "QuickInvoiceResend",
  "data": {
    "id": "id0",
    "email_log_id": "email_log_id2",
    "sms_log_id": "sms_log_id4",
    "success": false,
    "sms_success": false
  }
}
```

