
# Method 3

## Structure

`Method3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type29Enum \| undefined`](../../doc/models/type-29-enum.md) | Optional | Payment type. Must be unique. |
| `productTransactionId` | `string \| undefined` | Optional | The Product's method (cc/ach) has to match the type.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "type": "cc",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a"
}
```

