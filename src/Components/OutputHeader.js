import React from "react";

export default function OutputHeader() {
  return (
    <div className="OutputHeader">
      <div className="headerLeft">
        <h1>Paul Cochrane</h1>
        <h4>Software Developer</h4>
      </div>
      <div className="headerRight">
        <span>0421 169 202</span>
        <span>paulstuartcochrane@gmail.com</span>
        <span>Brisbane</span>
        <svg data-testid="DeleteIcon"></svg>
      </div>
    </div>
  );
}
