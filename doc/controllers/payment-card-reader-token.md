# Payment Card Reader Token

```ts
const paymentCardReaderTokenController = new PaymentCardReaderTokenController(client);
```

## Class Name

`PaymentCardReaderTokenController`


# Payment Card Reader Token Request

For initializing iPhone card readers for Apple Tap to Pay transactions

```ts
async paymentCardReaderTokenRequest(
  productTransactionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponsePaymentCardReaderToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productTransactionId` | `string` | Query, Required | Product Transaction ID to be used to initialize the card reader<br>**Constraints**: *Pattern*: `^(([0-9a-fA-F\-]{24,36})\|(([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})))$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponsePaymentCardReaderToken`](../../doc/models/response-payment-card-reader-token.md)

## Example Usage

```ts
const productTransactionId = '11e95f8ec39de8fbdb0a4f1a';

try {
  const { result, ...httpResponse } = await paymentCardReaderTokenController.paymentCardReaderTokenRequest(productTransactionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "type": "PaymentCardReaderToken",
  "data": {}
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |

