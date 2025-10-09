import * as React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Drawer, Menu, Row, type MenuProps } from 'antd';
import { SidebarItems } from './SidebarItems';
import { ISideBarKeys, type LevelKeysProps } from '../components/SideBar';
import { useEffect, useState } from 'react';

interface MobileSidebarProps {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    isDarkMode?: boolean;
    setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedKey: React.Dispatch<React.SetStateAction<ISideBarKeys>>;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ collapsed, setCollapsed, isDarkMode = false, setSelectedKey }) => {

    useEffect(() => {
        window.addEventListener("resize", () => { setCollapsed(true) }, true);
    }, [])

    const items = SidebarItems(isDarkMode);
    const [stateOpenKeys, setStateOpenKeys] = useState([ISideBarKeys.Admin.toString()]);

    const getLevelKeys = (levelKeysArr: LevelKeysProps[]) => {
        const key: Record<string, number> = {};
        const func = (levelKeysArrFinal: LevelKeysProps[], level = 1) => {
            levelKeysArrFinal.forEach((item) => {
                if (item.key) {
                    key[item.key] = level;
                }
                if (item.children) {
                    func(item.children, level + 1);
                }
            });
        };
        func(levelKeysArr);
        return key;
    };
    const levelKeys = getLevelKeys(items as LevelKeysProps[]);


    const onOpenChange: MenuProps['onOpenChange'] = (openKeys: string[]) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

            setStateOpenKeys(
                openKeys
                    .filter((_, index) => index !== repeatIndex)
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {
            setStateOpenKeys(openKeys);
        }
    };

    return (
        <Drawer
            placement="left"
            className={`mobile-sidebar ${isDarkMode ? "dark-mode-bg dark" : "bg-white"}`}
            width={300}
            zIndex={1001}
            maskClosable
            closeIcon={false}
            open={!collapsed}
            onClose={() => setCollapsed(true)}
            footer={
                <Row justify="center" className="py-2">
                    <LeftOutlined onClick={() => setCollapsed(true)} className="drawer-close-icon" />
                </Row>
            }>
            <Menu
                mode="inline"
                defaultSelectedKeys={[ISideBarKeys.Overview.toString()]}
                openKeys={stateOpenKeys}
                onClick={({ key }) => {
                    setSelectedKey(Number(key));
                    setCollapsed(true);
                }}
                onOpenChange={onOpenChange}
                className={`${isDarkMode ? "dark-mode-bg dark" : "bg-white"} scrollable`}
                items={items}
            ></Menu>
        </Drawer>
    );
};

export default MobileSidebar;