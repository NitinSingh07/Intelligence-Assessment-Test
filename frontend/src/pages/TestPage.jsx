import React from "react";
import {
  FaLaptopCode,
  FaBook,
  FaPencilAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

const TestPage = () => {
  // Array of test data for different classes
  const classTests = [
    {
      classNumber: 9,
      icon: FaLaptopCode,
      title: "Coding Foundations Test",
      description:
        "This test is designed for Class 9 students, focusing on foundational coding skills and logic building.",
    },
    {
      classNumber: 10,
      icon: FaBook,
      title: "Science Mastery Test",
      description:
        "This test covers Class 10 science topics, aiming to assess students' understanding of core scientific principles.",
    },
    {
      classNumber: 11,
      icon: FaPencilAlt,
      title: "Mathematics Skills Test",
      description:
        "Tailored for Class 11 students, this test evaluates mathematical problem-solving skills and concepts.",
    },
    {
      classNumber: 12,
      icon: FaChalkboardTeacher,
      title: "Comprehensive Knowledge Test",
      description:
        "Aimed at Class 12 students, this test assesses overall knowledge across various subjects in preparation for exams.",
    },
  ];

  return (
    <div className="bg-purple-50 min-h-screen py-10">
      {/* Heading Section */}
      <div className="p-4 mb-6 flex justify-center">
        <h2 className="text-4xl font-extrabold text-purple-800 tracking-wide">
          Schedule Your Test
        </h2>
      </div>

      {/* Test Cards */}
      <div className="space-y-8 p-4">
        {classTests.map((test, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-purple-600 transition-transform transform "
          >
            {/* Class Section */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-purple-100">
              <span className="text-lg font-semibold text-purple-800">
                Class
              </span>
              <span className="text-3xl font-extrabold bg-purple-600 text-white p-4 rounded-full ">
                {test.classNumber}
              </span>
            </div>

            {/* Test Information */}
            <div className="flex-1 p-6">
              {/* Class Icon and Test Info */}
              <div className="flex items-center mb-4">
                <test.icon className="text-purple-600 text-5xl mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {test.title}
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {test.description}
              </p>
              <button className="bg-purple-600 text-white hover:bg-purple-700 transition-transform transform hover:scale-105 py-2 px-4 rounded-lg shadow-md hover:shadow-xl">
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
