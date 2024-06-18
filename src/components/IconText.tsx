import React from "react";

interface IconTextProps {
  imageSrc: string;
  altText: string;
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ imageSrc, altText, text }) => {
  return (
    <div className="icon-text">
      <img src={imageSrc} alt={altText} />
      <span>{text}</span>
    </div>
  );
};

export default IconText;
