import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="text-3xl font-semibold leading-8 text-indigo-600">
              This is our story
            </h1>
            <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leads and marketing is our specialty
            </div>
            <div className="mx-auto mt-6 max-w-2xl text-md leading-7 text-gray-600">
              At LeadPro Media LLC, we understand the importance of generating
              leads and driving conversions for your business. This is why we
              are dedicated to providing the most effective digital marketing
              solutions for businesses of all sizes and industries.
              <p>
                Our team of experts are passionate about what they do, and
                utilize the latest technologies and data analysis techniques to
                identify and target the most valuable leads for our clients. We
                take the time to understand your unique business objectives and
                tailor our approach to fit your specific needs.
              </p>
              Our services include high-quality direct traffic acquisition,
              advanced network traffic monetization strategies, lead nurturing
              tactics and detailed analytics and reporting.We are not just a
              vendor, but a partner in your success. We work closely with you to
              help you achieve your business goals, whether its expanding your
              customer base, increasing sales, or building your brand. LeadPro
              Media LLC, we are committed to delivering results that exceed your
              expectations.
              <p>
                We invite you to contact us today for a consultation, and let us
                show you how we can take your business to the next level with
                our cutting-edge lead generation and online monetization
                strategies.
              </p>


              </div>
            </div>
          </div>
              <div className='bg-white w-full flex justify-center mt-8 mx-auto '>
                {/* <div className= > */}
                  <p>
                    <Image
                      src="/leads.jpeg"
                      width={500}
                      height={300}
                      quality={50}
                      alt="Lead process"
                    />
                  </p>
                </div>
        </div>
      </div>
  );
}
