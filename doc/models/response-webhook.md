
# Response Webhook

## Structure

`ResponseWebhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type133Enum \| undefined`](../../doc/models/type-133-enum.md) | Optional | Resource Type<br>**Default**: `Type133Enum.Webhook` |
| `data` | [`Data38 \| undefined`](../../doc/models/data-38.md) | Optional | - |

## Example (as JSON)

```json
{
  "type": "Webhook",
  "data": {
    "attempt_interval": 14,
    "basic_auth_username": "basic_auth_username8",
    "basic_auth_password": "basic_auth_password0",
    "expands": "expands2",
    "format": "api-default"
  }
}
```

