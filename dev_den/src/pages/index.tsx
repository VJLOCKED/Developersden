import React from "react";
import Home from "@/components/home/Home";
import ScrolNav from "@/components/home/ScrolNav";

const IndexPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <ScrolNav />
      <Home />
    </div>
  );
};

export default IndexPage;
