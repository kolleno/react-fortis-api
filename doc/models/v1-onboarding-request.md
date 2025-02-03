
# V1 Onboarding Request

## Structure

`V1OnboardingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `parentId` | `string \| null \| undefined` | Optional | Location ID |
| `primaryPrincipal` | [`PrimaryPrincipal1`](../../doc/models/primary-principal-1.md) | Required | The Primary Principal. |
| `templateCode` | `string` | Required | The ID of the template to be used - this value will be provided by Fortis.<br>**Constraints**: *Maximum Length*: `20`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `email` | `string` | Required | Merchant email address.<br>**Constraints**: *Maximum Length*: `100` |
| `dbaName` | `string` | Required | Merchant 'Doing Business As' name.<br>**Constraints**: *Maximum Length*: `100` |
| `location` | [`Location20`](../../doc/models/location-20.md) | Required | The Location. |
| `appDelivery` | [`AppDeliveryEnum`](../../doc/models/app-delivery-enum.md) | Required | The delivery method of the app to the merchant.<br>**Constraints**: *Maximum Length*: `12` |
| `businessCategory` | [`BusinessCategoryEnum \| null \| undefined`](../../doc/models/business-category-enum.md) | Optional | The Category of the merchant's business<br><br>> (Required if "business_type" is provided). Note: "business_type" must belong to the appropriate "business_category" |
| `businessType` | [`BusinessTypeEnum \| null \| undefined`](../../doc/models/business-type-enum.md) | Optional | The Type of a merchant's business. |
| `businessDescription` | `string \| null \| undefined` | Optional | Description of Goods or Services.<br>**Constraints**: *Maximum Length*: `200` |
| `swipedPercent` | `number \| null \| undefined` | Optional | Card present/swiped percentage<br><br>> The sum total of "swiped_percent", "keyed_percent" and "ecommerce_percent" must add up to 100.<br>> <br>**Constraints**: `>= 0`, `<= 100` |
| `keyedPercent` | `number \| null \| undefined` | Optional | Card not present/keyed percentage<br><br>> The sum total of "swiped_percent", "keyed_percent" and "ecommerce_percent" must add up to 100.<br>> <br>**Constraints**: `>= 0`, `<= 100` |
| `ecommercePercent` | `number \| null \| undefined` | Optional | eCommerce percentage.<br><br>> The sum total of "swiped_percent", "keyed_percent" and "ecommerce_percent" must add up to 100.<br>> <br>**Constraints**: `>= 0`, `<= 100` |
| `ownershipType` | [`OwnershipTypeEnum \| null \| undefined`](../../doc/models/ownership-type-enum.md) | Optional | The Ownership Type of the merchant's business.<br>**Constraints**: *Maximum Length*: `10` |
| `fedTaxId` | `string \| null \| undefined` | Optional | Federal Tax ID (EIN).<br>**Constraints**: *Maximum Length*: `10` |
| `ccAverageTicketRange` | `number \| null \| undefined` | Optional | Average Transaction Amount Range<br><br>> (Applicable when Template Application Type is 'credit_card' or 'both').<br>> <br>**Constraints**: `>= 1`, `<= 7` |
| `ccMonthlyVolumeRange` | `number \| null \| undefined` | Optional | Monthly Processing Volume Range<br><br>> (Applicable when Template Application Type is 'credit_card' or 'both').<br>> <br>**Constraints**: `>= 1`, `<= 7` |
| `ccHighTicket` | `number \| null \| undefined` | Optional | Highest transaction amount rounded to the next dollar<br><br>> (No decimal and applicable when Template Application Type is 'credit_card' or 'both').<br>> <br>**Constraints**: `>= 0`, `<= 30000` |
| `ecAverageTicketRange` | `number \| null \| undefined` | Optional | Average Transaction Amount Range<br><br>> (Applicable when Template Application Type is 'echeck' or 'both').<br>> <br>**Constraints**: `>= 1`, `<= 7` |
| `ecMonthlyVolumeRange` | `number \| null \| undefined` | Optional | Monthly Processing Volume Range<br><br>> (Applicable when Template Application Type is 'echeck' or 'both').<br>> <br>**Constraints**: `>= 1`, `<= 7` |
| `ecHighTicket` | `number \| null \| undefined` | Optional | Highest transaction amount rounded to the next dollar<br><br>> (No decimal and applicable when Template Application Type is 'echeck' or 'both').<br>> <br>**Constraints**: `>= 0`, `<= 30000` |
| `website` | `string \| null \| undefined` | Optional | Merchant's business website.<br><br>> (Required if "ecommerce_percent" is greater than 0).<br>> <br>**Constraints**: *Maximum Length*: `100` |
| `bankAccount` | [`BankAccount \| undefined`](../../doc/models/bank-account.md) | Optional | The Bank Account. |
| `altBankAccount` | [`AltBankAccount \| undefined`](../../doc/models/alt-bank-account.md) | Optional | The Alternative Bank Account. |
| `legalName` | `string \| null \| undefined` | Optional | Merchant legal name.<br><br>> (leave blank if same as DBA name).<br>> <br>**Constraints**: *Maximum Length*: `100` |
| `contact` | [`Contact11`](../../doc/models/contact-11.md) | Required | The Contact. |
| `clientAppId` | `string \| null \| undefined` | Optional | Client Issues Id to track that can be used to track each submitted merchant application. This id should be generated and sent in the request payload, and will be returned in the response payload. If no id is submitted in the payload request, this field will be null in the response.<br>**Constraints**: *Maximum Length*: `50` |
| `secCodes` | [`SecCodeEnum[] \| undefined`](../../doc/models/sec-code-enum.md) | Optional | Array of SEC codes that will be allowed, Only applicable for ACH. Valid values are 'PPD', 'WEB', 'TEL', 'CCD'. |

## Example (as JSON)

```json
{
  "primary_principal": {
    "first_name": "Bob",
    "last_name": "Fairview",
    "middle_name": "Nathaniel",
    "title": "Dr",
    "date_of_birth": "2021-12-01",
    "address_line_1": "1354 Oak St.",
    "address_line_2": "Unit 203",
    "city": "Dover",
    "state_province": "DE",
    "postal_code": "55022",
    "ownership_percent": 100,
    "phone_number": "555-555-1234"
  },
  "template_code": "1234YourTemplateCode",
  "email": "email@domain.com",
  "dba_name": "Discount Home Goods",
  "location": {
    "address_line_1": "1200 West Hartford Pkwy",
    "address_line_2": "Suite 2000",
    "city": "Dover",
    "state_province": "DE",
    "postal_code": "55022",
    "phone_number": "555-555-1212"
  },
  "app_delivery": "direct",
  "business_category": "education",
  "swiped_percent": 0,
  "keyed_percent": 0,
  "ecommerce_percent": 100,
  "ownership_type": "llp",
  "fed_tax_id": "0000000000",
  "cc_average_ticket_range": 5,
  "cc_monthly_volume_range": 1,
  "cc_high_ticket": 1500,
  "ec_average_ticket_range": 5,
  "ec_monthly_volume_range": 2,
  "ec_high_ticket": 1500,
  "website": "http://www.example.com",
  "legal_name": "Total Home Goods, LLP",
  "contact": {
    "first_name": "Jeffery",
    "last_name": "Todd",
    "email": "jtodd@example.com",
    "phone_number": "555-555-3456"
  },
  "client_app_id": "ABC123",
  "parent_id": "parent_id2",
  "business_type": "books_mags_music_and_video",
  "business_description": "business_description0"
}
```

