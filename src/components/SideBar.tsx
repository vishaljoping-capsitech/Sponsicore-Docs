import { Menu, Col, Row, type MenuProps } from 'antd'
import '../css/common.css'
import React, { useState } from 'react'

export enum ISideBarKeys {
  Undefined,
  Overview,
  Admin,
  Employee,
  AdminLayout,
  AdminSettings,
  AdminDashboard,
  AdminCompany,
  AdminEmployee,
  AdminAttendance,
  AdminTask,
  AdminTravel,
  AdminEmail,
  AdminLeave,
  AdminRequest,
  AdminCalendar,
  AdminReports,
  EmployeeLayout,
  EmployeeDashboard,
  EmployeeProfile,
  EmployeeAttendance,
  EmployeeTask,
  EmployeeTravel,
  EmployeeLeave,
  EmployeeRequest,
  EmployeeCalendar,
  EmployeePolicies
}

const items = [
  {
    key: ISideBarKeys.Overview,
    label: "Overview",
  },
  {
    key: ISideBarKeys.Admin,
    label: "Admin Panel",
    children: [
      { key: ISideBarKeys.AdminLayout, label: "Layout" },
      { key: ISideBarKeys.AdminSettings, label: "Settings" },
      { key: ISideBarKeys.AdminDashboard, label: "Dashboard" },
      { key: ISideBarKeys.AdminCompany, label: "Company" },
      { key: ISideBarKeys.AdminEmployee, label: "Employee" },
      { key: ISideBarKeys.AdminAttendance, label: "Attendance" },
      { key: ISideBarKeys.AdminTask, label: "Task" },
      { key: ISideBarKeys.AdminTravel, label: "Travel" },
      { key: ISideBarKeys.AdminEmail, label: "Email" },
      { key: ISideBarKeys.AdminLeave, label: "Leave" },
      { key: ISideBarKeys.AdminRequest, label: "Request" },
      { key: ISideBarKeys.AdminCalendar, label: "Calendar" },
      { key: ISideBarKeys.AdminReports, label: "Reports" },
    ],
  },
  {
    key: ISideBarKeys.Employee,
    label: "Employee Panel",
    children: [
      { key: ISideBarKeys.EmployeeLayout, label: "Layout" },
      { key: ISideBarKeys.EmployeeDashboard, label: "Dashboard" },
      { key: ISideBarKeys.EmployeeProfile, label: "Profile" },
      { key: ISideBarKeys.EmployeeAttendance, label: "Attendance" },
      { key: ISideBarKeys.EmployeeTask, label: "Task" },
      { key: ISideBarKeys.EmployeeTravel, label: "Travel" },
      { key: ISideBarKeys.EmployeeLeave, label: "Leave" },
      { key: ISideBarKeys.EmployeeRequest, label: "Request" },
      { key: ISideBarKeys.EmployeeCalendar, label: "Calendar" },
      { key: ISideBarKeys.EmployeePolicies, label: "Policies" },
    ],
  },
];

interface LevelKeysProps {
  key: ISideBarKeys;
  label: string;
  children?: LevelKeysProps[];
}

interface IProps{
  setSelectedKey: React.Dispatch<React.SetStateAction<ISideBarKeys>>;
}
const getLevelKeys = (levelKeysArr: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (levelKeysArrFinal: LevelKeysProps[], level = 1) => {
    levelKeysArrFinal.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(levelKeysArr);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);
const SideBar: React.FC<IProps> = ({ setSelectedKey }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState([ISideBarKeys.Admin.toString()]);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys: string[]) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[ISideBarKeys.Overview.toString()]}
      openKeys={stateOpenKeys}
      onClick={({ key }) => setSelectedKey(Number(key))}
      onOpenChange={onOpenChange}
      className="ant-layout-main-content scrollable"
      items={items}
    ></Menu>
  );
};

export default SideBar;