import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer"

export default function RootLayout({ children }) {
  return (
    // <html>
    //   {/* <head />
    //   <body> */}
    <>
        <Header />
       <main>{children}</main> 

        <Footer />
  {/* //     </body> */}
  {/* //   </html> */}
  </>
  );
}
