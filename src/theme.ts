import { Theme } from "./types/Types";

export const lightTheme: Theme = {
  components: {
    Layout: {
      headerBg: "#fff",
      siderBg: "#FFF",
      bodyBg: "#fafaff",
    },
    Typography: {
      colorText: "#353046",
    },
    Input: {
      controlHeight: 32,
      colorBorder: "#E3E7F0",
      itemHoverBg: "#F4f5fa",
    },
    Menu: {
      colorBgContainer: "#FFF",
      itemBg: "#FFF",
      itemHoverBg: "#F3F3FF",
      itemSelectedBg: "#F3F3FF",
      itemColor: "#353046",
      itemSelectedColor: "#353046",
      itemHoverColor: "#353046",
    },
    Anchor: {
      colorText: "#625982",
      colorBgTextActive: "#353046",
    },
  },
  token: {
    colorPrimary: "#353046",
    colorBgContainer: "#ffffff",
    colorText: "#000000",
  },
};

export const darkTheme: Theme = {
  components: {
    Layout: {
      headerBg: "#302640",
      siderBg: "#302640",
      bodyBg: "#261e33"
    },
    Typography:{
      colorText: "#ffffff"
    },
    Input: {
      controlHeight: 32,
      colorBorder: "#4C3B63",
      colorBgContainer: "#261E33",
      colorTextPlaceholder: "#978FB2",
      colorIcon: "#B3ADC7",
      colorBorderHover: "#978FB2",
      colorBorderFocus: "#978FB2",
    },
    Menu: {
      colorBgContainer: "#302640",
      itemBg: "#302640",
      itemHoverBg: "#413356",
      itemSelectedBg: "#4C3B63",
      itemColor: "#CFCCDC",
      itemHoverColor: "#FFFFFF",
      itemSelectedColor: "#FFFFFF",
    },
    Anchor: {
      colorText: "#CFCCDC",
      colorBgTextActive: "#FFF"
    },
  },
  token: {
    colorPrimary: "#CFCCDC",
    colorBgContainer: "#1f1f1f",
    colorText: "#ffffff",
  },
};