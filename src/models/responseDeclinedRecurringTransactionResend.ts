/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Data5, data5Schema } from './data5';
import { Type21Enum, type21EnumSchema } from './type21Enum';

export interface ResponseDeclinedRecurringTransactionResend {
  /** Resource Type */
  type?: Type21Enum;
  data?: Data5;
  [key: string]: unknown;
}

export const responseDeclinedRecurringTransactionResendSchema: Schema<ResponseDeclinedRecurringTransactionResend> = expandoObject(
  {
    type: ['type', optional(type21EnumSchema)],
    data: ['data', optional(lazy(() => data5Schema))],
  }
);
