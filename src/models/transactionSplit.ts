/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface TransactionSplit {
  /** Transaction ID */
  transactionId?: string;
  /** Contact ID */
  contactId?: string;
  /** Amount */
  amount?: number;
  /** Transaction Splits ID */
  id?: string;
  /** Created Time Stamp */
  createdTs?: number;
  /** User ID Created the register */
  createdUserId?: string | null;
  [key: string]: unknown;
}

export const transactionSplitSchema: Schema<TransactionSplit> = expandoObject({
  transactionId: ['transaction_id', optional(string())],
  contactId: ['contact_id', optional(string())],
  amount: ['amount', optional(number())],
  id: ['id', optional(string())],
  createdTs: ['created_ts', optional(number())],
  createdUserId: ['created_user_id', optional(nullable(string()))],
});
