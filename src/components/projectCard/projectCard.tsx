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
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingLeft: "2%",
        paddingRight: "2%",
        width: "15vw",
        height: "18vw",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          style={{ width: "14vw", height: "16vw" }}
          src={props.img}
          alt="projectImage"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h2 className="cardText">{props.name}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
