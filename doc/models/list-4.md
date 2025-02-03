
# List 4

## Structure

`List4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `terminalId` | `string \| undefined` | Optional | Terminal ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `requireSignature` | `boolean \| undefined` | Optional | Set to true or 1 to require a signature from the customer |
| `deviceTermApiId` | `string \| null \| undefined` | Optional | Can be used for associating record to external systems. Must be unique per location.<br>**Constraints**: *Maximum Length*: `64` |
| `termsConditions` | `string \| undefined` | Optional | This is the message that is displayed on the screen when prompting for a signature.<br>**Constraints**: *Maximum Length*: `4096` |
| `id` | `string \| undefined` | Optional | Device term ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `reasonCodeId` | `number \| undefined` | Optional | Reason code ID |
| `signature` | [`Signature \| undefined`](../../doc/models/signature.md) | Optional | Signature Information on `expand` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| undefined` | Optional | System generated id for user who created record<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdUser` | [`CreatedUser \| undefined`](../../doc/models/created-user.md) | Optional | User Information on `expand` |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location Information on `expand` |
| `terminal` | [`Terminal \| undefined`](../../doc/models/terminal.md) | Optional | Terminal Information on `expand` |
| `changelogs` | [`Changelog[] \| undefined`](../../doc/models/changelog.md) | Optional | Changelog Information on `expand` |
| `reasonCode` | [`ReasonCode \| undefined`](../../doc/models/reason-code.md) | Optional | Reason Code Information on `expand` |

## Example (as JSON)

```json
{
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "terminal_id": "11e95f8ec39de8fbdb0a4f1a",
  "require_signature": true,
  "device_term_api_id": "device_term134",
  "terms_conditions": "FUNgib0Vh0B9c0Wbttvr50vNtGLOkTdFL0eFmhN1RJpKhK14IENeDa8irp2dEk9thEcVHvVEyriQeZLs5NjNsCzqNj9JDA4RSJwK647IFtYjrNPN1nBb9bw6hoQ71oT5kpsiXGt8HcqBFVBVeDA7psIzKAyDveAw2o1hfjipkOtXrPgWun0rYwyyFuvqkT1egQYKfYDj",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "reason_code_id": 1000,
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a"
}
```

