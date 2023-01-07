import {
  BoltIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "Competitive rates",
    description:
      "LeadPro Media stands out among other companies in the industry due to our unwavering commitment to delivering results for our clients.",
    icon: CalculatorIcon,
  },
  {
    name: "No hidden fees",
    description:
      "LeadPro Media is committed to transparency and honesty in all of our business dealings. That's why we have a no hidden fees policy - we believe that our clients deserve to know exactly what they are paying for.",
      icon: CurrencyDollarIcon,
  },
  {
    name: "We move fast",
    description:
      "At LeadPro Media, we understand that time is of the essence when it comes to generating leads and increasing revenue. That's why we pride ourselves on our fast and efficient work ethic. When you partner with us, you can trust that we will get to work immediately, utilizing advanced marketing strategies and techniques.",
    icon: BoltIcon,
  },
  {
    name: "Mobile advertising",
    description:
      "At LeadPro Media, we have a deep understanding and extensive experience in mobile advertising. We know that an increasing number of people are accessing the internet and making purchases on their mobile devices, and we have the expertise to effectively reach and convert these potential customers.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-semibold leading-8 text-indigo-600">
            Welcome to LeadPro Media 
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to acquire more customers
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-md leading-7 text-gray-600">
          At LeadPro Media, we specialize in helping businesses generate more leads and increase their revenue. We understand the importance of attracting potential customers and converting them into paying clients. That's why we offer a range of services, including email marketing, social media advertising, and content marketing, all designed to drive traffic to your website and convert visitors into leads. Our team of experts has a wealth of experience in lead generation and knows how to effectively reach and persuade potential clients. Trust LeadPro Media to help your company achieve its growth goals and maximize its earning potential.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


