import React from "react";
import Project from "./Project";

import ApartmentImage from "./../assets/apartmentImage.png";
import EndangeredSpecies from "./../assets/endangeredSpecies.png";
import MusicPlayer from "./../assets/musicPlayer.png";

const ProjectList: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgrey",
          padding: "2px",
        }}
      >
        <h2>Projects</h2>
      </div>
      <div className="projects">
        <Project
          image={EndangeredSpecies}
          title="Endangered Species React App"
          description="React App that pulls and displays information from an Express application I have developed and host on Vercel"
          imageLink="https://wildlife-9gkctm284-james-daykins-projects.vercel.app/"
          imageAlt="Endangered Species App Screenshot"
        />
        <Project
          image={ApartmentImage}
          title="3D Apartment Visualiser"
          description="3D apartment visualiser website I won an award for as part of an upskilling challenge at work"
          imageLink="https://james-daykin.github.io/awardproject/"
          imageAlt="3D Apartment Visualiser Screenshot"
        />
        <Project
          image={MusicPlayer}
          title="Music Player Widget"
          description="Music Player Widget that showcases some songs I have played on"
          imageLink="https://james-daykin.github.io/musicplayer/"
          imageAlt="Music Player Widget Screenshot"
        />{" "}
      </div>
    </>
  );
};

export default ProjectList;
