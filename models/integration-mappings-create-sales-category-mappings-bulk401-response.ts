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
 * @interface IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
 */
export interface IntegrationMappingsCreateSalesCategoryMappingsBulk401Response {
    /**
     * A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
     */
    'title': string;
    /**
     * The primary identifier for the problem type (URI reference).
     * @type {string}
     * @memberof IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
     */
    'type': string;
    /**
     * The HTTP status code.
     * @type {number}
     * @memberof IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
     */
    'status': number;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
     */
    'detail': string;
    /**
     * The error code can be used to look up the reason why the request failed.
     * @type {number}
     * @memberof IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
     */
    'code'?: number;
    /**
     * The request parameter that this error is related to.
     * @type {string}
     * @memberof IntegrationMappingsCreateSalesCategoryMappingsBulk401Response
     */
    'param'?: string;
}

