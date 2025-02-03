
# Custom Header Signature



Documentation for accessing and setting credentials for developer-id.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| developer-id | `string` | Developer ID | `developerId` |



**Note:** Auth credentials can be set using `developerIdCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  developerIdCredentials: {
    'developer-id': 'developer-id'
  },
});
```


