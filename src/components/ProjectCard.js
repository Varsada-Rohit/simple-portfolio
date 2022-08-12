import React from "react";
import RightArrow from "../assets/RightArrow";

function ProjectCard({ img, tech, name }) {
  return (
    <div className="full-height" style={{ paddingBottom: "14rem" }}>
      <div className="header">
        <div style={{ flex: 1 }}>
          <div className="heading">{tech}</div>
          <div className="subHeading">{name}</div>
        </div>
        <RightArrow />
      </div>
      <img src={img} style={{ height: "100%", objectFit: "contain" }} />
    </div>
  );
}

export default ProjectCard;
