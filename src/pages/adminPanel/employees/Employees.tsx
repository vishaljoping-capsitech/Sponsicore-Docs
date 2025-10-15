import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";
import { employeesSections } from "./employeesSections";
import React from "react";

const Employees = () => {
  return (
    <Row justify="center" gutter={64}>
      <Col xl={24}>
        <Heading text={"Employees"} />

        <Paragraph
          text={
            <>
              <ul>
                The Employees module in Sponsicore allows you to manage all your
                workforce data efficiently in one place. You can view, add, and
                manage both Regular and Sponsored employees, apply filters, and
                perform quick searches to access relevant employee details.
                <li>
                  <Title text="Table View" />: Displays employee data in a
                  structured format with search, refresh, and pagination options
                  for easy navigation.
                </li>
                <li>
                  <Title text="Card View" />: Shows employee details in a clean,
                  visual layout.
                </li>
              </ul>
            </>
          }
        />

        <SubHeading
          text={
            <>
              <ol>
                {employeesSections.map((item, index) => (
                  <li key={index} id={item.id} className="">
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
  );
};

Employees.getAnchorItems = () => generateAnchorItems(employeesSections);

export default Employees;
