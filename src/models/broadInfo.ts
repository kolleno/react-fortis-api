/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { CategoryEnum, categoryEnumSchema } from './categoryEnum';
import { RecipientsEnum, recipientsEnumSchema } from './recipientsEnum';
import { SeverityEnum, severityEnumSchema } from './severityEnum';
import { SourceEnum, sourceEnumSchema } from './sourceEnum';

/**
 * Until EMV 3DS 2.2.0:
 * Unstructured information sent between the 3DS Server, the DS and the ACS.
 * This field is not required to be filled by the Requestor and the requirements for the presence of this field are DS specific.
 * Starting from EMV 3DS 2.3.1:
 * Structured information sent between the 3DS Server, the DS and the ACS. 2.3.1 structure is defined below. Accepted value length is maximum 4096 characters. This field is optional.
 */
export interface BroadInfo {
  /**
   * Indicates the category/type of information. This field is required.
   * >01 - General
   * >
   * >02 - Certificate expiry
   * >
   * >03 - Fraud alert
   * >
   * >04 - Operational alert
   * >
   * >05 - Transactional data
   * >
   * >06 - Other
   * >
   * >80 through 99 - PS-specific value (dependent on the payment scheme type)
   * >
   */
  category?: CategoryEnum;
  /** Information to be broadcasted to the recipients. Accepted value length is maximum 4000 characters. This field is optional. */
  description?: string;
  /** The date after which the relevance of the broadcasted information (e.g., ceritifacte expiration dates) expires. The accepted value length is 8 characters. The accepted format is YYYYMMDD. */
  expireDate?: string;
  /**
   * Indicates the importance/severity level of the broadcasted information. This field is required.
   * >01 - Critical. Immediate action to be taken by recipient
   * >
   * >02 - Major. Major impact; Upcoming action to be taken by recipient
   * >
   * >03 - Minor. Minor impact; Upcoming action to be taken by recipient
   * >
   * >04 - Informational. Informational only with no immediate action by recipient
   * >
   */
  severity?: SeverityEnum;
  /**
   * Indicates the intended recipient(s) of the broadcasted information. This field is required.
   * >01 - 3DS SDK
   * >
   * >02 - 3DS Server
   * >
   * >03 - DS
   * >
   * >04 - ACS
   * >
   */
  recipients?: RecipientsEnum;
  /**
   * Indicates the source of the broadcasted information. This field is required.
   * >01 - 3DS Server
   * >
   * >02 - DS
   * >
   * >03 - ACS
   * >
   */
  source?: SourceEnum;
  [key: string]: unknown;
}

export const broadInfoSchema: Schema<BroadInfo> = expandoObject({
  category: ['category', optional(categoryEnumSchema)],
  description: ['description', optional(string())],
  expireDate: ['expire_date', optional(string())],
  severity: ['severity', optional(severityEnumSchema)],
  recipients: ['recipients', optional(recipientsEnumSchema)],
  source: ['source', optional(sourceEnumSchema)],
});
