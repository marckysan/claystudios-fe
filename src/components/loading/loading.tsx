import React, { FC, useEffect, useState } from "react";
import ProgressBar from "../progressBar/progressBar";

const Loading: FC = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (completed <= 100) {
        return setCompleted(completed + 1);
      }
    }, 30);
  }, [completed]);

  return (
    // <div className="loadingScreen">
    <div className="leftSection">
      <ProgressBar
        bgcolor={"black"}
        completed={completed}
        direction={"vertical"}
      />
      {/* <video
        width="320"
        height="240"
        src={require("../../assets/videos/loadingAnimation.mov")}
        autoPlay
      /> */}
      {/* <ProgressBar
        bgcolor={"black"}
        completed={completed}
        direction={"vertical"}
      /> */}
    </div>
    //   <div className="middleSection"></div>
    //   <div className="rightSection"></div>
    // </div>
  );
};

export default Loading;
