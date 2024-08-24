import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800 mb-4">About Us</h1>
          <p className="text-lg text-purple-600">
            Welcome to Cograd, the leading platform for online assessments and
            evaluations.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-4xl font-semibold text-purple-800 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700">
            Our journey began with a simple idea: to create an accessible and
            efficient platform for online assessments. We realized the need for
            a tool that would streamline the evaluation process for both
            educators and students. Since then, we've grown into a leading
            provider of online assessment solutions, serving thousands of users
            globally.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold text-purple-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Our mission is to empower educational institutions and organizations
            with cutting-edge tools for online assessments. We aim to provide a
            platform that is not only user-friendly but also adaptable to the
            needs of diverse educational settings. By leveraging technology, we
            strive to enhance the learning and evaluation experience for
            everyone involved.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="bg-purple-100 py-8 px-6 rounded-lg mb-12">
          <h2 className="text-4xl font-semibold text-purple-800 mb-6">
            Our Values
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p className="text-lg text-gray-800">
                Integrity: We operate with transparency and honesty in all our
                interactions.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p className="text-lg text-gray-800">
                Innovation: We continuously seek new ways to enhance our
                platform and services.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-400 text-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p className="text-lg text-gray-800">
                Customer Focus: Our users are at the heart of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <h2 className="text-4xl font-semibold text-purple-800 mb-6">
            Meet the Team
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* Team Member 1 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src="/team-member-1.jpg"
                  alt="Team Member 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Himanshu Chaurasia
                  </h3>
                  <p className="text-gray-600">CEO & Founder</p>
                  <p className="mt-4 text-gray-700">
                    Himanshu is the visionary behind Cograd, bringing years of
                    experience in the tech industry and a passion for education.
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="w-full md:w-1/3 p-4 ">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src="/team-member-2.jpg"
                  alt="Team Member 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Bharat Achyuta
                  </h3>
                  <p className="text-gray-600">Web Developer</p>
                  <p className="mt-4 text-gray-700">
                    Bharat leads our tech team with expertise in software
                    development and a keen eye for innovation.
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src="/team-member-3.jpg"
                  alt="Team Member 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Nitin Pratap Singh
                  </h3>
                  <p className="text-gray-600">Lead Designer</p>
                  <p className="mt-4 text-gray-700">
                    Nitin ensures our platform is user-friendly and visually
                    appealing, with a background in UX/UI design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
