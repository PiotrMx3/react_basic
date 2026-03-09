import {createContext, useContext} from "react";

export type Theme = "light" | "dark";

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const Themecontext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(Themecontext);
