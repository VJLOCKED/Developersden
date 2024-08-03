import React from "react";
import { BiChevronRightSquare } from "react-icons/bi";
import styles from "../../styles/basic.module.css";

const Fundamentals: React.FC = () => {
  const items = [
    {
      label: "Chapter-1",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
    },
    {
      label: "Chapter-2",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
    },
    {
      label: "Chapter-3",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
    },
    {
      label: "Chapter-4",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
    },
    {
      label: "Chapter-5",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}>
              <span>{item.progress}</span>
            </div>
            {index < items.length - 1 && <div className={styles.line}></div>}
          </div>
          <div className={styles.content}>
            <h2>{item.label}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fundamentals;
