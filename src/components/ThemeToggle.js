import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ margin: "10px" }}>
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
