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
 * @interface ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner
 */
export interface ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner {
    /**
     * Department ID
     * @type {number}
     * @memberof ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner
     */
    'department_id'?: number | null;
    /**
     * Starting date/time (UTC) of the interval for which you wish to update the sales projection.
     * @type {string}
     * @memberof ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner
     */
    'start': string;
    /**
     * Ending date/time (UTC) of the interval for which you wish to update the sales projection.
     * @type {string}
     * @memberof ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner
     */
    'end': string;
    /**
     * Override value. Currency value in cents. Only whole dollars are accepted.
     * @type {number}
     * @memberof ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner
     */
    'value': number;
    /**
     * Type of value to override. Default is sales
     * @type {string}
     * @memberof ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner
     */
    'report_type'?: ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInnerReportTypeEnum;
}

type ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInnerReportTypeEnum = 'sales'


