/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { AmountIndEnum, amountIndEnumSchema } from './amountIndEnum';
import {
  MerchantRiskIndicator,
  merchantRiskIndicatorSchema,
} from './merchantRiskIndicator';
import {
  TransactionTypeEnum,
  transactionTypeEnumSchema,
} from './transactionTypeEnum';

/** Contains purchase information */
export interface Purchase {
  /**
   * Indicates the maximum number of authorizations permitted for installment payments.
   * The fields is required if the Merchant and Cardholder have agreed to installment payments, i.e. if 3DS Requestor Authentication Indicator = 03. Omitted if not an installment payment authentication.
   * Starting from EMV 3DS 2.3.1:
   * Additionally this field is required for device_channel = 03 (3RI) if three_ri_ind = 02.
   */
  purchaseInstallData?: number;
  /** Contains purchase information */
  merchantRiskIndicator?: MerchantRiskIndicator;
  /**
   * Purchase amount in minor units of currency with all punctuation removed. When used in conjunction with the Purchase Currency Exponent field, proper punctuation can be calculated. Example: If the purchase amount is USD 123.45, element will contain the value 12345. The field is limited to maximum 48 characters.
   * This field is required for 02-NPA message category if 3DS Requestor Authentication Indicator = 02 or 03.
   *  This field is always required for message_category = 01 (PA).
   * Starting from EMV 3DS 2.3.1:
   * Additionally this field is required for message_category = 02-NPA if three_ri_ind = 01, 02, 06, 07, 08, 09, or 11.
   */
  purchaseAmount?: number;
  /**
   * Currency in which purchase amount is expressed. The value is limited to 3 numeric characters and is represented by the ISO 4217 three-digit currency code, except 955-964 and 999.
   * This field is always required for message_category = 01-PA.
   * It is required for message_category = 02-NPA if 3DS Requestor Authentication Indicator = 02 or 03.
   * Starting from EMV 3DS 2.3.1:
   * Additionally this field is required for message_category = 02-NPA if three_ri_ind = 01, 02, 06, 07, 08, 09, or 11.
   */
  purchaseCurrency?: string;
  /**
   * Minor units of currency as specified in the ISO 4217 currency exponent. The field is limited to 1 character.
   * This field is always required for message_category = 01-PA.
   * It is required for message_category = 02-NPA if 3DS Requestor Authentication Indicator = 02 or 03.
   * Example: for currency USD the exponent should be 2, and for Yen the exponent should be 0.
   * Starting from EMV 3DS 2.3.1:
   * Additionally this field is required for message_category = 02-NPA if three_ri_ind = 01, 02, 06, 07, 08, 09, or 11.
   */
  purchaseExponent?: number;
  /**
   * Date and time of the purchase, converted into UTC. The field is limited to 14 characters, formatted as YYYYMMDDHHMMSS.
   * This field is always required for message_category = 01-PA.
   * It is required for message_category = 02-NPA if 3DS Requestor Authentication Indicator = 02 or 03.
   * Starting from EMV 3DS 2.3.1:
   * Additionally this field is required for message_category = 02-NPA if three_ri_ind = 01, 02, 06, 07, 08, 09, or 11.
   */
  purchaseDate?: string;
  /**
   * Date after which no further authorizations shall be performed. This field is limited to 8 characters, and the accepted format is YYYYMMDD.
   * This field is required if 3DS Requestor Authentication Indicator = 02 or 03 and message_category = 01 or 02. Required if there is an end date.
   */
  recurringExpiry?: string;
  /**
   * Indicates the minimum number of days between authorizations.
   * This field is required if 3DS Requestor Authentication Indicator = 02 or 03 and frequency_ind = 01.
   */
  recurringFrequency?: number;
  /**
   * Identifies the type of transaction being authenticated. The values are derived from ISO 8583. This field is required in some markets. Otherwise, the field is optional.
   * >01 - Goods / Service purchase
   * >
   * >03 - Check Acceptance
   * >
   * >10 - Account Funding
   * >
   * >11 - Quasi-Cash Transaction
   * >
   * >28 - Prepaid activation and Loan
   * >
   */
  transactionType?: TransactionTypeEnum;
  /**
   * Recurring amount after first/promotional payment in minor units of currency with all punctuation removed. Example: If the recurring amount is USD 123.45, element will contain the value 12345. The field is limited to maximum 48 characters.
   * The field is required if three_ds_requestor_authentication_ind = 02 or 03 AND three_ri_iInd = 01 or 02 AND amount_ind = 01.
   * Available for supporting EMV 3DS 2.3.1 and later versions.
   */
  recurringAmount?: number;
  /**
   * Currency in which recurring amount is expressed. The value is limited to 3 numeric characters and is represented by the ISO 4217 three-digit currency code, except 955-964 and 999.
   * This field is required if recurring_amount is present.
   * Available for supporting EMV 3DS 2.3.1 and later versions.
   */
  recurringCurrency?: string;
  /**
   * Minor units of currency as specified in the ISO 4217 currency exponent. Example: USD = 2, Yen = 0. The value is limited to 1 numeric character.
   * This field is required if recurring_amount is present.
   * Available for supporting EMV 3DS 2.3.1 and later versions.
   */
  recurringExponent?: number;
  /**
   * Effective date of new authorized amount following first/promotional payment in recurring transaction. The value is limited to 8 characters. Accepted format: YYYYMMDD.
   * This field is required if frequency_ind = 01.
   * Available for supporting EMV 3DS 2.3.1 and later versions.
   */
  recurringDate?: string;
  /**
   * Part of the indication whether the recurring or installment payment has a fixed or variable amount.
   * Starting from EMV 3DS 2.3.1:
   *  This field is required if three_ds_requestor.three_ds_requestor_authentication_ind = 02 or 03.
   *  This field is required if three_ri_ind= 01 or 02.
   * >01 - Fixed Purchase Amount
   * >
   * >02 - Variable Purchase Amount
   * >
   * >03 through 79 - Reserved for EMVCo future use (values invalid until defined by EMVCo)
   * >
   * >80 through 99 - PS-specific value (dependent on the payment scheme type)
   * >
   */
  amountInd?: AmountIndEnum;
  /**
   * Part of the indication whether the recurring or instalment payment has a fixed or variable frequency.
   * Starting from EMV 3DS 2.3.1:
   *  This field is required if three_ds_requestor.three_ds_requestor_authentication_ind = 02 or 03.
   *  This field is required if three_ri_ind= 01 or 02.
   */
  frequencyInd?: string;
  [key: string]: unknown;
}

export const purchaseSchema: Schema<Purchase> = expandoObject({
  purchaseInstallData: ['purchase_install_data', optional(number())],
  merchantRiskIndicator: [
    'merchant_risk_indicator',
    optional(lazy(() => merchantRiskIndicatorSchema)),
  ],
  purchaseAmount: ['purchase_amount', optional(number())],
  purchaseCurrency: ['purchase_currency', optional(string())],
  purchaseExponent: ['purchase_exponent', optional(number())],
  purchaseDate: ['purchase_date', optional(string())],
  recurringExpiry: ['recurring_expiry', optional(string())],
  recurringFrequency: ['recurring_frequency', optional(number())],
  transactionType: ['transaction_type', optional(transactionTypeEnumSchema)],
  recurringAmount: ['recurring_amount', optional(number())],
  recurringCurrency: ['recurring_currency', optional(string())],
  recurringExponent: ['recurring_exponent', optional(number())],
  recurringDate: ['recurring_date', optional(string())],
  amountInd: ['amount_ind', optional(amountIndEnumSchema)],
  frequencyInd: ['frequency_ind', optional(string())],
});
