/*
7shifts API

7shifts is a team management software designed for restaurants. We help managers and operators spend less time and effort scheduling their staff, reduce their monthly labor costs and improve team communication. The result is simplified team management, one shift at a time.

7shifts also offers free mobile apps (iOS and Android) allowing managers and employees to have everything at their fingertips.

Start your free trial or request a demo at www.7shifts.com.

The version of the OpenAPI document: 2023-05-01
Contact: api-support@7shifts.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WebhooksListResponseDataInner
 */
export interface WebhooksListResponseDataInner {
    /**
     * Webhook ID
     * @type {number}
     * @memberof WebhooksListResponseDataInner
     */
    'id': number;
    /**
     * Company ID
     * @type {number}
     * @memberof WebhooksListResponseDataInner
     */
    'company_id': number;
    /**
     * Webhook URL
     * @type {string}
     * @memberof WebhooksListResponseDataInner
     */
    'url': string;
    /**
     * Webhook method
     * @type {string}
     * @memberof WebhooksListResponseDataInner
     */
    'method': WebhooksListResponseDataInnerMethodEnum;
    /**
     * Webhook event
     * @type {string}
     * @memberof WebhooksListResponseDataInner
     */
    'event': string;
    /**
     * Webhook create date time. UTC date time in ISO8601 format
     * @type {string}
     * @memberof WebhooksListResponseDataInner
     */
    'created': string;
    /**
     * Webhook modified date time. UTC date time in ISO8601 format
     * @type {string}
     * @memberof WebhooksListResponseDataInner
     */
    'modified': string;
}

type WebhooksListResponseDataInnerMethodEnum = 'post' | 'get' | 'put' | 'patch' | 'delete'


