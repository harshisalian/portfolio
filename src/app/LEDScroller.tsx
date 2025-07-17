import React from "react";

interface LEDScrollerProps {
  text: string;
}

const LEDScroller: React.FC<LEDScrollerProps> = ({ text }) => {
  return (
    <div className="led-scroller-outer">
      <div className="led-scroller-inner">
        <span>{text}&nbsp;&nbsp;&nbsp;</span>
        <span>{text}&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};

export default LEDScroller; 