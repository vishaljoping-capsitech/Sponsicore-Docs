import { Section } from "../../../types/Types";
import AttendanceDetails from "./AttendanceDetails";
import AttendanceOverview from "./AttendanceOverview";
import AttendanceTransaction from "./AttendanceTransaction";

export const sections: Section[] = [
    {
        component: AttendanceOverview,
        id: 'attendance-overview',
        title: 'Attendance Overview'
    },
    {
        component: AttendanceTransaction,
        id: 'attendance-transaction',
        title: 'Attendance In/Out Time'
    },
    {
        component: AttendanceDetails,
        id: 'more-attendance-details',
        title: 'More Attendance Details'
    }
]