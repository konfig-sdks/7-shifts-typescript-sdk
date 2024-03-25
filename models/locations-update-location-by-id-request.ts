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
 * @interface LocationsUpdateLocationByIdRequest
 */
export interface LocationsUpdateLocationByIdRequest {
    /**
     * Location name
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'name'?: string;
    /**
     * City
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'city'?: string | null;
    /**
     * Country
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'country'?: string;
    /**
     * State or province
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'state'?: string | null;
    /**
     * If true end of shift feedback requests are enabled
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'shift_feedback'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'formatted_address'?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'lat'?: number;
    /**
     * 
     * @type {number}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'lng'?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'place_id'?: string | null;
    /**
     * Timezone. Valid zone info name
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'timezone'?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'hash'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'department_based_budget'?: boolean;
    /**
     * When true, holiday pay is enabled
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'holiday_pay'?: boolean | null;
    /**
     * A timestamp with hh:mm:ss format
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'auto_send_log_book_time'?: string;
    /**
     * Sunday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'sun_hours_close'?: string | null;
    /**
     * Monday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'mon_hours_close'?: string | null;
    /**
     * Tuesday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'tue_hours_close'?: string | null;
    /**
     * Wednesday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'wed_hours_close'?: string | null;
    /**
     * Thursday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'thu_hours_close'?: string | null;
    /**
     * Friday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'fri_hours_close'?: string | null;
    /**
     * Saturday closing time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'sat_hours_close'?: string | null;
    /**
     * Sunday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'sun_hours_open'?: string | null;
    /**
     * Monday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'mon_hours_open'?: string | null;
    /**
     * Tuesday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'tue_hours_open'?: string | null;
    /**
     * Wednesday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'wed_hours_open'?: string | null;
    /**
     * Thursday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'thu_hours_open'?: string | null;
    /**
     * Friday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'fri_hours_open'?: string | null;
    /**
     * Saturday opening time
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'sat_hours_open'?: string | null;
    /**
     * If true, location is closed on Sunday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'sun_is_closed'?: boolean | null;
    /**
     * If true, location is closed on Monday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'mon_is_closed'?: boolean | null;
    /**
     * If true, location is closed on Tuesday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'tue_is_closed'?: boolean | null;
    /**
     * If true, location is closed on Wednesday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'wed_is_closed'?: boolean | null;
    /**
     * If true, location is closed on Thursday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'thu_is_closed'?: boolean | null;
    /**
     * If true, location is closed on Friday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'fri_is_closed'?: boolean | null;
    /**
     * If true, location is closed on Saturday
     * @type {boolean}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'sat_is_closed'?: boolean | null;
    /**
     * Message visible to all employees
     * @type {string}
     * @memberof LocationsUpdateLocationByIdRequest
     */
    'message'?: string;
}
