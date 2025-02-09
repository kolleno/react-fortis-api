/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ThreeDsReqPriorAuthMethodEnum
 */
export enum ThreeDsReqPriorAuthMethodEnum {
  Enum01 = '01',
  Enum02 = '02',
  Enum03 = '03',
  Enum04 = '04',
  Enum80 = '80',
  Enum81 = '81',
  Enum82 = '82',
  Enum83 = '83',
  Enum84 = '84',
  Enum85 = '85',
  Enum86 = '86',
  Enum87 = '87',
  Enum88 = '88',
  Enum89 = '89',
  Enum90 = '90',
  Enum91 = '91',
  Enum92 = '92',
  Enum93 = '93',
  Enum94 = '94',
  Enum95 = '95',
  Enum96 = '96',
  Enum97 = '97',
  Enum98 = '98',
  Enum99 = '99',
}

/**
 * Schema for ThreeDsReqPriorAuthMethodEnum
 */
export const threeDsReqPriorAuthMethodEnumSchema: Schema<ThreeDsReqPriorAuthMethodEnum> = stringEnum(
  ThreeDsReqPriorAuthMethodEnum
);
