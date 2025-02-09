/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import { Conditions4, conditions4Schema } from '../conditions4';
import { Conditions41, conditions41Schema } from '../conditions41';
import { Conditions42, conditions42Schema } from '../conditions42';
import { Conditions43, conditions43Schema } from '../conditions43';

/** This is a container type for any-of types. */
export type Joi4Conditions =
  | Conditions4
  | Conditions41
  | Conditions42
  | Conditions43;

export const joi4ConditionsSchema: Schema<Joi4Conditions> = anyOf([
  conditions4Schema,
  conditions41Schema,
  conditions42Schema,
  conditions43Schema,
]);

export namespace Joi4Conditions {
  /**
   * Validation method to narrow down union type to Conditions4 type case.
   *
   * This is Conditions4 case.
   */
  export function isConditions4(value: unknown): value is Conditions4 {
    const validationResult = validateAndMap(value, conditions4Schema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to Conditions41 type case.
   *
   * This is Conditions41 case.
   */
  export function isConditions41(value: unknown): value is Conditions41 {
    const validationResult = validateAndMap(value, conditions41Schema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to Conditions42 type case.
   *
   * This is Conditions42 case.
   */
  export function isConditions42(value: unknown): value is Conditions42 {
    const validationResult = validateAndMap(value, conditions42Schema);
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to Conditions43 type case.
   *
   * This is Conditions43 case.
   */
  export function isConditions43(value: unknown): value is Conditions43 {
    const validationResult = validateAndMap(value, conditions43Schema);
    return validationResult.errors === false;
  }
}
