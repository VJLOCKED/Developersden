import React from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import styles from "../../../styles/basic.module.css";
import Breadcrumb from "@/pages/component/Breadcrumb";

const Functions: React.FC = () => {
  const items = [
    {
      label: "Introduction to JavaScript functions",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/Chapters/chapter1",
    },
    {
      label: "Function declaration",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/chapters/chapter2",
    },
    {
      label: "Function expression",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
      link: "/chapters/chapter3",
    },
    {
      label: "Correctly return value from function (1)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter4",
    },
    {
      label: "Correctly return value from function (2)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter5",
    },
    {
      label: "Introduction to function parameters",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter6",
    },
    {
      label: "Functions - parameters and arguments (1)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter7",
    },
    {
      label: "Functions - parameters and arguments (2)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter8",
    },
    {
      label: "Functions - parameters and arguments (3)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter9",
    },
    {
      label: "Return eary from function",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter10",
    },
    {
      label: "Test: JavaScript functions",
      progress: <GoTrophy />,
      description: "Challenge.",
      link: "/chapters/test",
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

export default Functions;
