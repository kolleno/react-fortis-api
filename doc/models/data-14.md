
# Data 14

## Structure

`Data14`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `parentId` | `string \| null \| undefined` | Optional | Location ID |
| `primaryPrincipal` | [`PrimaryPrincipal \| undefined`](../../doc/models/primary-principal.md) | Optional | The Primary Principal. |
| `templateCode` | `string \| undefined` | Optional | The ID of the template to be used - this value will be provided by Fortis.<br>**Constraints**: *Maximum Length*: `20`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `email` | `string \| undefined` | Optional | Merchant email address.<br>**Constraints**: *Maximum Length*: `100` |
| `dbaName` | `string \| undefined` | Optional | Merchant 'Doing Business As' name.<br>**Constraints**: *Maximum Length*: `100` |
| `location` | [`Location5 \| undefined`](../../doc/models/location-5.md) | Optional | The Location. |
| `appDelivery` | `string \| undefined` | Optional | The delivery method of the app to the merchant.<br>**Constraints**: *Maximum Length*: `20` |
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
| `contact` | [`Contact \| undefined`](../../doc/models/contact.md) | Optional | The Contact. |
| `clientAppId` | `string \| undefined` | Optional | Client Issues Id to track that can be used to track each submitted merchant application. This id should be generated and sent in the request payload, and will be returned in the response payload. If no id is submitted in the payload request, this field will be null in the response.<br>**Constraints**: *Maximum Length*: `20` |
| `secCodes` | [`SecCodeEnum[] \| undefined`](../../doc/models/sec-code-enum.md) | Optional | Array of SEC codes that will be allowed, Only applicable for ACH. Valid values are 'PPD', 'WEB', 'TEL', 'CCD'. |
| `appLink` | `string \| null \| undefined` | Optional | A full page or iframeable link, set in the request app_delivery field, that can be used to retrieve and resume the generated merchant application. No link will be returned if app_delivery is direct<br>**Constraints**: *Maximum Length*: `400` |

## Example (as JSON)

```json
{
  "template_code": "1234YourTemplateCode",
  "email": "jtodd@example.com",
  "dba_name": "Discount Home Goods",
  "app_delivery": "link_full_page",
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
  "client_app_id": "ABC123",
  "app_link": "https://mpa.example.com/signup/123456788",
  "parent_id": "parent_id6",
  "primary_principal": {
    "first_name": "first_name6",
    "last_name": "last_name4",
    "middle_name": "middle_name6",
    "title": "title2",
    "date_of_birth": "date_of_birth2"
  }
}
```

