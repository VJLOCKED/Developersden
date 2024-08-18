import React from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import styles from "../../../styles/basic.module.css";
import Breadcrumb from "@/pages/component/Breadcrumb";

const Scope: React.FC = () => {
  const items = [
    {
      label: "Introduction to JavaScript Function Scopes",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/Chapters/chapter1",
    },
    {
      label: "Correctly access function result",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/chapters/chapter2",
    },
    {
      label: "Correctly update global variable",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
      link: "/chapters/chapter3",
    },
    {
      label: "Make use of function scope to return correct value.",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter4",
    },
    {
      label: "Introduction to JavaScript Block Scope",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter5",
    },
    {
      label: "Sum global and local variable",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter6",
    },
    {
      label: "Correctly update global variable from within block",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter7",
    },
    {
      label: "Introduction to JavaScipt Nested Scopes",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter8",
    },
    {
      label: "Test: JavaScript scopes",
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

export default Scope;
