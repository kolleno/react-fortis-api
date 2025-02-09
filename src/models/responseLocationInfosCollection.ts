/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { Links, linksSchema } from './links';
import { List5, list5Schema } from './list5';
import { Pagination, paginationSchema } from './pagination';
import { Sort, sortSchema } from './sort';
import { Type39Enum, type39EnumSchema } from './type39Enum';

export interface ResponseLocationInfosCollection {
  /** Resource Type */
  type?: Type39Enum;
  /** Resource Members */
  list?: List5[];
  /** Pagination page links */
  links?: Links;
  /** Pagination info */
  pagination?: Pagination;
  /** Sort information used on the results */
  sort?: Sort;
  [key: string]: unknown;
}

export const responseLocationInfosCollectionSchema: Schema<ResponseLocationInfosCollection> = expandoObject(
  {
    type: ['type', optional(type39EnumSchema)],
    list: ['list', optional(array(lazy(() => list5Schema)))],
    links: ['links', optional(lazy(() => linksSchema))],
    pagination: ['pagination', optional(lazy(() => paginationSchema))],
    sort: ['sort', optional(lazy(() => sortSchema))],
  }
);
