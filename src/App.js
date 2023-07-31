import React, { useState } from "react";
import "./App.css";
import TooltipForm from "./TooltipForm";
import TooltipPreview from "./TooltipPreview";

const App = () => {
  const [tooltipSettings, setTooltipSettings] = useState({
    targetElement: "B1",
    tooltipText: "",
    textSize: 14,
    padding: 10,
    textColor: "#ffffff",
    backgroundColor: "#333333",
    cornerRadius: 4,
    tooltipWidth: 200,
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTooltipSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h1>Tooltip App</h1>
      <div className="container">
        <TooltipForm
          {...tooltipSettings}
          handleChange={handleChange}
        />
        <TooltipPreview
          {...tooltipSettings}
        />
      </div>
    </div>
  );
};

export default App;
