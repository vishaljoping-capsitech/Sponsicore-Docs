import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../theme";
import { ThemeState } from "../types/Types";
import { getLocal, setLocal } from "../utils/localStorage";

const getSystemTheme = (): "light" | "dark" => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const systemMode = getSystemTheme();

const initialState: ThemeState = {
  mode: systemMode,
  config: systemMode === "dark" ? darkTheme : lightTheme,
};

const savedTheme: ThemeState = getLocal("theme") ?? initialState;

const themeSlice = createSlice({
  name: "theme",
  initialState: savedTheme,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        state.config = darkTheme;
      } else {
        state.mode = "light";
        state.config = lightTheme;
      }
      setLocal("theme", { mode: state.mode, config: state.config });
    },
    setTheme: (state, action) => {
      const mode = action.payload;
      state.mode = mode;
      state.config = mode === "dark" ? darkTheme : lightTheme;
      setLocal("theme", { mode, config: state.config });
    },
  },
});


export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;