/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Expand57Enum, expand57EnumSchema } from '../models/expand57Enum';
import {
  ResponseTransaction,
  responseTransactionSchema,
} from '../models/responseTransaction';
import {
  V1TransactionsAuthCompleteRequest,
  v1TransactionsAuthCompleteRequestSchema,
} from '../models/v1TransactionsAuthCompleteRequest';
import {
  V1TransactionsAuthIncrementRequest,
  v1TransactionsAuthIncrementRequestSchema,
} from '../models/v1TransactionsAuthIncrementRequest';
import {
  V1TransactionsPartialReversalRequest,
  v1TransactionsPartialReversalRequestSchema,
} from '../models/v1TransactionsPartialReversalRequest';
import {
  V1TransactionsRefundRequest,
  v1TransactionsRefundRequestSchema,
} from '../models/v1TransactionsRefundRequest';
import {
  V1TransactionsTipAdjustRequest,
  v1TransactionsTipAdjustRequestSchema,
} from '../models/v1TransactionsTipAdjustRequest';
import {
  V1TransactionsVoidRequest,
  v1TransactionsVoidRequestSchema,
} from '../models/v1TransactionsVoidRequest';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { Response401tokenError } from '../errors/response401tokenError';
import { Response412Error } from '../errors/response412Error';

export class TransactionsUpdatesController extends BaseController {
  /**
   * Void a transaction
   *
   * @param transactionId  Transaction ID
   * @param expand         Most endpoints in the API have a way to retrieve extra data related to
   *                                         the current record being retrieved. For example, if the API request is for
   *                                         the accountvaults endpoint, and the end user also needs to know which
   *                                         contact the token belongs to, this data can be returned in the
   *                                         accountvaults endpoint request.
   * @return Response from the API call
   */
  async mVoid(
    transactionId: string,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.query('expand', mapped.expand);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/void`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }

  /**
   * Void a transaction
   *
   * @param transactionId  Transaction ID
   * @param body
   * @param expand         Most endpoints in the API have a way to retrieve extra
   *                                                           data related to the current record being retrieved. For
   *                                                           example, if the API request is for the accountvaults
   *                                                           endpoint, and the end user also needs to know which
   *                                                           contact the token belongs to, this data can be returned
   *                                                           in the accountvaults endpoint request.
   * @return Response from the API call
   */
  async void1(
    transactionId: string,
    body: V1TransactionsVoidRequest,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      body: [body, v1TransactionsVoidRequestSchema],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/void`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }

  /**
   * Perform an auth complete transaction
   *
   * @param transactionId  Transaction ID
   * @param body
   * @param expand         Most endpoints in the API have a way to
   *                                                                   retrieve extra data related to the current
   *                                                                   record being retrieved. For example, if the API
   *                                                                   request is for the accountvaults endpoint, and
   *                                                                   the end user also needs to know which contact
   *                                                                   the token belongs to, this data can be returned
   *                                                                   in the accountvaults endpoint request.
   * @return Response from the API call
   */
  async authComplete(
    transactionId: string,
    body: V1TransactionsAuthCompleteRequest,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      body: [body, v1TransactionsAuthCompleteRequestSchema],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/auth-complete`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }

  /**
   * Perform an auth increment transaction
   *
   * @param transactionId  Transaction ID
   * @param body
   * @param expand         Most endpoints in the API have a way to
   *                                                                    retrieve extra data related to the current
   *                                                                    record being retrieved. For example, if the API
   *                                                                    request is for the accountvaults endpoint, and
   *                                                                    the end user also needs to know which contact
   *                                                                    the token belongs to, this data can be returned
   *                                                                    in the accountvaults endpoint request.
   * @return Response from the API call
   */
  async authIncrement(
    transactionId: string,
    body: V1TransactionsAuthIncrementRequest,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      body: [body, v1TransactionsAuthIncrementRequestSchema],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/auth-increment`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }

  /**
   * Perform a partial reversal
   *
   * @param transactionId  Transaction ID
   * @param body
   * @param expand         Most endpoints in the API have a way to
   *                                                                      retrieve extra data related to the current
   *                                                                      record being retrieved. For example, if the
   *                                                                      API request is for the accountvaults endpoint,
   *                                                                      and the end user also needs to know which
   *                                                                      contact the token belongs to, this data can
   *                                                                      be returned in the accountvaults endpoint
   *                                                                      request.
   * @return Response from the API call
   */
  async partialReversal(
    transactionId: string,
    body: V1TransactionsPartialReversalRequest,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      body: [body, v1TransactionsPartialReversalRequestSchema],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/partial-reversal`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }

  /**
   * Perform a refund transaction
   *
   * @param transactionId  Transaction ID
   * @param body
   * @param expand         Most endpoints in the API have a way to retrieve
   *                                                             extra data related to the current record being
   *                                                             retrieved. For example, if the API request is for the
   *                                                             accountvaults endpoint, and the end user also needs to
   *                                                             know which contact the token belongs to, this data can
   *                                                             be returned in the accountvaults endpoint request.
   * @return Response from the API call
   */
  async refundTransaction(
    transactionId: string,
    body: V1TransactionsRefundRequest,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      body: [body, v1TransactionsRefundRequestSchema],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/refund`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }

  /**
   * Increment the authorized transaction amount to include a tip
   *
   * @param transactionId  Transaction ID
   * @param body
   * @param expand         Most endpoints in the API have a way to retrieve
   *                                                                extra data related to the current record being
   *                                                                retrieved. For example, if the API request is for
   *                                                                the accountvaults endpoint, and the end user also
   *                                                                needs to know which contact the token belongs to,
   *                                                                this data can be returned in the accountvaults
   *                                                                endpoint request.
   * @return Response from the API call
   */
  async tipAdjustment(
    transactionId: string,
    body: V1TransactionsTipAdjustRequest,
    expand?: Expand57Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseTransaction>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      transactionId: [transactionId, string()],
      body: [body, v1TransactionsTipAdjustRequestSchema],
      expand: [expand, optional(array(expand57EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/transactions/${mapped.transactionId}/tip-adjust`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseTransactionSchema, requestOptions);
  }
}
