import React from "react";

const Services = () => {
  return (
    <div className="bg-purple-50 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold leading-8 text-purple-700">
            Our Services
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Empower Assessments with Cogard
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            At Cograd, we’re revolutionizing online assessments by leveraging
            advanced technology to deliver seamless, secure, and efficient
            testing solutions. Our platform ensures a fair and transparent
            evaluation process for all users.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-6 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative p-6 bg-white shadow-xl rounded-lg">
              <div className="absolute left-6 top-[-1.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                Seamless Test Creation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Easily create and manage online assessments with our intuitive
                platform. Customize your tests, set time limits, and deploy them
                effortlessly to evaluate candidates efficiently.
              </dd>
            </div>
            <div className="relative p-6 bg-white shadow-xl rounded-lg">
              <div className="absolute left-6 top-[-1.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                Secure Data Handling
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our platform uses advanced encryption to ensure that all test
                data and user information are securely handled. Rest assured
                that your data is protected and confidential.
              </dd>
            </div>
            <div className="relative p-6 bg-white shadow-xl rounded-lg">
              <div className="absolute left-6 top-[-1.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                Real-Time Analytics
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Access detailed analytics and performance metrics for each
                assessment. Track progress, analyze results, and gain insights
                to improve future evaluations.
              </dd>
            </div>
            <div className="relative p-6 bg-white shadow-xl rounded-lg">
              <div className="absolute left-6 top-[-1.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                User-Friendly Interface
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our platform is designed with users in mind, offering a
                straightforward and intuitive interface for both test creators
                and takers. Enjoy a smooth experience from start to finish.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
