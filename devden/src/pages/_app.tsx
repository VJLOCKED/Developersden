import React from "react";
import type { AppProps } from "next/app";
import ScrolNav from "./component/ScrolNav";
import "../styles/globals.css"; // Ensure you have global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <ScrolNav />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
