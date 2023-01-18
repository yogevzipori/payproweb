"use client";



import React from "react";
import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./navigation";



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Nav />
        {children}

      </body>
      <Footer />

    </html>
    );
  }


  // <html>

  //  <head />
  //  <body>
  //    <Header /> 
  //    <Nav /> 
  //    <main>{children}</main>

  //    <Footer />
  //   </body>
  //  </html>