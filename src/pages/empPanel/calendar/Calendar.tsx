import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";
import SubHeading from "../../../components/SubHeading";
import React from "react";
import { calendarSections } from "./calendarSections";

const Calendar = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text={"Calendar"} />

          <SubHeading
            text={
              <>
                <ol>
                  {calendarSections.map((item, index) => (
                    <li key={index} id={item.id}>
                      {item.title}
                      {item.component ? React.createElement(item.component) : null}
                    </li>
                  ))}
                </ol>
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
}

Calendar.getAnchorItems = () => generateAnchorItems(calendarSections);

export default Calendar;