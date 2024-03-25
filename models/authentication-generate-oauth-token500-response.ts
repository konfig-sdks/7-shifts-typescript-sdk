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
 * @interface AuthenticationGenerateOAuthToken500Response
 */
export interface AuthenticationGenerateOAuthToken500Response {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationGenerateOAuthToken500Response
     */
    'error'?: AuthenticationGenerateOAuthToken500ResponseErrorEnum;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationGenerateOAuthToken500Response
     */
    'error_description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationGenerateOAuthToken500Response
     */
    'hint'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationGenerateOAuthToken500Response
     */
    'message'?: string;
}

type AuthenticationGenerateOAuthToken500ResponseErrorEnum = 'invalid_request' | 'invalid_client' | 'invalid_scope' | 'invalid_credentials' | 'invalid_grant' | 'unsupported_grant_type' | 'access_denied' | 'server_error'

