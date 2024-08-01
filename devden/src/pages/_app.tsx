import React from "react";
import type { AppProps } from "next/app";
import ScrolNav from "./component/ScrolNav";
import "../styles/globals.css"; // Ensure you have global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div style={{ display: "flex" }}>
      <ScrolNav />
      <main style={{ flex: 1, padding: "20px" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
