/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Data16, data16Schema } from './data16';
import { Type53Enum, type53EnumSchema } from './type53Enum';

export interface ResponsePaymentCardReaderToken {
  /** Resource Type */
  type?: Type53Enum;
  data?: Data16;
  [key: string]: unknown;
}

export const responsePaymentCardReaderTokenSchema: Schema<ResponsePaymentCardReaderToken> = expandoObject(
  {
    type: ['type', optional(type53EnumSchema)],
    data: ['data', optional(lazy(() => data16Schema))],
  }
);
