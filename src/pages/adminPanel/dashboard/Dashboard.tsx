import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import SubHeading from "../../../components/SubHeading";
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

          <SubHeading
            text={
              <>
                <ol>
                  {dashboardSections.map((item, index) => (
                    <li key={index} id={item.id}>
                      {item.title}
                      {item.component ? React.createElement(item.component) : null}
                    </li>
                  ))}
                </ol>
              </>
            }
          />
          
          <DashboardOutro />
        </Col>
      </Row>
    </>
  );
};

Dashboard.getAnchorItems = () => generateAnchorItems(dashboardSections);

export default Dashboard;
