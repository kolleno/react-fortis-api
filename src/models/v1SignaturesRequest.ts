/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import { ResourceEnum, resourceEnumSchema } from './resourceEnum';

export interface V1SignaturesRequest {
  /** Signature */
  signature: string;
  /**
   * Resource
   * >Recurring, Transaction, AccountVault, DeviceTerm
   * >
   */
  resource: ResourceEnum;
  /** Resource ID */
  resourceId: string;
  [key: string]: unknown;
}

export const v1SignaturesRequestSchema: Schema<V1SignaturesRequest> = expandoObject(
  {
    signature: ['signature', string()],
    resource: ['resource', resourceEnumSchema],
    resourceId: ['resource_id', string()],
  }
);
