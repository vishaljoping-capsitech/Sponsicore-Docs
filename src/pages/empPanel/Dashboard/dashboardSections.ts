import Attendance from "./Attendance";
import CheckInTimeAccuracy from "./CheckInTimeAccuracy";
import Events from "./Events";
import HourStatistics from "./HourStatistics";
import LeaveAndRequests from "./LeaveAndRequests";
import MonthlyHours from "./MonthlyHours";
import ShiftDetails from "./ShiftDetails";
import Tasks from "./Tasks";
import TodaysWorking from "./TodaysWorking";
import WeeklyHours from "./WeeklyHours";


export const dashboardSections = [
  { component: TodaysWorking, id: "todays-working", title: "Todays Working" },
  { component: ShiftDetails, id: "shift-details", title: "Shift Details" },
  { component: Attendance, id: "attendance", title: "Attendance" },
  { component: CheckInTimeAccuracy, id: "check-in-time-accuracy", title: "Check-In Time Accuracy" },
  { component: Tasks, id: "tasks", title: "Tasks" },
  { component: LeaveAndRequests, id: "leaves-and-requests", title: "Leaves and Requests" },
  { component: HourStatistics, id: "hour-statistics", title: "Hour Statistics" },
  { component: WeeklyHours, id: "weekely-hours", title: "Weekely Hours" },
  { component: MonthlyHours, id: "monthly-hours", title: "Monthly Hours" },
  { component: Events, id: "events", title: "Events" },
];
