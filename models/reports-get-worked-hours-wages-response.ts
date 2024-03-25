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

import { ReportsGetWorkedHoursWagesResponseTotal } from './reports-get-worked-hours-wages-response-total';
import { ReportsGetWorkedHoursWagesResponseUsersInner } from './reports-get-worked-hours-wages-response-users-inner';

/**
 * 
 * @export
 * @interface ReportsGetWorkedHoursWagesResponse
 */
export interface ReportsGetWorkedHoursWagesResponse {
    /**
     * Report data for each employee
     * @type {Array<ReportsGetWorkedHoursWagesResponseUsersInner>}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'users': Array<ReportsGetWorkedHoursWagesResponseUsersInner>;
    /**
     * Whether compliance exceptions and their costs should be shown
     * @type {boolean}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'show_exception_costs': boolean;
    /**
     * Whether tips from integrations should be shown
     * @type {boolean}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'tip_tracking_enabled': boolean;
    /**
     * Whether we should render the tips column
     * @type {boolean}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'show_tips': boolean;
    /**
     * 
     * @type {ReportsGetWorkedHoursWagesResponseTotal}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'total': ReportsGetWorkedHoursWagesResponseTotal;
    /**
     * Start date of report date range
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'start': string;
    /**
     * End date of report date range
     * @type {string}
     * @memberof ReportsGetWorkedHoursWagesResponse
     */
    'end': string;
}

