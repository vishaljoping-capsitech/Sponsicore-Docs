import { Menu, type MenuProps } from 'antd'
import '../css/common.css'
import React, { useState } from 'react'
import { SidebarItems } from './SidebarItems';


export enum ISideBarKeys {
  Undefined,
  Overview,
  Admin,
  Employee,
  AdminLayout,
  AdminSettings,
  AdminDashboard,
  AdminCompany,
  AdminEmployee,
  AdminAttendance,
  AdminTask,
  AdminTravel,
  AdminEmail,
  AdminLeave,
  AdminRequest,
  AdminCalendar,
  AdminReports,
  EmployeeLayout,
  EmployeeDashboard,
  EmployeeProfile,
  EmployeeAttendance,
  EmployeeTask,
  EmployeeTravel,
  EmployeeLeave,
  EmployeeRequest,
  EmployeeCalendar,
  EmployeePolicies
}

export interface LevelKeysProps {
  key: ISideBarKeys;
  label: string;
  children?: LevelKeysProps[];
}

interface IProps {
  isDarkMode: boolean;
  selectedKey: ISideBarKeys;
  setSelectedKey: React.Dispatch<React.SetStateAction<ISideBarKeys>>;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<IProps> = ({ setSelectedKey, isDarkMode, selectedKey }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([ISideBarKeys.Admin.toString(),]);

  const items = SidebarItems(isDarkMode);

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
      className={`${isDarkMode ? "dark-mode-bg dark" : "bg-white"} ant-layout-main-content scrollable`}
      items={items}
    />
  );
};

export default SideBar;