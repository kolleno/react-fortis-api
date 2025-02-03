
# Cardholder

Contains information for the Cardholder. This field is required unless market or regional mandate restricts sending this information.

## Structure

`Cardholder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressMatch` | [`AddressMatchEnum \| undefined`](../../doc/models/address-match-enum.md) | Optional | Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same.<br>If the field is not set and the shipping and billing addresses are the same, the 3DS Server will set the value to Y. Otherwise, the value will not be changed.<br><br>> Y - Shipping Address matches Billing Address<br>> <br>> N - Shipping Address does not match Billing Address |
| `billingAddress` | [`BillingAddress24 \| undefined`](../../doc/models/billing-address-24.md) | Optional | Cardholder billing address object |
| `email` | `string \| undefined` | Optional | The email address associated with the account that is either entered by the Cardholder, or is on file with the 3DS Requestor. This field shall meet requirements of Section 3.4 of IETF RFC 5322.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Maximum Length*: `256` |
| `homePhone` | [`HomePhone \| undefined`](../../doc/models/home-phone.md) | Optional | The home phone provided by the Cardholder. Refer to ITU-E.164 for additional information on format and length.<br><br>This field is required if available, unless market or regional mandate restricts sending this information. |
| `mobilePhone` | [`MobilePhone \| undefined`](../../doc/models/mobile-phone.md) | Optional | The mobile phone provided by the Cardholder. Refer to ITU-E.164 for additional information on format and length.<br><br>This field is required if available, unless market or regional mandate restricts sending this information. |
| `workPhone` | [`WorkPhone \| undefined`](../../doc/models/work-phone.md) | Optional | The work phone provided by the Cardholder. Refer to ITU-E.164 for additional information on format and length.<br><br>This field is required if available, unless market or regional mandate restricts sending this information. |
| `cardholderName` | `string \| undefined` | Optional | Name of the Cardholder.<br><br>This field is required unless market or regional mandate restricts sending this information.<br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `45` |
| `shippingAddress` | [`ShippingAddress \| undefined`](../../doc/models/shipping-address.md) | Optional | Cardholder shipping address object |
| `taxId` | `string \| undefined` | Optional | Tax ID is the Cardholder's tax identification.<br><br>This field is required depending on the rules provided by the Directory Server.<br>Available for supporting EMV 3DS 2.3.1 and later versions.<br>**Constraints**: *Maximum Length*: `45` |

## Example (as JSON)

```json
{
  "address_match": "N",
  "email": "fortis@example.com",
  "cardholder_name": "John Doe",
  "billing_address": {
    "city": "city2",
    "country_code": "country_code8",
    "address_line_1": "address_line_12",
    "address_line_2": "address_line_28",
    "address_line_3": "address_line_34"
  },
  "home_phone": {
    "cc": "cc8",
    "subscriber": "subscriber0"
  },
  "mobile_phone": {
    "cc": "cc8",
    "subscriber": "subscriber0"
  }
}
```

