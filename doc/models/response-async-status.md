
# Response Async Status

## Structure

`ResponseAsyncStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Optional | Resource Type<br>**Default**: `TypeEnum.AsyncStatus` |
| `data` | [`Data \| undefined`](../../doc/models/data.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "AsyncStatus",
  "data": {
    "code": "00001e1c-0000-0000-0000-000000000000",
    "type": "type0",
    "id": "id0",
    "progress": 146,
    "error": "error4"
  }
}
```

