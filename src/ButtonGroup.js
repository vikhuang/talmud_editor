import React from "react";

const ButtonGroup = ({ label, children }) => (
  <div className="ButtonGroup">
    <span className="ButtonGroup-span">{label}</span>
    <div>{children}</div>
  </div>
);

export default ButtonGroup;
