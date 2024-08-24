import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-purple-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 bg-purple-200 dark:bg-purple-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 -mt-10 lg:-mt-16">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-purple-300 dark:text-purple-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50 0,0 100,0 50,100 0,100"></polygon>
          </svg>

          <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-purple-900 dark:text-white sm:text-5xl md:text-6xl leading-tight mb-6">
                <span className="block xl:inline mt-8">
                  {" "}
                  {/* Adjusted margin-top */}
                  Enhance Your Cognitive Abilities
                </span>{" "}
                <span className="block text-purple-400 xl:inline">
                  with Our Comprehensive Tests
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Take our expert-designed intelligence assessment tests to gain
                instant insights. Discover your strengths, enhance your
                cognitive skills, and track your progress over time.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow-lg">
                  <Link
                    to="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="rounded-md shadow-lg">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-800 bg-purple-200 hover:bg-purple-300 transition duration-300 ease-in-out transform hover:scale-105 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/hero.jpg"
          alt="Intelligence Test Background"
        />
      </div>
    </div>
  );
};

export default HeroSection;
