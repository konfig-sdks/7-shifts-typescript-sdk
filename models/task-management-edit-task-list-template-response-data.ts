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
import { TaskManagementEditTaskListTemplateResponseDataDue } from './task-management-edit-task-list-template-response-data-due';
import { TaskManagementEditTaskListTemplateResponseDataTimeFrame } from './task-management-edit-task-list-template-response-data-time-frame';

/**
 * 
 * @export
 * @interface TaskManagementEditTaskListTemplateResponseData
 */
export interface TaskManagementEditTaskListTemplateResponseData {
    /**
     * 
     * @type {string}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'description': string | null;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'company_id': number;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'uuid': string;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'status': number;
    /**
     * 
     * @type {TaskManagementEditTaskListTemplateResponseDataDue}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'due'?: TaskManagementEditTaskListTemplateResponseDataDue | null;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'created': string | null;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'activated_at': string | null;
    /**
     * 
     * @type {Array<TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner>}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'task_templates': Array<TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner>;
    /**
     * 
     * @type {Array<TaskManagementCreateTaskListTemplateRequestAssignmentsInner>}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'assignments': Array<TaskManagementCreateTaskListTemplateRequestAssignmentsInner>;
    /**
     * recurrence rules as defined by the RFC 5545 spec
     * @type {string}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'recurrence': string;
    /**
     * 
     * @type {TaskManagementEditTaskListTemplateResponseDataTimeFrame}
     * @memberof TaskManagementEditTaskListTemplateResponseData
     */
    'time_frame'?: TaskManagementEditTaskListTemplateResponseDataTimeFrame | null;
}

