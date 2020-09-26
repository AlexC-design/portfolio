import React from "react";

import "./tool-icon.css";

export const ToolIcon = ({ icon, name, color }) => {
  return (
    <div className="tool-icon">
      <p className="tool-name">{name}</p>
      <img className={`color-${color}`} src={icon} alt={`${icon} icon`} />
      {/* <div className="glow" /> */}
    </div>
  );
};
