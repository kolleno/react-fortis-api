
# Response Transaction Ach Retrys Collection

## Structure

`ResponseTransactionAchRetrysCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type98Enum \| undefined`](../../doc/models/type-98-enum.md) | Optional | Resource Type<br>**Default**: `Type98Enum.TransactionAchRetrysCollection` |
| `list` | [`List16[] \| undefined`](../../doc/models/list-16.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "TransactionAchRetrysCollection",
  "list": [
    {
      "rejected_transaction_id": "rejected_transaction_id6",
      "return_fee": 150,
      "id": "id2",
      "retry_transaction_id": "retry_transaction_id8",
      "return_fee_transaction_id": "return_fee_transaction_id6"
    },
    {
      "rejected_transaction_id": "rejected_transaction_id6",
      "return_fee": 150,
      "id": "id2",
      "retry_transaction_id": "retry_transaction_id8",
      "return_fee_transaction_id": "return_fee_transaction_id6"
    },
    {
      "rejected_transaction_id": "rejected_transaction_id6",
      "return_fee": 150,
      "id": "id2",
      "retry_transaction_id": "retry_transaction_id8",
      "return_fee_transaction_id": "return_fee_transaction_id6"
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

