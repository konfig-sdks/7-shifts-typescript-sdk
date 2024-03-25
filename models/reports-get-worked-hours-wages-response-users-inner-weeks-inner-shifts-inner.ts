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

import { ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInnerComplianceExceptionsInner } from './reports-get-worked-hours-wages-response-users-inner-weeks-inner-shifts-inner-compliance-exceptions-inner';
import { ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInnerTotal } from './reports-get-worked-hours-wages-response-users-inner-weeks-inner-shifts-inner-total';

/**
 * 
 * @export
 * @interface ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
 */
export interface ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner {
    /**
     * User ID
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'user_id'?: number;
    /**
     * Date and time the shift or time punch started on
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'date'?: string;
    /**
     * Work week the shift or time punch occurred in
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'week_label'?: string;
    /**
     * Formatted day the shift or time punch started on
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'day_label'?: string;
    /**
     * Start and end times of shift or time punch
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'label'?: string;
    /**
     * Breaks
     * @type {Array<string>}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'breaks'?: Array<string>;
    /**
     * Location ID
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'location_id'?: number;
    /**
     * Location name
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'location_label'?: string;
    /**
     * Role ID
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'role_id'?: number;
    /**
     * Role name
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'role_label'?: string;
    /**
     * Hourly wage
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'wage'?: number;
    /**
     * Shift flag (late, no-show, sick)
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'status'?: number;
    /**
     * Whether the employee was salaried during this shift
     * @type {boolean}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'salaried'?: boolean;
    /**
     * Compliance exceptions for the shift
     * @type {Array<ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInnerComplianceExceptionsInner>}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'compliance_exceptions'?: Array<ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInnerComplianceExceptionsInner>;
    /**
     * 
     * @type {ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInnerTotal}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInner
     */
    'total'?: ReportsGetWorkedHoursWagesResponseUsersInnerWeeksInnerShiftsInnerTotal;
}
