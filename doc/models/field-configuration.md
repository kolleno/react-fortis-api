
# Field Configuration

field_configuration

## Structure

`FieldConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cssMini` | `boolean \| undefined` | Optional | CSS Mini |
| `stack` | [`StackEnum \| undefined`](../../doc/models/stack-enum.md) | Optional | Stack |
| `header` | [`Header \| undefined`](../../doc/models/header.md) | Optional | Header |
| `body` | [`Body \| undefined`](../../doc/models/body.md) | Optional | Body |
| `footer` | [`Footer \| undefined`](../../doc/models/footer.md) | Optional | Footer |

## Example (as JSON)

```json
{
  "css_mini": true,
  "stack": "vertical",
  "header": {
    "settings": {
      "enabled": false,
      "columns": 202.28,
      "rows": 235.78
    },
    "fields": [
      {
        "id": "id8",
        "label": "label8",
        "field_type": "field_type4",
        "position": [
          "position7",
          "position8",
          "position9"
        ],
        "required": false
      }
    ]
  },
  "body": {
    "settings": {
      "enabled": false,
      "columns": 202.28,
      "rows": 235.78
    },
    "fields": [
      {
        "id": "id8",
        "label": "label8",
        "field_type": "field_type4",
        "position": [
          "position7",
          "position8",
          "position9"
        ],
        "required": false
      },
      {
        "id": "id8",
        "label": "label8",
        "field_type": "field_type4",
        "position": [
          "position7",
          "position8",
          "position9"
        ],
        "required": false
      },
      {
        "id": "id8",
        "label": "label8",
        "field_type": "field_type4",
        "position": [
          "position7",
          "position8",
          "position9"
        ],
        "required": false
      }
    ]
  },
  "footer": {
    "settings": {
      "enabled": false,
      "columns": 202.28,
      "rows": 235.78
    },
    "fields": [
      {
        "id": "id8",
        "label": "label8",
        "field_type": "field_type4",
        "position": [
          "position7",
          "position8",
          "position9"
        ],
        "required": false
      },
      {
        "id": "id8",
        "label": "label8",
        "field_type": "field_type4",
        "position": [
          "position7",
          "position8",
          "position9"
        ],
        "required": false
      }
    ]
  }
}
```

