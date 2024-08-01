import React from "react";
import Link from "next/link";
import "./Sidebar.css";

const ScrolNav: React.FC = () => {
  return (
    <div className={"sidebar"}>
      <div className={"logo"}>Developersden</div>
      <nav>
        <ul className={"navList"}>
          <li className={"navItem"}>
            <Link href="/" className={"navLink"}>Home
            </Link>
          </li>
          <li className={"navItem"}>
            <Link href="/javascript/basics" className={"navLink"}>Javascript Basics (0/111)
            </Link>
          </li>
          <li className={"navItem"}>
            <Link href="/javascript/dom" className={"navLink"}>Javascript DOM (0/19)
            </Link>
          </li>
          <li className={"navItem"}>
            <Link href="/javascript/practice" className={"navLink"}>Javascript Practice (0/80)
            </Link>
          </li>
          <li className={"navItem"}>
            <Link href="/ChallengeRush" className={"navLink"}>Challenge Rush
            </Link>
          </li>
          <li className={"navItem"}>
            <Link href="/javascript/login"  className={"navLink"}>Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ScrolNav;
