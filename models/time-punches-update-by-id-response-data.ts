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

import { TimePunchesUpdateByIdResponseDataBreaksInner } from './time-punches-update-by-id-response-data-breaks-inner';

/**
 * 
 * @export
 * @interface TimePunchesUpdateByIdResponseData
 */
export interface TimePunchesUpdateByIdResponseData {
    /**
     * Time punch ID
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'id': number;
    /**
     * Shift ID. Can be unassigned
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'shift_id': number;
    /**
     * The 7shifts ID of the user who is clocking in.
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'user_id': number;
    /**
     * If true the time punch can be edited by a manager. Set to false via POS integrations
     * @type {boolean}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'editable_punch': boolean;
    /**
     * Role ID
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'role_id': number;
    /**
     * Company ID
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'company_id': number;
    /**
     * Location ID
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'location_id': number;
    /**
     * Department ID. Defaults to 0 if not defined.
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'department_id'?: number | null;
    /**
     * Calculated hourly wage. Use the users_wages endpoint value for accuracy
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'hourly_wage': number;
    /**
     * If true the time punch is approved
     * @type {boolean}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'approved': boolean;
    /**
     * The start date and time when the user clocked in. Formatted as ISO8601 datetime in UTC timezone.
     * @type {string}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'clocked_in': string;
    /**
     * The start date and time when the user clocked out. Formatted as ISO8601 datetime in UTC timezone.
     * @type {string}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'clocked_out': string | null;
    /**
     * Additional notes for a shift
     * @type {string}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'notes': string;
    /**
     * If true the time punch was auto clocked out
     * @type {boolean}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'auto_clocked_out': boolean;
    /**
     * If true the time punch was clocked in offline
     * @type {boolean}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'clocked_in_offline': boolean;
    /**
     * If true the time punch was clocked out offline
     * @type {boolean}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'clocked_out_offline': boolean;
    /**
     * Tips declared for the shift in cents
     * @type {number}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'tips': number;
    /**
     * The source of the time punch. 7shift apps will be web
     * @type {string}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'pos_type'?: string | null;
    /**
     * 
     * @type {Array<TimePunchesUpdateByIdResponseDataBreaksInner>}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'breaks'?: Array<TimePunchesUpdateByIdResponseDataBreaksInner>;
    /**
     * The date and time when created. Formatted as ISO8601 datetime in UTC timezone.
     * @type {string}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'created': string | null;
    /**
     * The date and time when last modified. Formatted as ISO8601 datetime in UTC timezone.
     * @type {string}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'modified': string | null;
    /**
     * If true the time punch is deleted
     * @type {boolean}
     * @memberof TimePunchesUpdateByIdResponseData
     */
    'deleted'?: boolean;
}

