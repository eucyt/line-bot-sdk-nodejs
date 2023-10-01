/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AudienceGroupType } from "./audienceGroupType";

/**
 * Create audience for uploading user IDs (by JSON)
 */
export type CreateAudienceGroupResponse = {
  /**
   * The audience ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">audienceGroupId Documentation</a>
   */
  audienceGroupId?: number /**/;
  /**
   * How the audience was created.  `MESSAGING_API`: An audience created with Messaging API.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">createRoute Documentation</a>
   */
  createRoute?: CreateAudienceGroupResponse.CreateRouteEnum /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">type Documentation</a>
   */
  type?: AudienceGroupType /**/;
  /**
   * The audience\'s name.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">description Documentation</a>
   */
  description?: string /**/;
  /**
   * When the audience was created (in UNIX time).
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">created Documentation</a>
   */
  created?: number /**/;
  /**
   * Audience\'s update permission. Audiences linked to the same channel will be READ_WRITE.  `READ`: Can use only. `READ_WRITE`: Can use and update.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">permission Documentation</a>
   */
  permission?: CreateAudienceGroupResponse.PermissionEnum /**/;
  /**
   * Time of audience expiration. Only returned for specific audiences.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">expireTimestamp Documentation</a>
   */
  expireTimestamp?: number /**/;
  /**
   * The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:  `true`: Accounts are specified with IFAs. `false` (default): Accounts are specified with user IDs.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group">isIfaAudience Documentation</a>
   */
  isIfaAudience?: boolean /**/;
};

export namespace CreateAudienceGroupResponse {
  export type CreateRouteEnum = "MESSAGING_API";
  export type PermissionEnum = "READ";
  "READ_WRITE";
}
