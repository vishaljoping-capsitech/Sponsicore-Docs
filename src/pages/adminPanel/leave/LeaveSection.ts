import LeaveApplication from './LeaveApplication'
import LeaveRequest from './LeaveRequest'
import LeaveFilters from './LeaveFilters'
import PendingLeaveNotification from './PendingLeaveNotification'
import AutomatedNotification from './AutomatedNotification'
import { Section } from '../../../types/Types'

export const sections: Section[] = [
  {
    component: LeaveApplication,
    id: "leave-application",
    title: "Leave Management"
  },
  {
    component: LeaveRequest,
    id: "leave-request",
    title: "Leave Request Approval"
  },
  {
    component: LeaveFilters,
    id: "leave-filters",
    title: "Categorized Leaves"
  },
  {
    component: PendingLeaveNotification,
    id: "pending-leave-notification",
    title: "Pending Notifications"
  },
  {
    component: AutomatedNotification,
    id: "automated-notification",
    title: "Automated Notifications"
  }
]