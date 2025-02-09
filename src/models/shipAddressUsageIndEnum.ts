/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShipAddressUsageIndEnum
 */
export enum ShipAddressUsageIndEnum {
  Enum01 = '01',
  Enum02 = '02',
  Enum03 = '03',
  Enum04 = '04',
}

/**
 * Schema for ShipAddressUsageIndEnum
 */
export const shipAddressUsageIndEnumSchema: Schema<ShipAddressUsageIndEnum> = stringEnum(
  ShipAddressUsageIndEnum
);
