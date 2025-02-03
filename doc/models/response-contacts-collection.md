
# Response Contacts Collection

## Structure

`ResponseContactsCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type11Enum \| undefined`](../../doc/models/type-11-enum.md) | Optional | Resource Type<br>**Default**: `Type11Enum.ContactsCollection` |
| `list` | [`List1[] \| undefined`](../../doc/models/list-1.md) | Optional | Resource Members |
| `links` | [`Links \| undefined`](../../doc/models/links.md) | Optional | Pagination page links |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | Pagination info |
| `sort` | [`Sort \| undefined`](../../doc/models/sort.md) | Optional | Sort information used on the results |

## Example (as JSON)

```json
{
  "type": "ContactsCollection",
  "list": [
    {
      "location_id": "location_id6",
      "account_number": "account_number2",
      "contact_api_id": "contact_api_id2",
      "first_name": "first_name2",
      "last_name": "last_name0"
    },
    {
      "location_id": "location_id6",
      "account_number": "account_number2",
      "contact_api_id": "contact_api_id2",
      "first_name": "first_name2",
      "last_name": "last_name0"
    },
    {
      "location_id": "location_id6",
      "account_number": "account_number2",
      "contact_api_id": "contact_api_id2",
      "first_name": "first_name2",
      "last_name": "last_name0"
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

