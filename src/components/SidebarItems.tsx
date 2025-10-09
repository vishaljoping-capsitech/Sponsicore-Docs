import LayoutIcon from '../components/ui/LayoutIcon';
import SettingIcon from '../components/ui/SettingIcon';
import DashboardIcon from '../components/ui/DashboardIcon';
import CompanyIcon from '../components/ui/CompanyIcon';
import EmployeeIcon from '../components/ui/EmployeeIcon';
import AttendanceIcon from '../components/ui/AttendanceIcon';
import TaskIcon from '../components/ui/TaskIcon';
import TravelIcon from '../components/ui/TravelIcon';
import EmailIcon from '../components/ui/EmailIcon';
import LeaveIcon from '../components/ui/LeaveIcon';
import ReaquestIcon from '../components/ui/ReaquestIcon';
import CalenderIcon from '../components/ui/CalenderIcon';
import ReportIcon from '../components/ui/ReportIcon';
import ProfileIcon from '../components/ui/ProfileIcon';
import PoliciesIcon from '../components/ui/PoliciesIcon';
import { ISideBarKeys } from '../components/SideBar';

export const SidebarItems = (isDarkMode: boolean) => {
  const color = {
    outer: isDarkMode ? '#B3ADC7' : '#625982',
    inner: isDarkMode ? '#E4F6EC' : '#36A368',
  };

  return [
    {
      key: ISideBarKeys.Overview,
      label: 'Overview',
    },
    {
      key: ISideBarKeys.Admin,
      label: 'Admin Panel',
      children: [
        { key: ISideBarKeys.AdminLayout, label: 'Layout', icon: <LayoutIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminSettings, label: 'Settings', icon: <SettingIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminDashboard, label: 'Dashboard', icon: <DashboardIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminCompany, label: 'Company', icon: <CompanyIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminEmployee, label: 'Employee', icon: <EmployeeIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminAttendance, label: 'Attendance', icon: <AttendanceIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminTask, label: 'Task', icon: <TaskIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminTravel, label: 'Travel', icon: <TravelIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminEmail, label: 'Email', icon: <EmailIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminLeave, label: 'Leave', icon: <LeaveIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminRequest, label: 'Request', icon: <ReaquestIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminCalendar, label: 'Calendar', icon: <CalenderIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.AdminReports, label: 'Reports', icon: <ReportIcon outerColor={color.outer} innerColor={color.inner} /> },
      ],
    },
    {
      key: ISideBarKeys.Employee,
      label: 'Employee Panel',
      children: [
        { key: ISideBarKeys.EmployeeLayout, label: 'Layout', icon: <LayoutIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeDashboard, label: 'Dashboard', icon: <DashboardIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeProfile, label: 'Profile', icon: <ProfileIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeAttendance, label: 'Attendance', icon: <AttendanceIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeTask, label: 'Task', icon: <TaskIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeTravel, label: 'Travel', icon: <TravelIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeLeave, label: 'Leave', icon: <LeaveIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeRequest, label: 'Request', icon: <ReaquestIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeeCalendar, label: 'Calendar', icon: <CalenderIcon outerColor={color.outer} innerColor={color.inner} /> },
        { key: ISideBarKeys.EmployeePolicies, label: 'Policies', icon: <PoliciesIcon outerColor={color.outer} innerColor={color.inner} /> },
      ],
    },
  ];
};