
# Response Transaction Bin Info

## Structure

`ResponseTransactionBinInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type108Enum \| undefined`](../../doc/models/type-108-enum.md) | Optional | Resource Type<br>**Default**: `Type108Enum.TransactionBinInfo` |
| `data` | [`Data27 \| undefined`](../../doc/models/data-27.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionBinInfo",
  "data": {
    "issuer_bank_name": "issuer_bank_name6",
    "country_code": "country_code0",
    "detail_card_product": "detail_card_product2",
    "detail_card_indicator": "detail_card_indicator2",
    "fsa_indicator": "fsa_indicator8"
  }
}
```

