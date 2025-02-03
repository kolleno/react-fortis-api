
# Response User Verification

## Structure

`ResponseUserVerification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type118Enum \| undefined`](../../doc/models/type-118-enum.md) | Optional | Resource Type<br>**Default**: `Type118Enum.UserVerification` |
| `data` | [`Data31 \| undefined`](../../doc/models/data-31.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "UserVerification",
  "data": {
    "id": "id0",
    "user_id": "user_id8",
    "hash": "hash6",
    "created_ts": 114
  }
}
```

