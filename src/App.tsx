import React from "react";
import Header from "./components/Header";
import "./styles.css";
import BioTop from "./components/BioTop";
import ProjectList from "./components/ProjectList";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BioTop />
      <AboutMe />
      <Technologies />
      <ProjectList />
    </div>
  );
};

export default App;
