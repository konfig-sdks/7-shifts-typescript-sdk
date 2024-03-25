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
 * @interface TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
 */
export interface TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf {
    /**
     * 
     * @type {Array<string>}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'sales_filters'?: Array<string>;
    /**
     * Filtered sales in cents
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'filtered_sales'?: number;
    /**
     * Sales contribution percertage
     * @type {Array<number>}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'sales_contribution_percent'?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'tips_filters'?: Array<string>;
    /**
     * Filtered tips in cents
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'filtered_tips'?: number;
    /**
     * Sales contribution percertage
     * @type {Array<number>}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'tips_contribution_percent'?: Array<number>;
    /**
     * The amount of hours worked
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'hours_worked'?: number;
    /**
     * Tip in amount (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'tip_in'?: number;
    /**
     * Tip out amount (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'tip_out'?: number;
    /**
     * The net sales (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'net_sales'?: number;
    /**
     * Tips from credit card (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'cc_tips'?: number;
    /**
     * Tips from credit card withheld (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'cc_tips_withheld'?: number;
    /**
     * Auto gratuity tips (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'auto_grat_tips'?: number;
    /**
     * Tips in cash (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'cash_tips'?: number;
    /**
     * Declared tips (in cents)
     * @type {number}
     * @memberof TipPoolGetDetailedReportResponseDataReportRowsInnerTipPoolsInnerUnassignedTipsInnerAllOf
     */
    'declared_tips'?: number;
}

