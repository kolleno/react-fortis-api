
# Response Apple Pay Validate Merchant

## Structure

`ResponseApplePayValidateMerchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type131Enum \| undefined`](../../doc/models/type-131-enum.md) | Optional | Resource Type<br>**Default**: `Type131Enum.ApplePayValidateMerchant` |
| `data` | [`Data36 \| undefined`](../../doc/models/data-36.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "ApplePayValidateMerchant",
  "data": {
    "merchantSession": "merchantSession0"
  }
}
```

