import React from "react";
import Page from "../app/page";
import '../styles/globals.css'
import RootLayout from '../app/layout.js'


export default function App({ Component, pageProps }) {
  return(
<RootLayout>
  <Page/>
 <Component {...pageProps} />
   
   </RootLayout>
  )
}
