
# Response Ticket

## Structure

`ResponseTicket`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type82Enum \| undefined`](../../doc/models/type-82-enum.md) | Optional | Resource Type<br>**Default**: `Type82Enum.Ticket` |
| `data` | [`Data23 \| undefined`](../../doc/models/data-23.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "Ticket",
  "data": {
    "account_holder_name": "account_holder_name0",
    "exp_date": "exp_date8",
    "cvv": "cvv8",
    "account_number": "account_number0",
    "billing_address": {
      "postal_code": "postal_code0",
      "street": "street8"
    }
  }
}
```

