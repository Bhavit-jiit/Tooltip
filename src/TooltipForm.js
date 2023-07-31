import React from "react";

const TooltipForm = ({
  targetElement,
  tooltipText,
  textSize,
  padding,
  textColor,
  backgroundColor,
  cornerRadius,
  tooltipWidth,
  
  handleChange,
}) => {
  return (
    <div className="tooltip-form">
      
      <div>
        <label htmlFor="targetElement">Target Element:</label>
        <select
          id="targetElement"
          name="targetElement"
          value={targetElement}
          onChange={handleChange}
        >
          <option value="B1">Button1</option>
          <option value="B2">Button2</option>
          <option value="B3">Button3</option>
          <option value="B4">Button4</option>
          <option value="B5">Button5</option>
        </select>
      
      </div>
      <br /> 
      <div>
        <label htmlFor="tooltipText">Tooltip Text:</label>
        <input
          type="text"
          id="tooltipText"
          name="tooltipText"
          placeholder="Enter your tooltip text here"
          value={tooltipText}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <div>
        <label htmlFor="textSize">Text Size:</label>
        <input
          type="number"
          id="textSize"
          name="textSize"
          value={textSize}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <div>
        <label htmlFor="padding">Padding:</label>
        <input
          type="number"
          id="padding"
          name="padding"
          value={padding}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <div>
        <label htmlFor="textColor">Text Color:</label>
        <input
          type="color"
          id="textColor"
          name="textColor"
          value={textColor}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="color"
          id="backgroundColor"
          name="backgroundColor"
          value={backgroundColor}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <div>
        <label htmlFor="cornerRadius">Corner Radius:</label>
        <input
          type="number"
          id="cornerRadius"
          name="cornerRadius"
          value={cornerRadius}
          onChange={handleChange}
        />
      </div>
      <br /> 
      <div>
        <label htmlFor="tooltipWidth">Tooltip Width:</label>
        <input
          type="number"
          id="tooltipWidth"
          name="tooltipWidth"
          value={tooltipWidth}
          onChange={handleChange}
        />
      </div>
      <br /> 
    </div>
  );
};

export default TooltipForm;
