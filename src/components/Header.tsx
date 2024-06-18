import React from "react";
import ImageLink from "./ImageLink";
import IconText from "./IconText";
import GitHub from "./../assets/github.png";
import LinkedIn from "./../assets/linkedin.jpg";
import Email from "./../assets/email.png";
import Phone from "./../assets/phone.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <ImageLink
        imageSrc={GitHub}
        link="https://github.com/James-Daykin"
        altText="GitHub"
      />
      <ImageLink
        imageSrc={LinkedIn}
        link="https://www.linkedin.com/in/james-daykin-861687272/"
        altText="LinkedIn"
      />
      <IconText
        imageSrc={Email}
        altText="GitHub Icon"
        text="jamesdaykin93@gmail.com"
      />
      <IconText
        imageSrc={Phone}
        altText="LinkedIn Icon"
        text="(+44) 7938 492457"
      />
    </div>
  );
};

export default Header;
