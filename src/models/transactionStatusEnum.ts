/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TransactionStatusEnum
 */
export enum TransactionStatusEnum {
  Y = 'Y',
  N = 'N',
  U = 'U',
  C = 'C',
  R = 'R',
  A = 'A',
  D = 'D',
  I = 'I',
}

/**
 * Schema for TransactionStatusEnum
 */
export const transactionStatusEnumSchema: Schema<TransactionStatusEnum> = stringEnum(
  TransactionStatusEnum
);
