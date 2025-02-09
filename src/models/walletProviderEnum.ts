/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WalletProviderEnum
 */
export enum WalletProviderEnum {
  GooglePay = 'GooglePay',
  ApplePay = 'ApplePay',
}

/**
 * Schema for WalletProviderEnum
 */
export const walletProviderEnumSchema: Schema<WalletProviderEnum> = stringEnum(
  WalletProviderEnum
);
