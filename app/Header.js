import React from "react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-indigo-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-white py-4 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">LeadPro Media</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
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
              className="text-base font-medium text-gray-600 hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
