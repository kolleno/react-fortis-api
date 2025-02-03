
# Response Declined Recurring Transactions Collection

## Structure

`ResponseDeclinedRecurringTransactionsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type16Enum \| undefined`](../../doc/models/type-16-enum.md) | Optional | Resource Type<br>**Default**: `Type16Enum.DeclinedRecurringTransactionsCollection` |
| `list` | [`List3[] \| undefined`](../../doc/models/list-3.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "DeclinedRecurringTransactionsCollection",
  "list": [
    {
      "id": "id2",
      "declined_transaction_id": "declined_transaction_id8",
      "payment_transaction_id": "payment_transaction_id6",
      "status": "paid",
      "recurring_id": "recurring_id6"
    },
    {
      "id": "id2",
      "declined_transaction_id": "declined_transaction_id8",
      "payment_transaction_id": "payment_transaction_id6",
      "status": "paid",
      "recurring_id": "recurring_id6"
    },
    {
      "id": "id2",
      "declined_transaction_id": "declined_transaction_id8",
      "payment_transaction_id": "payment_transaction_id6",
      "status": "paid",
      "recurring_id": "recurring_id6"
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

