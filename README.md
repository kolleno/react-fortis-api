
# Getting Started with Fortis API

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=FortisAPI&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=FortisAPI&workspaceName=fortis-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Fortis APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add FortisApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=FortisAPI&workspaceName=fortis-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install FortisApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `userIdCredentials` | [`UserIdCredentials`](doc/auth/custom-header-signature.md) | The credential object for userId |
| `userApiKeyCredentials` | [`UserApiKeyCredentials`](doc/auth/custom-header-signature-1.md) | The credential object for userApiKey |
| `developerIdCredentials` | [`DeveloperIdCredentials`](doc/auth/custom-header-signature-2.md) | The credential object for developerId |
| `accessTokenCredentials` | [`AccessTokenCredentials`](doc/auth/custom-header-signature-3.md) | The credential object for accessToken |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

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

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| sandbox | **Default** |
| production | - |

## Authorization

This API uses the following authentication schemes.

* [`user-id (Custom Header Signature)`](doc/auth/custom-header-signature.md)
* [`user-api-key (Custom Header Signature)`](doc/auth/custom-header-signature-1.md)
* [`developer-id (Custom Header Signature)`](doc/auth/custom-header-signature-2.md)
* [`access-token (Custom Header Signature)`](doc/auth/custom-header-signature-3.md)

## List of APIs

* [Async Processing](doc/controllers/async-processing.md)
* [Declined Recurring Transactions](doc/controllers/declined-recurring-transactions.md)
* [Device Terms](doc/controllers/device-terms.md)
* [Full Boarding](doc/controllers/full-boarding.md)
* [3 DS Authentication](doc/controllers/3-ds-authentication.md)
* [3 DS Transactions](doc/controllers/3-ds-transactions.md)
* [On Boarding](doc/controllers/on-boarding.md)
* [Payment Card Reader Token](doc/controllers/payment-card-reader-token.md)
* [Quick Invoices](doc/controllers/quick-invoices.md)
* [Transaction ACH Retries](doc/controllers/transaction-ach-retries.md)
* [Transactions-ACH](doc/controllers/transactions-ach.md)
* [Transactions-Cash](doc/controllers/transactions-cash.md)
* [Transactions-Credit Card](doc/controllers/transactions-credit-card.md)
* [Transactions-EBT Card](doc/controllers/transactions-ebt-card.md)
* [Transactions-Read](doc/controllers/transactions-read.md)
* [Level 3 Data](doc/controllers/level-3-data.md)
* [Transactions-Updates](doc/controllers/transactions-updates.md)
* [User Verifications](doc/controllers/user-verifications.md)
* [Apple Pay Validate Merchant](doc/controllers/apple-pay-validate-merchant.md)
* [Merchant Details](doc/controllers/merchant-details.md)
* [Batches](doc/controllers/batches.md)
* [Contacts](doc/controllers/contacts.md)
* [Elements](doc/controllers/elements.md)
* [Locations](doc/controllers/locations.md)
* [Paylinks](doc/controllers/paylinks.md)
* [Recurring](doc/controllers/recurring.md)
* [Signatures](doc/controllers/signatures.md)
* [Tags](doc/controllers/tags.md)
* [Terminals](doc/controllers/terminals.md)
* [Tickets](doc/controllers/tickets.md)
* [Tokens](doc/controllers/tokens.md)
* [Users](doc/controllers/users.md)
* [Webhooks](doc/controllers/webhooks.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

