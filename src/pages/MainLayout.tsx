import { Col, Layout, Row } from 'antd';
import React from 'react'
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import TopHeader from '../components/TopHeader';
import SideBar from '../components/SideBar';
import '../css/common.css'
import { AlignLeftOutlined } from '@ant-design/icons';
import MobileSidebar from '../components/mobileSidebar';

const MainLayout: React.FC = () => {

  const [collapsed, setCollapsed] = React.useState(true);

  const onMenuClick = () => {
    setCollapsed(!collapsed);
  }

  return (
    <>
    <MobileSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
    <Row justify={'center'}>
      <Col xs={24}>
        <Layout>
          <TopHeader />
          <Layout>
            <Sider className='bg-white ml-2 p-2 rounded-md ant-layout-main-content scrollable docs-shadow docs-sidebar-menu'>
              <SideBar />
            </Sider>
            <Content className='bg-white mx-2 p-2 rounded-md ant-layout-main-content scrollable docs-shadow'>
              <AlignLeftOutlined onClick={onMenuClick} className='text-md cursor-pointer side-bar-menu-collapse theme-color pr-4' style={{ lineHeight: "1px" }} />
              <h1>Under Development</h1>
            </Content>
          </Layout>
        </Layout>
      </Col>
    </Row>
    </>
  )
}

export default MainLayout;
