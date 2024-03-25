/*
7shifts API

7shifts is a team management software designed for restaurants. We help managers and operators spend less time and effort scheduling their staff, reduce their monthly labor costs and improve team communication. The result is simplified team management, one shift at a time.

7shifts also offers free mobile apps (iOS and Android) allowing managers and employees to have everything at their fingertips.

Start your free trial or request a demo at www.7shifts.com.

The version of the OpenAPI document: 2023-05-01
Contact: api-support@7shifts.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AccountApi,
  AuthenticationApi,
  AvailabilityApi,
  CompaniesApi,
  DayPartApi,
  DepartmentsApi,
  EngageApi,
  ExternalUserMappingsApi,
  ForecastOverridesApi,
  IntegrationMappingsApi,
  LocationsApi,
  LogBookApi,
  ReceiptsApi,
  ReportsApi,
  RolesApi,
  ScheduleEnforcementApi,
  ScheduleEventsApi,
  ShiftFeedbackApi,
  ShiftsApi,
  TaskManagementApi,
  TimeOffApi,
  TimePunchesApi,
  TipPoolApi,
  UserAssignmentsApi,
  UserWagesApi,
  UsersApi,
  WebhooksApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { Client7ShiftsCustom } from "./client-custom";

export class Client7Shifts extends Client7ShiftsCustom {
  readonly account: AccountApi;
  readonly authentication: AuthenticationApi;
  readonly availability: AvailabilityApi;
  readonly companies: CompaniesApi;
  readonly dayPart: DayPartApi;
  readonly departments: DepartmentsApi;
  readonly engage: EngageApi;
  readonly externalUserMappings: ExternalUserMappingsApi;
  readonly forecastOverrides: ForecastOverridesApi;
  readonly integrationMappings: IntegrationMappingsApi;
  readonly locations: LocationsApi;
  readonly logBook: LogBookApi;
  readonly receipts: ReceiptsApi;
  readonly reports: ReportsApi;
  readonly roles: RolesApi;
  readonly scheduleEnforcement: ScheduleEnforcementApi;
  readonly scheduleEvents: ScheduleEventsApi;
  readonly shiftFeedback: ShiftFeedbackApi;
  readonly shifts: ShiftsApi;
  readonly taskManagement: TaskManagementApi;
  readonly timeOff: TimeOffApi;
  readonly timePunches: TimePunchesApi;
  readonly tipPool: TipPoolApi;
  readonly userAssignments: UserAssignmentsApi;
  readonly userWages: UserWagesApi;
  readonly users: UsersApi;
  readonly webhooks: WebhooksApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.account = new AccountApi(configuration);
    this.authentication = new AuthenticationApi(configuration);
    this.availability = new AvailabilityApi(configuration);
    this.companies = new CompaniesApi(configuration);
    this.dayPart = new DayPartApi(configuration);
    this.departments = new DepartmentsApi(configuration);
    this.engage = new EngageApi(configuration);
    this.externalUserMappings = new ExternalUserMappingsApi(configuration);
    this.forecastOverrides = new ForecastOverridesApi(configuration);
    this.integrationMappings = new IntegrationMappingsApi(configuration);
    this.locations = new LocationsApi(configuration);
    this.logBook = new LogBookApi(configuration);
    this.receipts = new ReceiptsApi(configuration);
    this.reports = new ReportsApi(configuration);
    this.roles = new RolesApi(configuration);
    this.scheduleEnforcement = new ScheduleEnforcementApi(configuration);
    this.scheduleEvents = new ScheduleEventsApi(configuration);
    this.shiftFeedback = new ShiftFeedbackApi(configuration);
    this.shifts = new ShiftsApi(configuration);
    this.taskManagement = new TaskManagementApi(configuration);
    this.timeOff = new TimeOffApi(configuration);
    this.timePunches = new TimePunchesApi(configuration);
    this.tipPool = new TipPoolApi(configuration);
    this.userAssignments = new UserAssignmentsApi(configuration);
    this.userWages = new UserWagesApi(configuration);
    this.users = new UsersApi(configuration);
    this.webhooks = new WebhooksApi(configuration);
  }

}