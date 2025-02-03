
# Line Item

## Structure

`LineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alternateTaxId` | `string \| null \| undefined` | Optional | Tax identification number of the merchant that reported the alternate tax amount.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15` |
| `debitCredit` | [`DebitCreditEnum \| null \| undefined`](../../doc/models/debit-credit-enum.md) | Optional | Indicator used to reflect debit (D) or credit (C) transaction. Allowed values: “D”, “C”. |
| `description` | `string \| undefined` | Optional | Description of the item.<br>**Constraints**: *Maximum Length*: `26` |
| `discountAmount` | `number \| null \| undefined` | Optional | Total discount amount applied against the line item total ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 99999999999900` |
| `discountRate` | `number \| null \| undefined` | Optional | Discount rate for the line item ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 9999900` |
| `productCode` | `string \| undefined` | Optional | Merchant-defined description code of the item.<br>**Constraints**: *Maximum Length*: `12` |
| `quantity` | `number \| null \| undefined` | Optional | Quantity of the item, can accept Four (4) decimal places.<br>**Constraints**: `<= 99999` |
| `taxAmount` | `number \| null \| undefined` | Optional | Amount of any value added taxes, can accept Two (2) decimal places.<br>**Constraints**: `>= 0`, `<= 99999999999` |
| `taxRate` | `number \| null \| undefined` | Optional | Tax rate used to calculate the sales tax amount, can accept 2 decimal places.<br>**Constraints**: `<= 999900` |
| `taxTypeApplied` | `string \| null \| undefined` | Optional | Type of value-added taxes that are being used (Conditional If tax amount is supplied)<br><br>> This field is only required when Merchant is directed to include by Mastercard.<br>> <br>**Constraints**: *Maximum Length*: `4` |
| `taxTypeId` | `string \| null \| undefined` | Optional | Indicates the type of tax collected in relationship to a specific tax amount (Conditional If tax amount is supplied)<br>**Constraints**: *Maximum Length*: `2` |
| `unitCode` | `string \| undefined` | Optional | Units of measurement as used in international trade. (See Codes for Units of Measurement below for unit code abbreviations)<br>**Constraints**: *Maximum Length*: `3` |
| `unitCost` | `number \| undefined` | Optional | Unit cost of the item ,Can accept Four (4) decimal places.<br>**Constraints**: `<= 99999999999900` |
| `commodityCode` | `string \| null \| undefined` | Optional | An international description code of the individual good or service being supplied.<br>**Constraints**: *Maximum Length*: `12` |
| `otherTaxAmount` | `number \| null \| undefined` | Optional | Used if city or multiple county taxes need to be broken out separately ,Can accept Two (2) decimal places.<br>**Constraints**: `<= 99999999999900` |

## Example (as JSON)

```json
{
  "alternate_tax_id": "1234",
  "debit_credit": "C",
  "description": "cool drink",
  "discount_amount": 10,
  "discount_rate": 11,
  "product_code": "coke12345678",
  "quantity": 5,
  "tax_amount": 3,
  "tax_rate": 0,
  "tax_type_applied": "22",
  "tax_type_id": "a1",
  "unit_code": "gll",
  "unit_cost": 10,
  "commodity_code": "cc123456",
  "other_tax_amount": 0
}
```

