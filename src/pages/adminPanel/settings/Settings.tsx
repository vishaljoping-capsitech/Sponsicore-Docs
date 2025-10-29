import { Col, Row } from "antd";
import React from "react";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import { sections } from "./SettingsSection";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const Settings = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Settings" />
          <Paragraph
            text="The Settings section allows users to manage and configure employee document types with precision and flexibility.
                    Through this interface, users can define specific attributes for each document type—ensuring they align with internal policies, employee categories,
                    and onboarding processes. These settings provide a centralized way to maintain consistency, improve document workflows, and support compliance across the organization."
          />

          {sections.map((item) => (
            <Row id={item.id}>
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}
          
        </Col>
      </Row>
    </>
  );
};

Settings.getAnchorItems = () => generateAnchorItems(sections);
export default Settings;
