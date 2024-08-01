import React from "react";
import "./PemiumAd.css";

const PremiumAd: React.FC = () => {
  return (
    <div className="premiumAdContainer">
      <div className="premiumAd">
        <h1>
          Developersden <span className="premiumTag">PREMIUM</span>
        </h1>
        <ul>
          <li>Save your progress in the cloud</li>
          <li>Access to all challenges and lessons</li>
          <li>See solution if you get stuck</li>
          <li>No advertisements</li>
          <li>Cancel anytime</li>
        </ul>
        <button className="goPremiumButton">Go Premium</button>
      </div>
    </div>
  );
};

export default PremiumAd;
