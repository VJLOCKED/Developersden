import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/CourseCard.module.css";

interface CourseCardProps {
  title: string;
  description: string;
  progress: string;
  icon: string;
  path: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  progress,
  icon,
  path,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(path);
  };
  return (
    <div className={styles.courseCard}>
      <h2>
        {icon} {title}
      </h2>
      <p>{description}</p>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: "0%" }}></div>
      </div>
      <p className={styles.progressText}>{progress}</p>
      <button className={styles.continueButton} onClick={handleButtonClick}>
        Continue
      </button>
    </div>
  );
};

export default CourseCard;
