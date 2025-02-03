
# Response Quick Invoice

## Structure

`ResponseQuickInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type54Enum \| undefined`](../../doc/models/type-54-enum.md) | Optional | Resource Type<br>**Default**: `Type54Enum.QuickInvoice` |
| `data` | [`Data17 \| undefined`](../../doc/models/data-17.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "QuickInvoice",
  "data": {
    "location_id": "location_id4",
    "title": "title6",
    "cc_product_transaction_id": "cc_product_transaction_id2",
    "ach_product_transaction_id": "ach_product_transaction_id2",
    "due_date": "due_date8"
  }
}
```

