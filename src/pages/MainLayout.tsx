import { Col, Layout, Row } from "antd";
import React from "react";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { SideBar, TopHeader } from "../components";

const MainLayout: React.FC = () => {
  return (
    <Row justify={"center"}>
      <Col xl={18} xs={24}>
        <Layout>
          <TopHeader />
          <Layout>
            <Sider className="bg-white ml-2 p-2 rounded-md ant-layout-main-content scrollable">
              <SideBar />
            </Sider>
            <Content className="bg-white mx-2 p-2 rounded-md ant-layout-main-content scrollable">
              <h1>Under Development</h1>
            </Content>
          </Layout>
        </Layout>
      </Col>
    </Row>
  );
};

export default MainLayout;
