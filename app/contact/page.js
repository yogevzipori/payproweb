import React from "react";
import Link from "next/link";

import Contform from "../contform";

export default function Contact() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="text-3xl font-semibold leading-8 text-indigo-600">
              Contact Us
            </h1>
            <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Have a question?
            </div>
            <div className="mx-auto mt-6 max-w-2xl text-md leading-7 text-gray-600">
              Get expert help for your business today!<br></br>Lead generation
              and online monetization strategies.<br></br>Contact us for a
              consultation today.
              <br></br>
              Fill out our contact form or contact us via our email at
              <Link href="mailto:Admin@LeadProMediaLLC.com">
                <div>Admin@LeadProMediaLLC.com</div>
              </Link>
              Or call us at anytime at
              <Link href="tel:702-443-6800">
                <div>702-443-6800</div>
              </Link>
              <Contform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
