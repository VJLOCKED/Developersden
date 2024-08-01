// src/app/layout.tsx (or the location of your layout file)
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrolNav from "./ScrolNav";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: "flex" }}>
          <ScrolNav />
          <Home />
        </div>
        {children} {/* Render other pages/components here */}
      </body>
    </html>
  );
}