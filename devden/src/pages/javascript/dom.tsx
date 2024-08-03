import React from "react";
import Link from "next/link";
import styles from "../../styles/basic.module.css";

const JavascriptDOM: React.FC = () => {
  const items = [
    {
      label: "DOM Selector Methods",
      progress: "0/4",
      description:
        "Learn the concepts of the DOM. Practice how to access elements in the DOM using selector methods in Javascript.",
    },
    {
      label: "Events And User Interactions",
      progress: "0/5",
      description:
        "Respond to user events in Javascript, including clicks and mouse movements.Learn how to bind event listeners to elements in the DOM.",
    },
    {
      label: "DOM Manipulation",
      progress: "0/4",
      description:
        "Manipulate and create elements in the DOM with JAvascript. Add and remove elements, change their styles and attributes, and wok with text and HTML content.",
    },
    {
      label: "DOM Fundamentals",
      progress: "0/5",
      description:
        "Practice what you've learnt about the DOM with these mixed exercises.",
    },
    {
      label: "Recursive Functions",
      progress: "0/9",
      description:
        "This series f Javascript exercises covers the use of recursive functions in the context of working with the DOM.",
    },
  ];

  return (
    <Link href="/concept/Selectors" legacyBehavior>
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

export default JavascriptDOM;
