import React from "react";

import ProfilePicture from "./../assets/profilePicture.png";
import IconText from "./IconText";

const Technologies: React.FC = () => {
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
        <h2>Technologies</h2>
      </div>
      <div className="bio">
        <div className="icons">
          <IconText
            imageSrc={
              "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
            }
            altText="React Logo"
            text="React"
          />
          <IconText
            imageSrc={
              "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
            }
            altText="HTML5 Logo"
            text="HTML"
          />
          <IconText
            imageSrc={"https://juanfalibene.com/resume/img/css-3.svg"}
            altText="CSS3 Logo"
            text="CSS"
          />
          <IconText
            imageSrc={
              "https://th.bing.com/th/id/OIP.BMXxh0nGocZLZfbY8m17UwAAAA?rs=1&pid=ImgDetMain"
            }
            altText="Javascipt Logo"
            text="Javascript"
          />
          <IconText
            imageSrc={"https://himanshu60.github.io/images/expressjs_logo.png"}
            altText="Express Logo"
            text="Express"
          />
          <IconText
            imageSrc={
              "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_logo_icon_146422.png"
            }
            altText="MongoDB Logo"
            text="MongoDB"
          />
          <IconText
            imageSrc={"https://pngimg.com/uploads/mysql/mysql_PNG18.png"}
            altText="SQL Logo"
            text="SQL"
          />
        </div>
      </div>
    </>
  );
};

export default Technologies;
