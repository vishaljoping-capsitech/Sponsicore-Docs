import React, { useState, useMemo } from "react";
import "../css/common.css";
import { Anchor, Col, Layout, Row } from "antd";
import TopHeader from "../components/TopHeader";
import SideBar from "../components/SideBar";
import { AlignLeftOutlined } from "@ant-design/icons";
import MobileSidebar from "../components/MobileSidebar";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import Overview from "./overview/Overview";
import { AnchorItemProps, ISideBarKeys } from "../types/Types";
const { Content, Sider } = Layout;
import Employee from "./adminPanel/employees/Employee";
import Travel from "./adminPanel/travel/Travel";
import AdminLayout from "./adminPanel/layout/Layout";
import Leave from "./adminPanel/leave/Leave";
import AdminDashboard from "./adminPanel/dashboard/Dashboard";
import Reports from "./adminPanel/reports/Reports";
import Email from "./adminPanel/email/Email";
import AdminCalendar from "./adminPanel/calendar/Calendar";
import Company from "./adminPanel/company/Company";
import AdminTasks from "./adminPanel/Tasks/Tasks";
import EmployeeLayout from "./empPanel/layout/Layout";
import AdminAttendance from "./adminPanel/attendance/AdminAttendance";
import EmployeeDashboard from "./empPanel/Dashboard/Dashboard";
import AdminRequest from "./adminPanel/request/AdminRequest";
import EmployeeTravel from "./empPanel/travel/EmployeeTravel";

const componentMap: Record<ISideBarKeys, React.FC & { getAnchorItems?: () => AnchorItemProps[] }> = {
  [ISideBarKeys.Undefined]: Overview,
  [ISideBarKeys.Overview]: Overview,
  [ISideBarKeys.Admin]: Overview,
  [ISideBarKeys.Employee]: Overview,
  [ISideBarKeys.AdminLayout]: AdminLayout,
  [ISideBarKeys.AdminSettings]: Overview,
  [ISideBarKeys.AdminDashboard]: AdminDashboard,
  [ISideBarKeys.AdminCompany]: Company,
  [ISideBarKeys.AdminEmployee]: Employee,
  [ISideBarKeys.AdminAttendance]: AdminAttendance,
  [ISideBarKeys.AdminTasks]: AdminTasks,
  [ISideBarKeys.AdminTravel]: Travel,
  [ISideBarKeys.AdminEmail]: Email,
  [ISideBarKeys.AdminLeave]: Leave,
  [ISideBarKeys.AdminRequest]: AdminRequest,
  [ISideBarKeys.AdminCalendar]: AdminCalendar,
  [ISideBarKeys.AdminReports]: Reports,
  [ISideBarKeys.EmployeeLayout]: EmployeeLayout,
  [ISideBarKeys.EmployeeDashboard]: EmployeeDashboard,
  [ISideBarKeys.EmployeeProfile]: Overview,
  [ISideBarKeys.EmployeeAttendance]: Overview,
  [ISideBarKeys.EmployeeTask]: Overview,
  [ISideBarKeys.EmployeeTravel]: EmployeeTravel,
  [ISideBarKeys.EmployeeLeave]: Overview,
  [ISideBarKeys.EmployeeRequest]: Overview,
  [ISideBarKeys.EmployeeCalendar]: Overview,
  [ISideBarKeys.EmployeePolicies]: Overview,
}

const MainLayout: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<ISideBarKeys>(ISideBarKeys.Overview);
  const [collapsed, setCollapsed] = React.useState(true);
  const mode = useSelector((state: RootState) => state.theme.mode)

  const onMenuClick = () => setCollapsed(!collapsed);

  const CurrentComponent = componentMap[selectedKey];

  const anchorItems = useMemo(() => {
    return CurrentComponent?.getAnchorItems ? CurrentComponent.getAnchorItems() : [];
  }, [CurrentComponent]);

  return (
    <>
      <MobileSidebar selectedKey={selectedKey} setSelectedKey={setSelectedKey} collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Row justify={"center"}>
        <Col xs={24}>
          <Layout>
          
            <Header className="px-4" style={{ borderBottom: mode === "dark" ? "1px solid #4C3B63" : "1px solid #EBEAF1", }}>
              <TopHeader />
            </Header>
            <Layout>
              <Sider className="ant-layout-main-content scrollable docs-sidebar-menu"
                style={{ borderRight: mode === "dark" ? "1px solid #4C3B63" : "1px solid #EBEAF1", }}>
                <SideBar selectedKey={selectedKey} setSelectedKey={setSelectedKey}/>
              </Sider>
              <Content className="ant-layout-main-content scrollable" >
                <AlignLeftOutlined onClick={onMenuClick} className="text-md cursor-pointer side-bar-menu-collapse theme-color pr-4" 
                  style={{lineHeight: "1px",backgroundColor: "#7427502b",}}/>
                <Row justify={'center'} className="docs-components">
                  <Col lg={20} md={18} xs={24} className="px-4">
                    <Row justify={'center'}>
                      <Col lg={15} md={20} xs={24}>
                        {CurrentComponent ? <CurrentComponent /> : <div>Component not found</div>}
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} md={6} xs={0} >
                    <Anchor className={`${mode === "dark" ? "dark" : ""}`} replace offsetTop={150} items={anchorItems} getContainer={() => document.querySelector(".ant-layout-content") as HTMLElement}/>
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