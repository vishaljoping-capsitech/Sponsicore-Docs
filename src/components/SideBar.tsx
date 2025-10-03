
import { Menu } from 'antd'
import '../css/common.css'
import React from 'react'


const items = [
  {
    key: "1",
    label: "Admin Panel",
    children: [
      { key: "a1", label: "Layout" },
      { key: "a2", label: "Settings" },
      { key: "a3", label: "Dashboard" },
      { key: "a4", label: "Company" },
      { key: "a5", label: "Employee" },
      { key: "a6", label: "Attendance" },
      { key: "a7", label: "Task" },
      { key: "a8", label: "Travel" },
      { key: "a9", label: "Email" },
      { key: "a10", label: "Leave" },
      { key: "a11", label: "Request" },
      { key: "a12", label: "Calendar" },
      { key: "a13", label: "Reports" },
    ],
  },
  {
    key: "2",
    label: "Employee Panel",
    children: [
      { key: "e1", label: "Layout" },
      { key: "e2", label: "Dashboard" },
      { key: "e3", label: "Profile" },
      { key: "e4", label: "Attendance" },
      { key: "e5", label: "Task" },
      { key: "e6", label: "Travel" },
      { key: "e7", label: "Leave" },
      { key: "e8", label: "Request" },
      { key: "e9", label: "Calendar" },
      { key: "e10", label: "Policies" },
    ],
  },
];

const SideBar: React.FC = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["a1"]}
      defaultOpenKeys={["1"]}
      className="ant-layout-main-content scrollable"
      items={items}
    ></Menu>
  );
};

export default SideBar;
