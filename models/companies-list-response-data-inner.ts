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

import { CompaniesListResponseDataInnerMeta } from './companies-list-response-data-inner-meta';

/**
 * 
 * @export
 * @interface CompaniesListResponseDataInner
 */
export interface CompaniesListResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof CompaniesListResponseDataInner
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'country': string;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'photo': string | null;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'plan_id': string;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'created': string;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'modified': string | null;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'expires': string | null;
    /**
     * 
     * @type {number}
     * @memberof CompaniesListResponseDataInner
     */
    'days_to_expire': number | null;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'converted': string | null;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'pos': string | null;
    /**
     * 
     * @type {string}
     * @memberof CompaniesListResponseDataInner
     */
    'status': CompaniesListResponseDataInnerStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof CompaniesListResponseDataInner
     */
    'start_week_on': number | null;
    /**
     * 
     * @type {CompaniesListResponseDataInnerMeta}
     * @memberof CompaniesListResponseDataInner
     */
    'meta'?: CompaniesListResponseDataInnerMeta;
}

type CompaniesListResponseDataInnerStatusEnum = 'active' | 'trial' | 'cancelled' | 'delinquent' | 'expired' | 'unknown'


