
# Level 3 Default

Level3 Default

## Structure

`Level3Default`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `destinationCountryCode` | `string \| null \| undefined` | Optional | Code of the country where the goods are being shipped.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `dutyAmount` | `number \| null \| undefined` | Optional | Fee amount associated with the import of the purchased goods ,Can accept Two (2) decimal places<br>**Constraints**: `>= 0`, `<= 99999999999900` |
| `freightAmount` | `number \| null \| undefined` | Optional | Freight or shipping portion of the total transaction amount ,Can accept Two (2) decimal places.<br>**Constraints**: `>= 0`, `<= 99999999999900` |
| `nationalTax` | `number \| null \| undefined` | Optional | National tax for the transaction ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 999999999900` |
| `salesTax` | `number \| null \| undefined` | Optional | Sales tax for the transaction ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 999999999900` |
| `shipfromZipCode` | `string \| null \| undefined` | Optional | Postal/ZIP code of the address from where the purchased goods are being shipped.<br>**Constraints**: *Maximum Length*: `10` |
| `shiptoZipCode` | `string \| null \| undefined` | Optional | Postal/ZIP code of the address where purchased goods will be delivered.<br>**Constraints**: *Maximum Length*: `10` |
| `taxAmount` | `number \| null \| undefined` | Optional | Amount of any value added taxes ,Can accept Two (2) decimal places.<br>**Constraints**: `>= 0`, `<= 99999999900` |
| `taxExempt` | [`TaxExemptEnum \| null \| undefined`](../../doc/models/tax-exempt-enum.md) | Optional | Sales Tax Exempt. Allowed values: “1”, “0”. |
| `customerVatRegistration` | `string \| null \| undefined` | Optional | Customer VAT Registration<br>**Constraints**: *Maximum Length*: `13` |
| `merchantVatRegistration` | `string \| null \| undefined` | Optional | Merchant VAT Registration<br>**Constraints**: *Maximum Length*: `20` |
| `orderDate` | `string \| null \| undefined` | Optional | Order Date<br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `summaryCommodityCode` | `string \| null \| undefined` | Optional | Summary Commodity Code<br>**Constraints**: *Maximum Length*: `4` |
| `taxRate` | `number \| null \| undefined` | Optional | Tax rate used to calculate the sales tax amount, can accept 2 decimal places.<br>**Constraints**: `<= 999999` |
| `uniqueVatRefNumber` | `string \| null \| undefined` | Optional | Unique VAT Reference Number<br>**Constraints**: *Maximum Length*: `15` |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Array of line items in transaction |

## Example (as JSON)

```json
{
  "destination_country_code": "840",
  "duty_amount": 0,
  "freight_amount": 0,
  "national_tax": 2,
  "sales_tax": 200,
  "shipfrom_zip_code": "AZ12345",
  "shipto_zip_code": "MI48335",
  "tax_amount": 0,
  "tax_exempt": "0",
  "customer_vat_registration": "12345678",
  "merchant_vat_registration": "123456",
  "order_date": "171006",
  "summary_commodity_code": "C1K2",
  "tax_rate": 0,
  "unique_vat_ref_number": "vat1234"
}
```

