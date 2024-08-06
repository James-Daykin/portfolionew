import React from "react";

const AboutMe: React.FunctionComponent = () => {
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
        <h2>About Me</h2>
      </div>

      <h3
        style={{
          padding: "20px",
          backgroundColor: "blanchedalmond",
          borderRadius: "20px",
          margin: "20px",
          textAlign: "center",
        }}
      >
        I am a full stack developer currently working for Dedalus, the largest
        healtchcare software provider in the UK. I have 2+ years industry
        experience working in full stack development using technologies such as
        NextJS, ReactJS, ExpressJS, MongoDB and SQL. I also have extensive
        experience working as part of Scrum/Agile teams utilising technologies
        such as GitHub and Azure DevOps. I pride myself in taking initiative
        where possible to improve the product I'm working on and have designed
        features from concept to implementation. I am constantly self-developing
        and have a keen interest in developing my own projects{" "}
      </h3>
    </>
  );
};

export default AboutMe;
