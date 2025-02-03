
# Response Signature

## Structure

`ResponseSignature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type67Enum \| undefined`](../../doc/models/type-67-enum.md) | Optional | Resource Type<br>**Default**: `Type67Enum.Signature` |
| `data` | [`Data20 \| undefined`](../../doc/models/data-20.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "Signature",
  "data": {
    "signature": "signature8",
    "resource": "AccountVault",
    "resource_id": "resource_id6",
    "id": "id0",
    "created_ts": 114
  }
}
```

