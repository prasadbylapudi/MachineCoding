import React from "react";

function ProgressBar({ progress, color }) {
  const styleObj = {
    width: `${progress}%`,
    height: "30px",
    borderRadius: "20px",
    backgroundColor: color,
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div style={styleObj}>{`${progress}%`}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
