import { Section } from "../../../types/Types";
import AddLeave from "./AddLeave";
import CancelLeave from "./CancelLeave";
import DeleteLeave from "./DeleteLeave";
import EditLeave from "./EditLeave";
import LeaveFilters from "./LeaveFilters";
import LeaveNotification from "./LeaveNotification";
import LeaveOverview from "./LeaveOverview";

export const sections: Section[] = [
    {
        component: AddLeave,
        id: 'add-leave',
        title: 'Add Leave',
    },
    {
        component: EditLeave,
        id: 'edit-leave',
        title: 'Edit Leave',
    },
    {
        component: DeleteLeave,
        id: 'delete-leave',
        title: 'Delete Leave',
    },
    {
        component: CancelLeave,
        id: 'cancel-leave',
        title: 'Cancel Leave',
    },
    {
        component: LeaveFilters,
        id: 'leave-filters',
        title: 'Leave Filters',
        children: [
            { id: 'leave-filter-status', title: 'Filter by Leave Status' },
            { id: 'leave-filter-type', title: 'Filter by Leave Type' },
        ]
    },
    {
        component: LeaveOverview,
        id: 'leave-overview',
        title: 'Leave Status Overview',
    },
    {
        component: LeaveNotification,
        id: 'leave-notification',
        title: 'Leave Notification',
    }
] 