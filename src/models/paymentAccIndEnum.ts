/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PaymentAccIndEnum
 */
export enum PaymentAccIndEnum {
  Enum01 = '01',
  Enum02 = '02',
  Enum03 = '03',
  Enum04 = '04',
  Enum05 = '05',
}

/**
 * Schema for PaymentAccIndEnum
 */
export const paymentAccIndEnumSchema: Schema<PaymentAccIndEnum> = stringEnum(
  PaymentAccIndEnum
);
