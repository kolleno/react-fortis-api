
# Bank Account 1

Array of bank account objects.

> One account with “deposit_type” of primary is required. Maximum of two accounts are allowed.

## Structure

`BankAccount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderName` | `string` | Required | Account holder name.<br>**Constraints**: *Maximum Length*: `40` |
| `routingNumber` | `string` | Required | Nine-digit Bank routing number.<br>**Constraints**: *Maximum Length*: `9` |
| `accountNumber` | `string` | Required | Account number.<br>**Constraints**: *Maximum Length*: `17` |
| `isPrimary` | `boolean \| undefined` | Optional | Flag indicating whether or not the account is the primary account. Only one account can be marked as primary.<br><br>> Indicates that the account should be the primary account for the merchant. One and only one account may be set to true. |
| `accountType` | [`AccountType12Enum`](../../doc/models/account-type-12-enum.md) | Required | Account type. Either "checking" or "savings"<br>**Constraints**: *Maximum Length*: `10` |
| `altDepositTypes` | `string[] \| undefined` | Optional | Array of deposit types. ('fees', 'adjustments', 'returns') |

## Example (as JSON)

```json
{
  "account_holder_name": "James Bond",
  "routing_number": "111111111",
  "account_number": "1234567",
  "is_primary": true,
  "account_type": "checking",
  "alt_deposit_types": [
    "alt_deposit_types0",
    "alt_deposit_types9"
  ]
}
```

