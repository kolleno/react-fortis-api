/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema } from '../schema';
import {
  Joi19Conditions,
  joi19ConditionsSchema,
} from './containers/joi19Conditions';

export interface Joi19 {
  conditions?: Joi19Conditions;
  [key: string]: unknown;
}

export const joi19Schema: Schema<Joi19> = expandoObject({
  conditions: ['conditions', optional(joi19ConditionsSchema)],
});
