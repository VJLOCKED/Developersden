import React from "react";
import Link from "next/link";
import styles from "../../styles/basic.module.css";

const JavascriptBasics: React.FC = () => {
  const items = [
    {
      label: "Variables",
      progress: "0/11",
      description: "The basics of declaring and assigning values to variables",
    },
    {
      label: "Booleans",
      progress: "0/5",
      description:
        "Learn how to code with binary data using JavaScript Booleans",
    },
    {
      label: "Operators",
      progress: "0/19",
      description:
        "Learn how to calculate with JavaScript values or how to compare them using operators",
    },
    {
      label: "Strings",
      progress: "0/7",
      description:
        "These exercises will teach you how to declare and manipulate string variables and how to combine multiple strings into one.",
    },
    {
      label: "Conditionals",
      progress: "0/9",
      description:
        "These Javascript exercises will teach you how to use conditionals, such as if and else. They help you control the floe of your programs and make decisions based on the data they receive.",
    },
    {
      label: "Functions I",
      progress: "0/11",
      description:
        "This series of javascript exercises provides an introduction to the fundamental concepts and syntax of functions. You will learn how to define, call, and pass rguments to functions.",
    },
    {
      label: "Arrays",
      progress: "0/8",
      description:
        "The basics of working with arrays in javascript, including creating, accessing and modifying arrays and their elements.",
    },
    {
      label: "Objects",
      progress: "0/6",
      description:
        "The basics of working with objects in javascript. you will learn how to access object properties, how to create and modify objects.",
    },
    {
      label: "Loops",
      progress: "0/6",
      description:
        "This series of jvascript exercises cover the basics of using loops in javascript including fo and while loops, as well s how to contol the flow of a loop with break and continue statements.",
    },
    {
      label: "Scope",
      progress: "0/9",
      description:
        "Learn about scopes in javscript. Topics include function scope, block scope, global scope, and scope heirachy.",
    },
    {
      label: "Functions II",
      progress: "0/8",
      description:
        "You will explore more advanced concepts around javascript functions such as arrow functions and the rest parameter.",
    },
    {
      label: "Asynchronous Javascript",
      progress: "0/12",
      description:
        "Learn how to use asynchronous operations to move time-consuming tasks to the background and continue with the main process untill they have finished.",
    },
  ];

  return (
    <Link href="/concept/Variables" legacyBehavior>
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

export default JavascriptBasics;
