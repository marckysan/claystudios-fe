import React, { FC } from "react";
import "./projectCard.css";

type Props = {
  img: string;
  name: string;
};

const ProjectCard: FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        background: "#ffffff",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "1px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "2vw",
        paddingBottom: "3%",
        paddingLeft: "2%",
        paddingRight: "2%",
        width: "18vw",
        height: "24vw",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "16vw", height: "20vw", borderRadius: "1px" }}
          src={props.img}
          alt="projectImage"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h2 className="cardText">{props.name}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
