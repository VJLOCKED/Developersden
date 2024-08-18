import React from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import styles from "../../../styles/basic.module.css";
import Breadcrumb from "@/pages/component/Breadcrumb";

const Functions_II: React.FC = () => {
  const items = [
    {
      label: "Introduction to the Rest Parameter Syntax",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/Chapters/chapter1",
    },
    {
      label: "Declare a rest parameter",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/chapters/chapter2",
    },
    {
      label: "Change function parameters",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
      link: "/chapters/chapter3",
    },
    {
      label: "Introduction to JavaScript Arrow Functions",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter4",
    },
    {
      label: "Transform to arrow function",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter5",
    },
    {
      label: "shorten arrow function",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter6",
    },
    {
      label: "Create arrow function I",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter7",
    },
    {
      label: "Create arrow function II",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter8",
    },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumb />
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}>
              <span>{item.progress}</span>
            </div>
            {index < items.length - 1 && <div className={styles.line}></div>}
          </div>
          <div className={styles.content}>
            <h2>
              <Link href={item.link} key={index} passHref legacyBehavior>
                <a className={styles.navLink}>{item.label}</a>
              </Link>
            </h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Functions_II;
