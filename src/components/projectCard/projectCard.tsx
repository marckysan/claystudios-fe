import React, { FC } from "react";
import "./projectCard.css";

type Props = {
  img: string;
  name: string;
};

const ProjectCard: FC<Props> = (props: Props) => {
  return (
    <div className="projectCard">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img className="cardImage" src={props.img} alt="projectImage" />
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
