import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../theme";

interface ThemeState {
  mode: "light" | "dark";
  config: any;
}

const getSystemTheme = (): "light" | "dark" => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const getLocal = (key: string): any => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return null;
};

const setLocal = (key: string,data: any, replacer?: (key: string, value: any) => any) => {
  localStorage.setItem(key, data ? JSON.stringify(data, replacer) : "");
};

const systemMode = getSystemTheme();

const initialState: ThemeState = {
  mode: systemMode,
  config: systemMode === "dark" ? darkTheme : lightTheme,
};

let savedTheme = getLocal("theme") === null ? initialState : getLocal("theme");

const themeSlice = createSlice({
  name: "theme",
  initialState: savedTheme,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        state.config = darkTheme;
        setLocal("theme", { mode: "dark", config: darkTheme});
      } else {
        state.mode = "light";
        state.config = lightTheme;
        setLocal("theme", { mode: "light", config: lightTheme});
      }
    },
    setTheme: (state, action) => {
      const mode = action.payload;
      state.mode = mode;
      state.config = mode === "dark" ? darkTheme : lightTheme;
      setLocal("theme", toggleTheme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;