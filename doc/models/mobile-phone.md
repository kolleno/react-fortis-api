
# Mobile Phone

The mobile phone provided by the Cardholder. Refer to ITU-E.164 for additional information on format and length.

This field is required if available, unless market or regional mandate restricts sending this information.

## Structure

`MobilePhone`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cc` | `string \| undefined` | Optional | Country Code of the phone<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `subscriber` | `string \| undefined` | Optional | Subscriber section of the number<br>**Constraints**: *Maximum Length*: `15` |

## Example (as JSON)

```json
{
  "cc": "1",
  "subscriber": "5555555"
}
```

