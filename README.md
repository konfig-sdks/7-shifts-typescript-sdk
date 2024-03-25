<div align="left">

[![Visit 7shifts](./header.png)](https://7shifts.com)

# [7shifts](https://7shifts.com)<a id="7shifts"></a>

7shifts is a team management software designed for restaurants. We help managers and operators spend less time and effort scheduling their staff, reduce their monthly labor costs and improve team communication. The result is simplified team management, one shift at a time.

7shifts also offers free mobile apps (iOS and Android) allowing managers and employees to have everything at their fingertips.

Start your free trial or request a demo at www.7shifts.com.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`client7shifts.account.createTrialAccount`](#client7shiftsaccountcreatetrialaccount)
  * [`client7shifts.authentication.generateOAuthToken`](#client7shiftsauthenticationgenerateoauthtoken)
  * [`client7shifts.authentication.getIdentity`](#client7shiftsauthenticationgetidentity)
  * [`client7shifts.availability.createNew`](#client7shiftsavailabilitycreatenew)
  * [`client7shifts.availability.createReason`](#client7shiftsavailabilitycreatereason)
  * [`client7shifts.availability.deleteReason`](#client7shiftsavailabilitydeletereason)
  * [`client7shifts.availability.getById`](#client7shiftsavailabilitygetbyid)
  * [`client7shifts.availability.listAvailabilities`](#client7shiftsavailabilitylistavailabilities)
  * [`client7shifts.availability.listReasons`](#client7shiftsavailabilitylistreasons)
  * [`client7shifts.availability.removeById`](#client7shiftsavailabilityremovebyid)
  * [`client7shifts.availability.updateById`](#client7shiftsavailabilityupdatebyid)
  * [`client7shifts.availability.updateReasonById`](#client7shiftsavailabilityupdatereasonbyid)
  * [`client7shifts.availability.updateStatus`](#client7shiftsavailabilityupdatestatus)
  * [`client7shifts.companies.getById`](#client7shiftscompaniesgetbyid)
  * [`client7shifts.companies.getLaborSettings`](#client7shiftscompaniesgetlaborsettings)
  * [`client7shifts.companies.list`](#client7shiftscompanieslist)
  * [`client7shifts.companies.listInactiveReasons`](#client7shiftscompanieslistinactivereasons)
  * [`client7shifts.companies.updateCompanyById`](#client7shiftscompaniesupdatecompanybyid)
  * [`client7shifts.dayPart.getSettings`](#client7shiftsdaypartgetsettings)
  * [`client7shifts.departments.createNewDepartment`](#client7shiftsdepartmentscreatenewdepartment)
  * [`client7shifts.departments.deleteById`](#client7shiftsdepartmentsdeletebyid)
  * [`client7shifts.departments.getDepartment`](#client7shiftsdepartmentsgetdepartment)
  * [`client7shifts.departments.list`](#client7shiftsdepartmentslist)
  * [`client7shifts.departments.updateDepartment`](#client7shiftsdepartmentsupdatedepartment)
  * [`client7shifts.engage.overviewByLocationId`](#client7shiftsengageoverviewbylocationid)
  * [`client7shifts.externalUserMappings.createBulkMappings`](#client7shiftsexternalusermappingscreatebulkmappings)
  * [`client7shifts.externalUserMappings.createMapping`](#client7shiftsexternalusermappingscreatemapping)
  * [`client7shifts.externalUserMappings.deleteMapping`](#client7shiftsexternalusermappingsdeletemapping)
  * [`client7shifts.externalUserMappings.getMappingById`](#client7shiftsexternalusermappingsgetmappingbyid)
  * [`client7shifts.externalUserMappings.list`](#client7shiftsexternalusermappingslist)
  * [`client7shifts.externalUserMappings.updateMappingByIdentifier`](#client7shiftsexternalusermappingsupdatemappingbyidentifier)
  * [`client7shifts.forecastOverrides.bulkCreateProjectedForecastOverride`](#client7shiftsforecastoverridesbulkcreateprojectedforecastoverride)
  * [`client7shifts.forecastOverrides.bulkCreateProjectedSalesIntervalOverride`](#client7shiftsforecastoverridesbulkcreateprojectedsalesintervaloverride)
  * [`client7shifts.forecastOverrides.createDailyProjectedForecastOverride`](#client7shiftsforecastoverridescreatedailyprojectedforecastoverride)
  * [`client7shifts.forecastOverrides.overrideInterval`](#client7shiftsforecastoverridesoverrideinterval)
  * [`client7shifts.forecastOverrides.syncProjectedForecastOverride`](#client7shiftsforecastoverridessyncprojectedforecastoverride)
  * [`client7shifts.forecastOverrides.syncProjectedSalesInterval`](#client7shiftsforecastoverridessyncprojectedsalesinterval)
  * [`client7shifts.integrationMappings.createSalesCategoryMappingsBulk`](#client7shiftsintegrationmappingscreatesalescategorymappingsbulk)
  * [`client7shifts.integrationMappings.deleteSalesCategoryMappings`](#client7shiftsintegrationmappingsdeletesalescategorymappings)
  * [`client7shifts.integrationMappings.listSalesCategoryMappings`](#client7shiftsintegrationmappingslistsalescategorymappings)
  * [`client7shifts.locations.create`](#client7shiftslocationscreate)
  * [`client7shifts.locations.getLocation`](#client7shiftslocationsgetlocation)
  * [`client7shifts.locations.listGet`](#client7shiftslocationslistget)
  * [`client7shifts.locations.removeLocationById`](#client7shiftslocationsremovelocationbyid)
  * [`client7shifts.locations.updateLocationById`](#client7shiftslocationsupdatelocationbyid)
  * [`client7shifts.logBook.createCategory`](#client7shiftslogbookcreatecategory)
  * [`client7shifts.logBook.createComment`](#client7shiftslogbookcreatecomment)
  * [`client7shifts.logBook.createPost`](#client7shiftslogbookcreatepost)
  * [`client7shifts.logBook.deleteCategoryById`](#client7shiftslogbookdeletecategorybyid)
  * [`client7shifts.logBook.deleteComment`](#client7shiftslogbookdeletecomment)
  * [`client7shifts.logBook.deletePost`](#client7shiftslogbookdeletepost)
  * [`client7shifts.logBook.getComment`](#client7shiftslogbookgetcomment)
  * [`client7shifts.logBook.getPost`](#client7shiftslogbookgetpost)
  * [`client7shifts.logBook.listCategories`](#client7shiftslogbooklistcategories)
  * [`client7shifts.logBook.listComments`](#client7shiftslogbooklistcomments)
  * [`client7shifts.logBook.listPosts`](#client7shiftslogbooklistposts)
  * [`client7shifts.logBook.updateCategoryById`](#client7shiftslogbookupdatecategorybyid)
  * [`client7shifts.receipts.createReceipt`](#client7shiftsreceiptscreatereceipt)
  * [`client7shifts.receipts.getReceipt`](#client7shiftsreceiptsgetreceipt)
  * [`client7shifts.receipts.getSummary`](#client7shiftsreceiptsgetsummary)
  * [`client7shifts.receipts.list`](#client7shiftsreceiptslist)
  * [`client7shifts.receipts.updateReceipt`](#client7shiftsreceiptsupdatereceipt)
  * [`client7shifts.reports.getDailySalesAndLabor`](#client7shiftsreportsgetdailysalesandlabor)
  * [`client7shifts.reports.getDailyStats`](#client7shiftsreportsgetdailystats)
  * [`client7shifts.reports.getWorkedHoursWages`](#client7shiftsreportsgetworkedhourswages)
  * [`client7shifts.roles.createRole`](#client7shiftsrolescreaterole)
  * [`client7shifts.roles.deleteRole`](#client7shiftsrolesdeleterole)
  * [`client7shifts.roles.getRole`](#client7shiftsrolesgetrole)
  * [`client7shifts.roles.list`](#client7shiftsroleslist)
  * [`client7shifts.roles.updateRoleById`](#client7shiftsrolesupdaterolebyid)
  * [`client7shifts.scheduleEnforcement.listScheduledShifts`](#client7shiftsscheduleenforcementlistscheduledshifts)
  * [`client7shifts.scheduleEvents.createEvent`](#client7shiftsscheduleeventscreateevent)
  * [`client7shifts.scheduleEvents.deleteEvent`](#client7shiftsscheduleeventsdeleteevent)
  * [`client7shifts.scheduleEvents.getEventById`](#client7shiftsscheduleeventsgeteventbyid)
  * [`client7shifts.scheduleEvents.listEvents`](#client7shiftsscheduleeventslistevents)
  * [`client7shifts.scheduleEvents.updateEventById`](#client7shiftsscheduleeventsupdateeventbyid)
  * [`client7shifts.shiftFeedback.list`](#client7shiftsshiftfeedbacklist)
  * [`client7shifts.shifts.createNewShift`](#client7shiftsshiftscreatenewshift)
  * [`client7shifts.shifts.deleteShiftById`](#client7shiftsshiftsdeleteshiftbyid)
  * [`client7shifts.shifts.getShiftById`](#client7shiftsshiftsgetshiftbyid)
  * [`client7shifts.shifts.list`](#client7shiftsshiftslist)
  * [`client7shifts.shifts.updateShiftById`](#client7shiftsshiftsupdateshiftbyid)
  * [`client7shifts.taskManagement.clearTask`](#client7shiftstaskmanagementcleartask)
  * [`client7shifts.taskManagement.createTaskListTemplate`](#client7shiftstaskmanagementcreatetasklisttemplate)
  * [`client7shifts.taskManagement.createTaskTags`](#client7shiftstaskmanagementcreatetasktags)
  * [`client7shifts.taskManagement.deleteTaskListTemplate`](#client7shiftstaskmanagementdeletetasklisttemplate)
  * [`client7shifts.taskManagement.deleteTaskTags`](#client7shiftstaskmanagementdeletetasktags)
  * [`client7shifts.taskManagement.editTaskListTemplate`](#client7shiftstaskmanagementedittasklisttemplate)
  * [`client7shifts.taskManagement.getSettings`](#client7shiftstaskmanagementgetsettings)
  * [`client7shifts.taskManagement.getTaskList`](#client7shiftstaskmanagementgettasklist)
  * [`client7shifts.taskManagement.getTaskListTemplate`](#client7shiftstaskmanagementgettasklisttemplate)
  * [`client7shifts.taskManagement.getTaskListTemplates`](#client7shiftstaskmanagementgettasklisttemplates)
  * [`client7shifts.taskManagement.getTaskLists`](#client7shiftstaskmanagementgettasklists)
  * [`client7shifts.taskManagement.listTaskListsSummary`](#client7shiftstaskmanagementlisttasklistssummary)
  * [`client7shifts.taskManagement.markComplete`](#client7shiftstaskmanagementmarkcomplete)
  * [`client7shifts.timeOff.approveRequest`](#client7shiftstimeoffapproverequest)
  * [`client7shifts.timeOff.createRequest`](#client7shiftstimeoffcreaterequest)
  * [`client7shifts.timeOff.declineRequest`](#client7shiftstimeoffdeclinerequest)
  * [`client7shifts.timeOff.getSettings`](#client7shiftstimeoffgetsettings)
  * [`client7shifts.timeOff.getTimeOffById`](#client7shiftstimeoffgettimeoffbyid)
  * [`client7shifts.timeOff.getTotalHours`](#client7shiftstimeoffgettotalhours)
  * [`client7shifts.timeOff.list`](#client7shiftstimeofflist)
  * [`client7shifts.timeOff.remove`](#client7shiftstimeoffremove)
  * [`client7shifts.timeOff.setTimeOffSettings`](#client7shiftstimeoffsettimeoffsettings)
  * [`client7shifts.timeOff.updateTimeOffById`](#client7shiftstimeoffupdatetimeoffbyid)
  * [`client7shifts.timePunches.create`](#client7shiftstimepunchescreate)
  * [`client7shifts.timePunches.deleteById`](#client7shiftstimepunchesdeletebyid)
  * [`client7shifts.timePunches.getTimePunch`](#client7shiftstimepunchesgettimepunch)
  * [`client7shifts.timePunches.list`](#client7shiftstimepuncheslist)
  * [`client7shifts.timePunches.updateById`](#client7shiftstimepunchesupdatebyid)
  * [`client7shifts.tipPool.getDetailedReport`](#client7shiftstippoolgetdetailedreport)
  * [`client7shifts.tipPool.getManualEntryTips`](#client7shiftstippoolgetmanualentrytips)
  * [`client7shifts.tipPool.getSettings`](#client7shiftstippoolgetsettings)
  * [`client7shifts.tipPool.getSummaryReport`](#client7shiftstippoolgetsummaryreport)
  * [`client7shifts.tipPool.saveManualEntry`](#client7shiftstippoolsavemanualentry)
  * [`client7shifts.userAssignments.createDepartmentAssignment`](#client7shiftsuserassignmentscreatedepartmentassignment)
  * [`client7shifts.userAssignments.createLocationAssignment`](#client7shiftsuserassignmentscreatelocationassignment)
  * [`client7shifts.userAssignments.createRoleAssignment`](#client7shiftsuserassignmentscreateroleassignment)
  * [`client7shifts.userAssignments.deleteRoleAssignment`](#client7shiftsuserassignmentsdeleteroleassignment)
  * [`client7shifts.userAssignments.list`](#client7shiftsuserassignmentslist)
  * [`client7shifts.userAssignments.listDepartmentAssignments`](#client7shiftsuserassignmentslistdepartmentassignments)
  * [`client7shifts.userAssignments.listLocationAssignments`](#client7shiftsuserassignmentslistlocationassignments)
  * [`client7shifts.userAssignments.listRoleAssignments`](#client7shiftsuserassignmentslistroleassignments)
  * [`client7shifts.userAssignments.removeDepartmentAssignment`](#client7shiftsuserassignmentsremovedepartmentassignment)
  * [`client7shifts.userAssignments.removeLocationAssignment`](#client7shiftsuserassignmentsremovelocationassignment)
  * [`client7shifts.userWages.create`](#client7shiftsuserwagescreate)
  * [`client7shifts.userWages.list`](#client7shiftsuserwageslist)
  * [`client7shifts.users.bulkCreate`](#client7shiftsusersbulkcreate)
  * [`client7shifts.users.createNewUser`](#client7shiftsuserscreatenewuser)
  * [`client7shifts.users.deactivate`](#client7shiftsusersdeactivate)
  * [`client7shifts.users.getUserByIdentifier`](#client7shiftsusersgetuserbyidentifier)
  * [`client7shifts.users.list`](#client7shiftsuserslist)
  * [`client7shifts.users.updateUserByIdentifier`](#client7shiftsusersupdateuserbyidentifier)
  * [`client7shifts.webhooks.create`](#client7shiftswebhookscreate)
  * [`client7shifts.webhooks.deleteWebhookById`](#client7shiftswebhooksdeletewebhookbyid)
  * [`client7shifts.webhooks.getWebhook`](#client7shiftswebhooksgetwebhook)
  * [`client7shifts.webhooks.list`](#client7shiftswebhookslist)
  * [`client7shifts.webhooks.update`](#client7shiftswebhooksupdate)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=7shifts&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Client7Shifts } from "7-shifts-typescript-sdk";

const client7shifts = new Client7Shifts({
  // Defining the base path is optional and defaults to https://api.7shifts.com
  // basePath: "https://api.7shifts.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
  cookieAuth: "API_KEY",
  marketingApiKeyAuth: "API_KEY",
});

const createTrialAccountResponse =
  await client7shifts.account.createTrialAccount({
    xApiVersion: "2022-05-01",
    email: "email_example",
    firstname: "firstname_example",
    lastname: "lastname_example",
    company_name: "company_name_example",
    country: "CA",
    utm_source: "utm_source_example",
  });

console.log(createTrialAccountResponse);
```

## Reference<a id="reference"></a>


### `client7shifts.account.createTrialAccount`<a id="client7shiftsaccountcreatetrialaccount"></a>

Create Trial Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTrialAccountResponse =
  await client7shifts.account.createTrialAccount({
    xApiVersion: "2022-05-01",
    email: "email_example",
    firstname: "firstname_example",
    lastname: "lastname_example",
    company_name: "company_name_example",
    country: "CA",
    utm_source: "utm_source_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

The user\\\'s email

##### firstname: `string`<a id="firstname-string"></a>

The user\\\'s first name

##### lastname: `string`<a id="lastname-string"></a>

The user\\\'s last name

##### company_name: `string`<a id="company_name-string"></a>

The company\\\'s name

##### country: `string`<a id="country-string"></a>

The company\\\'s country

##### utm_source: `string`<a id="utm_source-string"></a>

The UTM source

##### mobile_phone: `string`<a id="mobile_phone-string"></a>

The user\\\'s mobile phone

##### utm_campaign: `string`<a id="utm_campaign-string"></a>

The UTM campaign

##### utm_content: `string`<a id="utm_content-string"></a>

The UTM content

##### utm_medium: `string`<a id="utm_medium-string"></a>

The UTM medium

##### utm_term: `string`<a id="utm_term-string"></a>

The UTM term

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[AccountCreateTrialAccountResponse](./models/account-create-trial-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/partner_company_creation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.authentication.generateOAuthToken`<a id="client7shiftsauthenticationgenerateoauthtoken"></a>

Create OAuth Token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateOAuthTokenResponse =
  await client7shifts.authentication.generateOAuthToken({
    grant_type: "client_credentials",
    client_id: "client_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

Token grant type. For Partner OAuth tokens specifying client_credentials

##### clientId: `string`<a id="clientid-string"></a>

##### clientSecret: `string`<a id="clientsecret-string"></a>

##### scope: `string`<a id="scope-string"></a>

A space-delimited list of scopes.

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationGenerateOAuthTokenResponse](./models/authentication-generate-oauth-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.authentication.getIdentity`<a id="client7shiftsauthenticationgetidentity"></a>

Retrieve Identity

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIdentityResponse = await client7shifts.authentication.getIdentity({
  xApiVersion: "2022-05-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationGetIdentityResponse](./models/authentication-get-identity-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/whoami` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.createNew`<a id="client7shiftsavailabilitycreatenew"></a>

Create Availability

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await client7shifts.availability.createNew({
  companyId: 1,
  user_id: 1,
  repeat: true,
  mon: 1,
  mon_from: "mon_from_example",
  mon_to: "mon_to_example",
  mon_comments: "mon_comments_example",
  mon_reason: "mon_reason_example",
  tue: 1,
  tue_from: "tue_from_example",
  tue_to: "tue_to_example",
  tue_comments: "tue_comments_example",
  tue_reason: "tue_reason_example",
  wed: 1,
  wed_from: "wed_from_example",
  wed_to: "wed_to_example",
  wed_comments: "wed_comments_example",
  wed_reason: "wed_reason_example",
  thu: 1,
  thu_from: "thu_from_example",
  thu_to: "thu_to_example",
  thu_comments: "thu_comments_example",
  thu_reason: "thu_reason_example",
  fri: 1,
  fri_from: "fri_from_example",
  fri_to: "fri_to_example",
  fri_comments: "fri_comments_example",
  fri_reason: "fri_reason_example",
  sat: 1,
  sat_from: "sat_from_example",
  sat_to: "sat_to_example",
  sat_comments: "sat_comments_example",
  sat_reason: "sat_reason_example",
  sun: 1,
  sun_from: "sun_from_example",
  sun_to: "sun_to_example",
  sun_comments: "sun_comments_example",
  sun_reason: "sun_reason_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `number`<a id="user_id-number"></a>

User ID

##### repeat: `boolean`<a id="repeat-boolean"></a>

If true, availability is repeating

##### mon: `number`<a id="mon-number"></a>

The availability status for the day

##### mon_from: `string`<a id="mon_from-string"></a>

The start time of the availability for the day

##### mon_to: `string`<a id="mon_to-string"></a>

The end time of the availability for the day

##### mon_comments: `string`<a id="mon_comments-string"></a>

Comments included in the days availability

##### mon_reason: `string`<a id="mon_reason-string"></a>

The reason ID for the day

##### tue: `number`<a id="tue-number"></a>

The availability status for the day

##### tue_from: `string`<a id="tue_from-string"></a>

The start time of the availability for the day

##### tue_to: `string`<a id="tue_to-string"></a>

The end time of the availability for the day

##### tue_comments: `string`<a id="tue_comments-string"></a>

Comments included in the days availability

##### tue_reason: `string`<a id="tue_reason-string"></a>

The reason ID for the day

##### wed: `number`<a id="wed-number"></a>

The availability status for the day

##### wed_from: `string`<a id="wed_from-string"></a>

The start time of the availability for the day

##### wed_to: `string`<a id="wed_to-string"></a>

The end time of the availability for the day

##### wed_comments: `string`<a id="wed_comments-string"></a>

Comments included in the days availability

##### wed_reason: `string`<a id="wed_reason-string"></a>

The reason ID for the day

##### thu: `number`<a id="thu-number"></a>

The availability status for the day

##### thu_from: `string`<a id="thu_from-string"></a>

The start time of the availability for the day

##### thu_to: `string`<a id="thu_to-string"></a>

The end time of the availability for the day

##### thu_comments: `string`<a id="thu_comments-string"></a>

Comments included in the days availability

##### thu_reason: `string`<a id="thu_reason-string"></a>

The reason ID for the day

##### fri: `number`<a id="fri-number"></a>

The availability status for the day

##### fri_from: `string`<a id="fri_from-string"></a>

The start time of the availability for the day

##### fri_to: `string`<a id="fri_to-string"></a>

The end time of the availability for the day

##### fri_comments: `string`<a id="fri_comments-string"></a>

Comments included in the days availability

##### fri_reason: `string`<a id="fri_reason-string"></a>

The reason ID for the day

##### sat: `number`<a id="sat-number"></a>

The availability status for the day

##### sat_from: `string`<a id="sat_from-string"></a>

The start time of the availability for the day

##### sat_to: `string`<a id="sat_to-string"></a>

The end time of the availability for the day

##### sat_comments: `string`<a id="sat_comments-string"></a>

Comments included in the days availability

##### sat_reason: `string`<a id="sat_reason-string"></a>

The reason ID for the day

##### sun: `number`<a id="sun-number"></a>

The availability status for the day

##### sun_from: `string`<a id="sun_from-string"></a>

The start time of the availability for the day

##### sun_to: `string`<a id="sun_to-string"></a>

The end time of the availability for the day

##### sun_comments: `string`<a id="sun_comments-string"></a>

Comments included in the days availability

##### sun_reason: `string`<a id="sun_reason-string"></a>

The reason ID for the day

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### week: `string`<a id="week-string"></a>

Week date of the availability

##### week_to: `string`<a id="week_to-string"></a>

Week to date of the availability

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityCreateNewResponse](./models/availability-create-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availabilities` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.createReason`<a id="client7shiftsavailabilitycreatereason"></a>

Create Availability Reason

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReasonResponse = await client7shifts.availability.createReason({
  xApiVersion: "2022-05-01",
  companyId: 1,
  reason: "reason_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reason: `string`<a id="reason-string"></a>

Availability reason

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### comments_required: `boolean`<a id="comments_required-boolean"></a>

Comments required

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityCreateReasonResponse](./models/availability-create-reason-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availability_reasons` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.deleteReason`<a id="client7shiftsavailabilitydeletereason"></a>

Delete Availability Reason

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteReasonResponse = await client7shifts.availability.deleteReason({
  xApiVersion: "2022-05-01",
  companyId: 1,
  availabilityReasonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### availabilityReasonId: `number`<a id="availabilityreasonid-number"></a>

Availability Reason ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availability_reasons/{availability_reason_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.getById`<a id="client7shiftsavailabilitygetbyid"></a>

Retrieve Availability

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await client7shifts.availability.getById({
  companyId: 1,
  availabilityId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### availabilityId: `number`<a id="availabilityid-number"></a>

Availability ID

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityGetByIdResponse](./models/availability-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availabilities/{availability_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.listAvailabilities`<a id="client7shiftsavailabilitylistavailabilities"></a>

List Availabilities

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailabilitiesResponse =
  await client7shifts.availability.listAvailabilities({
    companyId: 1,
    limit: 100,
    weekGte: "2020-01-01",
    weekToIncludeRepeatingGte: "2020-01-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number results desired per page.

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### status: `number`<a id="status-number"></a>

Return availabilities for a specified status (pending = 0, approved = 1, declined = 2).

##### repeating: `boolean`<a id="repeating-boolean"></a>

Return repeating or weekly availabilities.

##### weekGte: `string`<a id="weekgte-string"></a>

Return availabilities for a specific week.

##### weekToIncludeRepeatingGte: `string`<a id="weektoincluderepeatinggte-string"></a>

Return repeating availabilities that end before or on a specified week.

##### orderField: `string`<a id="orderfield-string"></a>

The field that availabilities will be sorted by.

##### orderDir: `string`<a id="orderdir-string"></a>

The direction that availabilities will be sorted by.

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityListAvailabilitiesResponse](./models/availability-list-availabilities-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availabilities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.listReasons`<a id="client7shiftsavailabilitylistreasons"></a>

List Availability Reasons

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listReasonsResponse = await client7shifts.availability.listReasons({
  xApiVersion: "2022-05-01",
  companyId: 1,
  limit: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityListReasonsResponse](./models/availability-list-reasons-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availability_reasons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.removeById`<a id="client7shiftsavailabilityremovebyid"></a>

Delete Availability

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await client7shifts.availability.removeById({
  companyId: 1,
  availabilityId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### availabilityId: `number`<a id="availabilityid-number"></a>

Availability ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availabilities/{availability_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.updateById`<a id="client7shiftsavailabilityupdatebyid"></a>

Update Availability

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await client7shifts.availability.updateById({
  companyId: 1,
  availabilityId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### availabilityId: `number`<a id="availabilityid-number"></a>

Availability ID

##### week: `string`<a id="week-string"></a>

Week date of the availability

##### week_to: `string`<a id="week_to-string"></a>

Week to date of the availability

##### repeat: `boolean`<a id="repeat-boolean"></a>

If true, availability is repeating

##### mon: `number`<a id="mon-number"></a>

The availability status for the day

##### mon_from: `string`<a id="mon_from-string"></a>

The start time of the availability for the day

##### mon_to: `string`<a id="mon_to-string"></a>

The end time of the availability for the day

##### mon_comments: `string`<a id="mon_comments-string"></a>

Comments included in the days availability

##### mon_reason: `string`<a id="mon_reason-string"></a>

The reason ID for the day

##### tue: `number`<a id="tue-number"></a>

The availability status for the day

##### tue_from: `string`<a id="tue_from-string"></a>

The start time of the availability for the day

##### tue_to: `string`<a id="tue_to-string"></a>

The end time of the availability for the day

##### tue_comments: `string`<a id="tue_comments-string"></a>

Comments included in the days availability

##### tue_reason: `string`<a id="tue_reason-string"></a>

The reason ID for the day

##### wed: `number`<a id="wed-number"></a>

The availability status for the day

##### wed_from: `string`<a id="wed_from-string"></a>

The start time of the availability for the day

##### wed_to: `string`<a id="wed_to-string"></a>

The end time of the availability for the day

##### wed_comments: `string`<a id="wed_comments-string"></a>

Comments included in the days availability

##### wed_reason: `string`<a id="wed_reason-string"></a>

The reason ID for the day

##### thu: `number`<a id="thu-number"></a>

The availability status for the day

##### thu_from: `string`<a id="thu_from-string"></a>

The start time of the availability for the day

##### thu_to: `string`<a id="thu_to-string"></a>

The end time of the availability for the day

##### thu_comments: `string`<a id="thu_comments-string"></a>

Comments included in the days availability

##### thu_reason: `string`<a id="thu_reason-string"></a>

The reason ID for the day

##### fri: `number`<a id="fri-number"></a>

The availability status for the day

##### fri_from: `string`<a id="fri_from-string"></a>

The start time of the availability for the day

##### fri_to: `string`<a id="fri_to-string"></a>

The end time of the availability for the day

##### fri_comments: `string`<a id="fri_comments-string"></a>

Comments included in the days availability

##### fri_reason: `string`<a id="fri_reason-string"></a>

The reason ID for the day

##### sat: `number`<a id="sat-number"></a>

The availability status for the day

##### sat_from: `string`<a id="sat_from-string"></a>

The start time of the availability for the day

##### sat_to: `string`<a id="sat_to-string"></a>

The end time of the availability for the day

##### sat_comments: `string`<a id="sat_comments-string"></a>

Comments included in the days availability

##### sat_reason: `string`<a id="sat_reason-string"></a>

The reason ID for the day

##### sun: `number`<a id="sun-number"></a>

The availability status for the day

##### sun_from: `string`<a id="sun_from-string"></a>

The start time of the availability for the day

##### sun_to: `string`<a id="sun_to-string"></a>

The end time of the availability for the day

##### sun_comments: `string`<a id="sun_comments-string"></a>

Comments included in the days availability

##### sun_reason: `string`<a id="sun_reason-string"></a>

The reason ID for the day

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityUpdateByIdResponse](./models/availability-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availabilities/{availability_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.updateReasonById`<a id="client7shiftsavailabilityupdatereasonbyid"></a>

Update Availability Reason

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateReasonByIdResponse =
  await client7shifts.availability.updateReasonById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    availabilityReasonId: 1,
    reason: "reason_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reason: `string`<a id="reason-string"></a>

Availability reason

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### availabilityReasonId: `number`<a id="availabilityreasonid-number"></a>

Availability Reason ID

##### comments_required: `boolean`<a id="comments_required-boolean"></a>

Comments required

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[AvailabilityUpdateReasonByIdResponse](./models/availability-update-reason-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availability_reasons/{availability_reason_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.availability.updateStatus`<a id="client7shiftsavailabilityupdatestatus"></a>

Update Availability Status

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusResponse = await client7shifts.availability.updateStatus({
  companyId: 1,
  availabilityId: 1,
  status: "approved",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### availabilityId: `number`<a id="availabilityid-number"></a>

Availability ID

##### message: `string`<a id="message-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/availabilities/{availability_id}/status` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.companies.getById`<a id="client7shiftscompaniesgetbyid"></a>

Retrieve Company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await client7shifts.companies.getById({
  xApiVersion: "2022-05-01",
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesGetByIdResponse](./models/companies-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.companies.getLaborSettings`<a id="client7shiftscompaniesgetlaborsettings"></a>

Retrieve Labor Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLaborSettingsResponse = await client7shifts.companies.getLaborSettings(
  {
    xApiVersion: "2022-05-01",
    companyId: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesGetLaborSettingsResponse](./models/companies-get-labor-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/labor_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.companies.list`<a id="client7shiftscompanieslist"></a>

List Companies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.companies.list({
  xApiVersion: "2022-05-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return companies that have been modified since the specified date. Format YYYY-MM-DD

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesListResponse](./models/companies-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.companies.listInactiveReasons`<a id="client7shiftscompanieslistinactivereasons"></a>

List Inactive Reasons

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInactiveReasonsResponse =
  await client7shifts.companies.listInactiveReasons({
    xApiVersion: "2022-05-01",
    companyId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesListInactiveReasonsResponse](./models/companies-list-inactive-reasons-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/inactive_reasons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.companies.updateCompanyById`<a id="client7shiftscompaniesupdatecompanybyid"></a>

Update Company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCompanyByIdResponse =
  await client7shifts.companies.updateCompanyById({
    xApiVersion: "2022-05-01",
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Company ID

##### name: `string`<a id="name-string"></a>

##### country: `string`<a id="country-string"></a>

##### photo: `string`<a id="photo-string"></a>

##### pos: `string`<a id="pos-string"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesUpdateCompanyByIdResponse](./models/companies-update-company-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/companies/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.dayPart.getSettings`<a id="client7shiftsdaypartgetsettings"></a>

Retrieve day part settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await client7shifts.dayPart.getSettings({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID - null will fetch all day parts for company

#### 🔄 Return<a id="🔄-return"></a>

[DayPartGetSettingsResponse](./models/day-part-get-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/day_part/settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.departments.createNewDepartment`<a id="client7shiftsdepartmentscreatenewdepartment"></a>

Create Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDepartmentResponse =
  await client7shifts.departments.createNewDepartment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    location_id: 3.14,
    name: "name_example",
    _default: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### location_id: `number`<a id="location_id-number"></a>

Location ID

##### name: `string`<a id="name-string"></a>

Department name

##### default: `boolean`<a id="default-boolean"></a>

If true department is set as the default for the location

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsCreateNewDepartmentResponse](./models/departments-create-new-department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/departments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.departments.deleteById`<a id="client7shiftsdepartmentsdeletebyid"></a>

Delete Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await client7shifts.departments.deleteById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  departmentId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### transferTo: `number`<a id="transferto-number"></a>

Department ID to move roles and shifts to

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/departments/{department_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.departments.getDepartment`<a id="client7shiftsdepartmentsgetdepartment"></a>

Retrieve Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDepartmentResponse = await client7shifts.departments.getDepartment({
  xApiVersion: "2022-05-01",
  companyId: 1,
  departmentId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsGetDepartmentResponse](./models/departments-get-department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/departments/{department_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.departments.list`<a id="client7shiftsdepartmentslist"></a>

List Departments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.departments.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return departments that have been modified since the specified date. Format YYYY-MM-DD

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

##### locationId: `number`<a id="locationid-number"></a>

Return departments that match the provided location ID

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsListResponse](./models/departments-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.departments.updateDepartment`<a id="client7shiftsdepartmentsupdatedepartment"></a>

Update Department

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDepartmentResponse =
  await client7shifts.departments.updateDepartment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    departmentId: 1,
    name: "name_example",
    _default: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Department name

##### default: `boolean`<a id="default-boolean"></a>

If true department is set as the default for the location

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsUpdateDepartmentResponse](./models/departments-update-department-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/departments/{department_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.engage.overviewByLocationId`<a id="client7shiftsengageoverviewbylocationid"></a>

Retrieve Engagement Overview

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const overviewByLocationIdResponse =
  await client7shifts.engage.overviewByLocationId({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    date: "0480-72-88",
    frequency: "week",
    userType: "employees",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### date: `string`<a id="date-string"></a>

A date with YYYY-MM-DD format

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### frequency: `'week' | 'month'`<a id="frequency-week--month"></a>

Length of the engage data set

##### userType: `'employees' | 'managers' | 'assistant_managers'`<a id="usertype-employees--managers--assistant_managers"></a>

select user type for engage data

#### 🔄 Return<a id="🔄-return"></a>

[EngageOverviewByLocationIdResponse](./models/engage-overview-by-location-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}/engage_overview` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.externalUserMappings.createBulkMappings`<a id="client7shiftsexternalusermappingscreatebulkmappings"></a>

Create User External Mappings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBulkMappingsResponse =
  await client7shifts.externalUserMappings.createBulkMappings({
    xApiVersion: "2022-05-01",
    companyId: 1,
    data: [
      {
        external_user_id: "external_user_id_example",
        phone_number: "3061234454",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ExternalUserMappingsCreateBulkMappingsRequestDataInner`](./models/external-user-mappings-create-bulk-mappings-request-data-inner.ts)[]<a id="data-externalusermappingscreatebulkmappingsrequestdatainnermodelsexternal-user-mappings-create-bulk-mappings-request-data-innerts"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

#### 🔄 Return<a id="🔄-return"></a>

[ExternalUserMappingsCreateBulkMappingsResponse](./models/external-user-mappings-create-bulk-mappings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/external_user_mappings_bulk` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.externalUserMappings.createMapping`<a id="client7shiftsexternalusermappingscreatemapping"></a>

Create External User Mapping

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMappingResponse =
  await client7shifts.externalUserMappings.createMapping({
    xApiVersion: "2022-05-01",
    companyId: 1,
    user_id: 1,
    external_user_id: "external_user_id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `number`<a id="user_id-number"></a>

User ID in 7Shifts

##### external_user_id: `string`<a id="external_user_id-string"></a>

User ID in External System

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

#### 🔄 Return<a id="🔄-return"></a>

[ExternalUserMappingsCreateMappingResponse](./models/external-user-mappings-create-mapping-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/external_user_mappings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.externalUserMappings.deleteMapping`<a id="client7shiftsexternalusermappingsdeletemapping"></a>

Delete External User Mapping

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMappingResponse =
  await client7shifts.externalUserMappings.deleteMapping({
    xApiVersion: "2022-05-01",
    companyId: 1,
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### identifier: `string`<a id="identifier-string"></a>

User ID. Accepted values are 7Shifts user id, external user id or user email address. Use prefix ext: for external id or email: for email address

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/external_user_mappings/{identifier}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.externalUserMappings.getMappingById`<a id="client7shiftsexternalusermappingsgetmappingbyid"></a>

Retrieve User External Mapping

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMappingByIdResponse =
  await client7shifts.externalUserMappings.getMappingById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### identifier: `string`<a id="identifier-string"></a>

User ID. Accepted values are 7Shifts user id or external user id. Use prefix ext: for external id

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

#### 🔄 Return<a id="🔄-return"></a>

[ExternalUserMappingsGetMappingByIdResponse](./models/external-user-mappings-get-mapping-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/external_user_mappings/{identifier}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.externalUserMappings.list`<a id="client7shiftsexternalusermappingslist"></a>

List External User Mapping

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.externalUserMappings.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  modifiedSince: "2020-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### userId: `number`<a id="userid-number"></a>

The 7shifts user ID

##### externalUserId: `string`<a id="externaluserid-string"></a>

The external user ID

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return records that have been modified since the specified date. Format YYYY-MM-DD

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[ExternalUserMappingsListResponse](./models/external-user-mappings-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/external_user_mappings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.externalUserMappings.updateMappingByIdentifier`<a id="client7shiftsexternalusermappingsupdatemappingbyidentifier"></a>

Update External User Mappings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMappingByIdentifierResponse =
  await client7shifts.externalUserMappings.updateMappingByIdentifier({
    xApiVersion: "2022-05-01",
    companyId: 1,
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### identifier: `string`<a id="identifier-string"></a>

User ID. Accepted values are 7Shifts user id or external user id. Use prefix ext: for external id

##### user_id: `number`<a id="user_id-number"></a>

User ID in 7Shifts

##### external_user_id: `string`<a id="external_user_id-string"></a>

User ID in External System

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

#### 🔄 Return<a id="🔄-return"></a>

[ExternalUserMappingsUpdateMappingByIdentifierResponse](./models/external-user-mappings-update-mapping-by-identifier-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/external_user_mappings/{identifier}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.forecastOverrides.bulkCreateProjectedForecastOverride`<a id="client7shiftsforecastoverridesbulkcreateprojectedforecastoverride"></a>

Create Bulk Daily Projected Forecast Overrides

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const bulkCreateProjectedForecastOverrideResponse =
  await client7shifts.forecastOverrides.bulkCreateProjectedForecastOverride({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    data: [
      {
        department_id: 1234,
        date: "2020-01-01",
        value: 1234,
        report_type: "sales",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`ForecastOverridesBulkCreateProjectedForecastOverrideRequestDataInner`](./models/forecast-overrides-bulk-create-projected-forecast-override-request-data-inner.ts)[]<a id="data-forecastoverridesbulkcreateprojectedforecastoverriderequestdatainnermodelsforecast-overrides-bulk-create-projected-forecast-override-request-data-innerts"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ForecastOverridesBulkCreateProjectedForecastOverrideResponse](./models/forecast-overrides-bulk-create-projected-forecast-override-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/location/{location_id}/forecast_overrides` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.forecastOverrides.bulkCreateProjectedSalesIntervalOverride`<a id="client7shiftsforecastoverridesbulkcreateprojectedsalesintervaloverride"></a>

Overrides many project sales intervals of 15 minutes or 1 hour. (In Development)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const bulkCreateProjectedSalesIntervalOverrideResponse =
  await client7shifts.forecastOverrides.bulkCreateProjectedSalesIntervalOverride(
    {
      companyId: 1,
      locationId: 1,
      xApiVersion: "2022-05-01",
      xCompanyGuid: "1310bfe1-cb3f-4f24-98a2-fde2bc504108",
      requestBody: [
        {
          start: "2020-12-30T20:00:00Z",
          end: "2020-12-30T20:15:00Z",
          value: 1234,
          report_type: "sales",
        },
      ],
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### requestBody: [`ForecastOverridesBulkCreateProjectedSalesIntervalOverrideRequestInner`](./models/forecast-overrides-bulk-create-projected-sales-interval-override-request-inner.ts)[]<a id="requestbody-forecastoverridesbulkcreateprojectedsalesintervaloverriderequestinnermodelsforecast-overrides-bulk-create-projected-sales-interval-override-request-innerts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}/forecast_overrides_intervals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.forecastOverrides.createDailyProjectedForecastOverride`<a id="client7shiftsforecastoverridescreatedailyprojectedforecastoverride"></a>

Create Daily Projected Forecast Override

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDailyProjectedForecastOverrideResponse =
  await client7shifts.forecastOverrides.createDailyProjectedForecastOverride({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    department_id: 1234,
    date: "2020-01-01",
    value: 1234,
    report_type: "sales",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

The date of the daily report data to override. Format YYYY-MM-DD

##### value: `number`<a id="value-number"></a>

Override value. Currency values in cents

##### report_type: `string`<a id="report_type-string"></a>

Type of value to override. Default is sales

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### department_id: `number`<a id="department_id-number"></a>

Department ID. Optional

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ForecastOverridesCreateDailyProjectedForecastOverrideResponse](./models/forecast-overrides-create-daily-projected-forecast-override-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/location/{location_id}/forecast_override` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.forecastOverrides.overrideInterval`<a id="client7shiftsforecastoverridesoverrideinterval"></a>

Overrides the project sales interval of 15 minutes or 1 hour.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const overrideIntervalResponse =
  await client7shifts.forecastOverrides.overrideInterval({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    start: "2020-12-30T20:00:00Z",
    end: "2020-12-30T20:15:00Z",
    value: 1234,
    report_type: "sales",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start: `string`<a id="start-string"></a>

Starting date/time (UTC) of the interval for which you wish to update the sales projection.

##### end: `string`<a id="end-string"></a>

Ending date/time (UTC) of the interval for which you wish to update the sales projection.

##### value: `number`<a id="value-number"></a>

Override value. Currency value in cents. Only whole dollars are accepted.

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### department_id: `number`<a id="department_id-number"></a>

Department ID

##### report_type: `string`<a id="report_type-string"></a>

Type of value to override. Default is sales

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}/forecast_override_interval` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.forecastOverrides.syncProjectedForecastOverride`<a id="client7shiftsforecastoverridessyncprojectedforecastoverride"></a>

Sync Daily Projected Forecast Override

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const syncProjectedForecastOverrideResponse =
  await client7shifts.forecastOverrides.syncProjectedForecastOverride({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    start_date: "2020-01-01",
    end_date: "2020-01-01",
    report_type: "sales",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start_date: `string`<a id="start_date-string"></a>

The start date of the date range of override data to remove. Override data will be removed from only this date if no end date is provided. Format YYYY-MM-DD

##### report_type: `string`<a id="report_type-string"></a>

Type of override data to remove

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### end_date: `string`<a id="end_date-string"></a>

The ending date of a date range of override data to remove. Optional. Format YYYY-MM-DD

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/location/{location_id}/forecast_override` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.forecastOverrides.syncProjectedSalesInterval`<a id="client7shiftsforecastoverridessyncprojectedsalesinterval"></a>

Syncs the overridden project sales interval of 15 minutes or 1 hour.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const syncProjectedSalesIntervalResponse =
  await client7shifts.forecastOverrides.syncProjectedSalesInterval({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    start: "2020-12-30T20:00:00Z",
    end: "2020-12-30T20:15:00Z",
    report_type: "sales",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start: `string`<a id="start-string"></a>

Starting date/time (UTC) of the interval for which you wish to update the sales projection.

##### end: `string`<a id="end-string"></a>

Ending date/time (UTC) of the interval for which you wish to update the sales projection.

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### report_type: `string`<a id="report_type-string"></a>

Type of value to override. Default is sales

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}/forecast_override_interval` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.integrationMappings.createSalesCategoryMappingsBulk`<a id="client7shiftsintegrationmappingscreatesalescategorymappingsbulk"></a>

Create Sales Category Mappings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSalesCategoryMappingsBulkResponse =
  await client7shifts.integrationMappings.createSalesCategoryMappingsBulk({
    companyId: 1,
    locationId: 1,
    departmentId: 1,
    requestBody: [
      {
        external_category_id: "external_category_id_example",
      },
    ],
    xApiVersion: "2022-05-01",
    xCompanyGuid: "1310bfe1-cb3f-4f24-98a2-fde2bc504108",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### requestBody: [`IntegrationMappingsCreateSalesCategoryMappingsBulkRequestInner`](./models/integration-mappings-create-sales-category-mappings-bulk-request-inner.ts)[]<a id="requestbody-integrationmappingscreatesalescategorymappingsbulkrequestinnermodelsintegration-mappings-create-sales-category-mappings-bulk-request-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationMappingsCreateSalesCategoryMappingsBulkResponse](./models/integration-mappings-create-sales-category-mappings-bulk-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/location/{location_id}/sales_category_mappings_bulk` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.integrationMappings.deleteSalesCategoryMappings`<a id="client7shiftsintegrationmappingsdeletesalescategorymappings"></a>

Delete Sales Category Mappings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSalesCategoryMappingsResponse =
  await client7shifts.integrationMappings.deleteSalesCategoryMappings({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    externalId: "externalId_example",
    departmentId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### externalId: `string`<a id="externalid-string"></a>

External Category ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/location/{location_id}/sales_category_mappings/{external_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.integrationMappings.listSalesCategoryMappings`<a id="client7shiftsintegrationmappingslistsalescategorymappings"></a>

List Sales Category Mappings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSalesCategoryMappingsResponse =
  await client7shifts.integrationMappings.listSalesCategoryMappings({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    departmentId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationMappingsListSalesCategoryMappingsResponse](./models/integration-mappings-list-sales-category-mappings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/location/{location_id}/sales_category_mappings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.locations.create`<a id="client7shiftslocationscreate"></a>

Create Location

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await client7shifts.locations.create({
  xApiVersion: "2022-05-01",
  companyId: 1,
  name: "Quackers",
  country: "CA",
  formatted_address: "701 Broadway Ave #200, MadeUpCity, SK SVN 1C3, Canada",
  state: "true",
  city: "Toronto",
  timezone: "America/Chicago",
  holiday_pay: false,
  sun_hours_close: "57030",
  mon_hours_close: "57030",
  tue_hours_close: "57030",
  wed_hours_close: "57030",
  thu_hours_close: "57030",
  fri_hours_close: "57030",
  sat_hours_close: "57030",
  sun_hours_open: "57030",
  mon_hours_open: "57030",
  tue_hours_open: "57030",
  wed_hours_open: "57030",
  thu_hours_open: "57030",
  fri_hours_open: "57030",
  sat_hours_open: "57030",
  sun_is_closed: true,
  mon_is_closed: true,
  tue_is_closed: true,
  wed_is_closed: true,
  thu_is_closed: true,
  fri_is_closed: true,
  sat_is_closed: true,
  enable_shift_feedback: true,
  shift_feedback: true,
  coupon: "Quakers",
  stripe_token_id: "tok_1KG8LT2eZvKYlo2CODSv0IXB",
  copy_from_id: 123,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Location name

##### country: `string`<a id="country-string"></a>

Country two letter abbreviation

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### formatted_address: `string`<a id="formatted_address-string"></a>

Full address

##### state: `string`<a id="state-string"></a>

State or province

##### city: `string`<a id="city-string"></a>

City

##### latitude: `string`<a id="latitude-string"></a>

locations latitude coordinates

##### longitude: `string`<a id="longitude-string"></a>

locations longitude coordinates

##### place_id: `string`<a id="place_id-string"></a>

Google Places location Id

##### timezone: `string`<a id="timezone-string"></a>

Timezone. Valid zone info name

##### holiday_pay: `boolean`<a id="holiday_pay-boolean"></a>

When true, holiday pay is enabled

##### sun_hours_close: `string`<a id="sun_hours_close-string"></a>

Sunday closing time

##### mon_hours_close: `string`<a id="mon_hours_close-string"></a>

Monday closing time

##### tue_hours_close: `string`<a id="tue_hours_close-string"></a>

Tuesday closing time

##### wed_hours_close: `string`<a id="wed_hours_close-string"></a>

Wednesday closing time

##### thu_hours_close: `string`<a id="thu_hours_close-string"></a>

Thursday closing time

##### fri_hours_close: `string`<a id="fri_hours_close-string"></a>

Friday closing time

##### sat_hours_close: `string`<a id="sat_hours_close-string"></a>

Saturday closing time

##### sun_hours_open: `string`<a id="sun_hours_open-string"></a>

Sunday opening time

##### mon_hours_open: `string`<a id="mon_hours_open-string"></a>

Monday opening time

##### tue_hours_open: `string`<a id="tue_hours_open-string"></a>

Tuesday opening time

##### wed_hours_open: `string`<a id="wed_hours_open-string"></a>

Wednesday opening time

##### thu_hours_open: `string`<a id="thu_hours_open-string"></a>

Thursday opening time

##### fri_hours_open: `string`<a id="fri_hours_open-string"></a>

Friday opening time

##### sat_hours_open: `string`<a id="sat_hours_open-string"></a>

Saturday opening time

##### sun_is_closed: `boolean`<a id="sun_is_closed-boolean"></a>

If true, location is closed on Sunday

##### mon_is_closed: `boolean`<a id="mon_is_closed-boolean"></a>

If true, location is closed on Monday

##### tue_is_closed: `boolean`<a id="tue_is_closed-boolean"></a>

If true, location is closed on Tuesday

##### wed_is_closed: `boolean`<a id="wed_is_closed-boolean"></a>

If true, location is closed on Wednesday

##### thu_is_closed: `boolean`<a id="thu_is_closed-boolean"></a>

If true, location is closed on Thursday

##### fri_is_closed: `boolean`<a id="fri_is_closed-boolean"></a>

If true, location is closed on Friday

##### sat_is_closed: `boolean`<a id="sat_is_closed-boolean"></a>

If true, location is closed on Saturday

##### enable_shift_feedback: `boolean`<a id="enable_shift_feedback-boolean"></a>

If true end of shift feedback requests are enabled

##### shift_feedback: `boolean`<a id="shift_feedback-boolean"></a>

If true end of shift feedback requests are enabled

##### coupon: `string`<a id="coupon-string"></a>

Optional coupon to apply to this location\\\'s billing

##### stripe_token_id: `string`<a id="stripe_token_id-string"></a>

Optional stripe payment token. If this is not provided, the account\\\'s default payment information will be used.

##### copy_from_id: `number`<a id="copy_from_id-number"></a>

Optional existing location id whose department and role structure the new location should copy

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LocationsCreateResponse](./models/locations-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.locations.getLocation`<a id="client7shiftslocationsgetlocation"></a>

Retrieve Location

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationResponse = await client7shifts.locations.getLocation({
  xApiVersion: "2022-05-01",
  companyId: 1,
  locationId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LocationsGetLocationResponse](./models/locations-get-location-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.locations.listGet`<a id="client7shiftslocationslistget"></a>

List Locations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGetResponse = await client7shifts.locations.listGet({
  xApiVersion: "2022-05-01",
  companyId: 1,
  deleted: false,
  limit: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return locations that have been modified since the specified date. Format YYYY-MM-DD

##### deleted: `boolean`<a id="deleted-boolean"></a>

When TRUE the search will return deleted locations

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[LocationsListGetResponse](./models/locations-list-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.locations.removeLocationById`<a id="client7shiftslocationsremovelocationbyid"></a>

Delete Location

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLocationByIdResponse =
  await client7shifts.locations.removeLocationById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.locations.updateLocationById`<a id="client7shiftslocationsupdatelocationbyid"></a>

Update Location

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLocationByIdResponse =
  await client7shifts.locations.updateLocationById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    name: "Quackers",
    city: "Toronto",
    country: "CA",
    state: "true",
    shift_feedback: true,
    formatted_address: "200 Bathurst Street, Toronto, ON, Canada",
    lat: 43.6478436,
    lng: -79.4043708,
    place_id: "ChIJUyrhFOc0K4gRyuFq6AUlfmE",
    timezone: "America/Chicago",
    department_based_budget: false,
    holiday_pay: false,
    auto_send_log_book_time: "57030",
    sun_hours_close: "57030",
    mon_hours_close: "57030",
    tue_hours_close: "57030",
    wed_hours_close: "57030",
    thu_hours_close: "57030",
    fri_hours_close: "57030",
    sat_hours_close: "57030",
    sun_hours_open: "57030",
    mon_hours_open: "57030",
    tue_hours_open: "57030",
    wed_hours_open: "57030",
    thu_hours_open: "57030",
    fri_hours_open: "57030",
    sat_hours_open: "57030",
    sun_is_closed: true,
    mon_is_closed: true,
    tue_is_closed: true,
    wed_is_closed: true,
    thu_is_closed: true,
    fri_is_closed: true,
    sat_is_closed: true,
    message: "msg",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### name: `string`<a id="name-string"></a>

Location name

##### city: `string`<a id="city-string"></a>

City

##### country: `string`<a id="country-string"></a>

Country

##### state: `string`<a id="state-string"></a>

State or province

##### shift_feedback: `boolean`<a id="shift_feedback-boolean"></a>

If true end of shift feedback requests are enabled

##### formatted_address: `string`<a id="formatted_address-string"></a>

##### lat: `number`<a id="lat-number"></a>

##### lng: `number`<a id="lng-number"></a>

##### place_id: `string`<a id="place_id-string"></a>

##### timezone: `string`<a id="timezone-string"></a>

Timezone. Valid zone info name

##### hash: `string`<a id="hash-string"></a>

##### department_based_budget: `boolean`<a id="department_based_budget-boolean"></a>

##### holiday_pay: `boolean`<a id="holiday_pay-boolean"></a>

When true, holiday pay is enabled

##### auto_send_log_book_time: `string`<a id="auto_send_log_book_time-string"></a>

A timestamp with hh:mm:ss format

##### sun_hours_close: `string`<a id="sun_hours_close-string"></a>

Sunday closing time

##### mon_hours_close: `string`<a id="mon_hours_close-string"></a>

Monday closing time

##### tue_hours_close: `string`<a id="tue_hours_close-string"></a>

Tuesday closing time

##### wed_hours_close: `string`<a id="wed_hours_close-string"></a>

Wednesday closing time

##### thu_hours_close: `string`<a id="thu_hours_close-string"></a>

Thursday closing time

##### fri_hours_close: `string`<a id="fri_hours_close-string"></a>

Friday closing time

##### sat_hours_close: `string`<a id="sat_hours_close-string"></a>

Saturday closing time

##### sun_hours_open: `string`<a id="sun_hours_open-string"></a>

Sunday opening time

##### mon_hours_open: `string`<a id="mon_hours_open-string"></a>

Monday opening time

##### tue_hours_open: `string`<a id="tue_hours_open-string"></a>

Tuesday opening time

##### wed_hours_open: `string`<a id="wed_hours_open-string"></a>

Wednesday opening time

##### thu_hours_open: `string`<a id="thu_hours_open-string"></a>

Thursday opening time

##### fri_hours_open: `string`<a id="fri_hours_open-string"></a>

Friday opening time

##### sat_hours_open: `string`<a id="sat_hours_open-string"></a>

Saturday opening time

##### sun_is_closed: `boolean`<a id="sun_is_closed-boolean"></a>

If true, location is closed on Sunday

##### mon_is_closed: `boolean`<a id="mon_is_closed-boolean"></a>

If true, location is closed on Monday

##### tue_is_closed: `boolean`<a id="tue_is_closed-boolean"></a>

If true, location is closed on Tuesday

##### wed_is_closed: `boolean`<a id="wed_is_closed-boolean"></a>

If true, location is closed on Wednesday

##### thu_is_closed: `boolean`<a id="thu_is_closed-boolean"></a>

If true, location is closed on Thursday

##### fri_is_closed: `boolean`<a id="fri_is_closed-boolean"></a>

If true, location is closed on Friday

##### sat_is_closed: `boolean`<a id="sat_is_closed-boolean"></a>

If true, location is closed on Saturday

##### message: `string`<a id="message-string"></a>

Message visible to all employees

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LocationsUpdateLocationByIdResponse](./models/locations-update-location-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.createCategory`<a id="client7shiftslogbookcreatecategory"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCategoryResponse = await client7shifts.logBook.createCategory({
  xApiVersion: "2022-05-01",
  companyId: 1,
  name: "name_example",
  field_type: "dollar",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### col: `number`<a id="col-number"></a>

##### sort: `number`<a id="sort-number"></a>

##### field_type: `string`<a id="field_type-string"></a>

##### notify: `boolean`<a id="notify-boolean"></a>

##### required: `boolean`<a id="required-boolean"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookCreateCategoryResponse](./models/log-book-create-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_categories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.createComment`<a id="client7shiftslogbookcreatecomment"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCommentResponse = await client7shifts.logBook.createComment({
  xApiVersion: "2022-05-01",
  companyId: 1,
  log_book_id: 1,
  message: "message_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### log_book_id: `number`<a id="log_book_id-number"></a>

##### message: `string`<a id="message-string"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookCreateCommentResponse](./models/log-book-create-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.createPost`<a id="client7shiftslogbookcreatepost"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPostResponse = await client7shifts.logBook.createPost({
  xApiVersion: "2022-05-01",
  companyId: 1,
  location_id: 1,
  log_book_category_id: 1,
  date: "2020-01-01",
  message: "message_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### location_id: `number`<a id="location_id-number"></a>

##### log_book_category_id: `number`<a id="log_book_category_id-number"></a>

##### date: `string`<a id="date-string"></a>

The posted date. Format YYYY-MM-DD

##### message: `string`<a id="message-string"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### attachments: [`LogBookCreatePostRequestAttachmentsInner`](./models/log-book-create-post-request-attachments-inner.ts)[]<a id="attachments-logbookcreatepostrequestattachmentsinnermodelslog-book-create-post-request-attachments-innerts"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookCreatePostResponse](./models/log-book-create-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_posts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.deleteCategoryById`<a id="client7shiftslogbookdeletecategorybyid"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCategoryByIdResponse =
  await client7shifts.logBook.deleteCategoryById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `number`<a id="id-number"></a>

Category ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_categories/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.deleteComment`<a id="client7shiftslogbookdeletecomment"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCommentResponse = await client7shifts.logBook.deleteComment({
  xApiVersion: "2022-05-01",
  companyId: 1,
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `number`<a id="id-number"></a>

Log Book Comment ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_comments/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.deletePost`<a id="client7shiftslogbookdeletepost"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePostResponse = await client7shifts.logBook.deletePost({
  xApiVersion: "2022-05-01",
  companyId: 1,
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `number`<a id="id-number"></a>

Log Book Post ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_posts/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.getComment`<a id="client7shiftslogbookgetcomment"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentResponse = await client7shifts.logBook.getComment({
  xApiVersion: "2022-05-01",
  companyId: 1,
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `number`<a id="id-number"></a>

Log Book Comment ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookGetCommentResponse](./models/log-book-get-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_comments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.getPost`<a id="client7shiftslogbookgetpost"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPostResponse = await client7shifts.logBook.getPost({
  xApiVersion: "2022-05-01",
  companyId: 1,
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `number`<a id="id-number"></a>

Log Book Post ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookGetPostResponse](./models/log-book-get-post-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_posts/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.listCategories`<a id="client7shiftslogbooklistcategories"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse = await client7shifts.logBook.listCategories({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookListCategoriesResponse](./models/log-book-list-categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.listComments`<a id="client7shiftslogbooklistcomments"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCommentsResponse = await client7shifts.logBook.listComments({
  xApiVersion: "2022-05-01",
  companyId: 1,
  logBookIds: [1],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### logBookIds: `number`[]<a id="logbookids-number"></a>

Log book post id associated with log book comments

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookListCommentsResponse](./models/log-book-list-comments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.listPosts`<a id="client7shiftslogbooklistposts"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPostsResponse = await client7shifts.logBook.listPosts({
  xApiVersion: "2022-05-01",
  companyId: 1,
  date: "2020-01-01",
  postedDateGte: "2020-01-01",
  postedDateLte: "2020-01-01",
  orderField: "date",
  orderDir: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### logBookCategoryId: `number`<a id="logbookcategoryid-number"></a>

Log Book Category ID

##### userId: `number`<a id="userid-number"></a>

Post Author User ID

##### date: `string`<a id="date-string"></a>

Date of log book creation, format YYYY-MM-DD

##### postedDateGte: `string`<a id="posteddategte-string"></a>

List only log book posts from dates inclusive after, format YYYY-MM-DD

##### postedDateLte: `string`<a id="posteddatelte-string"></a>

List only log book posts from dates inclusive before, format YYYY-MM-DD

##### message: `string`<a id="message-string"></a>

List only posts containing the message

##### orderField: `'date' | 'id'`<a id="orderfield-date--id"></a>

Order listed log book posts by a field

##### orderDir: `'asc' | 'desc'`<a id="orderdir-asc--desc"></a>

Specified direction to order listed log book posts

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[LogBookListPostsResponse](./models/log-book-list-posts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_posts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.logBook.updateCategoryById`<a id="client7shiftslogbookupdatecategorybyid"></a>

Beta

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCategoryByIdResponse =
  await client7shifts.logBook.updateCategoryById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    id: 1,
    field_type: "dollar",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `number`<a id="id-number"></a>

Category ID

##### name: `string`<a id="name-string"></a>

##### col: `number`<a id="col-number"></a>

##### sort: `number`<a id="sort-number"></a>

##### field_type: `string`<a id="field_type-string"></a>

##### notify: `boolean`<a id="notify-boolean"></a>

##### required: `boolean`<a id="required-boolean"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[LogBookUpdateCategoryByIdResponse](./models/log-book-update-category-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/log_book_categories/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.receipts.createReceipt`<a id="client7shiftsreceiptscreatereceipt"></a>

Create Receipt

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReceiptResponse = await client7shifts.receipts.createReceipt({
  xApiVersion: "2022-05-01",
  companyId: 1,
  receipt_id: "receipt_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### location_id: `number`<a id="location_id-number"></a>

The 7shifts location_id this receipt belongs to

##### receipt_date: `string`<a id="receipt_date-string"></a>

Receipt create date time. UTC date time in ISO8601 format

##### net_total: `number`<a id="net_total-number"></a>

The net total of the receipt pre tax, post-discounts, pre tips. In cents

##### gross_total: `number`<a id="gross_total-number"></a>

The gross total of the receipt in cents

##### total_receipt_discounts: `number`<a id="total_receipt_discounts-number"></a>

The total discounts of the receipt in cents

##### tips: `number`<a id="tips-number"></a>

Total tips in cents

##### external_user_id: `string`<a id="external_user_id-string"></a>

External user ID of the sales receipt in your system (must be unique per 7shifts location).

##### revenue_center: `string`<a id="revenue_center-string"></a>

Label for the revenue centre for the receipt

##### receipt_lines: [`ReceiptsCreateReceiptRequestAllOfReceiptLines`](./models/receipts-create-receipt-request-all-of-receipt-lines.ts)[]<a id="receipt_lines-receiptscreatereceiptrequestallofreceiptlinesmodelsreceipts-create-receipt-request-all-of-receipt-linests"></a>

Receipt line items

##### tip_details: [`ReceiptsCreateReceiptRequestAllOfTipDetails`](./models/receipts-create-receipt-request-all-of-tip-details.ts)[]<a id="tip_details-receiptscreatereceiptrequestalloftipdetailsmodelsreceipts-create-receipt-request-all-of-tip-detailsts"></a>

Tip line items

##### status: `string`<a id="status-string"></a>

Status of the receipt

##### order_type: `string`<a id="order_type-string"></a>

Order type

##### dining_option: `string`<a id="dining_option-string"></a>

Dining option

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ReceiptsCreateReceiptResponse](./models/receipts-create-receipt-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/receipts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.receipts.getReceipt`<a id="client7shiftsreceiptsgetreceipt"></a>

Retrieve Receipt

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReceiptResponse = await client7shifts.receipts.getReceipt({
  xApiVersion: "2022-05-01",
  companyId: 1,
  receiptId: "receiptId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### receiptId: `string`<a id="receiptid-string"></a>

Receipt UUID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ReceiptsGetReceiptResponse](./models/receipts-get-receipt-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/receipts/{receipt_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.receipts.getSummary`<a id="client7shiftsreceiptsgetsummary"></a>

Retrieve Receipts Summary

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSummaryResponse = await client7shifts.receipts.getSummary({
  xApiVersion: "2022-05-01",
  companyId: 1,
  locationId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### receiptDateGte: `string`<a id="receiptdategte-string"></a>

Return receipts that were created on or after a specific date. Limit to 31-day range with receipt_date[lte].

##### receiptDateLte: `string`<a id="receiptdatelte-string"></a>

Return receipts that were created on or before a specific date. Limit to 31-day range with receipt_date[gte].

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return receipts that were modified on or after a specific date. Limited to past 30 days.

#### 🔄 Return<a id="🔄-return"></a>

[ReceiptsGetSummaryResponse](./models/receipts-get-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/receipts_summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.receipts.list`<a id="client7shiftsreceiptslist"></a>

List Receipts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.receipts.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  locationId: 1,
  status: "open",
  limit: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### receiptDateGte: `string`<a id="receiptdategte-string"></a>

Return receipts that were created on or after a specific date

##### receiptDateLte: `string`<a id="receiptdatelte-string"></a>

Return receipts that were created on or before a specific date

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return receipts that were modified on or after a specific date

##### status: `'open' | 'closed' | 'voided' | 'deleted'`<a id="status-open--closed--voided--deleted"></a>

Filter receipts by status type

##### externalUserId: `string`<a id="externaluserid-string"></a>

Filter receipts by external user id

##### cursor: `string`<a id="cursor-string"></a>

An opaque cursor for the next or previous result set.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[ReceiptsListResponse](./models/receipts-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/receipts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.receipts.updateReceipt`<a id="client7shiftsreceiptsupdatereceipt"></a>

Update Receipt

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateReceiptResponse = await client7shifts.receipts.updateReceipt({
  xApiVersion: "2022-05-01",
  companyId: 1,
  receiptId: "receiptId_example",
  receipt_date: "2021-01-01T00:00:00.000Z",
  net_total: 1,
  status: "open",
  order_type: "dine_in",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### net_total: `number`<a id="net_total-number"></a>

The net total of the receipt pre tax, post-discounts, pre tips. In cents

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### receiptId: `string`<a id="receiptid-string"></a>

Receipt ID.  Either 7shifts receipt UUID or a combination of the External ID of the sales receipt in your system and a Location ID. External ID\'s must start with \'ext:\' and the format is ext:location_id:receipt_id.

##### receipt_date: `string`<a id="receipt_date-string"></a>

Receipt create date time. UTC date time in ISO8601 format

##### gross_total: `number`<a id="gross_total-number"></a>

The gross total of the receipt in cents

##### total_receipt_discounts: `number`<a id="total_receipt_discounts-number"></a>

The total discounts of the receipt in cents

##### tips: `number`<a id="tips-number"></a>

Total tips in cents

##### external_user_id: `string`<a id="external_user_id-string"></a>

External user ID of the sales receipt in your system (must be unique per 7shifts location).

##### revenue_center: `string`<a id="revenue_center-string"></a>

Label for the revenue center for the receipt

##### receipt_lines: [`ReceiptsUpdateReceiptRequestReceiptLinesInner`](./models/receipts-update-receipt-request-receipt-lines-inner.ts)[]<a id="receipt_lines-receiptsupdatereceiptrequestreceiptlinesinnermodelsreceipts-update-receipt-request-receipt-lines-innerts"></a>

Receipt line items

##### tip_details: [`ReceiptsUpdateReceiptRequestTipDetailsInner`](./models/receipts-update-receipt-request-tip-details-inner.ts)[]<a id="tip_details-receiptsupdatereceiptrequesttipdetailsinnermodelsreceipts-update-receipt-request-tip-details-innerts"></a>

Tip line items

##### status: `string`<a id="status-string"></a>

Status of the receipt

##### order_type: `string`<a id="order_type-string"></a>

Order type

##### dining_option: `string`<a id="dining_option-string"></a>

Dining option

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ReceiptsUpdateReceiptResponse](./models/receipts-update-receipt-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/receipts/{receipt_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.reports.getDailySalesAndLabor`<a id="client7shiftsreportsgetdailysalesandlabor"></a>

Retrieve Daily Sales &amp; Labor

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailySalesAndLaborResponse =
  await client7shifts.reports.getDailySalesAndLabor({
    xApiVersion: "2022-05-01",
    startDate: "0480-72-88",
    endDate: "0480-72-88",
    locationId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

Starting date for which you want the daily sales and labor data for.

##### endDate: `string`<a id="enddate-string"></a>

Ending date for which you want the daily sales and labor data for.

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetDailySalesAndLaborResponse](./models/reports-get-daily-sales-and-labor-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/reports/daily_sales_and_labor` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.reports.getDailyStats`<a id="client7shiftsreportsgetdailystats"></a>

Retrieve Daily Stats

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailyStatsResponse = await client7shifts.reports.getDailyStats({
  xApiVersion: "2022-05-01",
  companyId: 1,
  locationId: 1,
  date: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### date: `string | Date`<a id="date-string--date"></a>

Date

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### includeFuture: `boolean`<a id="includefuture-boolean"></a>

include future

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetDailyStatsResponse](./models/reports-get-daily-stats-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v2/company/{company_id}/location/{location_id}/daily_stats` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.reports.getWorkedHoursWages`<a id="client7shiftsreportsgetworkedhourswages"></a>

Retrieve Worked Hours &amp; Wages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkedHoursWagesResponse =
  await client7shifts.reports.getWorkedHoursWages({
    xApiVersion: "2022-05-01",
    punches: true,
    companyId: 1,
    from: "0480-72-88",
    to: "0480-72-88",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### punches: `boolean`<a id="punches-boolean"></a>

Whether or not to use the punch labour source

##### companyId: `number`<a id="companyid-number"></a>

The company id to pull the report for.

##### from: `string`<a id="from-string"></a>

Starting date for which you want the report to start.

##### to: `string`<a id="to-string"></a>

Ending date for which you want the report to end.

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

The location id for which you want the report for.

##### departmentId: `number`<a id="departmentid-number"></a>

The department id for the report.

##### roleId: `number`<a id="roleid-number"></a>

The role id for the report

##### userId: `number`<a id="userid-number"></a>

The user id the report should be fetched for - internal use only

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetWorkedHoursWagesResponse](./models/reports-get-worked-hours-wages-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/reports/hours_and_wages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.roles.createRole`<a id="client7shiftsrolescreaterole"></a>

Create Role

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRoleResponse = await client7shifts.roles.createRole({
  xApiVersion: "2022-05-01",
  companyId: 1,
  name: "name_example",
  color: "color_example",
  location_id: 1,
  department_id: 1,
  sort: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Role name

##### color: `string`<a id="color-string"></a>

A hex number representing the color

##### location_id: `number`<a id="location_id-number"></a>

Location ID

##### department_id: `number`<a id="department_id-number"></a>

Department ID. If this role is not assigned to a department, this value will be zero

##### companyId: `number`<a id="companyid-number"></a>

The company id

##### sort: `number`<a id="sort-number"></a>

The order in which the roles will be listed in the web app

##### job_code: `string`<a id="job_code-string"></a>

Job code

##### stations: [`RolesCreateRoleRequestStationsInner`](./models/roles-create-role-request-stations-inner.ts)[]<a id="stations-rolescreaterolerequeststationsinnermodelsroles-create-role-request-stations-innerts"></a>

Stations this role contains

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[RolesCreateRoleResponse](./models/roles-create-role-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/roles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.roles.deleteRole`<a id="client7shiftsrolesdeleterole"></a>

Delete Role

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRoleResponse = await client7shifts.roles.deleteRole({
  xApiVersion: "2022-05-01",
  companyId: 1,
  roleId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/roles/{role_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.roles.getRole`<a id="client7shiftsrolesgetrole"></a>

Retrieve Role

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRoleResponse = await client7shifts.roles.getRole({
  xApiVersion: "2022-05-01",
  companyId: 1,
  roleId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[RolesGetRoleResponse](./models/roles-get-role-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/roles/{role_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.roles.list`<a id="client7shiftsroleslist"></a>

List Roles

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.roles.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  modifiedSince: "2020-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### ids: `number`[]<a id="ids-number"></a>

Role IDs

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return roles that have been modified since the specified date. Format YYYY-MM-DD

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[RolesListResponse](./models/roles-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/roles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.roles.updateRoleById`<a id="client7shiftsrolesupdaterolebyid"></a>

Update Role

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRoleByIdResponse = await client7shifts.roles.updateRoleById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  roleId: 1,
  department_id: 0,
  sort: 0,
  color: "76a939",
  name: "Bartender",
  job_code: "BOH-Bartender",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### department_id: `number`<a id="department_id-number"></a>

Department ID. If this role is not assigned to a department, this value will be zero

##### sort: `number`<a id="sort-number"></a>

The order in which the roles will be listed in the web app

##### color: `string`<a id="color-string"></a>

A hex number representing the color

##### name: `string`<a id="name-string"></a>

Role name

##### job_code: `string`<a id="job_code-string"></a>

Job code

##### stations: [`RolesUpdateRoleByIdRequestStationsInner`](./models/roles-update-role-by-id-request-stations-inner.ts)[]<a id="stations-rolesupdaterolebyidrequeststationsinnermodelsroles-update-role-by-id-request-stations-innerts"></a>

Stations this role contains

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[RolesUpdateRoleByIdResponse](./models/roles-update-role-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/roles/{role_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.scheduleEnforcement.listScheduledShifts`<a id="client7shiftsscheduleenforcementlistscheduledshifts"></a>

List Scheduled Shifts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listScheduledShiftsResponse =
  await client7shifts.scheduleEnforcement.listScheduledShifts({
    xApiVersion: "2022-05-01",
    companyId: 1,
    id: "id_example",
    locationId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### id: `string`<a id="id-string"></a>

Specified user_id of the user to check if scheduled. If the value begins with punch_id: then this specifies a user punch_id.

##### locationId: `number`<a id="locationid-number"></a>

Location ID.

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### gracePeriod: `number`<a id="graceperiod-number"></a>

Grace period in minutes.

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleEnforcementListScheduledShiftsResponse](./models/schedule-enforcement-list-scheduled-shifts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shifts_scheduled/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.scheduleEvents.createEvent`<a id="client7shiftsscheduleeventscreateevent"></a>

Create Event

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEventResponse = await client7shifts.scheduleEvents.createEvent({
  xApiVersion: "2022-05-01",
  companyId: 1,
  title: "title_example",
  location_ids: [1],
  start_date: "2019-01-01",
  start_time: "09:00:00",
  end_date: "2019-01-02",
  end_time: "61200",
  color: "5ea17c",
  is_multi_day: true,
  recurrence:
    "Daily for 10 occurrences ==> (1997 9:00 AM EDT) September 2-11 DTSTART;TZID=America/New_York:19970902T090000 RRULE:FREQ=DAILY;COUNT=10",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The name of the event

##### location_ids: `number`[]<a id="location_ids-number"></a>

The list of locations where this event occurs

##### start_date: `string`<a id="start_date-string"></a>

Start date

##### start_time: `string`<a id="start_time-string"></a>

Start time

##### end_date: `string`<a id="end_date-string"></a>

End date for multi-day events

##### end_time: `string`<a id="end_time-string"></a>

End time

##### is_multi_day: `boolean`<a id="is_multi_day-boolean"></a>

If true, the event is a multi-day event

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### description: `string`<a id="description-string"></a>

Description for event

##### color: `string`<a id="color-string"></a>

A hex number representing the color

##### recurrence: `string`<a id="recurrence-string"></a>

Recurrence rules as defined by the RFC 5545 spec

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleEventsCreateEventResponse](./models/schedule-events-create-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/events` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.scheduleEvents.deleteEvent`<a id="client7shiftsscheduleeventsdeleteevent"></a>

Delete Event

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEventResponse = await client7shifts.scheduleEvents.deleteEvent({
  xApiVersion: "2022-05-01",
  companyId: 1,
  eventId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### eventId: `number`<a id="eventid-number"></a>

Event ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### recurrenceTarget: `string`<a id="recurrencetarget-string"></a>

Recurrence Target

##### startDate: `string`<a id="startdate-string"></a>

Start of the targeted range for recurrence. Format YYYY-MM-DD HH:MM:SS

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleEventsDeleteEventResponse](./models/schedule-events-delete-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/events/{event_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.scheduleEvents.getEventById`<a id="client7shiftsscheduleeventsgeteventbyid"></a>

Retrieve Event

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventByIdResponse = await client7shifts.scheduleEvents.getEventById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  eventId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### eventId: `number`<a id="eventid-number"></a>

Event ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleEventsGetEventByIdResponse](./models/schedule-events-get-event-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/events/{event_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.scheduleEvents.listEvents`<a id="client7shiftsscheduleeventslistevents"></a>

List Events

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEventsResponse = await client7shifts.scheduleEvents.listEvents({
  xApiVersion: "2022-05-01",
  companyId: 1,
  startDate: "1970-01-01",
  endDate: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### startDate: `string | Date`<a id="startdate-string--date"></a>

A date string to request only events within a range.  Format YYYY-MM-DD

##### endDate: `string | Date`<a id="enddate-string--date"></a>

A date string to request only events within a range.  Format YYYY-MM-DD

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleEventsListEventsResponse](./models/schedule-events-list-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.scheduleEvents.updateEventById`<a id="client7shiftsscheduleeventsupdateeventbyid"></a>

Update Event

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventByIdResponse =
  await client7shifts.scheduleEvents.updateEventById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    eventId: 1,
    title: "title_example",
    location_ids: [1],
    start_date: "2019-01-01",
    start_time: "09:00:00",
    end_date: "2019-01-02",
    end_time: "61200",
    color: "5ea17c",
    is_multi_day: true,
    recurrence:
      "Daily for 10 occurrences ==> (1997 9:00 AM EDT) September 2-11 DTSTART;TZID=America/New_York:19970902T090000 RRULE:FREQ=DAILY;COUNT=10",
    recurrence_target: "THIS",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### eventId: `number`<a id="eventid-number"></a>

Event ID

##### title: `string`<a id="title-string"></a>

The name of the event

##### description: `string`<a id="description-string"></a>

Description for event

##### location_ids: `number`[]<a id="location_ids-number"></a>

The list of locations where this event occurs

##### start_date: `string`<a id="start_date-string"></a>

Start date

##### start_time: `string`<a id="start_time-string"></a>

Start time

##### end_date: `string`<a id="end_date-string"></a>

End date for multi-day events

##### end_time: `string`<a id="end_time-string"></a>

End time

##### color: `string`<a id="color-string"></a>

A hex number representing the color

##### is_multi_day: `boolean`<a id="is_multi_day-boolean"></a>

If true, the event is a multi-day event

##### recurrence: `string`<a id="recurrence-string"></a>

Recurrence rules as defined by the RFC 5545 spec

##### recurrence_target: `string`<a id="recurrence_target-string"></a>

describes which recurring events will be updated

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ScheduleEventsUpdateEventByIdResponse](./models/schedule-events-update-event-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/events/{event_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.shiftFeedback.list`<a id="client7shiftsshiftfeedbacklist"></a>

List Shift Feedback

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.shiftFeedback.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  startDate: "1970-01-01",
  endDate: "1970-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### startDate: `string | Date`<a id="startdate-string--date"></a>

The start date of the range you want shift feedback for

##### endDate: `string | Date`<a id="enddate-string--date"></a>

The end date of the range you want shift feedback for (inclusive)

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[ShiftFeedbackListResponse](./models/shift-feedback-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shift_feedback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.shifts.createNewShift`<a id="client7shiftsshiftscreatenewshift"></a>

Create Shift

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewShiftResponse = await client7shifts.shifts.createNewShift({
  xApiVersion: "2022-05-01",
  companyId: 1,
  location_id: 1,
  start: "1970-01-01T00:00:00.00Z",
  end: "1970-01-01T00:00:00.00Z",
  unassigned_skill_level: 1,
  status: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### location_id: `number`<a id="location_id-number"></a>

Shift ID

##### start: `string`<a id="start-string"></a>

Start date time of the shift. UTC in ISO8601 format.

##### end: `string`<a id="end-string"></a>

End date time of the shift. UTC in ISO8601 format.

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### user_id: `number`<a id="user_id-number"></a>

User ID

##### department_id: `number`<a id="department_id-number"></a>

Department ID. Required if the location uses departments.

##### role_id: `number`<a id="role_id-number"></a>

Role ID. Required if the location uses roles.

##### station_id: `number`<a id="station_id-number"></a>

Station ID

##### close: `boolean`<a id="close-boolean"></a>

Set to true if the shift ends at closing time. If set, end is not used.

##### business_decline: `boolean`<a id="business_decline-boolean"></a>

Set to true if the shift ends at business decline.

##### notes: `string`<a id="notes-string"></a>

Notes displayed on a shift.

##### draft: `boolean`<a id="draft-boolean"></a>

If true the shift is not published.

##### notified: `boolean`<a id="notified-boolean"></a>

If true the user has been notified of the published shift.

##### open: `boolean`<a id="open-boolean"></a>

Set to true if the shift is not assigned to any user. Open shifts can be requested by users.

##### open_offer_type: `number`<a id="open_offer_type-number"></a>

Set when open is true. Set to 1 for everyone can request an open shift; set to 1 if only offered to specified role.

##### unassigned: `boolean`<a id="unassigned-boolean"></a>

Internal use only

##### unassigned_skill_level: `number`<a id="unassigned_skill_level-number"></a>

The skill level required for this shift.

##### status: `number`<a id="status-number"></a>

Shift status type. 0 - none, 1 - sick, 2 - no show, 3 - late, 4 - call out, 5 - left late.

##### late_minutes: `number`<a id="late_minutes-number"></a>

Number of minutes a user can clock in late after the shift starts.

##### breaks: [`ShiftsCreateNewShiftRequestBreaksInner`](./models/shifts-create-new-shift-request-breaks-inner.ts)[]<a id="breaks-shiftscreatenewshiftrequestbreaksinnermodelsshifts-create-new-shift-request-breaks-innerts"></a>

Breaks to be created with the shift

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsCreateNewShiftResponse](./models/shifts-create-new-shift-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shifts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.shifts.deleteShiftById`<a id="client7shiftsshiftsdeleteshiftbyid"></a>

Delete Shift

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteShiftByIdResponse = await client7shifts.shifts.deleteShiftById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  shiftId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### shiftId: `number`<a id="shiftid-number"></a>

Shift ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shifts/{shift_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.shifts.getShiftById`<a id="client7shiftsshiftsgetshiftbyid"></a>

Retrieve Shift

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getShiftByIdResponse = await client7shifts.shifts.getShiftById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  shiftId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### shiftId: `number`<a id="shiftid-number"></a>

Shift ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### includeDeleted: `boolean`<a id="includedeleted-boolean"></a>

Return the shift even if its deleted

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsGetShiftByIdResponse](./models/shifts-get-shift-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shifts/{shift_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.shifts.list`<a id="client7shiftsshiftslist"></a>

List Shifts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.shifts.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  limit: 100,
  shiftIds: [123, 231, 222],
  departmentIds: [123, 231, 222],
  startLte: "2021-01-30T08:30:00Z",
  startGte: "2021-01-30T08:30:00Z",
  endLte: "2021-01-30T08:30:00Z",
  endGte: "2021-01-30T08:30:00Z",
  deleted: false,
  draft: false,
  includeDraft: false,
  modifiedSince: "2021-01-30T08:30:00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### shiftIds: `number`[]<a id="shiftids-number"></a>

A comma separated list of Shift IDs

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### departmentIds: `number`[]<a id="departmentids-number"></a>

Department IDs

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### startLte: `string`<a id="startlte-string"></a>

Return shifts that start before or on specified date. In ISO8601 Format

##### startGte: `string`<a id="startgte-string"></a>

Return shifts that start after or on specified date time. In ISO8601 Format

##### endLte: `string`<a id="endlte-string"></a>

Return shifts that end before or on specified date time. In ISO8601 Format

##### endGte: `string`<a id="endgte-string"></a>

Return shifts that end after or on specified date time. In ISO8601 Format

##### deleted: `boolean`<a id="deleted-boolean"></a>

Return shifts that were published and have been deleted. Cannot be combined with draft.

##### draft: `boolean`<a id="draft-boolean"></a>

Return shifts that are in draft. Draft shifts have created, edited or deleted but not been published. Overrides deleted flag.

##### includeDraft: `boolean`<a id="includedraft-boolean"></a>

Return shifts that are published, and also shifts in draft. Overrides deleted flag and draft flag.

##### open: `boolean`<a id="open-boolean"></a>

Return shifts that are open. Open shifts means anyone can request to take it and not assigned to any individual.

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return only shifts that have been modified from specified date time. In ISO8601 Format

##### sortBy: `string`<a id="sortby-string"></a>

Sort by either start or end

##### sortDir: `string`<a id="sortdir-string"></a>

Sort by direction (asc, desc)

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsListResponse](./models/shifts-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.shifts.updateShiftById`<a id="client7shiftsshiftsupdateshiftbyid"></a>

Update Shift

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateShiftByIdResponse = await client7shifts.shifts.updateShiftById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  shiftId: 1,
  start: "2021-01-01T00:00:00.000Z",
  end: "2021-01-01T00:00:00.000Z",
  open_offer_type: 0,
  unassigned_skill_level: 1,
  status: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### shiftId: `number`<a id="shiftid-number"></a>

Shift ID

##### location_id: `number`<a id="location_id-number"></a>

Location ID

##### user_id: `number`<a id="user_id-number"></a>

User ID

##### department_id: `number`<a id="department_id-number"></a>

Department ID. Required if the location uses departments

##### role_id: `number`<a id="role_id-number"></a>

Role ID. Required if the location uses roles

##### station_id: `number`<a id="station_id-number"></a>

The station assigned to the shift

##### start: `string`<a id="start-string"></a>

Start date time of the shift. UTC in ISO8601 format

##### end: `string`<a id="end-string"></a>

End date time of the shift. UTC in ISO8601 format

##### close: `boolean`<a id="close-boolean"></a>

Set to true if the shift ends at closing time. If set end is not used.

##### business_decline: `boolean`<a id="business_decline-boolean"></a>

Set to true if the shift ends at business decline.

##### notes: `string`<a id="notes-string"></a>

Notes displayed on a shift

##### draft: `boolean`<a id="draft-boolean"></a>

If true the shift is not published.

##### open: `boolean`<a id="open-boolean"></a>

Set to true if the shift is not assigned to any user. Open shifts can be requested by users.

##### open_offer_type: `number`<a id="open_offer_type-number"></a>

Set when open is true. Set to 0 when everyone at a location can request an open shift; set to 1 if only offered to specified role.

##### unassigned: `boolean`<a id="unassigned-boolean"></a>

When true the shift is unassigned. Internal use only.

##### unassigned_skill_level: `number`<a id="unassigned_skill_level-number"></a>

The skill level required for this shift.  * 1: Beginner  * 2: Intermediate  * 3: Experienced 

##### status: `number`<a id="status-number"></a>

Shift status type.  * 0: None  * 1: Sick  * 2: No Show  * 3: Late  * 4: Call Out  * 5: Left Late 

##### late_minutes: `number`<a id="late_minutes-number"></a>

Number of minutes a user can clock in late after the shift starts.

##### breaks: [`ShiftsUpdateShiftByIdRequestBreaksInner`](./models/shifts-update-shift-by-id-request-breaks-inner.ts)[]<a id="breaks-shiftsupdateshiftbyidrequestbreaksinnermodelsshifts-update-shift-by-id-request-breaks-innerts"></a>

Breaks to be updated with the shift

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsUpdateShiftByIdResponse](./models/shifts-update-shift-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/shifts/{shift_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.clearTask`<a id="client7shiftstaskmanagementcleartask"></a>

Clear task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clearTaskResponse = await client7shifts.taskManagement.clearTask({
  xApiVersion: "2022-05-01",
  companyId: 1,
  listId: 1,
  taskId: 1,
  user_id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `number`<a id="user_id-number"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### listId: `number`<a id="listid-number"></a>

Task List ID

##### taskId: `number`<a id="taskid-number"></a>

Task ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementClearTaskResponse](./models/task-management-clear-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_lists/{list_id}/tasks/{task_id}/clear` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.createTaskListTemplate`<a id="client7shiftstaskmanagementcreatetasklisttemplate"></a>

Create Task List Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTaskListTemplateResponse =
  await client7shifts.taskManagement.createTaskListTemplate({
    xApiVersion: "2022-05-01",
    companyId: 1,
    title: "title_example",
    recurrence: "RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO",
    assignments: [
      {
        location_id: 1,
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### recurrence: `string`<a id="recurrence-string"></a>

recurrence rules as defined by the RFC 5545 spec

##### assignments: [`TaskManagementCreateTaskListTemplateRequestAssignmentsInner`](./models/task-management-create-task-list-template-request-assignments-inner.ts)[]<a id="assignments-taskmanagementcreatetasklisttemplaterequestassignmentsinnermodelstask-management-create-task-list-template-request-assignments-innerts"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### description: `string`<a id="description-string"></a>

##### due: [`TaskManagementCreateTaskListTemplateRequestDue`](./models/task-management-create-task-list-template-request-due.ts)<a id="due-taskmanagementcreatetasklisttemplaterequestduemodelstask-management-create-task-list-template-request-duets"></a>

##### time_frame: [`TaskManagementCreateTaskListTemplateRequestTimeFrame`](./models/task-management-create-task-list-template-request-time-frame.ts)<a id="time_frame-taskmanagementcreatetasklisttemplaterequesttimeframemodelstask-management-create-task-list-template-request-time-framets"></a>

##### task_templates: [`TaskManagementCreateTaskListTemplateRequestTaskTemplatesInner`](./models/task-management-create-task-list-template-request-task-templates-inner.ts)[]<a id="task_templates-taskmanagementcreatetasklisttemplaterequesttasktemplatesinnermodelstask-management-create-task-list-template-request-task-templates-innerts"></a>

##### status: `number`<a id="status-number"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementCreateTaskListTemplateResponse](./models/task-management-create-task-list-template-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_list_templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.createTaskTags`<a id="client7shiftstaskmanagementcreatetasktags"></a>

Create Task Tags

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTaskTagsResponse =
  await client7shifts.taskManagement.createTaskTags({
    companyId: 1234,
    requestBody: {
      tags: [
        {
          user_id: 1,
          task_id: 1,
        },
      ],
      company_id: 1,
    },
    xApiVersion: "2022-05-01",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### requestBody: [`TaskManagementCreateTaskTagsRequest`](./models/task-management-create-task-tags-request.ts)<a id="requestbody-taskmanagementcreatetasktagsrequestmodelstask-management-create-task-tags-requestts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.deleteTaskListTemplate`<a id="client7shiftstaskmanagementdeletetasklisttemplate"></a>

Delete Task List Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTaskListTemplateResponse =
  await client7shifts.taskManagement.deleteTaskListTemplate({
    xApiVersion: "2022-05-01",
    companyId: 1,
    uuid: "uuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### uuid: `string`<a id="uuid-string"></a>

Task List Template UUID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_list_templates/{uuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.deleteTaskTags`<a id="client7shiftstaskmanagementdeletetasktags"></a>

Delete Task Tags

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTaskTagsResponse =
  await client7shifts.taskManagement.deleteTaskTags({
    companyId: 1234,
    requestBody: {
      company_id: 1,
      uuids: ["uuids_example"],
    },
    xApiVersion: "2022-05-01",
    xCompanyGuid: "1310bfe1-cb3f-4f24-98a2-fde2bc504108",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### requestBody: [`TaskManagementDeleteTaskTagsRequest`](./models/task-management-delete-task-tags-request.ts)<a id="requestbody-taskmanagementdeletetasktagsrequestmodelstask-management-delete-task-tags-requestts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_tags` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.editTaskListTemplate`<a id="client7shiftstaskmanagementedittasklisttemplate"></a>

edit task list template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editTaskListTemplateResponse =
  await client7shifts.taskManagement.editTaskListTemplate({
    xApiVersion: "2022-05-01",
    companyId: 1,
    uuid: "uuid_example",
    recurrence: "RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### uuid: `string`<a id="uuid-string"></a>

Task List Template UUID

##### title: `string`<a id="title-string"></a>

##### description: `string`<a id="description-string"></a>

##### status: `number`<a id="status-number"></a>

##### task_templates: [`TaskManagementEditTaskListTemplateRequestTaskTemplatesInner`](./models/task-management-edit-task-list-template-request-task-templates-inner.ts)[]<a id="task_templates-taskmanagementedittasklisttemplaterequesttasktemplatesinnermodelstask-management-edit-task-list-template-request-task-templates-innerts"></a>

##### recurrence: `string`<a id="recurrence-string"></a>

recurrence rules as defined by the RFC 5545 spec

##### assignments: [`TaskManagementCreateTaskListTemplateRequestAssignmentsInner`](./models/task-management-create-task-list-template-request-assignments-inner.ts)[]<a id="assignments-taskmanagementcreatetasklisttemplaterequestassignmentsinnermodelstask-management-create-task-list-template-request-assignments-innerts"></a>

##### due: [`TaskManagementEditTaskListTemplateRequestDue`](./models/task-management-edit-task-list-template-request-due.ts)<a id="due-taskmanagementedittasklisttemplaterequestduemodelstask-management-edit-task-list-template-request-duets"></a>

##### time_frame: [`TaskManagementEditTaskListTemplateRequestTimeFrame`](./models/task-management-edit-task-list-template-request-time-frame.ts)<a id="time_frame-taskmanagementedittasklisttemplaterequesttimeframemodelstask-management-edit-task-list-template-request-time-framets"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementEditTaskListTemplateResponse](./models/task-management-edit-task-list-template-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_list_templates/{uuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.getSettings`<a id="client7shiftstaskmanagementgetsettings"></a>

Gets task management settings for a company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await client7shifts.taskManagement.getSettings({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementGetSettingsResponse](./models/task-management-get-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_management_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.getTaskList`<a id="client7shiftstaskmanagementgettasklist"></a>

Retrieve Task List

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskListResponse = await client7shifts.taskManagement.getTaskList({
  xApiVersion: "2022-05-01",
  companyId: 1,
  listId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### listId: `number`<a id="listid-number"></a>

List ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### userId: `number`<a id="userid-number"></a>

User ID

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementGetTaskListResponse](./models/task-management-get-task-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_lists/{list_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.getTaskListTemplate`<a id="client7shiftstaskmanagementgettasklisttemplate"></a>

Retrieve Task List Template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskListTemplateResponse =
  await client7shifts.taskManagement.getTaskListTemplate({
    xApiVersion: "2022-05-01",
    companyId: 1,
    uuid: "uuid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### uuid: `string`<a id="uuid-string"></a>

Task List Template UUID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementGetTaskListTemplateResponse](./models/task-management-get-task-list-template-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_list_templates/{uuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.getTaskListTemplates`<a id="client7shiftstaskmanagementgettasklisttemplates"></a>

Get task list templates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskListTemplatesResponse =
  await client7shifts.taskManagement.getTaskListTemplates({
    xApiVersion: "2022-05-01",
    companyId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementGetTaskListTemplates200Response](./models/task-management-get-task-list-templates200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_list_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.getTaskLists`<a id="client7shiftstaskmanagementgettasklists"></a>

List Task Lists

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskListsResponse = await client7shifts.taskManagement.getTaskLists({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### userId: `number`<a id="userid-number"></a>

User ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### uuid: `string`<a id="uuid-string"></a>

Task List Template UUID

##### activeOnDate: `string`<a id="activeondate-string"></a>

Show only tasks lists that were active on a date (YYYY-MM-DD)

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementGetTaskListsResponse](./models/task-management-get-task-lists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.listTaskListsSummary`<a id="client7shiftstaskmanagementlisttasklistssummary"></a>

List Task Lists Summary

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTaskListsSummaryResponse =
  await client7shifts.taskManagement.listTaskListsSummary({
    companyId: 1,
    locationId: 1,
    date: "0480-72-88",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### date: `string`<a id="date-string"></a>

Date of requested task lists

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementListTaskListsSummary200Response](./models/task-management-list-task-lists-summary200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_list_daily_summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.taskManagement.markComplete`<a id="client7shiftstaskmanagementmarkcomplete"></a>

Complete Task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markCompleteResponse = await client7shifts.taskManagement.markComplete({
  xApiVersion: "2022-05-01",
  companyId: 1,
  listId: 1,
  taskId: 1,
  user_id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `number`<a id="user_id-number"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### listId: `number`<a id="listid-number"></a>

Task List ID

##### taskId: `number`<a id="taskid-number"></a>

Task ID

##### completion_value: `any`<a id="completion_value-any"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TaskManagementMarkCompleteResponse](./models/task-management-mark-complete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/task_lists/{list_id}/tasks/{task_id}/complete` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.approveRequest`<a id="client7shiftstimeoffapproverequest"></a>

Approve Time Off Request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveRequestResponse = await client7shifts.timeOff.approveRequest({
  xApiVersion: "2022-05-01",
  timeOffId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeOffId: `number`<a id="timeoffid-number"></a>

Time Off ID

##### status_action_message: `string`<a id="status_action_message-string"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffApproveRequest200Response](./models/time-off-approve-request200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off/{time_off_id}/approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.createRequest`<a id="client7shiftstimeoffcreaterequest"></a>

Create time off

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRequestResponse = await client7shifts.timeOff.createRequest({
  xApiVersion: "2022-05-01",
  user_id: 1,
  company_id: 1,
  from_date: "from_date_example",
  to_date: "to_date_example",
  partial: true,
  status: 1,
  category: "category_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `number`<a id="user_id-number"></a>

##### company_id: `number`<a id="company_id-number"></a>

##### from_date: `string`<a id="from_date-string"></a>

##### to_date: `string`<a id="to_date-string"></a>

##### partial: `boolean`<a id="partial-boolean"></a>

##### status: `number`<a id="status-number"></a>

##### category: `string`<a id="category-string"></a>

##### partial_from: `string`<a id="partial_from-string"></a>

##### partial_to: `string`<a id="partial_to-string"></a>

##### comments: `string`<a id="comments-string"></a>

##### hours: [`TimeOffCreateRequestRequestHoursInner`](./models/time-off-create-request-request-hours-inner.ts)[]<a id="hours-timeoffcreaterequestrequesthoursinnermodelstime-off-create-request-request-hours-innerts"></a>

##### status_action_user_id: `number`<a id="status_action_user_id-number"></a>

##### status_action_message: `string`<a id="status_action_message-string"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffCreateRequest200Response](./models/time-off-create-request200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.declineRequest`<a id="client7shiftstimeoffdeclinerequest"></a>

Decline Time Off Request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const declineRequestResponse = await client7shifts.timeOff.declineRequest({
  xApiVersion: "2022-05-01",
  timeOffId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeOffId: `number`<a id="timeoffid-number"></a>

Time Off ID

##### status_action_message: `string`<a id="status_action_message-string"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffDeclineRequest200Response](./models/time-off-decline-request200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off/{time_off_id}/decline` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.getSettings`<a id="client7shiftstimeoffgetsettings"></a>

Retrieve Time Off Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await client7shifts.timeOff.getSettings({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetSettings200Response](./models/time-off-get-settings200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off_settings/{company_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.getTimeOffById`<a id="client7shiftstimeoffgettimeoffbyid"></a>

Retrieve Time Off

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffByIdResponse = await client7shifts.timeOff.getTimeOffById({
  xApiVersion: "2022-05-01",
  timeOffId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeOffId: `number`<a id="timeoffid-number"></a>

Time Off ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetTimeOffById200Response](./models/time-off-get-time-off-by-id200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off/{time_off_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.getTotalHours`<a id="client7shiftstimeoffgettotalhours"></a>

Retrieve Time Off Hours

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTotalHoursResponse = await client7shifts.timeOff.getTotalHours({
  xApiVersion: "2022-05-01",
  companyId: 1,
  employeeId: [1],
  dateStart: "dateStart_example",
  dateEnd: "dateEnd_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### employeeId: `number`[]<a id="employeeid-number"></a>

Employee IDs

##### dateStart: `string`<a id="datestart-string"></a>

An ISO 8601 date string

##### dateEnd: `string`<a id="dateend-string"></a>

An ISO 8601 date string

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetTotalHours200Response](./models/time-off-get-total-hours200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off/total_hours` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.list`<a id="client7shiftstimeofflist"></a>

List Time Off

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.timeOff.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  category: "paid",
  toDateGte: "2020-01-01",
  sortBy: "created",
  sortDir: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### status: `number`<a id="status-number"></a>

Status

##### category: `'paid' | 'unpaid' | 'paid_sick'`<a id="category-paid--unpaid--paid_sick"></a>

Category

##### toDateGte: `string`<a id="todategte-string"></a>

Return time offs that end after a specified date.

##### sortBy: `'created' | 'from_date'`<a id="sortby-created--from_date"></a>

Sort by column

##### sortDir: `'asc' | 'desc'`<a id="sortdir-asc--desc"></a>

Sort by direction (asc, desc)

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffList200Response](./models/time-off-list200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.remove`<a id="client7shiftstimeoffremove"></a>

Delete Time Off

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await client7shifts.timeOff.remove({
  xApiVersion: "2022-05-01",
  timeOffId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeOffId: `number`<a id="timeoffid-number"></a>

Time Off ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off/{time_off_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.setTimeOffSettings`<a id="client7shiftstimeoffsettimeoffsettings"></a>

Create Time Off Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setTimeOffSettingsResponse =
  await client7shifts.timeOff.setTimeOffSettings({
    companyId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### paid_time_off: `boolean`<a id="paid_time_off-boolean"></a>

##### sick_time_off: `boolean`<a id="sick_time_off-boolean"></a>

##### time_off_request_comment: `boolean`<a id="time_off_request_comment-boolean"></a>

##### time_off_request_notice: `number`<a id="time_off_request_notice-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffSetTimeOffSettings200Response](./models/time-off-set-time-off-settings200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off_settings/{company_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timeOff.updateTimeOffById`<a id="client7shiftstimeoffupdatetimeoffbyid"></a>

Update Time Off

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTimeOffByIdResponse = await client7shifts.timeOff.updateTimeOffById(
  {
    xApiVersion: "2022-05-01",
    timeOffId: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### timeOffId: `number`<a id="timeoffid-number"></a>

Time Off ID

##### user_id: `number`<a id="user_id-number"></a>

##### from_date: `string`<a id="from_date-string"></a>

##### to_date: `string`<a id="to_date-string"></a>

##### partial: `boolean`<a id="partial-boolean"></a>

##### partial_from: `string`<a id="partial_from-string"></a>

##### partial_to: `string`<a id="partial_to-string"></a>

##### comments: `string`<a id="comments-string"></a>

##### status: `number`<a id="status-number"></a>

##### status_action_message: `string`<a id="status_action_message-string"></a>

##### category: `string`<a id="category-string"></a>

##### hours: [`TimeOffCreateRequestRequestHoursInner`](./models/time-off-create-request-request-hours-inner.ts)[]<a id="hours-timeoffcreaterequestrequesthoursinnermodelstime-off-create-request-request-hours-innerts"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffUpdateTimeOffById200Response](./models/time-off-update-time-off-by-id200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/time_off/{time_off_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timePunches.create`<a id="client7shiftstimepunchescreate"></a>

Create Time Punch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await client7shifts.timePunches.create({
  xApiVersion: "2022-05-01",
  companyId: 1,
  location_id: 1,
  user_id: 1,
  clocked_in: "2021-01-01T00:00:00.000Z",
  clocked_out: "2021-01-01T00:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### location_id: `number`<a id="location_id-number"></a>

Location ID.

##### user_id: `number`<a id="user_id-number"></a>

The 7shifts ID of the user who is clocking in.

##### clocked_in: `string`<a id="clocked_in-string"></a>

The start date and time when the user clocked in. Formatted as ISO8601 datetime in UTC timezone.

##### companyId: `number`<a id="companyid-number"></a>

The company id

##### department_id: `number`<a id="department_id-number"></a>

Department ID. Defaults to 0 if not defined.

##### role_id: `number`<a id="role_id-number"></a>

The ID of the role that the user is clocking in to work for. Defaults to 0 if not defined.

##### clocked_out: `string`<a id="clocked_out-string"></a>

The start date and time when the user clocked out. Formatted as ISO8601 datetime in UTC timezone.

##### notes: `string`<a id="notes-string"></a>

Additional notes for a shift.

##### tips: `number`<a id="tips-number"></a>

Tips declared for the shift in cents

##### breaks: [`TimePunchesCreateRequestBreaksInner`](./models/time-punches-create-request-breaks-inner.ts)[]<a id="breaks-timepunchescreaterequestbreaksinnermodelstime-punches-create-request-breaks-innerts"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimePunchesCreateResponse](./models/time-punches-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/time_punches` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timePunches.deleteById`<a id="client7shiftstimepunchesdeletebyid"></a>

Delete Time Punch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await client7shifts.timePunches.deleteById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  timePunchId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### timePunchId: `number`<a id="timepunchid-number"></a>

Time punch ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/time_punches/{time_punch_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timePunches.getTimePunch`<a id="client7shiftstimepunchesgettimepunch"></a>

Retrieve Time Punch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimePunchResponse = await client7shifts.timePunches.getTimePunch({
  xApiVersion: "2022-05-01",
  companyId: 1,
  timePunchId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### timePunchId: `number`<a id="timepunchid-number"></a>

Time punch ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimePunchesGetTimePunchResponse](./models/time-punches-get-time-punch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/time_punches/{time_punch_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timePunches.list`<a id="client7shiftstimepuncheslist"></a>

List Time Punches

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.timePunches.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  limit: 20,
  includeDeleted: false,
  deleted: false,
  localizeSearchTime: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### approved: `boolean`<a id="approved-boolean"></a>

Returns time punches that have been approved. Default null, returns both approved and unapproved punches. If true returns only approved punches. If false returns only unapproved punches.

##### limit: `number`<a id="limit-number"></a>

The limit of results that will be returned.

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return time punches that have been modified after the specified date time. UTC in ISO8601 Format

##### clockedInLte: `string`<a id="clockedinlte-string"></a>

Return time punches with clocked in before or on the specified date.  UTC in ISO8601 format

##### clockedInGte: `string`<a id="clockedingte-string"></a>

Return time punches with clocked in after or on the specified date.  UTC in ISO8601 format

##### clockedOutLte: `string`<a id="clockedoutlte-string"></a>

Return time punches with clocked out before or on the specified date.  UTC in ISO8601 format

##### clockedOutGte: `string`<a id="clockedoutgte-string"></a>

Return time punches with clocked out after or on the specified date.  UTC in ISO8601 format

##### includeDeleted: `boolean`<a id="includedeleted-boolean"></a>

Deprecated, see \'deleted\'

##### deleted: `boolean`<a id="deleted-boolean"></a>

Returns punches filtered by deleted status.  Default false, returns undeleted punches. If true returns only deleted punches. if value is null then returns both deleted and undeleted punches.

##### localizeSearchTime: `boolean`<a id="localizesearchtime-boolean"></a>

If true, convert any date ranges to consider the local timezone of the punches.  If false, date ranges will be in UTC

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### sortBy: `string`<a id="sortby-string"></a>

The name of the field and direction you want the results ordered by.

#### 🔄 Return<a id="🔄-return"></a>

[TimePunchesListResponse](./models/time-punches-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/time_punches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.timePunches.updateById`<a id="client7shiftstimepunchesupdatebyid"></a>

Update Time Punch

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await client7shifts.timePunches.updateById({
  xApiVersion: "2022-05-01",
  companyId: 1,
  timePunchId: 1,
  clocked_in: "2021-01-01T00:00:00.000Z",
  clocked_out: "2021-01-01T00:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company id

##### timePunchId: `number`<a id="timepunchid-number"></a>

Time punch id

##### department_id: `number`<a id="department_id-number"></a>

Department ID

##### role_id: `number`<a id="role_id-number"></a>

The ID of the role that the user is clocking in to work for.

##### clocked_in: `string`<a id="clocked_in-string"></a>

The start date and time when the user clocked in. Formatted as ISO8601 datetime in UTC timezone.

##### clocked_out: `string`<a id="clocked_out-string"></a>

The start date and time when the user clocked out. Formatted as ISO8601 datetime in UTC timezone.

##### notes: `string`<a id="notes-string"></a>

Additional notes for a shift.

##### tips: `number`<a id="tips-number"></a>

Tips declared for the shift in cents

##### breaks: [`TimePunchesUpdateByIdRequestBreaksInner`](./models/time-punches-update-by-id-request-breaks-inner.ts)[]<a id="breaks-timepunchesupdatebyidrequestbreaksinnermodelstime-punches-update-by-id-request-breaks-innerts"></a>

List of breaks during a shift. Breaks must always be included in a correct state in update requests. The absence of an existing break in the payload implies that it should be deleted.

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TimePunchesUpdateByIdResponse](./models/time-punches-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/time_punches/{time_punch_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.tipPool.getDetailedReport`<a id="client7shiftstippoolgetdetailedreport"></a>

Retreive Tip Pool Detailed Report

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailedReportResponse = await client7shifts.tipPool.getDetailedReport(
  {
    xApiVersion: "2022-05-01",
    companyId: 1,
    locationId: 1,
    startDate: "2148-09-18",
    endDate: "2148-09-18",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### startDate: `string`<a id="startdate-string"></a>

The start date in YYYY-MM-DD format

##### endDate: `string`<a id="enddate-string"></a>

The end date in YYYY-MM-DD format

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### tipPoolUuid: `string`<a id="tippooluuid-string"></a>

The tip pool UUID, when omitted the report will return all tip pools

##### dayPartUuid: `string`<a id="daypartuuid-string"></a>

Daypart UUID, when omitted the report will return all dayparts

#### 🔄 Return<a id="🔄-return"></a>

[TipPoolGetDetailedReportResponse](./models/tip-pool-get-detailed-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}/tip_pool_detailed_report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.tipPool.getManualEntryTips`<a id="client7shiftstippoolgetmanualentrytips"></a>

Grabs manual entry tips for a tip pool

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getManualEntryTipsResponse =
  await client7shifts.tipPool.getManualEntryTips({
    xApiVersion: "2022-05-01",
    companyId: 384,
    tipPoolSettingsUuid: "1234",
    startDate: "2021-01-01T00:00:00.000Z",
    endDate: "2021-01-08T00:00:00.000Z",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

The company ID for the target tip pool settings

##### tipPoolSettingsUuid: `string`<a id="tippoolsettingsuuid-string"></a>

The tip pool settings uuid

##### startDate: `string | Date`<a id="startdate-string--date"></a>

The start date of the manual entry query range

##### endDate: `string | Date`<a id="enddate-string--date"></a>

The end date of the manual entry query range

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TipPoolGetManualEntryTipsResponse](./models/tip-pool-get-manual-entry-tips-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/tip_pool/{tip_pool_settings_uuid}/manual_entry` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.tipPool.getSettings`<a id="client7shiftstippoolgetsettings"></a>

Gets tip pool settings for a company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await client7shifts.tipPool.getSettings({
  xApiVersion: "2022-05-01",
  companyId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TipPoolGetSettingsResponse](./models/tip-pool-get-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/tip_pool_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.tipPool.getSummaryReport`<a id="client7shiftstippoolgetsummaryreport"></a>

Retreive Tip Pool Summary Report

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSummaryReportResponse = await client7shifts.tipPool.getSummaryReport({
  xApiVersion: "2022-05-01",
  companyId: 1,
  locationId: 1,
  startDate: "2148-09-18",
  endDate: "2148-09-18",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### startDate: `string`<a id="startdate-string"></a>

The start date in YYYY-MM-DD format

##### endDate: `string`<a id="enddate-string"></a>

The end date in YYYY-MM-DD format

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### tipPoolUuid: `string`<a id="tippooluuid-string"></a>

The tip pool UUID, when omitted the report will return all tip pools

##### dayPartUuid: `string`<a id="daypartuuid-string"></a>

Daypart UUID, when omitted the report will return all dayparts

#### 🔄 Return<a id="🔄-return"></a>

[TipPoolGetSummaryReportResponse](./models/tip-pool-get-summary-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/locations/{location_id}/tip_pool_summary_report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.tipPool.saveManualEntry`<a id="client7shiftstippoolsavemanualentry"></a>

Saves manual entries for a tip pool

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveManualEntryResponse = await client7shifts.tipPool.saveManualEntry({
  xApiVersion: "2022-05-01",
  companyId: 384,
  tipPoolSettingsUuid: "1234",
  object: "manual_tip_pooling",
  data: [
    {
      tip_pool_settings_uuid: "tip_pool_settings_uuid_example",
      entry_date: "2021-01-01",
      tip_amount: 12.5,
      created: "2021-02-12T12:00:00Z",
      modified: "2021-02-12T13:00:00Z",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`TipPoolSaveManualEntryRequestDataInner`](./models/tip-pool-save-manual-entry-request-data-inner.ts)[]<a id="data-tippoolsavemanualentryrequestdatainnermodelstip-pool-save-manual-entry-request-data-innerts"></a>

##### companyId: `number`<a id="companyid-number"></a>

The company ID for the target tip pool settings

##### tipPoolSettingsUuid: `string`<a id="tippoolsettingsuuid-string"></a>

The tip pool settings uuid

##### object: `string`<a id="object-string"></a>

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[TipPoolSaveManualEntryResponse](./models/tip-pool-save-manual-entry-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/tip_pool/{tip_pool_settings_uuid}/manual_entry` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.createDepartmentAssignment`<a id="client7shiftsuserassignmentscreatedepartmentassignment"></a>

Create Department Assignment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDepartmentAssignmentResponse =
  await client7shifts.userAssignments.createDepartmentAssignment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
    department_id: 1,
    appear_on_schedule: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### department_id: `number`<a id="department_id-number"></a>

Department ID for user assignment

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### appear_on_schedule: `boolean`<a id="appear_on_schedule-boolean"></a>

Display the employee on the schedule for this department

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsCreateDepartmentAssignmentResponse](./models/user-assignments-create-department-assignment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/department_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.createLocationAssignment`<a id="client7shiftsuserassignmentscreatelocationassignment"></a>

Create Location Assignments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createLocationAssignmentResponse =
  await client7shifts.userAssignments.createLocationAssignment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
    location_id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### location_id: `number`<a id="location_id-number"></a>

Location ID for user assignment

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsCreateLocationAssignmentResponse](./models/user-assignments-create-location-assignment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/location_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.createRoleAssignment`<a id="client7shiftsuserassignmentscreateroleassignment"></a>

Create Role Assignment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRoleAssignmentResponse =
  await client7shifts.userAssignments.createRoleAssignment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
    role_id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### role_id: `number`<a id="role_id-number"></a>

Role ID for user assignment

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### primary: `boolean`<a id="primary-boolean"></a>

Sets the role as primary for this user.  Only one role per department can be primary.

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsCreateRoleAssignmentResponse](./models/user-assignments-create-role-assignment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/role_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.deleteRoleAssignment`<a id="client7shiftsuserassignmentsdeleteroleassignment"></a>

Delete Role Assignment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRoleAssignmentResponse =
  await client7shifts.userAssignments.deleteRoleAssignment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
    roleId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### roleId: `number`<a id="roleid-number"></a>

Role ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/role_assignments/{role_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.list`<a id="client7shiftsuserassignmentslist"></a>

List Assignments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.userAssignments.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsListResponse](./models/user-assignments-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.listDepartmentAssignments`<a id="client7shiftsuserassignmentslistdepartmentassignments"></a>

List Department Assignments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDepartmentAssignmentsResponse =
  await client7shifts.userAssignments.listDepartmentAssignments({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsListDepartmentAssignmentsResponse](./models/user-assignments-list-department-assignments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/department_assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.listLocationAssignments`<a id="client7shiftsuserassignmentslistlocationassignments"></a>

List Location Assignments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLocationAssignmentsResponse =
  await client7shifts.userAssignments.listLocationAssignments({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsListLocationAssignmentsResponse](./models/user-assignments-list-location-assignments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/location_assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.listRoleAssignments`<a id="client7shiftsuserassignmentslistroleassignments"></a>

List Role Assignments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRoleAssignmentsResponse =
  await client7shifts.userAssignments.listRoleAssignments({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserAssignmentsListRoleAssignmentsResponse](./models/user-assignments-list-role-assignments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/role_assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.removeDepartmentAssignment`<a id="client7shiftsuserassignmentsremovedepartmentassignment"></a>

Delete Department Assignment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDepartmentAssignmentResponse =
  await client7shifts.userAssignments.removeDepartmentAssignment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
    departmentId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/department_assignments/{department_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userAssignments.removeLocationAssignment`<a id="client7shiftsuserassignmentsremovelocationassignment"></a>

Delete Location Assignment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLocationAssignmentResponse =
  await client7shifts.userAssignments.removeLocationAssignment({
    xApiVersion: "2022-05-01",
    companyId: 1,
    userId: 1,
    locationId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### locationId: `number`<a id="locationid-number"></a>

Location ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/location_assignments/{location_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userWages.create`<a id="client7shiftsuserwagescreate"></a>

Create User Wage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await client7shifts.userWages.create({
  xApiVersion: "2022-05-01",
  companyId: 1,
  userId: 1,
  effective_date: "2020-01-01",
  wage_type: "hourly",
  wage_cents: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effective_date: `string`<a id="effective_date-string"></a>

The wage effective date. Format YYYY-MM-DD

##### wage_type: `string`<a id="wage_type-string"></a>

The wage type

##### wage_cents: `number`<a id="wage_cents-number"></a>

The wage value. In cents

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### role_id: `number`<a id="role_id-number"></a>

Role ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserWagesCreateResponse](./models/user-wages-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/wages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.userWages.list`<a id="client7shiftsuserwageslist"></a>

List User Wages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.userWages.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### userId: `number`<a id="userid-number"></a>

User ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UserWagesListResponse](./models/user-wages-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{user_id}/wages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.users.bulkCreate`<a id="client7shiftsusersbulkcreate"></a>

Create Many Users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const bulkCreateResponse = await client7shifts.users.bulkCreate({
  companyId: 1,
  requestBody: [
    {
      first_name: "first_name_example",
      last_name: "last_name_example",
      location_ids: [1],
      department_ids: [1],
      email: "example@7shifts.com",
      mobile_number: "3061234454",
      home_number: "3061234454",
      hire_date: "2017-05-20",
      type: "employee",
      birth_date: "2017-07-21",
      language: "en",
      wage_cents: 2253,
      wage_type: "hourly",
    },
  ],
  xApiVersion: "2022-05-01",
  xCompanyGuid: "1310bfe1-cb3f-4f24-98a2-fde2bc504108",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### requestBody: [`UsersBulkCreateRequestInner`](./models/users-bulk-create-request-inner.ts)[]<a id="requestbody-usersbulkcreaterequestinnermodelsusers-bulk-create-request-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersBulkCreateResponse](./models/users-bulk-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/create_many_users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.users.createNewUser`<a id="client7shiftsuserscreatenewuser"></a>

Create User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await client7shifts.users.createNewUser({
  xApiVersion: "2022-05-01",
  companyId: 1,
  first_name: "first_name_example",
  last_name: "last_name_example",
  location_ids: [1],
  department_ids: [1],
  email: "example@7shifts.com",
  mobile_number: "3061234454",
  home_number: "3061234454",
  hire_date: "2017-05-20",
  type: "employee",
  birth_date: "2017-07-21",
  language: "en",
  wage_cents: 2253,
  wage_type: "hourly",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### first_name: `string`<a id="first_name-string"></a>

The user\\\'s first name

##### last_name: `string`<a id="last_name-string"></a>

The user\\\'s last name

##### location_ids: `number`[]<a id="location_ids-number"></a>

An array of location IDs this user will be assigned to

##### department_ids: `number`[]<a id="department_ids-number"></a>

An array of department IDs this user will be assigned to. Department ID is required if this user\\\'s location has at least one department

##### type: `string`<a id="type-string"></a>

The type of this user

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### preferred_first_name: `string`<a id="preferred_first_name-string"></a>

An optional alternate first name

##### preferred_last_name: `string`<a id="preferred_last_name-string"></a>

An optional alternate last name

##### role_ids: `number`[]<a id="role_ids-number"></a>

An array of role IDs this user will be assigned to.

##### email: `string`<a id="email-string"></a>

the user\\\'s email

##### mobile_number: `string`<a id="mobile_number-string"></a>

The user\\\'s mobile phone number. Format with no spaces and include area code

##### home_number: `string`<a id="home_number-string"></a>

The user\\\'s home phone number. Format with no spaces and include area code

##### address: `string`<a id="address-string"></a>

The user\\\'s address

##### postal_zip: `string`<a id="postal_zip-string"></a>

The user\\\'s postal code or zip code

##### city: `string`<a id="city-string"></a>

The user\\\'s city

##### prov_state: `string`<a id="prov_state-string"></a>

The user\\\'s province or state

##### invite_user: `boolean`<a id="invite_user-boolean"></a>

If true Invite the user to 7shifts

##### notes: `string`<a id="notes-string"></a>

Notes associated with this user

##### hire_date: `string`<a id="hire_date-string"></a>

The hire date of this user. Format YYYY-MM-DD

##### employee_id: `string`<a id="employee_id-string"></a>

Either an employee ID or an ID assigned by your payroll provider that is used in your payroll export

##### punch_id: `string`<a id="punch_id-string"></a>

The punch ID they punch in/out with. If no value is provided a new one will be created

##### birth_date: `string`<a id="birth_date-string"></a>

The user\\\'s birthdate. Format YYYY-MM-DD

##### language: `string`<a id="language-string"></a>

The user\\\'s preferred language. Default value is en

##### appear_as_employee: `boolean`<a id="appear_as_employee-boolean"></a>

User should appear in the system as an employee. Applies to admin users only

##### subscribe_to_updates: `boolean`<a id="subscribe_to_updates-boolean"></a>

Subscribe this user to updates from 7shifts. This includes announcing new features for 7shifts

##### max_weekly_hours: `number`<a id="max_weekly_hours-number"></a>

The maximum weekly hours this user is set to work

##### wage_cents: `number`<a id="wage_cents-number"></a>

##### wage_type: `string`<a id="wage_type-string"></a>

The wage type

##### wages: [`UsersCreateNewUserRequestWagesInner`](./models/users-create-new-user-request-wages-inner.ts)[]<a id="wages-userscreatenewuserrequestwagesinnermodelsusers-create-new-user-request-wages-innerts"></a>

An array of Wages that will be set to the assigned User\\\'s roles

##### permissions_template_id: `number`<a id="permissions_template_id-number"></a>

Id of a permissions template the user will be assigned to and granted permissions from.

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UsersCreateNewUserResponse](./models/users-create-new-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.users.deactivate`<a id="client7shiftsusersdeactivate"></a>

Deactivate User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deactivateResponse = await client7shifts.users.deactivate({
  xApiVersion: "2022-05-01",
  companyId: 1,
  identifier: 1,
  inactive_reason: "inactive_reason_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inactive_reason: `string`<a id="inactive_reason-string"></a>

Enum value. See inactive_reasons endpoint for list of values.

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### identifier: `number`<a id="identifier-number"></a>

User ID

##### inactive_comments: `string`<a id="inactive_comments-string"></a>

Comments related to this user deletion.

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{identifier}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.users.getUserByIdentifier`<a id="client7shiftsusersgetuserbyidentifier"></a>

Retrieve User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdentifierResponse =
  await client7shifts.users.getUserByIdentifier({
    xApiVersion: "2022-05-01",
    companyId: 1,
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### identifier: `string`<a id="identifier-string"></a>

User ID. Accepted values are 7shifts user id or punch id. Use prefix punch: for punch id

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UsersGetUserByIdentifierResponse](./models/users-get-user-by-identifier-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{identifier}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.users.list`<a id="client7shiftsuserslist"></a>

List Users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.users.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  status: "active",
  limit: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return users that have been modified since the specified date. Format YYYY-MM-DD

##### locationId: `number`<a id="locationid-number"></a>

Location ID (cannot be used in conjunction with Department ID and Role ID)

##### departmentId: `number`<a id="departmentid-number"></a>

Department ID (cannot be used in conjunction with Location ID and Role ID)

##### roleId: `number`<a id="roleid-number"></a>

Role ID (cannot be used in conjunction with Location ID and Department ID)

##### status: `'active' | 'inactive'`<a id="status-active--inactive"></a>

The user status

##### name: `string`<a id="name-string"></a>

Filter by partial or full employee name

##### sortBy: `string`<a id="sortby-string"></a>

Sort the paginated result by the given field and direction.

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[UsersListResponse](./models/users-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.users.updateUserByIdentifier`<a id="client7shiftsusersupdateuserbyidentifier"></a>

Update User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserByIdentifierResponse =
  await client7shifts.users.updateUserByIdentifier({
    xApiVersion: "2022-05-01",
    companyId: 1,
    identifier: 1,
    email: "example@7shifts.com",
    mobile_number: "3061234454",
    home_number: "3061234454",
    hire_date: "2017-05-20",
    type: "employee",
    birth_date: "2017-07-21",
    language: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### identifier: `number`<a id="identifier-number"></a>

User ID

##### first_name: `string`<a id="first_name-string"></a>

The user\\\'s first name

##### last_name: `string`<a id="last_name-string"></a>

The user\\\'s last name

##### preferred_first_name: `string`<a id="preferred_first_name-string"></a>

An optional alternate first name

##### preferred_last_name: `string`<a id="preferred_last_name-string"></a>

An optional alternate last name

##### email: `string`<a id="email-string"></a>

the user\\\'s email

##### mobile_number: `string`<a id="mobile_number-string"></a>

The user\\\'s mobile phone number. Format with no spaces and include area code

##### home_number: `string`<a id="home_number-string"></a>

The user\\\'s home phone number. Format with no spaces and include area code

##### address: `string`<a id="address-string"></a>

The user\\\'s address

##### postal_zip: `string`<a id="postal_zip-string"></a>

The user\\\'s postal code or zip code

##### city: `string`<a id="city-string"></a>

The user\\\'s city

##### prov_state: `string`<a id="prov_state-string"></a>

The user\\\'s province or state

##### notes: `string`<a id="notes-string"></a>

Notes associated with this user

##### hire_date: `string`<a id="hire_date-string"></a>

The hire date of this user. Format YYYY-MM-DD

##### type: `string`<a id="type-string"></a>

The type of this user

##### employee_id: `string`<a id="employee_id-string"></a>

Either an employee ID or an ID assigned by your payroll provider that is used in your payroll export

##### punch_id: `string`<a id="punch_id-string"></a>

The punch ID they punch in/out with. If no value is provided a new one will be created

##### birth_date: `string`<a id="birth_date-string"></a>

The user\\\'s birthdate. Format YYYY-MM-DD

##### language: `string`<a id="language-string"></a>

The user\\\'s preferred language. Default value is en

##### appear_as_employee: `boolean`<a id="appear_as_employee-boolean"></a>

User should appear in the system as an employee. Applies to admin users only

##### subscribe_to_updates: `boolean`<a id="subscribe_to_updates-boolean"></a>

Subscribe this user to updates from 7shifts. This includes announcing new features for 7shifts

##### max_weekly_hours: `number`<a id="max_weekly_hours-number"></a>

The maximum weekly hours this user is set to work

##### active: `boolean`<a id="active-boolean"></a>

User status. If false the user is unable to login

##### pronouns: `string`<a id="pronouns-string"></a>

The user\\\'s pronouns

##### permissions_template_id: `number`<a id="permissions_template_id-number"></a>

Permission Template ID the user is assigned to

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[UsersUpdateUserByIdentifierResponse](./models/users-update-user-by-identifier-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/users/{identifier}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.webhooks.create`<a id="client7shiftswebhookscreate"></a>

Create Webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await client7shifts.webhooks.create({
  xApiVersion: "2022-05-01",
  companyId: 1,
  url: "url_example",
  method: "post",
  event: "schedule.published",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Webhook URL

##### method: `string`<a id="method-string"></a>

Webhook Method

##### event: `string`<a id="event-string"></a>

Event

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksCreateResponse](./models/webhooks-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.webhooks.deleteWebhookById`<a id="client7shiftswebhooksdeletewebhookbyid"></a>

Delete Webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWebhookByIdResponse =
  await client7shifts.webhooks.deleteWebhookById({
    xApiVersion: "2022-05-01",
    companyId: 1,
    webhookId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### webhookId: `number`<a id="webhookid-number"></a>

Webhook ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/webhooks/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.webhooks.getWebhook`<a id="client7shiftswebhooksgetwebhook"></a>

Test Webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhookResponse = await client7shifts.webhooks.getWebhook({
  xApiVersion: "2022-05-01",
  companyId: 1,
  topic: "topic_example",
  webhookId: 1234,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### topic: `string`<a id="topic-string"></a>

topic for the sample payload

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### webhookId: `number`<a id="webhookid-number"></a>

Webhook ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/test_webhook` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.webhooks.list`<a id="client7shiftswebhookslist"></a>

List Webhooks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await client7shifts.webhooks.list({
  xApiVersion: "2022-05-01",
  companyId: 1,
  modifiedSince: "2020-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

##### modifiedSince: `string`<a id="modifiedsince-string"></a>

Return webhooks that have been modified since the specified date. Format YYYY-MM-DD

##### cursor: `string`<a id="cursor-string"></a>

Cursor for the next or previous page of results.

##### limit: `number`<a id="limit-number"></a>

The number of results desired per page.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksListResponse](./models/webhooks-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `client7shifts.webhooks.update`<a id="client7shiftswebhooksupdate"></a>

Update Webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await client7shifts.webhooks.update({
  xApiVersion: "2022-05-01",
  companyId: 1,
  webhookId: 1,
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Webhook URL

##### companyId: `number`<a id="companyid-number"></a>

Company ID

##### webhookId: `number`<a id="webhookid-number"></a>

Webhook ID

##### xApiVersion: `string`<a id="xapiversion-string"></a>

7shifts API version

##### xCompanyGuid: `string`<a id="xcompanyguid-string"></a>

Company GUID

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksUpdateResponse](./models/webhooks-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/company/{company_id}/webhooks/{webhook_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
