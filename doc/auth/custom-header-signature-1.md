
# Custom Header Signature



Documentation for accessing and setting credentials for user-api-key.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| user-api-key | `string` | User API Key | `userApiKey` |



**Note:** Auth credentials can be set using `userApiKeyCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  userApiKeyCredentials: {
    'user-api-key': 'user-api-key'
  },
});
```


