/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { Operator1Enum, operator1EnumSchema } from '../operator1Enum';

/** This is a container type for one-of types. */
export type FilterByOperator = Operator1Enum;

export const filterByOperatorSchema: Schema<FilterByOperator> = oneOf([
  operator1EnumSchema,
]);

export namespace FilterByOperator {
  /**
   * Validation method to narrow down union type to Operator1Enum type case.
   *
   * This is Operator1 case.
   */
  export function isOperator1Enum(value: unknown): value is Operator1Enum {
    const validationResult = validateAndMap(value, operator1EnumSchema);
    return validationResult.errors === false;
  }
}
