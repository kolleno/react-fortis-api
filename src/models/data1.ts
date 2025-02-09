/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Async, asyncSchema } from './async';

export interface Data1 {
  /** Do not store the Async Code for long term use, it expires after 30 days. */
  async?: Async;
  [key: string]: unknown;
}

export const data1Schema: Schema<Data1> = expandoObject({
  async: ['async', optional(lazy(() => asyncSchema))],
});
