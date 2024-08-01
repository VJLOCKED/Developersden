import React from "react";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

const ScrolNav: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Developersden</div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/basics" legacyBehavior>
              <a className={styles.navLink}>Javascript Basics (0/111)</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/dom" legacyBehavior>
              <a className={styles.navLink}>Javascript DOM (0/19)</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/practice" legacyBehavior>
              <a className={styles.navLink}>Javascript Practice (0/80)</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/challenge-rush" legacyBehavior>
              <a className={styles.navLink}>Challenge Rush</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/javascript/login" legacyBehavior>
              <a className={styles.navLink}>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ScrolNav;
