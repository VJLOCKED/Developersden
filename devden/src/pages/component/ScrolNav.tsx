import React, { useState } from "react";
import Link from "next/link";
import { FcNext } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";
import { FcElectricity } from "react-icons/fc";
import styles from "../../styles/Sidebar.module.css";

const ScrollNav: React.FC = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const handleDropdownClick = (dropdownName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Developersden</div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a className={styles.navLink}>
                <FcHome /> Home
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/basics" legacyBehavior>
              <div
                className={styles.navLink}
                onClick={() => handleDropdownClick("basics")}
              >
                <FcNext /> Javascript Basics (0/111)
                <span className={styles.dropdownIcon}>
                  {openDropdowns.basics ? "▲" : "▼"}
                </span>
              </div>
            </Link>
            {openDropdowns.basics && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Variables (0/11)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Booleans (0/5)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Operators (0/19)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Strings (0/7)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Conditionals (0/9)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Functions I (0/11)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Arrays (0/8)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Objects (0/6)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Loops (0/6)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Scope (0/6)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}># Functions II (0/8)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Variables" legacyBehavior>
                    <a className={styles.navLink}>
                      # Asynchronous Javascript (0/12)
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/dom" legacyBehavior>
              <div
                className={styles.navLink}
                onClick={() => handleDropdownClick("dom")}
              >
                <FcNext /> Javascript DOM (0/19)
                <span className={styles.dropdownIcon}>
                  {openDropdowns.dom ? "▲" : "▼"}
                </span>
              </div>
            </Link>
            {openDropdowns.dom && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Selectors" legacyBehavior>
                    <a className={styles.navLink}>
                      # DOM Selector Methods (0/4)
                    </a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Selectors" legacyBehavior>
                    <a className={styles.navLink}>
                      # Events and User Interactions (0/5)
                    </a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Selectors" legacyBehavior>
                    <a className={styles.navLink}># DOM Manipulation (0/4)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Selectors" legacyBehavior>
                    <a className={styles.navLink}># DOM Fundamentals (0/5)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Selectors" legacyBehavior>
                    <a className={styles.navLink}>
                      # Recursive Functions (0/1)
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/practice" legacyBehavior>
              <div
                className={styles.navLink}
                onClick={() => handleDropdownClick("practice")}
              >
                <FcNext /> Javascript Practice (0/80)
                <span className={styles.dropdownIcon}>
                  {openDropdowns.practice ? "▲" : "▼"}
                </span>
              </div>
            </Link>
            {openDropdowns.practice && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Fundamentals" legacyBehavior>
                    <a className={styles.navLink}>
                      # Javascript Fundamentals (0/24)
                    </a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Fundamentals" legacyBehavior>
                    <a className={styles.navLink}># Javascript Arrays (0/22)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Fundamentals" legacyBehavior>
                    <a className={styles.navLink}>
                      # Javascript Objects (0/19)
                    </a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Fundamentals" legacyBehavior>
                    <a className={styles.navLink}># Javascript Dates (0/8)</a>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/concept/Fundamentals" legacyBehavior>
                    <a className={styles.navLink}># Javascript Sets (0/7)</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/challenge-rush" legacyBehavior>
              <a className={styles.navLink}>
                <FcElectricity /> Challenge Rush
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/login" legacyBehavior>
              <a className={styles.navLink}>
                {" "}
                <RiAdminFill /> Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ScrollNav;
