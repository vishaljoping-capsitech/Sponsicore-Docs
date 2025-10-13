import React, { useState } from "react";
import "../css/common.css";
import { Anchor, Col, Layout, Row } from "antd";
import TopHeader from "../components/TopHeader";
import SideBar, { ISideBarKeys } from "../components/SideBar";
import { AlignLeftOutlined } from "@ant-design/icons";
import MobileSidebar from "../components/MobileSidebar";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const { Content, Sider } = Layout;

const MainLayout: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<ISideBarKeys>(ISideBarKeys.Overview);
  const [collapsed, setCollapsed] = React.useState(true);

  const mode = useSelector((state:RootState) => state.theme.mode)


  const onMenuClick = () => {
    setCollapsed(!collapsed);
  };

  const renderComponents = () => {
    switch (selectedKey) {
      case ISideBarKeys.Overview:
        return <div>Overview</div>;

      // Admin Panel
      case ISideBarKeys.AdminLayout:
        return <div>Admin Layout</div>;
      case ISideBarKeys.AdminSettings:
        return <div>Settings</div>;
      case ISideBarKeys.AdminDashboard:
        return <div>Admin Dashboard</div>;
      case ISideBarKeys.AdminCompany:
        return <div>Company</div>;
      case ISideBarKeys.AdminEmployee:
        return <div>Employee</div>;
      case ISideBarKeys.AdminAttendance:
        return <div>Attendance</div>;
      case ISideBarKeys.AdminTask:
        return <div>Task</div>;
      case ISideBarKeys.AdminTravel:
        return <div>Travel</div>;
      case ISideBarKeys.AdminEmail:
        return <div>Email</div>;
      case ISideBarKeys.AdminLeave:
        return <div>Leave</div>;
      case ISideBarKeys.AdminRequest:
        return <div>Request</div>;
      case ISideBarKeys.AdminCalendar:
        return <div>Calendar</div>;
      case ISideBarKeys.AdminReports:
        return <div>Reports</div>;

      // Employee Panel
      case ISideBarKeys.EmployeeLayout:
        return <div>Layout</div>;
      case ISideBarKeys.EmployeeDashboard:
        return <div>Dashboard</div>;
      case ISideBarKeys.EmployeeProfile:
        return <div>Profile</div>;
      case ISideBarKeys.EmployeeAttendance:
        return <div>Attendance</div>;
      case ISideBarKeys.EmployeeTask:
        return <div>Task</div>;
      case ISideBarKeys.EmployeeTravel:
        return <div>Travel</div>;
      case ISideBarKeys.EmployeeLeave:
        return <div>Leave</div>;
      case ISideBarKeys.EmployeeRequest:
        return <div>Request</div>;
      case ISideBarKeys.EmployeeCalendar:
        return <div>Calendar</div>;
      case ISideBarKeys.EmployeePolicies:
        return <div>Policies</div>;
    };
  }

  return (
    <>
      <MobileSidebar
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Row justify={"center"}>
        <Col xs={24}>
          <Layout>
            <Header className="px-4" style={{borderBottom: mode === "dark" ? "1px solid #4C3B63" : "1px solid #EBEAF1",}}>
              <TopHeader />
            </Header>
            <Layout>
              <Sider
                className="ant-layout-main-content scrollable docs-sidebar-menu"
                style={{borderRight: mode === "dark" ? "1px solid #4C3B63" : "1px solid #EBEAF1",}}
              >
                <SideBar
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
              </Sider>
              <Content
                className="ant-layout-main-content scrollable"
              >
                <AlignLeftOutlined
                  onClick={onMenuClick}
                  className="text-md cursor-pointer side-bar-menu-collapse theme-color pr-4"
                  style={{
                    lineHeight: "1px",
                    backgroundColor: "#7427502b",
                  }}
                />
                <Row justify={'center'} className="docs-components">
                  <Col lg={20} md={18} xs={24} className="px-4">
                    <Row justify={'center'}>
                      <Col lg={15} md={20} xs={24}>
                        {renderComponents()}
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} md={6} xs={0} >
                    <Anchor
                    className={`${mode === "dark" ? "dark" : ""}`}
                      replace offsetTop={150}
                      items={[
                        { key: 'part-1', href: '#part-1', title: 'Part 1' },
                        { key: 'part-2', href: '#part-2', title: 'Part 2', },
                        { key: 'part-3', href: '#part-3', title: 'Part 3', },
                      ]}
                    />
                  </Col>
                </Row>
              </Content>
            </Layout>
          </Layout>
        </Col>
      </Row>
    </>
  );
};

export default MainLayout;
