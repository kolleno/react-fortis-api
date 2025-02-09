/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { AchSecCode3Enum, achSecCode3EnumSchema } from './achSecCode3Enum';
import { BillingAddress, billingAddressSchema } from './billingAddress';
import {
  CauSummaryStatusIdEnum,
  cauSummaryStatusIdEnumSchema,
} from './cauSummaryStatusIdEnum';
import {
  IdentityVerification2,
  identityVerification2Schema,
} from './identityVerification2';
import { Joi4, joi4Schema } from './joi4';
import {
  PaymentMethod16Enum,
  paymentMethod16EnumSchema,
} from './paymentMethod16Enum';

/** Token Information on `expand` */
export interface AccountVault {
  /**
   * Account holder name
   * >For CC, this is the 'Name (as it appears) on Card'. For ACH, this is the 'Name on Account'.
   * >
   */
  accountHolderName?: string | null;
  /**
   * This field can be used to correlate Tokens in our system to data within an outside software integration
   * >Must be unique per location. When running a transaction and using a stored token, this field can be used in place of account_vault_id.
   * >
   */
  accountVaultApiId?: string | null;
  /**
   * This field can be used to correlate Tokens in our system to data within an outside software integration
   * >Must be unique per location. When running a transaction and using a stored token, this field can be used in place of token_id.
   * >
   */
  tokenApiId?: string | null;
  /** DEPRECATED (Use token_c1 instead) */
  accountvaultC1?: string | null;
  /** DEPRECATED (Use token_c2 instead) */
  accountvaultC2?: string | null;
  /** DEPRECATED (Use token_c3 instead) */
  accountvaultC3?: string | null;
  /** Custom field 1 for API users to store custom data */
  tokenC1?: string | null;
  /** Custom field 2 for API users to store custom data */
  tokenC2?: string | null;
  /** Custom field 3 for API users to store custom data */
  tokenC3?: string | null;
  /** SEC code for the account */
  achSecCode?: AchSecCode3Enum | null;
  /** Billing Address Object */
  billingAddress?: BillingAddress;
  /** Used to associate the Token with a Contact. */
  contactId?: string | null;
  /** Used to store a customer identification number. */
  customerId?: string | null;
  /** Identity verification */
  identityVerification?: IdentityVerification2;
  /** A valid Location Id associated with the Contact for this Token */
  locationId?: string;
  /** Can be used to pull payment info from a previous token api id. */
  previousAccountVaultApiId?: string | null;
  /** Can be used to pull payment info from a previous token api id. */
  previousTokenApiId?: string | null;
  /** Can be used to pull payment info from a previous token. */
  previousAccountVaultId?: string | null;
  /** Can be used to pull payment info from a previous token. */
  previousTokenId?: string | null;
  /** Can be used to pull payment info from a previous transaction. */
  previousTransactionId?: string | null;
  /**
   * Account number
   * >For CC transactions, a credit card number. For ACH transactions, a bank account number. String lengths are conditional, CC should be 13-19 and ACH should be 4-19.
   * >
   */
  accountNumber?: string | null;
  /** Terms agreement. */
  termsAgree?: boolean;
  /** The ip address of the client that agreed to terms. */
  termsAgreeIp?: string | null;
  /** Used to describe the Token for easier identification within our UI. */
  title?: string | null;
  /** Token Import Id */
  tokenImportId?: string | null;
  /** (ECOMM) Directory Server Transaction ID (Such as XID, TAVV) */
  secureDirectoryServerTransactionId?: string | null;
  /** (ECOMM)  Secure Program Protocol Version */
  secureProtocolVersion?: number | null;
  /** (ECOMM) The token authentication value associated with 3D secure transactions (Such as CAVV, UCAF auth data) */
  secureAuthData?: string | null;
  /** (ECOMM) Used for UCAF collection indicator or Discover Autentication type */
  secureCollectionIndicator?: number | null;
  /** 3DS Server Transaction ID.  If this field is sent and 3DS authentication was done with Fortis, the 3DS fields secure_directory_server_transaction_id, secure_protocol_version, and secure_collection_indicator will be pre-populated. */
  threeDsServerTransId?: string | null;
  /** ACS Transaction ID */
  acsTransactionId?: string | null;
  joi?: Joi4;
  /** A unique, system-generated identifier for the Token. */
  id?: string;
  /**
   * Account type
   * >For ACH, must be provided as either 'checking' or 'savings'. For CC, field is read only. System will identify card_type and generate a value for this field automatically. i.e. visa, mc, disc, amex, jcb, diners.
   * >
   */
  accountType?: string;
  /** Register is Active */
  active?: boolean;
  /** CAU Summary Status ID. */
  cauSummaryStatusId?: CauSummaryStatusIdEnum;
  /** Created Time Stamp */
  createdTs?: number;
  /** E Serial Number */
  eSerialNumber?: string | null;
  /** E Track Data */
  eTrackData?: string | null;
  /** E Format */
  eFormat?: string | null;
  /** E Keyed Data */
  eKeyedData?: string | null;
  /** Determined by API based on card exp_date. */
  expiringInMonths?: number | null;
  /** Required for CC. The Expiration Date for the credit card. (MMYY format). */
  expDate?: string | null;
  /** The first six numbers of an account number.  System will generate a value for this field automatically. */
  firstSix?: string;
  /** True indicates that this token is tied to a Recurring Payment */
  hasRecurring?: boolean;
  /** The last four numbers of an account number.  System will generate a value for this field automatically. */
  lastFour?: string;
  /** Modified Time Stamp */
  modifiedTs?: number;
  /** Must be provided as either 'cc' or 'ach'. */
  paymentMethod?: PaymentMethod16Enum;
  /** A valid ticket that was created to store the token. */
  ticket?: string | null;
  /** Track Data from a magnetic card swipe. */
  trackData?: string | null;
  /** User ID Created the register */
  createdUserId?: string | null;
  /** CAU Last Updated Timestamp */
  cauLastUpdatedTs?: number | null;
  /** Card bin */
  cardBin?: string | null;
  /** Required for ACH. The Routing Number for the bank account being used. */
  routingNumber?: string | null;
  [key: string]: unknown;
}

export const accountVaultSchema: Schema<AccountVault> = expandoObject({
  accountHolderName: ['account_holder_name', optional(nullable(string()))],
  accountVaultApiId: ['account_vault_api_id', optional(nullable(string()))],
  tokenApiId: ['token_api_id', optional(nullable(string()))],
  accountvaultC1: ['accountvault_c1', optional(nullable(string()))],
  accountvaultC2: ['accountvault_c2', optional(nullable(string()))],
  accountvaultC3: ['accountvault_c3', optional(nullable(string()))],
  tokenC1: ['token_c1', optional(nullable(string()))],
  tokenC2: ['token_c2', optional(nullable(string()))],
  tokenC3: ['token_c3', optional(nullable(string()))],
  achSecCode: ['ach_sec_code', optional(nullable(achSecCode3EnumSchema))],
  billingAddress: [
    'billing_address',
    optional(lazy(() => billingAddressSchema)),
  ],
  contactId: ['contact_id', optional(nullable(string()))],
  customerId: ['customer_id', optional(nullable(string()))],
  identityVerification: [
    'identity_verification',
    optional(lazy(() => identityVerification2Schema)),
  ],
  locationId: ['location_id', optional(string())],
  previousAccountVaultApiId: [
    'previous_account_vault_api_id',
    optional(nullable(string())),
  ],
  previousTokenApiId: ['previous_token_api_id', optional(nullable(string()))],
  previousAccountVaultId: [
    'previous_account_vault_id',
    optional(nullable(string())),
  ],
  previousTokenId: ['previous_token_id', optional(nullable(string()))],
  previousTransactionId: [
    'previous_transaction_id',
    optional(nullable(string())),
  ],
  accountNumber: ['account_number', optional(nullable(string()))],
  termsAgree: ['terms_agree', optional(boolean())],
  termsAgreeIp: ['terms_agree_ip', optional(nullable(string()))],
  title: ['title', optional(nullable(string()))],
  tokenImportId: ['token_import_id', optional(nullable(string()))],
  secureDirectoryServerTransactionId: [
    'secure_directory_server_transaction_id',
    optional(nullable(string())),
  ],
  secureProtocolVersion: [
    'secure_protocol_version',
    optional(nullable(number())),
  ],
  secureAuthData: ['secure_auth_data', optional(nullable(string()))],
  secureCollectionIndicator: [
    'secure_collection_indicator',
    optional(nullable(number())),
  ],
  threeDsServerTransId: [
    'three_ds_server_trans_id',
    optional(nullable(string())),
  ],
  acsTransactionId: ['acs_transaction_id', optional(nullable(string()))],
  joi: ['_joi', optional(lazy(() => joi4Schema))],
  id: ['id', optional(string())],
  accountType: ['account_type', optional(string())],
  active: ['active', optional(boolean())],
  cauSummaryStatusId: [
    'cau_summary_status_id',
    optional(cauSummaryStatusIdEnumSchema),
  ],
  createdTs: ['created_ts', optional(number())],
  eSerialNumber: ['e_serial_number', optional(nullable(string()))],
  eTrackData: ['e_track_data', optional(nullable(string()))],
  eFormat: ['e_format', optional(nullable(string()))],
  eKeyedData: ['e_keyed_data', optional(nullable(string()))],
  expiringInMonths: ['expiring_in_months', optional(nullable(number()))],
  expDate: ['exp_date', optional(nullable(string()))],
  firstSix: ['first_six', optional(string())],
  hasRecurring: ['has_recurring', optional(boolean())],
  lastFour: ['last_four', optional(string())],
  modifiedTs: ['modified_ts', optional(number())],
  paymentMethod: ['payment_method', optional(paymentMethod16EnumSchema)],
  ticket: ['ticket', optional(nullable(string()))],
  trackData: ['track_data', optional(nullable(string()))],
  createdUserId: ['created_user_id', optional(nullable(string()))],
  cauLastUpdatedTs: ['cau_last_updated_ts', optional(nullable(number()))],
  cardBin: ['card_bin', optional(nullable(string()))],
  routingNumber: ['routing_number', optional(nullable(string()))],
});
