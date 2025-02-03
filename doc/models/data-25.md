
# Data 25

## Structure

`Data25`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rejectedTransactionId` | `string \| undefined` | Optional | Rejected Transaction ID.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `returnFee` | `number \| null \| undefined` | Optional | Return Fee.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `id` | `string \| undefined` | Optional | Transaction ACH Retry ID.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `retryTransactionId` | `string \| undefined` | Optional | Retry Transaction ID.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `returnFeeTransactionId` | `string \| undefined` | Optional | Return Fee Transaction ID.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `rejectedTransaction` | [`RejectedTransaction \| undefined`](../../doc/models/rejected-transaction.md) | Optional | Transaction Information on `expand` |
| `retryTransaction` | [`RetryTransaction \| undefined`](../../doc/models/retry-transaction.md) | Optional | Transaction Information on `expand` |
| `returnFeeTransaction` | [`ReturnFeeTransaction \| undefined`](../../doc/models/return-fee-transaction.md) | Optional | Transaction Information on `expand` |
| `createdUser` | [`CreatedUser \| undefined`](../../doc/models/created-user.md) | Optional | User Information on `expand` |
| `changelogs` | [`Changelog[] \| undefined`](../../doc/models/changelog.md) | Optional | Changelog Information on `expand` |

## Example (as JSON)

```json
{
  "rejected_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "retry_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "return_fee_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "return_fee": 98
}
```

