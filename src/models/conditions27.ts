/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema } from '../schema';
import { MethodEnum, methodEnumSchema } from './methodEnum';
import { Values99Enum, values99EnumSchema } from './values99Enum';

export interface Conditions27 {
  method?: MethodEnum;
  values?: Values99Enum;
  [key: string]: unknown;
}

export const conditions27Schema: Schema<Conditions27> = expandoObject({
  method: ['method', optional(methodEnumSchema)],
  values: ['values', optional(values99EnumSchema)],
});
