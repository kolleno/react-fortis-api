/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { EmailEnum, emailEnumSchema } from '../models/emailEnum';
import { Expand14Enum, expand14EnumSchema } from '../models/expand14Enum';
import { Field38Enum, field38EnumSchema } from '../models/field38Enum';
import { FilterBy, filterBySchema } from '../models/filterBy';
import { Format1Enum, format1EnumSchema } from '../models/format1Enum';
import { Order20, order20Schema } from '../models/order20';
import { Page, pageSchema } from '../models/page';
import {
  ResponseQuickInvoice,
  responseQuickInvoiceSchema,
} from '../models/responseQuickInvoice';
import {
  ResponseQuickInvoiceResend,
  responseQuickInvoiceResendSchema,
} from '../models/responseQuickInvoiceResend';
import {
  ResponseQuickInvoicesCollection,
  responseQuickInvoicesCollectionSchema,
} from '../models/responseQuickInvoicesCollection';
import { SmsEnum, smsEnumSchema } from '../models/smsEnum';
import {
  V1QuickInvoicesRequest,
  v1QuickInvoicesRequestSchema,
} from '../models/v1QuickInvoicesRequest';
import {
  V1QuickInvoicesRequest1,
  v1QuickInvoicesRequest1Schema,
} from '../models/v1QuickInvoicesRequest1';
import {
  V1QuickInvoicesTransactionRequest,
  v1QuickInvoicesTransactionRequestSchema,
} from '../models/v1QuickInvoicesTransactionRequest';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { Response401tokenError } from '../errors/response401tokenError';
import { Response412Error } from '../errors/response412Error';

export class QuickInvoicesController extends BaseController {
  /**
   * @param body
   * @param expand       Most endpoints in the API have a way to retrieve extra data
   *                                                      related to the current record being retrieved. For example,
   *                                                      if the API request is for the accountvaults endpoint, and the
   *                                                      end user also needs to know which contact the token belongs
   *                                                      to, this data can be returned in the accountvaults endpoint
   *                                                      request.
   * @return Response from the API call
   */
  async createANewQuickInvoice(
    body: V1QuickInvoicesRequest,
    expand?: Expand14Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('POST', '/v1/quick-invoices');
    const mapped = req.prepareArgs({
      body: [body, v1QuickInvoicesRequestSchema],
      expand: [expand, optional(array(expand14EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }

  /**
   * @param page       Use this field to specify paginate your results, by using page size and
   *                                     number. You can use one of the following methods: >/endpoint?page={ "number":
   *                                     1, "size": 50 } > >/endpoint?page[number]=1&page[size]=50 >
   * @param order      Criteria used in query string parameters to order results.  Most fields from
   *                                     the endpoint results can be used as a `key`.  Unsupported fields or operators
   *                                     will return a `412`.  Must be encoded, or use syntax that does not require
   *                                     encoding. >/endpoint?order[0][key]=created_ts&order[0][operator]=asc >
   *                                     >/endpoint?order=[{ "key": "created_ts", "operator": "asc"}] > >/endpoint?
   *                                     order=[{ "key": "balance", "operator": "desc"},{ "key": "created_ts",
   *                                     "operator": "asc"}] >
   * @param filterBy   Filter criteria that can be used in query string parameters.  Most fields
   *                                     from the endpoint results can be used as a `key`.  Unsupported fields or
   *                                     operators will return a `412`. Must be encoded, or use syntax that does not
   *                                     require encoding. >?
   *                                     filter_by[0][key]=first_name&filter_by[0][operator]==&filter_by[0][value]=Stev
   *                                     e > >/endpoint?filter_by=[{ "key": "first_name", "operator": "=", "value":
   *                                     "Fred" }] > >/endpoint?filter_by=[{ "key": "account_type", "operator": "=",
   *                                     "value": "VISA" }] > >/endpoint?filter_by=[{ "key": "created_ts", "operator":
   *                                     ">=", "value": "946702799" }, { "key": "created_ts", "operator": "<=", value:
   *                                     "1695061891" }] > >/endpoint?filter_by=[{ "key": "last_name", "operator": "IN",
   *                                     "value": "Williams,Brown,Allman" }] >
   * @param expand     Most endpoints in the API have a way to retrieve extra data related to the
   *                                     current record being retrieved. For example, if the API request is for the
   *                                     accountvaults endpoint, and the end user also needs to know which contact the
   *                                     token belongs to, this data can be returned in the accountvaults endpoint
   *                                     request.
   * @param format     Reporting format, valid values: csv, tsv
   * @param typeahead  You can use any `field_name` from this endpoint results to order the list
   *                                     using the value provided as filter for the same `field_name`. It will be
   *                                     ordered using the following rules: 1) Exact match, 2) Starts with, 3) Contains.
   *                                     >/endpoint?filter={ "field_name": "Value" }&_typeahead=field_name >
   * @param fields     You can use any `field_name` from this endpoint results to filter the list of
   *                                     fields returned on the response.
   * @return Response from the API call
   */
  async listAllQuickInvoicesRelated(
    page?: Page,
    order?: Order20[],
    filterBy?: FilterBy[],
    expand?: Expand14Enum[],
    format?: Format1Enum,
    typeahead?: string,
    fields?: Field38Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoicesCollection>> {
    const req = this.createRequest('GET', '/v1/quick-invoices');
    const mapped = req.prepareArgs({
      page: [page, optional(pageSchema)],
      order: [order, optional(array(order20Schema))],
      filterBy: [filterBy, optional(array(filterBySchema))],
      expand: [expand, optional(array(expand14EnumSchema))],
      format: [format, optional(format1EnumSchema)],
      typeahead: [typeahead, optional(string())],
      fields: [fields, optional(array(field38EnumSchema))],
    });
    req.query('page', mapped.page);
    req.query('order', mapped.order);
    req.query('filter_by', mapped.filterBy);
    req.query('expand', mapped.expand);
    req.query('_format', mapped.format);
    req.query('_typeahead', mapped.typeahead);
    req.query('fields', mapped.fields);
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(
      responseQuickInvoicesCollectionSchema,
      requestOptions
    );
  }

  /**
   * @param quickInvoiceId   Quick Invoice ID
   * @param expand           Most endpoints in the API have a way to retrieve extra data related to the
   *                                      current record being retrieved. For example, if the API request is for the
   *                                      accountvaults endpoint, and the end user also needs to know which contact the
   *                                      token belongs to, this data can be returned in the accountvaults endpoint
   *                                      request.
   * @param email            Resend Email
   * @param sms              Resend SMS
   * @return Response from the API call
   */
  async resend(
    quickInvoiceId: string,
    expand?: string[],
    email?: EmailEnum,
    sms?: SmsEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoiceResend>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
      expand: [expand, optional(array(string()))],
      email: [email, optional(emailEnumSchema)],
      sms: [sms, optional(smsEnumSchema)],
    });
    req.query('expand', mapped.expand);
    req.query('email', mapped.email);
    req.query('sms', mapped.sms);
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}/resend`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceResendSchema, requestOptions);
  }

  /**
   * @param quickInvoiceId   Quick Invoice ID
   * @param body
   * @return Response from the API call
   */
  async associateTransactionWithOuickInvoice(
    quickInvoiceId: string,
    body: V1QuickInvoicesTransactionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
      body: [body, v1QuickInvoicesTransactionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}/transaction`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }

  /**
   * @param quickInvoiceId   Quick Invoice ID
   * @param body
   * @return Response from the API call
   */
  async removeTransactionFromQuickInvoice(
    quickInvoiceId: string,
    body: V1QuickInvoicesTransactionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
      body: [body, v1QuickInvoicesTransactionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}/transaction`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }

  /**
   * @param quickInvoiceId   Quick Invoice ID
   * @return Response from the API call
   */
  async deleteQuickInvoice(
    quickInvoiceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
    });
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }

  /**
   * @param quickInvoiceId   Quick Invoice ID
   * @param expand           Most endpoints in the API have a way to retrieve extra data related to
   *                                           the current record being retrieved. For example, if the API request is
   *                                           for the accountvaults endpoint, and the end user also needs to know
   *                                           which contact the token belongs to, this data can be returned in the
   *                                           accountvaults endpoint request.
   * @param fields           You can use any `field_name` from this endpoint results to filter the
   *                                           list of fields returned on the response.
   * @return Response from the API call
   */
  async viewSingleQuickInvoiceRecord(
    quickInvoiceId: string,
    expand?: Expand14Enum[],
    fields?: Field38Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
      expand: [expand, optional(array(expand14EnumSchema))],
      fields: [fields, optional(array(field38EnumSchema))],
    });
    req.query('expand', mapped.expand);
    req.query('fields', mapped.fields);
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }

  /**
   * NOTE: A quick invoice can not be updated if it is already closed.
   * Once a partial payment is made, the item list should not be editable.
   *
   * @param quickInvoiceId   Quick Invoice ID
   * @param body
   * @param expand           Most endpoints in the API have a way to retrieve extra
   *                                                           data related to the current record being retrieved. For
   *                                                           example, if the API request is for the accountvaults
   *                                                           endpoint, and the end user also needs to know which
   *                                                           contact the token belongs to, this data can be returned
   *                                                           in the accountvaults endpoint request.
   * @return Response from the API call
   */
  async updateQuickInvoice(
    quickInvoiceId: string,
    body: V1QuickInvoicesRequest1,
    expand?: Expand14Enum[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
      body: [body, v1QuickInvoicesRequest1Schema],
      expand: [expand, optional(array(expand14EnumSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.query('expand', mapped.expand);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.throwOn(412, Response412Error, 'Precondition Failed');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }

  /**
   * @param quickInvoiceId   Quick Invoice ID
   * @return Response from the API call
   */
  async reopenQuickInvoice(
    quickInvoiceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResponseQuickInvoice>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      quickInvoiceId: [quickInvoiceId, string()],
    });
    req.appendTemplatePath`/v1/quick-invoices/${mapped.quickInvoiceId}/reopen`;
    req.throwOn(401, Response401tokenError, 'Unauthorized');
    req.authenticate([{ userId: true, userApiKey: true, developerId: true }]);
    return req.callAsJson(responseQuickInvoiceSchema, requestOptions);
  }
}
