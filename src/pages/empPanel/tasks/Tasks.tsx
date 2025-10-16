import { Col, Row } from "antd"
import Heading from "../../../components/Heading"
import SubHeading from "../../../components/SubHeading"
import Paragraph from "../../../components/Paragraph"
import React from "react"
import { tasksSections } from "./tasksSections"
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems"

const EmployeeTasks = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Tasks" />

          <Paragraph
            text={
              <>
                The Tasks section allows employees to efficiently manage their daily and monthly work assignments, keeping track of progress, deadlines, and activity history.
              </>
            }
          />

          <SubHeading
            text={
              <>
                <ol>
                  {tasksSections.map((item, index) => (
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
    </>
  )
}

EmployeeTasks.getAnchorItems = () => generateAnchorItems(tasksSections);

export default EmployeeTasks