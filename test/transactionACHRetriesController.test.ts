/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  AccountTypeEnum,
  AchSecCode1Enum,
  AvsEnum,
  CountryEnum,
  EbtTypeEnum,
  EntryModeIdEnum,
  IiasIndEnum,
  OrderEnum,
  PaymentMethod9Enum,
  ProcessMethodEnum,
  ReasonCodeId1Enum,
  ReportExportTypeEnum,
  ResponseTransactionAchRetry,
  ResponseTransactionAchRetrysCollection,
  StatusCode17Enum,
  StatusCodeEnum,
  TransactionACHRetriesController,
  TrxSourceCodeEnum,
  TrxSourceIdEnum,
  Type2Enum,
  Type3Enum,
  Type4Enum,
  Type55Enum,
  Type94Enum,
  Type98Enum,
  UserTypeCodeEnum,
} from '../src';
import { testClient } from './testClient';
import {
  expectHeadersToMatch,
  expectMatchingWithOptions,
  makeApiCall,
} from './testHelper';

describe('TransactionACHRetriesController', () => {
  let controller : TransactionACHRetriesController;

  beforeAll(() => {
    controller = new TransactionACHRetriesController(testClient);
  });

  it('should Test List all Transaction ACH Retries related', async () => {
    const response = await makeApiCall(
      () => controller.listAllTransactionACHRetriesRelated(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: ResponseTransactionAchRetrysCollection = {
      type: Type98Enum.TransactionAchRetrysCollection,
      list: [
        {
          rejectedTransactionId: '11e95f8ec39de8fbdb0a4f1a',
          id: '11e95f8ec39de8fbdb0a4f1a',
          retryTransactionId: '11e95f8ec39de8fbdb0a4f1a',
          returnFeeTransactionId: '11e95f8ec39de8fbdb0a4f1a',
          createdTs: 1422040992,
          createdUserId: '11e95f8ec39de8fbdb0a4f1a',
          rejectedTransaction: {
            additionalAmounts: [
              {
                type: Type55Enum.Cashback,
                amount: 10,
                accountType: AccountTypeEnum.Credit,
                currency: 840,
              }
            ],
            billingAddress: {
              city: 'Novi',
              state: 'Michigan',
              postalCode: '48375',
              phone: '3339998822',
              country: 'USA',
            },
            checkinDate: '2021-12-01',
            checkoutDate: '2021-12-01',
            clerkNumber: 'AE1234',
            contactId: '11e95f8ec39de8fbdb0a4f1a',
            customData: {  },
            customerId: 'customerid',
            description: 'some description',
            identityVerification: {
              dlState: 'MI',
              dlNumber: '1235567',
              dobYear: '1980',
            },
            iiasInd: IiasIndEnum.Enum1,
            imageFront: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
            imageBack: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
            installment: true,
            installmentNumber: 1,
            installmentCount: 1,
            locationApiId: 'location-api-id-florida-2',
            locationId: '11e95f8ec39de8fbdb0a4f1a',
            productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
            advanceDeposit: false,
            noShow: false,
            notificationEmailAddress: 'johnsmith@smiths.com',
            orderNumber: '433659378839',
            poNumber: '555555553123',
            quickInvoiceId: '11e95f8ec39de8fbdb0a4f1a',
            recurring: false,
            recurringNumber: 1,
            roomNum: '303',
            roomRate: 95,
            saveAccount: false,
            saveAccountTitle: 'John Account',
            subtotalAmount: 599,
            surchargeAmount: 100,
            tags: [
              'Walk-in Customer'
            ],
            tax: 0,
            tipAmount: 0,
            transactionAmount: 0,
            secondaryAmount: 0,
            transactionApiId: 'transaction-payment-abcd123',
            transactionC1: 'custom-data-1',
            transactionC2: 'custom-data-2',
            transactionC3: 'custom-data-3',
            bankFundedOnlyOverride: false,
            allowPartialAuthorizationOverride: false,
            autoDeclineCvvOverride: false,
            autoDeclineStreetOverride: false,
            autoDeclineZipOverride: false,
            ebtType: EbtTypeEnum.FoodStamp,
            id: '11e95f8ec39de8fbdb0a4f1a',
            createdTs: 1422040992,
            modifiedTs: 1422040992,
            terminalId: '11e95f8ec39de8fbdb0a4f1a',
            accountHolderName: 'smith',
            accountType: 'checking',
            tokenId: '11e95f8ec39de8fbdb0a4f1a',
            achIdentifier: 'P',
            achSecCode: AchSecCode1Enum.C21,
            authAmount: 1,
            authCode: 'BR349K',
            avs: AvsEnum.BAD,
            avsEnhanced: 'N',
            cardholderPresent: true,
            cardPresent: true,
            checkNumber: '8520748520963',
            customerIp: '192.168.0.10',
            cvvResponse: 'N',
            entryModeId: EntryModeIdEnum.C,
            emvReceiptData: {
              aID: 'a0000000042203',
              aPPLAB: 'US Maestro',
              aPPN: 'US Maestro',
              cVM: 'Pin Verified',
              tSI: 'e800',
              tVR: '0800008000',
            },
            firstSix: '545454',
            lastFour: '5454',
            paymentMethod: PaymentMethod9Enum.Cc,
            terminalSerialNumber: '1234567890',
            transactionSettlementStatus: 'transaction_settlement_status0',
            chargeBackDate: '2021-12-01',
            isRecurring: true,
            notificationEmailSent: true,
            par: 'Q1J4Z28RKA1EBL470G9XYG90R5D3E',
            reasonCodeId: ReasonCodeId1Enum.Enum1000,
            recurringId: '11e95f8ec39de8fbdb0a4f1a',
            settleDate: '2021-12-01',
            statusCode: StatusCode17Enum.Enum101,
            transactionBatchId: '11e95f8ec39de8fbdb0a4f1a',
            verbiage: 'APPROVED',
            voidDate: '2021-12-01',
            batch: '2',
            termsAgree: true,
            responseMessage: 'response_message2',
            returnDate: '2021-12-01',
            trxSourceId: TrxSourceIdEnum.Enum8,
            routingNumber: '051904524',
            trxSourceCode: TrxSourceCodeEnum.Enum8,
            paylinkId: '11e95f8ec39de8fbdb0a4f1a',
            isAccountvault: true,
            createdUserId: '11e95f8ec39de8fbdb0a4f1a',
            modifiedUserId: '11e95f8ec39de8fbdb0a4f1a',
            effectiveDate: '2021-12-01',
            isToken: true,
            installmentTotal: 1,
            installmentCounter: 1,
            accountVaultId: '11e95f8ec39de8fbdb0a4f1a',
            hostedPaymentPageId: '11e95f8ec39de8fbdb0a4f1a',
          },
          retryTransaction: {
            additionalAmounts: [
              {
                type: Type55Enum.Cashback,
                amount: 10,
                accountType: AccountTypeEnum.Credit,
                currency: 840,
              }
            ],
            billingAddress: {
              city: 'Novi',
              state: 'Michigan',
              postalCode: '48375',
              phone: '3339998822',
              country: 'USA',
            },
            checkinDate: '2021-12-01',
            checkoutDate: '2021-12-01',
            clerkNumber: 'AE1234',
            contactId: '11e95f8ec39de8fbdb0a4f1a',
            customData: {  },
            customerId: 'customerid',
            description: 'some description',
            identityVerification: {
              dlState: 'MI',
              dlNumber: '1235567',
              dobYear: '1980',
            },
            iiasInd: IiasIndEnum.Enum1,
            imageFront: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
            imageBack: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
            installment: true,
            installmentNumber: 1,
            installmentCount: 1,
            locationApiId: 'location-api-id-florida-2',
            locationId: '11e95f8ec39de8fbdb0a4f1a',
            productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
            advanceDeposit: false,
            noShow: false,
            notificationEmailAddress: 'johnsmith@smiths.com',
            orderNumber: '433659378839',
            poNumber: '555555553123',
            quickInvoiceId: '11e95f8ec39de8fbdb0a4f1a',
            recurring: false,
            recurringNumber: 1,
            roomNum: '303',
            roomRate: 95,
            saveAccount: false,
            saveAccountTitle: 'John Account',
            subtotalAmount: 599,
            surchargeAmount: 100,
            tags: [
              'Walk-in Customer'
            ],
            tax: 0,
            tipAmount: 0,
            transactionAmount: 0,
            secondaryAmount: 0,
            transactionApiId: 'transaction-payment-abcd123',
            transactionC1: 'custom-data-1',
            transactionC2: 'custom-data-2',
            transactionC3: 'custom-data-3',
            bankFundedOnlyOverride: false,
            allowPartialAuthorizationOverride: false,
            autoDeclineCvvOverride: false,
            autoDeclineStreetOverride: false,
            autoDeclineZipOverride: false,
            ebtType: EbtTypeEnum.FoodStamp,
            id: '11e95f8ec39de8fbdb0a4f1a',
            createdTs: 1422040992,
            modifiedTs: 1422040992,
            terminalId: '11e95f8ec39de8fbdb0a4f1a',
            accountHolderName: 'smith',
            accountType: 'checking',
            tokenId: '11e95f8ec39de8fbdb0a4f1a',
            achIdentifier: 'P',
            achSecCode: AchSecCode1Enum.C21,
            authAmount: 1,
            authCode: 'BR349K',
            avs: AvsEnum.BAD,
            avsEnhanced: 'N',
            cardholderPresent: true,
            cardPresent: true,
            checkNumber: '8520748520963',
            customerIp: '192.168.0.10',
            cvvResponse: 'N',
            entryModeId: EntryModeIdEnum.C,
            emvReceiptData: {
              aID: 'a0000000042203',
              aPPLAB: 'US Maestro',
              aPPN: 'US Maestro',
              cVM: 'Pin Verified',
              tSI: 'e800',
              tVR: '0800008000',
            },
            firstSix: '545454',
            lastFour: '5454',
            paymentMethod: PaymentMethod9Enum.Cc,
            terminalSerialNumber: '1234567890',
            transactionSettlementStatus: 'transaction_settlement_status0',
            chargeBackDate: '2021-12-01',
            isRecurring: true,
            notificationEmailSent: true,
            par: 'Q1J4Z28RKA1EBL470G9XYG90R5D3E',
            reasonCodeId: ReasonCodeId1Enum.Enum1000,
            recurringId: '11e95f8ec39de8fbdb0a4f1a',
            settleDate: '2021-12-01',
            statusCode: StatusCode17Enum.Enum101,
            transactionBatchId: '11e95f8ec39de8fbdb0a4f1a',
            verbiage: 'APPROVED',
            voidDate: '2021-12-01',
            batch: '2',
            termsAgree: true,
            responseMessage: 'response_message2',
            returnDate: '2021-12-01',
            trxSourceId: TrxSourceIdEnum.Enum8,
            routingNumber: '051904524',
            trxSourceCode: TrxSourceCodeEnum.Enum8,
            paylinkId: '11e95f8ec39de8fbdb0a4f1a',
            isAccountvault: true,
            createdUserId: '11e95f8ec39de8fbdb0a4f1a',
            modifiedUserId: '11e95f8ec39de8fbdb0a4f1a',
            effectiveDate: '2021-12-01',
            isToken: true,
            installmentTotal: 1,
            installmentCounter: 1,
            accountVaultId: '11e95f8ec39de8fbdb0a4f1a',
            hostedPaymentPageId: '11e95f8ec39de8fbdb0a4f1a',
          },
          returnFeeTransaction: {
            additionalAmounts: [
              {
                type: Type55Enum.Cashback,
                amount: 10,
                accountType: AccountTypeEnum.Credit,
                currency: 840,
              }
            ],
            billingAddress: {
              city: 'Novi',
              state: 'Michigan',
              postalCode: '48375',
              phone: '3339998822',
              country: 'USA',
            },
            checkinDate: '2021-12-01',
            checkoutDate: '2021-12-01',
            clerkNumber: 'AE1234',
            contactId: '11e95f8ec39de8fbdb0a4f1a',
            customData: {  },
            customerId: 'customerid',
            description: 'some description',
            identityVerification: {
              dlState: 'MI',
              dlNumber: '1235567',
              dobYear: '1980',
            },
            iiasInd: IiasIndEnum.Enum1,
            imageFront: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
            imageBack: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
            installment: true,
            installmentNumber: 1,
            installmentCount: 1,
            locationApiId: 'location-api-id-florida-2',
            locationId: '11e95f8ec39de8fbdb0a4f1a',
            productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
            advanceDeposit: false,
            noShow: false,
            notificationEmailAddress: 'johnsmith@smiths.com',
            orderNumber: '433659378839',
            poNumber: '555555553123',
            quickInvoiceId: '11e95f8ec39de8fbdb0a4f1a',
            recurring: false,
            recurringNumber: 1,
            roomNum: '303',
            roomRate: 95,
            saveAccount: false,
            saveAccountTitle: 'John Account',
            subtotalAmount: 599,
            surchargeAmount: 100,
            tags: [
              'Walk-in Customer'
            ],
            tax: 0,
            tipAmount: 0,
            transactionAmount: 0,
            secondaryAmount: 0,
            transactionApiId: 'transaction-payment-abcd123',
            transactionC1: 'custom-data-1',
            transactionC2: 'custom-data-2',
            transactionC3: 'custom-data-3',
            bankFundedOnlyOverride: false,
            allowPartialAuthorizationOverride: false,
            autoDeclineCvvOverride: false,
            autoDeclineStreetOverride: false,
            autoDeclineZipOverride: false,
            ebtType: EbtTypeEnum.FoodStamp,
            id: '11e95f8ec39de8fbdb0a4f1a',
            createdTs: 1422040992,
            modifiedTs: 1422040992,
            terminalId: '11e95f8ec39de8fbdb0a4f1a',
            accountHolderName: 'smith',
            accountType: 'checking',
            tokenId: '11e95f8ec39de8fbdb0a4f1a',
            achIdentifier: 'P',
            achSecCode: AchSecCode1Enum.C21,
            authAmount: 1,
            authCode: 'BR349K',
            avs: AvsEnum.BAD,
            avsEnhanced: 'N',
            cardholderPresent: true,
            cardPresent: true,
            checkNumber: '8520748520963',
            customerIp: '192.168.0.10',
            cvvResponse: 'N',
            entryModeId: EntryModeIdEnum.C,
            emvReceiptData: {
              aID: 'a0000000042203',
              aPPLAB: 'US Maestro',
              aPPN: 'US Maestro',
              cVM: 'Pin Verified',
              tSI: 'e800',
              tVR: '0800008000',
            },
            firstSix: '545454',
            lastFour: '5454',
            paymentMethod: PaymentMethod9Enum.Cc,
            terminalSerialNumber: '1234567890',
            transactionSettlementStatus: 'transaction_settlement_status0',
            chargeBackDate: '2021-12-01',
            isRecurring: true,
            notificationEmailSent: true,
            par: 'Q1J4Z28RKA1EBL470G9XYG90R5D3E',
            reasonCodeId: ReasonCodeId1Enum.Enum1000,
            recurringId: '11e95f8ec39de8fbdb0a4f1a',
            settleDate: '2021-12-01',
            statusCode: StatusCode17Enum.Enum101,
            transactionBatchId: '11e95f8ec39de8fbdb0a4f1a',
            verbiage: 'APPROVED',
            voidDate: '2021-12-01',
            batch: '2',
            termsAgree: true,
            responseMessage: 'response_message2',
            returnDate: '2021-12-01',
            trxSourceId: TrxSourceIdEnum.Enum8,
            routingNumber: '051904524',
            trxSourceCode: TrxSourceCodeEnum.Enum8,
            paylinkId: '11e95f8ec39de8fbdb0a4f1a',
            isAccountvault: true,
            createdUserId: '11e95f8ec39de8fbdb0a4f1a',
            modifiedUserId: '11e95f8ec39de8fbdb0a4f1a',
            effectiveDate: '2021-12-01',
            isToken: true,
            installmentTotal: 1,
            installmentCounter: 1,
            accountVaultId: '11e95f8ec39de8fbdb0a4f1a',
            hostedPaymentPageId: '11e95f8ec39de8fbdb0a4f1a',
          },
          createdUser: {
            accountNumber: '5454545454545454',
            brandingDomainUrl: '{branding_domain_url}',
            cellPhone: '3339998822',
            companyName: 'Fortis Payment Systems, LLC',
            contactId: '11e95f8ec39de8fbdb0a4f1a',
            dateOfBirth: '2021-12-01',
            domainId: '11e95f8ec39de8fbdb0a4f1a',
            email: 'email@domain.com',
            emailTrxReceipt: true,
            homePhone: '3339998822',
            firstName: 'John',
            lastName: 'Smith',
            locale: 'en-US',
            officePhone: '3339998822',
            officeExtPhone: '5',
            primaryLocationId: '11e95f8ec39de8fbdb0a4f1a',
            requiresNewPassword: 'requires_new_password2',
            termsConditionCode: '20220308',
            tz: 'America/New_York',
            uiPrefs: {
              entryPage: 'dashboard',
              pageSize: 2,
              reportExportType: ReportExportTypeEnum.Csv,
              processMethod: ProcessMethodEnum.VirtualTerminal,
              defaultTerminal: '11e95f8ec39de8fbdb0a4f1a',
            },
            username: '{user_name}',
            userApiKey: '234bas8dfn8238f923w2',
            userHashKey: 'user_hash_key6',
            userTypeCode: UserTypeCodeEnum.Enum100,
            password: 'password4',
            zip: '48375',
            locationId: '11e95f8ec39de8fbdb0a4f1a',
            statusCode: StatusCodeEnum.Enum1,
            apiOnly: false,
            isInvitation: false,
            address: {
              city: 'Novi',
              state: 'MI',
              postalCode: '48375',
              country: CountryEnum.US,
            },
            id: '11e95f8ec39de8fbdb0a4f1a',
            status: true,
            loginAttempts: 0,
            lastLoginTs: 1422040992,
            createdTs: 1422040992,
            modifiedTs: 1422040992,
            createdUserId: '11e95f8ec39de8fbdb0a4f1a',
            termsAcceptedTs: 1422040992,
            termsAgreeIp: '192.168.0.10',
            currentDateTime: '2019-03-11T10:38:26-0700',
            currentLogin: 1422040992,
            logApiResponseBodyTs: 1422040992,
          },
          changelogs: [
            {
              id: '11e95f8ec39de8fbdb0a4f1a',
              createdTs: 1422040992,
              action: 'CREATE',
              model: 'TransactionRequest',
              modelId: '11ec829598f0d4008be9aba4',
              userId: '11e95f8ec39de8fbdb0a4f1a',
              changelogDetails: [
                {
                  id: '11e95f8ec39de8fbdb0a4f1a',
                  changelogId: '11e95f8ec39de8fbdb0a4f1a',
                  field: 'next_run_ts',
                  oldValue: '1643616000',
                }
              ],
              user: {
                id: '11e95f8ec39de8fbdb0a4f1a',
                username: 'email@domain.com',
                firstName: 'Bob',
                lastName: 'Fairview',
              },
            }
          ],
        }
      ],
      links: {
        type: Type2Enum.Links,
        first: '/v1/endpoint?page[size]=10&page[number]=1',
        previous: '/v1/endpoint?page[size]=10&page[number]=5',
        next: '/v1/endpoint?page[size]=10&page[number]=7',
        last: '/v1/endpoint?page[size]=10&page[number]=42',
      },
      pagination: {
        type: Type3Enum.Pagination,
        totalCount: 423,
        pageCount: 42,
        pageNumber: 6,
        pageSize: 10,
      },
      sort: {
        type: Type4Enum.Sorting,
        fields: [
          {
            field: 'last_name',
            order: OrderEnum.Asc,
          }
        ],
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });

  it('should Test View single Transaction ACH Retry record', async () => {
    const transactionAchRetryId = '11e95f8ec39de8fbdb0a4f1a';

    const response = await makeApiCall(
      () => controller.viewSingleTransactionACHRetryRecord(
        transactionAchRetryId,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: ResponseTransactionAchRetry = {
      type: Type94Enum.TransactionAchRetry,
      data: {
        rejectedTransactionId: '11e95f8ec39de8fbdb0a4f1a',
        id: '11e95f8ec39de8fbdb0a4f1a',
        retryTransactionId: '11e95f8ec39de8fbdb0a4f1a',
        returnFeeTransactionId: '11e95f8ec39de8fbdb0a4f1a',
        createdTs: 1422040992,
        createdUserId: '11e95f8ec39de8fbdb0a4f1a',
        rejectedTransaction: {
          additionalAmounts: [
            {
              type: Type55Enum.Cashback,
              amount: 10,
              accountType: AccountTypeEnum.Credit,
              currency: 840,
            }
          ],
          billingAddress: {
            city: 'Novi',
            state: 'Michigan',
            postalCode: '48375',
            phone: '3339998822',
            country: 'USA',
          },
          checkinDate: '2021-12-01',
          checkoutDate: '2021-12-01',
          clerkNumber: 'AE1234',
          contactId: '11e95f8ec39de8fbdb0a4f1a',
          customData: {  },
          customerId: 'customerid',
          description: 'some description',
          identityVerification: {
            dlState: 'MI',
            dlNumber: '1235567',
            dobYear: '1980',
          },
          iiasInd: IiasIndEnum.Enum1,
          imageFront: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
          imageBack: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
          installment: true,
          installmentNumber: 1,
          installmentCount: 1,
          locationApiId: 'location-api-id-florida-2',
          locationId: '11e95f8ec39de8fbdb0a4f1a',
          productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
          advanceDeposit: false,
          noShow: false,
          notificationEmailAddress: 'johnsmith@smiths.com',
          orderNumber: '433659378839',
          poNumber: '555555553123',
          quickInvoiceId: '11e95f8ec39de8fbdb0a4f1a',
          recurring: false,
          recurringNumber: 1,
          roomNum: '303',
          roomRate: 95,
          saveAccount: false,
          saveAccountTitle: 'John Account',
          subtotalAmount: 599,
          surchargeAmount: 100,
          tags: [
            'Walk-in Customer'
          ],
          tax: 0,
          tipAmount: 0,
          transactionAmount: 0,
          secondaryAmount: 0,
          transactionApiId: 'transaction-payment-abcd123',
          transactionC1: 'custom-data-1',
          transactionC2: 'custom-data-2',
          transactionC3: 'custom-data-3',
          bankFundedOnlyOverride: false,
          allowPartialAuthorizationOverride: false,
          autoDeclineCvvOverride: false,
          autoDeclineStreetOverride: false,
          autoDeclineZipOverride: false,
          ebtType: EbtTypeEnum.FoodStamp,
          id: '11e95f8ec39de8fbdb0a4f1a',
          createdTs: 1422040992,
          modifiedTs: 1422040992,
          terminalId: '11e95f8ec39de8fbdb0a4f1a',
          accountHolderName: 'smith',
          accountType: 'checking',
          tokenId: '11e95f8ec39de8fbdb0a4f1a',
          achIdentifier: 'P',
          achSecCode: AchSecCode1Enum.C21,
          authAmount: 1,
          authCode: 'BR349K',
          avs: AvsEnum.BAD,
          avsEnhanced: 'N',
          cardholderPresent: true,
          cardPresent: true,
          checkNumber: '8520748520963',
          customerIp: '192.168.0.10',
          cvvResponse: 'N',
          entryModeId: EntryModeIdEnum.C,
          emvReceiptData: {
            aID: 'a0000000042203',
            aPPLAB: 'US Maestro',
            aPPN: 'US Maestro',
            cVM: 'Pin Verified',
            tSI: 'e800',
            tVR: '0800008000',
          },
          firstSix: '545454',
          lastFour: '5454',
          paymentMethod: PaymentMethod9Enum.Cc,
          terminalSerialNumber: '1234567890',
          transactionSettlementStatus: 'transaction_settlement_status0',
          chargeBackDate: '2021-12-01',
          isRecurring: true,
          notificationEmailSent: true,
          par: 'Q1J4Z28RKA1EBL470G9XYG90R5D3E',
          reasonCodeId: ReasonCodeId1Enum.Enum1000,
          recurringId: '11e95f8ec39de8fbdb0a4f1a',
          settleDate: '2021-12-01',
          statusCode: StatusCode17Enum.Enum101,
          transactionBatchId: '11e95f8ec39de8fbdb0a4f1a',
          verbiage: 'APPROVED',
          voidDate: '2021-12-01',
          batch: '2',
          termsAgree: true,
          responseMessage: 'response_message2',
          returnDate: '2021-12-01',
          trxSourceId: TrxSourceIdEnum.Enum8,
          routingNumber: '051904524',
          trxSourceCode: TrxSourceCodeEnum.Enum8,
          paylinkId: '11e95f8ec39de8fbdb0a4f1a',
          isAccountvault: true,
          createdUserId: '11e95f8ec39de8fbdb0a4f1a',
          modifiedUserId: '11e95f8ec39de8fbdb0a4f1a',
          effectiveDate: '2021-12-01',
          isToken: true,
          installmentTotal: 1,
          installmentCounter: 1,
          accountVaultId: '11e95f8ec39de8fbdb0a4f1a',
          hostedPaymentPageId: '11e95f8ec39de8fbdb0a4f1a',
        },
        retryTransaction: {
          additionalAmounts: [
            {
              type: Type55Enum.Cashback,
              amount: 10,
              accountType: AccountTypeEnum.Credit,
              currency: 840,
            }
          ],
          billingAddress: {
            city: 'Novi',
            state: 'Michigan',
            postalCode: '48375',
            phone: '3339998822',
            country: 'USA',
          },
          checkinDate: '2021-12-01',
          checkoutDate: '2021-12-01',
          clerkNumber: 'AE1234',
          contactId: '11e95f8ec39de8fbdb0a4f1a',
          customData: {  },
          customerId: 'customerid',
          description: 'some description',
          identityVerification: {
            dlState: 'MI',
            dlNumber: '1235567',
            dobYear: '1980',
          },
          iiasInd: IiasIndEnum.Enum1,
          imageFront: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
          imageBack: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
          installment: true,
          installmentNumber: 1,
          installmentCount: 1,
          locationApiId: 'location-api-id-florida-2',
          locationId: '11e95f8ec39de8fbdb0a4f1a',
          productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
          advanceDeposit: false,
          noShow: false,
          notificationEmailAddress: 'johnsmith@smiths.com',
          orderNumber: '433659378839',
          poNumber: '555555553123',
          quickInvoiceId: '11e95f8ec39de8fbdb0a4f1a',
          recurring: false,
          recurringNumber: 1,
          roomNum: '303',
          roomRate: 95,
          saveAccount: false,
          saveAccountTitle: 'John Account',
          subtotalAmount: 599,
          surchargeAmount: 100,
          tags: [
            'Walk-in Customer'
          ],
          tax: 0,
          tipAmount: 0,
          transactionAmount: 0,
          secondaryAmount: 0,
          transactionApiId: 'transaction-payment-abcd123',
          transactionC1: 'custom-data-1',
          transactionC2: 'custom-data-2',
          transactionC3: 'custom-data-3',
          bankFundedOnlyOverride: false,
          allowPartialAuthorizationOverride: false,
          autoDeclineCvvOverride: false,
          autoDeclineStreetOverride: false,
          autoDeclineZipOverride: false,
          ebtType: EbtTypeEnum.FoodStamp,
          id: '11e95f8ec39de8fbdb0a4f1a',
          createdTs: 1422040992,
          modifiedTs: 1422040992,
          terminalId: '11e95f8ec39de8fbdb0a4f1a',
          accountHolderName: 'smith',
          accountType: 'checking',
          tokenId: '11e95f8ec39de8fbdb0a4f1a',
          achIdentifier: 'P',
          achSecCode: AchSecCode1Enum.C21,
          authAmount: 1,
          authCode: 'BR349K',
          avs: AvsEnum.BAD,
          avsEnhanced: 'N',
          cardholderPresent: true,
          cardPresent: true,
          checkNumber: '8520748520963',
          customerIp: '192.168.0.10',
          cvvResponse: 'N',
          entryModeId: EntryModeIdEnum.C,
          emvReceiptData: {
            aID: 'a0000000042203',
            aPPLAB: 'US Maestro',
            aPPN: 'US Maestro',
            cVM: 'Pin Verified',
            tSI: 'e800',
            tVR: '0800008000',
          },
          firstSix: '545454',
          lastFour: '5454',
          paymentMethod: PaymentMethod9Enum.Cc,
          terminalSerialNumber: '1234567890',
          transactionSettlementStatus: 'transaction_settlement_status0',
          chargeBackDate: '2021-12-01',
          isRecurring: true,
          notificationEmailSent: true,
          par: 'Q1J4Z28RKA1EBL470G9XYG90R5D3E',
          reasonCodeId: ReasonCodeId1Enum.Enum1000,
          recurringId: '11e95f8ec39de8fbdb0a4f1a',
          settleDate: '2021-12-01',
          statusCode: StatusCode17Enum.Enum101,
          transactionBatchId: '11e95f8ec39de8fbdb0a4f1a',
          verbiage: 'APPROVED',
          voidDate: '2021-12-01',
          batch: '2',
          termsAgree: true,
          responseMessage: 'response_message2',
          returnDate: '2021-12-01',
          trxSourceId: TrxSourceIdEnum.Enum8,
          routingNumber: '051904524',
          trxSourceCode: TrxSourceCodeEnum.Enum8,
          paylinkId: '11e95f8ec39de8fbdb0a4f1a',
          isAccountvault: true,
          createdUserId: '11e95f8ec39de8fbdb0a4f1a',
          modifiedUserId: '11e95f8ec39de8fbdb0a4f1a',
          effectiveDate: '2021-12-01',
          isToken: true,
          installmentTotal: 1,
          installmentCounter: 1,
          accountVaultId: '11e95f8ec39de8fbdb0a4f1a',
          hostedPaymentPageId: '11e95f8ec39de8fbdb0a4f1a',
        },
        returnFeeTransaction: {
          additionalAmounts: [
            {
              type: Type55Enum.Cashback,
              amount: 10,
              accountType: AccountTypeEnum.Credit,
              currency: 840,
            }
          ],
          billingAddress: {
            city: 'Novi',
            state: 'Michigan',
            postalCode: '48375',
            phone: '3339998822',
            country: 'USA',
          },
          checkinDate: '2021-12-01',
          checkoutDate: '2021-12-01',
          clerkNumber: 'AE1234',
          contactId: '11e95f8ec39de8fbdb0a4f1a',
          customData: {  },
          customerId: 'customerid',
          description: 'some description',
          identityVerification: {
            dlState: 'MI',
            dlNumber: '1235567',
            dobYear: '1980',
          },
          iiasInd: IiasIndEnum.Enum1,
          imageFront: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
          imageBack: 'U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=',
          installment: true,
          installmentNumber: 1,
          installmentCount: 1,
          locationApiId: 'location-api-id-florida-2',
          locationId: '11e95f8ec39de8fbdb0a4f1a',
          productTransactionId: '11e95f8ec39de8fbdb0a4f1a',
          advanceDeposit: false,
          noShow: false,
          notificationEmailAddress: 'johnsmith@smiths.com',
          orderNumber: '433659378839',
          poNumber: '555555553123',
          quickInvoiceId: '11e95f8ec39de8fbdb0a4f1a',
          recurring: false,
          recurringNumber: 1,
          roomNum: '303',
          roomRate: 95,
          saveAccount: false,
          saveAccountTitle: 'John Account',
          subtotalAmount: 599,
          surchargeAmount: 100,
          tags: [
            'Walk-in Customer'
          ],
          tax: 0,
          tipAmount: 0,
          transactionAmount: 0,
          secondaryAmount: 0,
          transactionApiId: 'transaction-payment-abcd123',
          transactionC1: 'custom-data-1',
          transactionC2: 'custom-data-2',
          transactionC3: 'custom-data-3',
          bankFundedOnlyOverride: false,
          allowPartialAuthorizationOverride: false,
          autoDeclineCvvOverride: false,
          autoDeclineStreetOverride: false,
          autoDeclineZipOverride: false,
          ebtType: EbtTypeEnum.FoodStamp,
          id: '11e95f8ec39de8fbdb0a4f1a',
          createdTs: 1422040992,
          modifiedTs: 1422040992,
          terminalId: '11e95f8ec39de8fbdb0a4f1a',
          accountHolderName: 'smith',
          accountType: 'checking',
          tokenId: '11e95f8ec39de8fbdb0a4f1a',
          achIdentifier: 'P',
          achSecCode: AchSecCode1Enum.C21,
          authAmount: 1,
          authCode: 'BR349K',
          avs: AvsEnum.BAD,
          avsEnhanced: 'N',
          cardholderPresent: true,
          cardPresent: true,
          checkNumber: '8520748520963',
          customerIp: '192.168.0.10',
          cvvResponse: 'N',
          entryModeId: EntryModeIdEnum.C,
          emvReceiptData: {
            aID: 'a0000000042203',
            aPPLAB: 'US Maestro',
            aPPN: 'US Maestro',
            cVM: 'Pin Verified',
            tSI: 'e800',
            tVR: '0800008000',
          },
          firstSix: '545454',
          lastFour: '5454',
          paymentMethod: PaymentMethod9Enum.Cc,
          terminalSerialNumber: '1234567890',
          transactionSettlementStatus: 'transaction_settlement_status0',
          chargeBackDate: '2021-12-01',
          isRecurring: true,
          notificationEmailSent: true,
          par: 'Q1J4Z28RKA1EBL470G9XYG90R5D3E',
          reasonCodeId: ReasonCodeId1Enum.Enum1000,
          recurringId: '11e95f8ec39de8fbdb0a4f1a',
          settleDate: '2021-12-01',
          statusCode: StatusCode17Enum.Enum101,
          transactionBatchId: '11e95f8ec39de8fbdb0a4f1a',
          verbiage: 'APPROVED',
          voidDate: '2021-12-01',
          batch: '2',
          termsAgree: true,
          responseMessage: 'response_message2',
          returnDate: '2021-12-01',
          trxSourceId: TrxSourceIdEnum.Enum8,
          routingNumber: '051904524',
          trxSourceCode: TrxSourceCodeEnum.Enum8,
          paylinkId: '11e95f8ec39de8fbdb0a4f1a',
          isAccountvault: true,
          createdUserId: '11e95f8ec39de8fbdb0a4f1a',
          modifiedUserId: '11e95f8ec39de8fbdb0a4f1a',
          effectiveDate: '2021-12-01',
          isToken: true,
          installmentTotal: 1,
          installmentCounter: 1,
          accountVaultId: '11e95f8ec39de8fbdb0a4f1a',
          hostedPaymentPageId: '11e95f8ec39de8fbdb0a4f1a',
        },
        createdUser: {
          accountNumber: '5454545454545454',
          brandingDomainUrl: '{branding_domain_url}',
          cellPhone: '3339998822',
          companyName: 'Fortis Payment Systems, LLC',
          contactId: '11e95f8ec39de8fbdb0a4f1a',
          dateOfBirth: '2021-12-01',
          domainId: '11e95f8ec39de8fbdb0a4f1a',
          email: 'email@domain.com',
          emailTrxReceipt: true,
          homePhone: '3339998822',
          firstName: 'John',
          lastName: 'Smith',
          locale: 'en-US',
          officePhone: '3339998822',
          officeExtPhone: '5',
          primaryLocationId: '11e95f8ec39de8fbdb0a4f1a',
          requiresNewPassword: 'requires_new_password2',
          termsConditionCode: '20220308',
          tz: 'America/New_York',
          uiPrefs: {
            entryPage: 'dashboard',
            pageSize: 2,
            reportExportType: ReportExportTypeEnum.Csv,
            processMethod: ProcessMethodEnum.VirtualTerminal,
            defaultTerminal: '11e95f8ec39de8fbdb0a4f1a',
          },
          username: '{user_name}',
          userApiKey: '234bas8dfn8238f923w2',
          userHashKey: 'user_hash_key6',
          userTypeCode: UserTypeCodeEnum.Enum100,
          password: 'password4',
          zip: '48375',
          locationId: '11e95f8ec39de8fbdb0a4f1a',
          statusCode: StatusCodeEnum.Enum1,
          apiOnly: false,
          isInvitation: false,
          address: {
            city: 'Novi',
            state: 'MI',
            postalCode: '48375',
            country: CountryEnum.US,
          },
          id: '11e95f8ec39de8fbdb0a4f1a',
          status: true,
          loginAttempts: 0,
          lastLoginTs: 1422040992,
          createdTs: 1422040992,
          modifiedTs: 1422040992,
          createdUserId: '11e95f8ec39de8fbdb0a4f1a',
          termsAcceptedTs: 1422040992,
          termsAgreeIp: '192.168.0.10',
          currentDateTime: '2019-03-11T10:38:26-0700',
          currentLogin: 1422040992,
          logApiResponseBodyTs: 1422040992,
        },
        changelogs: [
          {
            id: '11e95f8ec39de8fbdb0a4f1a',
            createdTs: 1422040992,
            action: 'CREATE',
            model: 'TransactionRequest',
            modelId: '11ec829598f0d4008be9aba4',
            userId: '11e95f8ec39de8fbdb0a4f1a',
            changelogDetails: [
              {
                id: '11e95f8ec39de8fbdb0a4f1a',
                changelogId: '11e95f8ec39de8fbdb0a4f1a',
                field: 'next_run_ts',
                oldValue: '1643616000',
              }
            ],
            user: {
              id: '11e95f8ec39de8fbdb0a4f1a',
              username: 'email@domain.com',
              firstName: 'Bob',
              lastName: 'Fairview',
            },
          }
        ],
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });
});
