
# Log Sms

Log Sms Information on `expand`

## Structure

`LogSms`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Log Sms Id<br>**Constraints**: *Maximum Length*: `24`, *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `body` | `string \| null \| undefined` | Optional | Body |
| `reasonModel` | `string \| undefined` | Optional | Reason Model<br>**Constraints**: *Maximum Length*: `24` |
| `reasonModelId` | `string \| undefined` | Optional | Reason Model ID<br>**Constraints**: *Maximum Length*: `36` |
| `providerId` | `string \| undefined` | Optional | Provider ID<br>**Constraints**: *Maximum Length*: `60` |
| `status` | `string \| undefined` | Optional | Status<br>**Constraints**: *Maximum Length*: `10` |
| `sender` | `string \| undefined` | Optional | Sender<br>**Constraints**: *Maximum Length*: `10` |
| `recipient` | `string \| undefined` | Optional | Recipient<br>**Constraints**: *Maximum Length*: `10` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "body": "body2",
  "reason_model": "reason_model2",
  "reason_model_id": "reason_model_id8",
  "provider_id": "provider_id8"
}
```

