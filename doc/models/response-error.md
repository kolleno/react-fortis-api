
# Response Error

## Structure

`ResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | Message type |
| `id` | `string \| undefined` | Optional | Unique identifier for this API call |
| `statusCode` | `number \| undefined` | Optional | HTTP status code |
| `title` | `string \| undefined` | Optional | Error title |
| `detail` | [`Detail1 \| undefined`](../../doc/models/detail-1.md) | Optional | Error details |
| `meta` | `unknown \| undefined` | Optional | Object with additional error details |

## Example (as JSON)

```json
{
  "type": "Error",
  "id": "c7f03d44-c966-4578-93ff-295f3ef6a467",
  "statusCode": 400,
  "title": "Bad Request",
  "detail": {
    "three_ds_server_trans_id": "three_ds_server_trans_id6",
    "acs_trans_id": "acs_trans_id8",
    "ds_trans_id": "ds_trans_id4",
    "error_code": "error_code4",
    "error_component": "error_component2"
  }
}
```

