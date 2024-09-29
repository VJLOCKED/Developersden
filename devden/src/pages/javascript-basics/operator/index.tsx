import React from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import styles from "../../../styles/basic.module.css";
import Breadcrumb from "@/pages/component/Breadcrumb";

const Operator: React.FC = () => {
  const items = [
    {
      label: "Introduction to JavaScript Comparison Operators",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/javascript-basics/operator/chapter-1",
    },
    {
      label: "Comparison operator- Equal",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/javascript-basics/operator/chapter-2",
    },
    {
      label: "Comparison operators- Not Equal",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
      link: "/javascript-basics/operator/chapter-3",
    },
    {
      label: "Introduction to javaScript Comparison Operators II",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-4",
    },
    {
      label: "Comparison operators- Greater than",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-5",
    },
    {
      label: "Comparison operators-Less than",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-6",
    },
    {
      label: "Comparison operators - Greater than or equal",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-7",
    },
    {
      label: "Comparison operators - Less than or equal",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-8",
    },
    {
      label: "Comparison operators - Strict Equality",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-9",
    },
    {
      label: "COmparison operators - Strict Inequality",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/operator/chapter-10",
    },
    {
      label: "Logical operators - logical AND",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Logical operators - logical OR",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Arithmetic operators - Addition",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Arithmetic operators - Subtraction",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Arithmetic operators - Multiplication",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Arithmetic operators - Division",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Arithmetic operators - Exponential",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Arithmetic operators - Remainder",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/chapters/test",
    },
    {
      label: "Test: JavaScript operators",
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

export default Operator;
