
# Shipping Address

Cardholder shipping address object

## Structure

`ShippingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The city of the Cardholder shipping address associated with the card used for this purchase.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `50` |
| `countryCode` | `string \| undefined` | Optional | The ISO 3166-1 alpha-3 country of the Cardholder shipping address associated with the card used for this purchase.<br><br>The field is required if Cardholder Shipping Address State is present and unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `3` |
| `addressLine1` | `string \| undefined` | Optional | First line of the street address or equivalent local portion of the Cardholder shipping address associated with the card use for this purchase.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `50` |
| `addressLine2` | `string \| undefined` | Optional | Second line of the street address or equivalent local portion of the Cardholder shipping address associated with the card use for this purchase.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `50` |
| `addressLine3` | `string \| undefined` | Optional | Third line of the street address or equivalent local portion of the Cardholder shipping address associated with the card use for this purchase.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `50` |
| `postalCode` | `string \| undefined` | Optional | ZIP or other postal code of the Cardholder shipping address associated with the card used for this purchase.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `16` |
| `state` | `string \| undefined` | Optional | The state or province of the Cardholder shipping address associated with the card used for this purchase. The value should be the country subdivision code defined in ISO 3166-2.<br><br>This field is required unless State is not applicable for this country and unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `3` |

## Example (as JSON)

```json
{
  "city": "Plano",
  "country_code": "USA",
  "address_line_1": "6111 W Plano Parkway",
  "address_line_2": "Suite 2700",
  "postal_code": "75093",
  "state": "TX",
  "address_line_3": "address_line_36"
}
```

