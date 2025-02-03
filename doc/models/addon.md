
# Addon

## Structure

`Addon`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | Title<br>**Constraints**: *Maximum Length*: `24` |
| `secret` | `string \| undefined` | Optional | Secret<br>**Constraints**: *Maximum Length*: `36` |
| `iframeUrl` | `string \| undefined` | Optional | Iframe URL<br>**Constraints**: *Maximum Length*: `512` |
| `locationSetupUrl` | `string \| null \| undefined` | Optional | Location Setup URL<br>**Constraints**: *Maximum Length*: `512` |
| `userSetupUrl` | `string \| null \| undefined` | Optional | User Setup URL<br>**Constraints**: *Maximum Length*: `512` |
| `encryptUrlParams` | `boolean \| undefined` | Optional | Encrypt URL Params |

## Example (as JSON)

```json
{
  "encrypt_url_params": true,
  "title": "title4",
  "secret": "secret4",
  "iframe_url": "iframe_url4",
  "location_setup_url": "location_setup_url0",
  "user_setup_url": "user_setup_url6"
}
```

