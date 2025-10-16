import { Section } from "../../../types/Types";
import AddEditAttendance from "./AddEditAttendance";
import AttendanceDetailsEmployeeID from "./AttendanceDetailsEmployeeID";
import AttendanceFilter from "./AttendanceFilter";
import AttendanceGoToProfile from "./AttendanceGoToProfile";
import AttendanceStatuses from "./AttendanceStatuses";
import AttendanceTransaction from "./AttendanceTransaction";
import EditAttendanceStatus from "./EditAttendanceStatus";

export const sections: Section[] = [
    {
        component: AttendanceDetailsEmployeeID,
        id: 'attendance-employee-id',
        title: 'View & Filter Attendance'
    },
    {
        component: AttendanceFilter,
        id: 'attendance-filter',
        title: 'Dynamic Filters & Navigation'
    },
    {
        component: AttendanceGoToProfile,
        id: 'attendance-go-to-profile',
        title: 'Go to Profile Button'
    },
    {
        component: AddEditAttendance,
        id: 'attendance-add-edit',
        title: 'Add/Edit via Status Button'
    },
    {
        component: AttendanceTransaction,
        id: 'attendance-transaction',
        title: 'Attendance Transaction View & Hover'
    },
    {
        component: EditAttendanceStatus,
        id: 'attendance-edit-status',
        title: 'Attendance Status Details'
    },
    {
        component: AttendanceStatuses,
        id: 'attendance-statuses',
        title: 'Attendance Marking Options',
        children: [
            { id: 'attendance-single-day', title: 'Single Day Attendance Marking' },
            { id: 'attendance-multiple-days', title: 'Multiple Days (Bulk) Attendance Marking' }
        ]
    }

]