/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Data18, data18Schema } from './data18';
import { Type56Enum, type56EnumSchema } from './type56Enum';

export interface ResponseQuickInvoiceResend {
  /** Resource Type */
  type?: Type56Enum;
  data?: Data18;
  [key: string]: unknown;
}

export const responseQuickInvoiceResendSchema: Schema<ResponseQuickInvoiceResend> = expandoObject(
  {
    type: ['type', optional(type56EnumSchema)],
    data: ['data', optional(lazy(() => data18Schema))],
  }
);
