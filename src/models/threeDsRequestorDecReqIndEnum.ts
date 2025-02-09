/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ThreeDsRequestorDecReqIndEnum
 */
export enum ThreeDsRequestorDecReqIndEnum {
  Y = 'Y',
  N = 'N',
  F = 'F',
  B = 'B',
}

/**
 * Schema for ThreeDsRequestorDecReqIndEnum
 */
export const threeDsRequestorDecReqIndEnumSchema: Schema<ThreeDsRequestorDecReqIndEnum> = stringEnum(
  ThreeDsRequestorDecReqIndEnum
);
