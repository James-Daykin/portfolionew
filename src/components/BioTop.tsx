import React from "react";

import ProfilePicture from "./../assets/profilePicture.png";

const BioTop: React.FC = () => {
  return (
    <>
      <div className="bio">
        <div className="lines">
          <h1>JAMES DAYKIN</h1>
          <h2>
            Fullstack software developer specialising in Node development. s{" "}
            <br />
            <br />
          </h2>
        </div>
        <div>
          <img className="profilepic" src={ProfilePicture} />
        </div>
      </div>
      <div className="description"></div>
    </>
  );
};

export default BioTop;
