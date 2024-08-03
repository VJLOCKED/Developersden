import React from "react";
import Link from "next/link";
import styles from "../../styles/basic.module.css";

const JavascriptPractice: React.FC = () => {
  const items = [
    {
      label: "Javascript Fundamentals",
      progress: "0/24",
      description:
        "This series of Javascript challenges covers basics llike stings and operatos, and incudes exercises to test and reinforce the user's understanding of these concepts.",
    },
    {
      label: "Javascript Arrays",
      progress: "0/22",
      description:
        "Challenges about Javascript arrays testing your knowledge about creating, accessing and modifying arrays and their elements",
    },
    {
      label: "Javascript Objects",
      progress: "0/19",
      description:
        "Javascript challenges where you need to work with objects, including creating, accessing and modifyong object properties and methods.",
    },
    {
      label: "Javascript Dates",
      progress: "0/8",
      description:
        "This series of Javscript challenges covers woking with dates, including creating, fomatting, and manipulating date objects.",
    },
    {
      label: "Javascript Sets",
      progress: "0/7",
      description:
        "Challenges that test you knowledge about Javascript sets. Create sets,, add and remove items from a set, and perform common set operations.",
    },
  ];

  return (
    <Link href="/concept/Fundamentals" legacyBehavior>
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
    </Link>
  );
};

export default JavascriptPractice;
