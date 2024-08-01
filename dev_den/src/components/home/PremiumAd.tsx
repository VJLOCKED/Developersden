import React from "react";
import styles from "../../styles/PemiumAd.module.css";

const PremiumAd: React.FC = () => {
  return (
    <div className={styles.premiumAdContainer}>
      <div className={styles.premiumAd}>
        <h1>
          Developersden <span className={styles.premiumTag}>PREMIUM</span>
        </h1>
        <ul>
          <li>Save your progress in the cloud</li>
          <li>Access to all challenges and lessons</li>
          <li>See solution if you get stuck</li>
          <li>No advertisements</li>
          <li>Cancel anytime</li>
        </ul>
        <button className={styles.goPremiumButton}>Go Premium</button>
      </div>
    </div>
  );
};

export default PremiumAd;
