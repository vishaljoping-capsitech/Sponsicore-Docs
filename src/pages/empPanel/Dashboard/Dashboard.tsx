import React from "react";
import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import ImageCard from "../../../components/ImageCard";
import { images } from "../../../assets";
import { dashboardSections } from "./dashboardSections";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const Dashboard = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Dashboard" />

          <Paragraph
            text={
              <>
                The Employee Dashboard provides a comprehensive view of daily
                activities, work performance, and key attendance metrics helping
                employees stay informed and productive throughout their workday.
              </>
            }
          />

          <ImageCard src={images.empDashboard} />

          {dashboardSections.map((item) => (
            <Row id={item.id}>
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}
        </Col>
      </Row>
    </>
  );
};

Dashboard.getAnchorItems = () => generateAnchorItems(dashboardSections);

export default Dashboard;
