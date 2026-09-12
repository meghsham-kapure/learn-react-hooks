import React, { useState, createContext } from "react";

import UseContextHome from "./UseContextHome";
import { NameContext, ThemeContext } from "./GlobalContext.jsx";

export default function UseContextApp() {
  const [name, setName] = useState("devdotmaverick");
  const [theme, setTheme] = useState("light");

  return (
    // 2. wrapping component with provider
    <NameContext.Provider value={{ name, setName }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UseContextHome />
      </ThemeContext.Provider>
    </NameContext.Provider>
  );
}
