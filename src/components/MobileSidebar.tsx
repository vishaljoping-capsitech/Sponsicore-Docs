import * as React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Drawer, Menu, Row, type MenuProps } from "antd";
import { SidebarItems } from "./SidebarItems";
import { type LevelKeysProps } from "../components/SideBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { ISideBarKeys } from "../types/Types";

interface MobileSidebarProps {
  collapsed: boolean;
  selectedKey: ISideBarKeys;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedKey: React.Dispatch<React.SetStateAction<ISideBarKeys>>;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ collapsed, selectedKey, setCollapsed, setSelectedKey,}) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
      window.addEventListener("resize", () => {setCollapsed(true);},true);
  }, []);

  const items = SidebarItems({ selectedKey, setSelectedKey });
  const [stateOpenKeys, setStateOpenKeys] = useState([
    ISideBarKeys.Admin.toString(),
  ]);

  const getLevelKeys = (levelKeysArr: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (levelKeysArrFinal: LevelKeysProps[], level = 1) => {
      levelKeysArrFinal.forEach((item) => {
        if (item.key) key[item.key] = level;
        if (item.children) func(item.children, level + 1);
      });
    };
    func(levelKeysArr);
    return key;
  };
  const levelKeys = getLevelKeys(items as LevelKeysProps[]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys: string[]) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Drawer
      placement="left"
      width={300}
      zIndex={1001}
      maskClosable
      closeIcon={false}
      open={!collapsed}
      onClose={() => setCollapsed(true)}
      className={`${mode === "dark" ? "dark" : ""} mobile-sidebar`}
      footer={
        <Row onClick={() => setCollapsed(true)} justify="center" className="py-2 cursor-pointer">
          <LeftOutlined className="drawer-close-icon" />
        </Row>
      }
    >
      <Menu
        items={items}
        mode="inline"
        className="scrollable"
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={[ISideBarKeys.Overview.toString()]}
        onClick={({ key }) => {setSelectedKey(Number(key)); setCollapsed(true);}}
      ></Menu>
    </Drawer>
  );
};

export default MobileSidebar;