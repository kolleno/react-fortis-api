
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `userIdCredentials` | [`UserIdCredentials`](auth/custom-header-signature.md) | The credential object for userId |
| `userApiKeyCredentials` | [`UserApiKeyCredentials`](auth/custom-header-signature-1.md) | The credential object for userApiKey |
| `developerIdCredentials` | [`DeveloperIdCredentials`](auth/custom-header-signature-2.md) | The credential object for developerId |
| `accessTokenCredentials` | [`AccessTokenCredentials`](auth/custom-header-signature-3.md) | The credential object for accessToken |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  userIdCredentials: {
    'user-id': 'user-id'
  },
  userApiKeyCredentials: {
    'user-api-key': 'user-api-key'
  },
  developerIdCredentials: {
    'developer-id': 'developer-id'
  },
  accessTokenCredentials: {
    'access-token': 'access-token'
  },
  timeout: 0,
  environment: Environment.Sandbox,
});
```

## Fortis API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| asyncProcessing | Gets AsyncProcessingController |
| batches | Gets BatchesController |
| contacts | Gets ContactsController |
| declinedRecurringTransactions | Gets DeclinedRecurringTransactionsController |
| deviceTerms | Gets DeviceTermsController |
| elements | Gets ElementsController |
| fullBoarding | Gets FullBoardingController |
| locations | Gets LocationsController |
| m3DSAuthentication | Gets M3DSAuthenticationController |
| m3DSTransactions | Gets M3DSTransactionsController |
| onBoarding | Gets OnBoardingController |
| paylinks | Gets PaylinksController |
| paymentCardReaderToken | Gets PaymentCardReaderTokenController |
| quickInvoices | Gets QuickInvoicesController |
| recurring | Gets RecurringController |
| signatures | Gets SignaturesController |
| tags | Gets TagsController |
| terminals | Gets TerminalsController |
| tickets | Gets TicketsController |
| tokens | Gets TokensController |
| transactionACHRetries | Gets TransactionACHRetriesController |
| transactionsACH | Gets TransactionsACHController |
| transactionsCash | Gets TransactionsCashController |
| transactionsCreditCard | Gets TransactionsCreditCardController |
| transactionsEBTCard | Gets TransactionsEBTCardController |
| transactionsRead | Gets TransactionsReadController |
| level3Data | Gets Level3DataController |
| transactionsUpdates | Gets TransactionsUpdatesController |
| userVerifications | Gets UserVerificationsController |
| users | Gets UsersController |
| applePayValidateMerchant | Gets ApplePayValidateMerchantController |
| merchantDetails | Gets MerchantDetailsController |
| webhooks | Gets WebhooksController |

