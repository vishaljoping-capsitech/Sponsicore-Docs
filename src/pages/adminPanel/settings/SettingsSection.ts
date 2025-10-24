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
      },
      {
        component: EmployeeDocType,
        id: "employee-doc-type",
        title: "Employee Document Types",
      },
    ],
  },
  {
    component: JobType,
    id: "job-type",
    title: "Job Types",
  },
  {
    component: BranchPolicies,
    id: "branch-policies",
    title: "Branch Policies",
  },
  {
    component: EmailConfiguration,
    id: "email-configuration",
    title: "Email Configuration",
  },
  {
    component: NotificationConfiguration,
    id: "notification-configuration",
    title: "Notification Configuration",
  },
  {
    component: ReminderType,
    id: "reminder-type",
    title: "Reminder Types",
  },
  {
    component: ApplicationUser,
    id: "application-user",
    title: "Application Users",
  },
  {
    component: RolesPermissions,
    id: "roles-permissions",
    title: "Roles & Permissions",
  },
  {
    component: PublicHolidays,
    id: "public-holidays",
    title: "Public Holidays",
  },
  {
    component: BiometricDevice,
    id: "biometric-device",
    title: "Biometric Device",
  },
  {
    component: Shifts,
    id: "shifts",
    title: "Shifts",
  },
  {
    component: LeaveType,
    id: "leave-type",
    title: "Leave Types",
  },
  {
    component: VisitorCard,
    id: "visitor-card",
    title: "Visitor Card",
  },
];
