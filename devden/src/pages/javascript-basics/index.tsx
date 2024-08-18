import React from "react";
import Link from "next/link";
import styles from "../../styles/basic.module.css";
import Breadcrumb from "../component/Breadcrumb";

const JavascriptBasics: React.FC = () => {
  const items = [
    {
      label: "Variables",
      progress: "0/11",
      description: "The basics of declaring and assigning values to variables",
      link: "/javascript-basics/variables",
    },
    {
      label: "Booleans",
      progress: "0/5",
      description:
        "Learn how to code with binary data using JavaScript Booleans",
      link: "/javascript-basics/booleans",
    },
    {
      label: "Operators",
      progress: "0/19",
      description:
        "Learn how to calculate with JavaScript values or how to compare them using operators",
      link: "/javascript-basics/operator",
    },
    {
      label: "Strings",
      progress: "0/7",
      description:
        "These exercises will teach you how to declare and manipulate string variables and how to combine multiple strings into one.",
      link: "/javascript-basics/strings",
    },
    {
      label: "Conditionals",
      progress: "0/9",
      description:
        "These Javascript exercises will teach you how to use conditionals, such as if and else. They help you control the floe of your programs and make decisions based on the data they receive.",
      link: "/javascript-basics/conditionals",
    },
    {
      label: "Functions I",
      progress: "0/11",
      description:
        "This series of javascript exercises provides an introduction to the fundamental concepts and syntax of functions. You will learn how to define, call, and pass rguments to functions.",
      link: "/javascript-basics/functions-I",
    },
    {
      label: "Arrays",
      progress: "0/8",
      description:
        "The basics of working with arrays in javascript, including creating, accessing and modifying arrays and their elements.",
      link: "/javascript-basics/arrays",
    },
    {
      label: "Objects",
      progress: "0/6",
      description:
        "The basics of working with objects in javascript. you will learn how to access object properties, how to create and modify objects.",
      link: "/javascript-basics/objects",
    },
    {
      label: "Loops",
      progress: "0/6",
      description:
        "This series of jvascript exercises cover the basics of using loops in javascript including fo and while loops, as well s how to contol the flow of a loop with break and continue statements.",
      link: "/javascript-basics/loops",
    },
    {
      label: "Scope",
      progress: "0/9",
      description:
        "Learn about scopes in javscript. Topics include function scope, block scope, global scope, and scope heirachy.",
      link: "/javascript-basics/scope",
    },
    {
      label: "Functions II",
      progress: "0/8",
      description:
        "You will explore more advanced concepts around javascript functions such as arrow functions and the rest parameter.",
      link: "/javascript-basics/functions_II",
    },
    {
      label: "Asynchronous Javascript",
      progress: "0/12",
      description:
        "Learn how to use asynchronous operations to move time-consuming tasks to the background and continue with the main process untill they have finished.",
      link: "/javascript-basics/asynchronous-javascript",
    },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumb />
      {items.map((item, index) => (
        <Link href={item.link} key={index} passHref legacyBehavior>
          <a className={styles.navLink}>
            <div className={styles.item}>
              <div className={styles.circleContainer}>
                <div className={styles.circle}>
                  <span>{item.progress}</span>
                </div>
                {index < items.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>
              <div className={styles.content}>
                <h2>{item.label}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default JavascriptBasics;
