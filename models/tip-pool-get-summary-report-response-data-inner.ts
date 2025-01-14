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

import { TipPoolGetSummaryReportResponseDataInnerAssignedTipsInner } from './tip-pool-get-summary-report-response-data-inner-assigned-tips-inner';
import { TipPoolGetSummaryReportResponseDataInnerTotal } from './tip-pool-get-summary-report-response-data-inner-total';
import { TipPoolGetSummaryReportResponseDataInnerUnassignedTips } from './tip-pool-get-summary-report-response-data-inner-unassigned-tips';

/**
 * 
 * @export
 * @interface TipPoolGetSummaryReportResponseDataInner
 */
export interface TipPoolGetSummaryReportResponseDataInner {
    /**
     * The tip pool UUID
     * @type {string}
     * @memberof TipPoolGetSummaryReportResponseDataInner
     */
    'tip_pool_uuid': string;
    /**
     * The tip pool name
     * @type {string}
     * @memberof TipPoolGetSummaryReportResponseDataInner
     */
    'tip_pool_name': string;
    /**
     * 
     * @type {TipPoolGetSummaryReportResponseDataInnerUnassignedTips}
     * @memberof TipPoolGetSummaryReportResponseDataInner
     */
    'unassigned_tips': TipPoolGetSummaryReportResponseDataInnerUnassignedTips;
    /**
     * 
     * @type {Array<TipPoolGetSummaryReportResponseDataInnerAssignedTipsInner>}
     * @memberof TipPoolGetSummaryReportResponseDataInner
     */
    'assigned_tips': Array<TipPoolGetSummaryReportResponseDataInnerAssignedTipsInner>;
    /**
     * 
     * @type {TipPoolGetSummaryReportResponseDataInnerTotal}
     * @memberof TipPoolGetSummaryReportResponseDataInner
     */
    'total': TipPoolGetSummaryReportResponseDataInnerTotal;
}

