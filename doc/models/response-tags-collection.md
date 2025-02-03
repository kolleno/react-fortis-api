
# Response Tags Collection

## Structure

`ResponseTagsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type73Enum \| undefined`](../../doc/models/type-73-enum.md) | Optional | Resource Type<br>**Default**: `Type73Enum.TagsCollection` |
| `list` | [`List12[] \| undefined`](../../doc/models/list-12.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "TagsCollection",
  "list": [
    {
      "location_id": "location_id6",
      "title": "title8",
      "id": "id2",
      "created_ts": 56,
      "modified_ts": 124
    },
    {
      "location_id": "location_id6",
      "title": "title8",
      "id": "id2",
      "created_ts": 56,
      "modified_ts": 124
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

