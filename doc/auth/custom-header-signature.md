
# Custom Header Signature



Documentation for accessing and setting credentials for user-id.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| user-id | `string` | User ID | `userId` |



**Note:** Auth credentials can be set using `userIdCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  userIdCredentials: {
    'user-id': 'user-id'
  },
});
```


