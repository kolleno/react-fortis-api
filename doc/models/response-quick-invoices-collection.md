
# Response Quick Invoices Collection

## Structure

`ResponseQuickInvoicesCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type57Enum \| undefined`](../../doc/models/type-57-enum.md) | Optional | Resource Type<br>**Default**: `Type57Enum.QuickInvoicesCollection` |
| `list` | [`List9[] \| undefined`](../../doc/models/list-9.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "QuickInvoicesCollection",
  "list": [
    {
      "location_id": "location_id6",
      "title": "title8",
      "cc_product_transaction_id": "cc_product_transaction_id6",
      "ach_product_transaction_id": "ach_product_transaction_id4",
      "due_date": "due_date0"
    },
    {
      "location_id": "location_id6",
      "title": "title8",
      "cc_product_transaction_id": "cc_product_transaction_id6",
      "ach_product_transaction_id": "ach_product_transaction_id4",
      "due_date": "due_date0"
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

