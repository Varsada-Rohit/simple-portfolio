import React from "react";
import Arrow from "../assets/Arrow";
import RightArrow from "../assets/RightArrow";
import ResumeDetail from "./ResumeDetail";
import resume from "../assets/varsada rohit.pdf";

function Resume() {
  return (
    <div id="resume">
      <div className="resume-header">
        Resume
        <a href={resume} target={"_blank"}>
          <button className="btn my-btn" style={{ marginTop: 0 }}>
            PDF
            {"   "}
            <Arrow
              color={"#fff"}
              width={20}
              height={12}
              style={{ marginBottom: 5 }}
            />
          </button>
        </a>
      </div>
      <ResumeDetail
        heading={"Experience"}
        title={"GYTWorkz"}
        subTitle={"SDE - 1"}
        duration={"Sept 2021 - Present"}
        description={"Working on mobile app in React Native"}
      />
      <ResumeDetail
        heading={"Education"}
        title={"Gujarat Technological University"}
        subTitle={"IT"}
        duration={"Aug 2017 - May 2022"}
        description={"Shantilal Shah Engineering College - Bhavnagar"}
      />
      <ResumeDetail
        heading={"Skills"}
        description={
          "HTML, CSS, Javascript, ReactJs, React Native, Firebase, Nodejs & Mongodb"
        }
      />
      <ResumeDetail
        heading={"Learning Skills"}
        description={"Solidity & Postgresql"}
      />
      <ResumeDetail
        heading={"Contact"}
        subTitle={"+917623840235"}
        description={"varsadarohit@gmail.com"}
        subTitleLink={"tel:+917623840235"}
        descriptionLink={"mailto:varsadarohit@gmail.com"}
      />
      <div className="d-flex">
        <div
          className="d-flex my-5 go-top mx-auto  "
          style={{ fontSize: "1.25rem" }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div
            style={{ transform: "rotate(-90deg)" }}
            className="position-relative"
          >
            <div className="go-to-top">
              <RightArrow color={"#007fef"} />
            </div>
            <div className="go-to-top-black">
              <RightArrow />
            </div>
          </div>{" "}
          Go to top
        </div>
      </div>
    </div>
  );
}

export default Resume;
