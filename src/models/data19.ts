/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { AccountVault, accountVaultSchema } from './accountVault';
import { AllTag, allTagSchema } from './allTag';
import { Changelog, changelogSchema } from './changelog';
import { Contact1, contact1Schema } from './contact1';
import { CreatedUser, createdUserSchema } from './createdUser';
import { Forecast, forecastSchema } from './forecast';
import { IntervalTypeEnum, intervalTypeEnumSchema } from './intervalTypeEnum';
import { Joi, joiSchema } from './joi';
import { Location, locationSchema } from './location';
import { LogEmail, logEmailSchema } from './logEmail';
import {
  PaymentMethod1Enum,
  paymentMethod1EnumSchema,
} from './paymentMethod1Enum';
import {
  ProductTransaction,
  productTransactionSchema,
} from './productTransaction';
import { RecurringSplit, recurringSplitSchema } from './recurringSplit';
import {
  RecurringTypeIdEnum,
  recurringTypeIdEnumSchema,
} from './recurringTypeIdEnum';
import { Signature, signatureSchema } from './signature';
import { StatusEnum, statusEnumSchema } from './statusEnum';
import { Tag, tagSchema } from './tag';

export interface Data19 {
  /** Token ID */
  accountVaultId?: string;
  /** Token ID */
  tokenId?: string;
  /** Contact ID */
  contactId?: string | null;
  /** Token API ID */
  accountVaultApiId?: string | null;
  /** Token API ID */
  tokenApiId?: string | null;
  joi?: Joi;
  /** Active */
  active?: boolean;
  /** Description */
  description?: string | null;
  /** End date */
  endDate?: string | null;
  /** Installment Total Count */
  installmentTotalCount?: number | null;
  /** Interval */
  interval?: number;
  /** Interval Type */
  intervalType?: IntervalTypeEnum;
  /** Location ID */
  locationId?: string;
  /** Notification Days */
  notificationDays?: number | null;
  /** Payment Method */
  paymentMethod?: PaymentMethod1Enum;
  /** Product Transaction ID */
  productTransactionId?: string | null;
  /** Recurring ID */
  recurringId?: string | null;
  /** Recurring Api ID */
  recurringApiId?: string | null;
  /** Start date */
  startDate?: string;
  /** Status */
  status?: StatusEnum;
  /** Transaction amount */
  transactionAmount?: number;
  /** Terms Agree */
  termsAgree?: boolean;
  /** Terms Agree Ip */
  termsAgreeIp?: string | null;
  /** Custom field used for integrations */
  recurringC1?: string | null;
  /** Custom field used for integrations */
  recurringC2?: string | null;
  /** Custom field used for integrations */
  recurringC3?: string | null;
  /** Send To Proc As Recur */
  sendToProcAsRecur?: boolean;
  /** Tag Information on `expand` */
  tags?: Tag[];
  /** Retained Amount */
  secondaryAmount?: number | null;
  currency?: string;
  /** Recurring ID */
  id?: string;
  /** Next Run Date */
  nextRunDate?: string;
  /** Created Time Stamp */
  createdTs?: number;
  /** Modified Time Stamp */
  modifiedTs?: number;
  /** Recurring Type */
  recurringTypeId?: RecurringTypeIdEnum;
  /** Installment Amount Total */
  installmentAmountTotal?: number | null;
  /** User ID Created the register */
  createdUserId?: string;
  /** Log Email Information on `expand` */
  logEmails?: LogEmail[];
  /** Contact Information on `expand` */
  contact?: Contact1;
  /** Token Information on `expand` */
  accountVault?: AccountVault;
  /** User Information on `expand` */
  createdUser?: CreatedUser;
  /** Signature Information on `expand` */
  signature?: Signature;
  /** Payment Schedule Information on `expand` */
  paymentSchedule?: string[];
  /** Location Information on `expand` */
  location?: Location;
  /** Product Transaction Information on `expand` */
  productTransaction?: ProductTransaction;
  /** Next Run Date Min Information on `expand` */
  nextRunDateMin?: string;
  /** Next Run Date Max Information on `expand` */
  nextRunDateMax?: string;
  /** All Tag Information on `expand` */
  allTags?: AllTag[];
  /** Changelog Information on `expand` */
  changelogs?: Changelog[];
  /** Forecast Information on `expand` */
  forecast?: Forecast;
  /** Recurring Split Information on `expand` */
  recurringSplits?: RecurringSplit[];
  [key: string]: unknown;
}

export const data19Schema: Schema<Data19> = expandoObject({
  accountVaultId: ['account_vault_id', optional(string())],
  tokenId: ['token_id', optional(string())],
  contactId: ['contact_id', optional(nullable(string()))],
  accountVaultApiId: ['account_vault_api_id', optional(nullable(string()))],
  tokenApiId: ['token_api_id', optional(nullable(string()))],
  joi: ['_joi', optional(lazy(() => joiSchema))],
  active: ['active', optional(boolean())],
  description: ['description', optional(nullable(string()))],
  endDate: ['end_date', optional(nullable(string()))],
  installmentTotalCount: [
    'installment_total_count',
    optional(nullable(number())),
  ],
  interval: ['interval', optional(number())],
  intervalType: ['interval_type', optional(intervalTypeEnumSchema)],
  locationId: ['location_id', optional(string())],
  notificationDays: ['notification_days', optional(nullable(number()))],
  paymentMethod: ['payment_method', optional(paymentMethod1EnumSchema)],
  productTransactionId: [
    'product_transaction_id',
    optional(nullable(string())),
  ],
  recurringId: ['recurring_id', optional(nullable(string()))],
  recurringApiId: ['recurring_api_id', optional(nullable(string()))],
  startDate: ['start_date', optional(string())],
  status: ['status', optional(statusEnumSchema)],
  transactionAmount: ['transaction_amount', optional(number())],
  termsAgree: ['terms_agree', optional(boolean())],
  termsAgreeIp: ['terms_agree_ip', optional(nullable(string()))],
  recurringC1: ['recurring_c1', optional(nullable(string()))],
  recurringC2: ['recurring_c2', optional(nullable(string()))],
  recurringC3: ['recurring_c3', optional(nullable(string()))],
  sendToProcAsRecur: ['send_to_proc_as_recur', optional(boolean())],
  tags: ['tags', optional(array(lazy(() => tagSchema)))],
  secondaryAmount: ['secondary_amount', optional(nullable(number()))],
  currency: ['currency', optional(string())],
  id: ['id', optional(string())],
  nextRunDate: ['next_run_date', optional(string())],
  createdTs: ['created_ts', optional(number())],
  modifiedTs: ['modified_ts', optional(number())],
  recurringTypeId: ['recurring_type_id', optional(recurringTypeIdEnumSchema)],
  installmentAmountTotal: [
    'installment_amount_total',
    optional(nullable(number())),
  ],
  createdUserId: ['created_user_id', optional(string())],
  logEmails: ['log_emails', optional(array(lazy(() => logEmailSchema)))],
  contact: ['contact', optional(lazy(() => contact1Schema))],
  accountVault: ['account_vault', optional(lazy(() => accountVaultSchema))],
  createdUser: ['created_user', optional(lazy(() => createdUserSchema))],
  signature: ['signature', optional(lazy(() => signatureSchema))],
  paymentSchedule: ['payment_schedule', optional(array(string()))],
  location: ['location', optional(lazy(() => locationSchema))],
  productTransaction: [
    'product_transaction',
    optional(lazy(() => productTransactionSchema)),
  ],
  nextRunDateMin: ['next_run_date_min', optional(string())],
  nextRunDateMax: ['next_run_date_max', optional(string())],
  allTags: ['all_tags', optional(array(lazy(() => allTagSchema)))],
  changelogs: ['changelogs', optional(array(lazy(() => changelogSchema)))],
  forecast: ['forecast', optional(lazy(() => forecastSchema))],
  recurringSplits: [
    'recurring_splits',
    optional(array(lazy(() => recurringSplitSchema))),
  ],
});
