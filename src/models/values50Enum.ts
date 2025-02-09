/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Values50Enum
 */
export enum Values50Enum {
  AccountNumber = 'account_number',
  PreviousAccountVaultId = 'previous_account_vault_id',
}

/**
 * Schema for Values50Enum
 */
export const values50EnumSchema: Schema<Values50Enum> = stringEnum(
  Values50Enum
);
