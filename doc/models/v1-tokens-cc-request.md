
# V1 Tokens Cc Request

## Structure

`V1TokensCcRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderName` | `string \| null \| undefined` | Optional | Account holder name<br><br>> For CC, this is the 'Name (as it appears) on Card'. For ACH, this is the 'Name on Account'.<br>> <br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `accountNumber` | `string \| null \| undefined` | Optional | Account number<br><br>> For CC transactions, a credit card number. For ACH transactions, a bank account number. String lengths are conditional, CC should be 13-19 and ACH should be 4-19. |
| `accountVaultApiId` | `string \| null \| undefined` | Optional | This field can be used to correlate Tokens in our system to data within an outside software integration<br><br>> Must be unique per location. When running a transaction and using a stored token, this field can be used in place of account_vault_id.<br>> <br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `tokenApiId` | `string \| null \| undefined` | Optional | This field can be used to correlate Tokens in our system to data within an outside software integration<br><br>> Must be unique per location. When running a transaction and using a stored token, this field can be used in place of token_id.<br>> <br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `accountvaultC1` | `string \| null \| undefined` | Optional | DEPRECATED (Use token_c1 instead)<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `accountvaultC2` | `string \| null \| undefined` | Optional | DEPRECATED (Use token_c2 instead)<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `accountvaultC3` | `string \| null \| undefined` | Optional | DEPRECATED (Use token_c3 instead)<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `tokenC1` | `string \| null \| undefined` | Optional | Custom field 1 for API users to store custom data<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `tokenC2` | `string \| null \| undefined` | Optional | Custom field 2 for API users to store custom data<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `tokenC3` | `string \| null \| undefined` | Optional | Custom field 3 for API users to store custom data<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `achSecCode` | [`AchSecCode3Enum \| null \| undefined`](../../doc/models/ach-sec-code-3-enum.md) | Optional | SEC code for the account |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Billing Address Object |
| `contactId` | `string \| null \| undefined` | Optional | Used to associate the Token with a Contact.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `customerId` | `string \| null \| undefined` | Optional | Used to store a customer identification number.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `identityVerification` | [`IdentityVerification2 \| undefined`](../../doc/models/identity-verification-2.md) | Optional | Identity verification |
| `locationId` | `string` | Required | A valid Location Id associated with the Contact for this Token<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousAccountVaultApiId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token api id.<br>**Constraints**: *Maximum Length*: `64` |
| `previousTokenApiId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token api id.<br>**Constraints**: *Maximum Length*: `64` |
| `previousAccountVaultId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousTokenId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous token.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `previousTransactionId` | `string \| null \| undefined` | Optional | Can be used to pull payment info from a previous transaction.<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `termsAgree` | `boolean \| undefined` | Optional | Terms agreement. |
| `termsAgreeIp` | `string \| null \| undefined` | Optional | The ip address of the client that agreed to terms. |
| `title` | `string \| null \| undefined` | Optional | Used to describe the Token for easier identification within our UI.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `16` |
| `tokenImportId` | `string \| null \| undefined` | Optional | Token Import Id<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `secureDirectoryServerTransactionId` | `string \| null \| undefined` | Optional | (ECOMM) Directory Server Transaction ID (Such as XID, TAVV) |
| `secureProtocolVersion` | `number \| null \| undefined` | Optional | (ECOMM)  Secure Program Protocol Version |
| `secureAuthData` | `string \| null \| undefined` | Optional | (ECOMM) The token authentication value associated with 3D secure transactions (Such as CAVV, UCAF auth data) |
| `secureCollectionIndicator` | `number \| null \| undefined` | Optional | (ECOMM) Used for UCAF collection indicator or Discover Autentication type |
| `threeDsServerTransId` | `string \| null \| undefined` | Optional | 3DS Server Transaction ID.  If this field is sent and 3DS authentication was done with Fortis, the 3DS fields secure_directory_server_transaction_id, secure_protocol_version, and secure_collection_indicator will be pre-populated. |
| `acsTransactionId` | `string \| null \| undefined` | Optional | ACS Transaction ID<br>**Constraints**: *Maximum Length*: `36` |
| `joi` | [`Joi19 \| undefined`](../../doc/models/joi-19.md) | Optional | - |
| `expDate` | `string \| null \| undefined` | Optional | Required for CC. The Expiration Date for the credit card. (MMYY format).<br>**Constraints**: *Pattern*: `^(0[1-9]\|1[0-2])[0-9]{2}$` |
| `eSerialNumber` | `string \| null \| undefined` | Optional | E Serial Number<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `eTrackData` | `string \| null \| undefined` | Optional | E Track Data |
| `eFormat` | `string \| null \| undefined` | Optional | E Format |
| `eKeyedData` | `string \| null \| undefined` | Optional | E Keyed Data |
| `runAvs` | `boolean \| undefined` | Optional | A flag that will override a product transactions run_avs_on_accountvault_create setting to determine if an avsonly transaction should be run prior to storing the token. When storing an token with tha run_avs flag, if the avsonly check fails account verification with the processor, the token will not be stored in the system. The meaning of the AVS response codes can be found here on this page.This is the new preferred method of validating a credit card and can be used instead of the legacy $1 auth only transaction.Using this flag overrides the default setting for the locations product transactions.<br><br>> Transaction fees may apply when performing an avsonly transaction while storing an token. |
| `trackData` | `string \| null \| undefined` | Optional | Track Data from a magnetic card swipe.<br>**Constraints**: *Maximum Length*: `256` |
| `ticket` | `string \| null \| undefined` | Optional | A valid ticket that was created to store the token.<br>**Constraints**: *Maximum Length*: `36` |

## Example (as JSON)

```json
{
  "account_holder_name": "John Smith",
  "account_number": "5454545454545454",
  "account_vault_api_id": "accountvaultabcd",
  "token_api_id": "tokenabcd",
  "accountvault_c1": "accountvault custom 1",
  "accountvault_c2": "accountvault custom 2",
  "accountvault_c3": "accountvault custom 3",
  "token_c1": "token custom 1",
  "token_c2": "token custom 2",
  "token_c3": "token custom 3",
  "ach_sec_code": "WEB",
  "contact_id": "11e95f8ec39de8fbdb0a4f1a",
  "customer_id": "123456",
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "previous_account_vault_api_id": "previousaccountvault123456",
  "previous_token_api_id": "previousaccountvault123456",
  "previous_account_vault_id": "11e95f8ec39de8fbdb0a4f1a",
  "previous_token_id": "11e95f8ec39de8fbdb0a4f1a",
  "previous_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "terms_agree": true,
  "terms_agree_ip": "192.168.0.10",
  "title": "Test CC Account",
  "token_import_id": "11e95f8ec39de8fbdb0a4f1a",
  "secure_directory_server_transaction_id": "d65e93c3-35ab-41ba-b307-767bfc19eae",
  "secure_protocol_version": 2,
  "secure_auth_data": "vVwL7UNHCf8W8M2LAfvRChNHN7c%3D",
  "three_ds_server_trans_id": "d65e93c3-35ab-41ba-b307-767bfc19eae",
  "acs_transaction_id": "13c701a3-5a88-4c45-89e9-ef65e50a8bf9",
  "exp_date": "0929",
  "e_serial_number": "1234567890",
  "e_track_data": "%B5454545454545454^account holder^17041010001111A123456789012?250112000000153000000?;5454545454545454=25011011000012345678?00|DC7AB845EFA793FB3C89C5D347D36ED11CAAED0C33E150437893996BA75EB8A0F334D0DAA1B874B6C677A4EF6984B089F891D8E434ACD867B616F4D815E63DA6A86B2AF927E9919B0CFC1DA3FD276D9382672EF8AA256329|32EA4D785CA3398882AABC405017EF9C2BDA666FA007A76538DE10878601EEC36EFE1F185BB8B1C8",
  "e_format": "ksn",
  "e_keyed_data": "236D530E098D48DB3F1AA367882CC1A7D475EFCACEFF1E965F17EC1E2D42CBF611C9EB0F80F4255784BA06951BD6092AB6CD3369D3D7E022E74DDCB16F9C40599FA03355E37E6ABB06B717B207709ED8C6BC5C7B6E32BB2B2F5046551A1C88D6",
  "run_avs": false,
  "track_data": "%B5424181111112228^FDCS TEST CARD /MASTERCARD^18121010001111123456789012?;5424181111112228=1812101100000123456?",
  "ticket": "12345678"
}
```

