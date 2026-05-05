import React from "react";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={isDarkMode}/>
    </div>
  );
};

export default App;
