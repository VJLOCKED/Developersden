import React from "react";
import styles from "../../styles/Home.module.css";
import Basics from "./Basics";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Developersden</h1>
          <div className={styles.cardsContainer}>
            <div className={`${styles.card} ${styles.card1}`}>
              <h2>Free Javascript challenges</h2>
              <p>Learn Javascript online by solving coding exercises.</p>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <h2>Javascript for all levels</h2>
              <p>Solve Javascript tasks from beginner to advanced levels.</p>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <h2>Across various subjects</h2>
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

export default Home;
