import React from "react";
import "./progressBar.css";

const ProgressBar = (props: any) => {
  const { bgcolor, completed, direction } = props;

  const horizontalContainerStyles = {
    height: "0.2vw",
    width: "100%",
    backgroundColor: "white",
    marginTop: 50,
  };

  const horizontalFillerStyles = {
    height: "100%",
    maxWidth: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    transition: "width ease-in-out",
  };

  const verticalContainerStyles = {
    height: "100vh",
    width: "0.2vw",
    backgroundColor: "white",
    marginLeft: 50,
  };

  const verticalFillerStyles = {
    height: `${completed}%`,
    maxHeight: "100%",
    width: "100%",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    transition: "height ease-in-out",
  };

  return (
    <div
      style={
        direction === "horizontal"
          ? horizontalContainerStyles
          : verticalContainerStyles
      }
    >
      <div
        style={
          direction === "horizontal"
            ? horizontalFillerStyles
            : verticalFillerStyles
        }
      ></div>
    </div>
  );
};

export default ProgressBar;
