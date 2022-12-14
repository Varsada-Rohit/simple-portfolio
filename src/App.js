import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div className="container">
        <div className="full-height">
          <Navbar />
          <Home />
        </div>
        <div className="separator" />
        <Projects />
        {/* <div id="work">
          <ProjectCard
            img={require("./assets/SESmockup.png")}
            name={"SES"}
            tech={"React Native"}
          />
        </div> */}
        {/* <div className="separator" />
        <ProjectCard
          img={require("./assets/fandbnew.png")}
          name={"Chayos"}
          tech={"React Js"}
        />
        <div className="separator" />
        <ProjectCard name={"E-commerce"} tech={"React Native"} /> */}
        <About />
        <Resume />
      </div>
      <Footer />
    </>
  );
}

export default App;
