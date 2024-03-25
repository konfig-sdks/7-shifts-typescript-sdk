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
 * Hours and pay info for a shift or group of shifts
 * @export
 * @interface ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
 */
export interface ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal {
    /**
     * Regular hours
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'regular_hours': number;
    /**
     * Regular pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'regular_pay': number;
    /**
     * Overtime hours
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'overtime_hours': number;
    /**
     * Premium / Double overtime hours
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'premium_overtime_hours'?: number;
    /**
     * Daily + Weekly + Consecutive overtime hours
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'non_premium_overtime_hours'?: number;
    /**
     * Overtime pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'overtime_pay': number;
    /**
     * Premium / Double overtime pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'premium_overtime_pay'?: number;
    /**
     * Daily + Weekly + Consecutive overtime pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'non_premium_overtime_pay'?: number;
    /**
     * Holiday hours
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'holiday_hours': number;
    /**
     * Holiday pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'holiday_pay': number;
    /**
     * Compliance exceptions pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'compliance_exceptions_pay': number;
    /**
     * Total hours
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'total_hours': number;
    /**
     * Total pay
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'total_pay': number;
    /**
     * Tips declared by employee through 7punches
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'total_tips': number;
    /**
     * Cash tips
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'cash_tips': number;
    /**
     * Credit card tips
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'credit_card_tips': number;
    /**
     * Total payment tips
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'total_payment_tips': number;
    /**
     * Declared tips either from 7punches or POS
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'declared_tips': number;
    /**
     * Declared tips from POS
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'pos_declared_tips'?: number;
    /**
     * Autogratuity
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'auto_gratuity': number;
    /**
     * Withheld CC amount
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'withheld_cc_amount': number;
    /**
     * Tip in amount
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'tip_in': number;
    /**
     * Tip out amount
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'tip_out': number;
    /**
     * Earned Tips
     * @type {number}
     * @memberof ReportsGetWorkedHoursWagesResponseUsersInnerRolesInnerTotal
     */
    'earned_tips': number;
}
