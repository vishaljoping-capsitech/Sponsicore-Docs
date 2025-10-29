import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";
import React from "react";
import { calendarSections } from "./calendarSections";

const Calendar = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text={"Calendar"} />

          {calendarSections.map((item) => (
            <Row id={item.id}>
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}
        </Col>
      </Row>
    </>
  );
};

Calendar.getAnchorItems = () => generateAnchorItems(calendarSections);

export default Calendar;
