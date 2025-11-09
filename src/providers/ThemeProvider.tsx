"use client";

import React, {
  createContext,
  useState,
  useLayoutEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Lazy initializer for useState
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light"; // SSR
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Initialize state lazily to avoid setState in effects
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme class to DOM before paint
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);

      // Update DOM class immediately
      const root = window.document.documentElement;
      if (newTheme === "dark") root.classList.add("dark");
      else root.classList.remove("dark");

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
