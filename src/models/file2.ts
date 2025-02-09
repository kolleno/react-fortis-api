/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface File2 {
  /** The file name including the extension */
  fileName?: string;
  /** File contents as a base64 encoded string */
  content?: string;
  [key: string]: unknown;
}

export const file2Schema: Schema<File2> = expandoObject({
  fileName: ['file_name', optional(string())],
  content: ['content', optional(string())],
});
