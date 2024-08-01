import React from "react";
import Basics from "./Basics";
import styles from "../../styles/Home.module.css";

const Welcome: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Developersden</h1>
          <div className={styles.cardsContainer}>
            <div className={`${styles.card} ${styles.card1}`}>
              <h2>Free JavaScript Challenges</h2>
              <p>Learn JavaScript online by solving coding exercises.</p>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <h2>JavaScript for All Levels</h2>
              <p>Solve JavaScript tasks from beginner to advanced levels.</p>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <h2>Across Various Subjects</h2>
              <p>Select your topic of interest and start practicing.</p>
            </div>
          </div>
          <p className={styles.learningPath}>Start your learning path here</p>
          <button className={styles.startButton}>Start</button>
        </div>
        <Basics />
      </div>
    </div>
  );
};

export default Welcome;