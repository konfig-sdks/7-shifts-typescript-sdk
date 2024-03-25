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

import { ShiftsUpdateShiftByIdRequestBreaksInner } from './shifts-update-shift-by-id-request-breaks-inner';

/**
 * 
 * @export
 * @interface ShiftsUpdateShiftByIdRequest
 */
export interface ShiftsUpdateShiftByIdRequest {
    /**
     * Location ID
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'location_id'?: number | null;
    /**
     * User ID
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'user_id'?: number | null;
    /**
     * Department ID. Required if the location uses departments
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'department_id'?: number | null;
    /**
     * Role ID. Required if the location uses roles
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'role_id'?: number | null;
    /**
     * The station assigned to the shift
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'station_id'?: number | null;
    /**
     * Start date time of the shift. UTC in ISO8601 format
     * @type {string}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'start'?: string | null;
    /**
     * End date time of the shift. UTC in ISO8601 format
     * @type {string}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'end'?: string | null;
    /**
     * Set to true if the shift ends at closing time. If set end is not used.
     * @type {boolean}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'close'?: boolean | null;
    /**
     * Set to true if the shift ends at business decline.
     * @type {boolean}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'business_decline'?: boolean | null;
    /**
     * Notes displayed on a shift
     * @type {string}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'notes'?: string | null;
    /**
     * If true the shift is not published.
     * @type {boolean}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'draft'?: boolean | null;
    /**
     * Set to true if the shift is not assigned to any user. Open shifts can be requested by users.
     * @type {boolean}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'open'?: boolean | null;
    /**
     * Set when open is true. Set to 0 when everyone at a location can request an open shift; set to 1 if only offered to specified role.
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'open_offer_type'?: ShiftsUpdateShiftByIdRequestOpenOfferTypeEnum;
    /**
     * When true the shift is unassigned. Internal use only.
     * @type {boolean}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'unassigned'?: boolean | null;
    /**
     * The skill level required for this shift.  * 1: Beginner  * 2: Intermediate  * 3: Experienced 
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'unassigned_skill_level'?: ShiftsUpdateShiftByIdRequestUnassignedSkillLevelEnum;
    /**
     * Shift status type.  * 0: None  * 1: Sick  * 2: No Show  * 3: Late  * 4: Call Out  * 5: Left Late 
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'status'?: ShiftsUpdateShiftByIdRequestStatusEnum;
    /**
     * Number of minutes a user can clock in late after the shift starts.
     * @type {number}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'late_minutes'?: number | null;
    /**
     * Breaks to be updated with the shift
     * @type {Array<ShiftsUpdateShiftByIdRequestBreaksInner>}
     * @memberof ShiftsUpdateShiftByIdRequest
     */
    'breaks'?: Array<ShiftsUpdateShiftByIdRequestBreaksInner> | null;
}

type ShiftsUpdateShiftByIdRequestOpenOfferTypeEnum = 0 | 1 | 2 | 3
type ShiftsUpdateShiftByIdRequestUnassignedSkillLevelEnum = 1 | 2 | 3
type ShiftsUpdateShiftByIdRequestStatusEnum = 0 | 1 | 2 | 3 | 4 | 5

