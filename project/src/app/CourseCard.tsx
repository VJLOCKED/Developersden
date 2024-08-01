import React from "react";
import "./CourseCard.css";

interface CourseCardProps {
  title: string;
  description: string;
  progress: string;
  icon: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  progress,
  icon,
}) => {
  return (
    <div className="courseCard">
      <h2>
        {icon} {title}
      </h2>
      <p>{description}</p>
      <div className="progressBar">
        <div className="progress" style={{ width: "0%" }}></div>
      </div>
      <p className="progressText">{progress}</p>
      <button className="continueButton">Continue</button>
    </div>
  );
};

export default CourseCard;
