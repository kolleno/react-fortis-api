
# Custom Header Signature



Documentation for accessing and setting credentials for access-token.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| access-token | `string` | Access Token | `accessToken` |



**Note:** Auth credentials can be set using `accessTokenCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  accessTokenCredentials: {
    'access-token': 'access-token'
  },
});
```


