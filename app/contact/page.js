"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";


import {
  EnvelopeIcon,
  BuildingOfficeIcon,
 
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
  
    <div>
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
              <p>
                Dont miss out on the opportunity to take your business to the
                next level. Get expert help for your business today! Contact us
                today for a consultation and learn how we can assist you with
                lead generation and online monetization strategies. We are
                available to answer any questions you may have.
                <p>
                  <Link
                    href="mailto:Admin@LeadProMediaLLC.com"
                    style={{ textDecoration: "underline", color: "blue" }}
                  >
                    <span> Email </span>
                  </Link>
                  us today and lets work together to drive your business
                  forward.
                </p>
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex justify-center text-base text-indigo-600">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <Link
                    href="mailto:admin@LeadProMediaLLC.com"
                    className="ml-3"
                  >
                    admin@LeadProMediaLLC.com
                  </Link>
                </dd>

                <dt>
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="flex justify-center ml-3  text-base text-indigo-600">
                 <BuildingOfficeIcon
                    className="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                <div className="ml-3">
                1125 Via Canale Dr
                Henderson NV 89011 
                United States of America 
                </div>
            
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='bg-white w-full flex justify-center mt-8 mx-auto '>
            
                  <p>
                    <Image
                      src="/contact.jpeg"
                      width={600}
                      height={400}
                      quality={50}
                      alt="contactuspic"
                    />
                  </p>
                </div>
      </div>
      </div>
   
  );
}




