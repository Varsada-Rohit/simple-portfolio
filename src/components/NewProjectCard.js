import React from "react";
import Arrow from "../assets/Arrow";

const Btn = ({ name, href }) => (
  <a target="_Blank" className="project-btn me-5" href={href} rel="noreferrer">
    {name}
    <Arrow
      className="text-black"
      color={"#000"}
      width={10}
      height={12}
      style={{ marginBottom: 4, marginLeft: 5 }}
    />
  </a>
);

function NewProjectCard({
  img,
  name,
  description,
  techUsed = [],
  objectFit,
  codeLink,
  demoLink,
  imgClass,
}) {
  return (
    <div className="col-lg-6 p-5">
      <div style={{ overflow: "hidden" }}>
        <img
          src={img}
          className={"mb-img " + imgClass || ""}
          style={{
            width: "100%",
            height: "20rem",
            objectFit: objectFit || "cover",
            background: "#77889990",
          }}
        />
      </div>

      <div className="pt-2 project-name">{name}</div>
      <div className="d-flex mt-1 mb-2">
        {techUsed.map((t, i) => (
          <div className="tech me-1" key={i}>
            {t}
          </div>
        ))}
      </div>
      <div className="mt-1 ">{description}</div>
      {/* <div className="mt-2 tech-stack">
        <span>Tech Stack:</span> React Native, Typescript & Redux
      </div> */}
      <div className="d-flex mt-3">
        <Btn name={"Code"} href={codeLink} />
        {demoLink && <Btn name={"Demo"} href={demoLink} />}
      </div>
    </div>
  );
}

export default NewProjectCard;
