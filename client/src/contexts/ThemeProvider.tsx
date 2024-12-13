import React, { createContext, FC, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeCTXProps {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * ThemeContext provides the current theme ("light" or "dark") and a function to toggle it.
 * Wrap your application with ThemeProvider to use this context.
 */
export const ThemeContext = createContext<ThemeCTXProps | undefined>(undefined);

const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  }
  return "light"; // Default theme
};