import React from "react";
import Link from "next/link";

import Contform from "../contform";

export default function Contact() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="text-xl font-semibold leading-8 text-indigo-600">
            To request to review, update, or delete your personal information, please submit our request form.</h1>
       
              <Contform />
            </div>
          </div>
        </div>
    </>
  );
}
