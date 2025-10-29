import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import { layoutSections } from "./layoutSection";
import React from "react";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const Layout = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Layout" />

          {layoutSections.map((item) => (
            <Row id={item.id}>
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}

        </Col>
      </Row>
    </>
  );
};

Layout.getAnchorItems = () => generateAnchorItems(layoutSections);

export default Layout;
