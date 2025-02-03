# Full Boarding

```ts
const fullBoardingController = new FullBoardingController(client);
```

## Class Name

`FullBoardingController`


# Merchant Boarding Full

This method is used to fully board a merchant to the platform. When using this method, you must provide data for each "Required" property. See the description for each of these properties for more information about their requirement criteria.

```ts
async merchantBoardingFull(
  body: V1FullboardingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResponseFullboarding>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V1FullboardingRequest`](../../doc/models/v1-fullboarding-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResponseFullboarding`](../../doc/models/response-fullboarding.md)

## Example Usage

```ts
const body: V1FullboardingRequest = {
  email: 'email@domain.com',
  dbaName: 'Discount Home Goods',
  phoneNumber: '5555551234',
  ownershipType: OwnershipTypeEnum.Llp,
  fedTaxId: '0000000000',
  averageTicket: 15,
  highTicket: 150,
  ccMonthlyVolume: 100,
  mccCode: '7629',
  businessDescription: 'Yard services.',
  swipedPercent: 0,
  keyedPercent: 0,
  ecommercePercent: 100,
  isForeignEntity: true,
  personallyGuaranteed: false,
  addresses: [
    {
      addressLine1: '121 E Main',
      city: 'Dallas',
      stateProvince: 'TX',
      postalCode: '75087',
      countryCode: 'US',
      addressType: AddressTypeEnum.Location,
      addressLine2: 'Apt 707',
    }
  ],
  owners: [
    {
      firstName: 'James',
      lastName: 'Bond',
      title: 'CEO',
      dateOfBirth: '2021-12-01',
      addressLine1: '133 S Goliad St',
      addressLine2: 'Suite 120',
      city: 'Rockwall',
      stateProvince: 'TX',
      postalCode: '75429',
      countryCode: 'US',
      ssn: '000000000',
      ownershipPercent: 100,
      phoneNumber: '9042142323',
      emailAddress: 'james@example.com',
      isController: true,
      isSigner: true,
      middleName: 'Tyler',
    }
  ],
  bankAccounts: [
    {
      accountHolderName: 'James Bond',
      routingNumber: '111111111',
      accountNumber: '1234567',
      accountType: AccountType12Enum.Checking,
      isPrimary: true,
    }
  ],
  templateId: '1234YourTemplateCode',
  clientAppId: 'ABC123',
  legalName: 'Total Home Goods, LLP',
  website: 'http://www.example.com',
  ecMonthlyVolume: 22,
  preferredLanguage: PreferredLanguageEnum.FrCA,
  signerIp: '192.168.0.10',
};

try {
  const { result, ...httpResponse } = await fullBoardingController.merchantBoardingFull(body);
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
  "type": "Fullboarding",
  "data": {
    "result": {
      "client_app_id": "ABC123",
      "dba_name": "Discount Home Goods",
      "email": "jtodd@example.com"
    },
    "status": {
      "response_code": "Received"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`Response401tokenError`](../../doc/models/response-401-token-error.md) |
| 412 | Precondition Failed | [`Response412Error`](../../doc/models/response-412-error.md) |

