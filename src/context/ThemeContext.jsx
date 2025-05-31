import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");


  return <ThemeContext.Provider value={{themeMode, darkTheme, lightTheme}}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context
}

