import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Breadcrumb.module.css";

const Breadcrumb: React.FC = () => {
  const router = useRouter();
  const pathArray = router.pathname.split("/").filter((path) => path);

  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = "/" + pathArray.slice(0, index + 1).join("/");
          const isLast = index === pathArray.length - 1;
          return (
            <li key={href}>
              {isLast ? (
                <span>{path.replace(/-/g, " ")}</span>
              ) : (
                <Link href={href}>{path.replace(/-/g, " ")}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
