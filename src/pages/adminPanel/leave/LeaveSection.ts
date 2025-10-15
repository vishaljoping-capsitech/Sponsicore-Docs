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
    title: "Efficient Leave Application Management"
  },
  {
    component: LeaveRequest,
    id: "leave-request",
    title: "Leave Request Approval Process"
  },
  {
    component: LeaveFilters,
    id: "leave-filters",
    title: "Categorized Leave Applications with Interactive Filters"
  },
  {
    component: PendingLeaveNotification,
    id: "pending-leave-notification",
    title: "Pending Leave Notifications"
  },
  {
    component: AutomatedNotification,
    id: "automated-notification",
    title: "Automated Employee Notifications"
  }
]