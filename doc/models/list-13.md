
# List 13

## Structure

`List13`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationId` | `string \| undefined` | Optional | Location ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `defaultProductTransactionId` | `string \| null \| undefined` | Optional | Product Transaction ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `terminalApplicationId` | `string \| undefined` | Optional | Terminal Application ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `terminalCvmId` | `string \| null \| undefined` | Optional | Terminal CVM ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `terminalManufacturerCode` | [`TerminalManufacturerCodeEnum \| undefined`](../../doc/models/terminal-manufacturer-code-enum.md) | Optional | Terminal Manufacturer Code |
| `title` | `string \| undefined` | Optional | Terminal Name<br>**Constraints**: *Maximum Length*: `64` |
| `macAddress` | `string \| null \| undefined` | Optional | Terminal MAC Address<br>**Constraints**: *Pattern*: `^([0-9a-fA-F]{2}[:-]?){5}([0-9a-fA-F]{2})$` |
| `localIpAddress` | `string \| undefined` | Optional | Terminal Local IP Address |
| `port` | `number \| undefined` | Optional | Terminal Port<br>**Default**: `10009`<br>**Constraints**: `>= 0`, `<= 65535` |
| `serialNumber` | `string \| undefined` | Optional | Terminal Serial Number<br>**Constraints**: *Maximum Length*: `24`, *Pattern*: `^[a-zA-Z0-9]*$` |
| `terminalNumber` | `string \| undefined` | Optional | Terminal Number<br>**Constraints**: *Minimum Length*: `15`, *Maximum Length*: `15` |
| `terminalTimeouts` | [`TerminalTimeouts \| undefined`](../../doc/models/terminal-timeouts.md) | Optional | The following options outlines some configurable timeout values that can be used to customize the experience at the terminal for the cardholder.<br><br>> These timeouts are specific to Ingenico devices only.<br>> <br>> These timeouts are specific to Ingenico devices only. |
| `tipPercents` | [`TipPercents \| undefined`](../../doc/models/tip-percents.md) | Optional | A JSON of tip percents the JSON MUST contain only these three fields: percent_1, percent_2, percent_3 |
| `locationApiId` | `string \| null \| undefined` | Optional | Location Api ID<br>**Constraints**: *Maximum Length*: `64` |
| `terminalApiId` | `string \| null \| undefined` | Optional | Terminal Api ID<br>**Constraints**: *Maximum Length*: `64` |
| `headerLine1` | `string \| null \| undefined` | Optional | Header Line 1<br>**Constraints**: *Maximum Length*: `32` |
| `headerLine2` | `string \| null \| undefined` | Optional | Header Line 2<br>**Constraints**: *Maximum Length*: `32` |
| `headerLine3` | `string \| null \| undefined` | Optional | Header Line 3<br>**Constraints**: *Maximum Length*: `32` |
| `headerLine4` | `string \| null \| undefined` | Optional | Header Line 4<br>**Constraints**: *Maximum Length*: `32` |
| `headerLine5` | `string \| null \| undefined` | Optional | Header Line 5<br>**Constraints**: *Maximum Length*: `32` |
| `trailerLine1` | `string \| null \| undefined` | Optional | Trailer Line 1<br>**Constraints**: *Maximum Length*: `32` |
| `trailerLine2` | `string \| null \| undefined` | Optional | Trailer Line 2<br>**Constraints**: *Maximum Length*: `32` |
| `trailerLine3` | `string \| null \| undefined` | Optional | Trailer Line 3<br>**Constraints**: *Maximum Length*: `32` |
| `trailerLine4` | `string \| null \| undefined` | Optional | Trailer Line 4<br>**Constraints**: *Maximum Length*: `32` |
| `trailerLine5` | `string \| null \| undefined` | Optional | Trailer Line 5<br>**Constraints**: *Maximum Length*: `32` |
| `defaultCheckin` | `string \| null \| undefined` | Optional | Default Checkin<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `defaultCheckout` | `string \| null \| undefined` | Optional | Default Checkout<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[\d]{4}-[\d]{2}-[\d]{2}$` |
| `defaultRoomRate` | `number \| null \| undefined` | Optional | Default Room Rate<br>**Constraints**: `>= 0`, `<= 100` |
| `defaultRoomNumber` | `string \| null \| undefined` | Optional | Default Room Number<br>**Constraints**: *Maximum Length*: `12` |
| `debit` | `boolean \| undefined` | Optional | Debit |
| `emv` | `boolean \| undefined` | Optional | EMV |
| `cashbackEnable` | `boolean \| undefined` | Optional | Cashback Enable |
| `printEnable` | `boolean \| undefined` | Optional | Print Enable |
| `sigCaptureEnable` | `boolean \| undefined` | Optional | Sig Capture Enable |
| `isProvisioned` | `boolean \| undefined` | Optional | Is Provisioned |
| `tipEnable` | `boolean \| undefined` | Optional | Tip Enable |
| `validatedDecryption` | `boolean \| undefined` | Optional | Validated Decryption |
| `communicationType` | [`CommunicationTypeEnum \| null \| undefined`](../../doc/models/communication-type-enum.md) | Optional | Communication Type |
| `active` | `boolean \| undefined` | Optional | Active |
| `id` | `string \| undefined` | Optional | Terminal ID<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `createdTs` | `number \| undefined` | Optional | Created Time Stamp |
| `modifiedTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `lastRegistrationTs` | `number \| undefined` | Optional | Modified Time Stamp |
| `createdUserId` | `string \| undefined` | Optional | User ID Created the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `modifiedUserId` | `string \| undefined` | Optional | Last User ID that updated the register<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location Information on `expand` |
| `createdUser` | [`CreatedUser \| undefined`](../../doc/models/created-user.md) | Optional | User Information on `expand` |
| `terminalApplication` | [`TerminalApplication \| undefined`](../../doc/models/terminal-application.md) | Optional | Terminal Application Information on `expand` |
| `changelogs` | [`Changelog[] \| undefined`](../../doc/models/changelog.md) | Optional | Changelog Information on `expand` |
| `terminalRouters` | [`TerminalRouter[] \| undefined`](../../doc/models/terminal-router.md) | Optional | Terminal Router Information on `expand` |
| `hasTerminalRouters` | `boolean \| undefined` | Optional | Has Terminal Router Information on `expand` |
| `terminalCvm` | [`TerminalCvm \| undefined`](../../doc/models/terminal-cvm.md) | Optional | Terminal Cvm Information on `expand` |
| `terminalManufacturer` | [`TerminalManufacturer \| undefined`](../../doc/models/terminal-manufacturer.md) | Optional | Terminal Manufacturer Information on `expand` |

## Example (as JSON)

```json
{
  "location_id": "11e95f8ec39de8fbdb0a4f1a",
  "default_product_transaction_id": "11e95f8ec39de8fbdb0a4f1a",
  "terminal_application_id": "11e95f8ec39de8fbdb0a4f1a",
  "terminal_cvm_id": "11e95f8ec39de8fbdb0a4f1a",
  "terminal_manufacturer_code": "1",
  "title": "My terminal",
  "mac_address": "3D:F2:C9:A6:B3:4F",
  "local_ip_address": "192.168.0.10",
  "port": 10009,
  "serial_number": "1234567890",
  "terminal_number": "973456789012367",
  "header_line_1": "line 1 sample",
  "header_line_2": "line 2 sample",
  "header_line_3": "line 3 sample",
  "header_line_4": "line 4 sample",
  "header_line_5": "line 5 sample",
  "trailer_line_1": "trailer 1 sample",
  "trailer_line_2": "trailer 2 sample",
  "trailer_line_3": "trailer 3 sample",
  "trailer_line_4": "trailer 4 sample",
  "trailer_line_5": "trailer 5 sample",
  "default_checkin": "2021-12-01",
  "default_checkout": "2021-12-01",
  "default_room_rate": 56,
  "default_room_number": "303",
  "debit": false,
  "emv": false,
  "cashback_enable": false,
  "print_enable": false,
  "sig_capture_enable": false,
  "is_provisioned": false,
  "tip_enable": false,
  "validated_decryption": false,
  "communication_type": "http",
  "active": true,
  "id": "11e95f8ec39de8fbdb0a4f1a",
  "created_ts": 1422040992,
  "modified_ts": 1422040992,
  "last_registration_ts": 1422040992,
  "created_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "modified_user_id": "11e95f8ec39de8fbdb0a4f1a",
  "has_terminal_routers": true
}
```

