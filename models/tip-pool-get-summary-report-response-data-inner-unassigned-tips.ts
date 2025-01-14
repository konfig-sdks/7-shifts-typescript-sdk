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

import { TipPoolGetSummaryReportResponseDataInnerUnassignedTipsAllOf } from './tip-pool-get-summary-report-response-data-inner-unassigned-tips-all-of';

/**
 * 
 * @export
 * @interface TipPoolGetSummaryReportResponseDataInnerUnassignedTips
 */
export interface TipPoolGetSummaryReportResponseDataInnerUnassignedTips {
    /**
     * The amount of hours worked
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'hours_worked': number;
    /**
     * Tip in amount (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'tip_in': number;
    /**
     * The net sales (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'net_sales'?: number;
    /**
     * Tips from credit card (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'cc_tips'?: number;
    /**
     * Tips from credit card withheld (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'cc_tips_withheld'?: number;
    /**
     * Auto gratuity tips (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'auto_grat_tips'?: number;
    /**
     * Tips in cash (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'cash_tips'?: number;
    /**
     * Declared tips (in cents)
     * @type {number}
     * @memberof TipPoolGetSummaryReportResponseDataInnerUnassignedTips
     */
    'declared_tips'?: number;
}

