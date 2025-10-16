import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import SubHeading from "../../../components/SubHeading";
import { layoutSections } from "./layoutSection";
import React from "react";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const Layout = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Layout" />

          <SubHeading
            text={
              <>
                <ol>
                  {layoutSections.map((item, index) => (
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
  );
};

Layout.getAnchorItems = () => generateAnchorItems(layoutSections);

export default Layout;
