export interface Section {
    component?: React.ComponentType;
    id: string;
    title: string;
    children?: Section[];
}

export interface AnchorItemProps {
  key: string;
  href: string,
  title: string,
  children?: AnchorItemProps[]
}

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


export interface Theme  {
  components: {
    Layout: {
      headerBg: string;
      siderBg: string;
      bodyBg: string;
    };
    Typography?: {
      colorText: string;
    };
    Input?: {
      controlHeight?: number;
      colorBorder?: string;
      itemHoverBg?: string;
      colorBgContainer?: string;
      colorTextPlaceholder?: string;
      colorIcon?: string;
      colorBorderHover?: string;
      colorBorderFocus?: string;
    };
    Menu?: {
      colorBgContainer: string;
      itemBg: string;
      itemHoverBg: string;
      itemSelectedBg: string;
      itemColor: string;
      itemSelectedColor: string;
      itemHoverColor: string;
    };
    Anchor?: {
      colorText: string;
      colorBgTextActive: string;
    };
  };
  token: {
    colorPrimary: string;
    colorBgContainer: string;
    colorText: string;
  };
};
