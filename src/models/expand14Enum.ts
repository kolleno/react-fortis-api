/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Expand14Enum
 */
export enum Expand14Enum {
  QuickInvoiceSetting = 'quick_invoice_setting',
  Tags = 'tags',
  QuickInvoiceViews = 'quick_invoice_views',
  AllTags = 'all_tags',
  Location = 'location',
  CreatedUser = 'created_user',
  ModifiedUser = 'modified_user',
  Changelogs = 'changelogs',
  Contact = 'contact',
  LogEmails = 'log_emails',
  LogSms = 'log_sms',
  Transactions = 'transactions',
  CcProductTransaction = 'cc_product_transaction',
  AchProductTransaction = 'ach_product_transaction',
  EmailBlacklist = 'email_blacklist',
  SmsBlacklist = 'sms_blacklist',
  Files = 'files',
  PaymentUrl = 'payment_url',
}

/**
 * Schema for Expand14Enum
 */
export const expand14EnumSchema: Schema<Expand14Enum> = stringEnum(
  Expand14Enum
);
