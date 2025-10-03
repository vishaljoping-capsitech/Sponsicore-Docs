import { Col, Layout, Row } from 'antd';
import React from 'react'
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import TopHeader from '../components/TopHeader';
import SideBar from '../components/SideBar';
import '../css/common.css'
import { AlignLeftOutlined } from '@ant-design/icons';
import MobileSidebar from '../components/MobileSidebar';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import SubHeading from '../components/SubHeading';
import Title from '../components/Title';

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
              <Heading text='Hello world!' />
              <Paragraph text={<>Lorem Ipsum is <Title text='simply dummy text of the' /> printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</>} />
              <SubHeading text='This is a subheading' />
              <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </Content>
          </Layout>
        </Layout>
      </Col>
    </Row>
    </>
  )
}

export default MainLayout;
