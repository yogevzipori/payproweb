import React from "react";

import '../styles/globals.css'
import RootLayout from '../app/layout.js'


export default function App({ Component, pageProps }) {
  return(
<RootLayout>
 <Component {...pageProps} />
   
   </RootLayout>
  )
}
