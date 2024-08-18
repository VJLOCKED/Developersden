import React from "react";
import styles from "../../styles/challenge-rush.module.css";
import Breadcrumb from "../component/Breadcrumb";

const ChallengeRush = () => {
  return (
    <div className={styles.container}>
      <Breadcrumb />
      <div className={styles.challengeRush}>
        <div className={styles.header}>
          <h2>Challenge Rush</h2>
          <p>
            You have three attempts to solve as many Javascript challenges as
            you can.
          </p>
        </div>
        <div className={styles.scoreCard}>
          <div className={styles.topScore}>
            <span>TOP SCORE</span>
            <span> :-</span>
          </div>
          <button className={styles.playButton}>Play</button>
        </div>
      </div>
      <div className={styles.leaderboard}>
        <h3>Leaderboard</h3>
        <ul>
          <li className={styles.firstPlace}>
            <span className={styles.rank}>#1</span>
            <span className={styles.name}>RAM</span>
            <span className={styles.score}>300</span>
          </li>
          <li className={styles.secondPlace}>
            <span className={styles.rank}>#2</span>
            <span className={styles.name}>KRISHNA</span>
            <span className={styles.score}>256</span>
          </li>
          <li className={styles.thirdPlace}>
            <span className={styles.rank}>#3</span>
            <span className={styles.name}>PAVAN</span>
            <span className={styles.score}>255</span>
          </li>
          <li>
            <span className={styles.rank}>#4</span>
            <span className={styles.name}>RAMYA</span>
            <span className={styles.score}>160</span>
          </li>
          <li>
            <span className={styles.rank}>#5</span>
            <span className={styles.name}>SWAPNA</span>
            <span className={styles.score}>140</span>
          </li>
          <li>
            <span className={styles.rank}>#6</span>
            <span className={styles.name}>VINAY</span>
            <span className={styles.score}>133</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeRush;
