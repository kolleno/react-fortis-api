
# Hosted Payment Page

Hosted Payment Page Information on `expand`

## Structure

`HostedPaymentPage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| null \| undefined` | Optional | User ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationId` | `string \| null \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api Id |
| `productTransactionId` | `string \| undefined` | Optional | Product Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `title` | `string \| undefined` | Optional | Title<br>**Constraints**: *Maximum Length*: `64` |
| `redirectUrlDelay` | `number \| null \| undefined` | Optional | Redirect Url Delay<br>**Default**: `15`<br>**Constraints**: `<= 15` |
| `minPaymentAmount` | `number \| null \| undefined` | Optional | Min Payment Amount<br>**Constraints**: `>= 0` |
| `maxPaymentAmount` | `bigint \| null \| undefined` | Optional | Max Payment Amount<br>**Default**: `9999999999`<br>**Constraints**: `<= 9999999999` |
| `redirectUrlOnApprove` | `string \| null \| undefined` | Optional | Redirect Url On Approval |
| `redirectUrlOnDecline` | `string \| null \| undefined` | Optional | Redirect Url On Decline |
| `fieldConfiguration` | [`FieldConfiguration \| undefined`](../../doc/models/field-configuration.md) | Optional | field_configuration |
| `encryptionKey` | `string \| null \| undefined` | Optional | Encryption Key<br>**Constraints**: *Minimum Length*: `32`, *Maximum Length*: `32` |
| `stylesheetUrl` | `string \| null \| undefined` | Optional | Stylesheet Url |
| `parentSendMessage` | `boolean \| undefined` | Optional | Parent Send Message |
| `hideOptionalFields` | `boolean \| undefined` | Optional | Hide Optional Fields |
| `id` | `string \| undefined` | Optional | Hosted Payment Page Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| null \| undefined` | Optional | System generated id for user who created record<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| null \| undefined` | Optional | System generated id for user who created record<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |

## Example (as JSON)

```json
{
  "user_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "title": "Sample title",
  "redirect_url_delay": 15,
  "min_payment_amount": 0,
  "max_payment_amount": 9999999999,
  "parent_send_message": true,
  "hide_optional_fields": true,
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "location_api_id": "location_api_id2"
}
```

