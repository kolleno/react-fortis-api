
# Terminal Cvm

Terminal Cvm Information on `expand`

## Structure

`TerminalCvm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `terminalManufacturerCode` | `number \| undefined` | Optional | Terminal Manufacturer Code |
| `title` | `string \| undefined` | Optional | Title<br>**Constraints**: *Maximum Length*: `32` |
| `contactData` | `string \| null \| undefined` | Optional | Contact Data<br>**Constraints**: *Maximum Length*: `100000` |
| `contactlessData` | `string \| null \| undefined` | Optional | Contactless Data<br>**Constraints**: *Maximum Length*: `100000` |
| `id` | `string \| undefined` | Optional | Terminal Manufacturer Cvms Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "terminal_manufacturer_code": 4.0,
  "title": "CVM One",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_data": "contact_data8",
  "contactless_data": "contactless_data0"
}
```

