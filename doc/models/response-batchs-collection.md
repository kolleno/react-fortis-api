
# Response Batchs Collection

## Structure

`ResponseBatchsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type1Enum \| undefined`](../../doc/models/type-1-enum.md) | Optional | Resource Type<br>**Default**: `Type1Enum.BatchsCollection` |
| `list` | [`List[] \| undefined`](../../doc/models/list.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "BatchsCollection",
  "list": [
    {
      "id": "id2",
      "created_ts": 56,
      "product_transaction_id": "product_transaction_id6",
      "processing_status_id": 82,
      "batch_num": 224
    },
    {
      "id": "id2",
      "created_ts": 56,
      "product_transaction_id": "product_transaction_id6",
      "processing_status_id": 82,
      "batch_num": 224
    },
    {
      "id": "id2",
      "created_ts": 56,
      "product_transaction_id": "product_transaction_id6",
      "processing_status_id": 82,
      "batch_num": 224
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

