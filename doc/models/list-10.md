
# List 10

## Structure

`List10`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountVaultId` | `string \| undefined` | Optional | Token ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `tokenId` | `string \| undefined` | Optional | Token ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactId` | `string \| null \| undefined` | Optional | Contact ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `accountVaultApiId` | `string \| null \| undefined` | Optional | Token API ID<br>**Constraints**: *Maximum Length*: `64` |
| `tokenApiId` | `string \| null \| undefined` | Optional | Token API ID<br>**Constraints**: *Maximum Length*: `64` |
| `joi` | [`Joi \| undefined`](../../doc/models/joi.md) | Optional | - |
| `active` | `boolean \| undefined` | Optional | Active |
| `description` | `string \| null \| undefined` | Optional | Description<br>**Constraints**: *Maximum Length*: `36` |
| `endDate` | `string \| null \| undefined` | Optional | End date<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `installmentTotalCount` | `number \| null \| undefined` | Optional | Installment Total Count<br>**Constraints**: `>= 1`, `<= 999` |
| `interval` | `number \| undefined` | Optional | Interval<br>**Constraints**: `>= 0`, `<= 365` |
| `intervalType` | [`IntervalTypeEnum \| undefined`](../../doc/models/interval-type-enum.md) | Optional | Interval Type |
| `locationId` | `string \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `notificationDays` | `number \| null \| undefined` | Optional | Notification Days<br>**Constraints**: `>= 0`, `<= 365` |
| `paymentMethod` | [`PaymentMethod1Enum \| undefined`](../../doc/models/payment-method-1-enum.md) | Optional | Payment Method |
| `productTransactionId` | `string \| null \| undefined` | Optional | Product Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `recurringId` | `string \| null \| undefined` | Optional | Recurring ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `recurringApiId` | `string \| null \| undefined` | Optional | Recurring Api ID<br>**Constraints**: *Maximum Length*: `64` |
| `startDate` | `string \| undefined` | Optional | Start date<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | Status |
| `transactionAmount` | `number \| undefined` | Optional | Transaction amount |
| `termsAgree` | `boolean \| undefined` | Optional | Terms Agree |
| `termsAgreeIp` | `string \| null \| undefined` | Optional | Terms Agree Ip |
| `recurringC1` | `string \| null \| undefined` | Optional | Custom field used for integrations<br>**Constraints**: *Maximum Length*: `128` |
| `recurringC2` | `string \| null \| undefined` | Optional | Custom field used for integrations<br>**Constraints**: *Maximum Length*: `128` |
| `recurringC3` | `string \| null \| undefined` | Optional | Custom field used for integrations<br>**Constraints**: *Maximum Length*: `128` |
| `sendToProcAsRecur` | `boolean \| undefined` | Optional | Send To Proc As Recur |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Optional | Tag Information on `expand` |
| `secondaryAmount` | `number \| null \| undefined` | Optional | Retained Amount |
| `currency` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | Recurring ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `nextRunDate` | `string \| undefined` | Optional | Next Run Date<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `recurringTypeId` | [`RecurringTypeIdEnum \| undefined`](../../doc/models/recurring-type-id-enum.md) | Optional | Recurring Type |
| `installmentAmountTotal` | `number \| null \| undefined` | Optional | Installment Amount Total |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `logEmails` | [`LogEmail[] \| undefined`](../../doc/models/log-email.md) | Optional | Log Email Information on `expand` |
| `contact` | [`Contact1 \| undefined`](../../doc/models/contact-1.md) | Optional | Contact Information on `expand` |
| `accountVault` | [`AccountVault \| undefined`](../../doc/models/account-vault.md) | Optional | Token Information on `expand` |
| `createdUser` | [`CreatedUser \| undefined`](../../doc/models/created-user.md) | Optional | User Information on `expand` |
| `signature` | [`Signature \| undefined`](../../doc/models/signature.md) | Optional | Signature Information on `expand` |
| `paymentSchedule` | `string[] \| undefined` | Optional | Payment Schedule Information on `expand`<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location Information on `expand` |
| `productTransaction` | [`ProductTransaction \| undefined`](../../doc/models/product-transaction.md) | Optional | Product Transaction Information on `expand` |
| `nextRunDateMin` | `string \| undefined` | Optional | Next Run Date Min Information on `expand`<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `nextRunDateMax` | `string \| undefined` | Optional | Next Run Date Max Information on `expand`<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `allTags` | [`AllTag[] \| undefined`](../../doc/models/all-tag.md) | Optional | All Tag Information on `expand` |
| `changelogs` | [`Changelog[] \| undefined`](../../doc/models/changelog.md) | Optional | Changelog Information on `expand` |
| `forecast` | [`Forecast \| undefined`](../../doc/models/forecast.md) | Optional | Forecast Information on `expand` |
| `recurringSplits` | [`RecurringSplit[] \| undefined`](../../doc/models/recurring-split.md) | Optional | Recurring Split Information on `expand` |

## Example (as JSON)

```json
{
  "account_vault_id": "11e95f8ec39de8fbdb0a4f1a",
  "token_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "account_vault_api_id": "token1234abcd",
  "token_api_id": "token1234abcd",
  "active": true,
  "description": "Description",
  "end_date": "2021-12-01",
  "installment_total_count": 20,
  "interval": 1,
  "interval_type": "d",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "notification_days": 2,
  "payment_method": "cc",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "recurring_id": "11e95f8ec39de8fbdb0a4f1a",
  "recurring_api_id": "recurring1234abcd",
  "start_date": "2021-12-01",
  "status": "active",
  "transaction_amount": 300,
  "terms_agree": true,
  "terms_agree_ip": "192.168.0.10",
  "recurring_c1": "recurring custom data 1",
  "recurring_c2": "recurring custom data 2",
  "recurring_c3": "recurring custom data 3",
  "send_to_proc_as_recur": true,
  "secondary_amount": 100,
  "currency": "USD",
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "next_run_date": "2021-12-01",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "recurring_type_id": "i",
  "installment_amount_total": 99999999,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "next_run_date_min": "2021-12-01",
  "next_run_date_max": "2021-12-01"
}
```

