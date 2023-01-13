import React from "react";
import "../styles/globals.css";
// import Header from "./Header";
// import Footer from "./Footer";
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./Header'), {
  loading: () => 'Loading...',
})

const DynamicFooter= dynamic(() => import('./Footer'), {
  loading: () => 'Loading...',
})

export default function RootLayout({ children }) {
  return (
    // <html>
    //   {/* <head />
    //   <body> */}
    <>
        <DynamicHeader />
       <main>{children}</main> 

        <DynamicFooter />
  {/* //     </body> */}
  {/* //   </html> */}
  </>
  );
}
