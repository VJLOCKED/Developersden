import React from "react";
import Home from "./component/Home";
import ScrolNav from "./component/ScrolNav";

const IndexPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <ScrolNav />
      <Home />
    </div>
  );
};

export default IndexPage;
