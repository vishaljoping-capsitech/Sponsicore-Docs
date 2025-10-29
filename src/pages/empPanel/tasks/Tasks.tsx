import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import React from "react";
import { tasksSections } from "./tasksSections";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const EmployeeTasks = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Tasks" />

          <Paragraph
            text={
              <>
                The Tasks section allows employees to efficiently manage their
                daily and monthly work assignments, keeping track of progress,
                deadlines, and activity history.
              </>
            }
          />

          {tasksSections.map((item) => (
            <Row id={item.id}>
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}
        </Col>
      </Row>
    </>
  );
};

EmployeeTasks.getAnchorItems = () => generateAnchorItems(tasksSections);

export default EmployeeTasks;
