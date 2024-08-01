import React from "react";
import CourseCard from "./CourseCard";
import PremiumAd from "./PremiumAd";
import './Basics.css';

const Basics: React.FC = () => {
  return (
    <div className="appContainer">
      <div className="courses">
        <CourseCard
          title="JavaScript Basics"
          description="Interactive lessons and exercises to learn JavaScript"
          progress="0/111"
          icon="📚"
        />
        <CourseCard
          title="JavaScript DOM Exercises"
          description="Create interactive and dynamic websites"
          progress="0/19"
          icon="🖱️"
        />
        <CourseCard
          title="JavaScript Practice"
          description="Challenges to practice your skills"
          progress="0/80"
          icon="💻"
        />
      </div>
      <div className="premiumAd">
        <PremiumAd />
      </div>
    </div>
  );
};

export default Basics;