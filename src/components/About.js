import React from "react";

function About() {
  return (
    <div
      id="about"
      className="full-height mobile-height"
      style={{ justifyContent: "center" }}
    >
      <div className="about">
        <div className="flex-1">
          <div className="about-name">
            Hi, I'm Rohit. <span>Software Developer</span> based in Gujarat,
            India
          </div>
          <p>
            Hi, I am software developer and I love what i do. I’m curious, and I
            enjoy work that challenges me to learn something new and stretch in
            a different direction. I do my best to stay on top of my game so
            that I can meet challenges with tools well suited to the job at
            hand.
          </p>
          <p>
            I care deeply about creating world-class, useful, and beautiful
            products that help people and make a difference.
          </p>
        </div>
        <div className="flex-1 profile-ctn">
          <div className="frame-ctn">
            <div className="frame"></div>
            <div className="frame frame-2"></div>
            <img
              src={require("../assets/profile-color.jpeg")}
              className="frame img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
