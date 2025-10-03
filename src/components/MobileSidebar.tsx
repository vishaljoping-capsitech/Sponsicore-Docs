import * as React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Drawer, Row } from 'antd';

interface mobileSidebarProps {
    collapsed?: boolean;
    setCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}


const MobileSidebar: React.FC<mobileSidebarProps> = ({ collapsed, setCollapsed }) => {

    return (<Drawer
        placement="left"
        width={300}
        zIndex={1001}
        maskClosable
        closeIcon={false}
        open={!collapsed}
        onClose={() => setCollapsed && setCollapsed(true)}
        footer={
            <Row justify="center" className="py-2">
                <LeftOutlined onClick={() => setCollapsed && setCollapsed(true)} className="drawer-close-icon" />
            </Row>
        }>
    </Drawer>);
};

export default MobileSidebar;