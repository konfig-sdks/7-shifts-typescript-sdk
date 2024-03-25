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
 * @interface UserWagesCreateResponseData
 */
export interface UserWagesCreateResponseData {
    /**
     * Wage ID
     * @type {number}
     * @memberof UserWagesCreateResponseData
     */
    'id': number;
    /**
     * The wage effective date. Format YYYY-MM-DD
     * @type {string}
     * @memberof UserWagesCreateResponseData
     */
    'effective_date': string;
    /**
     * Role ID
     * @type {number}
     * @memberof UserWagesCreateResponseData
     */
    'role_id': number | null;
    /**
     * The wage type
     * @type {string}
     * @memberof UserWagesCreateResponseData
     */
    'wage_type': UserWagesCreateResponseDataWageTypeEnum;
    /**
     * The wage value. In cents
     * @type {number}
     * @memberof UserWagesCreateResponseData
     */
    'wage_cents': number;
    /**
     * The created date and time of the wage. Formatted as ISO8601 datetime in UTC timezone.
     * @type {string}
     * @memberof UserWagesCreateResponseData
     */
    'created': string;
    /**
     * The modified date and time of the wage. Formatted as ISO8601 datetime in UTC timezone.
     * @type {string}
     * @memberof UserWagesCreateResponseData
     */
    'modified': string;
}

type UserWagesCreateResponseDataWageTypeEnum = 'hourly' | 'weekly_salary'


