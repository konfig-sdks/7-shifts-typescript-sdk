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

import { AuthenticationGetIdentityResponseDataUsersInnerMeta } from './authentication-get-identity-response-data-users-inner-meta';

/**
 * 
 * @export
 * @interface AuthenticationGetIdentityResponseDataUsersInner
 */
export interface AuthenticationGetIdentityResponseDataUsersInner {
    /**
     * User ID
     * @type {number}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'id': number;
    /**
     * Internal use
     * @type {number}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'identity_id'?: number | null;
    /**
     * Company ID
     * @type {number}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'company_id': number;
    /**
     * First Name
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'first_name': string;
    /**
     * Last Name
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'last_name': string;
    /**
     * Preferred first name
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'preferred_first_name'?: string | null;
    /**
     * Preferred last name
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'preferred_last_name'?: string | null;
    /**
     * Pronouns
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'pronouns'?: string | null;
    /**
     * Email Address
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'email': string;
    /**
     * Mobile Number
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'mobile_number': string | null;
    /**
     * Home Number
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'home_number': string | null;
    /**
     * Birthdate. Format YYYY-MM-DD
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'birth_date': string | null;
    /**
     * Address
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'address': string | null;
    /**
     * Zip or postal code
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'postal_zip': string | null;
    /**
     * City
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'city': string | null;
    /**
     * State or province
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'prov_state': string | null;
    /**
     * Invitation status to join 7shifts
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'invite_status': AuthenticationGetIdentityResponseDataUsersInnerInviteStatusEnum;
    /**
     * If true user is active in allowed to login. If false the user has been deactivated/deleted
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'active': boolean;
    /**
     * Photo url
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'photo': string | null;
    /**
     * User notes
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'notes': string | null;
    /**
     * Date hired. YYYY-MM-DD format
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'hire_date': string | null;
    /**
     * Timezone.  Valid zone info name
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'timezone': string | null;
    /**
     * User type
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'type': AuthenticationGetIdentityResponseDataUsersInnerTypeEnum;
    /**
     * Employee ID
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'employee_id': string | null;
    /**
     * Maximum weekly hours user is set to work
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'max_weekly_hours': string;
    /**
     * Value used during clock in/out in 7shifts applications
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'punch_id': string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'modified'?: string;
    /**
     * The date that the user has been sent an invitation to join 7shifts, null if not invited.
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'invited': string | null;
    /**
     * The date that the user accepted their 7shifts invitation, null if not accepted.
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'invite_accepted': string | null;
    /**
     * If true user is new
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'is_new': boolean;
    /**
     * If true user can be assigned shifts. This applies to managers, asst_manager and employers.
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'appear_as_employee'?: boolean;
    /**
     * If true this user is subscribed to updates from 7shifts. This includes announcing new features for 7shifts
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'subscribe_to_updates'?: boolean;
    /**
     * Specified language. In ISO 639-1 format
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'language'?: string;
    /**
     * Are mobile push notifications enabled for the user
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'push'?: boolean;
    /**
     * Current assigned skill level
     * @type {number}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'skill_level'?: number | null;
    /**
     * Users current hourly wage in cents
     * @type {number}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'hourly_wage'?: number | null;
    /**
     * The type of wage the user will receive
     * @type {string}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'wage_type'?: string | null;
    /**
     * If the user should receive sms notifications for shifts
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'sms_me_schedules'?: boolean | null;
    /**
     * Should notifications be sent if the user is at risk of overtime hours
     * @type {boolean}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'notify_ot_risk'?: boolean | null;
    /**
     * The ID of the permission template currently assigned to the user.
     * @type {number}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'permissions_template_id'?: number | null;
    /**
     * 
     * @type {AuthenticationGetIdentityResponseDataUsersInnerMeta}
     * @memberof AuthenticationGetIdentityResponseDataUsersInner
     */
    'meta'?: AuthenticationGetIdentityResponseDataUsersInnerMeta | null;
}

type AuthenticationGetIdentityResponseDataUsersInnerInviteStatusEnum = 'accepted' | 'pending' | 'required' | 'missing_contact_info'
type AuthenticationGetIdentityResponseDataUsersInnerTypeEnum = 'employee' | 'asst_manager' | 'manager' | 'employer'

