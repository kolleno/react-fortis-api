
# Response Transaction Processing

## Structure

`ResponseTransactionProcessing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5Enum \| undefined`](../../doc/models/type-5-enum.md) | Optional | Resource Type<br>**Default**: `Type5Enum.TransactionProcessing` |
| `data` | [`Data1 \| undefined`](../../doc/models/data-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "TransactionProcessing",
  "data": {
    "async": {
      "code": "00000038-0000-0000-0000-000000000000",
      "link": "link8"
    }
  }
}
```

