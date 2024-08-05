import React from "react";
import styles from '../../styles/challenge-rush.module.css'

const ChallengeRush: React.FC = () => {
  return (
   <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 >Challenge Rush</h2>
         <h4>You have three attempts to solve as many Javascript challenges as you can.</h4>
      </div>
      </div>
      </div>
  );
};

export default ChallengeRush;
