"use client";

import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";


const ThemeToggleButton= () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
      onClick={toggleTheme}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
};

export default ThemeToggleButton;
