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
 * @interface ExternalUserMappingsCreateMappingResponseData
 */
export interface ExternalUserMappingsCreateMappingResponseData {
    /**
     * Mapping ID
     * @type {number}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'id': number;
    /**
     * User ID in 7Shifts
     * @type {number}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'user_id': number | null;
    /**
     * User ID in External System
     * @type {string}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'external_user_id': string | null;
    /**
     * Company ID
     * @type {number}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'company_id': number | null;
    /**
     * Location ID
     * @type {number}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'location_id': number | null;
    /**
     * Name key of the application this mapping is connected with
     * @type {string}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'application_name': string;
    /**
     * The ISO8601 date and time in UTC when the mapping was created
     * @type {string}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'created': string | null;
    /**
     * The ISO8601 date and time in UTC when the mapping was modified
     * @type {string}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'modified': string | null;
    /**
     * Boolean indicating whether the mapped 7Shift user is currently active
     * @type {boolean}
     * @memberof ExternalUserMappingsCreateMappingResponseData
     */
    'user_active': boolean;
}

