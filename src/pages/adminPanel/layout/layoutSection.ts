import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Section } from "../../../types/Types";

export const layoutSections: Section[] = [
  { component: SideBar, id: "side-bar", title: "Sidebar" },
  { 
    component: TopBar, 
    id: "top-bar", 
    title: "Topbar",
    children: [
      {
        id: "quick-action-button",
        title: "Quick Action Button",
      },
      {
        id: "user-profile-section",
        title: "User Profile Section",
        children: [
          {
            id: "login-activities",
            title: "Login Activities"
          },
          {
            id: "change-password",
            title: "Change Password"
          }
        ]
      }
    ]
  }
];

