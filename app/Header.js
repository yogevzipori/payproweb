
import React from "react";
// import logo from "..public";
import Image from 'next/image';
import logo from "/public/logo.png"






const navigation = [
  { name: "Home", href: "/" },
  // { name: "Solutions", href: "#" },
  { name: "About", href: "/about"},
  { name: "Contact", href: "/contact-us" },
];




  
      
  


export default function Header() {
  return (
  <>
    <header className="bg-indigo-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-white py-4 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              {/* <span className="sr-only">LeadPro Media</span> */}
              <div>
              <Image
                className="h-20 w-20"
                src={logo}
                width={80}
                height={80}
                alt="Logo"
               
              
               
                
              />
              </div>
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-1xl font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
    </>
  );
}