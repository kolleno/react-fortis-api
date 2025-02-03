
# Data 21

## Structure

`Data21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `title` | `string \| undefined` | Optional | Tag Title<br>**Constraints**: *Maximum Length*: `64` |
| `id` | `string \| undefined` | Optional | Tag ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location Information on `expand` |

## Example (as JSON)

```json
{
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "title": "My terminal",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992
}
```

