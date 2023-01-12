// import React from 'react';
// import Link from 'next/link';
// import '../styles/globals.css';
// import Header from '../app/Header';


// export default function About() {
//   return (
//     <Header/>
//     <div>
//       <h1>About Us</h1>
//       <p>This is the About page</p>
//     </div>
//   );
// // }

// import React from "react";
// import Link from "next/link";
// import Logo from "/public/logo.png";
// import Image from 'next/image';







// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Solutions", href: "#" },
//   { name: "Contact", href: "/contact-us" },
//   { name: "About", href: "/about"},
// ];




  
      
  


// export default function Header() {
//   return (
//     <header className="bg-indigo-200">
//       <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
//         <div className="flex w-full items-center justify-between border-b border-white py-4 lg:border-none">
//           <div className="flex items-center">
//             <a href="/">
//               {/* <span className="sr-only">LeadPro Media</span> */}
//               <Image
//                 className="h-20 w-20"
//                 src={Logo}
//                 alt=""
              
               
                
//               />
//             </a>
//             <div className="ml-10 hidden space-x-8 lg:block">
//               {navigation.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-2xl font-medium text-white hover:text-indigo-50"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
//           {navigation.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-1xl font-medium text-white hover:text-indigo-50"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// }

import React from 'react'


export default function About() {
  return (
  
      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="text-3xl font-semibold leading-8 text-indigo-600">
              This is our story
            </h1>
            <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leads and marketing is our specialty
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-md leading-7 text-gray-600">
              At LeadPro Media, we specialize in helping businesses generate more leads and increase their revenue.
            </p>

          </div>
        </div>
      </div>
     
      
     
  )}