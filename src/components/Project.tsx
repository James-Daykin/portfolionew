import React from "react";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  imageLink: string;
  imageAlt: string;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  image,
  title,
  description,
  imageLink,
  imageAlt,
}) => {
  return (
    <div className="content">
      <a href={imageLink} target="_blank">
        <div className="project">
          <h2>{title}</h2>
          <div>
            <img className="img2" src={image} alt={imageAlt} />
          </div>
          <h3>{description}</h3>
        </div>
      </a>
    </div>
  );
};

export default Project;
