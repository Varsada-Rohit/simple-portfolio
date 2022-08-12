import React from "react";
import Arrow from "../assets/Arrow";

function Home() {
  return (
    <div className="home-container">
      <div className="name">Hi, I'm Rohit Varsada.</div>
      <div className="name">
        <span>Software Developer</span> based in Gujarat, India
      </div>
      <div className="job">
        SDE-1 at <span>GYTWorkz</span>
      </div>
      <div>
        <button
          className="my-btn"
          onClick={() => {
            window.location.href = "#resume";
          }}
        >
          My Resume{" "}
          <Arrow
            color={"#fff"}
            width={20}
            height={12}
            style={{ marginBottom: 5 }}
          />
        </button>
      </div>
    </div>
  );
}

export default Home;
