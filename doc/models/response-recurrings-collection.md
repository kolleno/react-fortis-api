
# Response Recurrings Collection

## Structure

`ResponseRecurringsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type63Enum \| undefined`](../../doc/models/type-63-enum.md) | Optional | Resource Type<br>**Default**: `Type63Enum.RecurringsCollection` |
| `list` | [`List10[] \| undefined`](../../doc/models/list-10.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "RecurringsCollection",
  "list": [
    {
      "account_vault_id": "account_vault_id8",
      "token_id": "token_id6",
      "contact_id": "contact_id2",
      "account_vault_api_id": "account_vault_api_id6",
      "token_api_id": "token_api_id2"
    },
    {
      "account_vault_id": "account_vault_id8",
      "token_id": "token_id6",
      "contact_id": "contact_id2",
      "account_vault_api_id": "account_vault_api_id6",
      "token_api_id": "token_api_id2"
    },
    {
      "account_vault_id": "account_vault_id8",
      "token_id": "token_id6",
      "contact_id": "contact_id2",
      "account_vault_api_id": "account_vault_api_id6",
      "token_api_id": "token_api_id2"
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

