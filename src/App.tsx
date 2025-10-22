import React from "react";

import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
  
    {/* <ThemeProvider> */}
      <h1>Task Manager App</h1>
      <button onClick={toggleTheme}>
        Swith To {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    {/* </ThemeProvider> */}
    </>
  );
}

export default App;
