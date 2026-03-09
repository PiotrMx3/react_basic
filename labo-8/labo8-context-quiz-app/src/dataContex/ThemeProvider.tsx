import type React from "react";
import {Themecontext} from "./ThemeContext";
import {useState} from "react";

import {type Theme} from "./ThemeContext";

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Themecontext.Provider value={{theme, toggleTheme}}>
      <div className={`app-wrapper ${theme}`}>{children}</div>
    </Themecontext.Provider>
  );
};

export default ThemeProvider;
