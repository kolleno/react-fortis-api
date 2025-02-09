/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContactUserDefaultEntryPageEnum
 */
export enum ContactUserDefaultEntryPageEnum {
  Dashboard = 'dashboard',
  Makepayment = 'makepayment',
  Paymenthistory = 'paymenthistory',
  Accounts = 'accounts',
  Recurrings = 'recurrings',
  Invoices = 'invoices',
}

/**
 * Schema for ContactUserDefaultEntryPageEnum
 */
export const contactUserDefaultEntryPageEnumSchema: Schema<ContactUserDefaultEntryPageEnum> = stringEnum(
  ContactUserDefaultEntryPageEnum
);
