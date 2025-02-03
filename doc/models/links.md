
# Links

Pagination page links

## Structure

`Links`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type2Enum \| undefined`](../../doc/models/type-2-enum.md) | Optional | Object type |
| `first` | `string \| undefined` | Optional | Link to the first page |
| `previous` | `string \| undefined` | Optional | Link to the previous page |
| `next` | `string \| undefined` | Optional | Link to the next page |
| `last` | `string \| undefined` | Optional | Link to the last page |

## Example (as JSON)

```json
{
  "type": "Links",
  "first": "/v1/endpoint?page[size]=10&page[number]=1",
  "previous": "/v1/endpoint?page[size]=10&page[number]=5",
  "next": "/v1/endpoint?page[size]=10&page[number]=7",
  "last": "/v1/endpoint?page[size]=10&page[number]=42"
}
```

