import React from "react";
import Page from "../app/page";
import '../styles/globals.css'
import RootLayout from '../app/layout.js'


 function App({ Component, pageProps }) {
  return(
<RootLayout>
 <Component {...pageProps} />
   </RootLayout>
  )
}
