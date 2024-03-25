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
 * @interface ReportsGetDailyStatsResponseDataSummary
 */
export interface ReportsGetDailyStatsResponseDataSummary {
    /**
     * The current actual sales in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_actual_sales'?: number;
    /**
     * The current projected sales in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_projected_sales'?: number;
    /**
     * The past actual sales in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'past_actual_sales'?: number;
    /**
     * The past projected sales in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'past_projected_sales'?: number;
    /**
     * The current actual labor in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_actual_labor'?: number;
    /**
     * The current projected labor in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_projected_labor'?: number;
    /**
     * The past actual labor in cents
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'past_actual_labor'?: number;
    /**
     * The current labor ratio
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_labor_ratio'?: number;
    /**
     * The current labor target
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_labor_target'?: number;
    /**
     * The current labor ratio
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'past_labor_ratio'?: number;
    /**
     * The current sales per man hour
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'current_spmh'?: number;
    /**
     * The past sales per man hour
     * @type {number}
     * @memberof ReportsGetDailyStatsResponseDataSummary
     */
    'past_spmh'?: number;
}
