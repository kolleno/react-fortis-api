/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

/** The Contact. */
export interface Contact {
  /** Contact's first name. */
  firstName?: string | null;
  /** Contact's last name. */
  lastName?: string | null;
  /** Contact's email address. */
  email?: string | null;
  /** Contact's phone. */
  phoneNumber?: string;
  [key: string]: unknown;
}

export const contactSchema: Schema<Contact> = expandoObject({
  firstName: ['first_name', optional(nullable(string()))],
  lastName: ['last_name', optional(nullable(string()))],
  email: ['email', optional(nullable(string()))],
  phoneNumber: ['phone_number', optional(string())],
});
