import React from "react";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

const ScrolNav: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Developersden</div>
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/javascript/basics" legacyBehavior>
              <a>Javascript Basics (0/111)</a>
            </Link>
          </li>
          <li>
            <Link href="/javascript/dom" legacyBehavior>
              <a>Javascript DOM (0/19)</a>
            </Link>
          </li>
          <li>
            <Link href="/javascript/practice" legacyBehavior>
              <a>Javascript Practice (0/80)</a>
            </Link>
          </li>
          <li>
            <Link href="/javascript/challenge-rush" legacyBehavior>
              <a>Challenge Rush</a>
            </Link>
          </li>
          <li>
            <Link href="/javascript/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ScrolNav;

// import React from "react";
// import Link from "next/link";
// import styles from "../../styles/Sidebar.module.css";

// const ScrolNav: React.FC = () => {
//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logo}>Developersden</div>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/" legacyBehavior>
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/javascript/basics" legacyBehavior>
//               <a>Javascript Basics (0/111)</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/javascript/dom" legacyBehavior>
//               <a>Javascript DOM (0/19)</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/javascript/practice" legacyBehavior>
//               <a>Javascript Practice (0/80)</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/challenge-rush" legacyBehavior>
//               <a>Challenge Rush</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/login" legacyBehavior>
//               <a>Login</a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default ScrolNav;
