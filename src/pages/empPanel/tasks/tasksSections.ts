import { Section } from "../../../types/Types";
import AddingTasksQuickly from "./AddingTasksQuickly";
import MonthlyFiltering from "./MonthlyFiltering";
import TaskActions from "./TaskActions";
import TaskDetails from "./TaskDetails";
import TasksOverview from "./TasksOverview";

export const tasksSections: Section[] = [
  { component: TasksOverview, id: "task-overview", title: "Task Overview" },
  { component: TaskActions, id: "task-actions", title: "Task Actions" },
  { component: TaskDetails, id: "task-details", title: "Task Details" },
  { component: MonthlyFiltering, id: "monthly-filtering", title: "Monthly Filtering" },
  { component: AddingTasksQuickly, id: "Adding Tasks Quickly", title: "Adding Tasks Quickly" },
];
