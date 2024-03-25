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

import { TaskManagementCreateTaskListTemplateRequestAssignmentsInner } from './task-management-create-task-list-template-request-assignments-inner';
import { TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner } from './task-management-create-task-list-template-request-task-templates-inner';
import { TaskManagementGetTaskListTemplateResponseDataDue } from './task-management-get-task-list-template-response-data-due';
import { TaskManagementGetTaskListTemplateResponseDataTimeFrame } from './task-management-get-task-list-template-response-data-time-frame';

/**
 * 
 * @export
 * @interface TaskManagementGetTaskListTemplateResponseData
 */
export interface TaskManagementGetTaskListTemplateResponseData {
    /**
     * 
     * @type {string}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'description': string | null;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'company_id': number;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'uuid': string;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'status': number;
    /**
     * 
     * @type {TaskManagementGetTaskListTemplateResponseDataDue}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'due'?: TaskManagementGetTaskListTemplateResponseDataDue | null;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'created': string | null;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'activated_at': string | null;
    /**
     * 
     * @type {Array<TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner>}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'task_templates': Array<TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner>;
    /**
     * 
     * @type {Array<TaskManagementCreateTaskListTemplateRequestAssignmentsInner>}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'assignments': Array<TaskManagementCreateTaskListTemplateRequestAssignmentsInner>;
    /**
     * recurrence rules as defined by the RFC 5545 spec
     * @type {string}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'recurrence': string;
    /**
     * 
     * @type {TaskManagementGetTaskListTemplateResponseDataTimeFrame}
     * @memberof TaskManagementGetTaskListTemplateResponseData
     */
    'time_frame'?: TaskManagementGetTaskListTemplateResponseDataTimeFrame | null;
}
