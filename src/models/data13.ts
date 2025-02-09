/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Data13 {
  /** Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction. */
  threeDsServerTransId?: string;
  /**
   * Indicates whether a transaction qualifies as an authenticated transaction.  "D" and "I" are also applicable if the 3DS Server has initiated authentication with EMV 3DS 2.2.0 version or greater
   * >Y - Authentication / Account verification successful
   * >
   * >N - Not authenticated / Account not verified; Transaction denied
   * >
   * >U - Authentication / Account verification could not be performed; technical or other problem
   * >
   * >C - In order to complete the authentication, a challenge is required
   * >
   * >R - Authentication / Account verification Rejected. Issuer is rejecting authentication/verification and request that authorization not be attempted
   * >
   * >A - Attempts processing performed; Not authenticated / verified, but a proof of attempt authentication / verification is provided
   * >
   * >D - In order to complete the authentication, a challenge is required. Decoupled Authentication confirmed
   * >
   * >I - Informational Only; 3DS Requestor challenge preference acknowledged
   * >
   */
  transactionStatus?: string;
  /** Universally unique transaction identifier assigned by the DS to identify a single transaction. */
  dsTransId?: string;
  /** Universally unique transaction identifier assigned by the ACS to identify a single transaction. */
  acsTransId?: string;
  /**
   * Protocol version identifier This shall be the Protocol Version Number of the specification utilised by the system creating this message.
   * The Message Version Number is set by the 3DS Server which originates the protocol with the AReq message. The Message Version Number does not change during a 3DS transaction.
   */
  messageVersion?: string;
  /** Payment System-specific value provided as part of the ACS registration for each supported DS. Authentication Value may be used to provide proof of authentication. */
  authenticationValue?: string;
  /** Payment System-specific value provided by the ACS to indicate the results of the attempt to authenticate the Cardholder. */
  eci?: string;
  [key: string]: unknown;
}

export const data13Schema: Schema<Data13> = expandoObject({
  threeDsServerTransId: ['three_ds_server_trans_id', optional(string())],
  transactionStatus: ['transaction_status', optional(string())],
  dsTransId: ['ds_trans_id', optional(string())],
  acsTransId: ['acs_trans_id', optional(string())],
  messageVersion: ['message_version', optional(string())],
  authenticationValue: ['authentication_value', optional(string())],
  eci: ['eci', optional(string())],
});
