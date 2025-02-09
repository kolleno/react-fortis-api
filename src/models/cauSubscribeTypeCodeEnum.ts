/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, numberEnum } from '../schema';

/**
 * Enum for CauSubscribeTypeCodeEnum
 */
export enum CauSubscribeTypeCodeEnum {
  Enum0 = 0,
  Enum1 = 1,
  Enum2 = 2,
}

/**
 * Schema for CauSubscribeTypeCodeEnum
 */
export const cauSubscribeTypeCodeEnumSchema: Schema<CauSubscribeTypeCodeEnum> = numberEnum(
  CauSubscribeTypeCodeEnum
);
