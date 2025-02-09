/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { Level3Data, level3DataSchema } from './level3Data';

export interface Data28 {
  /** Level 3 ID */
  id?: string;
  /** Transaction ID */
  transactionId?: string;
  /** Level 3 data object */
  level3Data?: Level3Data;
  [key: string]: unknown;
}

export const data28Schema: Schema<Data28> = expandoObject({
  id: ['id', optional(string())],
  transactionId: ['transaction_id', optional(string())],
  level3Data: ['level3_data', optional(lazy(() => level3DataSchema))],
});
