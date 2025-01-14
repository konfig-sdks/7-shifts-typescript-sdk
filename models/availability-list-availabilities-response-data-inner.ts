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

import { AvailabilityListAvailabilitiesResponseDataInnerOldApprovedData } from './availability-list-availabilities-response-data-inner-old-approved-data';

/**
 * 
 * @export
 * @interface AvailabilityListAvailabilitiesResponseDataInner
 */
export interface AvailabilityListAvailabilitiesResponseDataInner {
    /**
     * Availability ID
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'id': number;
    /**
     * User ID
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'user_id': number;
    /**
     * Company ID
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'company_id': number;
    /**
     * Week date of the availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'week': string | null;
    /**
     * Week to date of the availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'week_to': string | null;
    /**
     * If true, availability is repeating
     * @type {boolean}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'repeat': boolean;
    /**
     * Indicates the status of the availability
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'status': number;
    /**
     * The user ID of the user that approved/declined the availability
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'status_action_user_id': number | null;
    /**
     * The message when the availability was approved/declined
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'status_action_message': string | null;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'mon': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'mon_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'mon_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'mon_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'mon_reason': string;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'tue': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'tue_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'tue_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'tue_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'tue_reason': string;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'wed': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'wed_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'wed_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'wed_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'wed_reason': string;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'thu': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'thu_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'thu_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'thu_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'thu_reason': string;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'fri': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'fri_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'fri_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'fri_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'fri_reason': string;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sat': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sat_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sat_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sat_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sat_reason': string;
    /**
     * The availability status for the day
     * @type {number}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sun': number;
    /**
     * The start time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sun_from': string;
    /**
     * The end time of the availability for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sun_to': string;
    /**
     * Comments included in the days availability
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sun_comments': string | null;
    /**
     * The reason ID for the day
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'sun_reason': string;
    /**
     * The created date of the shift in UTC
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'created': string | null;
    /**
     * The last modified date of the shift in UTC
     * @type {string}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'modified': string | null;
    /**
     * 
     * @type {AvailabilityListAvailabilitiesResponseDataInnerOldApprovedData}
     * @memberof AvailabilityListAvailabilitiesResponseDataInner
     */
    'old_approved_data'?: AvailabilityListAvailabilitiesResponseDataInnerOldApprovedData | null;
}

