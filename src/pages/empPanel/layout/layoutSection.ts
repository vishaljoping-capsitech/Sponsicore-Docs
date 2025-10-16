import { Section } from "../../../types/Types";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export const layoutSections: Section[] = [
  { component: SideBar, id: "side-bar", title: "Sidebar" },
  {
    component: TopBar,
    id: "top-bar",
    title: "Topbar",
    children: [
      {
        id: "attendance-status",
        title: "Attendance Status",
      },
      {
        id: "notifications",
        title: "Notifications",
      },
      {
        id: "user-profile-menu",
        title: "User Profile Menu",
      },
    ],
  },
];
