
# Response Send Verification

## Structure

`ResponseSendVerification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type130Enum \| undefined`](../../doc/models/type-130-enum.md) | Optional | Resource Type<br>**Default**: `Type130Enum.SendVerification` |
| `data` | [`Data31 \| undefined`](../../doc/models/data-31.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "SendVerification",
  "data": {
    "id": "id0",
    "user_id": "user_id8",
    "hash": "hash6",
    "created_ts": 114
  }
}
```

