import React from "react";
import "../styles/globals.css";
import RootLayout from "../app/layout.js";
import Page from "../app/page";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <RootLayout />
      <Component {...pageProps} />
    </div>
  );
}
