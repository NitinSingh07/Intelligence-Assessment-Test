import React from "react";
import {
  FaLaptopCode,
  FaBook,
  FaPencilAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

const Home = () => {
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
    <div className="bg-gray-50 min-h-screen">
      {/* Heading Section */}
      <div className="bg-white p-4 rounded-b-2xl shadow-lg mb-8 flex justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Schedule Test</h2>
      </div>

      {/* Test Cards */}
      <div className="space-y-8 p-2">
        {classTests.map((test, index) => (
          <div key={index} className="flex items-center">
            {/* Class Section */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-3">
              <span className="text-lg font-semibold text-gray-700">Class</span>
              <span className="text-md font-bold bg-[#79e93d] text-white p-3 rounded-full">
                {test.classNumber}
              </span>
            </div>

            {/* Test Information */}
            <div className="ml-6 bg-white rounded-lg shadow-lg p-6 flex-1 border-l-4 border-blue-500 flex items-start">
              {/* Class Icon and Test Info */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center mb-4">
                  <test.icon className="text-[#456789] text-4xl mr-6" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {test.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {test.description}
                </p>
                <button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 py-2 px-4 ml-4 rounded-l-2xl shadow-md hover:shadow-lg">
                  Start Test
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
