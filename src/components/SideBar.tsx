import { Menu, type MenuProps } from 'antd'
import '../css/common.css'
import React, { useState } from 'react'
import { SidebarItems } from './SidebarItems';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { ISideBarKeys } from '../types/Types';




export interface LevelKeysProps {
  key: ISideBarKeys;
  label: string;
  children?: LevelKeysProps[];
}

interface IProps {
  selectedKey: ISideBarKeys;
  setSelectedKey: React.Dispatch<React.SetStateAction<ISideBarKeys>>;
}

const SideBar: React.FC<IProps> = ({ setSelectedKey , selectedKey }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([ISideBarKeys.Admin.toString(),]);

  const mode = useSelector((state: RootState) => state.theme.mode);

  const items = SidebarItems({selectedKey, setSelectedKey});

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
    <Menu
      mode="inline"
      selectedKeys={[selectedKey.toString()]}
      defaultSelectedKeys={[ISideBarKeys.Overview.toString()]}
      openKeys={stateOpenKeys}
      onClick={({ key }) => setSelectedKey(Number(key))}
      onOpenChange={onOpenChange}
      className={`${mode === "dark" ? "dark" : ""} ant-layout-main-content scrollable`}
      items={items}
    />
  );
};

export default SideBar;