
# Response Transaction

## Structure

`ResponseTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type105Enum \| undefined`](../../doc/models/type-105-enum.md) | Optional | Resource Type<br>**Default**: `Type105Enum.Transaction` |
| `data` | [`Data26 \| undefined`](../../doc/models/data-26.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "Transaction",
  "data": {
    "additional_amounts": [
      {
        "type": "cashback",
        "amount": 6,
        "account_type": "cash_benefit",
        "currency": 154.64
      },
      {
        "type": "cashback",
        "amount": 6,
        "account_type": "cash_benefit",
        "currency": 154.64
      }
    ],
    "billing_address": {
      "city": "city2",
      "state": "state6",
      "postal_code": "postal_code0",
      "street": "street8",
      "phone": "phone2"
    },
    "checkin_date": "checkin_date2",
    "checkout_date": "checkout_date4",
    "clerk_number": "clerk_number4"
  }
}
```

