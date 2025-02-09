/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for AlertTypeIdEnum
 */
export enum AlertTypeIdEnum {
  Enum0 = 0,
  Enum1 = 1,
  Enum2 = 2,
  Enum3 = 3,
  Enum4 = 4,
  Enum5 = 5,
}

/**
 * Schema for AlertTypeIdEnum
 */
export const alertTypeIdEnumSchema: Schema<AlertTypeIdEnum> = numberEnum(
  AlertTypeIdEnum
);
