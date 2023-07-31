import React, { useRef, useEffect } from "react";

const TooltipPreview = ({
  targetElement,
  tooltipText,
  textSize,
  padding,
  textColor,
  backgroundColor,
  cornerRadius,
  tooltipWidth,
  
}) => {
  const tooltipRef = useRef(null);

  useEffect(() => {
    positionTooltip();
  }, [targetElement, textSize, padding, textColor, backgroundColor, cornerRadius, tooltipWidth]);
  

  const tooltipStyle = {
    fontSize: textSize + "px",
    padding: padding + "px",
    color: textColor,
    backgroundColor,
    borderRadius: cornerRadius + "px",
    width: tooltipWidth + "px",
    position: "absolute",
    display: "inline-block",
    zIndex: 9999,
  };

  const positionTooltip = () => {
    const targetElementRef = document.getElementById(targetElement);
    const tooltipRefCurrent = tooltipRef.current;
  
    if (!targetElementRef || !tooltipRefCurrent) return;
  
    const positions = {
      B1: { top: "40px", left: "15px" },
      B2: { top: "40px", left: "550px" },
      B3: { top: "240px", left: "280px" },
      B4: { top: "355px", left: "15px" },
      B5: { top: "355px", left: "550px" },
    };
  
    const { top, left } = positions[targetElement] || {};
  
    if (top !== undefined && left !== undefined) {
      tooltipRefCurrent.style.top = top;
      tooltipRefCurrent.style.left = left;
    }
  };
  
  return (
    <div className="tooltip-preview">
      <div className="target-container" id="target-container">
        <div className="target-element B1" id="B1">
          Button1
        </div>
        <div className="target-element B2" id="B2">
          Button2
        </div>
        <div className="target-element B3" id="B3">
          Button3
        </div>
        <div className="target-element B4" id="B4">
          Button4
        </div>
        <div className="target-element B5" id="B5">
          Button5
        </div>
      </div>
      <div
        className="tooltip"
        style={{
          ...tooltipStyle,
        }}
        ref={tooltipRef}
      >
        
        {tooltipText}
      </div>
    </div>
  );
};

export default TooltipPreview;
