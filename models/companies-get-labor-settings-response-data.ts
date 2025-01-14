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
 * @interface CompaniesGetLaborSettingsResponseData
 */
export interface CompaniesGetLaborSettingsResponseData {
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'company_id': number;
    /**
     * Number of consecutive days threshold an employee works before overtime
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'consecutive_days_threshold': number | null;
    /**
     * The overtime pay multiplier
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'consecutive_days_multiplier': number | null;
    /**
     * When true, the regular rate of pay considers the number of hours worked at different pay rates while calculating overtime
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'regular_rate_of_pay_enabled': boolean;
    /**
     * When true, exception costs are displayed in reports
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'exception_cost_enabled': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'overtime_by_location_enabled': boolean;
    /**
     * When true, use break conditions to alter labor costs and hour
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'auto_break_enabled': boolean;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'auto_break_hours': number;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'auto_break_minutes': number;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'auto_break_hours_2': number;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'auto_break_minutes_2': number;
    /**
     * 
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'overtime_enabled': boolean;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'daily_overtime_threshold': number;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'daily_overtime_multiplier': number;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'premium_overtime_threshold': number | null;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'premium_overtime_multiplier': number | null;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'weekly_overtime_threshold': number;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'weekly_overtime_multiplier': number;
    /**
     * 
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'ot_alerts_enabled': boolean;
    /**
     * 
     * @type {number}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'ot_alerts_buffer_minutes': number | null;
    /**
     * 
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'split_hours_on_holidays': boolean;
    /**
     * When true, allows employees to have a separate wage for
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'wage_based_roles_enabled': boolean;
    /**
     * 
     * @type {string}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'jurisdiction': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'is_custom': boolean;
    /**
     * When true, minimum wage will be used when calculating overtime pay
     * @type {boolean}
     * @memberof CompaniesGetLaborSettingsResponseData
     */
    'use_jurisdiction_minimum_wage_for_ot': boolean;
}

