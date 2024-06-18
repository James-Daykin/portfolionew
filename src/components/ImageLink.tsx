import React from "react";

interface ImageLinkProps {
  imageSrc: string;
  link: string;
  altText: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ imageSrc, link, altText }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        style={{ height: "2.2rem", width: "2.2rem" }}
        className="icons"
        alt={altText}
      />
    </a>
  );
};

export default ImageLink;
