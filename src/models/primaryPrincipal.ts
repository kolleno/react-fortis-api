/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

/** The Primary Principal. */
export interface PrimaryPrincipal {
  /** Signer's first name */
  firstName?: string;
  /** Signer's last name */
  lastName?: string;
  /** Signer's middle name */
  middleName?: string | null;
  /** Signer's title */
  title?: string | null;
  /** Signer's date of birth */
  dateOfBirth?: string | null;
  /** Signer's residential address line 1 */
  addressLine1?: string | null;
  /** Signer's residential address line 2 */
  addressLine2?: string | null;
  /** Signer's city */
  city?: string | null;
  /** Signer's two-digit state code */
  stateProvince?: string | null;
  /** Signer's postal code */
  postalCode?: string | null;
  /** Last four digits of the primary principal or Signer's social security number */
  ssn?: string | null;
  /** Percentage of business owned by primary principal or signer */
  ownershipPercent?: number | null;
  /** Signer's phone number */
  phoneNumber?: string | null;
  [key: string]: unknown;
}

export const primaryPrincipalSchema: Schema<PrimaryPrincipal> = expandoObject({
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  middleName: ['middle_name', optional(nullable(string()))],
  title: ['title', optional(nullable(string()))],
  dateOfBirth: ['date_of_birth', optional(nullable(string()))],
  addressLine1: ['address_line_1', optional(nullable(string()))],
  addressLine2: ['address_line_2', optional(nullable(string()))],
  city: ['city', optional(nullable(string()))],
  stateProvince: ['state_province', optional(nullable(string()))],
  postalCode: ['postal_code', optional(nullable(string()))],
  ssn: ['ssn', optional(nullable(string()))],
  ownershipPercent: ['ownership_percent', optional(nullable(number()))],
  phoneNumber: ['phone_number', optional(nullable(string()))],
});
