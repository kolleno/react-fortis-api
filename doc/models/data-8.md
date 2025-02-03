
# Data 8

## Structure

`Data8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`ActionEnum \| null \| undefined`](../../doc/models/action-enum.md) | Optional | The action to be performed<br>**Default**: `ActionEnum.Sale` |
| `digitalWalletsOnly` | `boolean \| undefined` | Optional | **Default**: `false` |
| `methods` | [`Method3[] \| undefined`](../../doc/models/method-3.md) | Optional | By default the system will try to offer all the availables payment methods from your account. But if you like, you can specify exactly what services you want to use.<br>**Constraints**: *Minimum Items*: `1`, *Unique Items Required* |
| `amount` | `number \| undefined` | Optional | The total amount to be charged. Allowed on the actions: `sale`, `auth-only`, `refund`<br>**Constraints**: `>= 1`, `<= 999999999` |
| `taxAmount` | [`Data8TaxAmount \| undefined`](../../doc/models/containers/data-8-tax-amount.md) | Optional | This is a container for any-of cases.<br>**Constraints**: `>= 1`, `<= 999999999` |
| `secondaryAmount` | [`Data8SecondaryAmount \| undefined`](../../doc/models/containers/data-8-secondary-amount.md) | Optional | This is a container for any-of cases.<br>**Constraints**: `>= 0`, `<= 999999999` |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `contactId` | `string \| null \| undefined` | Optional | Contact ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `saveAccount` | [`Data8SaveAccount \| undefined`](../../doc/models/containers/data-8-save-account.md) | Optional | This is a container for any-of cases. |
| `saveAccountTitle` | [`Data8SaveAccountTitle \| undefined`](../../doc/models/containers/data-8-save-account-title.md) | Optional | This is a container for any-of cases.<br>**Constraints**: *Maximum Length*: `16` |
| `title` | [`Data8Title \| undefined`](../../doc/models/containers/data-8-title.md) | Optional | This is a container for any-of cases.<br>**Constraints**: *Maximum Length*: `16` |
| `achSecCode` | [`AchSecCodeEnum \| null \| undefined`](../../doc/models/ach-sec-code-enum.md) | Optional | SEC code for the transaction if it's an ACH transaction<br>**Default**: `AchSecCodeEnum.WEB` |
| `bankFundedOnlyOverride` | [`Data8BankFundedOnlyOverride \| undefined`](../../doc/models/containers/data-8-bank-funded-only-override.md) | Optional | This is a container for any-of cases. |
| `allowPartialAuthorizationOverride` | [`Data8AllowPartialAuthorizationOverride \| undefined`](../../doc/models/containers/data-8-allow-partial-authorization-override.md) | Optional | This is a container for any-of cases. |
| `autoDeclineCvvOverride` | [`Data8AutoDeclineCvvOverride \| undefined`](../../doc/models/containers/data-8-auto-decline-cvv-override.md) | Optional | This is a container for any-of cases. |
| `autoDeclineStreetOverride` | [`Data8AutoDeclineStreetOverride \| undefined`](../../doc/models/containers/data-8-auto-decline-street-override.md) | Optional | This is a container for any-of cases. |
| `autoDeclineZipOverride` | [`Data8AutoDeclineZipOverride \| undefined`](../../doc/models/containers/data-8-auto-decline-zip-override.md) | Optional | This is a container for any-of cases. |
| `message` | `string \| null \| undefined` | Optional | A custom text message that displays after the payment is processed.<br>**Constraints**: *Maximum Length*: `120` |
| `clientToken` | `string \| undefined` | Optional | A JWT to be used to create the elements.<br><br>> This is a one-time only use token.<br>> Do not store for long term use, it expires after 48 hours. |

## Example (as JSON)

```json
{
  "action": "sale",
  "digitalWalletsOnly": false,
  "amount": 1099,
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "ach_sec_code": "WEB",
  "client_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "methods": [
    {
      "type": "ach",
      "product_transaction_id": "product_transaction_id4"
    },
    {
      "type": "ach",
      "product_transaction_id": "product_transaction_id4"
    },
    {
      "type": "ach",
      "product_transaction_id": "product_transaction_id4"
    }
  ],
  "tax_amount": 194
}
```

