
# Surcharge Transaction

Surcharge Transaction Information on `expand`

## Structure

`SurchargeTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modelName` | `string \| undefined` | Optional | Model Name |
| `transactionId` | `string \| undefined` | Optional | Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `surchargeFee` | `number \| undefined` | Optional | Surcharge Fee<br>**Constraints**: `>= 0` |
| `surchargeRate` | `number \| undefined` | Optional | Surcharge Rate<br>**Constraints**: `>= 0` |
| `surchargeAmount` | `number \| null \| undefined` | Optional | Surcharge Amount<br>**Constraints**: `>= 0` |
| `surchargeTransactionMin` | `number \| null \| undefined` | Optional | Surcharge Transaction Minimum<br>**Constraints**: `>= 0` |
| `surchargeTransactionMax` | `number \| null \| undefined` | Optional | Surcharge Transaction Maximum<br>**Constraints**: `>= 0` |
| `created` | `number \| null \| undefined` | Optional | Created |
| `modified` | `number \| null \| undefined` | Optional | Modified |
| `createdUserId` | `string \| null \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "model_name": "Model Name",
  "transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "surcharge_fee": 0,
  "surcharge_rate": 0,
  "created": 1422040992,
  "modified": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a"
}
```

