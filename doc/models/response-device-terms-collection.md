
# Response Device Terms Collection

## Structure

`ResponseDeviceTermsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type23Enum \| undefined`](../../doc/models/type-23-enum.md) | Optional | Resource Type<br>**Default**: `Type23Enum.DeviceTermsCollection` |
| `list` | [`List4[] \| undefined`](../../doc/models/list-4.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "DeviceTermsCollection",
  "list": [
    {
      "location_id": "location_id6",
      "terminal_id": "terminal_id8",
      "require_signature": false,
      "device_term_api_id": "device_term_api_id2",
      "terms_conditions": "terms_conditions2"
    },
    {
      "location_id": "location_id6",
      "terminal_id": "terminal_id8",
      "require_signature": false,
      "device_term_api_id": "device_term_api_id2",
      "terms_conditions": "terms_conditions2"
    }
  ],
  "links": {
    "type": "Links",
    "first": "first0",
    "previous": "previous2",
    "next": "next2",
    "last": "last4"
  },
  "pagination": {
    "type": "Pagination",
    "total_count": 100,
    "page_count": 212,
    "page_number": 28,
    "page_size": 6
  },
  "sort": {
    "type": "Sorting",
    "fields": [
      {
        "field": "field2",
        "order": "asc"
      },
      {
        "field": "field2",
        "order": "asc"
      },
      {
        "field": "field2",
        "order": "asc"
      }
    ]
  }
}
```

