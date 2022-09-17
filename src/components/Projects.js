import React from "react";
import NewProjectCard from "./NewProjectCard";

function Projects() {
  return (
    <div id="work" className="row">
      <NewProjectCard
        name={"SES (Stay Eat Study)"}
        description="A mobile app for students to find PG and messes around their college/school and it also helps to buy second hand books from their seniors."
        img={require("../assets/SESmockup.png")}
        techUsed={["React Native", "Firebase", "Google Maps"]}
        codeLink={"https://github.com/Varsada-Rohit/Project.git"}
      />
      <NewProjectCard
        name={"Chayos (Cafe Website)"}
        description="A cafe web application which helps owner to manage orders and all the branches of the cafe. It also has table booking feature which can be managed by owner or branch manager."
        img={require("../assets/fandbnew.png")}
        techUsed={["React Js", "Node Js", "MongoDb", "Stripe"]}
        codeLink="https://github.com/Varsada-Rohit/FandB.git"
        demoLink={"https://fandbfrontend.vercel.app/"}
      />
      <NewProjectCard
        name={"E-commerce Mobile App"}
        description={
          "A complete e-commerce app with all the functionalities and it also has light and dark mode."
        }
        img={require("../assets/ecom.png")}
        techUsed={["React Native", "Typescript", "Node Js", "MongoDb"]}
        codeLink="https://github.com/Varsada-Rohit/Ecommerce-APP.git"
      />
      <NewProjectCard
        name={"Ceramic Web App"}
        description={
          "A ceramic web app to show case all the products of the company and it is in multiple language."
        }
        img={require("../assets/ceramic.png")}
        objectFit={"contain"}
        imgClass="mb-ceramic-img"
        techUsed={["React Js", "Node Js", "MongoDb"]}
        codeLink={"https://github.com/Varsada-Rohit/iwinceramic.git"}
        demoLink={"https://iwinceramic.vercel.app/"}
      />
      <NewProjectCard
        name={"KRYPT"}
        description={"A simple transaction record web app using blockchain"}
        img={require("../assets/krypt.png")}
        // objectFit={"contain"}
        techUsed={["React Js", "Solidity", "Hardhat", "Tailwind"]}
        codeLink={"https://github.com/Varsada-Rohit/KRYPT.git"}
        demoLink={"https://krypt-jk04xjvls-varsada-rohit.vercel.app/"}
      />
    </div>
  );
}

export default Projects;
