import CalendarOverview from "./CalendarOverview";
import CalendarViews from "./CalendarViews";
import ReminderManagement from "./ReminderManagement";
import ReminderNotifications from "./ReminderNotifications";
import ClickableItems from "./ClickableItems";
import CalendarSidebarControls from "./CalendarSidebarControls";
import SidebarToggle from "./SidebarToggle";
import { Section } from "../../../types/Types";

export const calendarSections: Section[] = [
  { component: CalendarOverview, id: "calendar-overview", title: "Overview" },
  { component: CalendarViews, id: "calendar-views", title: "Views" },
  { component: ReminderManagement, id: "reminder-management", title: "Reminder Management" },
  { component: ReminderNotifications, id: "reminder-notifications", title: "Reminder Notifications" },
  { component: ClickableItems, id: "clickable-items", title: "Clickable Items" },
  { component: CalendarSidebarControls, id: "calendar-sidebar-controls", title: "Sidebar Controls" },
  { component: SidebarToggle, id: "sidebar-toggle", title: "Sidebar Toggle" },
];
