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
import { SentMessage } from "./sentMessage";

export type PushMessageResponse = {
  /**
   * Array of sent messages.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#send-push-message-response">sentMessages Documentation</a>
   */
  sentMessages: Array<SentMessage> /**/;
};
