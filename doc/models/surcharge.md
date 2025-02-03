
# Surcharge

Surcharge Information on `expand`

## Structure

`Surcharge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `surchargeFee` | `number \| undefined` | Optional | Surcharge Fee |
| `surchargeRate` | `number \| undefined` | Optional | Surcharge Rate |
| `maxTransactionAmount` | `number \| null \| undefined` | Optional | Max Transaction Amount |
| `minFeeAmount` | `number \| null \| undefined` | Optional | Min Fee Amount |
| `maxFeeAmount` | `number \| null \| undefined` | Optional | Max Fee Amount |
| `surchargeOnRecurring` | `boolean \| undefined` | Optional | Surcharge On Recurring |
| `refundSurcharges` | `boolean \| undefined` | Optional | Refund Surcharges |
| `productTransactionId` | `string \| undefined` | Optional | Product Transaction Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `runAsSeparateTransaction` | `boolean \| undefined` | Optional | Run As Separate Transaction |
| `applyToUserTypeId` | `string \| null \| undefined` | Optional | Apply To User Type Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `title` | `string \| null \| undefined` | Optional | Title<br>**Constraints**: *Maximum Length*: `256` |
| `surchargeLabel` | `string \| null \| undefined` | Optional | Surcharge Label<br>**Constraints**: *Maximum Length*: `64` |
| `surchargeTransactionProductId` | `string \| null \| undefined` | Optional | Surcharge Transaction Product Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `stateExceptionCheck` | `boolean \| undefined` | Optional | State Exception Check |
| `compliant` | `boolean \| undefined` | Optional | Compliant |
| `id` | `string \| undefined` | Optional | Surcharge Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |

## Example (as JSON)

```json
{
  "surcharge_fee": 10,
  "surcharge_rate": 1,
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "apply_to_user_type_id": "11e95f8ec39de8fbdb0a4f1a",
  "surcharge_transaction_product_id": "11e95f8ec39de8fbdb0a4f1a",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "max_transaction_amount": 252,
  "min_fee_amount": 198,
  "max_fee_amount": 172
}
```

