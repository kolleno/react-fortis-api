
# Account Info

This field contains additional information about the Cardholder's account provided by the 3DS Requestor. The field is optional but recommended to include.

## Structure

`AccountInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chAccAgeInd` | [`ChAccAgeIndEnum \| undefined`](../../doc/models/ch-acc-age-ind-enum.md) | Optional | Length of time that the cardholder has had the account with the 3DS Requestor.<br><br>> 01 - No account<br>> <br>> 02 - Created during this transaction<br>> <br>> 03 - Less than 30 days<br>> <br>> 04 - Between 30 and 60 days<br>> <br>> 05 - More than 60 days |
| `chAccDate` | `string \| undefined` | Optional | Date converted into UTC that the cardholder opened the account with the 3DS Requestor. Date format = YYYYMMDD. |
| `chAccChangeInd` | [`ChAccChangeIndEnum \| undefined`](../../doc/models/ch-acc-change-ind-enum.md) | Optional | Length of time since the cardholder's account information with the 3DS Requestor was last changed. Includes Billing or Shipping address, new payment account, or new user(s) added.<br><br>> 01 - Changed during this transaction<br>> <br>> 02 - Less than 30 days<br>> <br>> 03 - 30 - 60 days<br>> <br>> 04 - More than 60 days |
| `chAccChange` | `string \| undefined` | Optional | Date converted into UTC that the cardholder's account with the 3DS Requestor was last changed. Including Billing or Shipping address, new payment account, or new user(s) added. Date format = YYYYMMDD. |
| `chAccPwChangeInd` | [`ChAccPwChangeIndEnum \| undefined`](../../doc/models/ch-acc-pw-change-ind-enum.md) | Optional | Length of time since the cardholder's account with the 3DS Requestor had a password change or account reset.<br><br>> 01 - No change<br>> <br>> 02 - Changed during this transaction<br>> <br>> 03 - Less than 30 days<br>> <br>> 04 - 30 - 60 days<br>> <br>> 05 - More than 60 days |
| `chAccPwChange` | `string \| undefined` | Optional | Date converted into UTC that cardholder's account with the 3DS Requestor had a password change or account reset. Date format must be YYYYMMDD. |
| `shipAddressUsageInd` | [`ShipAddressUsageIndEnum \| undefined`](../../doc/models/ship-address-usage-ind-enum.md) | Optional | Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.<br><br>> 01 - This transaction<br>> <br>> 02 - Less than 30 days<br>> <br>> 03 - 30 - 60 days<br>> <br>> 04 - More than 60 days |
| `shipAddressUsage` | `string \| undefined` | Optional | Date converted into UTC when the shipping address used for this transaction was first used with the 3DS Requestor. Date format must be YYYYMMDD. |
| `txnActivityDay` | `number \| undefined` | Optional | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours. |
| `txnActivityYear` | `number \| undefined` | Optional | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year. |
| `provisionAttemptsDay` | `number \| undefined` | Optional | Number of Add Card attempts in the last 24 hours. |
| `nbPurchaseAccount` | `number \| undefined` | Optional | Number of purchases with this cardholder account during the previous six months. |
| `suspiciousAccActivity` | [`SuspiciousAccActivityEnum \| undefined`](../../doc/models/suspicious-acc-activity-enum.md) | Optional | Indicates whether the 3DS Requestor has experienced suspicious activity including previous fraud) on the cardholder account.<br><br>> 01 - No suspicious activity has been observed<br>> <br>> 02 - Suspicious activity has been observed |
| `shipNameIndicator` | [`ShipNameIndicatorEnum \| undefined`](../../doc/models/ship-name-indicator-enum.md) | Optional | Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.<br><br>> 01 - Account Name identical to shipping Name<br>> <br>> 02 - Account Name different than shipping Name |
| `paymentAccInd` | [`PaymentAccIndEnum \| undefined`](../../doc/models/payment-acc-ind-enum.md) | Optional | Indicates the length of time that the payment account was enrolled in the cardholder's account with the 3DS Requestor.<br><br>> 01 - No account (guest check-out)<br>> <br>> 02 - During this transaction<br>> <br>> 03 - Less than 30 days<br>> <br>> 04 - 30 - 60 days<br>> <br>> 05 - More than 60 days |
| `paymentAccAge` | `string \| undefined` | Optional | Date converted into UTC that the payment account was enrolled in the cardholder's account with the 3DS Requestor. Date format must be YYYYMMDD. |
| `chAccReqId` | `string \| null \| undefined` | Optional | The 3DS Requestor assigned account identifier of the transacting Cardholder. This identifier is a unique representation of the account identifier for the 3DS Requestor and is provided as a String.<br><br>This field is supported in Starting from EMV 3DS 2.3.1 and later.<br>**Constraints**: *Maximum Length*: `64` |

## Example (as JSON)

```json
{
  "ch_acc_age_ind": "04",
  "ch_acc_date": "20240401",
  "ch_acc_change_ind": "03",
  "ch_acc_change": "20240401",
  "ch_acc_pw_change_ind": "04",
  "ch_acc_pw_change": "20240401",
  "ship_address_usage_ind": "04",
  "ship_address_usage": "20240401",
  "txn_activity_day": 1,
  "txn_activity_year": 1,
  "provision_attempts_day": 1,
  "nb_purchase_account": 1,
  "suspicious_acc_activity": "01",
  "ship_name_indicator": "01",
  "payment_acc_ind": "03",
  "payment_acc_age": "20240401"
}
```

