import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="theme-toggle"
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
    >
      <div className={`toggle-thumb ${theme === "dark" ? "dark" : ""}`}>
        {theme === "dark" ? "☾" : "☀"}
      </div>
    </div>
  );
}
