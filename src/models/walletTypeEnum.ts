/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WalletTypeEnum
 */
export enum WalletTypeEnum {
  Enum000 = '000',
  Enum101 = '101',
  Enum103 = '103',
  Enum216 = '216',
  Enum217 = '217',
  Enum327 = '327',
}

/**
 * Schema for WalletTypeEnum
 */
export const walletTypeEnumSchema: Schema<WalletTypeEnum> = stringEnum(
  WalletTypeEnum
);
