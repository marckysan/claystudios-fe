import React, { FC, useEffect, useState } from "react";
// import ProgressBar from "../progressBar/progressBar";

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
    <div className="loadingScreen" style={{ height: "100vh" }}>
      {/* <ProgressBar
        bgcolor={"black"}
        completed={completed}
        direction={"vertical"}
      /> */}
      <div
        className="loadingAnimationVideo"
        style={{
          marginLeft: "36vw",
          marginTop: "36vh",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video width="40%" muted autoPlay>
          <source src="videos/loadingAnimation.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Loading;
