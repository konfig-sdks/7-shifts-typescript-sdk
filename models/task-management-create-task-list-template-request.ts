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
import { TaskManagementCreateTaskListTemplateRequestDue } from './task-management-create-task-list-template-request-due';
import { TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner } from './task-management-create-task-list-template-request-task-templates-inner';
import { TaskManagementCreateTaskListTemplateRequestTimeFrame } from './task-management-create-task-list-template-request-time-frame';

/**
 * 
 * @export
 * @interface TaskManagementCreateTaskListTemplateRequest
 */
export interface TaskManagementCreateTaskListTemplateRequest {
    /**
     * 
     * @type {string}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'description'?: string;
    /**
     * recurrence rules as defined by the RFC 5545 spec
     * @type {string}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'recurrence': string;
    /**
     * 
     * @type {Array<TaskManagementCreateTaskListTemplateRequestAssignmentsInner>}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'assignments': Array<TaskManagementCreateTaskListTemplateRequestAssignmentsInner>;
    /**
     * 
     * @type {TaskManagementCreateTaskListTemplateRequestDue}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'due'?: TaskManagementCreateTaskListTemplateRequestDue | null;
    /**
     * 
     * @type {TaskManagementCreateTaskListTemplateRequestTimeFrame}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'time_frame'?: TaskManagementCreateTaskListTemplateRequestTimeFrame | null;
    /**
     * 
     * @type {Array<TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner>}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'task_templates'?: Array<TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner> | null;
    /**
     * 
     * @type {number}
     * @memberof TaskManagementCreateTaskListTemplateRequest
     */
    'status'?: number;
}

