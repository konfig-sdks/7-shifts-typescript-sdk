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

import { TimeOffGetSettings200ResponseCategoriesInner } from './time-off-get-settings200-response-categories-inner';

/**
 * 
 * @export
 * @interface TimeOffSetTimeOffSettings200Response
 */
export interface TimeOffSetTimeOffSettings200Response {
    /**
     * 
     * @type {number}
     * @memberof TimeOffSetTimeOffSettings200Response
     */
    'company_id': number;
    /**
     * 
     * @type {boolean}
     * @memberof TimeOffSetTimeOffSettings200Response
     */
    'time_off_request_comment': boolean;
    /**
     * 
     * @type {number}
     * @memberof TimeOffSetTimeOffSettings200Response
     */
    'time_off_request_notice': number;
    /**
     * 
     * @type {Array<TimeOffGetSettings200ResponseCategoriesInner>}
     * @memberof TimeOffSetTimeOffSettings200Response
     */
    'categories': Array<TimeOffGetSettings200ResponseCategoriesInner>;
}

