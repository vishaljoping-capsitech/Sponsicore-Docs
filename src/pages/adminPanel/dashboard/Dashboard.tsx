import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import "../../../css/common.css";
import DashboardIntro from "./DashboardIntro";
import DashboardOutro from "./DashboardOutro";
import { dashboardSections } from "./dashboardSections";
import React from "react";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const Dashboard = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Dashboard" />

          <DashboardIntro />

          {dashboardSections.map((item) => (
            <Row id={item.id}>
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}
          
          <DashboardOutro />
        </Col>
      </Row>
    </>
  );
};

Dashboard.getAnchorItems = () => generateAnchorItems(dashboardSections);

export default Dashboard;
