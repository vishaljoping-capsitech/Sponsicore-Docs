import { ThemeState } from "../types/Types";

export const getLocal = (key: string): ThemeState | null => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data) as ThemeState;
  return null;
};

export const setLocal = (key: string, data: ThemeState) => {
  localStorage.setItem(key, JSON.stringify(data));
};