import React from "react";
import Link from "next/link";
import { BiChevronRightSquare } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import styles from "../../../styles/basic.module.css";
import Breadcrumb from "@/pages/component/Breadcrumb";

const Variables: React.FC = () => {
  const items = [
    {
      label: "The console and introduction to variables",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/javascript-basics/variables/chapter-1",
    },
    {
      label: "Reassign a value to a variable",
      progress: <BiChevronRightSquare />,
      description: "Lesson",
      link: "/javascript-basics/variables/chapter-2",
    },
    {
      label: "Assign a value to a variable",
      progress: <BiChevronRightSquare />,
      description: "Challenge",
      link: "/javascript-basics/variables/chapter-3",
    },
    {
      label: "Assign the value of another vaiable",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-4",
    },
    {
      label: "Create the missing variable",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-5",
    },
    {
      label: "Create variables with const",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-6",
    },
    {
      label: "Accessing a vriable(1)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-7",
    },
    {
      label: "Accessing a varable(2)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-8",
    },
    {
      label: "Declare a variable and assign a number",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-9",
    },
    {
      label: "Reassign a value to a variable(2)",
      progress: <BiChevronRightSquare />,
      description: "Challenge.",
      link: "/javascript-basics/variables/chapter-10",
    },
    {
      label: "Test: JavaScript variables",
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

export default Variables;
