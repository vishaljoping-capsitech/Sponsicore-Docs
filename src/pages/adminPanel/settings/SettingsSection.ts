import { Section } from "../../../types/Types";
import ApplicationUser from "./ApplicationUser";
import BiometricDevice from "./BiometricDevice";
import BranchPolicies from "./BranchPolicies";
import CompanyDocType from "./CompanyDocType";
import DocumentTypes from "./DocumentTypes";
import EmailConfiguration from "./EmailConfiguration";
import EmployeeDocType from "./EmployeeDocType";
import JobType from "./JobType";
import LeaveType from "./LeaveType";
import NotificationConfiguration from "./NotificationConfiguration";
import PublicHolidays from "./PublicHolidays";
import ReminderType from "./ReminderType";
import RolesPermissions from "./RolesPermissions";
import Shifts from "./Shifts";
import VisitorCard from "./VisitorCard";

export const sections: Section[] = [
  {
    component: DocumentTypes,
    id: "document-types",
    title: "Document Types",
    children: [
      {
        component: CompanyDocType,
        id: "company-doc-type",
        title: "Company Document Types",
        children: [
          { id: "company-doc-add", title: "Add" },
          { id: "company-doc-edit", title: "Edit" },
          { id: "company-doc-delete", title: "Delete" },
          { id: "company-doc-state", title: "Active / Inactive" },
        ],
      },
      {
        component: EmployeeDocType,
        id: "employee-doc-type",
        title: "Employee Document Types",
        children: [
          { id: "employee-doc-add", title: "Add" },
          { id: "employee-doc-edit", title: "Edit" },
          { id: "employee-doc-delete", title: "Delete" },
          { id: "employee-doc-state", title: "Active / Inactive" },
        ],
      },
    ],
  },
  {
    component: JobType,
    id: "job-type",
    title: "Job Types",
    children: [
      {
        id: "job-type-add",
        title: "Add Job Type",
      },
      {
        id: "job-type-edit",
        title: "Edit Job Type",
      },
      {
        id: "job-type-Delete",
        title: "Add Job Type",
      },
      {
        id: "job-type-state",
        title: "Active/Inactive Job Type",
      },
    ],
  },
  {
    component: BranchPolicies,
    id: "branch-policies",
    title: "Branch Policies",
    children: [
      {
        id: "branch-policies-add",
        title: "Add Branch Policies",
      },
      {
        id: "branch-policies-edit",
        title: "Edit Branch Policies",
      },
      {
        id: "branch-policies-download",
        title: "Download Branch Policies",
      },
      {
        id: "branch-policies-state",
        title: "Activate/Deactivate Branch Policies",
      },
      {
        id: "branch-policies-delete",
        title: "Delete Branch Policies",
      },
    ],
  },
  {
    component: EmailConfiguration,
    id: "email-configuration",
    title: "Email Configuration",
    children: [
      {
        id: "email-manage-configuration",
        title: "Manage Configurations",
      },
      {
        id: "email-recipient-settings",
        title: "Recipient Settings",
      },
      {
        id: "email-job-types",
        title: "Job Types",
      },
      {
        id: "email-alert-days",
        title: "Alert Days",
      },
    ],
  },
  {
    component: NotificationConfiguration,
    id: "notification-configuration",
    title: "Notification Configuration",
    children: [
      {
        id: "notification-manage-configuration",
        title: "Manage Configurations",
      },
      {
        id: "notification-recipient-settings",
        title: "Recipient Settings",
      },
      {
        id: "notification-job-types",
        title: "Job Types",
      },
      {
        id: "notification-alert-days",
        title: "Alert Days",
      },
    ],
  },
  {
    component: ReminderType,
    id: "reminder-type",
    title: "Reminder Types",
    children: [
      {
        id: "reminder-type-add",
        title: "Add Reminder Types",
      },
      {
        id: "reminder-type-edit",
        title: "Edit Reminder Types",
      },
      {
        id: "reminder-type-state",
        title: "Activate/Deactivate Reminder Types",
      },
      {
        id: "reminder-type-delete",
        title: "Delete Reminder Types",
      },
    ],
  },
  {
    component: ApplicationUser,
    id: "application-user",
    title: "Application Users",
    children: [
      {
        id: "add-application-user",
        title: "Add Application User",
      },
      {
        id: "edit-application-user",
        title: "edit Application User",
      },
      {
        id: "application-user-status",
        title: "Update Application User Status",
      },
      {
        id: "delete-application-user",
        title: "Delete Application User",
      },
    ],
  },
  {
    component: RolesPermissions,
    id: "roles-permissions",
    title: "Roles & Permissions",
    children: [
      {
        id: "add-role",
        title: "Add Role",
      },
      {
        id: "edit-role",
        title: "Edit Role",
      },
      {
        id: "role-status",
        title: "Role Status",
      },
      {
        id: "remove-role",
        title: "Remove Role",
      },
      {
        id: "locked-role",
        title: "Locked Role",
      },
    ],
  },
  {
    component: PublicHolidays,
    id: "public-holidays",
    title: "Public Holidays",
    children: [
      {
        id: "add-holiday",
        title: "Add Public Holidays",
      },
      {
        id: "remove-holiday",
        title: "Remove Public Holidays",
      },
    ],
  },
  {
    component: BiometricDevice,
    id: "biometric-device",
    title: "Biometric Device",
    children: [
      {
        id: "add-biometric-device",
        title: "Add Biometric Device",
      },
      {
        id: "edit-biometric-device",
        title: "Edit Biometric Device",
      },
      {
        id: "biometric-device-actions",
        title: "Biometric Device Actions",
      },
      {
        id: "biometric-device-employees",
        title: "Assign Device to Employee",
      },
      {
        id: "biometric-device-manage-employees",
        title: "Manage Assigned Employee",
      },
    ],
  },
  {
    component: Shifts,
    id: "shifts",
    title: "shifts",
    children: [
      {
        id: "add-edit-activate-assign-remove",
        title: "Manage Shifts",
      },
      {
        id: "mandatory-lunch-deduction",
        title: "Mandatory Lunch Deduction",
      },
      {
        id: "late-effective-minute",
        title: "Late Effective Minute",
      },
      {
        id: "overtime-alert",
        title: "Overtime Alert",
      },
      {
        id: "assign-shift",
        title: "Assign Shift",
      },
      {
        id: "edit-shift-process",
        title: "Edit Shift Process",
      },
      {
        id: "automatic-data-updates",
        title: "Automatic Data Updates",
      },
    ],
  },
  {
    component: LeaveType,
    id: "leave-type",
    title: "Leave Types",
    children: [
      {
        id: "general-leave-type",
        title: "General Leave Type",
      },
      {
        id: "other-leave-type",
        title: "Other Leave Type",
      },
      {
        id: "add-leave-type",
        title: "Add Leave Type",
      },
      {
        id: "edit-leave-type",
        title: "Edit Leave Type",
      },
      {
        id: "delete-leave-type",
        title: "Delete Leave Type",
      },
      {
        id: "leave-type-status",
        title: "Leave Type Status",
      },
    ],
  },
  {
    component: VisitorCard,
    id: "visitor-card",
    title: "Visitor Card",
    children: [
      {
        id: "add-visitor-card",
        title: "Add Visitor Card",
      },
      {
        id: "edit-visitor-card",
        title: "Edit Visitor Card",
      },
      {
        id: "delete-visitor-card",
        title: "Delete Visitor Card",
      },
      {
        id: "visitor-card-status",
        title: "Activate/Deactivate Visitor Card",
      },
    ],
  },
];
