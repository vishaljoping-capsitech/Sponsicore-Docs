import CreateEmployee from "./CreateEmployee";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeDocuments from "./EmployeeDocuments";
import EmployeeTask from "./EmployeeTask";
import EmployeeTravel from "./EmployeeTravel";
import EmployeeAttendance from "./EmployeeAttendance";
import EmployeeRequest from "./EmployeeRequests";
import EmployeeNotes from "./EmployeeNotes";
import EmployeeSponsorshipDetails from "./SponsorshipDetails";
import EmployeeSettings from "./EmployeeSettings";
import { Section } from "../../../types/Types";

export const employeesSections: Section[] = [
  { component: CreateEmployee, id: "create-employee", title: "Create Employee" },
  { component: EmployeeDetails, id: "employee-details", title: "Employee Details" },
  {
    component: EmployeeDocuments,
    id: "employee-documents",
    title: "Employee Documents",
    children: [
      {
        id: "mandatory-docs",
        title: "Mandatory Docs",
      },
      {
        id: "regular-docs",
        title: "Regular Docs",
      },
      {
        id: "add-document",
        title: "Add Document",
      },
    ],
  },
  { component: EmployeeTask, id: "employee-task", title: "Employee Task" },
  { component: EmployeeTravel, id: "employee-travel", title: "Employee Travel" },
  { component: EmployeeAttendance, id: "employee-attendance", title: "Employee Attendance" },
  { component: EmployeeRequest,id: "employee-request",title: "Employee Request" },
  { component: EmployeeNotes, id: "employee-notes", title: "Employee Notes" },
  { component: EmployeeSponsorshipDetails,id: "sponsorship-details",title: "Sponsorship Details" },
  { component: EmployeeSettings,id: "employee-settings",title: "Employee Settings" },
];

