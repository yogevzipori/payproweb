import React from "react";
import '../styles/globals.css'
import RootLayout from '../app/layout.js'
import Page from "./home";



export default function App({ Component, pageProps }) {
  return(
<RootLayout>

 <Component {...pageProps} />
   
   </RootLayout>
  )
}
