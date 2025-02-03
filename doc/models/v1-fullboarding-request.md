
# V1 Fullboarding Request

## Structure

`V1FullboardingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `parentId` | `string \| null \| undefined` | Optional | Location ID |
| `templateId` | `string \| undefined` | Optional | The ID of the template to be used - this value will be provided by Fortis.<br>**Constraints**: *Maximum Length*: `20`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `clientAppId` | `string \| null \| undefined` | Optional | Client Issues Id to track that can be used to track each submitted merchant application. This id should be generated and sent in the request payload, and will be returned in the response payload. If no id is submitted in the payload request, this field will be null in the response.<br>**Constraints**: *Maximum Length*: `50` |
| `email` | `string` | Required | Merchant email address.<br>**Constraints**: *Maximum Length*: `100` |
| `dbaName` | `string` | Required | Merchant 'Doing Business As' name.<br>**Constraints**: *Maximum Length*: `100` |
| `legalName` | `string \| null \| undefined` | Optional | Merchant legal name.<br><br>> (leave blank if same as DBA name).<br>> <br>**Constraints**: *Maximum Length*: `100` |
| `website` | `string \| null \| undefined` | Optional | Merchant's business website.<br><br>> (Required if "ecommerce_percent" is greater than 0).<br>> <br>**Constraints**: *Maximum Length*: `100` |
| `phoneNumber` | `string` | Required | Merchant's phone number.<br>**Constraints**: *Maximum Length*: `10` |
| `ownershipType` | [`OwnershipTypeEnum`](../../doc/models/ownership-type-enum.md) | Required | The Ownership Type of the merchant's business.<br>**Constraints**: *Maximum Length*: `10` |
| `fedTaxId` | `string` | Required | Federal Tax ID (EIN).<br>**Constraints**: *Maximum Length*: `10` |
| `averageTicket` | `number` | Required | Average Transaction Amount.<br><br>> Average transaction amount rounded to the next dollar.<br>> <br>**Constraints**: `>= 1`, `<= 99999` |
| `highTicket` | `number` | Required | Highest transaction amount rounded to the next dollar<br><br>> Highest transaction amount rounded to the next dollar (No decimal).<br>> <br>**Constraints**: `>= 1`, `<= 30000` |
| `ccMonthlyVolume` | `number` | Required | Average monthly credit card volume rounded to the next dollar.<br><br>> Average monthly credit card volume rounded to the next dollar.<br>> <br>**Constraints**: `>= 1` |
| `ecMonthlyVolume` | `number \| null \| undefined` | Optional | Average monthly echeck volume rounded to the next dollar.<br><br>> Average monthly echeck volume rounded to the next dollar.<br>> <br>**Constraints**: `>= 1` |
| `mccCode` | `string` | Required | Merchant's MCC code.<br>**Constraints**: *Maximum Length*: `10` |
| `businessDescription` | `string` | Required | Description of Goods or Services.<br>**Constraints**: *Maximum Length*: `200` |
| `swipedPercent` | `number` | Required | Card present/swiped percentage<br><br>> The sum total of "swiped_percent", "keyed_percent" and "ecommerce_percent" must add up to 100.<br>> <br>**Constraints**: `>= 0`, `<= 100` |
| `keyedPercent` | `number` | Required | Card not present/keyed percentage<br><br>> The sum total of "swiped_percent", "keyed_percent" and "ecommerce_percent" must add up to 100.<br>> <br>**Constraints**: `>= 0`, `<= 100` |
| `ecommercePercent` | `number` | Required | eCommerce percentage.<br><br>> The sum total of "swiped_percent", "keyed_percent" and "ecommerce_percent" must add up to 100.<br>> <br>**Constraints**: `>= 0`, `<= 100` |
| `isForeignEntity` | `boolean` | Required | Indicates whether or not the merchant is a foreign entity. |
| `personallyGuaranteed` | `boolean` | Required | Indicates whether or not the merchant is personally guaranteed. |
| `preferredLanguage` | [`PreferredLanguageEnum \| null \| undefined`](../../doc/models/preferred-language-enum.md) | Optional | Merchant preferred language. English(“en-US”) will be used if no value is supplied.<br><br>> Merchant preferred language. English(“en-US”) will be used if no value is supplied. |
| `addresses` | [`Address81[]`](../../doc/models/address-81.md) | Required | - |
| `owners` | [`Owner[]`](../../doc/models/owner.md) | Required | - |
| `bankAccounts` | [`BankAccount1[]`](../../doc/models/bank-account-1.md) | Required | - |
| `documents` | [`Document[] \| undefined`](../../doc/models/document.md) | Optional | - |
| `pricingElements` | [`PricingElement[] \| undefined`](../../doc/models/pricing-element.md) | Optional | - |
| `kycResponseObjects` | [`KycResponseObject[] \| undefined`](../../doc/models/kyc-response-object.md) | Optional | - |
| `metadata` | `unknown \| undefined` | Optional | Valid JSON of metadata related to merchant. |
| `signerIp` | `string \| null \| undefined` | Optional | Signer IP address. |
| `secCodes` | [`SecCodeEnum[] \| undefined`](../../doc/models/sec-code-enum.md) | Optional | Array of SEC codes that will be allowed, Only applicable for ACH. Valid values are 'PPD', 'WEB', 'TEL', 'CCD'. |

## Example (as JSON)

```json
{
  "template_id": "1234YourTemplateCode",
  "client_app_id": "ABC123",
  "email": "email@domain.com",
  "dba_name": "Discount Home Goods",
  "legal_name": "Total Home Goods, LLP",
  "website": "http://www.example.com",
  "phone_number": "5555551234",
  "ownership_type": "llp",
  "fed_tax_id": "0000000000",
  "average_ticket": 15,
  "high_ticket": 150,
  "cc_monthly_volume": 100,
  "ec_monthly_volume": 22,
  "mcc_code": "7629",
  "business_description": "Yard services.",
  "swiped_percent": 0,
  "keyed_percent": 0,
  "ecommerce_percent": 100,
  "is_foreign_entity": true,
  "personally_guaranteed": false,
  "preferred_language": "fr-CA",
  "addresses": [
    {
      "address_line_1": "121 E Main",
      "address_line_2": "Apt 707",
      "city": "Dallas",
      "state_province": "TX",
      "postal_code": "75087",
      "country_code": "US",
      "address_type": "location"
    }
  ],
  "owners": [
    {
      "first_name": "James",
      "last_name": "Bond",
      "middle_name": "Tyler",
      "title": "CEO",
      "date_of_birth": "2021-12-01",
      "address_line_1": "133 S Goliad St",
      "address_line_2": "Suite 120",
      "city": "Rockwall",
      "state_province": "TX",
      "postal_code": "75429",
      "country_code": "US",
      "ssn": "000000000",
      "ownership_percent": 100,
      "phone_number": "9042142323",
      "email_address": "james@example.com",
      "is_controller": true,
      "is_signer": true
    }
  ],
  "bank_accounts": [
    {
      "account_holder_name": "James Bond",
      "routing_number": "111111111",
      "account_number": "1234567",
      "is_primary": true,
      "account_type": "checking",
      "alt_deposit_types": [
        "alt_deposit_types0"
      ]
    }
  ],
  "signer_ip": "192.168.0.10",
  "parent_id": "parent_id8"
}
```

