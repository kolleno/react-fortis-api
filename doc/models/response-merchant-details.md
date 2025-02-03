
# Response Merchant Details

## Structure

`ResponseMerchantDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type132Enum \| undefined`](../../doc/models/type-132-enum.md) | Optional | Resource Type<br>**Default**: `Type132Enum.MerchantDetails` |
| `data` | [`Data37 \| undefined`](../../doc/models/data-37.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "MerchantDetails",
  "data": {
    "resultCode": false,
    "merchantID": "merchantID8",
    "applePay": false,
    "googlePay": false,
    "applePayDomains": [
      {
        "key1": "val1",
        "key2": "val2"
      }
    ]
  }
}
```

