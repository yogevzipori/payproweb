import React from "react";
import Page from "../app/page";
import '../styles/globals.css'
import RootLayout from '../app/layout.js'


 const App = ({ Component, pageProps }) => {
  return(
<RootLayout>
 <Component {...pageProps} />
   </RootLayout>
  )
}
export default App