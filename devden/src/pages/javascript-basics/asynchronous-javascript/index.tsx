import React from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import styles from "../../../styles/basic.module.css";
import Breadcrumb from "@/pages/component/Breadcrumb";

const AsynchronousJavascript: React.FC = () => {
  const items = [
    {
      label: "Introduction to Asynchronous JavaScript",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/Chapters/chapter1",
    },
    {
      label: "Execute the code synchronously",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/chapters/chapter2",
    },
    {
      label: "Execute the code Asynchronously",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
      link: "/chapters/chapter3",
    },
    {
      label: "Introduction to Callback Functions",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter4",
    },
    {
      label: "Corectly use callback function",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter5",
    },
    {
      label: "Use a callback function to log output",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter6",
    },
    {
      label: "Introduction to Promises",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter7",
    },
    {
      label: "Correctly resolve promise",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter8",
    },
    {
      label: "Get asynchronous result with Promise",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter9",
    },
    {
      label: "Wait for Promise to resolve",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter10",
    },
    {
      label: "Introduction to async / await in Javascript",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/chapter10",
    },
    {
      label: "Test: Asynchronous JavaScript",
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

export default AsynchronousJavascript;
