import React from "react";
import "./Home.css";
import Basics from "./Basics";

const Home: React.FC = () => {
  return (
    <div className={"homeContainer"}>
      <div className={"content"}>
        <div className={"intro"}>
          <h1 className={"title"}>Developersden</h1>
          <div className="cardsContainer">
            <div className={`${"card"} ${"card1"}`}>
              <h2>Free Javascript challenges</h2>
              <p>Learn Javascript online by solving coding exercises.</p>
            </div>
            <div className={`${"card"} ${"card2"}`}>
              <h2>Javascript for all levels</h2>
              <p>Solve Javascript tasks from beginner to advanced levels.</p>
            </div>
            <div className={`${"card"} ${"card3"}`}>
              <h2>Across various subjects</h2>
              <p>Select your topic of interest and start practicing.</p>
            </div>
          </div>
          <p className={"learningPath"}>Start your learning path here</p>
          <button className={"startButton"}>Start</button>
        </div>
        <Basics />
      </div>
    </div>
  );
};

export default Home;