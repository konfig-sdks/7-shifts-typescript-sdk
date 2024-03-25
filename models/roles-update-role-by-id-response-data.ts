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

import { RolesListResponseDataInnerStationsInner } from './roles-list-response-data-inner-stations-inner';

/**
 * 
 * @export
 * @interface RolesUpdateRoleByIdResponseData
 */
export interface RolesUpdateRoleByIdResponseData {
    /**
     * Role ID
     * @type {number}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'id'?: number;
    /**
     * Company ID
     * @type {number}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'company_id'?: number;
    /**
     * Location ID
     * @type {number}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'location_id'?: number;
    /**
     * Department ID
     * @type {number}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'department_id'?: number;
    /**
     * A hex number representing the color
     * @type {string}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'color'?: string | null;
    /**
     * The number of stations this role contains
     * @type {number}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'num_stations'?: number;
    /**
     * Role name
     * @type {string}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'name'?: string;
    /**
     * Job code
     * @type {string}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'job_code'?: string | null;
    /**
     * The order in which the roles will be listed in the web app
     * @type {number}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'sort'?: number | null;
    /**
     * 
     * @type {Array<RolesListResponseDataInnerStationsInner>}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'stations'?: Array<RolesListResponseDataInnerStationsInner>;
    /**
     * The ISO8601 date and time in UTC when the role was created
     * @type {string}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'created'?: string | null;
    /**
     * The ISO8601 date and time in UTC when the role was modified
     * @type {string}
     * @memberof RolesUpdateRoleByIdResponseData
     */
    'modified'?: string | null;
}
