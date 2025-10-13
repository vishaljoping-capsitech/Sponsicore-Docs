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
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

interface SidebarItemsProps {
  selectedKey: ISideBarKeys;
  setSelectedKey: React.Dispatch<React.SetStateAction<ISideBarKeys>>;
}

export const SidebarItems = ({ selectedKey }: SidebarItemsProps) => {
  const mode = useSelector((state:RootState) => state.theme.mode);

  const getIconColor = (key: ISideBarKeys) => {
    if (mode === "dark" && selectedKey === key) {
      return { outer: "#FFF", inner: "#FFFF" };
    }
    return mode === "light"
      ? { outer: "#625982", inner: "#36A368" }
      : { outer: "#B3ADC7", inner: "#E4F6EC" };
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
        { key: ISideBarKeys.AdminLayout, label: 'Layout', icon: <LayoutIcon {...getIconColor(ISideBarKeys.AdminLayout)} /> },
        { key: ISideBarKeys.AdminSettings, label: 'Settings', icon: <SettingIcon {...getIconColor(ISideBarKeys.AdminSettings)} /> },
        { key: ISideBarKeys.AdminDashboard, label: 'Dashboard', icon: <DashboardIcon {...getIconColor(ISideBarKeys.AdminDashboard)} /> },
        { key: ISideBarKeys.AdminCompany, label: 'Company', icon: <CompanyIcon {...getIconColor(ISideBarKeys.AdminCompany)} /> },
        { key: ISideBarKeys.AdminEmployee, label: 'Employee', icon: <EmployeeIcon {...getIconColor(ISideBarKeys.AdminEmployee)} /> },
        { key: ISideBarKeys.AdminAttendance, label: 'Attendance', icon: <AttendanceIcon {...getIconColor(ISideBarKeys.AdminAttendance)} /> },
        { key: ISideBarKeys.AdminTask, label: 'Task', icon: <TaskIcon {...getIconColor(ISideBarKeys.AdminTask)} /> },
        { key: ISideBarKeys.AdminTravel, label: 'Travel', icon: <TravelIcon {...getIconColor(ISideBarKeys.AdminTravel)} /> },
        { key: ISideBarKeys.AdminEmail, label: 'Email', icon: <EmailIcon {...getIconColor(ISideBarKeys.AdminEmail)} /> },
        { key: ISideBarKeys.AdminLeave, label: 'Leave', icon: <LeaveIcon {...getIconColor(ISideBarKeys.AdminLeave)} /> },
        { key: ISideBarKeys.AdminRequest, label: 'Request', icon: <ReaquestIcon {...getIconColor(ISideBarKeys.AdminRequest)} /> },
        { key: ISideBarKeys.AdminCalendar, label: 'Calendar', icon: <CalenderIcon {...getIconColor(ISideBarKeys.AdminCalendar)} /> },
        { key: ISideBarKeys.AdminReports, label: 'Reports', icon: <ReportIcon {...getIconColor(ISideBarKeys.AdminReports)} /> },
      ],
    },
    {
      key: ISideBarKeys.Employee,
      label: 'Employee Panel',
      children: [
        { key: ISideBarKeys.EmployeeLayout, label: 'Layout', icon: <LayoutIcon {...getIconColor(ISideBarKeys.EmployeeLayout)} /> },
        { key: ISideBarKeys.EmployeeDashboard, label: 'Dashboard', icon: <DashboardIcon {...getIconColor(ISideBarKeys.EmployeeDashboard)} /> },
        { key: ISideBarKeys.EmployeeProfile, label: 'Profile', icon: <ProfileIcon {...getIconColor(ISideBarKeys.EmployeeProfile)} /> },
        { key: ISideBarKeys.EmployeeAttendance, label: 'Attendance', icon: <AttendanceIcon {...getIconColor(ISideBarKeys.EmployeeAttendance)} /> },
        { key: ISideBarKeys.EmployeeTask, label: 'Task', icon: <TaskIcon {...getIconColor(ISideBarKeys.EmployeeTask)} /> },
        { key: ISideBarKeys.EmployeeTravel, label: 'Travel', icon: <TravelIcon {...getIconColor(ISideBarKeys.EmployeeTravel)} /> },
        { key: ISideBarKeys.EmployeeLeave, label: 'Leave', icon: <LeaveIcon {...getIconColor(ISideBarKeys.EmployeeLeave)} /> },
        { key: ISideBarKeys.EmployeeRequest, label: 'Request', icon: <ReaquestIcon {...getIconColor(ISideBarKeys.EmployeeRequest)} /> },
        { key: ISideBarKeys.EmployeeCalendar, label: 'Calendar', icon: <CalenderIcon {...getIconColor(ISideBarKeys.EmployeeCalendar)} /> },
        { key: ISideBarKeys.EmployeePolicies, label: 'Policies', icon: <PoliciesIcon {...getIconColor(ISideBarKeys.EmployeePolicies)} /> },
      ],
    },
  ];
};