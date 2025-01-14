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

import { TimeOffList200ResponseDataInnerHoursInner } from './time-off-list200-response-data-inner-hours-inner';

/**
 * 
 * @export
 * @interface TimeOffList200ResponseDataInner
 */
export interface TimeOffList200ResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof TimeOffList200ResponseDataInner
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffList200ResponseDataInner
     */
    'user_id': number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffList200ResponseDataInner
     */
    'company_id': number;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'from_date': string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'to_date': string;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOffList200ResponseDataInner
     */
    'partial': boolean;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'partial_from': string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'partial_to': string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'comments': string;
    /**
     * 
     * @type {number}
     * @memberof TimeOffList200ResponseDataInner
     */
    'status': number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffList200ResponseDataInner
     */
    'status_action_user_id': number | null;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'status_action_message': string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'category': string;
    /**
     * 
     * @type {string}
     * @memberof TimeOffList200ResponseDataInner
     */
    'created': string;
    /**
     * 
     * @type {number}
     * @memberof TimeOffList200ResponseDataInner
     */
    'amount_of_hours': number;
    /**
     * 
     * @type {Array<TimeOffList200ResponseDataInnerHoursInner>}
     * @memberof TimeOffList200ResponseDataInner
     */
    'hours': Array<TimeOffList200ResponseDataInnerHoursInner>;
}

