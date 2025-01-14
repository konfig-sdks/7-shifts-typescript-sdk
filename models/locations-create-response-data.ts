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
 * @interface LocationsCreateResponseData
 */
export interface LocationsCreateResponseData {
    /**
     * Location ID
     * @type {number}
     * @memberof LocationsCreateResponseData
     */
    'id': number;
    /**
     * Company ID
     * @type {number}
     * @memberof LocationsCreateResponseData
     */
    'company_id': number;
    /**
     * Location name
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'name': string;
    /**
     * Country
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'country': string;
    /**
     * State or province
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'state': string | null;
    /**
     * City
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'city': string | null;
    /**
     * Full formatted address
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'formatted_address': string | null;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationsCreateResponseData
     */
    'lat'?: number | null;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationsCreateResponseData
     */
    'lng'?: number | null;
    /**
     * Internal use
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'place_id': string | null;
    /**
     * Timezone. Valid zone info name
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'timezone': string;
    /**
     * Internal use
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'timezone_updated'?: boolean | null;
    /**
     * Internal use
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'hash': string;
    /**
     * Internal use
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'mapping_id'?: string | null;
    /**
     * When true, department based budgeting is enabled
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'department_based_budget': boolean | null;
    /**
     * When true, holiday pay is enabled
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'holiday_pay'?: boolean;
    /**
     * Time the log book is automatically send
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'auto_send_log_book_time'?: string | null;
    /**
     * Sunday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'sun_hours_close': string;
    /**
     * Monday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'mon_hours_close': string;
    /**
     * Tuesday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'tue_hours_close': string;
    /**
     * Wednesday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'wed_hours_close': string;
    /**
     * Thursday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'thu_hours_close': string;
    /**
     * Friday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'fri_hours_close': string;
    /**
     * Saturday closing time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'sat_hours_close': string;
    /**
     * Sunday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'sun_hours_open': string | null;
    /**
     * Monday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'mon_hours_open': string | null;
    /**
     * Tuesday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'tue_hours_open': string | null;
    /**
     * Wednesday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'wed_hours_open': string | null;
    /**
     * Thursday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'thu_hours_open': string | null;
    /**
     * Friday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'fri_hours_open': string | null;
    /**
     * Saturday opening time
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'sat_hours_open': string | null;
    /**
     * If true, location is closed on Sunday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'sun_is_closed': boolean | null;
    /**
     * If true, location is closed on Monday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'mon_is_closed': boolean | null;
    /**
     * If true, location is closed on Tuesday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'tue_is_closed': boolean | null;
    /**
     * If true, location is closed on Wednesday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'wed_is_closed': boolean | null;
    /**
     * If true, location is closed on Thursday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'thu_is_closed': boolean | null;
    /**
     * If true, location is closed on Friday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'fri_is_closed': boolean | null;
    /**
     * If true, location is closed on Saturday
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'sat_is_closed': boolean | null;
    /**
     * If true end of shift feedback requests are enabled
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'shift_feedback': boolean;
    /**
     * Message visible to all employees
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'message': string | null;
    /**
     * If true the location is deleted
     * @type {boolean}
     * @memberof LocationsCreateResponseData
     */
    'deleted'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'created': string;
    /**
     * 
     * @type {string}
     * @memberof LocationsCreateResponseData
     */
    'modified': string;
}

