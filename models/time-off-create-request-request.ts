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

import { TimeOffCreateRequestRequestHoursInner } from './time-off-create-request-request-hours-inner';

/**
 * 
 * @export
 * @interface TimeOffCreateRequestRequest
 */
export interface TimeOffCreateRequestRequest {
    /**
     * 
     * @type {number}
     * @memberof TimeOffCreateRequestRequest
     */
    'user_id': number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffCreateRequestRequest
     */
    'company_id': number;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'from_date': string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'to_date': string;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOffCreateRequestRequest
     */
    'partial': boolean;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'partial_from'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'partial_to'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'comments'?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeOffCreateRequestRequest
     */
    'status': number;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'category': string;
    /**
     * 
     * @type {Array<TimeOffCreateRequestRequestHoursInner>}
     * @memberof TimeOffCreateRequestRequest
     */
    'hours'?: Array<TimeOffCreateRequestRequestHoursInner>;
    /**
     * 
     * @type {number}
     * @memberof TimeOffCreateRequestRequest
     */
    'status_action_user_id'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffCreateRequestRequest
     */
    'status_action_message'?: string;
}

