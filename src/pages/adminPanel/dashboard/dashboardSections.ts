import Tasks from "./Tasks";
import Alerts from "./Alerts";
import LeavesAndRequest from "./LeavesAndRequest";
import Attendance from "./Attendance";
import JoinAndLeft from "./JoinAndLeft";
import SponsoredEmployees from "./SponsoredEmployees";
import CompanyDetails from "./CompanyDetails";
import Events from "./Events";

export const dashboardSections = [
  { component: CompanyDetails, id: "company-details", title: "Create Details" },
  { component: SponsoredEmployees, id: "sponsored-employees", title: "Sponsored Employees" },
  { component: Alerts, id: "dashboard-alerts", title: "Dashboard Alerts" },
  {
    component: Events,
    id: "dashboard-events",
    title: "Events",
    children: [
      { id: "events-reminders", title: "Reminders" },
      { id: "events-birthdays", title: "Birthdays" },
      { id: "events-holidays", title: "Holidays" },
    ],
  },
  { component: Tasks, id: "dashboard-tasks", title: "Tasks" },
  { component: JoinAndLeft, id: "dashboard-join-and-left", title: "Join And Left" },
  {
    component: LeavesAndRequest,
    id: "dashboard-leaves-and-requests",
    title: "Leaves And Request",
    children: [
      { id: "leaves", title: "Leaves" },
      { id: "requests", title: "Requests" },
    ],
  },
  { component: Attendance, id: "dashboard-attendance", title: "Dashboard Attendance" },
];
